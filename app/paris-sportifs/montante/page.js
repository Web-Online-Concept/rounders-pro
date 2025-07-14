'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MontantePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeMontante, setActiveMontante] = useState(null)
  const [archivedMontantes, setArchivedMontantes] = useState([])
  const [showNewMontante, setShowNewMontante] = useState(false)
  const [showAddPalier, setShowAddPalier] = useState(false)
  
  // Formulaire nouvelle montante
  const [montanteName, setMontanteName] = useState('')
  const [initialStake, setInitialStake] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  
  // Formulaire nouveau palier
  const [pronos, setPronos] = useState([{ sport: '', match: '', bet: '', odds: '' }])

  // Vérifier l'authentification et charger les données
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Vérifier l'authentification
      const auth = localStorage.getItem('rounders_auth')
      if (auth === 'true') {
        setIsAuthenticated(true)
      }
      
      // Charger les données
      const saved = localStorage.getItem('rounders_montantes')
      if (saved) {
        const data = JSON.parse(saved)
        setActiveMontante(data.active)
        setArchivedMontantes(data.archived || [])
      }
    }
  }, [])

  // Sauvegarder les données
  const saveData = (active, archived) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('rounders_montantes', JSON.stringify({
        active: active,
        archived: archived
      }))
    }
  }

  // Créer une nouvelle montante
  const createMontante = () => {
    if (!montanteName || !initialStake || !targetAmount) return

    const newMontante = {
      id: Date.now(),
      name: montanteName,
      initialStake: parseFloat(initialStake),
      targetAmount: parseFloat(targetAmount),
      currentAmount: parseFloat(initialStake),
      paliers: [],
      status: 'active',
      startDate: new Date().toISOString()
    }

    setActiveMontante(newMontante)
    saveData(newMontante, archivedMontantes)
    
    // Reset form
    setMontanteName('')
    setInitialStake('')
    setTargetAmount('')
    setShowNewMontante(false)
  }

  // Ajouter un palier
  const addPalier = () => {
    if (!activeMontante || pronos.some(p => !p.odds)) return

    // Calculer la cote combinée
    const combinedOdds = pronos.reduce((acc, p) => acc * parseFloat(p.odds || 1), 1)
    
    const newPalier = {
      id: Date.now(),
      number: activeMontante.paliers.length + 1,
      pronos: pronos.filter(p => p.odds),
      combinedOdds: combinedOdds,
      stake: activeMontante.currentAmount,
      potentialWin: activeMontante.currentAmount * combinedOdds,
      status: 'pending',
      date: new Date().toISOString()
    }

    const updatedMontante = {
      ...activeMontante,
      paliers: [...activeMontante.paliers, newPalier]
    }

    setActiveMontante(updatedMontante)
    saveData(updatedMontante, archivedMontantes)
    
    // Reset form
    setPronos([{ sport: '', match: '', bet: '', odds: '' }])
    setShowAddPalier(false)
  }

  // Valider un palier
  const validatePalier = (palierId, won) => {
    if (!isAuthenticated) {
      alert('Vous devez être authentifié pour modifier les données')
      return
    }

    const palier = activeMontante.paliers.find(p => p.id === palierId)
    if (!palier) return

    const updatedPaliers = activeMontante.paliers.map(p => {
      if (p.id === palierId) {
        return { ...p, status: won ? 'won' : 'lost' }
      }
      return p
    })

    let updatedMontante = {
      ...activeMontante,
      paliers: updatedPaliers
    }

    if (won) {
      updatedMontante.currentAmount = palier.potentialWin
      
      // Vérifier si objectif atteint
      if (updatedMontante.currentAmount >= updatedMontante.targetAmount) {
        updatedMontante.status = 'completed'
        updatedMontante.endDate = new Date().toISOString()
        updatedMontante.finalAmount = updatedMontante.currentAmount
        
        // Archiver
        setArchivedMontantes([...archivedMontantes, updatedMontante])
        setActiveMontante(null)
        saveData(null, [...archivedMontantes, updatedMontante])
        return
      }
    } else {
      // Montante perdue
      updatedMontante.status = 'lost'
      updatedMontante.endDate = new Date().toISOString()
      updatedMontante.finalAmount = 0
      
      // Archiver
      setArchivedMontantes([...archivedMontantes, updatedMontante])
      setActiveMontante(null)
      saveData(null, [...archivedMontantes, updatedMontante])
      return
    }

    setActiveMontante(updatedMontante)
    saveData(updatedMontante, archivedMontantes)
  }

  // Ajouter un prono au formulaire
  const addProno = () => {
    setPronos([...pronos, { sport: '', match: '', bet: '', odds: '' }])
  }

  // Supprimer un prono du formulaire
  const removeProno = (index) => {
    setPronos(pronos.filter((_, i) => i !== index))
  }

  // Mettre à jour un prono
  const updateProno = (index, field, value) => {
    const updated = [...pronos]
    updated[index][field] = value
    setPronos(updated)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Gestion des Montantes
            </h1>
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <span className="text-sm text-green-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mode édition
                </span>
              )}
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
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Stats et actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Vue d'ensemble</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Montantes totales:</span>
                  <span className="font-medium">{archivedMontantes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Réussies:</span>
                  <span className="font-medium text-green-600">
                    {archivedMontantes.filter(m => m.status === 'completed').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Échouées:</span>
                  <span className="font-medium text-red-600">
                    {archivedMontantes.filter(m => m.status === 'lost').length}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit total:</span>
                    <span className="font-medium text-blue-600">
                      {archivedMontantes.reduce((sum, m) => {
                        if (m.status === 'completed') {
                          return sum + (m.finalAmount - m.initialStake)
                        }
                        return sum - m.initialStake
                      }, 0).toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>

              {!activeMontante && isAuthenticated && (
                <button
                  onClick={() => setShowNewMontante(true)}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Nouvelle montante
                </button>
              )}
              
              {!isAuthenticated && (
                <div className="text-sm text-gray-500 text-center">
                  Mode lecture seule
                </div>
              )}
            </div>

            {/* Historique récent */}
            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Historique récent</h2>
              <div className="space-y-2">
                {archivedMontantes.slice(-5).reverse().map(m => (
                  <div key={m.id} className="text-sm py-2 border-b">
                    <div className="flex justify-between">
                      <span className="font-medium">{m.name}</span>
                      <span className={m.status === 'completed' ? 'text-green-600' : 'text-red-600'}>
                        {m.status === 'completed' ? `+${(m.finalAmount - m.initialStake).toFixed(2)}€` : `-${m.initialStake}€`}
                      </span>
                    </div>
                    <div className="text-gray-500 text-xs">
                      {new Date(m.endDate).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Zone principale */}
          <div className="lg:col-span-2">
            {activeMontante ? (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold">{activeMontante.name}</h2>
                    <p className="text-gray-600 text-sm">
                      Démarrée le {new Date(activeMontante.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  {isAuthenticated && (
                    <button
                      onClick={() => setShowAddPalier(true)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Nouveau palier
                    </button>
                  )}
                </div>

                {/* Progression */}
                <div className="bg-gray-50 rounded p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progression</span>
                    <span className="text-sm font-medium">
                      {activeMontante.currentAmount.toFixed(2)}€ / {activeMontante.targetAmount}€
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (activeMontante.currentAmount / activeMontante.targetAmount) * 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Mise initiale: {activeMontante.initialStake}€ | 
                    Multiplicateur actuel: x{(activeMontante.currentAmount / activeMontante.initialStake).toFixed(2)}
                  </p>
                </div>

                {/* Liste des paliers */}
                <div className="space-y-3">
                  {activeMontante.paliers.map(palier => (
                    <div key={palier.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Palier {palier.number}</h3>
                        <div className="flex items-center space-x-2">
                          {palier.status === 'pending' && isAuthenticated && (
                            <>
                              <button
                                onClick={() => validatePalier(palier.id, true)}
                                className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                              >
                                Gagné
                              </button>
                              <button
                                onClick={() => validatePalier(palier.id, false)}
                                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                              >
                                Perdu
                              </button>
                            </>
                          )}
                          {palier.status === 'won' && (
                            <span className="text-green-600 font-medium">✓ Gagné</span>
                          )}
                          {palier.status === 'lost' && (
                            <span className="text-red-600 font-medium">✗ Perdu</span>
                          )}
                          {palier.status === 'pending' && !isAuthenticated && (
                            <span className="text-gray-500 text-sm">En attente</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-sm space-y-1">
                        {palier.pronos.map((prono, idx) => (
                          <div key={idx} className="text-gray-600">
                            {prono.sport} - {prono.match} - {prono.bet} @ {prono.odds}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-2 pt-2 border-t text-sm">
                        <div className="flex justify-between">
                          <span>Mise: {palier.stake.toFixed(2)}€</span>
                          <span>Cote: {palier.combinedOdds.toFixed(2)}</span>
                          <span className="font-medium">Gain potentiel: {palier.potentialWin.toFixed(2)}€</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-500 mb-4">
                  Aucune montante active
                </p>
                {isAuthenticated && (
                  <button
                    onClick={() => setShowNewMontante(true)}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    Démarrer une montante
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal nouvelle montante */}
      {showNewMontante && isAuthenticated && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Nouvelle montante</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de la montante
                </label>
                <input
                  type="text"
                  value={montanteName}
                  onChange={(e) => setMontanteName(e.target.value)}
                  placeholder="Ex: Montante 1"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mise initiale (€)
                </label>
                <input
                  type="number"
                  value={initialStake}
                  onChange={(e) => setInitialStake(e.target.value)}
                  placeholder="10"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Objectif (€)
                </label>
                <input
                  type="number"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  placeholder="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowNewMontante(false)
                  setMontanteName('')
                  setInitialStake('')
                  setTargetAmount('')
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={createMontante}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={!montanteName || !initialStake || !targetAmount}
              >
                Créer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal nouveau palier */}
      {showAddPalier && isAuthenticated && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl my-8">
            <h3 className="text-lg font-semibold mb-4">Nouveau palier</h3>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {pronos.map((prono, index) => (
                <div key={index} className="border rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Prono {index + 1}</h4>
                    {pronos.length > 1 && (
                      <button
                        onClick={() => removeProno(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Supprimer
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Sport</label>
                      <input
                        type="text"
                        value={prono.sport}
                        onChange={(e) => updateProno(index, 'sport', e.target.value)}
                        placeholder="Tennis"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Match</label>
                      <input
                        type="text"
                        value={prono.match}
                        onChange={(e) => updateProno(index, 'match', e.target.value)}
                        placeholder="Djokovic vs Federer"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Pari</label>
                      <input
                        type="text"
                        value={prono.bet}
                        onChange={(e) => updateProno(index, 'bet', e.target.value)}
                        placeholder="Federer gagne"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Cote</label>
                      <input
                        type="number"
                        step="0.01"
                        value={prono.odds}
                        onChange={(e) => updateProno(index, 'odds', e.target.value)}
                        placeholder="1.5"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <button
                onClick={addProno}
                className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded hover:border-gray-400"
              >
                + Ajouter un prono
              </button>
            </div>
            
            {pronos.some(p => p.odds) && (
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cote combinée:</span>
                  <span className="font-bold text-lg">
                    {pronos.reduce((acc, p) => acc * (parseFloat(p.odds) || 1), 1).toFixed(2)}
                  </span>
                </div>
                {activeMontante && (
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">Gain potentiel:</span>
                    <span className="font-bold text-lg text-green-600">
                      {(activeMontante.currentAmount * pronos.reduce((acc, p) => acc * (parseFloat(p.odds) || 1), 1)).toFixed(2)}€
                    </span>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddPalier(false)
                  setPronos([{ sport: '', match: '', bet: '', odds: '' }])
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={addPalier}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                disabled={!pronos.some(p => p.odds)}
              >
                Ajouter le palier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}