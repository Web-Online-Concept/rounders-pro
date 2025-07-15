'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ParisSporifsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  
  const tools = [
    {
      id: 'montante',
      title: 'Nos Montantes',
      description: 'Toutes nos montantes et résultats',
      icon: '📈',
      path: '/paris-sportifs/montante',
      available: true
    },
    {
      id: 'martingale',
      title: 'Nos Martingales',
      description: 'Toutes nos martingales et résultats',
      icon: '🎯',
      path: '/paris-sportifs/martingale',
      available: true
    }
  ]

  const handleAuthentication = () => {
    // Mot de passe en dur pour l'instant - à remplacer par une solution plus sécurisée
    if (password === 'rounders2024') {
      setIsAuthenticated(true)
      setShowPasswordModal(false)
      setPassword('')
      // Stocker dans localStorage pour persister entre les pages
      if (typeof window !== 'undefined') {
        localStorage.setItem('rounders_auth', 'true')
      }
    } else {
      alert('Mot de passe incorrect')
    }
  }

  // Vérifier l'authentification au chargement
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('rounders_auth')
      if (auth === 'true') {
        setIsAuthenticated(true)
      }
    }
  }, [])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('rounders_auth')
      setIsAuthenticated(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
  {/* Header */}
  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 space-y-3 sm:space-y-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center flex-1">
          Nos Paris Sportifs
        </h1>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-green-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mode édition activé
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowPasswordModal(true)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors text-sm flex items-center"
            >
              🔒 Tipsters
            </button>
          )}
        </div>
      </div>
    </div>
  </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {tools.map((tool) => (
              tool.available ? (
                <Link
                  key={tool.id}
                  href={tool.path}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden block"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl sm:text-4xl">{tool.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {tool.description}
                    </p>
                  </div>
                  <div className="bg-gray-50 px-4 sm:px-6 py-2 sm:py-3">
                    <span className="text-blue-600 text-xs sm:text-sm hover:text-blue-800 flex items-center">
                      Accéder à nos pronos et résultats
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ) : (
                <div
                  key={tool.id}
                  className="bg-white rounded-lg shadow overflow-hidden opacity-75"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl sm:text-4xl">{tool.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {tool.description}
                    </p>
                  </div>
                  <div className="bg-gray-50 px-4 sm:px-6 py-2 sm:py-3">
                    <span className="text-gray-500 text-xs sm:text-sm flex items-center">
                      En attente
                    </span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Password Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Accès au mode édition</h3>
              <p className="text-gray-600 mb-4">
                Entrez le mot de passe pour accéder aux fonctionnalités de modification.
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAuthentication()}
                placeholder="Mot de passe"
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowPasswordModal(false)
                    setPassword('')
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAuthentication}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}