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
  
  // État du jeu
  const [dailyBudget, setDailyBudget] = useState(50);
  const [todaySpent, setTodaySpent] = useState(0);
  const [winners, setWinners] = useState([]);
  const [stats, setStats] = useState({
    totalWinners: 0,
    totalDistributed: 0
  });

  // Vérifier l'authentification
  useEffect(() => {
    const adminAuth = sessionStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
      loadAdminData();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Remplacez 'VotreMotDePasse' par votre vrai mot de passe
    if (password === 'test') {
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
      
      setDailyBudget(statusData.dailyBudget || 50);
      setTodaySpent(statusData.dailyBudget - statusData.remainingBudget);
      
      // Charger les gagnants
      const winnersRes = await fetch('/api/roue-fortune/winners');
      const winnersData = await winnersRes.json();
      
      setWinners(winnersData.winners || []);
      
      // Calculer les stats
      const totalDistributed = winnersData.winners.reduce((sum, w) => {
        return sum + parseInt(w.amount.replace('€', ''));
      }, 0);
      
      setStats({
        totalWinners: winnersData.winners.length,
        totalDistributed
      });
      
    } catch (error) {
      console.error('Erreur chargement admin:', error);
    }
    setIsLoading(false);
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
                  Sur 7 jours
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
                  Sur 7 jours
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
                    min="10"
                    max="500"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <button
                  onClick={async () => {
                    if (confirm(`Lancer un nouveau jeu avec ${dailyBudget}€ de budget ?`)) {
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
                            dailyBudget: parseInt(dailyBudget)
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

            {/* Liste des gagnants récents */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">
                  Gagnants récents
                </h2>
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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {winners.slice(0, 20).map((winner, index) => (
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
                      </tr>
                    ))}
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