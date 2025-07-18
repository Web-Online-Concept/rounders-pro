// app/guide-casino/baccarat/page.js
import Link from 'next/link';

export default function BaccaratPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Baccarat</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💎 Le Baccarat
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le Baccarat est le jeu préféré des high rollers asiatiques et de James Bond. 
          Malgré son aura prestigieuse, c'est l'un des jeux de casino les plus simples 
          avec un excellent avantage maison. Découvrez pourquoi les pros l'adorent.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Principe du jeu */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Principe du Baccarat
          </h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎯 Objectif Simple</h3>
              <p className="text-sm mb-3">
                Parier sur qui aura la main la plus proche de 9 : le Joueur (Player), 
                la Banque (Banker), ou une Égalité (Tie). C'est tout ! Vous ne prenez 
                aucune décision sur les cartes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Valeur des Cartes</h4>
                  <ul className="text-xs space-y-1">
                    <li>• As = 1 point</li>
                    <li>• 2-9 = Valeur faciale</li>
                    <li>• 10, J, Q, K = 0 point</li>
                    <li>• Total {'>'} 9 : on garde l'unité</li>
                    <li>• Ex: 7+6=13 → 3 points</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Mains Naturelles</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 8 ou 9 = "Naturel"</li>
                    <li>• Gagne automatiquement</li>
                    <li>• Sauf contre autre naturel</li>
                    <li>• 9 bat 8</li>
                    <li>• Fin immédiate du coup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">💰 Les Trois Paris Possibles</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3 text-center">
                  <h4 className="font-bold text-green-700">Joueur (Player)</h4>
                  <p className="text-2xl font-bold my-2">1:1</p>
                  <p className="text-xs">Avantage maison : 1.24%</p>
                  <p className="text-xs font-semibold text-green-600 mt-2">Bon choix</p>
                </div>
                <div className="bg-white rounded p-3 text-center border-2 border-green-500">
                  <h4 className="font-bold text-green-700">Banque (Banker)</h4>
                  <p className="text-2xl font-bold my-2">0.95:1</p>
                  <p className="text-xs">Avantage maison : 1.06%</p>
                  <p className="text-xs font-semibold text-green-600 mt-2">MEILLEUR PARI</p>
                </div>
                <div className="bg-red-100 rounded p-3 text-center">
                  <h4 className="font-bold text-red-700">Égalité (Tie)</h4>
                  <p className="text-2xl font-bold my-2">8:1</p>
                  <p className="text-xs">Avantage maison : 14.36%</p>
                  <p className="text-xs font-semibold text-red-600 mt-2">À ÉVITER !</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Déroulement d'une partie */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🎮 Déroulement d'une Partie
          </h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div className="bg-purple-50 rounded p-3 flex-1">
                <h4 className="font-bold mb-1">Placez vos Paris</h4>
                <p className="text-sm">Choisissez Player, Banker ou Tie avant la distribution</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div className="bg-purple-50 rounded p-3 flex-1">
                <h4 className="font-bold mb-1">Distribution Initiale</h4>
                <p className="text-sm">2 cartes face visible pour Player et Banker</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div className="bg-purple-50 rounded p-3 flex-1">
                <h4 className="font-bold mb-1">Vérification des Naturels</h4>
                <p className="text-sm">Si 8 ou 9 pour l'un ou l'autre → fin immédiate</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div className="bg-purple-50 rounded p-3 flex-1">
                <h4 className="font-bold mb-1">Règles de Tirage (Automatiques)</h4>
                <p className="text-sm">Le croupier applique les règles fixes pour la 3ème carte</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div className="bg-purple-50 rounded p-3 flex-1">
                <h4 className="font-bold mb-1">Comparaison et Paiement</h4>
                <p className="text-sm">Main la plus proche de 9 gagne, paiements effectués</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Règles de tirage */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📋 Règles de Tirage de la 3ème Carte
          </h2>
          <p className="mb-6">
            Ces règles sont AUTOMATIQUES - vous n'avez aucune décision à prendre !
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Règles du Joueur (Player)</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  • 0-5 points → Tire une 3ème carte
                </li>
                <li className="bg-white/10 rounded p-2">
                  • 6-7 points → Reste (stand)
                </li>
                <li className="bg-white/10 rounded p-2">
                  • 8-9 points → Naturel (fin)
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Règles de la Banque (Banker)</h3>
              <div className="text-sm space-y-1">
                <p className="font-semibold">Si Player reste sur 6-7 :</p>
                <ul className="ml-4 mb-2">
                  <li>• 0-5 : Banker tire</li>
                  <li>• 6-7 : Banker reste</li>
                </ul>
                <p className="font-semibold">Si Player tire une 3ème carte :</p>
                <p className="text-xs">Règles complexes selon la carte du Player</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded p-4 mt-4">
            <p className="text-sm text-center">
              💡 Pas besoin de mémoriser ! Le croupier (ou logiciel) applique automatiquement ces règles.
            </p>
          </div>
        </div>

        {/* Tableau détaillé Banker */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            📊 Tableau Détaillé - Tirage Banker
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Pour les curieux : quand la Banque tire selon la 3ème carte du Joueur
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Total Banker</th>
                  <th className="p-1">Tire si 3ème carte Player est :</th>
                  <th className="p-1">Reste si 3ème carte Player est :</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-bold">0-2</td>
                  <td className="p-1 text-center">Toujours tire</td>
                  <td className="p-1 text-center">-</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-bold">3</td>
                  <td className="p-1 text-center">0-7, 9</td>
                  <td className="p-1 text-center">8</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-bold">4</td>
                  <td className="p-1 text-center">2-7</td>
                  <td className="p-1 text-center">0-1, 8-9</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-bold">5</td>
                  <td className="p-1 text-center">4-7</td>
                  <td className="p-1 text-center">0-3, 8-9</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-bold">6</td>
                  <td className="p-1 text-center">6-7</td>
                  <td className="p-1 text-center">0-5, 8-9</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-bold">7</td>
                  <td className="p-1 text-center">-</td>
                  <td className="p-1 text-center">Toujours reste</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Variantes du Baccarat */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🎲 Variantes du Baccarat
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🎯 Punto Banco</h3>
              <p className="text-sm mb-2">La version standard (décrite ici)</p>
              <ul className="text-xs space-y-1">
                <li>• Règles fixes automatiques</li>
                <li>• Aucune décision du joueur</li>
                <li>• Plus rapide et simple</li>
                <li>• 99% des tables mondiales</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🎴 Chemin de Fer</h3>
              <p className="text-sm mb-2">Version française historique</p>
              <ul className="text-xs space-y-1">
                <li>• Joueurs peuvent être banquier</li>
                <li>• Décisions sur tirage 3ème carte</li>
                <li>• Plus stratégique</li>
                <li>• Très rare aujourd'hui</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">⚡ Speed Baccarat</h3>
              <p className="text-sm mb-2">Version turbo en ligne</p>
              <ul className="text-xs space-y-1">
                <li>• Cartes face visible</li>
                <li>• Tours en 27 secondes</li>
                <li>• Mêmes règles et odds</li>
                <li>• Pour joueurs pressés</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">🐉 Dragon Tiger</h3>
              <p className="text-sm mb-2">Baccarat ultra-simplifié</p>
              <ul className="text-xs space-y-1">
                <li>• 1 carte par côté seulement</li>
                <li>• Carte haute gagne</li>
                <li>• Très populaire en Asie</li>
                <li>• Plus de variance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Side bets */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🎰 Paris Secondaires (Side Bets)
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-red-800 font-semibold">
              ⚠️ Tous les side bets ont un avantage maison élevé - À éviter pour jeu optimal
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-100">
                  <th className="text-left p-2">Side Bet</th>
                  <th className="text-center p-2">Paiement</th>
                  <th className="text-center p-2">House Edge</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Player Pair</td>
                  <td className="text-center">11:1</td>
                  <td className="text-center text-red-600 font-bold">10.36%</td>
                  <td className="text-xs">2 premières cartes Player identiques</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-semibold">Banker Pair</td>
                  <td className="text-center">11:1</td>
                  <td className="text-center text-red-600 font-bold">10.36%</td>
                  <td className="text-xs">2 premières cartes Banker identiques</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Perfect Pair</td>
                  <td className="text-center">25:1</td>
                  <td className="text-center text-red-600 font-bold">13.03%</td>
                  <td className="text-xs">Paire de même couleur et rang</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-semibold">Big</td>
                  <td className="text-center">0.54:1</td>
                  <td className="text-center text-orange-600 font-bold">4.35%</td>
                  <td className="text-xs">Total de 5-6 cartes distribuées</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Small</td>
                  <td className="text-center">1.5:1</td>
                  <td className="text-center text-orange-600 font-bold">5.27%</td>
                  <td className="text-xs">Total de 4 cartes distribuées</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stratégies et systèmes */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            📈 Stratégies au Baccarat
          </h2>
          
          <div className="bg-white/20 rounded p-6 mb-4">
            <h3 className="text-xl font-bold mb-4">La Seule Stratégie Qui Compte</h3>
            <p className="text-lg">
              PARIEZ TOUJOURS SUR BANKER (sauf si vous comptez les cartes - très avancé)
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Banker : 1.06% house edge (50.68% de gagner)</li>
              <li>• Player : 1.24% house edge (49.32% de gagner)</li>
              <li>• Commission 5% sur Banker = toujours meilleur</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-800/50 rounded p-4">
              <h4 className="font-bold mb-2">❌ Stratégies Inutiles</h4>
              <ul className="text-sm space-y-1">
                <li>• Suivre les patterns</li>
                <li>• Roadmaps et tendances</li>
                <li>• Martingale sur Banker</li>
                <li>• Alternance Player/Banker</li>
                <li>• "Sentir" la table</li>
              </ul>
            </div>
            <div className="bg-green-800/50 rounded p-4">
              <h4 className="font-bold mb-2">✅ Ce Qui Marche</h4>
              <ul className="text-sm space-y-1">
                <li>• Miser sur Banker</li>
                <li>• Éviter Tie toujours</li>
                <li>• Gestion bankroll stricte</li>
                <li>• Sessions courtes</li>
                <li>• Accepter la variance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commission et No Commission */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💸 Commission vs No Commission Baccarat
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">Baccarat Standard (5% Commission)</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  • Banker gagne → Paie 0.95:1
                </li>
                <li className="bg-white rounded p-2">
                  • House edge : 1.06%
                </li>
                <li className="bg-white rounded p-2">
                  • Plus transparent
                </li>
                <li className="bg-white rounded p-2">
                  • Calculs parfois chiants
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">No Commission Baccarat</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  • Banker paie 1:1 normalement
                </li>
                <li className="bg-white rounded p-2">
                  • MAIS : Banker 6 → Paie 0.5:1
                </li>
                <li className="bg-white rounded p-2">
                  • House edge : 1.46% (!!)
                </li>
                <li className="bg-white rounded p-2">
                  • Piège sur le 6
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded p-4 mt-4">
            <p className="text-yellow-800 font-semibold">
              💡 Préférez toujours la version standard avec commission 5% - meilleur pour vous !
            </p>
          </div>
        </div>

        {/* Pourquoi les pros aiment */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🏆 Pourquoi les Pros Adorent le Baccarat
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>House Edge Minimal</strong>
                  <p className="text-sm text-purple-100">1.06% sur Banker = top 3 casino</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Aucune Décision</strong>
                  <p className="text-sm text-purple-100">Impossible de mal jouer</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Variance Modérée</strong>
                  <p className="text-sm text-purple-100">Swings contrôlables</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Rythme Rapide</strong>
                  <p className="text-sm text-purple-100">Plus de mains/heure</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Limites Élevées</strong>
                  <p className="text-sm text-purple-100">Tables VIP jusqu'à 100k+</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Comp Points Généreux</strong>
                  <p className="text-sm text-purple-100">Gros volume = gros comps</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Prestige Social</strong>
                  <p className="text-sm text-purple-100">Jeu des VIP et célébrités</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <div>
                  <strong>Négociable</strong>
                  <p className="text-sm text-purple-100">Commission réduite si gros joueur</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Gestion de bankroll */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            💰 Gestion de Bankroll au Baccarat
          </h2>
          
          <div className="bg-indigo-50 rounded p-6">
            <h3 className="font-bold text-indigo-800 mb-4">Plan de Session Optimal</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">Joueur Récréatif</h4>
                <ul className="text-sm space-y-2">
                  <li>• Bankroll : 40-50 unités</li>
                  <li>• Mise de base : 2% bankroll</li>
                  <li>• Stop loss : -20 unités</li>
                  <li>• Stop win : +15-20 unités</li>
                  <li>• Durée max : 2 heures</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">High Roller</h4>
                <ul className="text-sm space-y-2">
                  <li>• Bankroll : 100+ unités</li>
                  <li>• Mise de base : 1% bankroll</li>
                  <li>• Négocier commission 4%</li>
                  <li>• Demander rebate/cashback</li>
                  <li>• Host casino dédié</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded p-4 mt-4">
              <p className="text-sm font-semibold text-yellow-800">
                ⚠️ Le Baccarat est rapide - 60-80 mains/heure. Gardez des mises constantes !
              </p>
            </div>
          </div>
        </div>

        {/* Roadmaps expliquées */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            📊 Les Roadmaps (Pour Info)
          </h2>
          
          <div className="bg-gray-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Les casinos affichent l'historique des résultats dans différents formats. 
              Beaucoup de joueurs y cherchent des patterns... qui n'existent pas !
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded p-3">
              <h4 className="font-bold text-red-800 mb-1">Big Road</h4>
              <p className="text-xs">Grille simple : Rouge=Banker, Bleu=Player</p>
            </div>
            <div className="bg-blue-50 rounded p-3">
              <h4 className="font-bold text-blue-800 mb-1">Big Eye Boy</h4>
              <p className="text-xs">Dérivé complexe du Big Road</p>
            </div>
            <div className="bg-green-50 rounded p-3">
              <h4 className="font-bold text-green-800 mb-1">Small Road</h4>
              <p className="text-xs">Autre dérivé, colonnes décalées</p>
            </div>
            <div className="bg-purple-50 rounded p-3">
              <h4 className="font-bold text-purple-800 mb-1">Cockroach Pig</h4>
              <p className="text-xs">Le plus complexe et inutile</p>
            </div>
          </div>
          
          <div className="bg-red-100 rounded p-4 mt-4">
            <p className="text-red-800 font-semibold">
              🎲 Rappel : Chaque main est indépendante. Les patterns sont une illusion !
            </p>
          </div>
        </div>

        {/* Baccarat en ligne vs live */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎥 Baccarat Live vs RNG
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Baccarat Live</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Croupier réel, cartes physiques</li>
                <li>✓ Ambiance casino authentique</li>
                <li>✓ Squeeze cards disponible</li>
                <li>✓ Interaction sociale (chat)</li>
                <li>✓ Commission négociable (VIP)</li>
                <li>✗ Plus lent (45 sec/main)</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Baccarat RNG</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Ultra rapide (10 sec/main)</li>
                <li>✓ Mises mini très faibles</li>
                <li>✓ Statistiques détaillées</li>
                <li>✓ Mode turbo disponible</li>
                <li>✓ Pas d'attente</li>
                <li>✗ Moins immersif</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            💎 Maîtriser le Baccarat en 7 Points
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
              <span className="text-gray-700">
                <strong>Banker, Banker, Banker :</strong> 1.06% reste imbattable
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
              <span className="text-gray-700">
                <strong>Jamais Tie :</strong> 14.36% = arnaque totale
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
              <span className="text-gray-700">
                <strong>Ignorez les patterns :</strong> Pure superstition
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
              <span className="text-gray-700">
                <strong>Évitez side bets :</strong> House edge trop élevé
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">5</span>
              <span className="text-gray-700">
                <strong>Commission {'>'} No Commission :</strong> Méfiez-vous du 6
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">6</span>
              <span className="text-gray-700">
                <strong>Bankroll management :</strong> Le jeu est rapide
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">7</span>
              <span className="text-gray-700">
                <strong>Profitez :</strong> C'est simple, élégant et fun !
              </span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/roulette"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            La Roulette
          </Link>
          <Link 
            href="/guide-casino/strategies-slots"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Stratégies Slots
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}