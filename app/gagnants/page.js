'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GagnantsPage() {
  const [winners, setWinners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalDistributed: 0,
    averageWin: 0,
    totalWinners: 0,
    biggestWin: 0,
    dailyStats: []
  });

  useEffect(() => {
    loadWinners();
  }, []);

  const loadWinners = async () => {
    try {
      const response = await fetch('/api/roue-fortune/winners');
      const data = await response.json();
      const winnersData = data.winners || [];
      setWinners(winnersData);

      // Calculer les statistiques
      let totalAmount = 0;
      let biggestWin = 0;
      const dailyData = {};

      winnersData.forEach(winner => {
        const amount = parseInt(winner.amount.replace('€', ''));
        totalAmount += amount;
        if (amount > biggestWin) biggestWin = amount;

        // Grouper par date
        if (!dailyData[winner.date]) {
          dailyData[winner.date] = {
            date: winner.date,
            winners: 0,
            total: 0
          };
        }
        dailyData[winner.date].winners++;
        dailyData[winner.date].total += amount;
      });

      const averageWin = winnersData.length > 0 ? totalAmount / winnersData.length : 0;
      const dailyStats = Object.values(dailyData).sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split('/');
        const [dayB, monthB, yearB] = b.date.split('/');
        return new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
      });

      setStats({
        totalDistributed: totalAmount,
        averageWin: averageWin.toFixed(2),
        totalWinners: winnersData.length,
        biggestWin,
        dailyStats
      });

      setIsLoading(false);
    } catch (error) {
      console.error('Erreur:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🏆 Historique complet des gagnants
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Roue de la Fortune Stake
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400"></div>
          </div>
        ) : (
          <>
            {/* Statistiques globales */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Total distribué</h3>
                <p className="text-3xl font-bold">{stats.totalDistributed}€</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Nombre de gagnants</h3>
                <p className="text-3xl font-bold">{stats.totalWinners}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Gain moyen</h3>
                <p className="text-3xl font-bold">{stats.averageWin}€</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Plus gros gain</h3>
                <p className="text-3xl font-bold">{stats.biggestWin}€</p>
              </div>
            </div>

            {/* Stats par jour */}
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Statistiques par jour</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stats.dailyStats.map((day, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-semibold text-gray-900">{day.date}</h4>
                    <p className="text-sm text-gray-600">
                      {day.winners} gagnant{day.winners > 1 ? 's' : ''} • Total: {day.total}€
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Liste des gagnants */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">
                  📜 Tous les gagnants
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
                    {winners.length > 0 ? (
                      winners.map((winner, index) => (
                        <tr key={index} className="hover:bg-gray-50">
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
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                          Aucun gagnant pour le moment
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <a 
            href="/roue-fortune"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Retour au jeu
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}