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
      dailyBudget: 50, // Budget par défaut
      mode: 'all'
    };

    // Vérifier le budget du jour
    const today = getParisDate();
    let budgetData = await redis.get(`budget:${today}`);
    
    if (!budgetData) {
      budgetData = { spent: 0, winners: [] };
    }
    
    const remainingBudget = status.dailyBudget - budgetData.spent;
    
    // Le jeu est actif si budget > 0
    const isActive = remainingBudget > 0;

    return NextResponse.json({
      isActive,
      remainingBudget: Math.max(0, remainingBudget),
      dailyBudget: status.dailyBudget,
      todayWinners: budgetData.winners || []
    });

  } catch (error) {
    console.error('Erreur status:', error);
    return NextResponse.json({
      isActive: false,
      error: 'Erreur lors de la récupération du statut'
    }, { status: 500 });
  }
}