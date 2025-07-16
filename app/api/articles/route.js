import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

// Fonction pour extraire l'ID YouTube
function extractYouTubeId(url) {
  if (!url) return null
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi
  const match = regex.exec(url)
  return match ? match[1] : null
}

// Fonction pour obtenir les infos YouTube
function getYouTubeInfo(youtubeId) {
  if (!youtubeId) return {}
  
  return {
    youtube_thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
    youtube_description: ''
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const page = parseInt(searchParams.get('page')) || 1
  const limit = parseInt(searchParams.get('limit')) || 12
  const offset = (page - 1) * limit

  try {
    // Construire la requête dynamiquement
    let conditions = []
    let values = []
    let valueIndex = 1

    if (category && category !== 'all') {
      conditions.push(`category = $${valueIndex}`)
      values.push(category)
      valueIndex++
    }
    
    if (search) {
      conditions.push(`(title ILIKE $${valueIndex} OR content ILIKE $${valueIndex} OR youtube_description ILIKE $${valueIndex})`)
      values.push(`%${search}%`)
      valueIndex++
    }
    
    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''
    
    // Compter le total
    const countQuery = `SELECT COUNT(*) as total FROM articles ${whereClause}`
    const totalResult = await sql.query(countQuery, values)
    const total = parseInt(totalResult.rows[0].total)
    
    // Récupérer les articles
    values.push(limit, offset)
    const articlesQuery = `
      SELECT * FROM articles 
      ${whereClause}
      ORDER BY created_at DESC 
      LIMIT $${valueIndex} OFFSET $${valueIndex + 1}
    `
    
    const result = await sql.query(articlesQuery, values)

    return NextResponse.json({
      articles: result.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const data = await request.json()
    const { title, content, category, youtube_url, password } = data

    if (password !== 'rounders2024') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    if (!title || !content || !category) {
      return NextResponse.json({ error: 'Données manquantes' }, { status: 400 })
    }

    const youtubeId = extractYouTubeId(youtube_url)
    const youtubeInfo = getYouTubeInfo(youtubeId)

    const result = await sql`
      INSERT INTO articles (
        title, content, category, youtube_url, 
        youtube_id, youtube_thumbnail, youtube_description
      )
      VALUES (
        ${title}, 
        ${content}, 
        ${category}, 
        ${youtube_url || null},
        ${youtubeId || null},
        ${youtubeInfo.youtube_thumbnail || null},
        ${youtubeInfo.youtube_description || null}
      )
      RETURNING id
    `

    return NextResponse.json({ 
      success: true, 
      articleId: result.rows[0].id 
    })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const data = await request.json()
    const { articleId, title, content, category, youtube_url, password } = data

    if (password !== 'rounders2024') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const youtubeId = extractYouTubeId(youtube_url)
    const youtubeInfo = getYouTubeInfo(youtubeId)

    await sql`
      UPDATE articles 
      SET 
        title = ${title},
        content = ${content},
        category = ${category},
        youtube_url = ${youtube_url || null},
        youtube_id = ${youtubeId || null},
        youtube_thumbnail = ${youtubeInfo.youtube_thumbnail || null},
        youtube_description = ${youtubeInfo.youtube_description || null}
      WHERE id = ${articleId}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}