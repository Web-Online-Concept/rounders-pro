'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function NouvelArticlePage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('Divers')
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          category,
          youtube_url: youtubeUrl,
          password: 'rounders2024'
        })
      })

      if (response.ok) {
        const data = await response.json()
        router.push(`/divers/${data.articleId}`)
      } else {
        alert('Erreur lors de la création de l\'article')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la création')
    } finally {
      setSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Nouvel article</h1>
              <Link
                href="/divers"
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
            <div className="flex justify-end space-x-3">
              <Link
                href="/divers"
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Création...' : 'Créer l\'article'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}