import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

// Initialiser Redis
const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

// Configuration du jeu (à déplacer dans Redis plus tard)
const GAME_CONFIG = {
  isActive: true,
  dailyBudget: 100, // Budget en euros
  remainingBudget: 100, // À gérer dynamiquement
  mode: 'all', // 'all' ou 'affiliates'
  probabilities: {
    0: 0.60,   // 60% de chances
    1: 0.20,   // 20% de chances
    2: 0.10,   // 10% de chances
    3: 0.05,   // 5% de chances
    4: 0.025,  // 2.5% de chances
    5: 0.015,  // 1.5% de chances
    10: 0.008, // 0.8% de chances
    50: 0.002  // 0.2% de chances
  }
};

// Segments de la roue
const SEGMENTS = [
  { value: 0, label: '0€' },
  { value: 1, label: '1€' },
  { value: 2, label: '2€' },
  { value: 3, label: '3€' },
  { value: 4, label: '4€' },
  { value: 5, label: '5€' },
  { value: 10, label: '10€' },
  { value: 50, label: '50€' }
];

export async function POST(request) {
  try {
    // 1. Vérifier que le jeu est actif
    const gameStatus = await redis.get('game:roue:status') || GAME_CONFIG;
    
    if (!gameStatus.isActive) {
      return Response.json({ 
        success: false, 
        error: 'Le jeu n\'est pas actif pour le moment' 
      }, { status: 400 });
    }

    // 2. Récupérer les données de la requête
    const body = await request.json();
    const { stakeUsername } = body;

    if (!stakeUsername || stakeUsername.trim().length < 3) {
      return Response.json({ 
        success: false, 
        error: 'Pseudo Stake invalide' 
      }, { status: 400 });
    }

    // 3. Récupérer l'IP du joueur
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 
               headersList.get('x-real-ip') || 
               'unknown';

    // 4. Vérifier l'anti-triche (IP + pseudo par jour)
    const today = new Date().toISOString().split('T')[0];
    const participationKey = `participation:${today}:${ip}:${stakeUsername.toLowerCase()}`;
    
    const hasPlayed = await redis.get(participationKey);
    if (hasPlayed) {
      return Response.json({ 
        success: false, 
        error: 'Vous avez déjà participé aujourd\'hui avec ce pseudo' 
      }, { status: 400 });
    }

    // 5. Vérifier le budget restant
    const budgetKey = `budget:${today}`;
    const currentBudget = await redis.get(budgetKey) || gameStatus.dailyBudget;
    
    if (currentBudget <= 0) {
      return Response.json({ 
        success: false, 
        error: 'Le budget du jour est épuisé' 
      }, { status: 400 });
    }

    // 6. Calculer le résultat avec les probabilités
    const result = calculateResult(gameStatus.probabilities, currentBudget);
    const segmentIndex = SEGMENTS.findIndex(s => s.value === result.value);

    // 7. Mettre à jour le budget si gain > 0
    if (result.value > 0) {
      const newBudget = Math.max(0, currentBudget - result.value);
      await redis.set(budgetKey, newBudget, { ex: 86400 }); // Expire après 24h
      
      // Si le budget est épuisé, désactiver le jeu
      if (newBudget === 0) {
        await redis.set('game:roue:status', { ...gameStatus, isActive: false });
      }
    }

    // 8. Enregistrer la participation
    await redis.set(participationKey, {
      timestamp: new Date().toISOString(),
      result: result.value,
      ip: ip
    }, { ex: 86400 }); // Expire après 24h

    // 9. Enregistrer le gagnant si gain > 0
    if (result.value > 0) {
      const winnersKey = `winners:${today}`;
      const winners = await redis.get(winnersKey) || [];
      
      winners.unshift({
        username: stakeUsername.substring(0, 3) + '***',
        amount: result.label,
        time: new Date().toLocaleTimeString('fr-FR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        fullUsername: stakeUsername // Pour le paiement
      });
      
      await redis.set(winnersKey, winners, { ex: 86400 * 7 }); // Garde 7 jours
    }

    // 10. Enregistrer les statistiques
    await updateStats(result.value);

    // 11. Retourner le résultat
    return Response.json({
      success: true,
      result: {
        value: result.value,
        label: result.label,
        index: segmentIndex
      },
      remainingBudget: result.value > 0 ? currentBudget - result.value : currentBudget
    });

  } catch (error) {
    console.error('Erreur dans l\'API spin:', error);
    return Response.json({ 
      success: false, 
      error: 'Une erreur est survenue' 
    }, { status: 500 });
  }
}

// Fonction pour calculer le résultat selon les probabilités
function calculateResult(probabilities, remainingBudget) {
  // Ajuster les probabilités selon le budget restant
  const adjustedProbabilities = { ...probabilities };
  
  // Si le budget est faible, réduire les chances de gros gains
  if (remainingBudget < 50) {
    adjustedProbabilities[50] = 0;
  }
  if (remainingBudget < 10) {
    adjustedProbabilities[10] = 0;
  }
  if (remainingBudget < 5) {
    adjustedProbabilities[5] = 0;
  }
  
  // Normaliser les probabilités
  const total = Object.values(adjustedProbabilities).reduce((sum, p) => sum + p, 0);
  const normalized = {};
  for (const [key, value] of Object.entries(adjustedProbabilities)) {
    normalized[key] = value / total;
  }
  
  // Tirer au sort
  const random = Math.random();
  let cumulative = 0;
  
  for (const [value, probability] of Object.entries(normalized)) {
    cumulative += probability;
    if (random <= cumulative) {
      const segmentValue = parseInt(value);
      const segment = SEGMENTS.find(s => s.value === segmentValue);
      return segment;
    }
  }
  
  // Par défaut, retourner 0€
  return SEGMENTS[0];
}

// Fonction pour mettre à jour les statistiques
async function updateStats(amount) {
  const statsKey = 'stats:global';
  const stats = await redis.get(statsKey) || {
    totalDistributed: 0,
    totalWinners: 0,
    totalPlayers: 0,
    biggestWin: 0
  };
  
  stats.totalPlayers += 1;
  
  if (amount > 0) {
    stats.totalDistributed += amount;
    stats.totalWinners += 1;
    stats.biggestWin = Math.max(stats.biggestWin, amount);
  }
  
  await redis.set(statsKey, stats);
}