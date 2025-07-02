import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function GET() {
  try {
    // Récupérer le statut du jeu
    const status = await redis.get('game:roue:status');
    
    if (!status) {
      return NextResponse.json({
        todayWinners: [],
        reason: 'manual'
      });
    }

    // Vérifier le budget du jour
    const today = new Date().toISOString().split('T')[0];
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
            amount: w.amount,
            time: w.time
          }))
      : [];

    // Déterminer le statut réel du jeu
    let isActive = status.isActive;
    let reason = null;
    
    if (!status.isActive) {
      reason = 'manual';
    } else if (remainingBudget <= 0) {
      reason = 'budget';
      // Note: on ne change pas isActive ici, mais on indique la raison
    }

    return NextResponse.json({
      isActive,
      remainingBudget,
      dailyBudget: status.dailyBudget,
      mode: status.mode,
      todayWinners,
      reason
    });

  } catch (error) {
    console.error('Erreur status:', error);
    return NextResponse.json({
      isActive: false,
      error: 'Erreur lors de la récupération du statut'
    }, { status: 500 });
  }
}