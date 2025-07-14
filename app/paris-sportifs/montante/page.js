'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { storage } from '../utils/storage'

export default function MontantePage() {
  const [sessions, setSessions] = useState([])
  const [currentSession, setCurrentSession] = useState(null)
  const [baseStake, setBaseStake] = useState(10)
  const [targetProfit, setTargetProfit] = useState(100)
  const [currentStep, setCurrentStep] = useState(1)
  
  // Charger les données au montage
  useEffect(() => {
    const savedSessions = storage.get('montante_sessions') || []
    setSessions(savedSessions)
  }, [])

  const startNewSession = () => {
    const newSession = {
      id: Date.now(),
      date: new Date().toISOString(),
      baseStake,
      targetProfit,
      bets: [],
      status: 'active',
      totalProfit: 0
    }
    setCurrentSession(newSession)
    setCurrentStep(1)
  }

  const calculateNextStake = () => {
    // Logique simplifiée de la montante
    const totalLoss = currentSession.bets
      .filter(bet => !bet.won)
      .reduce((sum, bet) => sum + bet.stake, 0)
    
    const remainingTarget = targetProfit - currentSession.totalProfit
    const nextStake = (totalLoss + remainingTarget) / 2 // Exemple de calcul
    
    return Math.max(baseStake, Math.ceil(nextStake))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Gestion de Montante
            </h1>
            <Link 
              href="/paris-sportifs" 
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour au menu
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Configuration */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mise de base (€)
                  </label>
                  <input
                    type="number"
                    value={baseStake}
                    onChange={(e) => setBaseStake(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Objectif de gain (€)
                  </label>
                  <input
                    type="number"
                    value={targetProfit}
                    onChange={(e) => setTargetProfit(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={startNewSession}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                  disabled={currentSession?.status === 'active'}
                >
                  Nouvelle session
                </button>
              </div>
            </div>

            {/* Statistiques */}
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Statistiques</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sessions totales:</span>
                  <span className="font-medium">{sessions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taux de réussite:</span>
                  <span className="font-medium">
                    {sessions.length > 0 
                      ? `${Math.round(sessions.filter(s => s.status === 'won').length / sessions.length * 100)}%`
                      : '-'
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Profit total:</span>
                  <span className="font-medium text-green-600">
                    {sessions.reduce((sum, s) => sum + s.totalProfit, 0).toFixed(2)}€
                </span>
                </div>
              </div>
            </div>
          </div>

          {/* Session active */}
          <div className="lg:col-span-2">
            {currentSession ? (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Session active</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progression</span>
                    <span className="text-sm font-medium">
                      {currentSession.totalProfit.toFixed(2)}€ / {targetProfit}€
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (currentSession.totalProfit / targetProfit) * 100)}%` }}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded p-4 mb-4">
                  <h3 className="font-medium mb-2">Prochaine mise recommandée</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {calculateNextStake()}€
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Étape {currentStep}
                  </p>
                </div>

                {/* Actions pour enregistrer un pari */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700">
                    Paris gagné
                  </button>
                  <button className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700">
                    Paris perdu
                  </button>
                </div>

                {/* Historique des paris de la session */}
                {currentSession.bets.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Historique de la session</h3>
                    <div className="space-y-2">
                      {currentSession.bets.map((bet, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b">
                          <span className="text-sm">Étape {index + 1}</span>
                          <span className="text-sm font-medium">{bet.stake}€</span>
                          <span className={`text-sm ${bet.won ? 'text-green-600' : 'text-red-600'}`}>
                            {bet.won ? 'Gagné' : 'Perdu'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-500 mb-4">
                  Aucune session active. Configurez les paramètres et démarrez une nouvelle session.
                </p>
                <button
                  onClick={startNewSession}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Démarrer une session
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}