import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET(request, { params }) {
  try {
    const result = await sql`
      SELECT * FROM articles WHERE id = ${params.id}
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    return NextResponse.json(result.rows[0])
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const { searchParams } = new URL(request.url)
  const password = searchParams.get('password')

  if (password !== 'rounders2024') {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    await sql`DELETE FROM articles WHERE id = ${params.id}`
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}