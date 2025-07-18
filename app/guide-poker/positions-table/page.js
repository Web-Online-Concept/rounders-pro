// app/guide-poker/positions-table/page.js
import Link from 'next/link';

export default function PositionsTablePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Positions à la Table</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💺 Positions à la Table de Poker
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Au poker, la position est votre arme la plus puissante. Jouer en position vous donne un 
          avantage considérable : vous agissez après vos adversaires et disposez de plus d'informations. 
          Maîtriser les positions est essentiel pour devenir un joueur gagnant.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Schéma de la table */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            La table de poker 9 joueurs
          </h2>
          
          <div className="bg-blue-50 rounded-lg p-8 mb-4">
            <div className="max-w-md mx-auto">
              <div className="relative">
                {/* Table representation */}
                <div className="bg-green-700 rounded-full w-full aspect-square flex items-center justify-center">
                  <div className="bg-green-600 rounded-full w-4/5 aspect-square flex items-center justify-center">
                    <span className="text-white font-bold text-xl">TABLE</span>
                  </div>
                </div>
                
                {/* Positions */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">DEALER</div>
                </div>
                <div className="absolute top-1/4 right-0 transform translate-x-4">
                  <div className="bg-red-500 text-white px-3 py-1 rounded font-bold text-sm">SB</div>
                </div>
                <div className="absolute bottom-1/4 right-0 transform translate-x-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">BB</div>
                </div>
                <div className="absolute bottom-0 right-1/4 transform translate-y-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded font-bold text-sm">UTG</div>
                </div>
                <div className="absolute bottom-0 left-1/4 transform translate-y-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded font-bold text-sm">MP</div>
                </div>
                <div className="absolute bottom-1/4 left-0 transform -translate-x-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">CO</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            Le bouton du dealer tourne dans le sens horaire après chaque main
          </div>
        </div>

        {/* Classification des positions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Les 3 catégories de positions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-bold text-red-700 mb-2">🔴 Positions précoces (Early Position)</h3>
              <p className="text-gray-700 mb-2">
                Les premières à parler post-flop. Position très désavantageuse.
              </p>
              <ul className="text-sm space-y-1">
                <li>• <strong>UTG (Under The Gun)</strong> : Première position après les blinds</li>
                <li>• <strong>UTG+1</strong> : Deuxième position</li>
                <li>• <strong>UTG+2</strong> : Troisième position (table 9-10 joueurs)</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-bold text-blue-700 mb-2">🔵 Positions intermédiaires (Middle Position)</h3>
              <p className="text-gray-700 mb-2">
                Position neutre avec quelques informations mais pas optimale.
              </p>
              <ul className="text-sm space-y-1">
                <li>• <strong>MP1 (LoJack)</strong> : Première position intermédiaire</li>
                <li>• <strong>MP2 (HiJack)</strong> : Position avant le cutoff</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-green-700 mb-2">🟢 Positions tardives (Late Position)</h3>
              <p className="text-gray-700 mb-2">
                Les meilleures positions. Maximum d'informations avant d'agir.
              </p>
              <ul className="text-sm space-y-1">
                <li>• <strong>CO (Cutoff)</strong> : Position avant le bouton</li>
                <li>• <strong>BTN (Button)</strong> : LA meilleure position</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Détail de chaque position */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Analyse détaillée de chaque position
        </h2>

        {/* UTG */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-orange-700 mb-3">
            🎯 UTG - Under The Gun
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded p-4">
              <h4 className="font-semibold mb-2">Caractéristiques</h4>
              <ul className="text-sm space-y-1">
                <li>• Première à parler préflop</li>
                <li>• Pire position post-flop</li>
                <li>• 8 joueurs à parler après</li>
                <li>• Range très serrée requise</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded p-4">
              <h4 className="font-semibold mb-2">Stratégie</h4>
              <ul className="text-sm space-y-1">
                <li>• Jouer seulement les meilleures mains</li>
                <li>• Range : ~9% des mains</li>
                <li>• AA-TT, AK, AQ suited</li>
                <li>• Éviter les mains spéculatives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* MP */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">
            🎪 Middle Position (MP1/MP2)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded p-4">
              <h4 className="font-semibold mb-2">Caractéristiques</h4>
              <ul className="text-sm space-y-1">
                <li>• Position intermédiaire</li>
                <li>• 3-5 joueurs à parler après</li>
                <li>• Plus de flexibilité qu'UTG</li>
                <li>• Information partielle</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded p-4">
              <h4 className="font-semibold mb-2">Stratégie</h4>
              <ul className="text-sm space-y-1">
                <li>• Range élargie vs UTG</li>
                <li>• Range : ~15-20% des mains</li>
                <li>• Ajouter 99-77, AJ, KQ</li>
                <li>• Quelques suited connectors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cutoff */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            ✂️ Cutoff (CO)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-semibold mb-2">Caractéristiques</h4>
              <ul className="text-sm space-y-1">
                <li>• Position forte</li>
                <li>• Seulement BTN et blinds après</li>
                <li>• Peut voler les blinds</li>
                <li>• Position post-flop garantie</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-semibold mb-2">Stratégie</h4>
              <ul className="text-sm space-y-1">
                <li>• Range large d'ouverture</li>
                <li>• Range : ~25-30% des mains</li>
                <li>• Tous les As, broadways</li>
                <li>• Suited connectors, gappers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">
            👑 Button (BTN) - La position royale
          </h3>
          
          <div className="bg-yellow-50 rounded p-4 mb-4">
            <p className="text-gray-700 font-semibold text-center">
              "Le poker est un jeu de position, et le button est le trône"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-100 rounded p-4">
              <h4 className="font-semibold mb-2">Avantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Dernière à parler post-flop</li>
                <li>• Information maximale</li>
                <li>• Contrôle du pot</li>
                <li>• Vol de blinds facile</li>
                <li>• Bluff plus crédible</li>
              </ul>
            </div>
            <div className="bg-yellow-100 rounded p-4">
              <h4 className="font-semibold mb-2">Stratégie agressive</h4>
              <ul className="text-sm space-y-1">
                <li>• Range : ~40-50% des mains</li>
                <li>• Raise first in fréquent</li>
                <li>• 3-bet light possible</li>
                <li>• Float et bluff rentables</li>
                <li>• Exploiter les ranges serrées</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blinds */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-red-700 mb-3">
            🛡️ Les Blinds (SB/BB)
          </h3>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Position paradoxale : dernières à parler préflop mais premières post-flop. 
              Investissement forcé à défendre.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h4 className="font-semibold text-red-600 mb-2">Small Blind (SB)</h4>
              <ul className="text-sm space-y-1">
                <li>• Pire position absolue post-flop</li>
                <li>• Demi-blind investi</li>
                <li>• Range de défense ~15-20%</li>
                <li>• Beaucoup de fold</li>
                <li>• 3-bet ou fold strategy</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h4 className="font-semibold text-red-700 mb-2">Big Blind (BB)</h4>
              <ul className="text-sm space-y-1">
                <li>• Blind complète investie</li>
                <li>• Ferme l'action préflop</li>
                <li>• Range de défense ~25-40%</li>
                <li>• Pot odds favorables</li>
                <li>• Check gratuit possible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Avantages de la position */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Les 5 avantages majeurs de la position
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">1. Information = Pouvoir</h3>
              <p className="text-green-100">
                Voir les actions des adversaires avant de décider. Plus de données = meilleures décisions.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">2. Contrôle du pot</h3>
              <p className="text-green-100">
                En position, vous décidez de la taille du pot. Check pour le garder petit, bet pour le grossir.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">3. Bluff plus efficace</h3>
              <p className="text-green-100">
                Les bluffs en position sont plus crédibles et réussissent plus souvent.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">4. Value bet optimisée</h3>
              <p className="text-green-100">
                Extraire le maximum de value avec vos bonnes mains en ajustant selon les actions adverses.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">5. Carte gratuite</h3>
              <p className="text-green-100">
                Possibilité de check behind pour voir la carte suivante gratuitement avec un tirage.
              </p>
            </div>
          </div>
        </div>

        {/* Statistiques par position */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            📊 Rentabilité par position
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700 text-center font-semibold">
              Winrate moyen d'un bon joueur par position (bb/100 mains)
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-20 font-semibold">BTN:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-green-600 h-6 rounded-full" style={{width: '100%'}}></div>
              </div>
              <span className="ml-2 font-bold text-green-600">+8 bb/100</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-20 font-semibold">CO:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-green-500 h-6 rounded-full" style={{width: '75%'}}></div>
              </div>
              <span className="ml-2 font-bold text-green-500">+6 bb/100</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-20 font-semibold">MP:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-yellow-500 h-6 rounded-full" style={{width: '37%'}}></div>
              </div>
              <span className="ml-2 font-bold text-yellow-600">+3 bb/100</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-20 font-semibold">UTG:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-orange-500 h-6 rounded-full" style={{width: '12%'}}></div>
              </div>
              <span className="ml-2 font-bold text-orange-600">+1 bb/100</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-20 font-semibold">SB:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-red-500 h-6 rounded-full ml-auto" style={{width: '25%'}}></div>
              </div>
              <span className="ml-2 font-bold text-red-600">-20 bb/100</span>
            </div>
            
            <div className="flex items-center">
              <span className="w-20 font-semibold">BB:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-red-600 h-6 rounded-full ml-auto" style={{width: '12%'}}></div>
              </div>
              <span className="ml-2 font-bold text-red-700">-10 bb/100</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4 text-center">
            Les blinds sont structurellement perdantes mais une bonne défense limite les pertes
          </p>
        </div>

        {/* Ajustements selon les positions */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ajustements stratégiques
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">✅ En position</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Élargir votre range d'ouverture</li>
              <li>• C-bet plus fréquemment</li>
              <li>• Voler les pots abandonnés</li>
              <li>• Contrôler la taille du pot</li>
              <li>• Bluffer les scary cards</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-red-700 mb-3">❌ Hors position</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Resserrer votre range</li>
              <li>• Check-raise pour reprendre l'initiative</li>
              <li>• Éviter les gros pots marginaux</li>
              <li>• Jouer plus straightforward</li>
              <li>• Défendre avec prudence</li>
            </ul>
          </div>
        </div>

        {/* Conseils pratiques */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            💡 Conseils pour exploiter la position
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-yellow-600 mr-2 text-xl">•</span>
              <p className="text-gray-700">
                <strong>IP vs OOP :</strong> Cherchez toujours à jouer des pots en position. 
                Évitez de gonfler les pots hors position avec des mains marginales.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-yellow-600 mr-2 text-xl">•</span>
              <p className="text-gray-700">
                <strong>Isolation :</strong> Isolez les limpers quand vous êtes en position tardive 
                pour jouer un pot en heads-up avec l'avantage positionnel.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-yellow-600 mr-2 text-xl">•</span>
              <p className="text-gray-700">
                <strong>Steal & Resteal :</strong> Volez agressivement du CO et BTN. 
                Défendez vos blinds avec des 3-bets light contre les voleurs fréquents.
              </p>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            💺 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La position est l'avantage le plus important au poker - utilisez-la sans pitié
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Jouez serré en début de parole (UTG) et élargissez progressivement jusqu'au bouton
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le bouton est la position la plus profitable - maximisez son exploitation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Les blinds sont structurellement perdantes - minimisez les pertes avec une défense solide
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Pratiquez sur Stake
                </Link> en observant comment les bons joueurs exploitent leur position
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/mains-poker"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Classement des Mains
          </Link>
          <Link 
            href="/guide-poker/preflop-strategy"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Stratégie Préflop
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}