import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// GET - Récupérer les détails d'une martingale
export async function GET(request, { params }) {
  try {
    const martingaleId = params.id

    // Récupérer la martingale
    const martingaleResult = await sql`
      SELECT * FROM martingales WHERE id = ${martingaleId}
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

    return NextResponse.json({
      ...martingale,
      paliers: paliersWithPronos
    })

  } catch (error) {
    console.error('Erreur lors de la récupération des détails:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la récupération' 
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

    // Supprimer la martingale (les paliers et pronos seront supprimés en cascade)
    await sql`
      DELETE FROM martingales WHERE id = ${martingaleId}
    `

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la suppression' 
    }, { status: 500 })
  }
}