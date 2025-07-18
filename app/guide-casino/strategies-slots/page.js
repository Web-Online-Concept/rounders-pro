// app/guide-casino/strategies-slots/page.js
import Link from 'next/link';

export default function StrategiesSlotsPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Stratégies Slots</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎰 Stratégies Slots
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les machines à sous sont purement aléatoires, mais des stratégies intelligentes peuvent 
          maximiser votre temps de jeu et votre plaisir. Découvrez comment choisir les bonnes slots, 
          gérer votre budget et profiter des bonus pour optimiser votre expérience.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* La vérité sur les slots */}
        <div className="bg-red-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ⚠️ La Vérité Brutale sur les Slots
          </h2>
          <div className="bg-white/20 rounded p-6">
            <p className="text-lg font-semibold mb-4">
              Aucune stratégie ne peut battre le RNG (Random Number Generator)
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>Chaque spin est 100% indépendant et aléatoire</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>L'avantage maison est intégré mathématiquement</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>Les "patterns" et "cycles" n'existent pas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>Le casino gagne TOUJOURS sur le long terme</span>
              </li>
            </ul>
            <p className="mt-4 text-yellow-300 font-semibold">
              MAIS... vous pouvez optimiser votre expérience et maximiser le fun !
            </p>
          </div>
        </div>

        {/* Stratégie de sélection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎯 Stratégie #1 : Sélection Intelligente des Slots
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">📊 Priorité au RTP Élevé</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Toujours vérifier le RTP avant de jouer</p>
                  <ul className="text-xs space-y-1">
                    <li>• {'<'} 94% = Éviter absolument</li>
                    <li>• 94-96% = Acceptable si fun</li>
                    <li>• 96-97% = Bon compromis</li>
                    <li>• {'>'} 97% = Excellent, priorité</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-2">Impact sur 1000€ misés :</p>
                  <ul className="text-xs space-y-1">
                    <li>• RTP 94% = -60€ espérance</li>
                    <li>• RTP 96% = -40€ espérance</li>
                    <li>• RTP 98% = -20€ espérance</li>
                  </ul>
                  <p className="text-green-600 font-bold text-xs mt-2">2% = 50% moins de pertes !</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎢 Adapter la Volatilité à vos Objectifs</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Faible Volatilité</h4>
                  <p className="text-xs mb-2">Pour sessions longues</p>
                  <ul className="text-xs space-y-1">
                    <li>✓ Petits gains fréquents</li>
                    <li>✓ Budget dure plus</li>
                    <li>✓ Moins de stress</li>
                    <li>✗ Pas de gros jackpots</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Moyenne Volatilité</h4>
                  <p className="text-xs mb-2">Équilibre idéal</p>
                  <ul className="text-xs space-y-1">
                    <li>✓ Mix gains/fréquence</li>
                    <li>✓ Bonus réguliers</li>
                    <li>✓ Fun constant</li>
                    <li>✓ Pour la majorité</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Haute Volatilité</h4>
                  <p className="text-xs mb-2">Pour chasseurs de jackpots</p>
                  <ul className="text-xs space-y-1">
                    <li>✓ Gains énormes possibles</li>
                    <li>✓ Adrénaline max</li>
                    <li>✗ Longues séries perdantes</li>
                    <li>✗ Budget part vite</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gestion de bankroll */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            💰 Stratégie #2 : Gestion de Bankroll Optimale
          </h2>
          
          <div className="bg-purple-50 rounded p-6">
            <h3 className="font-bold text-purple-800 mb-4">La Règle des 200-300 Spins</h3>
            
            <div className="bg-white rounded p-4 mb-4">
              <p className="text-sm font-semibold mb-2">Calculez votre mise optimale :</p>
              <div className="bg-gray-50 rounded p-3">
                <p className="text-center text-lg font-mono">
                  Budget Session ÷ 250 = Mise par Spin
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mt-3">
                <div className="text-center">
                  <p className="text-xs text-gray-600">Budget 50€</p>
                  <p className="font-bold">0.20€/spin</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600">Budget 100€</p>
                  <p className="font-bold">0.40€/spin</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600">Budget 250€</p>
                  <p className="font-bold">1€/spin</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-1">✅ Avantages de cette méthode</h4>
                <ul className="text-xs space-y-1">
                  <li>• 95% de chances de toucher au moins un bonus</li>
                  <li>• Évite le "bust" rapide frustrant</li>
                  <li>• Permet de sentir la volatilité réelle</li>
                  <li>• Maximise le temps de jeu et le fun</li>
                </ul>
              </div>
              
              <div className="bg-red-100 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">❌ Erreurs courantes</h4>
                <ul className="text-xs space-y-1">
                  <li>• Miser 5-10% du budget par spin = ruine rapide</li>
                  <li>• Augmenter les mises après pertes</li>
                  <li>• Changer constamment de mise</li>
                  <li>• All-in sur un "hot slot"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stratégie bonus */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎁 Stratégie #3 : Maximiser les Bonus Casino
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Free Spins Intelligents</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  • Toujours sur slots haut RTP (96%+)
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Vérifier contribution wagering
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Préférer low/medium volatilité
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Mise max souvent plafonnée
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Bonus de Dépôt Slots</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  • Wagering x30-40 = acceptable
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Slots = 100% contribution
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Éviter jackpots progressifs
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Petites mises constantes
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 rounded p-4 mt-4">
            <p className="text-center">
              💡 Pro Tip : Un bonus 100% avec wagering x30 sur slot 96% RTP = 
              environ 10% de valeur réelle
            </p>
          </div>
        </div>

        {/* Timing et sessions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            ⏰ Stratégie #4 : Timing et Gestion des Sessions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">Limites de Temps</h3>
              <ul className="space-y-3 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>30 minutes :</strong> Session courte focus
                </li>
                <li className="bg-white rounded p-2">
                  <strong>1 heure :</strong> Session standard idéale
                </li>
                <li className="bg-white rounded p-2">
                  <strong>2 heures :</strong> Maximum absolu
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Pause :</strong> 15 min/heure obligatoire
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">Stop Win/Loss</h3>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">🟢 Stop Win</h4>
                  <ul className="text-xs space-y-1">
                    <li>• +50% du budget = excellent</li>
                    <li>• +100% du budget = jackpot, stop!</li>
                    <li>• Retirer au moins la mise initiale</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">🔴 Stop Loss</h4>
                  <ul className="text-xs space-y-1">
                    <li>• -50% = pause obligatoire</li>
                    <li>• -75% = stop définitif du jour</li>
                    <li>• Jamais recharger dans l'émotion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mythes vs stratégies */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            🎭 Fausses Stratégies vs Vraies Stratégies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-red-400 mb-3">❌ Mythes Dangereux</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-red-900/50 rounded p-2">
                  "Cette slot n'a pas payé depuis longtemps"
                </li>
                <li className="bg-red-900/50 rounded p-2">
                  "Augmenter après 10 spins perdants"
                </li>
                <li className="bg-red-900/50 rounded p-2">
                  "Les slots sont chaudes/froides"
                </li>
                <li className="bg-red-900/50 rounded p-2">
                  "Changer de slot après un gros gain"
                </li>
                <li className="bg-red-900/50 rounded p-2">
                  "Jouer à certaines heures paie mieux"
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-3">✅ Vraies Stratégies</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-green-900/50 rounded p-2">
                  Choisir RTP maximum disponible
                </li>
                <li className="bg-green-900/50 rounded p-2">
                  Mises constantes et calculées
                </li>
                <li className="bg-green-900/50 rounded p-2">
                  Limites strictes pré-définies
                </li>
                <li className="bg-green-900/50 rounded p-2">
                  Utiliser mode démo d'abord
                </li>
                <li className="bg-green-900/50 rounded p-2">
                  Profiter des bonus intelligemment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature hunting */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🎯 Stratégie #5 : Feature Hunting
          </h2>
          
          <div className="bg-indigo-50 rounded p-4">
            <p className="text-sm mb-4">
              Certains joueurs se spécialisent dans la "chasse aux features" (bonus rounds). 
              Voici comment optimiser cette approche :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <h3 className="font-bold mb-2">📊 Statistiques Moyennes</h3>
                <ul className="text-sm space-y-2">
                  <li>• Bonus tous les 100-200 spins</li>
                  <li>• Paiement moyen : 50-100x mise</li>
                  <li>• 10-15% produisent 200x+</li>
                  <li>• 1-2% produisent 500x+</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-4">
                <h3 className="font-bold mb-2">🎰 Stratégie Optimale</h3>
                <ul className="text-sm space-y-2">
                  <li>• 300-500 spins minimum/slot</li>
                  <li>• Noter fréquence des bonus</li>
                  <li>• Comparer paiements moyens</li>
                  <li>• Garder les meilleures slots</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded p-4 mt-4">
              <p className="text-yellow-800 font-semibold text-sm">
                ⚠️ Attention : Le "Bonus Buy" a souvent un RTP inférieur au jeu normal !
              </p>
            </div>
          </div>
        </div>

        {/* Progressive slots */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            💰 Stratégie Jackpots Progressifs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded p-4">
              <h3 className="font-bold text-yellow-800 mb-3">Quand Jouer</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  ✓ Jackpot {'>'} moyenne historique
                </li>
                <li className="bg-white rounded p-2">
                  ✓ Budget spécifique jackpot
                </li>
                <li className="bg-white rounded p-2">
                  ✓ Mise max souvent requise
                </li>
                <li className="bg-white rounded p-2">
                  ✓ Accepter RTP très faible
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">Réalité Check</h3>
              <div className="bg-white rounded p-3 mb-3">
                <p className="text-xs font-semibold mb-1">Probabilités typiques :</p>
                <ul className="text-xs space-y-1">
                  <li>• Mini : 1 sur 50,000</li>
                  <li>• Major : 1 sur 500,000</li>
                  <li>• Mega : 1 sur 50,000,000+</li>
                </ul>
              </div>
              <p className="text-xs text-red-700">
                = Loterie avec mauvais RTP. Jouez pour le rêve, pas pour gagner !
              </p>
            </div>
          </div>
        </div>

        {/* Optimisation technique */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ⚡ Optimisations Techniques
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">🚀 Turbo/Quick Spin</h3>
              <ul className="text-sm space-y-1">
                <li>• Plus de spins/heure</li>
                <li>• Variance plus visible</li>
                <li>• Attention budget !</li>
                <li>• Moins de suspense</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">🤖 Autoplay Intelligent</h3>
              <ul className="text-sm space-y-1">
                <li>• Limites obligatoires</li>
                <li>• Stop sur bonus/gain</li>
                <li>• Max 50-100 spins</li>
                <li>• Surveiller toujours</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">📱 Mobile vs Desktop</h3>
              <ul className="text-sm space-y-1">
                <li>• Mobile = sessions courtes</li>
                <li>• Desktop = analyse stats</li>
                <li>• Portrait = 1 slot focus</li>
                <li>• Paysage = vue complète</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan de session parfait */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            📋 Le Plan de Session Parfait
          </h2>
          
          <div className="bg-green-50 rounded p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-1">Préparation (5 min)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Définir budget strict : _____€</li>
                    <li>• Calculer mise/spin : _____€</li>
                    <li>• Choisir 3-5 slots max (RTP 96%+)</li>
                    <li>• Fixer durée max : _____min</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-1">Échauffement (10 min)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mode démo sur nouvelles slots</li>
                    <li>• 20-30 spins par slot</li>
                    <li>• Noter comportement/feeling</li>
                    <li>• Sélectionner 1-2 favorites</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-1">Session Principale</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Commencer mise minimale</li>
                    <li>• 100+ spins avant jugement</li>
                    <li>• Pause toutes les 100 spins</li>
                    <li>• Noter gains/pertes/bonus</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-1">Clôture (5 min)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Stop au temps/limite atteinte</li>
                    <li>• Retrait gains si +30%</li>
                    <li>• Note session : fun? rentable?</li>
                    <li>• Pause min 24h avant prochaine</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Top slots par stratégie */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🏆 Meilleures Slots par Stratégie (2024)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-green-600 mb-3">Sessions Longues (Low Vol)</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Starburst</span>
                  <span className="font-bold">96.09%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Blood Suckers</span>
                  <span className="font-bold">98.00%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Aloha! Cluster Pays</span>
                  <span className="font-bold">96.42%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-blue-600 mb-3">Équilibre Parfait (Med Vol)</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Gonzo's Quest</span>
                  <span className="font-bold">96.00%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Book of Dead</span>
                  <span className="font-bold">96.21%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Reactoonz</span>
                  <span className="font-bold">96.51%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-red-600 mb-3">Chasseurs de Jackpots (High Vol)</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Dead or Alive 2</span>
                  <span className="font-bold">96.82%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• White Rabbit</span>
                  <span className="font-bold">97.77%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Mental</span>
                  <span className="font-bold">96.68%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-purple-600 mb-3">Bonus Buy Rentables</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Sweet Bonanza</span>
                  <span className="font-bold">96.48%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Gates of Olympus</span>
                  <span className="font-bold">96.50%</span>
                </li>
                <li className="bg-white rounded p-2 flex justify-between">
                  <span>• Wanted DOA</span>
                  <span className="font-bold">96.12%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-red-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">
            🎰 10 Commandements du Joueur de Slots Intelligent
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">1.</span>
              <span className="text-gray-700">Le RTP est roi - jamais en dessous de 96%</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">2.</span>
              <span className="text-gray-700">Ton budget tu respecteras, sans jamais le dépasser</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">3.</span>
              <span className="text-gray-700">La règle des 250 spins tu appliqueras pour ta mise</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">4.</span>
              <span className="text-gray-700">Les patterns et cycles tu oublieras, c'est du hasard</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">5.</span>
              <span className="text-gray-700">En mode démo tu testeras avant de miser réel</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">6.</span>
              <span className="text-gray-700">Les bonus tu utiliseras mais le wagering tu liras</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">7.</span>
              <span className="text-gray-700">Tes limites de temps tu fixeras et respecteras</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">8.</span>
              <span className="text-gray-700">Jamais tu ne chasseras tes pertes avec rage</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">9.</span>
              <span className="text-gray-700">Le fun avant le gain tu privilégieras toujours</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-2">10.</span>
              <span className="text-gray-700">Les slots restent un divertissement, jamais un investissement</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/baccarat"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Le Baccarat
          </Link>
          <Link 
            href="/guide-casino/casino-live"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Casino Live
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}