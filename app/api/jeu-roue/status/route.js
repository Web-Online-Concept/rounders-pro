import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

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

export async function GET() {
  try {
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

    // Vérifier le budget du jour
    const today = getParisDate();
    let budgetData = await redis.get(`budget:${today}`);
    
    // Gérer l'ancien format (nombre) et le nouveau format (objet)
    if (typeof budgetData === 'number') {
      budgetData = { spent: budgetData, winners: [] };
    } else if (!budgetData) {
      budgetData = { spent: 0, winners: [] };
    }
    
    const remainingBudget = status.dailyBudget - budgetData.spent;
    
    // Récupérer les gagnants du jour (pseudos masqués pour la page publique)
    const todayWinners = budgetData.winners
      ? budgetData.winners
          .filter(w => w.amount > 0)
          .map(w => ({
            pseudo: w.pseudo.substring(0, 3) + '***',
            amount: w.amount + '€',
            time: w.time
          }))
      : [];

    // SIMPLIFICATION : Le jeu est actif si budget > 0
    const isActive = remainingBudget > 0;

    return NextResponse.json({
      isActive,
      remainingBudget: Math.max(0, remainingBudget),
      dailyBudget: status.dailyBudget,
      mode: status.mode,
      todayWinners,
      reason: remainingBudget <= 0 ? 'budget' : null
    });

  } catch (error) {
    console.error('Erreur status:', error);
    return NextResponse.json({
      isActive: false,
      error: 'Erreur lors de la récupération du statut'
    }, { status: 500 });
  }
}