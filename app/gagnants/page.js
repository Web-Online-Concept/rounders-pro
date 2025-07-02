'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GagnantsPage() {
  const [winners, setWinners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalDistributed: 0,
    totalWinners: 0,
    biggestWin: 0,
    averageWin: 0
  });

  useEffect(() => {
    loadWinners();
  }, []);

  const loadWinners = async () => {
    try {
      // Appeler l'API publique pour récupérer les gagnants
      const response = await fetch('/api/jeu-roue/winners');
      if (response.ok) {
        const data = await response.json();
        setWinners(data.winners);
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des gagnants:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Grouper les gagnants par date
  const groupedWinners = winners.reduce((groups, winner) => {
    const date = winner.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(winner);
    return groups;
  }, {});

  // Formater la date pour l'affichage
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Reset les heures pour comparer uniquement les dates
    today.setHours(0, 0, 0, 0);
    yesterday.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    if (date.getTime() === today.getTime()) {
      return "Aujourd'hui";
    } else if (date.getTime() === yesterday.getTime()) {
      return "Hier";
    } else {
      return date.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
    }
  };

  // Calculer le total par jour
  const getDayTotal = (dayWinners) => {
    return dayWinners.reduce((sum, winner) => sum + winner.amount, 0);
  };

  // Obtenir l'emoji selon le montant
  const getEmoji = (amount) => {
    if (amount === 50) return '👑';
    if (amount === 10) return '🎉';
    if (amount >= 3) return '💰';
    return '✨';
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a0f1a] to-[#0f0a0f]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-white">Chargement des gagnants...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="pb-16 md:pb-0 min-h-screen bg-gradient-to-b from-[#1a0f1a] to-[#0f0a0f]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#ff6b00] to-[#ff8533] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🏆 Tous les Gagnants
            </h1>
            <p className="text-xl opacity-90">
              Historique des gagnants à la Roue de la Fortune
            </p>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-8 -mt-8">
          <div className="container mx-auto px-4">
            <div className="bg-[#2a1f2a] rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#ff6b00]">{stats.totalDistributed}€</div>
                  <div className="text-sm text-gray-400">Total Distribué</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stats.totalWinners}</div>
                  <div className="text-sm text-gray-400">Total Gagnants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">{stats.biggestWin}€</div>
                  <div className="text-sm text-gray-400">Plus Gros Gain</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">{stats.averageWin}€</div>
                  <div className="text-sm text-gray-400">Gain Moyen</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retour au jeu */}
        <section className="py-4">
          <div className="container mx-auto px-4 text-center">
            <a 
              href="/jeu-roue" 
              className="inline-flex items-center gap-2 text-[#ff6b00] hover:text-[#ff8533] font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Retour au jeu
            </a>
          </div>
        </section>

        {/* Liste des gagnants */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {Object.keys(groupedWinners).length === 0 ? (
                <div className="text-center text-gray-400 py-12">
                  <p className="text-xl">Aucun gagnant pour le moment</p>
                  <p className="mt-2">Soyez le premier à tenter votre chance !</p>
                </div>
              ) : (
                Object.entries(groupedWinners)
                  .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
                  .map(([date, dayWinners]) => (
                    <div key={date} className="bg-[#2a1f2a] rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white">
                          📅 {formatDate(date)}
                        </h3>
                        <span className="text-[#ff6b00] font-bold">
                          Total: {getDayTotal(dayWinners)}€
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {dayWinners.map((winner, index) => (
                          <div 
                            key={index} 
                            className="flex items-center justify-between bg-[#1a0f1a] p-3 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{getEmoji(winner.amount)}</span>
                              <div>
                                <span className="font-medium text-white">{winner.pseudo}</span>
                                <span className="text-gray-400 text-sm ml-2">{winner.time}</span>
                              </div>
                            </div>
                            <span className={`font-bold ${
                              winner.amount >= 10 ? 'text-green-500 text-lg' : 'text-gray-300'
                            }`}>
                              +{winner.amount}€
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Tentez votre chance !
            </h2>
            <p className="text-gray-400 mb-6">
              Suivez @rounders_pro sur Twitter pour ne rater aucun jeu
            </p>
            <a
              href="https://twitter.com/rounders_pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6b00] text-white px-6 py-3 rounded-lg hover:bg-[#ff8533] transition-colors"
            >
              Suivre @rounders_pro
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}