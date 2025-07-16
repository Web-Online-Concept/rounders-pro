import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

// DELETE - Supprimer un prono
export async function DELETE(request, { params }) {
  try {
    const pronoId = params.id
    const { searchParams } = new URL(request.url)
    const password = searchParams.get('password')

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Supprimer le prono
    await sql`
      DELETE FROM pronos_classiques WHERE id = ${pronoId}
    `

    return NextResponse.json({ 
      success: true,
      message: 'Prono supprimé avec succès' 
    })

  } catch (error) {
    console.error('Erreur lors de la suppression du prono:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la suppression' 
    }, { status: 500 })
  }
}

// PUT - Modifier un prono (notes, bookmaker, etc.)
export async function PUT(request, { params }) {
  try {
    const pronoId = params.id
    const body = await request.json()
    const { notes, bookmaker, password } = body

    // Vérifier le mot de passe
    if (password !== 'rounders2024') {
      return NextResponse.json({ 
        error: 'Non autorisé' 
      }, { status: 401 })
    }

    // Mettre à jour le prono
    await sql`
      UPDATE pronos_classiques 
      SET 
        notes = ${notes || null},
        bookmaker = ${bookmaker || null}
      WHERE id = ${pronoId}
    `

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur lors de la modification du prono:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de la modification' 
    }, { status: 500 })
  }
}