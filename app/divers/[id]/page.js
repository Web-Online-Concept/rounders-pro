'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ArticleDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Vérifier l'authentification
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('rounders_auth')
      if (auth === 'true') {
        setIsAuthenticated(true)
      }
    }
  }, [])

  // Charger l'article
  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch(`/api/articles/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setArticle(data)
        } else {
          console.error('Article non trouvé')
        }
      } catch (error) {
        console.error('Erreur lors du chargement:', error)
      } finally {
        setLoading(false)
      }
    }

    loadArticle()
  }, [params.id])

  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-gray-500">Chargement...</div>
        </div>
        <Footer />
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <Link href="/divers" className="text-blue-600 hover:text-blue-800">
              ← Retour aux articles
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header de l'article */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Vidéo YouTube */}
            {article.youtube_id && (
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${article.youtube_id}`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={article.title}
                />
              </div>
            )}

            <div className="p-6 sm:p-8">
              {/* Métadonnées */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded ${
                  article.category === 'Paris Sportifs' ? 'bg-green-100 text-green-800' :
                  article.category === 'Casino' ? 'bg-purple-100 text-purple-800' :
                  article.category === 'Poker' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {formatDate(article.created_at)}
                </span>
                {article.updated_at !== article.created_at && (
                  <span className="text-gray-500 text-sm">
                    (Mis à jour le {formatDate(article.updated_at)})
                  </span>
                )}
              </div>

              {/* Titre */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>

              {/* Actions admin */}
              {isAuthenticated && (
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b">
                  <Link
                    href={`/divers/${article.id}/editer`}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Éditer
                  </Link>
                  <button
                    onClick={async () => {
                      if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
                        try {
                          const response = await fetch(`/api/articles/${article.id}?password=rounders2024`, {
                            method: 'DELETE',
                          })
                          if (response.ok) {
                            window.location.href = '/divers'
                          }
                        } catch (error) {
                          alert('Erreur lors de la suppression')
                        }
                      }
                    }}
                    className="flex items-center text-red-600 hover:text-red-800"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Supprimer
                  </button>
                </div>
              )}

              {/* Contenu */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Lien YouTube */}
              {article.youtube_url && (
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Voir sur YouTube :</p>
                  
                   <a href={article.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    {article.youtube_url}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/divers"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux articles
            </Link>
            
            {/* Partage réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Partager :</span>
              
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400"
                title="Partager sur Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
                title="Partager sur Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}