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

export async function POST(request) {
  try {
    const { action, ...params } = await request.json();

    switch (action) {
      case 'updateBudget':
        // Mettre à jour le budget quotidien
        const currentStatus = await redis.get('game:roue:status') || {};
        const updatedStatus = {
          ...currentStatus,
          dailyBudget: params.dailyBudget !== undefined ? params.dailyBudget : 50
        };
        await redis.set('game:roue:status', updatedStatus);
        
        return NextResponse.json({ 
          success: true, 
          message: 'Budget mis à jour',
          newBudget: params.dailyBudget 
        });

      case 'resetDaily':
        // Réinitialiser le budget du jour
        const today = getParisDate();
        await redis.del(`budget:${today}`);
        
        // Supprimer aussi toutes les participations du jour
        const keys = await redis.keys(`participation:${today}:*`);
        if (keys.length > 0) {
          await Promise.all(keys.map(key => redis.del(key)));
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Budget du jour réinitialisé' 
        });

      case 'deleteWinner':
        // Supprimer un gagnant spécifique
        if (!params.date || params.winnerIndex === undefined) {
          return NextResponse.json({ 
            success: false, 
            error: 'Paramètres manquants' 
          }, { status: 400 });
        }

        // Récupérer les données du jour
        const budgetData = await redis.get(`budget:${params.date}`);
        
        if (!budgetData || !budgetData.winners) {
          return NextResponse.json({ 
            success: false, 
            error: 'Aucune donnée trouvée' 
          }, { status: 404 });
        }

        // Vérifier que l'index est valide
        if (params.winnerIndex < 0 || params.winnerIndex >= budgetData.winners.length) {
          return NextResponse.json({ 
            success: false, 
            error: 'Index invalide' 
          }, { status: 400 });
        }

        // Récupérer le gagnant à supprimer
        const winnerToDelete = budgetData.winners[params.winnerIndex];
        const amountToRefund = parseInt(winnerToDelete.amount.replace('€', ''));

        // Supprimer le gagnant de la liste
        budgetData.winners.splice(params.winnerIndex, 1);

        // Recalculer le budget dépensé
        budgetData.spent = Math.max(0, budgetData.spent - amountToRefund);

        // Sauvegarder les modifications
        await redis.set(`budget:${params.date}`, budgetData);

        // Si c'est aujourd'hui, supprimer aussi les clés de participation
        const todayDate = getParisDate();
        if (params.date === todayDate) {
          // Supprimer la participation par pseudo
          await redis.del(`participation:${todayDate}:pseudo:${winnerToDelete.pseudo.toLowerCase()}`);
          // Supprimer la participation par IP si elle existe
          if (winnerToDelete.ip) {
            await redis.del(`participation:${todayDate}:ip:${winnerToDelete.ip}`);
          }
        }

        return NextResponse.json({ 
          success: true, 
          message: 'Gagnant supprimé avec succès',
          refundedAmount: amountToRefund
        });

      case 'toggleGame':
        // Activer/désactiver le jeu
        const status = await redis.get('game:roue:status') || {};
        status.enabled = params.enabled !== false;
        await redis.set('game:roue:status', status);
        
        return NextResponse.json({ 
          success: true, 
          message: status.enabled ? 'Jeu activé' : 'Jeu désactivé',
          enabled: status.enabled
        });

      case 'clearAll':
        // Effacer toutes les données (attention !)
        if (params.confirm !== true) {
          return NextResponse.json({ 
            success: false, 
            error: 'Confirmation requise' 
          }, { status: 400 });
        }
        
        // Effacer toutes les clés liées au jeu
        const allKeys = await redis.keys('budget:*');
        const participationKeys = await redis.keys('participation:*');
        const gameKeys = ['game:roue:status'];
        
        const keysToDelete = [...allKeys, ...participationKeys, ...gameKeys];
        
        if (keysToDelete.length > 0) {
          await Promise.all(keysToDelete.map(key => redis.del(key)));
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Toutes les données ont été effacées',
          deletedKeys: keysToDelete.length
        });

      default:
        return NextResponse.json({ 
          success: false, 
          error: 'Action inconnue' 
        }, { status: 400 });
    }

  } catch (error) {
    console.error('Erreur admin:', error);
    return NextResponse.json({
      success: false,
      error: 'Erreur serveur'
    }, { status: 500 });
  }
}