import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// GET - Récupérer toutes les martingales
export async function GET() {
  try {
    // Récupérer la martingale active
    const activeMartingale = await sql`
      SELECT * FROM martingales 
      WHERE status = 'active' 
      LIMIT 1
    `

    // Si une martingale active existe, récupérer ses paliers et pronos
    let activeWithDetails = null
    if (activeMartingale.rows.length > 0) {
      const martingale = activeMartingale.rows[0]
      
      // Récupérer les paliers
      const paliers = await sql`
        SELECT * FROM paliers_martingale 
        WHERE martingale_id = ${martingale.id}
        ORDER BY number ASC
      `

      // Pour chaque palier, récupérer les pronos
      const paliersWithPronos = await Promise.all(
        paliers.rows.map(async (palier) => {
          const pronos = await sql`
            SELECT * FROM pronos_martingale 
            WHERE palier_id = ${palier.id}
          `
          return {
            ...palier,
            pronos: pronos.rows
          }
        })
      )

      activeWithDetails = {
        ...martingale,
        paliers: paliersWithPronos
      }
    }

    // Récupérer les martingales archivées
    const archivedMartingales = await sql`
      SELECT * FROM martingales 
      WHERE status != 'active'
      ORDER BY end_date DESC
    `

    return NextResponse.json({
      active: activeWithDetails,
      archived: archivedMartingales.rows
    })

  } catch (error) {
    console.error('Erreur lors de la récupération des martingales:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la récupération des données' 
    }, { status: 500 })
  }
}

// POST - Créer une nouvelle martingale
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, initialStake, targetProfit, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Insérer la nouvelle martingale
    const result = await sql`
      INSERT INTO martingales (
        name, 
        initial_stake, 
        target_profit,
        total_invested,
        total_won,
        net_profit,
        status, 
        start_date
      )
      VALUES (
        ${name}, 
        ${initialStake}, 
        ${targetProfit},
        0,
        0,
        0,
        'active', 
        NOW()
      )
      RETURNING *
    `

    return NextResponse.json(result.rows[0])

  } catch (error) {
    console.error('Erreur lors de la création de la martingale:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la création' 
    }, { status: 500 })
  }
}

// PUT - Modifier une martingale (titre ou abandon)
export async function PUT(request) {
  try {
    const body = await request.json()
    const { martingaleId, name, abandon, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    if (abandon) {
      // Abandonner la martingale
      await sql`
        UPDATE martingales 
        SET status = 'abandoned',
            end_date = NOW()
        WHERE id = ${martingaleId}
      `
    } else if (name) {
      // Mettre à jour le nom
      await sql`
        UPDATE martingales 
        SET name = ${name}
        WHERE id = ${martingaleId}
      `
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur lors de la modification de la martingale:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la modification' 
    }, { status: 500 })
  }
}