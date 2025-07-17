// app/guide-paris-sportifs/surebets/page.js
import Link from 'next/link';

export default function SurebetsPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Surebets & Arbitrage</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎯 Surebets & Arbitrage
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les surebets (arbitrage) permettent de garantir un profit quel que soit le résultat. 
          C'est la seule méthode 100% sans risque dans les paris sportifs, mais elle demande 
          rapidité, capital et discrétion.
        </p>
      </div>

      {/* Avertissement */}
      <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-red-800 mb-2">⚠️ Avertissement Important</h2>
        <p className="text-red-700 font-semibold">
          Les bookmakers détestent l'arbitrage. Votre compte peut être limité ou fermé. 
          Cette pratique, bien que légale, n'est pas la bienvenue.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Qu'est-ce qu'un surebet ?
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Un surebet (ou arbitrage) se produit quand les cotes combinées de tous les résultats 
            possibles d'un événement garantissent un profit, peu importe l'issue.
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Condition mathématique :</h3>
            <p className="font-mono text-lg mb-2">1/Cote1 + 1/Cote2 + 1/CoteN {'<'} 1</p>
            <p className="text-sm">Si la somme est inférieure à 1, il y a arbitrage possible !</p>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-semibold mb-2">Exemple simple (Tennis) :</h4>
            <ul className="space-y-1">
              <li>• Bookmaker A : Nadal 2.10</li>
              <li>• Bookmaker B : Djokovic 2.05</li>
              <li>• Calcul : 1/2.10 + 1/2.05 = 0.476 + 0.488 = 0.964</li>
              <li className="font-bold text-green-600">• 0.964 {'<'} 1 → Surebet détecté ! Profit : 3.6%</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Types de surebets
        </h2>
        
        {/* Surebet classique */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            1. Surebet Classique (Pre-match)
          </h3>
          <p className="text-gray-700 mb-4">
            Exploiter les différences de cotes entre bookmakers avant le match.
          </p>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <h4 className="font-semibold mb-3">Exemple Football (1X2) :</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Bookmaker</th>
                  <th className="text-center pb-2">1</th>
                  <th className="text-center pb-2">X</th>
                  <th className="text-center pb-2">2</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Bet365</td>
                  <td className="text-center font-bold text-green-600">3.20</td>
                  <td className="text-center">3.30</td>
                  <td className="text-center">2.35</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Pinnacle</td>
                  <td className="text-center">3.10</td>
                  <td className="text-center font-bold text-green-600">3.45</td>
                  <td className="text-center">2.40</td>
                </tr>
                <tr>
                  <td className="py-2">Unibet</td>
                  <td className="text-center">3.00</td>
                  <td className="text-center">3.35</td>
                  <td className="text-center font-bold text-green-600">2.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <p className="font-semibold mb-2">Calcul du surebet :</p>
            <p className="text-sm">1/3.20 + 1/3.45 + 1/2.50 = 0.3125 + 0.2899 + 0.4000 = 1.0024</p>
            <p className="text-red-600 font-bold">Pas de surebet ici (> 1), mais proche !</p>
          </div>
        </div>

        {/* Middles */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">
            2. Middles (Arbitrage du milieu)
          </h3>
          <p className="text-gray-700 mb-4">
            Parier sur deux lignes opposées avec une zone de profit double.
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Exemple Basketball (Total Points) :</h4>
            <ul className="space-y-2">
              <li>• Bookmaker A : Over 215.5 @ 1.95</li>
              <li>• Bookmaker B : Under 218.5 @ 1.95</li>
              <li className="font-bold text-blue-600">• Zone miracle : 216-218 points = double gain !</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-red-100 rounded p-3 text-center">
              <div className="font-semibold">< 216 points</div>
              <div className="text-sm">Gain sur Under</div>
            </div>
            <div className="bg-green-100 rounded p-3 text-center">
              <div className="font-semibold">216-218 points</div>
              <div className="text-sm font-bold text-green-700">Double gain !</div>
            </div>
            <div className="bg-blue-100 rounded p-3 text-center">
              <div className="font-semibold">> 218 points</div>
              <div className="text-sm">Gain sur Over</div>
            </div>
          </div>
        </div>

        {/* Live Arbitrage */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">
            3. Live Arbitrage
          </h3>
          <p className="text-gray-700 mb-4">
            Profiter des décalages de mise à jour des cotes en direct.
          </p>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Avantages :</h4>
            <ul className="text-sm space-y-1">
              <li>• Plus d'opportunités (cotes volatiles)</li>
              <li>• Moins surveillé par certains bookmakers</li>
              <li>• Possibilité de hedge des paris pre-match</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <strong>⚡ Défi :</strong> Nécessite une exécution ultra-rapide. 
              Les surebets live disparaissent en quelques secondes.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Calcul des mises optimales
        </h2>
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Formules de répartition</h3>
          
          <div className="bg-white/20 rounded p-4 mb-4">
            <h4 className="font-bold mb-2">Pour un profit égal :</h4>
            <div className="space-y-2 font-mono text-sm">
              <p>Mise1 = Capital × (1/Cote1) / Somme</p>
              <p>Mise2 = Capital × (1/Cote2) / Somme</p>
              <p className="text-xs">Où Somme = 1/Cote1 + 1/Cote2 + ...</p>
            </div>
          </div>

          <div className="bg-white/10 rounded p-4">
            <h4 className="font-semibold mb-2">Exemple avec 1000€ :</h4>
            <p>Cotes : 2.10 vs 2.05 (Somme = 0.964)</p>
            <ul className="text-sm mt-2">
              <li>• Mise sur 2.10 = 1000 × 0.476 / 0.964 = 493.78€</li>
              <li>• Mise sur 2.05 = 1000 × 0.488 / 0.964 = 506.22€</li>
              <li className="font-bold">• Gain garanti = 36€ (3.6%)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Outils indispensables
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">🔍 Scanners de surebets</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>BetBurger :</strong> Le plus complet (payant)</li>
                <li>• <strong>RebelBetting :</strong> User-friendly</li>
                <li>• <strong>OddStorm :</strong> Bon rapport qualité/prix</li>
                <li>• <strong>Arbmate :</strong> Focus pre-match</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">🧮 Calculateurs</h3>
              <ul className="space-y-2 text-sm">
                <li>• Calculateur d'arbitrage en ligne</li>
                <li>• Apps mobiles dédiées</li>
                <li>• Extensions navigateur</li>
                <li>• Feuilles Excel personnalisées</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Stratégies pour éviter les limitations
        </h2>
        <div className="bg-orange-50 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-orange-800 mb-4">🛡️ Techniques de camouflage</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">1. Mises arrondies</h4>
              <p className="text-sm">
                Au lieu de 493.78€, misez 490€ ou 500€. Les mises précises crient "arbitrage".
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">2. Comptes récréatifs</h4>
              <p className="text-sm">
                Placez aussi des paris "normaux" perdants. Mélangez arbitrage et paris fun.
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">3. Évitez les patterns</h4>
              <p className="text-sm">
                Variez sports, marchés, montants. Ne faites pas QUE de l'arbitrage.
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">4. Bookmakers tolérants</h4>
              <p className="text-sm">
                Pinnacle, exchanges (Betfair) acceptent les arbitrageurs. Privilégiez-les.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Risques et pièges
        </h2>
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-red-800 mb-4">⚠️ Dangers de l'arbitrage</h3>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Paris annulés :</strong> Un bookmaker peut annuler pour "erreur de cote"
              </div>
            </div>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Limitations :</strong> Mises max réduites à 10€ ou moins
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Fermeture de compte :</strong> Permanent et sans recours
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Règles différentes :</strong> Prolongations incluses chez l'un, pas l'autre
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Erreur d'exécution :</strong> Cote qui change pendant validation
              </div>
            </li>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Rentabilité réelle
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="font-bold mb-4">💰 Ce qu'il faut savoir</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">Profits moyens :</h4>
              <ul className="text-sm space-y-1">
                <li>• Par surebet : 1-3%</li>
                <li>• Mensuel avec 10k€ : 300-1000€</li>
                <li>• ROI annuel : 15-50%</li>
                <li>• Temps plein possible : 2-5k€/mois</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">Investissement nécessaire :</h4>
              <ul className="text-sm space-y-1">
                <li>• Capital minimum : 5000€</li>
                <li>• Comptes multiples : 10-20</li>
                <li>• Temps : 2-4h/jour</li>
                <li>• Outils : 50-200€/mois</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exemple détaillé */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Exemple complet pas à pas
        </h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-blue-800 mb-3">Tennis - Nadal vs Federer</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-3">
              <strong>1. Détection :</strong> Scanner trouve cotes 2.15 (Nadal) vs 2.08 (Federer)
            </div>
            <div className="bg-white rounded p-3">
              <strong>2. Vérification :</strong> 1/2.15 + 1/2.08 = 0.465 + 0.481 = 0.946 < 1 ✓
            </div>
            <div className="bg-white rounded p-3">
              <strong>3. Profit :</strong> (1 - 0.946) × 100 = 5.4% garanti
            </div>
            <div className="bg-white rounded p-3">
              <strong>4. Capital :</strong> 2000€ disponibles
            </div>
            <div className="bg-white rounded p-3">
              <strong>5. Mises :</strong> Nadal: 982€ @ 2.15 | Federer: 1018€ @ 2.08
            </div>
            <div className="bg-green-100 rounded p-3">
              <strong>6. Résultat :</strong> Gain garanti = 108€ peu importe le vainqueur
            </div>
          </div>
        </div>

        {/* Plan d'action */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            🚀 Commencer l'arbitrage
          </h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Ouvrez 10+ comptes</strong>
                <p className="text-gray-300">Diversifiez sur bookmakers majeurs et mineurs</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Testez avec scanner gratuit</strong>
                <p className="text-gray-300">Familiarisez-vous avant d'investir dans un outil payant</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Commencez petit</strong>
                <p className="text-gray-300">100-200€ par surebet pour tester et apprendre</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Documentez tout</strong>
                <p className="text-gray-300">Screenshots, confirmations, pour gérer les litiges</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/value-betting"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Value Betting
          </Link>
          <Link 
            href="/guide-paris-sportifs/systemes-montantes"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Systèmes & Montantes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}