import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// GET - Récupérer les détails d'une martingale spécifique
export async function GET(request, { params }) {
  try {
    const martingaleId = params.id

    // Récupérer la martingale
    const martingaleResult = await sql`
      SELECT * FROM martingales 
      WHERE id = ${martingaleId}
    `

    if (martingaleResult.rows.length === 0) {
      return NextResponse.json({ 
        error: 'Martingale non trouvée' 
      }, { status: 404 })
    }

    const martingale = martingaleResult.rows[0]

    // Récupérer les paliers
    const paliers = await sql`
      SELECT * FROM paliers_martingale 
      WHERE martingale_id = ${martingaleId}
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

    const martingaleWithDetails = {
      ...martingale,
      paliers: paliersWithPronos
    }

    return NextResponse.json(martingaleWithDetails)

  } catch (error) {
    console.error('Erreur lors de la récupération de la martingale:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la récupération des données' 
    }, { status: 500 })
  }
}

// DELETE - Supprimer une martingale
export async function DELETE(request, { params }) {
  try {
    const martingaleId = params.id
    const { searchParams } = new URL(request.url)
    const password = searchParams.get('password')

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Supprimer en cascade : pronos -> paliers -> martingale
    // D'abord récupérer les paliers
    const paliers = await sql`
      SELECT id FROM paliers_martingale WHERE martingale_id = ${martingaleId}
    `

    // Supprimer les pronos de chaque palier
    for (const palier of paliers.rows) {
      await sql`
        DELETE FROM pronos_martingale WHERE palier_id = ${palier.id}
      `
    }

    // Supprimer les paliers
    await sql`
      DELETE FROM paliers_martingale WHERE martingale_id = ${martingaleId}
    `

    // Supprimer la martingale
    await sql`
      DELETE FROM martingales WHERE id = ${martingaleId}
    `

    return NextResponse.json({ 
      success: true,
      message: 'Martingale supprimée avec succès' 
    })

  } catch (error) {
    console.error('Erreur lors de la suppression de la martingale:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la suppression' 
    }, { status: 500 })
  }
}