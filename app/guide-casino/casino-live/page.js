// app/guide-casino/casino-live/page.js
import Link from 'next/link';

export default function CasinoLivePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Casino Live</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🏆 Casino Live
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le casino live révolutionne le jeu en ligne en combinant le confort de votre domicile 
          avec l'authenticité d'un vrai casino. Croupiers réels, interaction sociale et transparence 
          totale : découvrez comment maximiser cette expérience unique.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Qu'est-ce que le casino live */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Qu'est-ce que le Casino Live ?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-purple-50 rounded p-4">
              <p className="text-sm mb-4">
                Le casino live stream en temps réel depuis de vrais studios ou casinos. 
                Des croupiers professionnels animent les jeux avec de vraies cartes, roulettes 
                et équipements, tandis que vous participez via une interface interactive.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h3 className="font-bold text-purple-800 mb-2">🎥 Technologie</h3>
                  <ul className="text-xs space-y-1">
                    <li>• Streaming HD/4K temps réel</li>
                    <li>• Multiples angles de caméra</li>
                    <li>• OCR lecture automatique</li>
                    <li>• Interface interactive overlay</li>
                    <li>• Chat live avec croupier</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h3 className="font-bold text-purple-800 mb-2">🏢 Studios</h3>
                  <ul className="text-xs space-y-1">
                    <li>• Evolution Gaming (leader)</li>
                    <li>• Pragmatic Play Live</li>
                    <li>• Playtech</li>
                    <li>• Ezugi</li>
                    <li>• Authentic Gaming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Avantages du live */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ✨ Pourquoi Choisir le Casino Live ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Transparence Totale</strong>
                  <p className="text-sm text-green-100">Vous voyez chaque action en direct</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Interaction Sociale</strong>
                  <p className="text-sm text-green-100">Chat avec croupier et joueurs</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Ambiance Authentique</strong>
                  <p className="text-sm text-green-100">L'atmosphère d'un vrai casino</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Pas de RNG</strong>
                  <p className="text-sm text-green-100">Résultats 100% physiques</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Professionnalisme</strong>
                  <p className="text-sm text-green-100">Croupiers formés et courtois</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Variété de Jeux</strong>
                  <p className="text-sm text-green-100">Classiques + innovations exclusives</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Limites Flexibles</strong>
                  <p className="text-sm text-green-100">De 0.50€ à 100,000€+</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Mobile Optimisé</strong>
                  <p className="text-sm text-green-100">Jouez partout en HD</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Types de jeux live */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🎮 Les Jeux Disponibles en Live
          </h2>
          
          <div className="space-y-4">
            {/* Jeux classiques */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎲 Jeux de Table Classiques</h3>
              <div className="grid md:grid-cols-4 gap-3">
                <div className="bg-white rounded p-3 text-center">
                  <span className="text-2xl mb-1 block">🎡</span>
                  <h4 className="font-bold text-sm">Roulette</h4>
                  <p className="text-xs">EU, US, FR, Speed</p>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <span className="text-2xl mb-1 block">♠️</span>
                  <h4 className="font-bold text-sm">Blackjack</h4>
                  <p className="text-xs">Classic, VIP, Infinite</p>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <span className="text-2xl mb-1 block">💎</span>
                  <h4 className="font-bold text-sm">Baccarat</h4>
                  <p className="text-xs">Standard, Speed, Squeeze</p>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <span className="text-2xl mb-1 block">🃏</span>
                  <h4 className="font-bold text-sm">Poker</h4>
                  <p className="text-xs">Hold'em, 3 Card, Caribbean</p>
                </div>
              </div>
            </div>

            {/* Game shows */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">🎪 Game Shows Innovants</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-1">Crazy Time</h4>
                  <p className="text-xs">Roue géante + 4 bonus games</p>
                  <p className="text-xs text-purple-600 font-bold mt-1">RTP: 96.08%</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-1">Monopoly Live</h4>
                  <p className="text-xs">Roue + Plateau 3D Monopoly</p>
                  <p className="text-xs text-purple-600 font-bold mt-1">RTP: 96.23%</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-1">Deal or No Deal</h4>
                  <p className="text-xs">Basé sur l'émission TV</p>
                  <p className="text-xs text-purple-600 font-bold mt-1">RTP: 95.42%</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-1">Lightning Roulette</h4>
                  <p className="text-xs">Multiplicateurs jusqu'à 500x</p>
                  <p className="text-xs text-purple-600 font-bold mt-1">RTP: 97.30%</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-1">Gonzo's Treasure Hunt</h4>
                  <p className="text-xs">Réalité virtuelle + live</p>
                  <p className="text-xs text-purple-600 font-bold mt-1">RTP: 96.56%</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-1">Sweet Bonanza CandyLand</h4>
                  <p className="text-xs">Roue bonus sucrée</p>
                  <p className="text-xs text-purple-600 font-bold mt-1">RTP: 96.50%</p>
                </div>
              </div>
            </div>

            {/* Jeux spéciaux */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-3">🎯 Formats Spéciaux</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-2">Infinite Tables</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Places illimitées</li>
                    <li>• Une main distribuée</li>
                    <li>• Décisions individuelles</li>
                    <li>• Parfait heures de pointe</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-bold text-sm mb-2">First Person Games</h4>
                  <ul className="text-xs space-y-1">
                    <li>• RNG avec look live</li>
                    <li>• Transition vers live facile</li>
                    <li>• Jeu plus rapide</li>
                    <li>• Mode pratique idéal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stratégies live */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            📈 Stratégies Spécifiques au Live
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">🎯 Observation et Timing</h3>
              <ul className="space-y-3 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Observez avant de jouer</strong>
                  <p className="text-xs">5-10 tours pour sentir le rythme</p>
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Évitez heures de pointe</strong>
                  <p className="text-xs">20h-23h = tables bondées, jeu lent</p>
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Croupiers fatigués</strong>
                  <p className="text-xs">Fin de shift = plus d'erreurs potentielles</p>
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Tables VIP le matin</strong>
                  <p className="text-xs">Moins de monde, service premium</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">💬 Interaction Sociale</h3>
              <ul className="space-y-3 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Soyez poli et respectueux</strong>
                  <p className="text-xs">Croupiers plus détendus = meilleure expérience</p>
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Posez des questions</strong>
                  <p className="text-xs">Stats, historique, ils adorent partager</p>
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Tips virtuels appréciés</strong>
                  <p className="text-xs">Crée bonne ambiance (optionnel)</p>
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Évitez negativité chat</strong>
                  <p className="text-xs">Restez positif ou silencieux</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blackjack live strategy */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ♠️ Maîtriser le Blackjack Live
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Avantages du Live</h3>
              <ul className="text-sm space-y-2">
                <li>✓ Comptage de cartes possible (mais surveillé)</li>
                <li>✓ Pénétration du sabot visible</li>
                <li>✓ Pas de mélange continu</li>
                <li>✓ Lecture des tells du croupier</li>
                <li>✓ Historique des mains affiché</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Conseils Pro</h3>
              <ul className="text-sm space-y-2">
                <li>• Préférez tables 8 decks, S17</li>
                <li>• Évitez Infinite Blackjack (mélange auto)</li>
                <li>• Bet Behind sur bons joueurs</li>
                <li>• Pre-decision pour jeu rapide</li>
                <li>• Mémorisez stratégie de base parfaitement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roulette live */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🎡 Excellence à la Roulette Live
          </h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">Types de Roulettes Live</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Standard</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 1 croupier, 1 table</li>
                    <li>• 60-80 spins/heure</li>
                    <li>• Limites 0.10€ - 10k€</li>
                    <li>• Chat actif</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Speed/Auto</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Roue automatique</li>
                    <li>• 120+ spins/heure</li>
                    <li>• Pas d'interaction</li>
                    <li>• Pour volume élevé</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Immersive</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Multi-caméras HD</li>
                    <li>• Slow-mo sur numéro</li>
                    <li>• Cinématographique</li>
                    <li>• Experience premium</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded p-4">
              <h3 className="font-bold text-yellow-800 mb-2">⚡ Spécial Lightning Roulette</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">1-5 numéros Lucky avec multiplicateurs 50x-500x</p>
                  <ul className="text-xs space-y-1">
                    <li>• Straight-up paie 29:1 (au lieu de 35:1)</li>
                    <li>• RTP global : 97.30%</li>
                    <li>• Variance extrême sur straight-ups</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-1">Stratégie optimale :</p>
                  <ul className="text-xs space-y-1">
                    <li>• Couvrir 8-12 numéros straight</li>
                    <li>• Sessions courtes (variance ++)</li>
                    <li>• Budget x2 vs roulette normale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game shows strategy */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎪 Stratégies Game Shows
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <h3 className="text-xl font-bold mb-4">Crazy Time - Le Roi des Game Shows</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 rounded p-4">
                <h4 className="font-bold mb-2">Distribution de la Roue</h4>
                <ul className="text-sm space-y-1">
                  <li>• Numéro 1 : 21 segments</li>
                  <li>• Numéro 2 : 13 segments</li>
                  <li>• Numéro 5 : 7 segments</li>
                  <li>• Numéro 10 : 4 segments</li>
                  <li>• Coin Flip : 4 segments</li>
                  <li>• Cash Hunt : 2 segments</li>
                  <li>• Pachinko : 2 segments</li>
                  <li>• Crazy Time : 1 segment</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded p-4">
                <h4 className="font-bold mb-2">Stratégies Populaires</h4>
                <ul className="text-sm space-y-2">
                  <li>
                    <strong>Conservative :</strong>
                    <p className="text-xs">Numéros 1 & 2 uniquement (75% roue)</p>
                  </li>
                  <li>
                    <strong>Bonus Hunter :</strong>
                    <p className="text-xs">Tous les bonus (17.5% roue)</p>
                  </li>
                  <li>
                    <strong>Balanced :</strong>
                    <p className="text-xs">10 + 2 bonus au choix</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-400/20 rounded p-3 mt-4">
              <p className="text-sm text-center">
                💡 Les bonus peuvent payer 100x-20,000x+ mais arrivent rarement !
              </p>
            </div>
          </div>
        </div>

        {/* Limites et tables */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            💰 Choisir la Bonne Table
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="text-left p-2">Type de Joueur</th>
                  <th className="text-center p-2">Budget</th>
                  <th className="text-center p-2">Tables Recommandées</th>
                  <th className="text-left p-2">Conseils</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Débutant</td>
                  <td className="text-center">20-100€</td>
                  <td className="text-center">0.10€ - 5€</td>
                  <td className="text-xs">Infinite tables, game shows low stakes</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-semibold">Régulier</td>
                  <td className="text-center">100-500€</td>
                  <td className="text-center">1€ - 25€</td>
                  <td className="text-xs">Tables standard, speed games</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Avancé</td>
                  <td className="text-center">500-5k€</td>
                  <td className="text-center">5€ - 100€</td>
                  <td className="text-xs">Tables dédiées, Salon Privé</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-semibold">VIP</td>
                  <td className="text-center">5k€+</td>
                  <td className="text-center">25€ - 10k€+</td>
                  <td className="text-xs">Tables privées, croupiers dédiés</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Optimisation technique */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            ⚙️ Optimisation Technique
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-3">🌐 Connexion Internet</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Minimum requis :</strong> 2 Mbps stable
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Recommandé :</strong> 5+ Mbps fibre/cable
                </li>
                <li className="bg-white rounded p-2">
                  <strong>4G/5G :</strong> OK mais data ++
                </li>
                <li className="bg-white rounded p-2">
                  <strong>WiFi :</strong> Éviter public/partagé
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">📱 Appareil et Settings</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Mobile :</strong> Mode paysage optimal
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Qualité :</strong> Auto-adjust ou Medium
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Son :</strong> Essentiel pour immersion
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Multi-tables :</strong> PC uniquement
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Étiquette et comportement */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎩 Étiquette du Casino Live
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-green-700 mb-3">✅ À Faire</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  • Saluer en arrivant/partant
                </li>
                <li className="bg-white rounded p-2">
                  • Remercier pour gros gains
                </li>
                <li className="bg-white rounded p-2">
                  • Rester patient si lenteur
                </li>
                <li className="bg-white rounded p-2">
                  • Signaler erreurs poliment
                </li>
                <li className="bg-white rounded p-2">
                  • Respecter tous les joueurs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-700 mb-3">❌ À Éviter</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  • Insulter après pertes
                </li>
                <li className="bg-white rounded p-2">
                  • Spam dans le chat
                </li>
                <li className="bg-white rounded p-2">
                  • Demander infos perso croupier
                </li>
                <li className="bg-white rounded p-2">
                  • Accuser de triche
                </li>
                <li className="bg-white rounded p-2">
                  • Donner conseils non sollicités
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Evolution des limites */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📈 Évolution et Limites
          </h2>
          
          <div className="bg-white/20 rounded p-4">
            <h3 className="font-bold mb-3">Progression Recommandée</h3>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <strong>Débuter :</strong> Tables Infinite, mises minimales
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <strong>Apprendre :</strong> Observer différents croupiers/styles
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <strong>Progresser :</strong> Tables standard, augmenter graduellement
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <div>
                  <strong>Maîtriser :</strong> VIP tables si bankroll permet
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-red-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">
            🏆 10 Commandements du Casino Live
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">1.</span>
              <span className="text-gray-700">La transparence du live ne change pas l'avantage maison</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">2.</span>
              <span className="text-gray-700">Testez plusieurs providers pour trouver votre préféré</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">3.</span>
              <span className="text-gray-700">L'interaction sociale enrichit l'expérience</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">4.</span>
              <span className="text-gray-700">Les game shows = fun mais variance extrême</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">5.</span>
              <span className="text-gray-700">Connexion stable = priorité absolue</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">6.</span>
              <span className="text-gray-700">Respectez croupiers et joueurs toujours</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">7.</span>
              <span className="text-gray-700">Le live est plus lent = ajustez votre budget</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">8.</span>
              <span className="text-gray-700">Tables VIP = même jeu, meilleur service</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">9.</span>
              <span className="text-gray-700">Les stratégies de base s'appliquent toujours</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">10.</span>
              <span className="text-gray-700">L'ambiance authentique ne doit pas faire oublier les limites</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/strategies-slots"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Stratégies Slots
          </Link>
          <Link 
            href="/guide-casino/bonus-promotions"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Bonus et Promotions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}