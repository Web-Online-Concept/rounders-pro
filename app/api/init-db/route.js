import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Créer la table montantes si elle n'existe pas
    await sql`
      CREATE TABLE IF NOT EXISTS montantes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        initial_stake DECIMAL(10, 2) NOT NULL,
        target_amount DECIMAL(10, 2) NOT NULL,
        current_amount DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) NOT NULL,
        start_date TIMESTAMP NOT NULL,
        end_date TIMESTAMP,
        final_amount DECIMAL(10, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    // Créer la table paliers
    await sql`
      CREATE TABLE IF NOT EXISTS paliers (
        id SERIAL PRIMARY KEY,
        montante_id INTEGER REFERENCES montantes(id),
        number INTEGER NOT NULL,
        stake DECIMAL(10, 2) NOT NULL,
        combined_odds DECIMAL(10, 3) NOT NULL,
        potential_win DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) NOT NULL,
        date TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    // Créer la table pronos
    await sql`
      CREATE TABLE IF NOT EXISTS pronos (
        id SERIAL PRIMARY KEY,
        palier_id INTEGER REFERENCES paliers(id),
        sport VARCHAR(100),
        match VARCHAR(255),
        bet VARCHAR(255),
        odds DECIMAL(10, 3) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    return NextResponse.json({ 
      message: 'Tables créées avec succès' 
    }, { status: 200 })

  } catch (error) {
    console.error('Erreur lors de la création des tables:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la création des tables',
      details: error.message 
    }, { status: 500 })
  }
}