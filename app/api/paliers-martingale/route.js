import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// POST - Ajouter un nouveau palier
export async function POST(request) {
  try {
    const body = await request.json()
    const { martingaleId, pronos, stake, bookmaker, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Calculer la cote combinée
    const combinedOdds = pronos.reduce((acc, p) => acc * parseFloat(p.odds || 1), 1)
    const potentialWin = stake * combinedOdds

    // Récupérer le numéro du prochain palier
    const lastPalier = await sql`
      SELECT MAX(number) as max_number 
      FROM paliers_martingale 
      WHERE martingale_id = ${martingaleId}
    `
    const nextNumber = (lastPalier.rows[0].max_number || 0) + 1

    // Insérer le palier
    const palierResult = await sql`
      INSERT INTO paliers_martingale (
        martingale_id, 
        number, 
        stake, 
        combined_odds, 
        potential_win, 
        status, 
        date,
        bookmaker
      )
      VALUES (
        ${martingaleId}, 
        ${nextNumber}, 
        ${stake}, 
        ${combinedOdds}, 
        ${potentialWin}, 
        'pending', 
        NOW(),
        ${bookmaker || null}
      )
      RETURNING *
    `

    const palierId = palierResult.rows[0].id

    // Insérer les pronos
    for (const prono of pronos) {
      if (prono.odds) {
        await sql`
          INSERT INTO pronos_martingale (palier_id, sport, match, bet, odds)
          VALUES (${palierId}, ${prono.sport}, ${prono.match}, ${prono.bet}, ${prono.odds})
        `
      }
    }

    // Mettre à jour le total investi
    await sql`
      UPDATE martingales 
      SET total_invested = total_invested + ${stake}
      WHERE id = ${martingaleId}
    `

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur lors de l\'ajout du palier:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de l\'ajout du palier' 
    }, { status: 500 })
  }
}

// PUT - Valider un palier (gagné ou perdu)
export async function PUT(request) {
  try {
    const body = await request.json()
    const { palierId, won, martingaleId, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Mettre à jour le statut du palier
    await sql`
      UPDATE paliers_martingale 
      SET status = ${won ? 'won' : 'lost'} 
      WHERE id = ${palierId}
    `

    // Récupérer les infos du palier
    const palier = await sql`
      SELECT stake, potential_win FROM paliers_martingale WHERE id = ${palierId}
    `
    const stake = parseFloat(palier.rows[0].stake)
    const potentialWin = parseFloat(palier.rows[0].potential_win)

    if (won) {
      // Ajouter au total gagné et calculer le nouveau profit net
      await sql`
        UPDATE martingales 
        SET total_won = total_won + ${potentialWin},
            net_profit = (total_won + ${potentialWin}) - total_invested
        WHERE id = ${martingaleId}
      `

      // Vérifier si l'objectif est atteint
      const martingale = await sql`
        SELECT target_profit, net_profit FROM martingales WHERE id = ${martingaleId}
      `
      const targetProfit = parseFloat(martingale.rows[0].target_profit)
      const newNetProfit = parseFloat(martingale.rows[0].net_profit)

      if (newNetProfit >= targetProfit) {
        // Objectif atteint - terminer la martingale
        await sql`
          UPDATE martingales 
          SET status = 'completed',
              end_date = NOW()
          WHERE id = ${martingaleId}
        `
      }
    } else {
      // Palier perdu - juste mettre à jour le profit net
      await sql`
        UPDATE martingales 
        SET net_profit = total_won - total_invested
        WHERE id = ${martingaleId}
      `
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur lors de la validation du palier:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la validation' 
    }, { status: 500 })
  }
}