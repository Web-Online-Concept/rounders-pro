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
    biggestWin: 0
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

      winnersData.forEach(winner => {
        const amount = parseInt(winner.amount.replace('€', ''));
        totalAmount += amount;
        if (amount > biggestWin) biggestWin = amount;
      });

      const averageWin = winnersData.length > 0 ? totalAmount / winnersData.length : 0;

      setStats({
        totalDistributed: totalAmount,
        averageWin: averageWin.toFixed(2),
        totalWinners: winnersData.length,
        biggestWin
      });

      setIsLoading(false);
    } catch (error) {
      console.error('Erreur:', error);
      setIsLoading(false);
    }
  };

  // Grouper les gagnants par date pour afficher les totaux
  const getWinnersGroupedByDate = () => {
    const grouped = [];
    let currentDate = '';
    let dayTotal = 0;

    winners.forEach((winner, index) => {
      if (winner.date !== currentDate && currentDate !== '') {
        // Ajouter une ligne de total pour la date précédente
        grouped.push({
          isTotal: true,
          date: currentDate,
          total: dayTotal
        });
        dayTotal = 0;
      }
      
      currentDate = winner.date;
      const amount = parseInt(winner.amount.replace('€', ''));
      dayTotal += amount;
      
      grouped.push(winner);
      
      // Si c'est le dernier élément, ajouter le total
      if (index === winners.length - 1) {
        grouped.push({
          isTotal: true,
          date: currentDate,
          total: dayTotal
        });
      }
    });

    return grouped;
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎰 Roue de la Fortune Stake
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historique complet des gagnants
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

            {/* Liste des gagnants avec totaux par jour */}
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
                      getWinnersGroupedByDate().map((item, index) => (
                        item.isTotal ? (
                          <tr key={`total-${index}`} className="bg-gray-100 font-bold">
                            <td colSpan="3" className="px-6 py-3 text-right text-gray-900">
                              Total du {item.date} :
                            </td>
                            <td className="px-6 py-3 text-green-600">
                              {item.total}€
                            </td>
                          </tr>
                        ) : (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.time}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.pseudo}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                              {item.amount}
                            </td>
                          </tr>
                        )
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