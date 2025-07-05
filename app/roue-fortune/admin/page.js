// app/roue-fortune/admin/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BottomBar from '../../components/BottomBar';

export default function AdminRouePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);
  
  // État du jeu
  const [dailyBudget, setDailyBudget] = useState(50);
  const [todaySpent, setTodaySpent] = useState(0);
  const [allWinners, setAllWinners] = useState([]);
  const [filteredWinners, setFilteredWinners] = useState([]);
  const [stats, setStats] = useState({
    totalWinners: 0,
    totalDistributed: 0,
    totalUnpaid: 0,
    unpaidCount: 0
  });

  // Filtres
  const [filterPeriod, setFilterPeriod] = useState('30');
  const [filterPayment, setFilterPayment] = useState('all'); // 'all', 'paid', 'unpaid'
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [availableMonths, setAvailableMonths] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  
  // Sélection multiple
  const [selectedWinners, setSelectedWinners] = useState([]);
  const [isUpdatingPayment, setIsUpdatingPayment] = useState(false);

  // Vérifier l'authentification
  useEffect(() => {
    const adminAuth = sessionStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
      loadAdminData();
    }
  }, []);

  // Appliquer les filtres quand ils changent
  useEffect(() => {
    applyFilters();
  }, [filterPeriod, filterPayment, selectedMonth, selectedYear, allWinners]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Remplacez 'VotreMotDePasse' par votre vrai mot de passe
    if (password === 'flofloflo*') {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      loadAdminData();
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const loadAdminData = async () => {
    setIsLoading(true);
    try {
      // Charger le statut
      const statusRes = await fetch('/api/roue-fortune/status');
      const statusData = await statusRes.json();
      
      setDailyBudget(statusData.dailyBudget || 0);
      setTodaySpent(statusData.dailyBudget - statusData.remainingBudget);
      
      // Charger TOUS les gagnants historiques
      const allWinnersRes = await fetch('/api/roue-fortune/winners?limit=all');
      const allWinnersData = await allWinnersRes.json();
      
      setAllWinners(allWinnersData.winners || []);
      
      // Calculer les stats sur TOUT l'historique
      let totalDistributed = 0;
      let totalUnpaid = 0;
      let unpaidCount = 0;
      
      allWinnersData.winners.forEach(w => {
        const amount = parseInt(w.amount.replace('€', ''));
        totalDistributed += amount;
        if (!w.paid) {
          totalUnpaid += amount;
          unpaidCount++;
        }
      });
      
      setStats({
        totalWinners: allWinnersData.winners.length,
        totalDistributed,
        totalUnpaid,
        unpaidCount
      });

      // Extraire les mois et années disponibles
      const months = new Set();
      const years = new Set();
      
      allWinnersData.winners.forEach(winner => {
        const [day, month, year] = winner.date.split('/');
        months.add(`${year}-${month}`);
        years.add(year);
      });

      setAvailableMonths(Array.from(months).sort().reverse());
      setAvailableYears(Array.from(years).sort().reverse());
      
    } catch (error) {
      console.error('Erreur chargement admin:', error);
    }
    setIsLoading(false);
  };

  const applyFilters = () => {
    if (!allWinners.length) {
      setFilteredWinners([]);
      return;
    }

    let filtered = [...allWinners];
    const now = new Date();

    // Filtre par période
    switch (filterPeriod) {
      case '7':
        filtered = allWinners.filter(winner => {
          const [day, month, year] = winner.date.split('/');
          const winnerDate = new Date(year, month - 1, day);
          const daysDiff = Math.floor((now - winnerDate) / (1000 * 60 * 60 * 24));
          return daysDiff <= 7;
        });
        break;

      case '30':
        filtered = allWinners.filter(winner => {
          const [day, month, year] = winner.date.split('/');
          const winnerDate = new Date(year, month - 1, day);
          const daysDiff = Math.floor((now - winnerDate) / (1000 * 60 * 60 * 24));
          return daysDiff <= 30;
        });
        break;

      case 'month':
        if (selectedMonth) {
          const [yearPart, monthPart] = selectedMonth.split('-');
          filtered = allWinners.filter(winner => {
            const [day, month, year] = winner.date.split('/');
            return year === yearPart && month === monthPart;
          });
        }
        break;

      case 'year':
        if (selectedYear) {
          filtered = allWinners.filter(winner => {
            const [day, month, year] = winner.date.split('/');
            return year === selectedYear;
          });
        }
        break;

      case 'all':
        filtered = allWinners;
        break;
    }

    // Filtre par statut de paiement
    if (filterPayment === 'paid') {
      filtered = filtered.filter(w => w.paid === true);
    } else if (filterPayment === 'unpaid') {
      filtered = filtered.filter(w => w.paid !== true);
    }

    setFilteredWinners(filtered);
    setSelectedWinners([]); // Réinitialiser la sélection
  };

  const deleteWinner = async (winner, index) => {
    if (!confirm(`Supprimer le gain de ${winner.pseudo} (${winner.amount}) ?`)) {
      return;
    }

    setDeletingIndex(index);
    
    try {
      const [day, month, year] = winner.date.split('/');
      const dateFormatted = `${year}-${month}-${day}`;

      const realIndex = allWinners.findIndex(w => 
        w.pseudo === winner.pseudo && 
        w.time === winner.time && 
        w.date === winner.date
      );

      const response = await fetch('/api/roue-fortune/admin/manage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'deleteWinner',
          date: dateFormatted,
          winnerIndex: realIndex
        }),
      });

      if (response.ok) {
        alert('Gagnant supprimé avec succès');
        await loadAdminData();
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.error}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la suppression');
    }
    
    setDeletingIndex(null);
  };

  const markAsPaid = async (paid = true) => {
    if (selectedWinners.length === 0) {
      alert('Veuillez sélectionner au moins un gagnant');
      return;
    }

    const action = paid ? 'payés' : 'non payés';
    if (!confirm(`Marquer ${selectedWinners.length} gagnant(s) comme ${action} ?`)) {
      return;
    }

    setIsUpdatingPayment(true);
    
    try {
      // Grouper par date
      const winnersByDate = {};
      selectedWinners.forEach(selection => {
        const winner = filteredWinners[selection];
        const [day, month, year] = winner.date.split('/');
        const dateFormatted = `${year}-${month}-${day}`;
        
        if (!winnersByDate[dateFormatted]) {
          winnersByDate[dateFormatted] = [];
        }
        
        const realIndex = allWinners.findIndex(w => 
          w.pseudo === winner.pseudo && 
          w.time === winner.time && 
          w.date === winner.date
        );
        
        winnersByDate[dateFormatted].push(realIndex);
      });

      // Envoyer les requêtes par date
      for (const [date, indices] of Object.entries(winnersByDate)) {
        await fetch('/api/roue-fortune/admin/manage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'markAsPaid',
            date: date,
            winnerIndices: indices,
            paid: paid
          }),
        });
      }

      alert(`${selectedWinners.length} gagnant(s) marqué(s) comme ${action}`);
      await loadAdminData();
      
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la mise à jour');
    }
    
    setIsUpdatingPayment(false);
  };

  const toggleWinnerSelection = (index) => {
    setSelectedWinners(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      return [...prev, index];
    });
  };

  const selectAll = () => {
    if (selectedWinners.length === filteredWinners.length) {
      setSelectedWinners([]);
    } else {
      setSelectedWinners(filteredWinners.map((_, index) => index));
    }
  };

  const getMonthName = (monthYear) => {
    const [year, month] = monthYear.split('-');
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                   'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <div className="max-w-md mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
			Administration
			<br />
			Roue de la Fortune Rounders
		  </h1>
          
          <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Mot de passe admin
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all"
            >
              Se connecter
            </button>
          </form>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Administration - Roue de la Fortune Rounders
          </h1>
          <button
            onClick={() => {
              sessionStorage.removeItem('adminAuth');
              router.push('/roue-fortune');
            }}
            className="text-red-600 hover:text-red-700 text-sm"
          >
            Se déconnecter
          </button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400"></div>
          </div>
        ) : (
          <>
            {/* Statistiques */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Budget du jour
                </h3>
                <p className="text-3xl font-bold text-blue-600">
                  {todaySpent}€ / {dailyBudget}€
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Reste: {dailyBudget - todaySpent}€
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Total des gagnants
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  {stats.totalWinners}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Historique complet
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Total distribué
                </h3>
                <p className="text-3xl font-bold text-purple-600">
                  {stats.totalDistributed}€
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Historique complet
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  À payer
                </h3>
                <p className="text-3xl font-bold text-orange-600">
                  {stats.totalUnpaid}€
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {stats.unpaidCount} gagnant(s)
                </p>
              </div>
            </div>

            {/* Gestion du budget */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Lancer un nouveau jeu
              </h2>
              
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">
                    Budget du nouveau jeu (€)
                  </label>
                  <input
                    type="number"
                    value={dailyBudget}
                    onChange={(e) => setDailyBudget(e.target.value)}
                    min="0"
                    max="500"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <button
                  onClick={async () => {
                    const budgetValue = parseInt(dailyBudget);
                    if (isNaN(budgetValue) || budgetValue < 0) {
                      alert('Veuillez entrer un budget valide (0€ ou plus)');
                      return;
                    }
                    
                    if (confirm(`Lancer un nouveau jeu avec ${budgetValue}€ de budget ?`)) {
                      try {
                        await fetch('/api/roue-fortune/admin/manage', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ action: 'resetDaily' })
                        });
                        
                        await fetch('/api/roue-fortune/admin/manage', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ 
                            action: 'updateBudget',
                            dailyBudget: budgetValue
                          })
                        });
                        
                        alert('Nouveau jeu lancé !');
                        loadAdminData();
                      } catch (error) {
                        console.error('Erreur:', error);
                        alert('Erreur lors du lancement du jeu');
                      }
                    }
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-lg transition-all"
                >
                  🎰 Nouveau Jeu
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                Le jeu s'arrêtera automatiquement quand le budget sera épuisé
              </p>
            </div>

            {/* Liste des gagnants avec filtres */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Gagnants ({filteredWinners.length})
                  </h2>
                  
                  {/* Filtres */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <select
                      value={filterPeriod}
                      onChange={(e) => {
                        setFilterPeriod(e.target.value);
                        setSelectedMonth('');
                        setSelectedYear('');
                      }}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="7">7 derniers jours</option>
                      <option value="30">30 derniers jours</option>
                      <option value="month">Par mois</option>
                      <option value="year">Par année</option>
                      <option value="all">Tout l'historique</option>
                    </select>

                    {filterPeriod === 'month' && (
                      <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Choisir un mois</option>
                        {availableMonths.map(month => (
                          <option key={month} value={month}>
                            {getMonthName(month)}
                          </option>
                        ))}
                      </select>
                    )}

                    {filterPeriod === 'year' && (
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Choisir une année</option>
                        {availableYears.map(year => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    )}

                    <select
                      value={filterPayment}
                      onChange={(e) => setFilterPayment(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Tous</option>
                      <option value="paid">Payés</option>
                      <option value="unpaid">Non payés</option>
                    </select>

                    {filteredWinners.length > 0 && (
                      <span className="text-sm text-gray-600 ml-2">
                        Total période : {filteredWinners.reduce((sum, w) => sum + parseInt(w.amount.replace('€', '')), 0)}€
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions de sélection multiple */}
                {filteredWinners.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 items-center">
                    <button
                      onClick={selectAll}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      {selectedWinners.length === filteredWinners.length ? 'Tout désélectionner' : 'Tout sélectionner'}
                    </button>
                    
                    {selectedWinners.length > 0 && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-600">
                          {selectedWinners.length} sélectionné(s)
                        </span>
                        <button
                          onClick={() => markAsPaid(true)}
                          disabled={isUpdatingPayment}
                          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-1 rounded text-sm font-medium transition-all"
                        >
                          ✓ Marquer comme payé(s)
                        </button>
                        <button
                          onClick={() => markAsPaid(false)}
                          disabled={isUpdatingPayment}
                          className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-4 py-1 rounded text-sm font-medium transition-all"
                        >
                          ✗ Marquer comme non payé(s)
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          checked={filteredWinners.length > 0 && selectedWinners.length === filteredWinners.length}
                          onChange={selectAll}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Heure
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pseudo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gain
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Statut
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredWinners.length > 0 ? (
                      filteredWinners.map((winner, index) => (
                        <tr key={index} className={selectedWinners.includes(index) ? 'bg-blue-50' : ''}>
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              checked={selectedWinners.includes(index)}
                              onChange={() => toggleWinnerSelection(index)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {winner.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {winner.time}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {winner.pseudo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                            {winner.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {winner.paid ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                ✓ Payé
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                ⏳ En attente
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => deleteWinner(winner, index)}
                              disabled={deletingIndex === index}
                              className="text-red-600 hover:text-red-800 font-medium disabled:opacity-50"
                            >
                              {deletingIndex === index ? 'Suppression...' : 'Supprimer'}
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                          Aucun gagnant pour cette période
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
	  <BottomBar />
    </>
  );
}