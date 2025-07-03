'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GagnantsPage() {
  const [winners, setWinners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalDistributed, setTotalDistributed] = useState(0);
  const [filter, setFilter] = useState('all'); // all, today, yesterday, week

  useEffect(() => {
    fetchWinners();
    const interval = setInterval(fetchWinners, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchWinners = async () => {
    try {
      const response = await fetch('/api/jeu-roue/winners');
      const data = await response.json();
      
      if (data.success) {
        setWinners(data.winners);
        setTotalDistributed(data.totalDistributed);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur:', error);
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Aujourd&apos;hui";
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredWinners = winners.filter(winner => {
    if (filter === 'all') return true;
    
    const winnerDate = new Date(winner.date);
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    switch(filter) {
      case 'today':
        return winnerDate >= startOfDay;
      case 'yesterday':
        const yesterday = new Date(startOfDay);
        yesterday.setDate(yesterday.getDate() - 1);
        return winnerDate >= yesterday && winnerDate < startOfDay;
      case 'week':
        const weekAgo = new Date(startOfDay);
        weekAgo.setDate(weekAgo.getDate() - 7);
        return winnerDate >= weekAgo;
      default:
        return true;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              🏆 Tous les Gagnants
            </h1>
            <p className="text-xl text-gray-300">
              Découvrez tous ceux qui ont gagné à la Roue de la Fortune !
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {winners.length}
              </div>
              <div className="text-gray-400">Gagnants au total</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {totalDistributed}€
              </div>
              <div className="text-gray-400">Total distribué</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {filteredWinners.filter(w => formatDate(w.date) === "Aujourd&apos;hui").length}
              </div>
              <div className="text-gray-400">Gagnants aujourd&apos;hui</div>
            </div>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === 'all' 
                  ? 'bg-yellow-500 text-gray-900' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('today')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === 'today' 
                  ? 'bg-yellow-500 text-gray-900' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Aujourd&apos;hui
            </button>
            <button
              onClick={() => setFilter('yesterday')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === 'yesterday' 
                  ? 'bg-yellow-500 text-gray-900' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Hier
            </button>
            <button
              onClick={() => setFilter('week')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === 'week' 
                  ? 'bg-yellow-500 text-gray-900' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Cette semaine
            </button>
          </div>

          {/* Liste des gagnants */}
          {filteredWinners.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-400 text-lg">
                Aucun gagnant pour cette période
              </p>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Heure
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Pseudo
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Gain
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Statut
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {filteredWinners.map((winner, index) => (
                      <tr key={index} className="hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {formatDate(winner.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {formatTime(winner.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {winner.pseudo}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="text-green-400 font-bold">
                            {winner.amount}€
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {winner.paid ? (
                            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                              ✓ Payé
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                              En attente
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Tentez votre chance vous aussi !
            </h2>
            <p className="text-gray-400 mb-6">
              Une chance par jour de gagner jusqu&apos;à 50€
            </p>
            <a 
              href="/jeu-roue"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              🎰 Jouer maintenant
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}