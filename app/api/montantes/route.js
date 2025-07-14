import { createPool } from '@vercel/postgres'
import { NextResponse } from 'next/server'

const pool = createPool({
  connectionString: process.env.PARIS_SPORTIFS_POSTGRES_URL
})
const sql = pool.sql

// GET - Récupérer toutes les montantes
export async function GET() {
  try {
    // Récupérer la montante active
    const activeMontante = await sql`
      SELECT * FROM montantes 
      WHERE status = 'active' 
      LIMIT 1
    `

    // Si une montante active existe, récupérer ses paliers et pronos
    let activeWithDetails = null
    if (activeMontante.rows.length > 0) {
      const montante = activeMontante.rows[0]
      
      // Récupérer les paliers
      const paliers = await sql`
        SELECT * FROM paliers 
        WHERE montante_id = ${montante.id}
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

      activeWithDetails = {
        ...montante,
        paliers: paliersWithPronos
      }
    }

    // Récupérer les montantes archivées
    const archivedMontantes = await sql`
      SELECT * FROM montantes 
      WHERE status != 'active'
      ORDER BY end_date DESC
    `

    return NextResponse.json({
      active: activeWithDetails,
      archived: archivedMontantes.rows
    })

  } catch (error) {
    console.error('Erreur lors de la récupération des montantes:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la récupération des données' 
    }, { status: 500 })
  }
}

// POST - Créer une nouvelle montante
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, initialStake, targetAmount, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Insérer la nouvelle montante
    const result = await sql`
      INSERT INTO montantes (
        name, 
        initial_stake, 
        target_amount, 
        current_amount, 
        status, 
        start_date
      )
      VALUES (
        ${name}, 
        ${initialStake}, 
        ${targetAmount}, 
        ${initialStake}, 
        'active', 
        NOW()
      )
      RETURNING *
    `

    return NextResponse.json(result.rows[0])

  } catch (error) {
    console.error('Erreur lors de la création de la montante:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la création' 
    }, { status: 500 })
  }
}