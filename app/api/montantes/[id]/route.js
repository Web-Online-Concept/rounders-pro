import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// GET - Récupérer les détails d'une montante spécifique
export async function GET(request, { params }) {
  try {
    const montanteId = params.id

    // Récupérer la montante
    const montanteResult = await sql`
      SELECT * FROM montantes 
      WHERE id = ${montanteId}
    `

    if (montanteResult.rows.length === 0) {
      return NextResponse.json({ 
        error: 'Montante non trouvée' 
      }, { status: 404 })
    }

    const montante = montanteResult.rows[0]

    // Récupérer les paliers
    const paliers = await sql`
      SELECT * FROM paliers 
      WHERE montante_id = ${montanteId}
      ORDER BY number ASC
    `

    // Pour chaque palier, récupérer les pronos
    const paliersWithPronos = await Promise.all(
      paliers.rows.map(async (palier) => {
        const pronos = await sql`
          SELECT * FROM pronos 
          WHERE palier_id = ${palier.id}
        `
        return {
          ...palier,
          pronos: pronos.rows
        }
      })
    )

    const montanteWithDetails = {
      ...montante,
      paliers: paliersWithPronos
    }

    return NextResponse.json(montanteWithDetails)

  } catch (error) {
    console.error('Erreur lors de la récupération de la montante:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la récupération des données' 
    }, { status: 500 })
  }
}

// DELETE - Supprimer une montante
export async function DELETE(request, { params }) {
  try {
    const montanteId = params.id
    const { searchParams } = new URL(request.url)
    const password = searchParams.get('password')

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Supprimer en cascade : pronos -> paliers -> montante
    // D'abord récupérer les paliers
    const paliers = await sql`
      SELECT id FROM paliers WHERE montante_id = ${montanteId}
    `

    // Supprimer les pronos de chaque palier
    for (const palier of paliers.rows) {
      await sql`
        DELETE FROM pronos WHERE palier_id = ${palier.id}
      `
    }

    // Supprimer les paliers
    await sql`
      DELETE FROM paliers WHERE montante_id = ${montanteId}
    `

    // Supprimer la montante
    await sql`
      DELETE FROM montantes WHERE id = ${montanteId}
    `

    return NextResponse.json({ 
      success: true,
      message: 'Montante supprimée avec succès' 
    })

  } catch (error) {
    console.error('Erreur lors de la suppression de la montante:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la suppression' 
    }, { status: 500 })
  }
}