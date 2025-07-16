'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function EditerArticlePage() {
  const router = useRouter()
  const params = useParams()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [youtubePreview, setYoutubePreview] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const categories = [
    { value: 'Paris Sportifs', label: 'Paris Sportifs' },
    { value: 'Casino', label: 'Casino' },
    { value: 'Poker', label: 'Poker' },
    { value: 'Divers', label: 'Divers' }
  ]

  // Vérifier l'authentification
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('rounders_auth')
      if (auth !== 'true') {
        router.push('/divers')
      } else {
        setIsAuthenticated(true)
      }
    }
  }, [router])

  // Charger l'article
  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch(`/api/articles/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setTitle(data.title)
          setContent(data.content)
          setCategory(data.category)
          setYoutubeUrl(data.youtube_url || '')
          if (data.youtube_id) {
            setYoutubePreview(data.youtube_id)
          }
        } else {
          alert('Article non trouvé')
          router.push('/divers')
        }
      } catch (error) {
        console.error('Erreur lors du chargement:', error)
        alert('Erreur lors du chargement')
        router.push('/divers')
      } finally {
        setLoading(false)
      }
    }

    if (isAuthenticated) {
      loadArticle()
    }
  }, [params.id, router, isAuthenticated])

  // Extraire l'ID YouTube
  const extractYouTubeId = (url) => {
    if (!url) return null
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi
    const match = regex.exec(url)
    return match ? match[1] : null
  }

  // Gérer le changement d'URL YouTube
  const handleYoutubeChange = (url) => {
    setYoutubeUrl(url)
    const id = extractYouTubeId(url)
    if (id) {
      setYoutubePreview(id)
    } else {
      setYoutubePreview(null)
    }
  }

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!title || !content || !category) {
      alert('Veuillez remplir tous les champs obligatoires')
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('/api/articles', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleId: params.id,
          title,
          content,
          category,
          youtube_url: youtubeUrl,
          password: 'rounders2024'
        })
      })

      if (response.ok) {
        router.push(`/divers/${params.id}`)
      } else {
        alert('Erreur lors de la mise à jour de l\'article')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la mise à jour')
    } finally {
      setSubmitting(false)
    }
  }

  if (!isAuthenticated || loading) {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Éditer l'article</h1>
              <Link
                href={`/divers/${params.id}`}
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour
              </Link>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
            {/* Titre */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Titre *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Titre de l'article"
                required
              />
            </div>

            {/* Catégorie */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie *
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* URL YouTube */}
            <div className="mb-6">
              <label htmlFor="youtube" className="block text-sm font-medium text-gray-700 mb-2">
                URL YouTube (optionnel)
              </label>
              <input
                type="url"
                id="youtube"
                value={youtubeUrl}
                onChange={(e) => handleYoutubeChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://www.youtube.com/watch?v=..."
              />
              
              {/* Aperçu YouTube */}
              {youtubePreview && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Aperçu :</p>
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubePreview}`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Contenu */}
            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Contenu *
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="10"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Écrivez votre article ici..."
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Vous pouvez utiliser du HTML pour formater votre texte.
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={async () => {
                  if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
                    try {
                      const response = await fetch(`/api/articles/${params.id}?password=rounders2024`, {
                        method: 'DELETE',
                      })
                      if (response.ok) {
                        router.push('/divers')
                      } else {
                        alert('Erreur lors de la suppression')
                      }
                    } catch (error) {
                      alert('Erreur lors de la suppression')
                    }
                  }
                }}
                className="px-4 py-2 text-red-600 hover:text-red-800"
              >
                Supprimer l'article
              </button>
              
              <div className="flex space-x-3">
                <Link
                  href={`/divers/${params.id}`}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Annuler
                </Link>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Mise à jour...' : 'Mettre à jour'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}