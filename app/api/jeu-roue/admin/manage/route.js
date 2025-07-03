import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { cookies } from 'next/headers';

const redis = Redis.fromEnv();

// Obtenir la date de Paris (pas UTC)
function getParisDate() {
  const parisDate = new Date().toLocaleString('en-CA', { 
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split(',')[0];
  
  return parisDate; // Format: YYYY-MM-DD
}

// Vérifier l'authentification admin
async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin-token');
  return !!token;
}

// GET - Récupérer l'état du jeu et les stats
export async function GET() {
  try {
    if (!await checkAuth()) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 401 }
      );
    }

    // Récupérer le statut du jeu
    const status = await redis.get('game:roue:status') || {
      dailyBudget: 0,
      mode: 'all',
      probabilities: {
        "0": 0.60,
        "1": 0.20,
        "2": 0.10,
        "3": 0.05,
        "4": 0.025,
        "5": 0.015,
        "10": 0.008,
        "50": 0.002
      }
    };

    // Récupérer le budget du jour
    const today = getParisDate();
    let budgetData = await redis.get(`budget:${today}`);
    
    // Gérer l'ancien format (nombre simple) et le nouveau format (objet)
    if (typeof budgetData === 'number') {
      budgetData = { spent: budgetData, winners: [] };
    } else if (!budgetData) {
      budgetData = { spent: 0, winners: [] };
    }
    
    const remainingBudget = Math.max(0, status.dailyBudget - budgetData.spent);

    // Récupérer tous les gagnants (non masqués)
    const allWinners = [];
    
    // Gagnants d'aujourd'hui
    if (budgetData.winners && budgetData.winners.length > 0) {
      budgetData.winners.forEach(winner => {
        allWinners.push({
          ...winner,
          date: today,
          pseudo: winner.pseudo, // Pseudo complet
          paid: winner.paid || false,
          paidAt: winner.paidAt || null
        });
      });
    }

    // Récupérer les gagnants des 7 derniers jours
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleString('en-CA', { 
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).split(',')[0];
      
      const dayData = await redis.get(`budget:${dateStr}`);
      
      if (dayData && dayData.winners) {
        dayData.winners.forEach(winner => {
          allWinners.push({
            ...winner,
            date: dateStr,
            pseudo: winner.pseudo, // Pseudo complet
            paid: winner.paid || false,
            paidAt: winner.paidAt || null
          });
        });
      }
    }

    // Stats globales
    const totalDistributed = allWinners.reduce((sum, w) => sum + w.amount, 0);
    const totalWinners = allWinners.filter(w => w.amount > 0).length;

    return NextResponse.json({
      success: true,
      status,
      remainingBudget,
      todayBudget: budgetData,
      allWinners,
      stats: {
        totalDistributed,
        totalWinners,
        averageWin: totalWinners > 0 ? (totalDistributed / totalWinners).toFixed(2) : 0
      }
    });

  } catch (error) {
    console.error('Erreur GET admin:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// POST - Modifier les paramètres du jeu
export async function POST(request) {
  try {
    if (!await checkAuth()) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const data = await request.json();
    const { action, ...params } = data;

    switch (action) {
      case 'update-budget': {
        // Modifier le budget
        const { budget } = params;
        if (budget === undefined || budget === null || budget < 0) {
          return NextResponse.json(
            { success: false, error: 'Budget invalide' },
            { status: 400 }
          );
        }

        const status = await redis.get('game:roue:status') || {};
        status.dailyBudget = budget;
        await redis.set('game:roue:status', status);

        // Nouveau jeu = remettre spent à 0 mais garder les winners
        const today = getParisDate();
        let budgetData = await redis.get(`budget:${today}`);
        
        if (budgetData) {
          // On garde les winners mais on remet spent à 0
          budgetData.spent = 0;
          await redis.set(`budget:${today}`, budgetData);
        }

        return NextResponse.json({
          success: true,
          dailyBudget: budget,
          message: `Nouveau jeu lancé avec ${budget}€ !`
        });
      }

      case 'update-probabilities': {
        // Modifier les probabilités
        const { probabilities } = params;
        
        // Vérifier que la somme fait 1
        const sum = Object.values(probabilities).reduce((a, b) => a + b, 0);
        if (Math.abs(sum - 1) > 0.001) {
          return NextResponse.json(
            { success: false, error: 'La somme des probabilités doit faire 100%' },
            { status: 400 }
          );
        }

        const status = await redis.get('game:roue:status') || {};
        status.probabilities = probabilities;
        await redis.set('game:roue:status', status);

        return NextResponse.json({
          success: true,
          probabilities,
          message: 'Probabilités mises à jour'
        });
      }

      case 'mark-paid': {
        // Marquer un gagnant comme payé
        const { date, pseudo, time } = params;
        
        const dayData = await redis.get(`budget:${date}`);
        if (!dayData || !dayData.winners) {
          return NextResponse.json(
            { success: false, error: 'Gagnant introuvable' },
            { status: 404 }
          );
        }

        // Trouver et mettre à jour le gagnant
        const updatedWinners = dayData.winners.map(winner => {
          if (winner.pseudo === pseudo && winner.time === time) {
            return {
              ...winner,
              paid: true,
              paidAt: new Date().toISOString()
            };
          }
          return winner;
        });

        // Sauvegarder
        await redis.set(`budget:${date}`, {
          ...dayData,
          winners: updatedWinners
        });

        return NextResponse.json({
          success: true,
          message: 'Paiement marqué'
        });
      }

      case 'export-winners': {
        // Exporter les gagnants pour paiement
        const { startDate, endDate } = params;
        const winners = [];

        // Récupérer les gagnants entre les dates
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          const dateStr = d.toLocaleString('en-CA', { 
            timeZone: 'Europe/Paris',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).split(',')[0];
          
          const dayData = await redis.get(`budget:${dateStr}`);
          
          if (dayData && dayData.winners) {
            dayData.winners
              .filter(w => w.amount > 0)
              .forEach(winner => {
                winners.push({
                  date: dateStr,
                  pseudo: winner.pseudo,
                  amount: winner.amount,
                  time: winner.time,
                  paid: winner.paid || false,
                  paidAt: winner.paidAt || null
                });
              });
          }
        }

        return NextResponse.json({
          success: true,
          winners,
          total: winners.reduce((sum, w) => sum + w.amount, 0),
          count: winners.length,
          unpaidTotal: winners.filter(w => !w.paid).reduce((sum, w) => sum + w.amount, 0),
          unpaidCount: winners.filter(w => !w.paid).length
        });
      }

      default:
        return NextResponse.json(
          { success: false, error: 'Action invalide' },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error('Erreur POST admin:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}