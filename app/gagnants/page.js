// app/gagnants/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GagnantsPage() {
  const [allWinners, setAllWinners] = useState([]);
  const [filteredWinners, setFilteredWinners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalDistributed: 0,
    averageWin: 0,
    totalWinners: 0,
    biggestWin: 0
  });
  const [filteredStats, setFilteredStats] = useState({
    totalDistributed: 0,
    averageWin: 0,
    totalWinners: 0,
    biggestWin: 0
  });

  // Filtres
  const [filterPeriod, setFilterPeriod] = useState('30'); // '7', '30', 'month', 'year', 'all'
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [availableMonths, setAvailableMonths] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    loadWinners();
  }, []);

  // Appliquer les filtres quand ils changent
  useEffect(() => {
    applyFilters();
  }, [filterPeriod, selectedMonth, selectedYear, allWinners]);

  const loadWinners = async () => {
    try {
      const response = await fetch('/api/roue-fortune/winners?limit=all');
      const data = await response.json();
      const winnersData = data.winners || [];
      setAllWinners(winnersData);

      // Calculer les statistiques globales
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

      // Extraire les mois et années disponibles
      const months = new Set();
      const years = new Set();
      
      winnersData.forEach(winner => {
        const [day, month, year] = winner.date.split('/');
        months.add(`${year}-${month}`);
        years.add(year);
      });

      setAvailableMonths(Array.from(months).sort().reverse());
      setAvailableYears(Array.from(years).sort().reverse());

      setIsLoading(false);
    } catch (error) {
      console.error('Erreur:', error);
      setIsLoading(false);
    }
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

    // Calculer les stats pour la période filtrée
    let filteredTotal = 0;
    let filteredBiggest = 0;

    filtered.forEach(winner => {
      const amount = parseInt(winner.amount.replace('€', ''));
      filteredTotal += amount;
      if (amount > filteredBiggest) filteredBiggest = amount;
    });

    const filteredAverage = filtered.length > 0 ? filteredTotal / filtered.length : 0;

    setFilteredStats({
      totalDistributed: filteredTotal,
      averageWin: filteredAverage.toFixed(2),
      totalWinners: filtered.length,
      biggestWin: filteredBiggest
    });
  };

  const getMonthName = (monthYear) => {
    const [year, month] = monthYear.split('-');
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                   'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  // Grouper les gagnants par date pour afficher les totaux
  const getWinnersGroupedByDate = () => {
    const grouped = [];
    let currentDate = '';
    let dayTotal = 0;

    filteredWinners.forEach((winner, index) => {
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
      if (index === filteredWinners.length - 1) {
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
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                📊 Statistiques globales
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <p className="text-sm text-gray-600">Total distribué</p>
                  <p className="text-2xl font-bold text-green-600">{stats.totalDistributed}€</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <p className="text-sm text-gray-600">Nombre de gagnants</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalWinners}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <p className="text-sm text-gray-600">Gain moyen</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.averageWin}€</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <p className="text-sm text-gray-600">Plus gros gain</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.biggestWin}€</p>
                </div>
              </div>
            </div>

            {/* Liste des gagnants avec filtres */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    📜 Gagnants ({filteredWinners.length})
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
                  </div>
                </div>

                {/* Stats de la période filtrée */}
                {filteredWinners.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-xs text-gray-600">Total période</p>
                      <p className="text-lg font-bold text-green-600">{filteredStats.totalDistributed}€</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-xs text-gray-600">Gagnants</p>
                      <p className="text-lg font-bold text-blue-600">{filteredStats.totalWinners}</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-xs text-gray-600">Gain moyen</p>
                      <p className="text-lg font-bold text-purple-600">{filteredStats.averageWin}€</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <p className="text-xs text-gray-600">Plus gros gain</p>
                      <p className="text-lg font-bold text-yellow-600">{filteredStats.biggestWin}€</p>
                    </div>
                  </div>
                )}
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
                    {filteredWinners.length > 0 ? (
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

        <div className="mt-8 text-center">
          <Link 
            href="/roue-fortune"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Retour au jeu
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}