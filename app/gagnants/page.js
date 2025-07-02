'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Gagnants() {
  // Données simulées pour la démo
  const [winnersHistory] = useState([
    {
      date: 'Aujourd\'hui',
      totalAmount: 18,
      winners: [
        { username: 'Luc***', amount: '5€', time: '14:32' },
        { username: 'Mar***', amount: '2€', time: '13:15' },
        { username: 'Ale***', amount: '10€', time: '11:47' },
        { username: 'Sop***', amount: '1€', time: '10:23' }
      ]
    },
    {
      date: 'Hier - 1er Janvier 2025',
      totalAmount: 47,
      winners: [
        { username: 'Pau***', amount: '50€', time: '20:15' },
        { username: 'Emi***', amount: '3€', time: '19:42' },
        { username: 'Tho***', amount: '0€', time: '18:30' },
        { username: 'Lea***', amount: '5€', time: '17:22' },
        { username: 'Max***', amount: '2€', time: '16:45' },
        { username: 'Jul***', amount: '10€', time: '15:10' },
        { username: 'Nic***', amount: '0€', time: '14:05' },
        { username: 'Cam***', amount: '1€', time: '12:30' }
      ]
    },
    {
      date: '31 Décembre 2024',
      totalAmount: 35,
      winners: [
        { username: 'Rom***', amount: '10€', time: '22:45' },
        { username: 'Cla***', amount: '5€', time: '21:30' },
        { username: 'Ant***', amount: '0€', time: '20:15' },
        { username: 'Lou***', amount: '2€', time: '19:00' },
        { username: 'Mat***', amount: '3€', time: '17:45' },
        { username: 'Sar***', amount: '10€', time: '16:20' },
        { username: 'Ben***', amount: '5€', time: '15:00' }
      ]
    }
  ]);

  const [stats] = useState({
    totalDistributed: 100,
    totalWinners: 19,
    biggestWin: 50,
    averageWin: 5.26
  });

  return (
    <>
      <Header />
      
      <main className="pb-16 md:pb-0 min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🏆 Tous les Gagnants Rounders
            </h1>
            <p className="text-xl opacity-90">
              Découvrez l&apos;historique complet de nos gagnants
            </p>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-orange-600">{stats.totalDistributed}€</div>
                  <div className="text-sm text-gray-600 mt-1">Total distribué</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600">{stats.totalWinners}</div>
                  <div className="text-sm text-gray-600 mt-1">Gagnants</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-600">{stats.biggestWin}€</div>
                  <div className="text-sm text-gray-600 mt-1">Plus gros gain</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-purple-600">{stats.averageWin}€</div>
                  <div className="text-sm text-gray-600 mt-1">Gain moyen</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historique des gagnants */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {winnersHistory.map((day, dayIndex) => (
                <div key={dayIndex} className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      📅 {day.date}
                    </h3>
                    <span className="text-sm text-gray-600">
                      Total distribué : <span className="font-bold text-orange-600">{day.totalAmount}€</span>
                    </span>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="divide-y divide-gray-100">
                      {day.winners.map((winner, index) => (
                        <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="text-2xl">
                                {winner.amount === '50€' ? '👑' : 
                                 winner.amount === '10€' ? '🎉' : 
                                 winner.amount === '0€' ? '😢' : '✨'}
                              </span>
                              <div>
                                <span className="font-semibold">{winner.username}</span>
                                <span className="text-gray-500 text-sm ml-3">{winner.time}</span>
                              </div>
                            </div>
                            <span className={`font-bold ${
                              winner.amount === '0€' ? 'text-gray-400' :
                              parseInt(winner.amount) >= 10 ? 'text-green-600 text-lg' : 'text-gray-700'
                            }`}>
                              {winner.amount === '0€' ? winner.amount : `+${winner.amount}`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Message de fin */}
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">
                  Plus d&apos;historique à venir...
                </p>
                <a
                  href="https://twitter.com/rounders_pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Suivez-nous pour ne rien manquer
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🎮 Tentez votre chance !
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez la liste des gagnants dès maintenant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/jeu-roue"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Jouer maintenant
              </a>
              <a
                href="/avantages-rounders"
                className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Découvrir Rounders
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}