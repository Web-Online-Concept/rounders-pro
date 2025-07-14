import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Ajouter la colonne bookmaker à la table paliers
    await sql`
      ALTER TABLE paliers 
      ADD COLUMN IF NOT EXISTS bookmaker VARCHAR(100)
    `

    return NextResponse.json({ 
      message: 'Base de données mise à jour avec succès' 
    }, { status: 200 })

  } catch (error) {
    console.error('Erreur lors de la mise à jour de la base de données:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la mise à jour',
      details: error.message 
    }, { status: 500 })
  }
}