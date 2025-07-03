'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JeuRouePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [pseudo, setPseudo] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);
  const [result, setResult] = useState(null);
  const [gameStatus, setGameStatus] = useState('loading');
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [todayWinners, setTodayWinners] = useState([]);
  const [dailyBudget, setDailyBudget] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
      const response = await fetch('/api/jeu-roue/status');
      const data = await response.json();
      
      setGameStatus(data.isActive ? 'active' : 'inactive');
      setRemainingBudget(data.remainingBudget || 0);
      setDailyBudget(data.dailyBudget || 0);
      setTodayWinners(data.todayWinners || []);
      
      if (data.hasPlayed) {
        setHasPlayed(true);
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur:', error);
      setIsLoading(false);
    }
  };

  const handleSpin = async () => {
    if (!pseudo.trim() || pseudo.length < 3) {
      alert('Veuillez entrer un pseudo valide (minimum 3 caractères)');
      return;
    }

    if (isSpinning || hasPlayed) return;

    setIsSpinning(true);
    setShowResult(false);

    try {
      const response = await fetch('/api/jeu-roue/spin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pseudo: pseudo.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors du tirage');
      }

      // Animation de la roue
      const segmentAngle = 360 / segments.length;
      const targetAngle = data.result.index * segmentAngle;
      const extraSpins = 5;
      const totalRotation = rotation + (extraSpins * 360) + (360 - targetAngle);
      
      setRotation(totalRotation);

      setTimeout(() => {
        setResult(data.result);
        setHasPlayed(true);
        setShowResult(true);
        setIsSpinning(false);
        checkGameStatus();
        
        if (data.remainingBudget === 0) {
          setGameStatus('inactive');
          setRemainingBudget(0);
        } else if (data.remainingBudget !== undefined) {
          setRemainingBudget(data.remainingBudget);
        }
      }, 4000);

    } catch (error) {
      console.error('Erreur:', error);
      alert(error.message);
      setIsSpinning(false);
    }
  };

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
          {/* Titre et statut */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              🎰 Roue de la Fortune Stake
            </h1>
            
            {gameStatus === 'active' && remainingBudget > 0 ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 inline-block">
                <p className="text-green-400 text-xl font-semibold">
                  ✅ Jeu actif - Budget disponible : {remainingBudget}€
                </p>
              </div>
            ) : (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 inline-block">
                <p className="text-red-400 text-xl font-semibold">
                  ❌ Jeu fermé - Revenez plus tard
                </p>
              </div>
            )}
          </div>

          {/* Liste des gagnants du jour */}
          {todayWinners.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                🏆 Gagnants d'aujourd'hui
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {todayWinners.slice(0, 6).map((winner, index) => (
                  <div key={index} className="bg-gray-700 rounded p-3 flex justify-between items-center">
                    <span className="text-gray-300">{winner.pseudo}</span>
                    <span className="text-green-400 font-bold">{winner.amount}</span>
                  </div>
                ))}
              </div>
              {todayWinners.length > 6 && (
                <a href="/gagnants" className="text-yellow-400 hover:text-yellow-300 text-center block mt-4">
                  Voir tous les gagnants →
                </a>
              )}
            </div>
          )}

          {/* Message si fermé */}
          {gameStatus === 'inactive' && (
            <div className="text-center py-12">
              <div className="bg-red-500/10 border-2 border-red-500 rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-red-400 mb-4">
                  🔒 Jeu temporairement fermé
                </h2>
                <p className="text-gray-300 text-lg mb-4">
                  Le budget du jour est épuisé ou le jeu est en maintenance.
                </p>
                <p className="text-gray-400">
                  Revenez plus tard pour tenter votre chance !
                </p>
              </div>
            </div>
          )}

          {/* Jeu actif */}
          {gameStatus === 'active' && remainingBudget > 0 && (
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

                  {/* Flèche indicatrice */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-red-500"></div>
                  </div>
                </div>

                {/* Budget restant */}
                <div className="text-center mt-6">
                  <p className="text-yellow-400 text-xl font-semibold">
                    💰 Il reste encore {remainingBudget}€ à gagner !
                  </p>
                </div>
              </div>

              {/* Formulaire */}
              <div className="bg-gray-800 rounded-lg p-6">
                {!hasPlayed ? (
                  <>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                      Tentez votre chance !
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">
                          Votre pseudo Stake
                        </label>
                        <input
                          type="text"
                          value={pseudo}
                          onChange={(e) => setPseudo(e.target.value)}
                          placeholder="Entrez votre pseudo"
                          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          disabled={isSpinning}
                        />
                        <p className="text-gray-400 text-sm mt-2">
                          ⚠️ Entrez votre pseudo EXACTEMENT comme sur Stake (respectez les majuscules/minuscules)
                        </p>
                      </div>

                      <button
                        onClick={handleSpin}
                        disabled={isSpinning || !pseudo.trim()}
                        className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                          isSpinning || !pseudo.trim()
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-yellow-500 hover:bg-yellow-400 text-gray-900 transform hover:scale-105'
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

                      <p className="text-gray-400 text-sm text-center">
                        Une seule participation par jour
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    {showResult && result && (
                      <div className={`p-6 rounded-lg ${
                        result.value > 0 ? 'bg-green-500/20 border-2 border-green-500' : 'bg-red-500/20 border-2 border-red-500'
                      }`}>
                        <h3 className="text-2xl font-bold mb-2">
                          {result.value > 0 ? '🎉 Félicitations !' : '😢 Dommage !'}
                        </h3>
                        <p className="text-3xl font-bold mb-4">
                          {result.value > 0 ? (
                            <span className="text-green-400">Vous avez gagné {result.value}€ !</span>
                          ) : (
                            <span className="text-red-400">Vous n'avez rien gagné</span>
                          )}
                        </p>
                        {result.value > 0 && (
                          <p className="text-gray-300">
                            Vos gains seront crédités sur votre compte Stake sous 24-48h
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="mt-6 space-y-4">
                      <p className="text-gray-400">
                        Vous avez déjà joué aujourd'hui. Revenez demain !
                      </p>
                      <a
                        href="https://stake.com/?c=ROUNDERS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                      >
                        Jouer sur Stake →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Comment ça marche */}
          <section className="mt-16 bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Comment ça marche ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Inscrivez-vous</h3>
                <p className="text-gray-400">
                  Créez votre compte sur Stake avec notre lien affilié
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Tournez la roue</h3>
                <p className="text-gray-400">
                  Une chance par jour de gagner jusqu'à 50€
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Recevez vos gains</h3>
                <p className="text-gray-400">
                  Les gains sont versés sur votre compte Stake sous 24-48h
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}