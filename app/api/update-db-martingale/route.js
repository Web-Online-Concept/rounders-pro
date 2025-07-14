import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Créer la table martingales
    await sql`
      CREATE TABLE IF NOT EXISTS martingales (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        initial_stake DECIMAL(10, 2) NOT NULL,
        target_profit DECIMAL(10, 2) NOT NULL,
        total_invested DECIMAL(10, 2) DEFAULT 0,
        total_won DECIMAL(10, 2) DEFAULT 0,
        net_profit DECIMAL(10, 2) DEFAULT 0,
        status VARCHAR(50) DEFAULT 'active',
        start_date TIMESTAMP DEFAULT NOW(),
        end_date TIMESTAMP
      )
    `

    // Créer la table paliers_martingale
    await sql`
      CREATE TABLE IF NOT EXISTS paliers_martingale (
        id SERIAL PRIMARY KEY,
        martingale_id INTEGER REFERENCES martingales(id) ON DELETE CASCADE,
        number INTEGER NOT NULL,
        stake DECIMAL(10, 2) NOT NULL,
        combined_odds DECIMAL(10, 3) NOT NULL,
        potential_win DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        date TIMESTAMP DEFAULT NOW(),
        bookmaker VARCHAR(255)
      )
    `

    // Créer la table pronos_martingale
    await sql`
      CREATE TABLE IF NOT EXISTS pronos_martingale (
        id SERIAL PRIMARY KEY,
        palier_id INTEGER REFERENCES paliers_martingale(id) ON DELETE CASCADE,
        sport VARCHAR(255),
        match VARCHAR(255),
        bet VARCHAR(255),
        odds DECIMAL(10, 3)
      )
    `

    return NextResponse.json({ 
      message: 'Tables martingale créées avec succès' 
    })

  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la création des tables',
      details: error.message 
    }, { status: 500 })
  }
}