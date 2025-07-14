import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// POST - Ajouter un nouveau palier
export async function POST(request) {
  try {
    const body = await request.json()
    const { montanteId, pronos, currentAmount, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Calculer la cote combinée
    const combinedOdds = pronos.reduce((acc, p) => acc * parseFloat(p.odds || 1), 1)
    const potentialWin = currentAmount * combinedOdds

    // Récupérer le numéro du prochain palier
    const lastPalier = await sql`
      SELECT MAX(number) as max_number 
      FROM paliers 
      WHERE montante_id = ${montanteId}
    `
    const nextNumber = (lastPalier.rows[0].max_number || 0) + 1

    // Insérer le palier
    const palierResult = await sql`
      INSERT INTO paliers (
        montante_id, 
        number, 
        stake, 
        combined_odds, 
        potential_win, 
        status, 
        date
      )
      VALUES (
        ${montanteId}, 
        ${nextNumber}, 
        ${currentAmount}, 
        ${combinedOdds}, 
        ${potentialWin}, 
        'pending', 
        NOW()
      )
      RETURNING *
    `

    const palierId = palierResult.rows[0].id

    // Insérer les pronos
    for (const prono of pronos) {
      if (prono.odds) {
        await sql`
          INSERT INTO pronos (palier_id, sport, match, bet, odds)
          VALUES (${palierId}, ${prono.sport}, ${prono.match}, ${prono.bet}, ${prono.odds})
        `
      }
    }

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
    const { palierId, won, montanteId, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Mettre à jour le statut du palier
    await sql`
      UPDATE paliers 
      SET status = ${won ? 'won' : 'lost'} 
      WHERE id = ${palierId}
    `

    if (won) {
      // Récupérer le gain potentiel
      const palier = await sql`
        SELECT potential_win FROM paliers WHERE id = ${palierId}
      `
      const newAmount = palier.rows[0].potential_win

      // Récupérer la montante pour vérifier l'objectif
      const montante = await sql`
        SELECT target_amount FROM montantes WHERE id = ${montanteId}
      `
      const targetAmount = montante.rows[0].target_amount

      if (newAmount >= targetAmount) {
        // Objectif atteint - archiver la montante
        await sql`
          UPDATE montantes 
          SET status = 'completed', 
              current_amount = ${newAmount},
              final_amount = ${newAmount},
              end_date = NOW()
          WHERE id = ${montanteId}
        `
      } else {
        // Continuer la montante
        await sql`
          UPDATE montantes 
          SET current_amount = ${newAmount}
          WHERE id = ${montanteId}
        `
      }
    } else {
      // Montante perdue - archiver
      await sql`
        UPDATE montantes 
        SET status = 'lost', 
            final_amount = 0,
            end_date = NOW()
        WHERE id = ${montanteId}
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