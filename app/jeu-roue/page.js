'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JeuRoue() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);
    setShowResult(false);
    
    // Animation de 3 secondes
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      
      // Simulation : 10% de chance de gagner
      const hasWon = Math.random() < 0.1;
      
      if (hasWon) {
        setResult('win');
        setShowForm(true);
      } else {
        setResult('lose');
      }
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 pb-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              🎰 Roue de la Fortune Rounders
            </h1>
            <p className="text-xl text-gray-600">
              Tentez votre chance chaque jour et gagnez jusqu'à 50€ !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Section Roue */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Faites tourner la roue !</h2>
              
              {/* Roue visuelle */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                {/* Cercle de base */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl ${isSpinning ? 'animate-spin' : ''}`}>
                  {/* Sections de la roue */}
                  <svg viewBox="0 0 200 200" className="w-full h-full rounded-full">
                    {/* Section 1 - Gagné */}
                    <path d="M 100 100 L 100 0 A 100 100 0 0 1 170.71 29.29 Z" fill="#10B981" stroke="white" strokeWidth="2"/>
                    <text x="120" y="40" fill="white" fontSize="14" fontWeight="bold">GAGNÉ!</text>
                    
                    {/* Section 2 - Perdu */}
                    <path d="M 100 100 L 170.71 29.29 A 100 100 0 0 1 200 100 Z" fill="#EF4444" stroke="white" strokeWidth="2"/>
                    <text x="150" y="90" fill="white" fontSize="12">Perdu</text>
                    
                    {/* Section 3 - Perdu */}
                    <path d="M 100 100 L 200 100 A 100 100 0 0 1 170.71 170.71 Z" fill="#EF4444" stroke="white" strokeWidth="2"/>
                    <text x="150" y="140" fill="white" fontSize="12">Perdu</text>
                    
                    {/* Section 4 - Perdu */}
                    <path d="M 100 100 L 170.71 170.71 A 100 100 0 0 1 100 200 Z" fill="#EF4444" stroke="white" strokeWidth="2"/>
                    <text x="110" y="170" fill="white" fontSize="12">Perdu</text>
                    
                    {/* Section 5 - Perdu */}
                    <path d="M 100 100 L 100 200 A 100 100 0 0 1 29.29 170.71 Z" fill="#EF4444" stroke="white" strokeWidth="2"/>
                    <text x="50" y="170" fill="white" fontSize="12">Perdu</text>
                    
                    {/* Section 6 - Perdu */}
                    <path d="M 100 100 L 29.29 170.71 A 100 100 0 0 1 0 100 Z" fill="#EF4444" stroke="white" strokeWidth="2"/>
                    <text x="20" y="140" fill="white" fontSize="12">Perdu</text>
                    
                    {/* Section 7 - Perdu */}
                    <path d="M 100 100 L 0 100 A 100 100 0 0 1 29.29 29.29 Z" fill="#EF4444" stroke="white" strokeWidth="2"/>
                    <text x="20" y="90" fill="white" fontSize="12">Perdu</text>
                    
                    {/* Section 8 - Perdu */}
                    <path d="M 100 100 L 29.29 29.29 A 100 100 0 0 1 100 0 Z" fill="#EF4444" stroke="white" strokeWidth="2"/>
                    <text x="50" y="40" fill="white" fontSize="12">Perdu</text>
                  </svg>
                  
                  {/* Centre de la roue */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg"></div>
                  </div>
                </div>
                
                {/* Flèche indicatrice */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-yellow-400 drop-shadow-lg"></div>
                </div>
              </div>

              {/* Bouton Spin */}
              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all transform hover:scale-105 ${
                  isSpinning 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSpinning ? 'La roue tourne...' : 'LANCER LA ROUE !'}
              </button>

              {/* Résultat */}
              {showResult && (
                <div className={`mt-6 p-4 rounded-lg text-center ${
                  result === 'win' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {result === 'win' ? (
                    <div>
                      <p className="font-bold text-xl mb-2">🎉 FÉLICITATIONS ! Vous avez gagné 10€ !</p>
                      <p className="text-sm">Remplissez le formulaire ci-dessous pour recevoir votre gain.</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-semibold">Dommage, vous n'avez pas gagné cette fois.</p>
                      <p className="text-sm mt-1">Revenez demain pour retenter votre chance !</p>
                    </div>
                  )}
                </div>
              )}

              {/* Formulaire de gain */}
              {showForm && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-green-900 mb-4">Réclamez votre gain</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pseudo Stake
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Votre pseudo sur Stake"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Crypto souhaitée
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>USDT</option>
                        <option>USDC</option>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>LTC</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse de réception
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Votre adresse crypto"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Envoyer ma demande
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Section Infos */}
            <div className="space-y-6">
              {/* Comment ça marche */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Comment ça marche ?</h2>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">1</span>
                    <div>
                      <p className="font-semibold">Une chance par jour</p>
                      <p className="text-sm text-gray-600">Revenez chaque jour pour une nouvelle chance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">2</span>
                    <div>
                      <p className="font-semibold">Lancez la roue</p>
                      <p className="text-sm text-gray-600">Cliquez sur le bouton et croisez les doigts !</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">3</span>
                    <div>
                      <p className="font-semibold">Gagnez instantanément</p>
                      <p className="text-sm text-gray-600">Si vous gagnez, remplissez le formulaire</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">4</span>
                    <div>
                      <p className="font-semibold">Recevez votre gain</p>
                      <p className="text-sm text-gray-600">Paiement en crypto sous 24-48h</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Règles du jeu */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">📋 Règles du jeu</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Maximum <strong>5 gagnants par jour</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Réservé aux <strong>affiliés Rounders</strong> actifs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Une seule participation par jour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Gains distribués en crypto au choix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Paiements vérifiés manuellement</span>
                  </li>
                </ul>
              </div>

              {/* Stats du jour */}
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">📊 Statistiques du jour</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Gagnants aujourd'hui :</span>
                    <span className="font-bold text-2xl text-green-600">2/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Montant total distribué :</span>
                    <span className="font-bold text-xl">20€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Participants :</span>
                    <span className="font-bold">47</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-yellow-200">
                  <p className="text-sm text-gray-600 text-center">
                    Il reste <strong className="text-green-600">3 gains</strong> à distribuer aujourd'hui !
                  </p>
                </div>
              </div>

              {/* CTA Twitter */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Suivez-nous sur X !</h3>
                <p className="mb-4 text-blue-100">
                  Soyez les premiers informés des jeux spéciaux et bonus surprise
                </p>
                <a
                  href="https://x.com/rounders_pro"
                  target="_blank"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @rounders_pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}