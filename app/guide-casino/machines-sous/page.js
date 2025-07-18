// app/guide-casino/machines-sous/page.js
import Link from 'next/link';

export default function MachinesSousPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Machines à Sous</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎯 Les Machines à Sous
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les machines à sous représentent 70% des revenus des casinos. Comprendre leur fonctionnement, 
          le RTP, la volatilité et les différents types de slots vous permettra de maximiser vos chances 
          et votre plaisir de jeu.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Comment fonctionnent les slots */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Comment Fonctionnent les Machines à Sous ?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">🎲 Le RNG (Random Number Generator)</h3>
              <p className="text-sm mb-3">
                Cœur de chaque machine, le RNG génère des milliers de nombres aléatoires par seconde. 
                Au moment où vous appuyez sur "Spin", le résultat est déjà déterminé.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-xs font-semibold mb-2">Points clés :</p>
                <ul className="text-xs space-y-1">
                  <li>• Chaque tour est 100% indépendant</li>
                  <li>• Pas de cycles chauds/froids</li>
                  <li>• Impossible de prédire les résultats</li>
                  <li>• Audité et certifié régulièrement</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded p-4">
                <h3 className="font-bold text-blue-800 mb-2">📊 RTP (Return to Player)</h3>
                <p className="text-sm mb-2">
                  Pourcentage théorique retourné aux joueurs sur le long terme.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• {'<'} 94% : Faible</li>
                  <li>• 94-96% : Moyen</li>
                  <li>• 96-98% : Bon</li>
                  <li>• {'>'} 98% : Excellent</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded p-4">
                <h3 className="font-bold text-green-800 mb-2">🎢 Volatilité</h3>
                <p className="text-sm mb-2">
                  Fréquence et taille des gains.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Faible : Gains fréquents, petits</li>
                  <li>• Moyenne : Équilibre</li>
                  <li>• Haute : Gains rares, gros</li>
                  <li>• Très haute : Jackpots énormes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Types de machines à sous */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Les Différents Types de Slots
          </h2>
          
          <div className="space-y-4">
            {/* Classiques */}
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-2">🍒 Machines Classiques (3 Rouleaux)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Les slots traditionnelles inspirées des bandits manchots.</p>
                  <ul className="text-xs space-y-1">
                    <li>• 3 rouleaux, 1-5 lignes</li>
                    <li>• Symboles fruits, BAR, 7</li>
                    <li>• Gameplay simple</li>
                    <li>• Volatilité faible à moyenne</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-1">Idéal pour :</p>
                  <p className="text-xs">Débutants, nostalgiques, sessions longues avec petit budget</p>
                  <p className="text-red-600 font-bold text-xs mt-2">RTP moyen : 95-97%</p>
                </div>
              </div>
            </div>

            {/* Vidéo */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🎮 Machines Vidéo (5+ Rouleaux)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Les plus populaires avec graphismes et bonus élaborés.</p>
                  <ul className="text-xs space-y-1">
                    <li>• 5-7 rouleaux, 10-100+ lignes</li>
                    <li>• Thèmes variés (films, mythologie...)</li>
                    <li>• Bonus games complexes</li>
                    <li>• Wilds, Scatters, Free Spins</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-1">Points forts :</p>
                  <p className="text-xs">Immersion, variété, gros multiplicateurs possibles</p>
                  <p className="text-blue-600 font-bold text-xs mt-2">RTP moyen : 94-98%</p>
                </div>
              </div>
            </div>

            {/* Progressives */}
            <div className="bg-yellow-50 rounded p-4">
              <h3 className="font-bold text-yellow-800 mb-2">💰 Jackpots Progressifs</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Jackpots qui augmentent à chaque mise jusqu'au gain.</p>
                  <ul className="text-xs space-y-1">
                    <li>• Local, réseau ou global</li>
                    <li>• Jackpots de milliers à millions</li>
                    <li>• Mise max souvent requise</li>
                    <li>• Volatilité très élevée</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-1">Attention :</p>
                  <p className="text-xs">RTP base plus faible car une partie alimente le jackpot</p>
                  <p className="text-yellow-600 font-bold text-xs mt-2">RTP moyen : 88-94%</p>
                </div>
              </div>
            </div>

            {/* Megaways */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">🎰 Megaways™</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Système révolutionnaire avec lignes de paiement variables.</p>
                  <ul className="text-xs space-y-1">
                    <li>• 2-7 symboles par rouleau</li>
                    <li>• Jusqu'à 117,649 façons de gagner</li>
                    <li>• Cascades et multiplicateurs</li>
                    <li>• Haute volatilité généralement</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-1">Populaires :</p>
                  <p className="text-xs">Bonanza, Extra Chilli, White Rabbit</p>
                  <p className="text-green-600 font-bold text-xs mt-2">RTP moyen : 96-97%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features et symboles */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Symboles et Features Importants
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-800 mb-2">🃏 Wild</h3>
              <p className="text-sm mb-2">Remplace tous les symboles (sauf Scatter)</p>
              <ul className="text-xs space-y-1">
                <li>• Standard : Substitution simple</li>
                <li>• Expanding : S'étend sur le rouleau</li>
                <li>• Sticky : Reste en place</li>
                <li>• Walking : Se déplace</li>
                <li>• Multiplier : Multiplie les gains</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">⭐ Scatter</h3>
              <p className="text-sm mb-2">Déclenche les bonus, paie n'importe où</p>
              <ul className="text-xs space-y-1">
                <li>• 3+ généralement requis</li>
                <li>• Active les Free Spins</li>
                <li>• Ouvre les bonus games</li>
                <li>• Paiements élevés</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🎁 Free Spins</h3>
              <p className="text-sm mb-2">Tours gratuits avec features améliorées</p>
              <ul className="text-xs space-y-1">
                <li>• Multiplicateurs augmentés</li>
                <li>• Wilds supplémentaires</li>
                <li>• Re-triggers possibles</li>
                <li>• Symboles spéciaux</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded p-4">
              <h3 className="font-bold text-pink-800 mb-2">🎮 Bonus Games</h3>
              <p className="text-sm mb-2">Mini-jeux interactifs</p>
              <ul className="text-xs space-y-1">
                <li>• Pick & Click</li>
                <li>• Roue de fortune</li>
                <li>• Niveaux progressifs</li>
                <li>• Multiplicateurs garantis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stratégies pour les slots */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Stratégies pour Maximiser vos Chances
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">1. Choisir le Bon RTP</h3>
              <p className="text-sm">Privilégiez toujours les slots avec RTP {'>'} 96%. 
              La différence entre 94% et 97% représente 50% de gains en plus sur le long terme !</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">2. Adapter la Volatilité à votre Bankroll</h3>
              <ul className="text-sm space-y-1">
                <li>• Petit budget → Faible volatilité</li>
                <li>• Budget moyen → Volatilité moyenne</li>
                <li>• Gros budget → Haute volatilité possible</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">3. Gestion des Mises</h3>
              <p className="text-sm mb-2">La règle des 200-300 spins :</p>
              <p className="text-xs">Divisez votre budget par 200-300 pour déterminer votre mise. 
              Ex: 100€ ÷ 250 = 0.40€ par spin</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">4. Utiliser les Bonus Casino</h3>
              <p className="text-sm">Les Free Spins et bonus de dépôt augmentent votre temps de jeu. 
              Attention au wagering et aux slots éligibles.</p>
            </div>
          </div>
        </div>

        {/* Top slots par catégorie */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🏆 Top Slots par Catégorie (2024)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-green-600 mb-3">Meilleur RTP</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>• Mega Joker (NetEnt)</span>
                  <span className="font-bold">99%</span>
                </li>
                <li className="flex justify-between">
                  <span>• Blood Suckers (NetEnt)</span>
                  <span className="font-bold">98%</span>
                </li>
                <li className="flex justify-between">
                  <span>• White Rabbit (BTG)</span>
                  <span className="font-bold">97.7%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-blue-600 mb-3">Plus Populaires</h3>
              <ul className="space-y-2 text-sm">
                <li>• Book of Dead (Play'n GO)</li>
                <li>• Starburst (NetEnt)</li>
                <li>• Gonzo's Quest (NetEnt)</li>
                <li>• Sweet Bonanza (Pragmatic)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-yellow-600 mb-3">Meilleurs Jackpots</h3>
              <ul className="space-y-2 text-sm">
                <li>• Mega Moolah (Microgaming)</li>
                <li>• Major Millions (Microgaming)</li>
                <li>• Divine Fortune (NetEnt)</li>
                <li>• Mega Fortune (NetEnt)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-purple-600 mb-3">Innovation 2024</h3>
              <ul className="space-y-2 text-sm">
                <li>• Gates of Olympus 1000</li>
                <li>• Wanted Dead or a Wild</li>
                <li>• Mental (Nolimit City)</li>
                <li>• Chaos Crew 2 (Hacksaw)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mythes et réalités */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            🚫 Mythes vs Réalités sur les Slots
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800/50 rounded p-4">
                <h3 className="font-bold mb-2">❌ MYTHE</h3>
                <p className="text-sm">"Cette machine n'a pas payé depuis longtemps, elle va bientôt exploser"</p>
              </div>
              <div className="bg-green-800/50 rounded p-4">
                <h3 className="font-bold mb-2">✅ RÉALITÉ</h3>
                <p className="text-sm">Chaque tour est indépendant. Le RNG ne se souvient pas des tours précédents.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800/50 rounded p-4">
                <h3 className="font-bold mb-2">❌ MYTHE</h3>
                <p className="text-sm">"Les casinos peuvent ajuster le RTP à distance"</p>
              </div>
              <div className="bg-green-800/50 rounded p-4">
                <h3 className="font-bold mb-2">✅ RÉALITÉ</h3>
                <p className="text-sm">Le RTP est fixé par le développeur et vérifié par des auditeurs indépendants.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800/50 rounded p-4">
                <h3 className="font-bold mb-2">❌ MYTHE</h3>
                <p className="text-sm">"Il existe des techniques pour battre les slots"</p>
              </div>
              <div className="bg-green-800/50 rounded p-4">
                <h3 className="font-bold mb-2">✅ RÉALITÉ</h3>
                <p className="text-sm">Aucune stratégie ne peut changer l'avantage mathématique du casino.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget et limites */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            💰 Gestion du Budget aux Slots
          </h2>
          
          <div className="bg-red-50 rounded p-6">
            <h3 className="font-bold text-red-800 mb-4">Plan de Session Optimal</h3>
            
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-2">1. Définir le Budget Total</h4>
                <p className="text-xs">Montant que vous pouvez perdre sans impact sur votre vie</p>
              </div>
              
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-2">2. Diviser en Sessions</h4>
                <p className="text-xs">Ex: 100€ → 5 sessions de 20€</p>
              </div>
              
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-2">3. Calculer la Mise</h4>
                <p className="text-xs">Session ÷ 200-300 spins = Mise optimale</p>
              </div>
              
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-2">4. Limites Stop Win/Loss</h4>
                <p className="text-xs">Stop Loss: -100% session | Stop Win: +50-100% session</p>
              </div>
              
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-2">5. Pauses Obligatoires</h4>
                <p className="text-xs">15 min toutes les heures, évaluer l'état mental</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mode démo */}
        <div className="bg-blue-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            🎮 L'Importance du Mode Démo
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Testez gratuitement :</strong> Découvrez les mécaniques sans risquer d'argent
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Évaluez la volatilité :</strong> 100-200 spins suffisent pour sentir le comportement
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Comprenez les bonus :</strong> Features complexes nécessitent de la pratique
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Trouvez vos préférées :</strong> Testez 10 slots, gardez 2-3 favorites
              </span>
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">
            🎰 Règles d'Or des Machines à Sous
          </h3>
          <ol className="space-y-2 text-gray-700">
            <li><strong>1.</strong> Les slots sont un divertissement, jamais une source de revenus</li>
            <li><strong>2.</strong> L'avantage maison garantit des pertes sur le long terme</li>
            <li><strong>3.</strong> Choisissez toujours le meilleur RTP disponible</li>
            <li><strong>4.</strong> Adaptez la volatilité à votre budget et objectifs</li>
            <li><strong>5.</strong> Fixez des limites strictes AVANT de jouer</li>
            <li><strong>6.</strong> Les "systèmes" et "stratégies miracles" n'existent pas</li>
            <li><strong>7.</strong> Profitez du jeu, arrêtez si ce n'est plus fun</li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/jeux-table"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Jeux de Table
          </Link>
          <Link 
            href="/guide-casino/blackjack-pro"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Le Blackjack Pro
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}