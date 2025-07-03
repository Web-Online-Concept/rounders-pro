'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RoueFortunePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [gameStatus, setGameStatus] = useState('loading'); // 'active', 'inactive', 'loading'
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [pseudo, setPseudo] = useState('');

  useEffect(() => {
    // Simulation pour l'instant
    setTimeout(() => {
      setIsLoading(false);
      setGameStatus('active');
      setRemainingBudget(50);
    }, 1000);
  }, []);

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
          <div className="text-center mb-8">
            {gameStatus === 'active' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
                <p className="text-green-800 text-lg font-semibold">
                  ✅ Jeu actif - Budget disponible : {remainingBudget}€
                </p>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 inline-block">
                <p className="text-red-800 text-lg font-semibold">
                  ❌ Jeu fermé - Revenez plus tard
                </p>
              </div>
            )}
          </div>
        )}

        {/* Zone du jeu */}
        {!isLoading && gameStatus === 'active' && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Roue (placeholder) */}
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                <p className="text-gray-600">La roue ici</p>
              </div>
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
                    ⚠️ Entrez votre pseudo EXACTEMENT comme sur Stake
                  </p>
                </div>

                <button
                  disabled={!pseudo.trim()}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    pseudo.trim()
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  🎰 Tourner la roue !
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}