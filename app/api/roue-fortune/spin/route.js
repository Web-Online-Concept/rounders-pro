import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

const redis = Redis.fromEnv();

// Obtenir la date de Paris
function getParisDate() {
  const parisDate = new Date().toLocaleString('en-CA', { 
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split(',')[0];
  
  return parisDate;
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
        error: 'Pseudo invalide (minimum 3 caractères)'
      }, { status: 400 });
    }

    // Vérifier le statut du jeu
    const status = await redis.get('game:roue:status') || {
      dailyBudget: 50,
      probabilities: {
        "0": 0.60,
        "1": 0.20,
        "3": 0.10,
        "5": 0.05,
        "10": 0.04,
        "50": 0.01
      }
    };

    // Vérifier le budget du jour
    const today = getParisDate();
    let todayBudget = await redis.get(`budget:${today}`);
    
    if (!todayBudget) {
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
    
    // Vérifier aussi dans la liste des gagnants du jour
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

    // VÉRIFICATION CRITIQUE : Log pour debug
    console.log('Résultat tiré:', result);

    // Enregistrer les participations
    await redis.set(ipParticipationKey, true, { ex: 86400 }); // 24h
    await redis.set(pseudoParticipationKey, true, { ex: 86400 }); // 24h

    // Mettre à jour le budget et ajouter le gagnant
    if (result.value > 0) {
      todayBudget.winners.push({
        pseudo: pseudo,
        amount: result.value + '€',
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
        index: result.index,
        segmentAngle: result.segmentAngle // Ajout pour debug
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
  // SEGMENTS DANS L'ORDRE EXACT DE LA ROUE (0° = 3 heures)
  // La roue commence à droite (3h) et tourne dans le sens horaire
  const segments = [
    { value: 0, label: '0€', index: 0 },    // 0° - 36°
    { value: 5, label: '5€', index: 1 },    // 36° - 72°
    { value: 0, label: '0€', index: 2 },    // 72° - 108°
    { value: 1, label: '1€', index: 3 },    // 108° - 144°
    { value: 0, label: '0€', index: 4 },    // 144° - 180°
    { value: 3, label: '3€', index: 5 },    // 180° - 216°
    { value: 0, label: '0€', index: 6 },    // 216° - 252°
    { value: 50, label: '50€', index: 7 },  // 252° - 288°
    { value: 0, label: '0€', index: 8 },    // 288° - 324°
    { value: 10, label: '10€', index: 9 }   // 324° - 360°
  ];

  // Ajuster les probabilités selon le budget
  let adjustedProbs = { ...probabilities };
  
  // PROTECTION CRITIQUE : Si budget < 50€, pas de gros lot possible !
  if (remainingBudget < 50) {
    adjustedProbs['50'] = 0;
  }
  
  // Si budget < 10€, limiter à 10€ max
  if (remainingBudget < 10) {
    adjustedProbs['10'] = 0;
    adjustedProbs['50'] = 0;
  }

  // Si budget < 5€, limiter à 5€ max
  if (remainingBudget < 5) {
    adjustedProbs['5'] = 0;
    adjustedProbs['10'] = 0;
    adjustedProbs['50'] = 0;
  }

  // Si budget < 3€, limiter à 3€ max
  if (remainingBudget < 3) {
    adjustedProbs['3'] = 0;
    adjustedProbs['5'] = 0;
    adjustedProbs['10'] = 0;
    adjustedProbs['50'] = 0;
  }

  // Augmenter les chances de 0€ si budget faible
  if (remainingBudget < 20) {
    const reduction = 0.2;
    adjustedProbs['0'] = (adjustedProbs['0'] || 0.6) + reduction;
    // Réduire proportionnellement les autres
    Object.keys(adjustedProbs).forEach(key => {
      if (key !== '0') {
        adjustedProbs[key] *= (1 - reduction);
      }
    });
  }

  // Normaliser les probabilités pour qu'elles totalisent 1
  const total = Object.values(adjustedProbs).reduce((sum, p) => sum + p, 0);
  Object.keys(adjustedProbs).forEach(key => {
    adjustedProbs[key] /= total;
  });

  // Tirer au sort
  const random = Math.random();
  let cumulative = 0;
  let selectedValue = 0;
  
  // D'abord, sélectionner la valeur gagnée
  for (const [value, probability] of Object.entries(adjustedProbs)) {
    cumulative += probability;
    if (random < cumulative) {
      selectedValue = parseInt(value);
      break;
    }
  }

  // Ensuite, trouver un segment avec cette valeur
  const possibleSegments = segments.filter(s => s.value === selectedValue);
  const selectedSegment = possibleSegments[Math.floor(Math.random() * possibleSegments.length)];

  // Calculer l'angle exact du centre du segment
  const segmentAngle = 36; // 360 / 10 segments
  const centerAngle = selectedSegment.index * segmentAngle + (segmentAngle / 2);

  return {
    ...selectedSegment,
    segmentAngle: centerAngle
  };
}