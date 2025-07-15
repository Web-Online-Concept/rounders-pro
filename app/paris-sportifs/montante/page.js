'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function MontantePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeMontante, setActiveMontante] = useState(null)
  const [archivedMontantes, setArchivedMontantes] = useState([])
  const [selectedArchivedMontante, setSelectedArchivedMontante] = useState(null)
  const [showNewMontante, setShowNewMontante] = useState(false)
  const [showAddPalier, setShowAddPalier] = useState(false)
  const [loading, setLoading] = useState(true)
  const [editingTitle, setEditingTitle] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  
  // Formulaire nouvelle montante
  const [montanteName, setMontanteName] = useState('')
  const [initialStake, setInitialStake] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  
  // Formulaire nouveau palier
  const [pronos, setPronos] = useState([{ sport: '', match: '', bet: '', odds: '' }])
  const [selectedBookmaker, setSelectedBookmaker] = useState('')

  const bookmakers = [
    'Betclic', 'Winamax', 'Unibet', 'PMU', 'Parions Sport', 
    'Zebet', 'Netbet', 'Betway', 'Bwin', 'Stake', 'PS3838'
  ]

  // Vérifier l'authentification et charger les données
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

  // Charger les données depuis l'API
  const loadData = async () => {
    try {
      const response = await fetch('/api/montantes')
      if (response.ok) {
        const data = await response.json()
        setActiveMontante(data.active)
        setArchivedMontantes(data.archived || [])
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error)
    } finally {
      setLoading(false)
    }
  }

  // Charger les données au montage
  useEffect(() => {
    loadData()
  }, [])

  // Charger les détails d'une montante archivée
  const loadArchivedMontanteDetails = async (montanteId) => {
    try {
      const response = await fetch(`/api/montantes/${montanteId}`)
      if (response.ok) {
        const data = await response.json()
        setSelectedArchivedMontante(data)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des détails:', error)
    }
  }

  // Créer une nouvelle montante
  const createMontante = async () => {
    if (!montanteName || !initialStake || !targetAmount) return

    try {
      const response = await fetch('/api/montantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: montanteName,
          initialStake: parseFloat(initialStake),
          targetAmount: parseFloat(targetAmount),
          password: 'rounders2024'
        })
      })

      if (response.ok) {
        await loadData()
        setMontanteName('')
        setInitialStake('')
        setTargetAmount('')
        setShowNewMontante(false)
        setSelectedArchivedMontante(null)  // Fermer la vue archivée
      } else {
        const error = await response.json()
        console.error('Erreur API:', error)
        alert('Erreur lors de la création de la montante: ' + (error.error || error.message || 'Erreur inconnue'))
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la création')
    }
  }

  // Modifier le titre de la montante
  const updateMontanteTitle = async () => {
    if (!newTitle || !activeMontante) return

    try {
      const response = await fetch('/api/montantes', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          montanteId: activeMontante.id,
          name: newTitle,
          password: 'rounders2024'
        })
      })

      if (response.ok) {
        await loadData()
        setEditingTitle(false)
        setNewTitle('')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la modification')
    }
  }

  // Ajouter un palier
  const addPalier = async () => {
    if (!activeMontante || pronos.some(p => !p.odds)) return

    try {
      const response = await fetch('/api/paliers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          montanteId: activeMontante.id,
          pronos: pronos.filter(p => p.odds),
          currentAmount: activeMontante.current_amount,
          bookmaker: selectedBookmaker,
          password: 'rounders2024'
        })
      })

      if (response.ok) {
        await loadData()
        setPronos([{ sport: '', match: '', bet: '', odds: '' }])
        setSelectedBookmaker('')
        setShowAddPalier(false)
      } else {
        alert('Erreur lors de l\'ajout du palier')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de l\'ajout')
    }
  }

  // Valider un palier
  const validatePalier = async (palierId, won) => {
    if (!isAuthenticated) {
      alert('Vous devez être authentifié pour modifier les données')
      return
    }

    try {
      const response = await fetch('/api/paliers', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          palierId: palierId,
          won: won,
          montanteId: activeMontante.id,
          password: 'rounders2024'
        })
      })

      if (response.ok) {
        await loadData()
      } else {
        alert('Erreur lors de la validation')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la validation')
    }
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

  // Supprimer une montante
  const deleteMontante = async (montanteId) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette montante ? Cette action est irréversible.')) {
      return
    }

    try {
      const response = await fetch(`/api/montantes/${montanteId}?password=rounders2024`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await loadData()
        setSelectedArchivedMontante(null)
        alert('Montante supprimée avec succès')
      } else {
        alert('Erreur lors de la suppression')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la suppression')
    }
  }

  // Fonction pour créer le graphique d'évolution globale
  const renderGlobalEvolutionChart = () => {
    if (archivedMontantes.length === 0) return null

    // Trier les montantes par date de fin
    const sortedMontantes = [...archivedMontantes].sort((a, b) => 
      new Date(a.end_date) - new Date(b.end_date)
    )

    // Calculer les points du graphique
    const chartData = [{ value: 0, montante: null }]
    let cumulativeProfit = 0

    sortedMontantes.forEach(montante => {
      if (montante.status === 'completed') {
        cumulativeProfit += (parseFloat(montante.final_amount) - parseFloat(montante.initial_stake))
      } else {
        cumulativeProfit -= parseFloat(montante.initial_stake)
      }
      chartData.push({ 
        value: cumulativeProfit, 
        montante: montante,
        profit: montante.status === 'completed' 
          ? (parseFloat(montante.final_amount) - parseFloat(montante.initial_stake))
          : -parseFloat(montante.initial_stake)
      })
    })

    // Dimensions du graphique
    const chartWidth = 260
    const chartHeight = 120
    const padding = 10
    const graphWidth = chartWidth - (padding * 2)
    const graphHeight = chartHeight - (padding * 2)

    // Calculer les échelles
    const maxValue = Math.max(...chartData.map(d => d.value), 0)
    const minValue = Math.min(...chartData.map(d => d.value), 0)
    const range = Math.max(Math.abs(maxValue), Math.abs(minValue)) * 1.1
    const adjustedRange = range || 100 // Valeur par défaut si range est 0

    // Créer le path de la ligne
    const points = chartData.map((data, index) => {
      const x = padding + (index / (chartData.length - 1 || 1)) * graphWidth
      const y = padding + graphHeight/2 - (data.value / adjustedRange) * (graphHeight/2)
      return `${x},${y}`
    }).join(' ')

    return (
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Évolution des résultats</h3>
        <div className="w-full overflow-x-auto">
          <svg width={chartWidth} height={chartHeight} className="min-w-[260px]">
          {/* Grille de fond */}
          {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
            <line
              key={ratio}
              x1={padding}
              y1={padding + graphHeight * ratio}
              x2={padding + graphWidth}
              y2={padding + graphHeight * ratio}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray={ratio === 0.5 ? "0" : "2,2"}
            />
          ))}
          
          {/* Indicateurs de valeur */}
          {maxValue > 0 && (
            <text x={padding + 5} y={padding + 10} className="text-xs fill-green-600 font-medium">
              +{maxValue.toFixed(0)}€
            </text>
          )}
          <text x={padding + 5} y={padding + graphHeight/2 - 2} className="text-xs fill-gray-400">
            0€
          </text>
          {minValue < 0 && (
            <text x={padding + 5} y={padding + graphHeight - 5} className="text-xs fill-red-600 font-medium">
              {minValue.toFixed(0)}€
            </text>
          )}
          
          {/* Zone positive (vert clair) */}
          <rect
            x={padding}
            y={padding}
            width={graphWidth}
            height={graphHeight/2}
            fill="#dcfce7"
            opacity="0.2"
          />
          
          {/* Zone négative (rouge clair) */}
          <rect
            x={padding}
            y={padding + graphHeight/2}
            width={graphWidth}
            height={graphHeight/2}
            fill="#fee2e2"
            opacity="0.2"
          />
          
          {/* Courbe d'évolution */}
          <polyline
            points={points}
            fill="none"
            stroke={cumulativeProfit >= 0 ? '#10b981' : '#ef4444'}
            strokeWidth="2"
          />
          
          {/* Points pour chaque montante */}
          {chartData.map((data, index) => {
            if (index === 0) return null
            const x = padding + (index / (chartData.length - 1 || 1)) * graphWidth
            const y = padding + graphHeight/2 - (data.value / adjustedRange) * (graphHeight/2)
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill={data.montante.status === 'completed' ? '#10b981' : '#ef4444'}
                  className="cursor-pointer hover:r-6 transition-all"
                  onClick={() => loadArchivedMontanteDetails(data.montante.id)}
                  onMouseEnter={(e) => e.target.setAttribute('r', '6')}
                  onMouseLeave={(e) => e.target.setAttribute('r', '4')}
                />
                <title>
                  {data.montante.name}: {data.profit > 0 ? '+' : ''}{data.profit.toFixed(2)}€
                  {'\n'}Cumulé: {data.value.toFixed(2)}€
                </title>
              </g>
            )
          })}
                  </svg>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Début</span>
          <span className={`font-medium ${cumulativeProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {cumulativeProfit >= 0 ? '+' : ''}{cumulativeProfit.toFixed(2)}€
          </span>
          <span>Maintenant</span>
        </div>
      </div>
    )
  }

  // Fonction pour créer le graphique d'évolution
  const renderEvolutionChart = (montante) => {
    if (!montante.paliers || montante.paliers.length === 0) return null

    const chartData = [{ value: parseFloat(montante.initial_stake), status: 'start' }]
    
    montante.paliers.forEach(palier => {
      if (palier.status === 'won') {
        chartData.push({ value: parseFloat(palier.potential_win), status: 'won' })
      } else if (palier.status === 'lost') {
        chartData.push({ value: 0, status: 'lost' })
      }
    })

    const maxValue = Math.max(...chartData.map(d => d.value), parseFloat(montante.target_amount))
    const chartHeight = 60
    const chartWidth = 300
    const points = chartData.map((data, index) => {
      const x = (index / (chartData.length - 1 || 1)) * chartWidth
      const y = chartHeight - (data.value / maxValue) * chartHeight
      return `${x},${y}`
    }).join(' ')

    return (
      <div className="mb-4 p-3 bg-gray-50 rounded">
        <div className="w-full overflow-x-auto">
          <svg width={chartWidth} height={chartHeight} className="min-w-[300px]">
          {/* Ligne de l'objectif */}
          <line
            x1="0"
            y1={chartHeight - (parseFloat(montante.target_amount) / maxValue) * chartHeight}
            x2={chartWidth}
            y2={chartHeight - (parseFloat(montante.target_amount) / maxValue) * chartHeight}
            stroke="#10b981"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          {/* Courbe d'évolution */}
          <polyline
            points={points}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Points */}
          {chartData.map((data, index) => {
            const x = (index / (chartData.length - 1 || 1)) * chartWidth
            const y = chartHeight - (data.value / maxValue) * chartHeight
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill={data.status === 'lost' ? '#ef4444' : data.status === 'won' ? '#10b981' : '#3b82f6'}
              />
            )
          })}
                  </svg>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Départ: {montante.initial_stake}€</span>
          <span>Objectif: {montante.target_amount}€</span>
        </div>
      </div>
    )
  }

  // Fonction pour déterminer le type de palier
  const getPalierType = (palier) => {
    const count = palier.pronos?.length || 0
    if (count === 0) return ''
    if (count === 1) return 'Simple'
    return `Combiné ${count} matchs`
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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
  {/* Header */}
  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center flex-1">
          Nos Montantes
        </h1>
        <div className="flex items-center space-x-2 sm:space-x-4">
          {isAuthenticated && (
            <>
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
            href="/paris-sportifs" 
            className="text-gray-600 hover:text-gray-900 flex items-center text-xs sm:text-sm"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline">Retour au menu</span>
            <span className="sm:hidden">Retour</span>
          </Link>
        </div>
      </div>
    </div>
  </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Sidebar - Stats et actions */}
            <div className="lg:col-span-1 order-2 lg:order-1">
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
                            return sum + (parseFloat(m.final_amount) - parseFloat(m.initial_stake))
                          }
                          return sum - parseFloat(m.initial_stake)
                        }, 0).toFixed(2)}€
                      </span>
                    </div>
                  </div>
                </div>

                {/* Graphique d'évolution globale */}
                {archivedMontantes.length > 0 && renderGlobalEvolutionChart()}

                {/* Indicateurs de performance */}
                {archivedMontantes.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 rounded p-2 text-center">
                      <span className="text-gray-600 block">Taux de réussite</span>
                      <p className="font-bold text-base sm:text-lg">
                        {Math.round((archivedMontantes.filter(m => m.status === 'completed').length / archivedMontantes.length) * 100)}%
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded p-2 text-center">
                      <span className="text-gray-600 block">ROI moyen</span>
                      <p className="font-bold text-base sm:text-lg">
                        {(archivedMontantes.reduce((sum, m) => {
                          const roi = m.status === 'completed' 
                            ? ((parseFloat(m.final_amount) - parseFloat(m.initial_stake)) / parseFloat(m.initial_stake)) * 100
                            : -100
                          return sum + roi
                        }, 0) / archivedMontantes.length).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                )}

                {/* Série en cours */}
                {archivedMontantes.length > 0 && (() => {
                  const lastMontantes = [...archivedMontantes]
                    .sort((a, b) => new Date(b.end_date) - new Date(a.end_date))
                    .slice(0, 10)
                  
                  let streak = 0
                  const lastStatus = lastMontantes[0]?.status
                  
                  for (const montante of lastMontantes) {
                    if (montante.status === lastStatus) {
                      streak++
                    } else {
                      break
                    }
                  }
                  
                  if (streak >= 2) {
                    return (
                      <div className={`mt-3 p-2 rounded text-xs ${
                        lastStatus === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        <span className="font-medium">
                          {streak} {lastStatus === 'completed' ? 'victoires' : 'défaites'} consécutives
                        </span>
                      </div>
                    )
                  }
                  return null
                })()}

                {selectedArchivedMontante && typeof selectedArchivedMontante === 'object' && (
                  <div className="mb-4 p-3 bg-blue-50 rounded text-sm">
                    <p className="text-blue-800">
                      Consultation d'une montante archivée
                    </p>
                    <button
                      onClick={() => setSelectedArchivedMontante(null)}
                      className="text-blue-600 hover:underline mt-1"
                    >
                      Retour à la vue normale
                    </button>
                  </div>
                )}
                
                {!activeMontante && isAuthenticated && !selectedArchivedMontante && (
                  <button
                    onClick={() => {
                      setSelectedArchivedMontante(null)
                      setShowNewMontante(true)
                    }}
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
                  {archivedMontantes.slice(0, 5).map(m => (
                    <div 
                      key={m.id} 
                      className="text-sm py-2 border-b cursor-pointer hover:bg-gray-50 px-2 -mx-2 rounded"
                      onClick={() => loadArchivedMontanteDetails(m.id)}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{m.name}</span>
                        <span className={m.status === 'completed' ? 'text-green-600' : 'text-red-600'}>
                          {m.status === 'completed' 
                            ? `+${(parseFloat(m.final_amount) - parseFloat(m.initial_stake)).toFixed(2)}€` 
                            : `-${m.initial_stake}€`}
                        </span>
                      </div>
                      <div className="text-gray-500 text-xs">
                        {new Date(m.end_date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
                {archivedMontantes.length > 5 && (
                  <button 
                    className="text-blue-600 text-sm mt-3 hover:underline"
                    onClick={() => setSelectedArchivedMontante('all')}
                  >
                    Voir tout l'historique ({archivedMontantes.length})
                  </button>
                )}
              </div>
            </div>

            {/* Zone principale */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Affichage de l'historique complet */}
              {selectedArchivedMontante === 'all' ? (
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                    <h2 className="text-lg sm:text-xl font-bold">Historique complet</h2>
                    <button
                      onClick={() => setSelectedArchivedMontante(null)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-3">
                    {archivedMontantes.map(m => (
                      <div 
                        key={m.id}
                        className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => loadArchivedMontanteDetails(m.id)}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start">
                          <div className="mb-2 sm:mb-0">
                            <h3 className="font-medium text-base sm:text-lg">{m.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600">
                              {new Date(m.start_date).toLocaleDateString()} - {new Date(m.end_date).toLocaleDateString()}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                              Mise initiale: {parseFloat(m.initial_stake).toFixed(2)}€ | 
                              Objectif: {parseFloat(m.target_amount).toFixed(2)}€
                            </p>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className={`inline-block px-2 py-1 rounded text-xs sm:text-sm ${
                              m.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {m.status === 'completed' ? 'Réussie' : 'Échouée'}
                            </span>
                            <p className={`mt-2 font-bold ${m.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
                              {m.status === 'completed' 
                                ? `+${(parseFloat(m.final_amount) - parseFloat(m.initial_stake)).toFixed(2)}€` 
                                : `-${parseFloat(m.initial_stake).toFixed(2)}€`}
                            </p>
                            {isAuthenticated && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  deleteMontante(m.id)
                                }}
                                className="text-red-600 hover:text-red-800 text-xs sm:text-sm mt-2"
                              >
                                Supprimer
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedArchivedMontante && typeof selectedArchivedMontante === 'object' ? (
                /* Affichage d'une montante archivée */
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <h2 className="text-lg sm:text-xl font-bold">{selectedArchivedMontante.name}</h2>
                        <span className={`inline-block px-2 py-1 rounded text-xs sm:text-sm ${
                          selectedArchivedMontante.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {selectedArchivedMontante.status === 'completed' ? 'Réussie' : 'Échouée'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1">
                        {new Date(selectedArchivedMontante.start_date).toLocaleDateString()} - 
                        {new Date(selectedArchivedMontante.end_date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {isAuthenticated && (
                        <button
                          onClick={() => deleteMontante(selectedArchivedMontante.id)}
                          className="text-red-600 hover:text-red-800 p-2"
                          title="Supprimer cette montante"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedArchivedMontante(null)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Graphique d'évolution */}
                  {renderEvolutionChart(selectedArchivedMontante)}

                  {/* Résumé final */}
                  <div className="bg-gray-50 rounded p-4 mb-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <span className="text-xs sm:text-sm text-gray-600">Mise initiale</span>
                        <p className="font-bold text-sm sm:text-base">{parseFloat(selectedArchivedMontante.initial_stake).toFixed(2)}€</p>
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm text-gray-600">Objectif</span>
                        <p className="font-bold text-sm sm:text-base">{parseFloat(selectedArchivedMontante.target_amount).toFixed(2)}€</p>
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm text-gray-600">Montant final</span>
                        <p className={`font-bold text-sm sm:text-base ${
                          selectedArchivedMontante.status === 'completed' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {parseFloat(selectedArchivedMontante.final_amount || 0).toFixed(2)}€
                        </p>
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm text-gray-600">Profit/Perte</span>
                        <p className={`font-bold text-sm sm:text-base ${
                          selectedArchivedMontante.status === 'completed' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {selectedArchivedMontante.status === 'completed' 
                            ? `+${(parseFloat(selectedArchivedMontante.final_amount) - parseFloat(selectedArchivedMontante.initial_stake)).toFixed(2)}€` 
                            : `-${parseFloat(selectedArchivedMontante.initial_stake).toFixed(2)}€`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Liste des paliers - INVERSÉE */}
                  <h3 className="font-medium mb-3">Détail des paliers</h3>
                  <div className="space-y-3">
                    {selectedArchivedMontante.paliers && [...selectedArchivedMontante.paliers].reverse().map(palier => (
                      <div key={palier.id} className="border rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                          <h3 className="font-medium text-sm sm:text-base mb-2 sm:mb-0">
                            Palier {palier.number} - {getPalierType(palier)}
                            {palier.bookmaker && (
                              <span className="ml-2 text-xs sm:text-sm text-gray-500">({palier.bookmaker})</span>
                            )}
                          </h3>
                          <div>
                            {palier.status === 'won' && (
                              <span className="text-green-600 font-medium">✓ Gagné</span>
                            )}
                            {palier.status === 'lost' && (
                              <span className="text-red-600 font-medium">✗ Perdu</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-xs sm:text-sm space-y-1">
                          {palier.pronos && palier.pronos.map((prono, idx) => (
                            <div key={idx} className="text-gray-600">
                              {prono.sport} - {prono.match} - {prono.bet} @ {prono.odds}
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-2 pt-2 border-t text-xs sm:text-sm">
                          <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                            <span>Mise: {parseFloat(palier.stake).toFixed(2)}€</span>
                            <span>Cote: {parseFloat(palier.combined_odds).toFixed(2)}</span>
                            <span className="font-medium">
                              {palier.status === 'won' 
                                ? `Gain: ${parseFloat(palier.potential_win).toFixed(2)}€`
                                : `Perte: ${parseFloat(palier.stake).toFixed(2)}€`
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeMontante ? (
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      {editingTitle && isAuthenticated ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="text-lg sm:text-xl font-bold px-2 py-1 border rounded w-full max-w-xs"
                            autoFocus
                          />
                          <button
                            onClick={updateMontanteTitle}
                            className="text-green-600 hover:text-green-700"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              setEditingTitle(false)
                              setNewTitle('')
                            }}
                            className="text-red-600 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <h2 className="text-lg sm:text-xl font-bold">{activeMontante.name}</h2>
                          {isAuthenticated && (
                            <button
                              onClick={() => {
                                setEditingTitle(true)
                                setNewTitle(activeMontante.name)
                              }}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          )}
                        </div>
                      )}
                      <p className="text-gray-600 text-sm">
                        Démarrée le {new Date(activeMontante.start_date).toLocaleDateString()}
                      </p>
                    </div>
                    {isAuthenticated && (
                      <div className="flex items-center space-x-2">
                        {/* Vérifier s'il y a un palier en attente */}
                        {activeMontante.paliers && activeMontante.paliers.some(p => p.status === 'pending') ? (
                          <div className="text-sm text-gray-500 italic">
                            Validez le palier en cours avant d'ajouter le suivant
                          </div>
                        ) : (
                          <button
                            onClick={() => setShowAddPalier(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                          >
                            Nouveau palier
                          </button>
                        )}
                        <button
                          onClick={() => deleteMontante(activeMontante.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                          title="Supprimer cette montante"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Graphique d'évolution */}
                  {renderEvolutionChart(activeMontante)}

                  {/* Progression */}
                  <div className="bg-gray-50 rounded p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progression</span>
                      <span className="text-sm font-medium">
                        {parseFloat(activeMontante.current_amount).toFixed(2)}€ / {parseFloat(activeMontante.target_amount).toFixed(2)}€
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (parseFloat(activeMontante.current_amount) / parseFloat(activeMontante.target_amount)) * 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Mise initiale: {parseFloat(activeMontante.initial_stake).toFixed(2)}€ | 
                      Multiplicateur actuel: x{(parseFloat(activeMontante.current_amount) / parseFloat(activeMontante.initial_stake)).toFixed(2)}
                    </p>
                    {activeMontante.paliers && activeMontante.paliers.some(p => p.status === 'pending') && (
                      <p className="text-sm text-blue-600 mt-2 font-medium">
                        💰 Capital actuel misé : {parseFloat(activeMontante.current_amount).toFixed(2)}€
                      </p>
                    )}
                  </div>

                  {/* Liste des paliers - INVERSÉE */}
                  <div className="space-y-3">
                    {activeMontante.paliers && [...activeMontante.paliers].reverse().map(palier => (
                      <div key={palier.id} className={`border rounded-lg p-4 ${
                        palier.status === 'pending' ? 'border-blue-400 bg-blue-50' : ''
                      }`}>
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                          <h3 className="font-medium text-sm sm:text-base mb-2 sm:mb-0">
                            Palier {palier.number} - {getPalierType(palier)}
                            {palier.bookmaker && (
                              <span className="ml-2 text-xs sm:text-sm text-gray-500">({palier.bookmaker})</span>
                            )}
                            {palier.status === 'pending' && (
                              <span className="ml-2 text-xs sm:text-sm text-blue-600 font-normal block sm:inline mt-1 sm:mt-0">⏳ En attente de validation</span>
                            )}
                          </h3>
                          <div className="flex items-center space-x-2">
                            {palier.status === 'pending' && isAuthenticated && (
                              <>
                                <button
                                  onClick={() => validatePalier(palier.id, true)}
                                  className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-green-600"
                                >
                                  Gagné
                                </button>
                                <button
                                  onClick={() => validatePalier(palier.id, false)}
                                  className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-red-600"
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
                        
                        <div className="text-xs sm:text-sm space-y-1">
                          {palier.pronos && palier.pronos.map((prono, idx) => (
                            <div key={idx} className="text-gray-600">
                              {prono.sport} - {prono.match} - {prono.bet} @ {prono.odds}
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-2 pt-2 border-t text-xs sm:text-sm">
                          <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                            <span>Mise: {parseFloat(palier.stake).toFixed(2)}€</span>
                            <span>Cote: {parseFloat(palier.combined_odds).toFixed(2)}</span>
                            <span className="font-medium">Gain potentiel: {parseFloat(palier.potential_win).toFixed(2)}€</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow p-6 sm:p-12 text-center">
                  <p className="text-gray-500 mb-4 text-sm sm:text-base">
                    Aucune montante active
                  </p>
                  {isAuthenticated && (
                    <button
                      onClick={() => {
                        setSelectedArchivedMontante(null)
                        setShowNewMontante(true)
                      }}
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto p-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl my-4 max-h-[90vh] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4">Nouveau palier</h3>
              
              {/* Sélection du bookmaker */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bookmaker</label>
                <select
                  value={selectedBookmaker}
                  onChange={(e) => setSelectedBookmaker(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionner un bookmaker</option>
                  {bookmakers.map(bm => (
                    <option key={bm} value={bm}>{bm}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {pronos.map((prono, index) => (
                  <div key={index} className="border rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-sm sm:text-base">Prono {index + 1}</h4>
                      {pronos.length > 1 && (
                        <button
                          onClick={() => removeProno(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Supprimer
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        {(parseFloat(activeMontante.current_amount) * pronos.reduce((acc, p) => acc * (parseFloat(p.odds) || 1), 1)).toFixed(2)}€
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
                    setSelectedBookmaker('')
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
      <Footer />
    </>
  )
}