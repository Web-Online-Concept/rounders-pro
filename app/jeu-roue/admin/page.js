'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // État du jeu
  const [gameData, setGameData] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [newBudget, setNewBudget] = useState('');
  const [showOnlyUnpaid, setShowOnlyUnpaid] = useState(false);
  const [exportDates, setExportDates] = useState({
    start: new Date().toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });

  // Vérifier l'authentification et charger les données
  useEffect(() => {
    checkAuthAndLoadData();
  }, []);

  const checkAuthAndLoadData = async () => {
    try {
      const response = await fetch('/api/jeu-roue/admin/manage');
      if (response.ok) {
        const data = await response.json();
        setGameData(data);
        setIsAuthenticated(true);
        setNewBudget(data.status.dailyBudget.toString());
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Connexion
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/jeu-roue/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await response.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        setPassword('');
        checkAuthAndLoadData();
      } else {
        setError(data.error || 'Mot de passe incorrect');
      }
    } catch (error) {
      setError('Erreur de connexion');
    }
  };

  // Déconnexion
  const handleLogout = async () => {
    await fetch('/api/jeu-roue/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setGameData(null);
    router.push('/');
  };

  // Actions admin
  const updateBudget = async () => {
    if (newBudget === '' || isNaN(newBudget) || Number(newBudget) < 0) {
      alert('Budget invalide');
      return;
    }

    setIsUpdating(true);
    try {
      const response = await fetch('/api/jeu-roue/admin/manage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'update-budget',
          budget: Number(newBudget)
        })
      });
      
      if (response.ok) {
        await checkAuthAndLoadData();
        alert('Budget mis à jour');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la mise à jour');
    } finally {
      setIsUpdating(false);
    }
  };

  const startNewGame = async () => {
    if (!confirm('Lancer un nouveau jeu ? Les joueurs pourront rejouer mais l\'historique des gagnants sera conservé.')) {
      return;
    }

    setIsUpdating(true);
    try {
      const response = await fetch('/api/jeu-roue/admin/manage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'reset-budget' })
      });
      
      if (response.ok) {
        await checkAuthAndLoadData();
        alert('Nouveau jeu lancé ! Les joueurs peuvent maintenant rejouer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const exportWinners = async () => {
    try {
      const response = await fetch('/api/jeu-roue/admin/manage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'export-winners',
          startDate: exportDates.start,
          endDate: exportDates.end
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Créer un CSV
        let csv = 'Date,Pseudo Stake,Montant,Heure,Statut,Date Paiement\n';
        data.winners.forEach(w => {
          const status = w.paid ? 'Payé' : 'En attente';
          const paidDate = w.paidAt ? new Date(w.paidAt).toLocaleString('fr-FR') : '';
          csv += `${w.date},${w.pseudo},${w.amount}€,${w.time},${status},${paidDate}\n`;
        });
        csv += `\nTotal:,,${data.total}€,,,\n`;
        csv += `Nombre de gagnants:,,${data.count},,,\n`;
        csv += `Non payés:,,${data.unpaidTotal}€,,${data.unpaidCount} gagnants,\n`;
        
        // Télécharger le fichier
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `gagnants_rounders_${exportDates.start}_${exportDates.end}.csv`;
        a.click();
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'export');
    }
  };

  const markAsPaid = async (winner) => {
    try {
      const response = await fetch('/api/jeu-roue/admin/manage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'mark-paid',
          date: winner.date,
          pseudo: winner.pseudo,
          time: winner.time
        })
      });
      
      if (response.ok) {
        await checkAuthAndLoadData();
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors du marquage');
    }
  };

  const deleteWinner = async (winner) => {
    const confirmMsg = winner.paid 
      ? `Êtes-vous sûr de vouloir supprimer ${winner.pseudo} (${winner.amount}€) ?\n⚠️ Ce gagnant est marqué comme PAYÉ !`
      : `Êtes-vous sûr de vouloir supprimer ${winner.pseudo} (${winner.amount}€) ?\nLe montant sera récupéré dans le budget.`;
    
    if (!confirm(confirmMsg)) {
      return;
    }

    try {
      const response = await fetch('/api/jeu-roue/admin/manage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete-winner',
          date: winner.date,
          pseudo: winner.pseudo,
          time: winner.time
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        await checkAuthAndLoadData();
        alert(data.message);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la suppression');
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-white">Chargement...</div>
        </main>
        <Footer />
      </>
    );
  }

  // Formulaire de connexion
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-[#1a0f1a] to-[#0f0a0f] pt-20 pb-16 md:pb-0">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold text-white text-center mb-8">
                🔐 Administration
              </h1>
              
              <form onSubmit={handleLogin} className="bg-[#2a1f2a] rounded-lg p-6">
                <div className="mb-4">
                  <label className="block text-white mb-2">Mot de passe</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-[#1a0f1a] text-white rounded-lg border border-[#ff6b00]/20 focus:border-[#ff6b00] focus:outline-none"
                    required
                  />
                </div>
                
                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-[#ff6b00] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#ff8533] transition-colors"
                >
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Tableau de bord admin
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#1a0f1a] to-[#0f0a0f] pt-20 pb-16 md:pb-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              🎮 Administration - Roue de la Fortune
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Déconnexion
            </button>
          </div>

          {gameData && (
            <>
              {/* État du jeu */}
              <div className="bg-[#2a1f2a] rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">État du jeu</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Budget actuel</div>
                    <div className="text-3xl font-bold text-[#ff6b00]">
                      {gameData.status.dailyBudget}€
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      {gameData.remainingBudget > 0 ? '✅ Jeu actif' : '❌ Jeu fermé'}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Budget restant</div>
                    <div className="text-3xl font-bold text-white">
                      {gameData.remainingBudget}€
                    </div>
                    <div className="text-sm text-gray-400">
                      Dépensé : {gameData.status.dailyBudget - gameData.remainingBudget}€
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Gagnants aujourd&apos;hui</div>
                    <div className="text-3xl font-bold text-white">
                      {gameData.todayBudget?.winners?.filter(w => w.amount > 0).length || 0}
                    </div>
                    <div className="text-sm text-gray-400">
                      Total: {gameData.todayBudget?.spent || 0}€
                    </div>
                  </div>
                </div>
              </div>

              {/* Gestion du budget */}
              <div className="bg-[#2a1f2a] rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Gestion du budget</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-white mb-2">Nouveau budget (€)</label>
                    <input
                      type="number"
                      value={newBudget}
                      onChange={(e) => setNewBudget(e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a0f1a] text-white rounded-lg border border-[#ff6b00]/20 focus:border-[#ff6b00] focus:outline-none"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Mettez 0 pour fermer le jeu, ou un montant pour l&apos;activer/réactiver
                    </p>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={updateBudget}
                      disabled={isUpdating}
                      className="bg-[#ff6b00] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#ff8533] transition-colors disabled:opacity-50"
                    >
                      Mettre à jour le budget
                    </button>
                  </div>
                </div>
              </div>

              {/* Liste des gagnants récents */}
              <div className="bg-[#2a1f2a] rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">Gagnants récents</h2>
                  <button
                    onClick={() => setShowOnlyUnpaid(!showOnlyUnpaid)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                      showOnlyUnpaid 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-[#1a0f1a] text-white hover:bg-[#2a1f2a]'
                    }`}
                  >
                    {showOnlyUnpaid ? '🟠 Non payés uniquement' : 'Tous les gagnants'}
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-[#ff6b00]/20">
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Pseudo Stake</th>
                        <th className="text-left py-2">Montant</th>
                        <th className="text-left py-2">Heure</th>
                        <th className="text-center py-2">Statut</th>
                        <th className="text-center py-2">Payé le</th>
                        <th className="text-center py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gameData.allWinners
                        .filter(w => w.amount > 0)
                        .filter(w => showOnlyUnpaid ? !w.paid : true)
                        .slice(0, 20)
                        .map((winner, index) => (
                          <tr key={index} className="border-b border-[#ff6b00]/10">
                            <td className="py-2">{winner.date}</td>
                            <td className="py-2 font-bold">{winner.pseudo}</td>
                            <td className="py-2 text-[#ff6b00]">{winner.amount}€</td>
                            <td className="py-2">{winner.time}</td>
                            <td className="py-2 text-center">
                              {winner.paid ? (
                                <span className="text-green-500 font-bold">✅ Payé</span>
                              ) : (
                                <button
                                  onClick={() => markAsPaid(winner)}
                                  className="bg-orange-600 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                                >
                                  Marquer payé
                                </button>
                              )}
                            </td>
                            <td className="py-2 text-center text-sm text-gray-400">
                              {winner.paidAt ? new Date(winner.paidAt).toLocaleString('fr-FR') : '-'}
                            </td>
                            <td className="py-2 text-center">
                              <button
                                onClick={() => deleteWinner(winner)}
                                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm transition-colors"
                                title="Supprimer ce gagnant"
                              >
                                🗑️
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {gameData.allWinners.filter(w => w.amount > 0).filter(w => showOnlyUnpaid ? !w.paid : true).length === 0 && (
                    <div className="text-center py-4 text-gray-400">
                      {showOnlyUnpaid ? 'Tous les gagnants ont été payés ! 🎉' : 'Aucun gagnant pour le moment'}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  💡 Conseil : Cochez après avoir envoyé le pourboire sur Stake
                </div>
              </div>

              {/* Export des gagnants */}
              <div className="bg-[#2a1f2a] rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Export des gagnants</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div>
                    <label className="block text-white mb-2">Date de début</label>
                    <input
                      type="date"
                      value={exportDates.start}
                      onChange={(e) => setExportDates({...exportDates, start: e.target.value})}
                      className="px-4 py-2 bg-[#1a0f1a] text-white rounded-lg border border-[#ff6b00]/20 focus:border-[#ff6b00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Date de fin</label>
                    <input
                      type="date"
                      value={exportDates.end}
                      onChange={(e) => setExportDates({...exportDates, end: e.target.value})}
                      className="px-4 py-2 bg-[#1a0f1a] text-white rounded-lg border border-[#ff6b00]/20 focus:border-[#ff6b00] focus:outline-none"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={exportWinners}
                      className="bg-[#ff6b00] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#ff8533] transition-colors"
                    >
                      📥 Télécharger CSV
                    </button>
                  </div>
                </div>
              </div>

              {/* Statistiques */}
              <div className="bg-[#2a1f2a] rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Statistiques globales</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Total distribué</div>
                    <div className="text-2xl font-bold text-[#ff6b00]">
                      {gameData.stats.totalDistributed}€
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Nombre de gagnants</div>
                    <div className="text-2xl font-bold text-white">
                      {gameData.stats.totalWinners}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Gain moyen</div>
                    <div className="text-2xl font-bold text-white">
                      {gameData.stats.averageWin}€
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Non payés</div>
                    <div className="text-2xl font-bold text-orange-500">
                      {gameData.allWinners.filter(w => w.amount > 0 && !w.paid).length}
                    </div>
                    <div className="text-xs text-gray-400">
                      {gameData.allWinners.filter(w => w.amount > 0 && !w.paid).reduce((sum, w) => sum + w.amount, 0)}€
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}