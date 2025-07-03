'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RoueFortunePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [gameStatus, setGameStatus] = useState('loading');
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [dailyBudget, setDailyBudget] = useState(0);
  const [todayWinners, setTodayWinners] = useState([]);
  const [pseudo, setPseudo] = useState('');

  useEffect(() => {
    checkGameStatus();
    // Rafraîchir toutes les 30 secondes
    const interval = setInterval(checkGameStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const checkGameStatus = async () => {
    try {
      const response = await fetch('/api/roue-fortune/status');
      const data = await response.json();
      
      setGameStatus(data.isActive ? 'active' : 'inactive');
      setRemainingBudget(data.remainingBudget || 0);
      setDailyBudget(data.dailyBudget || 0);
      setTodayWinners(data.todayWinners || []);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur:', error);
      setGameStatus('inactive');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎰 Roue de la Fortune Stake
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tentez votre chance et gagnez jusqu'à 50€ par jour !
          </p>
        </div>

        {/* État du jeu */}
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              {gameStatus === 'active' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
                  <p className="text-green-800 text-lg font-semibold">
                    ✅ Jeu actif - Budget disponible : {remainingBudget}€ sur {dailyBudget}€
                  </p>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 inline-block">
                  <p className="text-red-800 text-lg font-semibold">
                    ❌ Jeu fermé - Budget épuisé
                  </p>
                </div>
              )}
            </div>

            {/* Liste des gagnants du jour */}
            {todayWinners.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🏆 Gagnants d'aujourd'hui
                </h3>
                <div className="space-y-2">
                  {todayWinners.slice(0, 5).map((winner, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-3 rounded">
                      <span className="text-gray-700">{winner.pseudo}</span>
                      <span className="text-green-600 font-bold">{winner.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Zone du jeu */}
        {!isLoading && gameStatus === 'active' && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Roue (placeholder) */}
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                <p className="text-gray-600">La roue ici</p>
              </div>
              <p className="text-yellow-600 font-semibold mt-4">
                💰 Il reste {remainingBudget}€ à gagner !
              </p>
            </div>

            {/* Formulaire */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tentez votre chance !
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Votre pseudo Stake
                  </label>
                  <input
                    type="text"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    placeholder="Entrez votre pseudo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    ⚠️ Entrez votre pseudo EXACTEMENT comme sur Stake (respectez les majuscules/minuscules)
                  </p>
                </div>

                <button
                  disabled={!pseudo.trim() || pseudo.length < 3}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    pseudo.trim() && pseudo.length >= 3
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  🎰 Tourner la roue !
                </button>

                <p className="text-gray-500 text-sm text-center">
                  Une seule participation par jour
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Message si fermé */}
        {!isLoading && gameStatus === 'inactive' && (
          <div className="text-center py-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                🔒 Jeu temporairement fermé
              </h2>
              <p className="text-gray-700 mb-4">
                Le budget du jour est épuisé. Revenez demain pour tenter votre chance !
              </p>
              <a 
                href="https://stake.com/?c=ROUNDERS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Jouer sur Stake →
              </a>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}