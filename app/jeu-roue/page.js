'use client';

import { useState, useEffect } from 'react';
import { AFFILIATE_LINK } from '../config/affiliate';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JeuRoue() {
  const [gameStatus, setGameStatus] = useState('loading'); // loading, inactive, active, ended
  const [isSpinning, setIsSpinning] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [result, setResult] = useState(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [formData, setFormData] = useState({
    stakeUsername: ''
  });
  
  // Gagnants du jour (chargés depuis l'API)
  const [todayWinners, setTodayWinners] = useState([]);
  const [remainingBudget, setRemainingBudget] = useState(null);

  const segments = [
    { value: 0, color: '#EF4444', label: '0€' },
    { value: 1, color: '#F59E0B', label: '1€' },
    { value: 2, color: '#10B981', label: '2€' },
    { value: 3, color: '#3B82F6', label: '3€' },
    { value: 4, color: '#8B5CF6', label: '4€' },
    { value: 5, color: '#EC4899', label: '5€' },
    { value: 10, color: '#14B8A6', label: '10€' },
    { value: 50, color: '#F97316', label: '50€' }
  ];

  useEffect(() => {
    // Charger l'état du jeu depuis l'API
    checkGameStatus();
  }, []);

  const checkGameStatus = async () => {
    try {
      const response = await fetch('/api/jeu-roue/status');
      const data = await response.json();
      
      console.log('Status API response:', data); // Debug
      
      if (data.isActive) {
        setGameStatus('active');
        setRemainingBudget(data.remainingBudget);
      } else {
        setGameStatus(data.reason === 'budget' ? 'ended' : 'inactive');
      }
      
      // Charger les gagnants du jour
      if (data.todayWinners) {
        setTodayWinners(data.todayWinners);
      }
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      setGameStatus('inactive');
    }
  };

  const handleSpin = async (e) => {
    e.preventDefault();
    
    if (!formData.stakeUsername) {
      alert('Veuillez entrer votre pseudo Stake');
      return;
    }

    setIsSpinning(true);
    
    try {
      // Appeler l'API pour obtenir le résultat
      const response = await fetch('/api/jeu-roue/spin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo: formData.stakeUsername  // CHANGÉ ICI : pseudo au lieu de stakeUsername
        })
      });

      const data = await response.json();

      if (!data.success) {
        alert(data.error || 'Une erreur est survenue');
        setIsSpinning(false);
        return;
      }

      // Utiliser le résultat de l'API
      const selectedSegment = segments[data.result.index];
      
      if (!selectedSegment) {
        console.error('Segment non trouvé:', data.result);
        alert('Erreur: résultat invalide');
        setIsSpinning(false);
        return;
      }
      
      // Calculer l'angle pour s'arrêter sur le bon segment
      const segmentAngle = 360 / segments.length; // 45° par segment
      
      // Position initiale : le triangle est entre le segment 7 (50€) et le segment 0 (0€)
      // Pour centrer le segment 0 sous le triangle, il faut tourner de segmentAngle/2 (22.5°)
      // Pour centrer n'importe quel segment X sous le triangle :
      // rotation = (X * segmentAngle) + (segmentAngle/2)
      
      // Mais comme on tourne dans le sens horaire et que les segments sont numérotés
      // dans le sens horaire, pour amener le segment X en haut, on doit tourner de :
      const baseRotation = -(data.result.index * segmentAngle + segmentAngle/2);
      
      // Ajouter plusieurs tours complets pour l'animation
      const spins = 5;
      
      // Ajouter un peu d'aléatoire dans le segment (zone sûre pour éviter les bords)
      const randomOffset = (Math.random() - 0.5) * segmentAngle * 0.4;
      
      // Rotation finale
      const finalRotation = (spins * 360) + baseRotation + randomOffset;
      
      // Animation de rotation
      const wheel = document.getElementById('wheel');
      wheel.style.transform = `rotate(${finalRotation}deg)`;
      
      // Durée de l'animation
      const spinDuration = 4000;
      
      setTimeout(() => {
        setResult(selectedSegment);
        setIsSpinning(false);
        setIsRevealing(true);
        
        // Attendre 5 secondes avant d'afficher le résultat
        setTimeout(() => {
          setHasPlayed(true);
          setIsRevealing(false);
          
          // Ajouter le gagnant à la liste seulement si gain > 0
          if (selectedSegment.value > 0) {
            const newWinner = {
              username: formData.stakeUsername.substring(0, 3) + '***',
              amount: selectedSegment.label,
              time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
            };
            setTodayWinners(prev => [newWinner, ...prev]);
          }
          
          // Si le budget est épuisé, actualiser le statut
          if (data.remainingBudget === 0) {
            setGameStatus('ended');
          } else {
            setRemainingBudget(data.remainingBudget);
          }
        }, 5000);
      }, spinDuration);
      
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
      setIsSpinning(false);
    }
  };

  if (gameStatus === 'loading') {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4">Chargement...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="pb-16 md:pb-0 min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🎡 Roue de la Fortune Rounders
            </h1>
            <p className="text-xl opacity-90">
              Tentez votre chance et gagnez jusqu&apos;à 50€ en cash !
            </p>
            {gameStatus === 'active' && remainingBudget !== null && (
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur">
                  <span className="text-lg font-semibold">
                    💰 Il reste encore {remainingBudget}€ à gagner !
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* État du jeu */}
        {gameStatus === 'inactive' && (
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto bg-yellow-50 border border-yellow-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                  🚫 Aucun jeu actif pour le moment
                </h2>
                <p className="text-yellow-700 mb-6">
                  Suivez-nous sur Twitter @rounders_pro pour être notifié du prochain jeu !
                </p>
                <a
                  href="https://twitter.com/rounders_pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                >
                  Suivre @rounders_pro
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        )}

        {gameStatus === 'active' && !hasPlayed && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Roue */}
                  <div className="relative">
                    <div className="relative w-80 h-80 mx-auto">
                      {/* Flèche indicatrice */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-red-600"></div>
                      </div>
                      
                      {/* Roue */}
                      <svg
                        id="wheel"
                        className="w-full h-full transition-transform duration-[4000ms] ease-out"
                        viewBox="0 0 200 200"
                        style={{ transform: 'rotate(0deg)' }}
                      >
                        {segments.map((segment, index) => {
                          const angle = (360 / segments.length);
                          const startAngle = angle * index - 90;
                          const endAngle = startAngle + angle;
                          
                          const x1 = 100 + 90 * Math.cos(startAngle * Math.PI / 180);
                          const y1 = 100 + 90 * Math.sin(startAngle * Math.PI / 180);
                          const x2 = 100 + 90 * Math.cos(endAngle * Math.PI / 180);
                          const y2 = 100 + 90 * Math.sin(endAngle * Math.PI / 180);
                          
                          const labelAngle = startAngle + angle / 2;
                          const labelX = 100 + 60 * Math.cos(labelAngle * Math.PI / 180);
                          const labelY = 100 + 60 * Math.sin(labelAngle * Math.PI / 180);
                          
                          return (
                            <g key={index}>
                              <path
                                d={`M 100 100 L ${x1} ${y1} A 90 90 0 0 1 ${x2} ${y2} Z`}
                                fill={segment.color}
                                stroke="white"
                                strokeWidth="2"
                              />
                              <text
                                x={labelX}
                                y={labelY}
                                fill="white"
                                fontSize="16"
                                fontWeight="bold"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                transform={`rotate(${labelAngle + 90}, ${labelX}, ${labelY})`}
                              >
                                {segment.label}
                              </text>
                            </g>
                          );
                        })}
                        
                        {/* Centre de la roue */}
                        <circle cx="100" cy="100" r="20" fill="white" />
                        <circle cx="100" cy="100" r="15" fill="#1F2937" />
                      </svg>
                    </div>
                  </div>

                  {/* Formulaire */}
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    {!isRevealing ? (
                      <>
                        <h2 className="text-2xl font-bold mb-6">Participez au jeu !</h2>
                        
                        {remainingBudget !== null && (
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 text-center">
                            <p className="text-sm font-semibold text-orange-800">
                              🎯 Budget restant : {remainingBudget}€
                            </p>
                          </div>
                        )}
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                          <p className="text-sm text-blue-800">
                            <strong>📢 Ouvert à tous les joueurs Stake !</strong><br/>
                            Les gains seront versés via le système de pourboires Stake.
                            Assurez-vous d&apos;avoir un compte actif pour recevoir vos gains.
                          </p>
                        </div>
                        
                        <form onSubmit={handleSpin}>
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Votre pseudo Stake
                            </label>
                            <input
                              type="text"
                              placeholder="Entrez votre pseudo exact (sensible à la casse)"
                              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={formData.stakeUsername}
                              onChange={(e) => setFormData({...formData, stakeUsername: e.target.value})}
                              disabled={isSpinning || isRevealing}
                              required
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              ⚠️ Attention : Entrez votre pseudo EXACTEMENT comme sur Stake
                            </p>
                          </div>

                          <button
                            type="submit"
                            disabled={isSpinning || isRevealing}
                            className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${
                              isSpinning || isRevealing
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-orange-500 hover:bg-orange-600'
                            }`}
                          >
                            {isSpinning ? 'La roue tourne...' : 'Tourner la roue !'}
                          </button>
                          
                          <p className="text-center text-xs text-gray-500 mt-4">
                            Pas encore sur Stake ? 
                            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                              Créez votre compte
                            </a>
                          </p>
                        </form>
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <div className="animate-pulse">
                          <h2 className="text-3xl font-bold mb-4">🎲 Résultat en cours...</h2>
                          <p className="text-gray-600 text-lg">Voyons ce que vous avez gagné !</p>
                          <div className="mt-8">
                            <div className="inline-flex space-x-2">
                              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Résultat */}
        {hasPlayed && result && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className={`bg-white rounded-lg shadow-lg p-8 ${result.value === 0 ? 'border-2 border-red-500' : 'border-2 border-green-500'}`}>
                  <h2 className="text-3xl font-bold mb-4">
                    {result.value === 0 ? '😔 Dommage !' : '🎉 Félicitations !'}
                  </h2>
                  <p className="text-xl mb-6">
                    {result.value === 0 
                      ? 'Vous n\'avez rien gagné cette fois-ci.' 
                      : `Vous avez gagné ${result.label} !`
                    }
                  </p>
                  {result.value > 0 && (
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <p className="text-green-800">
                        Votre gain sera envoyé via pourboire sur Stake.<br/>
                        <strong>Partagez votre résultat sur Twitter avec #RoundersWin</strong>
                      </p>
                    </div>
                  )}
                  <a
                    href={`https://twitter.com/intent/tweet?text=Je viens de ${result.value === 0 ? 'tenter ma chance' : `gagner ${result.label}`} sur la roue @rounders_pro ! %23RoundersWin`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                  >
                    Partager sur X
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a
                      href="/jeu-roue"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Retour sur la Roue de la Fortune
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {gameStatus === 'ended' && (
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">
                  🏁 Ce jeu est terminé
                </h2>
                <p className="text-gray-700 mb-6">
                  Le budget de ce jeu a été épuisé. Suivez-nous sur Twitter pour le prochain !
                </p>
                <a
                  href="https://twitter.com/rounders_pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                >
                  Suivre @rounders_pro
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Section Gagnants du jour */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                🏆 Gagnants du jour
              </h2>
              
              {todayWinners.length > 0 ? (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="space-y-3">
                    {todayWinners.map((winner, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">
                            {winner.amount === '10€' || winner.amount === '50€' ? '🎉' : '✨'}
                          </span>
                          <div>
                            <span className="font-semibold">{winner.username}</span>
                            <span className="text-gray-500 text-sm ml-2">{winner.time}</span>
                          </div>
                        </div>
                        <span className={`font-bold ${
                          parseInt(winner.amount) >= 10 ? 'text-green-600 text-lg' : 'text-gray-700'
                        }`}>
                          +{winner.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <p>Aucun gagnant pour le moment aujourd&apos;hui</p>
                </div>
              )}
              
              <div className="text-center">
                <a
                  href="/gagnants"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Voir tous les gagnants
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}