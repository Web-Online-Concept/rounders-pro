import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// GET - Récupérer tous les pronos classiques
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = searchParams.get('limit') || 50

    let query
    if (status && status !== 'all') {
      query = sql`
        SELECT * FROM pronos_classiques 
        WHERE status = ${status}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `
    } else {
      query = sql`
        SELECT * FROM pronos_classiques 
        ORDER BY created_at DESC
        LIMIT ${limit}
      `
    }

    const result = await query

    // Calculer les statistiques
    const stats = await sql`
      SELECT 
        COUNT(*) as total,
        COUNT(CASE WHEN status = 'won' THEN 1 END) as won,
        COUNT(CASE WHEN status = 'lost' THEN 1 END) as lost,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending,
        COALESCE(SUM(CASE WHEN status = 'won' THEN actual_win - stake ELSE 0 END), 0) as total_profit,
        COALESCE(SUM(CASE WHEN status = 'lost' THEN stake ELSE 0 END), 0) as total_loss,
        COALESCE(SUM(stake), 0) as total_staked
      FROM pronos_classiques
    `

    return NextResponse.json({
      pronos: result.rows,
      stats: stats.rows[0]
    })

  } catch (error) {
    console.error('Erreur lors de la récupération des pronos:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la récupération des données' 
    }, { status: 500 })
  }
}

// POST - Créer un nouveau prono
export async function POST(request) {
  try {
    const body = await request.json()
    const { pronos, stake, bookmaker, notes, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Calculer la cote combinée
    const combinedOdds = pronos.reduce((acc, p) => acc * parseFloat(p.odds), 1)
    const potentialWin = stake * combinedOdds
    const type = pronos.length === 1 ? 'simple' : 'combined'

    // Insérer le nouveau prono
    const result = await sql`
      INSERT INTO pronos_classiques (
        type,
        pronos,
        combined_odds,
        stake,
        potential_win,
        bookmaker,
        notes,
        status
      )
      VALUES (
        ${type},
        ${JSON.stringify(pronos)},
        ${combinedOdds},
        ${stake},
        ${potentialWin},
        ${bookmaker},
        ${notes || null},
        'pending'
      )
      RETURNING *
    `

    return NextResponse.json(result.rows[0])

  } catch (error) {
    console.error('Erreur lors de la création du prono:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la création' 
    }, { status: 500 })
  }
}

// PUT - Valider un prono (gagné/perdu)
export async function PUT(request) {
  try {
    const body = await request.json()
    const { pronoId, won, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Récupérer le prono
    const pronoResult = await sql`
      SELECT * FROM pronos_classiques WHERE id = ${pronoId}
    `

    if (pronoResult.rows.length === 0) {
      return NextResponse.json({ 
        error: 'Prono non trouvé' 
      }, { status: 404 })
    }

    const prono = pronoResult.rows[0]
    const newStatus = won ? 'won' : 'lost'
    const actualWin = won ? prono.potential_win : 0

    // Mettre à jour le prono
    await sql`
      UPDATE pronos_classiques 
      SET 
        status = ${newStatus},
        actual_win = ${actualWin},
        validated_at = NOW()
      WHERE id = ${pronoId}
    `

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur lors de la validation du prono:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la validation' 
    }, { status: 500 })
  }
}