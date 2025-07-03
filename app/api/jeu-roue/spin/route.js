import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

const redis = Redis.fromEnv();

// Obtenir la date de Paris (pas UTC)
function getParisDate() {
  // Obtenir la date actuelle en Europe/Paris
  const parisDate = new Date().toLocaleString('en-CA', { 
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split(',')[0];
  
  return parisDate; // Format: YYYY-MM-DD
}

// Obtenir l'IP du client
function getClientIp() {
  const headersList = headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return headersList.get('x-real-ip') || 'unknown';
}

export async function POST(request) {
  try {
    const { pseudo } = await request.json();
    const clientIp = getClientIp();

    // Validation
    if (!pseudo || pseudo.trim().length < 3) {
      return NextResponse.json({
        success: false,
        error: 'Pseudo invalide'
      }, { status: 400 });
    }

    // Vérifier le statut du jeu pour récupérer le budget
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

    // Vérifier le budget (SEUL critère pour jouer)
    const today = getParisDate();
    let todayBudget = await redis.get(`budget:${today}`);
    
    // Gérer l'ancien format
    if (typeof todayBudget === 'number') {
      todayBudget = { spent: todayBudget, winners: [] };
    } else if (!todayBudget) {
      todayBudget = { spent: 0, winners: [] };
    }
    
    const remainingBudget = status.dailyBudget - todayBudget.spent;

    if (remainingBudget <= 0) {
      return NextResponse.json({
        success: false,
        error: 'Budget épuisé pour aujourd\'hui'
      }, { status: 400 });
    }

    // Vérifier si l'IP a déjà joué aujourd'hui
    const ipParticipationKey = `participation:${today}:ip:${clientIp}`;
    const ipHasPlayed = await redis.get(ipParticipationKey);
    
    // Vérifier si le pseudo a déjà joué aujourd'hui
    const pseudoParticipationKey = `participation:${today}:pseudo:${pseudo.toLowerCase()}`;
    const pseudoHasPlayed = await redis.get(pseudoParticipationKey);
    
    // Vérifier aussi dans la liste des gagnants du jour (par IP OU pseudo)
    const hasWonToday = todayBudget.winners && todayBudget.winners.some(
      w => w.pseudo.toLowerCase() === pseudo.toLowerCase() || w.ip === clientIp
    );
    
    if (ipHasPlayed || pseudoHasPlayed || hasWonToday) {
      return NextResponse.json({
        success: false,
        error: 'Vous avez déjà joué aujourd\'hui. Revenez demain !'
      }, { status: 400 });
    }

    // Calculer le résultat avec probabilités ajustées
    const result = calculateResult(status.probabilities, remainingBudget);

    // Enregistrer les participations (IP ET pseudo séparément)
    await redis.set(ipParticipationKey, true, { ex: 86400 }); // Expire après 24h
    await redis.set(pseudoParticipationKey, true, { ex: 86400 }); // Expire après 24h

    // Mettre à jour le budget
    // Ajouter le nouveau gagnant
    if (result.value > 0) {
      todayBudget.winners.push({
        pseudo: pseudo,
        amount: result.value,
        time: new Date().toLocaleTimeString('fr-FR', { 
          hour: '2-digit', 
          minute: '2-digit',
          timeZone: 'Europe/Paris'
        }),
        ip: clientIp
      });
    }
    
    todayBudget.spent += result.value;
    await redis.set(`budget:${today}`, todayBudget);

    return NextResponse.json({
      success: true,
      result: {
        value: result.value,
        label: result.label,
        index: result.index
      },
      remainingBudget: status.dailyBudget - todayBudget.spent
    });

  } catch (error) {
    console.error('Erreur spin:', error);
    return NextResponse.json({
      success: false,
      error: 'Erreur serveur'
    }, { status: 500 });
  }
}

function calculateResult(probabilities, remainingBudget) {
  const segments = [
    { value: 0, label: '0€' },
    { value: 1, label: '1€' },
    { value: 2, label: '2€' },
    { value: 3, label: '3€' },
    { value: 4, label: '4€' },
    { value: 5, label: '5€' },
    { value: 10, label: '10€' },
    { value: 50, label: '50€' }
  ];

  // Ajuster les probabilités si le budget restant est faible
  let adjustedProbs = { ...probabilities };
  
  // Si budget < 50€, pas de gros lot
  if (remainingBudget < 50) {
    adjustedProbs['50'] = 0;
  }
  
  // Si budget < 10€, limiter les gains
  if (remainingBudget < 10) {
    adjustedProbs['10'] = 0;
    adjustedProbs['50'] = 0;
  }

  // Augmenter les chances de 0€ si budget faible
  if (remainingBudget < 20) {
    const reduction = 0.1;
    adjustedProbs['0'] += reduction;
    adjustedProbs['1'] *= (1 - reduction);
    adjustedProbs['2'] *= (1 - reduction);
  }

  // Normaliser les probabilités
  const total = Object.values(adjustedProbs).reduce((sum, p) => sum + p, 0);
  Object.keys(adjustedProbs).forEach(key => {
    adjustedProbs[key] /= total;
  });

  // Tirer au sort
  const random = Math.random();
  let cumulative = 0;
  let selectedIndex = 0;

  for (let i = 0; i < segments.length; i++) {
    cumulative += adjustedProbs[segments[i].value.toString()];
    if (random < cumulative) {
      selectedIndex = i;
      break;
    }
  }

  return {
    ...segments[selectedIndex],
    index: selectedIndex
  };
}