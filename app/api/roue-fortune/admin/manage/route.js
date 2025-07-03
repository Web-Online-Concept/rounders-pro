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
          dailyBudget: params.dailyBudget || 50
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