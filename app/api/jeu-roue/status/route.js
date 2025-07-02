import { kv } from '@vercel/kv';

export async function GET(request) {
  try {
    // Configuration par défaut
    const defaultConfig = {
      isActive: false,
      dailyBudget: 100,
      mode: 'all'
    };

    // Récupérer la configuration depuis KV
    const gameStatus = await kv.get('game:roue:status') || defaultConfig;
    
    // Récupérer le budget du jour
    const today = new Date().toISOString().split('T')[0];
    const budgetKey = `budget:${today}`;
    const remainingBudget = await kv.get(budgetKey) || gameStatus.dailyBudget;
    
    // Récupérer les gagnants du jour
    const winnersKey = `winners:${today}`;
    const todayWinners = await kv.get(winnersKey) || [];
    
    // Formater les gagnants (sans le fullUsername pour la sécurité)
    const publicWinners = todayWinners.map(({ fullUsername, ...winner }) => winner);
    
    // Déterminer la raison si le jeu est inactif
    let reason = null;
    if (!gameStatus.isActive) {
      reason = remainingBudget <= 0 ? 'budget' : 'manual';
    }
    
    return Response.json({
      isActive: gameStatus.isActive && remainingBudget > 0,
      remainingBudget,
      dailyBudget: gameStatus.dailyBudget,
      mode: gameStatus.mode,
      todayWinners: publicWinners,
      reason
    });
    
  } catch (error) {
    console.error('Erreur dans l\'API status:', error);
    return Response.json({ 
      isActive: false,
      error: 'Erreur lors de la récupération du statut' 
    }, { status: 500 });
  }
}