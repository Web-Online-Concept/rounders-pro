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
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Segments de la roue
  const segments = [
    { value: 0, label: '0€', color: '#FF6B6B' },
    { value: 5, label: '5€', color: '#4ECDC4' },
    { value: 0, label: '0€', color: '#45B7D1' },
    { value: 1, label: '1€', color: '#96CEB4' },
    { value: 0, label: '0€', color: '#FFEAA7' },
    { value: 3, label: '3€', color: '#DDA0DD' },
    { value: 0, label: '0€', color: '#98D8C8' },
    { value: 50, label: '50€', color: '#FFD700' },
    { value: 0, label: '0€', color: '#F7DC6F' },
    { value: 10, label: '10€', color: '#BB8FCE' }
  ];

  useEffect(() => {
    checkGameStatus();
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

  const handleSpin = () => {
    if (!pseudo.trim() || pseudo.length < 3 || isSpinning) return;
    
    alert('API spin pas encore créée - on va le faire à l\'étape suivante !');
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
            {/* Roue */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <svg
                  className="w-full h-full transform transition-transform duration-[4000ms] ease-out"
                  style={{ transform: `rotate(${rotation}deg)` }}
                  viewBox="0 0 200 200"
                >
                  {segments.map((segment, index) => {
                    const angle = (360 / segments.length) * index;
                    const angleRad = (angle * Math.PI) / 180;
                    const nextAngleRad = ((angle + 360 / segments.length) * Math.PI) / 180;
                    const x1 = 100 + 90 * Math.cos(angleRad);
                    const y1 = 100 + 90 * Math.sin(angleRad);
                    const x2 = 100 + 90 * Math.cos(nextAngleRad);
                    const y2 = 100 + 90 * Math.sin(nextAngleRad);
                    const largeArcFlag = 0;

                    return (
                      <g key={index}>
                        <path
                          d={`M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={segment.color}
                          stroke="#2a2a2a"
                          strokeWidth="2"
                        />
                        <text
                          x={100 + 60 * Math.cos((angleRad + nextAngleRad) / 2)}
                          y={100 + 60 * Math.sin((angleRad + nextAngleRad) / 2)}
                          fill="white"
                          fontSize="14"
                          fontWeight="bold"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${angle + 360 / segments.length / 2}, ${100 + 60 * Math.cos((angleRad + nextAngleRad) / 2)}, ${100 + 60 * Math.sin((angleRad + nextAngleRad) / 2)})`}
                        >
                          {segment.label}
                        </text>
                      </g>
                    );
                  })}
                  <circle cx="100" cy="100" r="15" fill="#FFD700" stroke="#FFA500" strokeWidth="3" />
                </svg>

                {/* Flèche indicatrice - EN HAUT, POINTE VERS LE BAS */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-red-500"></div>
                </div>
              </div>

              <p className="text-yellow-600 font-semibold mt-6 text-center">
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
                    disabled={isSpinning}
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    ⚠️ Entrez votre pseudo EXACTEMENT comme sur Stake (respectez les majuscules/minuscules)
                  </p>
                </div>

                <button
                  onClick={handleSpin}
                  disabled={!pseudo.trim() || pseudo.length < 3 || isSpinning}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    pseudo.trim() && pseudo.length >= 3 && !isSpinning
                      ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSpinning ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      La roue tourne...
                    </span>
                  ) : (
                    '🎰 Tourner la roue !'
                  )}
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