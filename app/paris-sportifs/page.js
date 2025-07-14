'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ParisSporifsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  
  const tools = [
    {
      id: 'montante',
      title: 'Gestion de Montante',
      description: 'Outil de suivi et calcul pour la stratégie de montante',
      icon: '📈',
      path: '/paris-sportifs/montante',
      requiresAuth: true
    },
    {
      id: 'martingale',
      title: 'Gestion de Martingale',
      description: 'Calculateur et suivi pour la stratégie de martingale',
      icon: '🎯',
      path: '/paris-sportifs/martingale',
      requiresAuth: true
    },
    {
      id: 'suivi-paris',
      title: 'Suivi des Paris',
      description: 'Enregistrement et analyse de vos paris sportifs',
      icon: '📊',
      path: '/paris-sportifs/suivi-paris',
      requiresAuth: true
    },
    {
      id: 'bankroll',
      title: 'Gestion de Bankroll',
      description: 'Suivez vos gains, pertes et l\'évolution de votre capital',
      icon: '💰',
      path: '/paris-sportifs/bankroll',
      requiresAuth: true
    },
    {
      id: 'calculateur-cotes',
      title: 'Calculateur de Cotes',
      description: 'Convertisseur et calculateur de cotes (décimales, fractionnelles, américaines)',
      icon: '🧮',
      path: '/paris-sportifs/calculateur-cotes',
      requiresAuth: false
    },
    {
      id: 'statistiques',
      title: 'Statistiques Globales',
      description: 'Vue d\'ensemble de vos performances et statistiques détaillées',
      icon: '📉',
      path: '/paris-sportifs/statistiques',
      requiresAuth: true
    }
  ]

  const handleAuthentication = () => {
    // Mot de passe en dur pour l'instant - à remplacer par une solution plus sécurisée
    if (password === 'rounders2024') {
      setIsAuthenticated(true)
      setShowPasswordModal(false)
      setPassword('')
    } else {
      alert('Mot de passe incorrect')
    }
  }

  const handleToolClick = (tool) => {
    if (tool.requiresAuth && !isAuthenticated) {
      setShowPasswordModal(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Outils Paris Sportifs
            </h1>
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <span className="text-sm text-green-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mode édition activé
                </span>
              )}
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Retour au site
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => handleToolClick(tool)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{tool.icon}</span>
                  {tool.requiresAuth && (
                    <svg 
                      className={`w-5 h-5 ${isAuthenticated ? 'text-green-500' : 'text-gray-400'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-3">
                {tool.requiresAuth && !isAuthenticated ? (
                  <button 
                    className="text-blue-600 text-sm hover:text-blue-800 flex items-center"
                    onClick={() => setShowPasswordModal(true)}
                  >
                    Déverrouiller
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <Link 
                    href={tool.path}
                    className="text-blue-600 text-sm hover:text-blue-800 flex items-center"
                  >
                    Accéder à l'outil
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            À propos de ces outils
          </h2>
          <p className="text-blue-800">
            Cette suite d'outils est conçue pour vous aider à gérer vos paris sportifs de manière professionnelle. 
            Chaque outil fonctionne de manière indépendante et sauvegarde vos données localement.
          </p>
          {!isAuthenticated && (
            <button
              onClick={() => setShowPasswordModal(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Activer le mode édition
            </button>
          )}
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
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
  )
}