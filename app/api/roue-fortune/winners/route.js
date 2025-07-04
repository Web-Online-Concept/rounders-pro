import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

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

// Formater la date en français
function formatDateFr(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '7'; // Par défaut 7 jours, mais peut être 'all'
    
    const allWinners = [];
    
    if (limit === 'all') {
      // Récupérer TOUTES les clés budget:*
      const budgetKeys = await redis.keys('budget:*');
      
      for (const key of budgetKeys) {
        const budgetData = await redis.get(key);
        const dateStr = key.replace('budget:', '');
        
        if (budgetData && budgetData.winners && budgetData.winners.length > 0) {
          const winnersWithDate = budgetData.winners.map(winner => ({
            ...winner,
            date: formatDateFr(dateStr),
            dateSort: dateStr
          }));
          
          allWinners.push(...winnersWithDate);
        }
      }
    } else {
      // Récupérer les X derniers jours
      const days = parseInt(limit);
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        const dateStr = date.toLocaleString('en-CA', { 
          timeZone: 'Europe/Paris',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).split(',')[0];
        
        const budgetData = await redis.get(`budget:${dateStr}`);
        
        if (budgetData && budgetData.winners && budgetData.winners.length > 0) {
          const winnersWithDate = budgetData.winners.map(winner => ({
            ...winner,
            date: formatDateFr(dateStr),
            dateSort: dateStr
          }));
          
          allWinners.push(...winnersWithDate);
        }
      }
    }
    
    // Trier par date décroissante
    allWinners.sort((a, b) => {
      if (a.dateSort !== b.dateSort) {
        return b.dateSort.localeCompare(a.dateSort);
      }
      return b.time.localeCompare(a.time);
    });
    
    // Enlever dateSort du résultat final
    const cleanedWinners = allWinners.map(({ dateSort, ip, ...winner }) => winner);

    return NextResponse.json({
      winners: cleanedWinners,
      total: cleanedWinners.length
    });

  } catch (error) {
    console.error('Erreur winners:', error);
    return NextResponse.json({
      winners: [],
      error: 'Erreur lors de la récupération des gagnants'
    }, { status: 500 });
  }
}