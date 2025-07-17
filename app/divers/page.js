'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DiversPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'Paris Sportifs', label: 'Paris Sportifs' },
    { value: 'Casino', label: 'Casino' },
    { value: 'Poker', label: 'Poker' },
    { value: 'Divers', label: 'Divers' }
  ]

  // Vérifier l'authentification
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('rounders_auth')
      if (auth === 'true') {
        setIsAuthenticated(true)
      }
    }
  }, [])

  // Fonction de déconnexion
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('rounders_auth')
      setIsAuthenticated(false)
    }
  }

  // Charger les articles
  const loadArticles = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: currentPage,
        limit: 12,
        category: selectedCategory
      })

      const response = await fetch(`/api/articles?${params}`)
      if (response.ok) {
        const data = await response.json()
        setArticles(data.articles)
        setTotalPages(data.pagination.totalPages)
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error)
    } finally {
      setLoading(false)
    }
  }

  // Charger les articles quand les filtres changent
  useEffect(() => {
    loadArticles()
  }, [currentPage, selectedCategory])

  // Supprimer un article
  const deleteArticle = async (articleId) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return
    }

    try {
      const response = await fetch(`/api/articles/${articleId}?password=rounders2024`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await loadArticles()
        alert('Article supprimé avec succès')
      } else {
        alert('Erreur lors de la suppression')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la suppression')
    }
  }

  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  // Extraire un résumé du contenu
  const getExcerpt = (content, maxLength = 150) => {
    const plainText = content.replace(/<[^>]*>/g, '')
    if (plainText.length <= maxLength) return plainText
    return plainText.substring(0, maxLength) + '...'
  }

  if (loading && articles.length === 0) {
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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 space-y-2 sm:space-y-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center flex-1">
                Articles & Infos diverses
              </h1>
              <div className="flex items-center space-x-2 sm:space-x-4">
                {isAuthenticated && (
                  <>
                    <Link
                      href="/divers/nouveau"
                      className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700"
                    >
                      Nouvel article
                    </Link>
                    <span className="text-xs sm:text-sm text-green-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Mode édition
                    </span>
                    <button
                      onClick={handleLogout}
                      className="text-xs sm:text-sm text-gray-600 hover:text-gray-900"
                    >
                      Déconnexion
                    </button>
                  </>
                )}
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-900 flex items-center text-xs sm:text-sm"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="hidden sm:inline">Retour à l'accueil</span>
                  <span className="sm:hidden">Retour</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-center">
              {/* Catégories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setSelectedCategory(cat.value)
                      setCurrentPage(1)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {articles.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500">Aucun article trouvé</p>
            </div>
          ) : (
            <>
              {/* Grille d'articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map(article => (
                  <div key={article.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                    {/* Miniature YouTube */}
                    {article.youtube_thumbnail && (
                      <Link href={`/divers/${article.id}`}>
                        <div className="relative aspect-video rounded-t-lg overflow-hidden bg-gray-100">
                          <img
                            src={article.youtube_thumbnail}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = `https://img.youtube.com/vi/${article.youtube_id}/hqdefault.jpg`
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-60 rounded-full p-3">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}

                    <div className="p-6">
                      {/* Catégorie */}
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded mb-2 ${
                        article.category === 'Paris Sportifs' ? 'bg-green-100 text-green-800' :
                        article.category === 'Casino' ? 'bg-purple-100 text-purple-800' :
                        article.category === 'Poker' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {article.category}
                      </span>

                      {/* Titre */}
                      <Link href={`/divers/${article.id}`}>
                        <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2">
                          {article.title}
                        </h2>
                      </Link>

                      {/* Résumé */}
                      <p className="text-gray-600 text-sm mb-4">
                        {article.youtube_description || getExcerpt(article.content)}
                      </p>

                      {/* Footer */}
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{formatDate(article.created_at)}</span>
                        <div className="flex items-center space-x-2">
                          <Link
                            href={`/divers/${article.id}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Lire plus →
                          </Link>
                          {isAuthenticated && (
                            <>
                              <Link
                                href={`/divers/${article.id}/editer`}
                                className="text-gray-600 hover:text-gray-800"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </Link>
                              <button
                                onClick={() => deleteArticle(article.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ← Précédent
                    </button>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(totalPages)].map((_, i) => {
                        const page = i + 1
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`px-3 py-1 rounded ${
                                currentPage === page
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                              }`}
                            >
                              {page}
                            </button>
                          )
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return <span key={page}>...</span>
                        }
                        return null
                      })}
                    </div>
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Suivant →
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}