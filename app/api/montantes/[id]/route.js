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