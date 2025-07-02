'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JeuRoue() {
  const [gameStatus, setGameStatus] = useState('loading'); // loading, inactive, active, ended
  const [isSpinning, setIsSpinning] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [result, setResult] = useState(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [formData, setFormData] = useState({
    stakeUsername: '',
    cryptoAddress: '',
    cryptoType: 'USDT'
  });

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
    // Simuler le chargement de l'état du jeu
    setTimeout(() => {
      setGameStatus('active'); // Pour tester, on met 'active'
    }, 500);
  }, []);

  const handleSpin = async (e) => {
    e.preventDefault();
    
    if (!formData.stakeUsername && !formData.cryptoAddress) {
      alert('Veuillez remplir au moins un champ');
      return;
    }

    setIsSpinning(true);
    
    // Simuler la rotation (3-4 secondes)
    const spinDuration = 3000 + Math.random() * 1000;
    
    // Animation de rotation
    const wheel = document.getElementById('wheel');
    const randomRotation = 720 + Math.random() * 720; // Au moins 2 tours
    wheel.style.transform = `rotate(${randomRotation}deg)`;
    
    setTimeout(() => {
      // Simuler un résultat
      const randomIndex = Math.floor(Math.random() * segments.length);
      setResult(segments[randomIndex]);
      setIsSpinning(false);
      setIsRevealing(true);
      
      // Attendre 5 secondes avant d'afficher le résultat
      setTimeout(() => {
        setHasPlayed(true);
        setIsRevealing(false);
      }, 5000);
    }, spinDuration);
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
                        
                        <form onSubmit={handleSpin}>
                          <div className="mb-6">
                            <h3 className="font-semibold mb-3">Option 1 : Affilié Rounders</h3>
                            <input
                              type="text"
                              placeholder="Votre pseudo Stake"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={formData.stakeUsername}
                              onChange={(e) => setFormData({...formData, stakeUsername: e.target.value})}
                              disabled={isSpinning || isRevealing}
                            />
                          </div>

                          <div className="text-center mb-6">
                            <span className="text-gray-500">OU</span>
                          </div>

                          <div className="mb-6">
                            <h3 className="font-semibold mb-3">Option 2 : Participation publique</h3>
                            <select
                              className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={formData.cryptoType}
                              onChange={(e) => setFormData({...formData, cryptoType: e.target.value})}
                              disabled={isSpinning}
                            >
                              <option value="USDT">USDT (TRC20)</option>
                              <option value="BTC">Bitcoin</option>
                              <option value="ETH">Ethereum</option>
                              <option value="LTC">Litecoin</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Votre adresse crypto"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={formData.cryptoAddress}
                              onChange={(e) => setFormData({...formData, cryptoAddress: e.target.value})}
                              disabled={isSpinning}
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSpinning}
                            className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${
                              isSpinning 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-orange-500 hover:bg-orange-600'
                            }`}
                          >
                            {isSpinning ? 'La roue tourne...' : 'Tourner la roue !'}
                          </button>
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
                        Pour recevoir votre gain, partagez votre résultat sur Twitter avec #RoundersWin
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
      </main>

      <Footer />
    </>
  );
}