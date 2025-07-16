import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// GET - Récupérer les statistiques détaillées
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || 'all' // all, month, week

    let whereClause = ''
    if (period === 'month') {
      whereClause = "WHERE created_at >= NOW() - INTERVAL '30 days'"
    } else if (period === 'week') {
      whereClause = "WHERE created_at >= NOW() - INTERVAL '7 days'"
    }

    // Statistiques globales
    const globalStats = await sql`
      SELECT 
        COUNT(*) as total_pronos,
        COUNT(CASE WHEN status = 'won' THEN 1 END) as total_won,
        COUNT(CASE WHEN status = 'lost' THEN 1 END) as total_lost,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as total_pending,
        COALESCE(SUM(stake), 0) as total_staked,
        COALESCE(SUM(CASE WHEN status = 'won' THEN actual_win - stake ELSE 0 END), 0) as total_profit,
        COALESCE(SUM(CASE WHEN status = 'lost' THEN stake ELSE 0 END), 0) as total_loss,
        COALESCE(AVG(CASE WHEN status != 'pending' THEN combined_odds END), 0) as avg_odds
      FROM pronos_classiques
      ${whereClause}
    `

    // Statistiques par type
    const typeStats = await sql`
      SELECT 
        type,
        COUNT(*) as count,
        COUNT(CASE WHEN status = 'won' THEN 1 END) as won,
        COUNT(CASE WHEN status = 'lost' THEN 1 END) as lost,
        COALESCE(AVG(combined_odds), 0) as avg_odds
      FROM pronos_classiques
      ${whereClause}
      GROUP BY type
    `

    // Statistiques par bookmaker
    const bookmakerStats = await sql`
      SELECT 
        bookmaker,
        COUNT(*) as count,
        COUNT(CASE WHEN status = 'won' THEN 1 END) as won,
        COUNT(CASE WHEN status = 'lost' THEN 1 END) as lost
      FROM pronos_classiques
      WHERE bookmaker IS NOT NULL ${whereClause ? 'AND' + whereClause.substring(5) : ''}
      GROUP BY bookmaker
      ORDER BY count DESC
    `

    // Evolution par jour (30 derniers jours)
    const dailyEvolution = await sql`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as pronos,
        COUNT(CASE WHEN status = 'won' THEN 1 END) as won,
        COUNT(CASE WHEN status = 'lost' THEN 1 END) as lost,
        COALESCE(SUM(CASE WHEN status = 'won' THEN actual_win - stake 
                      WHEN status = 'lost' THEN -stake 
                      ELSE 0 END), 0) as daily_profit
      FROM pronos_classiques
      WHERE created_at >= NOW() - INTERVAL '30 days'
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `

    // Série en cours
    const lastPronos = await sql`
      SELECT status 
      FROM pronos_classiques 
      WHERE status != 'pending'
      ORDER BY validated_at DESC 
      LIMIT 20
    `

    let currentStreak = 0
    let streakType = null
    if (lastPronos.rows.length > 0) {
      streakType = lastPronos.rows[0].status
      for (const prono of lastPronos.rows) {
        if (prono.status === streakType) {
          currentStreak++
        } else {
          break
        }
      }
    }

    // Meilleurs et pires pronos
    const bestPronos = await sql`
      SELECT * 
      FROM pronos_classiques 
      WHERE status = 'won'
      ORDER BY (actual_win - stake) DESC 
      LIMIT 5
    `

    const worstPronos = await sql`
      SELECT * 
      FROM pronos_classiques 
      WHERE status = 'lost'
      ORDER BY stake DESC 
      LIMIT 5
    `

    return NextResponse.json({
      global: globalStats.rows[0],
      byType: typeStats.rows,
      byBookmaker: bookmakerStats.rows,
      dailyEvolution: dailyEvolution.rows,
      currentStreak: {
        type: streakType,
        count: currentStreak
      },
      bestPronos: bestPronos.rows,
      worstPronos: worstPronos.rows
    })

  } catch (error) {
    console.error('Erreur lors de la récupération des stats:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la récupération des statistiques' 
    }, { status: 500 })
  }
}