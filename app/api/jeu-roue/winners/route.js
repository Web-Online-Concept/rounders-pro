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
    const allWinners = [];
    
    // Récupérer les gagnants des 30 derniers jours
    for (let i = 0; i < 30; i++) {
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
        dayData.winners
          .filter(w => w.amount > 0)
          .forEach(winner => {
            allWinners.push({
              date: dateStr,
              pseudo: winner.pseudo.substring(0, 3) + '***', // Masquer le pseudo
              amount: winner.amount,  // Garder en nombre pour les calculs
              time: winner.time
            });
          });
      }
    }

    // Calculer les statistiques
    const totalDistributed = allWinners.reduce((sum, w) => sum + w.amount, 0);
    const totalWinners = allWinners.length;
    const biggestWin = allWinners.length > 0 ? Math.max(...allWinners.map(w => w.amount)) : 0;
    const averageWin = totalWinners > 0 ? Number((totalDistributed / totalWinners).toFixed(2)) : 0;

    return NextResponse.json({
      success: true,
      winners: allWinners,
      stats: {
        totalDistributed,
        totalWinners,
        biggestWin,
        averageWin
      }
    });

  } catch (error) {
    console.error('Erreur winners:', error);
    return NextResponse.json({
      success: false,
      winners: [],
      stats: {
        totalDistributed: 0,
        totalWinners: 0,
        biggestWin: 0,
        averageWin: 0
      }
    });
  }
}