'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminRouePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);
  
  // État du jeu
  const [dailyBudget, setDailyBudget] = useState(50);
  const [todaySpent, setTodaySpent] = useState(0);
  const [allWinners, setAllWinners] = useState([]); // Tous les gagnants
  const [filteredWinners, setFilteredWinners] = useState([]); // Gagnants filtrés
  const [stats, setStats] = useState({
    totalWinners: 0,
    totalDistributed: 0
  });

  // Filtres
  const [filterPeriod, setFilterPeriod] = useState('30'); // '7', '30', 'month', 'year', 'all'
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [availableMonths, setAvailableMonths] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

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
  }, [filterPeriod, selectedMonth, selectedYear, allWinners]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Remplacez 'VotreMotDePasse' par votre vrai mot de passe
    if (password === 'VotreMotDePasse') {
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
      const totalDistributed = allWinnersData.winners.reduce((sum, w) => {
        return sum + parseInt(w.amount.replace('€', ''));
      }, 0);
      
      setStats({
        totalWinners: allWinnersData.winners.length,
        totalDistributed
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

    switch (filterPeriod) {
      case '7':
        // 7 derniers jours
        filtered = allWinners.filter(winner => {
          const [day, month, year] = winner.date.split('/');
          const winnerDate = new Date(year, month - 1, day);
          const daysDiff = Math.floor((now - winnerDate) / (1000 * 60 * 60 * 24));
          return daysDiff <= 7;
        });
        break;

      case '30':
        // 30 derniers jours
        filtered = allWinners.filter(winner => {
          const [day, month, year] = winner.date.split('/');
          const winnerDate = new Date(year, month - 1, day);
          const daysDiff = Math.floor((now - winnerDate) / (1000 * 60 * 60 * 24));
          return daysDiff <= 30;
        });
        break;

      case 'month':
        // Mois spécifique
        if (selectedMonth) {
          const [yearPart, monthPart] = selectedMonth.split('-');
          filtered = allWinners.filter(winner => {
            const [day, month, year] = winner.date.split('/');
            return year === yearPart && month === monthPart;
          });
        }
        break;

      case 'year':
        // Année spécifique
        if (selectedYear) {
          filtered = allWinners.filter(winner => {
            const [day, month, year] = winner.date.split('/');
            return year === selectedYear;
          });
        }
        break;

      case 'all':
        // Tous les gagnants
        filtered = allWinners;
        break;
    }

    setFilteredWinners(filtered);
  };

  const deleteWinner = async (winner, index) => {
    if (!confirm(`Supprimer le gain de ${winner.pseudo} (${winner.amount}) ?`)) {
      return;
    }

    setDeletingIndex(index);
    
    try {
      // Convertir la date au format YYYY-MM-DD
      const [day, month, year] = winner.date.split('/');
      const dateFormatted = `${year}-${month}-${day}`;

      // Trouver l'index réel dans la liste complète
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
        await loadAdminData(); // Recharger les données
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
            Administration - Roue de la Fortune
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
            Administration - Roue de la Fortune
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
            <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                        // D'abord réinitialiser
                        await fetch('/api/roue-fortune/admin/manage', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ action: 'resetDaily' })
                        });
                        
                        // Puis mettre à jour le budget
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

                    {filteredWinners.length > 0 && (
                      <span className="text-sm text-gray-600 ml-2">
                        Total période : {filteredWinners.reduce((sum, w) => sum + parseInt(w.amount.replace('€', '')), 0)}€
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
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
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredWinners.length > 0 ? (
                      filteredWinners.map((winner, index) => (
                        <tr key={index}>
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
                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
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
    </>
  );
}