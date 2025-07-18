// app/guide-poker/bluff-technique/page.js
import Link from 'next/link';

export default function BluffTechniquePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-blue-600 hover:text-blue-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">L'Art du Bluff</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎭 L'Art du Bluff
      </h1>

      {/* Chapeau */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le bluff est l'essence même du poker. C'est ce qui différencie le poker des autres jeux de cartes. 
          Mais bluffer efficacement nécessite timing, observation et courage calculé. Découvrez comment 
          transformer vos bluffs en armes redoutables.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Types de bluffs - PAS DE CHANGEMENT ICI, reste avec les couleurs d'origine blue, red, green, purple */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Types de Bluffs
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Tous les bluffs ne sont pas égaux. Comprendre les différents types vous aidera 
              à choisir le bon au bon moment.
            </p>
          </div>

          <div className="space-y-4">
            {/* Stone Cold Bluff */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">🧊 Stone Cold Bluff (Pure Bluff)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Aucune équité, aucune chance de gagner à l'abattage.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Exemple :</p>
                <p className="text-xs">Board : A♠️ K♦️ Q♣️ J♥️ 5♦️</p>
                <p className="text-xs">Votre main : 7♣️ 2♥️</p>
                <p className="text-xs mt-1">→ Représenter la suite avec T en misant fort</p>
              </div>
            </div>

            {/* Semi-Bluff */}
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">⚡ Semi-Bluff</h3>
              <p className="text-sm text-gray-700 mb-2">
                Bluff avec équité - peut gagner en faisant folder ou en améliorant.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Exemple :</p>
                <p className="text-xs">Board : 9♥️ 8♥️ 2♣️</p>
                <p className="text-xs">Votre main : J♥️ T♥️</p>
                <p className="text-xs mt-1">→ Tirage quinte + couleur, 15 outs</p>
              </div>
            </div>

            {/* Continuation Bluff */}
            <div className="bg-white border-2 border-blue-200 rounded p-4">
              <h3 className="font-semibold text-blue-700 mb-2">🎯 Continuation Bluff</h3>
              <p className="text-sm text-gray-700 mb-2">
                C-bet en bluff pour maintenir l'initiative préflop.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Exemple :</p>
                <p className="text-xs">Vous : Raise préflop avec A♣️ 5♣️</p>
                <p className="text-xs">Flop : K♦️ 7♠️ 2♥️</p>
                <p className="text-xs mt-1">→ C-bet représentant AK ou KK</p>
              </div>
            </div>

            {/* Float Bluff */}
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">🎈 Float Bluff</h3>
              <p className="text-sm text-gray-700 mb-2">
                Call au flop avec l'intention de bluffer turn/river.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Stratégie :</p>
                <p className="text-xs">• Call c-bet en position</p>
                <p className="text-xs">• Bluff si adversaire check turn</p>
                <p className="text-xs">• Efficace vs c-betteurs fréquents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quand bluffer - GARDER GREEN ICI pour la section spécifique */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            ⏰ Quand Bluffer - Timing Parfait
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le timing est crucial. Un bon bluff au mauvais moment est de l'argent jeté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">✅ Bonnes Situations</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-1">•</span>
                  <div>
                    <strong>Scary cards :</strong>
                    <span className="text-xs block text-gray-600">As au turn, carte complétant les tirages</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-1">•</span>
                  <div>
                    <strong>Board favorable :</strong>
                    <span className="text-xs block text-gray-600">Dry boards, paired boards</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-1">•</span>
                  <div>
                    <strong>Image tight :</strong>
                    <span className="text-xs block text-gray-600">Peu de showdowns récents</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-1">•</span>
                  <div>
                    <strong>Adversaire capable de folder :</strong>
                    <span className="text-xs block text-gray-600">Pas contre les calling stations</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">❌ Mauvaises Situations</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">•</span>
                  <div>
                    <strong>Multiway :</strong>
                    <span className="text-xs block text-gray-600">Plus dur de faire folder plusieurs</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">•</span>
                  <div>
                    <strong>Board coordonné :</strong>
                    <span className="text-xs block text-gray-600">Trop de tirages possibles</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">•</span>
                  <div>
                    <strong>Pot committed :</strong>
                    <span className="text-xs block text-gray-600">Adversaire investi, difficile à folder</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">•</span>
                  <div>
                    <strong>Après plusieurs bluffs montrés :</strong>
                    <span className="text-xs block text-gray-600">Crédibilité entamée</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Histoire cohérente - GARDER PURPLE */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            📖 Raconter une Histoire Cohérente
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Un bluff réussi raconte une histoire crédible du début à la fin. 
              Chaque action doit être logique avec la main que vous représentez.
            </p>
          </div>

          {/* Exemple détaillé */}
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-bold mb-3">Exemple : Représenter AA</h3>
            
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">Préflop :</p>
                <p className="text-xs">UTG raise 3x → représente range forte (AA-JJ, AK)</p>
              </div>
              
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">Flop : 9♥️ 6♣️ 2♦️</p>
                <p className="text-xs">C-bet 60% pot → protection normale avec overpair</p>
              </div>
              
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">Turn : 9♥️ 6♣️ 2♦️ J♠️</p>
                <p className="text-xs">Barrel 70% pot → continue de représenter AA/KK</p>
              </div>
              
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">River : 9♥️ 6♣️ 2♦️ J♠️ 4♥️</p>
                <p className="text-xs">Overbet 150% pot → value max avec AA, pousse les paires à fold</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-3">
              <strong>Clé :</strong> Chaque street est cohérente avec AA. Un adversaire attentif 
              aura du mal à vous mettre sur un bluff.
            </p>
          </div>
        </div>

        {/* Sizing du bluff - GARDER ORANGE */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            💰 Sizing du Bluff
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le sizing de votre bluff doit accomplir son objectif : faire folder 
              les mains que vous voulez faire folder.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">📏 Règles de Sizing</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Petit bluff (40-50% pot) :</span>
                  <span className="text-xs text-gray-600">Faire folder les airs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Moyen bluff (66-75% pot) :</span>
                  <span className="text-xs text-gray-600">Faire folder les tirages</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gros bluff (100%+ pot) :</span>
                  <span className="text-xs text-gray-600">Faire folder top pair+</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-4">
              <h3 className="font-semibold text-yellow-700 mb-2">⚠️ Attention</h3>
              <p className="text-sm text-gray-700">
                Votre sizing de bluff doit être identique à votre sizing de value 
                dans la même situation. Sinon, vous donnez de l'information gratuite.
              </p>
            </div>
          </div>
        </div>

        {/* Fréquence de bluff - GARDER INDIGO/PURPLE GRADIENT */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📊 Fréquence de Bluff Optimale
          </h2>
          
          <div className="bg-white bg-opacity-20 rounded p-4 mb-4">
            <p>
              Bluffer trop ou pas assez sont deux erreurs majeures. La théorie nous 
              donne des guidelines pour une fréquence équilibrée.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Formule Théorique</h3>
            <p className="text-center font-mono">
              Fréquence de bluff = Sizing / (Sizing + Pot)
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <p>• Bet 50% pot → 33% de bluffs</p>
              <p>• Bet 75% pot → 43% de bluffs</p>
              <p>• Bet 100% pot → 50% de bluffs</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-2">En Pratique</h3>
              <ul className="text-sm space-y-1">
                <li>• Bluffez moins vs récréatifs</li>
                <li>• Bluffez plus vs nits</li>
                <li>• Ajustez selon votre image</li>
                <li>• Considérez l'historique</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-2">Balance Range</h3>
              <ul className="text-sm space-y-1">
                <li>• 2 value pour 1 bluff (river)</li>
                <li>• Plus de bluffs au flop/turn</li>
                <li>• Bluffs avec blockers</li>
                <li>• Variez vos combos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bluffs avancés - GARDER LES COULEURS VARIÉES */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🚀 Techniques de Bluff Avancées
          </h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">🎪 The Triple Barrel Bluff</h3>
              <p className="text-sm text-gray-700 mb-2">
                Bluffer les trois streets demande du courage et une histoire parfaite.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Commencer avec position et équité</li>
                <li>• Augmenter le sizing à chaque street</li>
                <li>• River : overbet polarisé</li>
                <li>• Seulement vs joueurs capables de gros folds</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-semibold text-blue-700 mb-2">🔄 The Check-Raise Bluff</h3>
              <p className="text-sm text-gray-700 mb-2">
                Puissant move pour reprendre l'initiative.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Efficace sur boards favorables au défenseur</li>
                <li>• Besoin de peu de combos value pour balance</li>
                <li>• Sizing : 3-4x la mise adverse</li>
                <li>• Suivre au turn si call</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">💣 The Overbet Bluff</h3>
              <p className="text-sm text-gray-700 mb-2">
                Mettre une pression maximale avec un sizing inhabituel.
              </p>
              <ul className="text-xs space-y-1">
                <li>• River sur runouts favorables</li>
                <li>• Représente nuts crédiblement</li>
                <li>• 150-200% du pot</li>
                <li>• Équilibrer avec value overbets</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">🎭 The Reverse Tell</h3>
              <p className="text-sm text-gray-700 mb-2">
                Utiliser les tells "classiques" à l'envers.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Agir nerveux avec les nuts</li>
                <li>• Parler quand on bluff (contrôlé)</li>
                <li>• Timing tells inversés</li>
                <li>• Seulement vs observateurs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Défense contre les bluffs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Détecter et Contrer les Bluffs
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-700 mb-3">🔍 Indices de Bluff</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Histoire incohérente</li>
              <li>• Sizing inhabituel pour le joueur</li>
              <li>• Timing tells (trop rapide/lent)</li>
              <li>• Board peu favorable à sa range</li>
              <li>• Fréquence d'agression trop élevée</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">🛡️ Stratégies de Défense</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Call avec bluff-catchers appropriés</li>
              <li>• Utiliser les blockers</li>
              <li>• Exploiter les patterns</li>
              <li>• Prendre des notes</li>
              <li>• Ajuster vos ranges de call</li>
            </ul>
          </div>
        </div>

        {/* Exercices pratiques - GARDER YELLOW */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            📝 Exercices pour Améliorer vos Bluffs
          </h2>
          
          <ol className="space-y-3 text-gray-700">
            <li>
              <strong>1. Le Bluff Journal :</strong> Notez chaque bluff tenté, le contexte, 
              et le résultat. Analysez vos patterns.
            </li>
            <li>
              <strong>2. Spot Finding :</strong> Pendant une session, identifiez 3 spots 
              de bluff parfaits SANS les exécuter. Analysez après.
            </li>
            <li>
              <strong>3. Story Practice :</strong> Avant chaque bluff, verbalisez mentalement 
              l'histoire complète que vous racontez.
            </li>
            <li>
              <strong>4. Frequency Training :</strong> Comptez vos bluffs vs value bets 
              pour vérifier votre équilibre.
            </li>
            <li>
              <strong>5. Blocker Study :</strong> Étudiez quelles cartes bloquent quoi 
              sur différents boards types.
            </li>
          </ol>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            🎭 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Un bon bluff raconte une histoire cohérente du début à la fin
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Le timing et la sélection des adversaires sont cruciaux - ne bluffez pas les calling stations
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Votre fréquence de bluff doit être équilibrée avec vos value bets
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Les semi-bluffs sont préférables aux pure bluffs - équité + fold equity
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-blue-300">
                  Pratiquez sur Stake
                </Link> en commençant par des petits bluffs bien timés avant les moves complexes
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/tells-psychologie"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tells et Psychologie
          </Link>
          <Link 
            href="/guide-poker/tournois-strategie"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Stratégie Tournois
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}