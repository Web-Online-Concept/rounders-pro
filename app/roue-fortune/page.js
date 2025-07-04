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
  const [hasPlayed, setHasPlayed] = useState(false);
  const [result, setResult] = useState(null);
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

  const handleSpin = async () => {
    if (!pseudo.trim() || pseudo.length < 3 || isSpinning || hasPlayed) return;

    setIsSpinning(true);
    setShowResult(false);

    try {
      const response = await fetch('/api/roue-fortune/spin', {
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

      // Animation de la roue - CORRECTION CRITIQUE
      const segmentAngle = 360 / segments.length; // 36°
      
      // La flèche est en HAUT (midi/12h), donc on doit ajuster
      // Pour qu'un segment soit sous la flèche, il doit être à 270° (car 0° = 3h)
      // On veut que le segment gagnant soit à 270° (sous la flèche)
      const winningSegmentStartAngle = data.result.index * segmentAngle;
      const winningSegmentCenterAngle = winningSegmentStartAngle + (segmentAngle / 2);
      
      // Calculer combien il faut tourner pour que le centre du segment soit sous la flèche
      const targetRotation = 270 - winningSegmentCenterAngle;
      
      // Ajouter des tours complets + la rotation finale
      const extraSpins = 5; // 5 tours complets
      const totalRotation = rotation + (extraSpins * 360) + targetRotation;
      
      console.log('Debug rotation:', {
        index: data.result.index,
        value: data.result.value,
        winningSegmentCenterAngle,
        targetRotation,
        totalRotation
      });
      
      setRotation(totalRotation);

      // Attendre la fin de l'animation
      setTimeout(() => {
        setResult(data.result);
        setHasPlayed(true);
        setShowResult(true);
        setIsSpinning(false);
        
        if (data.remainingBudget !== undefined) {
          setRemainingBudget(data.remainingBudget);
          if (data.remainingBudget === 0) {
            setGameStatus('inactive');
          }
        }
        
        checkGameStatus();
      }, 4000);

    } catch (error) {
      console.error('Erreur:', error);
      alert(error.message);
      setIsSpinning(false);
    }
  };

  const shareOnX = () => {
    const text = result.value > 0 
      ? `Je viens de gagner ${result.value}€ sur la Roue de la Fortune @rounders_pro ! 🎰💰`
      : `Je viens de tenter ma chance sur la Roue de la Fortune @rounders_pro ! 🎰`;
    const url = 'https://www.rounders.pro/roue-fortune';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎰 Roue de la Fortune Stake
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tentez votre chance et gagnez jusqu&apos;à 50€ par jour !
          </p>
        </div>

        {/* Nouvelle pub pour X */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 mb-8 max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🚀 Rejoignez-nous sur X !
          </h2>
          <p className="text-gray-300 mb-4">
            Suivez @rounders_pro pour participer à tous nos jeux et concours exclusifs
          </p>
          <a 
            href="https://x.com/rounders_pro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Suivre sur X
          </a>
        </div>

        <div className="text-center mb-8">
          {gameStatus === 'active' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
              <p className="text-green-800 text-lg font-semibold">
                ✅ Jeu en cours - Reste à gagner : {remainingBudget}€ sur {dailyBudget}€
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

        {gameStatus === 'active' && (
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
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

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-red-500"></div>
                </div>
              </div>

              <p className="text-yellow-600 font-semibold mt-6 text-center">
                💰 Il reste {remainingBudget}€ à gagner !
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              {!hasPlayed && (
                <div>
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
                      {isSpinning ? 'La roue tourne...' : '🎰 Tourner la roue !'}
                    </button>

                    <p className="text-gray-500 text-sm text-center">
                      Une seule participation par jour
                    </p>
                  </div>

                  {/* Section paiement */}
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 mb-2">
                      💸 Comment recevez-vous vos gains ?
                    </h3>
                    <p className="text-sm text-yellow-800">
                      Les gains sont versés via le système de pourboire (tip) de Stake directement sur votre compte. 
                      <strong> Attention :</strong> Assurez-vous d&apos;entrer votre pseudo EXACTEMENT comme sur Stake. 
                      Toute erreur de saisie empêchera le versement et nous ne pourrons pas être tenus responsables.
                    </p>
                  </div>
                </div>
              )}

              {hasPlayed && (
                <div className="text-center">
                  {showResult && result && (
                    <div className={`p-6 rounded-lg mb-6 ${
                      result.value > 0 ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
                    }`}>
                      <h3 className="text-2xl font-bold mb-2">
                        {result.value > 0 ? '🎉 Félicitations !' : '😢 Dommage !'}
                      </h3>
                      <p className="text-3xl font-bold mb-4">
                        {result.value > 0 ? (
                          <span className="text-green-600">Vous avez gagné {result.value}€ !</span>
                        ) : (
                          <span className="text-red-600">Vous n&apos;avez rien gagné</span>
                        )}
                      </p>
                      {result.value > 0 && (
                        <p className="text-gray-600">
                          Vos gains seront versés sur votre compte Stake sous 24-48h via le système de pourboire
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Vous avez déjà joué aujourd&apos;hui. Revenez demain !
                    </p>
                    
                    <button
                      onClick={shareOnX}
                      className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Partager sur X
                    </button>

                    <a 
                      href="https://stake.com/?c=ROUNDERS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Jouer sur Stake
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section info déplacée ici */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            ℹ️ Jeu ouvert à TOUS les joueurs Stake !
          </h2>
          <ul className="space-y-2 text-blue-800">
            <li>✅ Vous avez un compte Stake ? Vous pouvez participer !</li>
            <li>✅ Pas besoin d&apos;être affilié ou inscrit via notre lien</li>
            <li>✅ Une participation gratuite par jour pour tout le monde</li>
          </ul>
        </div>

        {/* Gagnants du jour */}
        <div className="bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🏆 Tous les gagnants d&apos;aujourd&apos;hui
          </h3>
          
          {todayWinners.length > 0 ? (
            <>
              <div className="grid gap-3 md:grid-cols-2 mb-6">
                {todayWinners.map((winner, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{winner.pseudo}</p>
                        <p className="text-sm text-gray-500">{winner.time}</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-green-600">{winner.amount}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Total distribué aujourd&apos;hui : <span className="font-bold text-gray-900">{dailyBudget - remainingBudget}€</span>
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg mb-4">
                Aucun gagnant pour le moment. Soyez le premier !
              </p>
            </div>
          )}
          
          <div className="text-center">
            <a 
              href="/gagnants"
              className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Voir l&apos;historique complet des gagnants →
            </a>
          </div>
        </div>

        {gameStatus === 'inactive' && (
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
                Jouer sur Stake
              </a>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}