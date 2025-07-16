'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ClassiquesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pronos, setPronos] = useState([])
  const [stats, setStats] = useState(null)
  const [selectedProno, setSelectedProno] = useState(null)
  const [showNewProno, setShowNewProno] = useState(false)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all, pending, won, lost
  const [showAllHistory, setShowAllHistory] = useState(false)
  
  // Formulaire nouveau prono
  const [pronosList, setPronosList] = useState([{ sport: '', match: '', bet: '', odds: '' }])
  const [selectedBookmaker, setSelectedBookmaker] = useState('')
  const [stake, setStake] = useState('10')
  const [notes, setNotes] = useState('')

  const bookmakers = [
    'Betclic', 'Winamax', 'Unibet', 'PMU', 'Parions Sport', 
    'Zebet', 'Netbet', 'Betway', 'Bwin', 'Stake', 'PS3838'
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

  // Charger les données depuis l'API
  const loadData = async () => {
    try {
      const response = await fetch(`/api/pronos-classiques?status=${filter}`)
      if (response.ok) {
        const data = await response.json()
        setPronos(data.pronos || [])
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error)
    } finally {
      setLoading(false)
    }
  }

  // Charger les données au montage et quand le filtre change
  useEffect(() => {
    loadData()
  }, [filter])

  // Créer un nouveau prono
  const createProno = async () => {
    if (!pronosList.some(p => p.odds) || !stake) return

    try {
      const response = await fetch('/api/pronos-classiques', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pronos: pronosList.filter(p => p.odds),
          stake: parseFloat(stake),
          bookmaker: selectedBookmaker,
          notes: notes,
          password: 'rounders2024'
        })
      })

      if (response.ok) {
        await loadData()
        setPronosList([{ sport: '', match: '', bet: '', odds: '' }])
        setSelectedBookmaker('')
        setStake('10')
        setNotes('')
        setShowNewProno(false)
      } else {
        alert('Erreur lors de la création')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la création')
    }
  }

  // Valider un prono
  const validateProno = async (pronoId, won) => {
    if (!isAuthenticated) {
      alert('Vous devez être authentifié pour modifier les données')
      return
    }

    try {
      const response = await fetch('/api/pronos-classiques', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pronoId: pronoId,
          won: won,
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

  // Supprimer un prono
  const deleteProno = async (pronoId) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce prono ?')) {
      return
    }

    try {
      const response = await fetch(`/api/pronos-classiques/${pronoId}?password=rounders2024`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await loadData()
        alert('Prono supprimé avec succès')
      } else {
        alert('Erreur lors de la suppression')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de la suppression')
    }
  }

  // Ajouter un prono au formulaire
  const addPronoToList = () => {
    setPronosList([...pronosList, { sport: '', match: '', bet: '', odds: '' }])
  }

  // Supprimer un prono du formulaire
  const removePronoFromList = (index) => {
    setPronosList(pronosList.filter((_, i) => i !== index))
  }

  // Mettre à jour un prono dans le formulaire
  const updatePronoInList = (index, field, value) => {
    const updated = [...pronosList]
    updated[index][field] = value
    setPronosList(updated)
  }

  // Fonction pour créer le graphique d'évolution
  const renderEvolutionChart = () => {
    if (!pronos || pronos.length === 0) return null

    // Filtrer les pronos validés et les trier par date
    const validatedPronos = pronos
      .filter(p => p.status !== 'pending')
      .sort((a, b) => new Date(a.validated_at) - new Date(b.validated_at))

    if (validatedPronos.length === 0) return null

    // Calculer les points du graphique
    const chartData = [{ value: 0, prono: null }]
    let cumulativeProfit = 0

    validatedPronos.forEach(prono => {
      if (prono.status === 'won') {
        cumulativeProfit += (parseFloat(prono.actual_win) - parseFloat(prono.stake))
      } else {
        cumulativeProfit -= parseFloat(prono.stake)
      }
      chartData.push({ 
        value: cumulativeProfit, 
        prono: prono,
        profit: prono.status === 'won' 
          ? (parseFloat(prono.actual_win) - parseFloat(prono.stake))
          : -parseFloat(prono.stake)
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
    const adjustedRange = range || 100

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
            
            {/* Points pour chaque prono */}
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
                    fill={data.prono.status === 'won' ? '#10b981' : '#ef4444'}
                    className="cursor-pointer hover:r-6 transition-all"
                    onClick={() => setSelectedProno(data.prono)}
                    onMouseEnter={(e) => e.target.setAttribute('r', '6')}
                    onMouseLeave={(e) => e.target.setAttribute('r', '4')}
                  />
                  <title>
                    {data.prono.type === 'simple' ? 'Simple' : `Combiné ${data.prono.pronos.length}`}: {data.profit > 0 ? '+' : ''}{data.profit.toFixed(2)}€
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

  // Fonction pour déterminer le type de prono
  const getPronoType = (prono) => {
    if (prono.type === 'simple') return 'Simple'
    return `Combiné ${prono.pronos?.length || 0}`
  }

  // Fonction pour calculer le ROI
  const calculateROI = () => {
    if (!stats || stats.total_staked === 0) return 0
    const profit = parseFloat(stats.total_profit) - parseFloat(stats.total_loss)
    return ((profit / parseFloat(stats.total_staked)) * 100).toFixed(1)
  }

  // Fonction pour déterminer la série actuelle
  const getCurrentStreak = () => {
    const validatedPronos = pronos
      .filter(p => p.status !== 'pending')
      .sort((a, b) => new Date(b.validated_at) - new Date(a.validated_at))
    
    if (validatedPronos.length === 0) return { type: null, count: 0 }
    
    let streak = 1
    const firstStatus = validatedPronos[0].status
    
    for (let i = 1; i < validatedPronos.length; i++) {
      if (validatedPronos[i].status === firstStatus) {
        streak++
      } else {
        break
      }
    }
    
    return { type: firstStatus, count: streak }
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
                Nos Pronostics Classiques - Paris Sportifs
              </h1>
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* BOUTON COMMENT ÇA MARCHE */}
                <Link 
                  href="/paris-sportifs/classiques/comment-ca-marche" 
                  className="text-blue-600 hover:text-blue-800 flex items-center text-xs sm:text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden sm:inline">Comment ça marche ?</span>
                  <span className="sm:hidden">Aide</span>
                </Link>
                
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

        {/* Filtres */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-4 py-3 overflow-x-auto">
              {['all', 'pending', 'won', 'lost'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' && 'Tous'}
                  {status === 'pending' && 'En attente'}
                  {status === 'won' && 'Gagnés'}
                  {status === 'lost' && 'Perdus'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Sidebar - Stats */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Vue d'ensemble</h2>
                
                {stats && (
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total pronos:</span>
                      <span className="font-medium">{stats.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gagnés:</span>
                      <span className="font-medium text-green-600">{stats.won}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Perdus:</span>
                      <span className="font-medium text-red-600">{stats.lost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">En attente:</span>
                      <span className="font-medium text-blue-600">{stats.pending}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Profit total:</span>
                        <span className="font-medium text-blue-600">
                          {(parseFloat(stats.total_profit) - parseFloat(stats.total_loss)).toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Graphique d'évolution */}
                {renderEvolutionChart()}

                {/* Indicateurs de performance */}
                {stats && stats.total > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 rounded p-2 text-center">
                      <span className="text-gray-600 block">Taux de réussite</span>
                      <p className="font-bold text-base sm:text-lg">
                        {stats.won + stats.lost > 0 
                          ? Math.round((stats.won / (stats.won + stats.lost)) * 100) 
                          : 0}%
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded p-2 text-center">
                      <span className="text-gray-600 block">ROI</span>
                      <p className="font-bold text-base sm:text-lg">
                        {calculateROI()}%
                      </p>
                    </div>
                  </div>
                )}

                {/* Série en cours */}
                {(() => {
                  const streak = getCurrentStreak()
                  if (streak.count >= 2) {
                    return (
                      <div className={`mt-3 p-2 rounded text-xs ${
                        streak.type === 'won' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        <span className="font-medium">
                          {streak.count} {streak.type === 'won' ? 'victoires' : 'défaites'} consécutives
                        </span>
                      </div>
                    )
                  }
                  return null
                })()}

                {isAuthenticated && (
                  <button
                    onClick={() => setShowNewProno(true)}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mt-4"
                  >
                    Nouveau prono
                  </button>
                )}
              </div>
            </div>

            {/* Zone principale - Liste des pronos */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="space-y-4">
                {pronos.length === 0 ? (
                  <div className="bg-white rounded-lg shadow p-12 text-center">
                    <p className="text-gray-500">Aucun pronostic dans cette catégorie</p>
                  </div>
                ) : (
                  pronos.map(prono => (
                    <div key={prono.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-lg">
                              {getPronoType(prono)}
                            </h3>
                            {prono.bookmaker && (
                              <span className="text-sm text-gray-500">({prono.bookmaker})</span>
                            )}
                            {prono.status === 'pending' && (
                              <span className="text-sm text-blue-600">⏳ En attente</span>
                            )}
                            {prono.status === 'won' && (
                              <span className="text-sm text-green-600 font-medium">✓ Gagné</span>
                            )}
                            {prono.status === 'lost' && (
                              <span className="text-sm text-red-600 font-medium">✗ Perdu</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {new Date(prono.created_at).toLocaleDateString()} à {new Date(prono.created_at).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                          {prono.status === 'pending' && isAuthenticated && (
                            <>
                              <button
                                onClick={() => validateProno(prono.id, true)}
                                className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                              >
                                Gagné
                              </button>
                              <button
                                onClick={() => validateProno(prono.id, false)}
                                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                              >
                                Perdu
                              </button>
                            </>
                          )}
                          {isAuthenticated && (
                            <button
                              onClick={() => deleteProno(prono.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Détails des pronos */}
                      <div className="space-y-1 mb-3">
                        {prono.pronos.map((p, idx) => (
                          <div key={idx} className="text-sm text-gray-600">
                            <span className="font-medium">{p.sport}</span> - {p.match} - <span className="font-medium">{p.bet}</span> @ {p.odds}
                          </div>
                        ))}
                      </div>

                      {/* Notes */}
                      {prono.notes && (
                        <div className="text-sm text-gray-500 italic mb-3">
                          Note: {prono.notes}
                        </div>
                      )}

                      {/* Infos financières */}
                      <div className="border-t pt-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mise: {parseFloat(prono.stake).toFixed(2)}€</span>
                          <span className="text-gray-600">Cote: {parseFloat(prono.combined_odds).toFixed(2)}</span>
                          <span className="font-medium">
                            {prono.status === 'pending' && `Gain potentiel: ${parseFloat(prono.potential_win).toFixed(2)}€`}
                            {prono.status === 'won' && <span className="text-green-600">Gain: {parseFloat(prono.actual_win).toFixed(2)}€</span>}
                            {prono.status === 'lost' && <span className="text-red-600">Perte: {parseFloat(prono.stake).toFixed(2)}€</span>}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal nouveau prono */}
        {showNewProno && isAuthenticated && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl my-4 max-h-[90vh] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4">Nouveau pronostic</h3>
              
              {/* Mise et Bookmaker */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mise (€)
                  </label>
                  <input
                    type="number"
                    value={stake}
                    onChange={(e) => setStake(e.target.value)}
                    placeholder="10"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bookmaker
                  </label>
                  <select
                    value={selectedBookmaker}
                    onChange={(e) => setSelectedBookmaker(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionner</option>
                    {bookmakers.map(bm => (
                      <option key={bm} value={bm}>{bm}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pronos */}
              <div className="space-y-4 mb-4">
                {pronosList.map((prono, index) => (
                  <div key={index} className="border rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Prono {index + 1}</h4>
                      {pronosList.length > 1 && (
                        <button
                          onClick={() => removePronoFromList(index)}
                          className="text-red-600 hover:text-red-800 text-sm"
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
                          onChange={(e) => updatePronoInList(index, 'sport', e.target.value)}
                          placeholder="Football"
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Match</label>
                        <input
                          type="text"
                          value={prono.match}
                          onChange={(e) => updatePronoInList(index, 'match', e.target.value)}
                          placeholder="PSG vs Lyon"
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Pari</label>
                        <input
                          type="text"
                          value={prono.bet}
                          onChange={(e) => updatePronoInList(index, 'bet', e.target.value)}
                          placeholder="PSG gagne"
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Cote</label>
                        <input
                          type="number"
                          step="0.01"
                          value={prono.odds}
                          onChange={(e) => updatePronoInList(index, 'odds', e.target.value)}
                          placeholder="1.5"
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={addPronoToList}
                  className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded hover:border-gray-400"
                >
                  + Ajouter un prono
                </button>
              </div>

              {/* Notes */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (optionnel)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ajoutez des notes sur ce prono..."
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Résumé */}
              {pronosList.some(p => p.odds) && (
                <div className="bg-gray-50 rounded p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cote totale:</span>
                    <span className="font-bold">
                      {pronosList.reduce((acc, p) => acc * (parseFloat(p.odds) || 1), 1).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">Gain potentiel:</span>
                    <span className="font-bold text-green-600">
                      {(parseFloat(stake || 0) * pronosList.reduce((acc, p) => acc * (parseFloat(p.odds) || 1), 1)).toFixed(2)}€
                    </span>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowNewProno(false)
                    setPronosList([{ sport: '', match: '', bet: '', odds: '' }])
                    setSelectedBookmaker('')
                    setStake('10')
                    setNotes('')
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Annuler
                </button>
                <button
                  onClick={createProno}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  disabled={!pronosList.some(p => p.odds) || !stake}
                >
                  Créer le prono
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