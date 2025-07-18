// app/guide-casino/mathematiques/page.js
import Link from 'next/link';

export default function MathematiquesPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Mathématiques du Casino</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🧮 Mathématiques du Casino
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Comprendre les mathématiques derrière les jeux de casino est essentiel pour tout joueur sérieux. 
          Découvrez l'avantage maison, les probabilités, la variance et comment ces concepts influencent 
          vos chances de gagner à long terme.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* L'avantage maison */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🏠 L'Avantage Maison (House Edge)
          </h2>
          
          <div className="bg-purple-50 rounded p-6">
            <p className="text-lg mb-4">
              L'avantage maison est le pourcentage mathématique que le casino garde sur chaque mise à long terme.
            </p>
            
            <div className="bg-white rounded p-4 mb-4">
              <h3 className="font-bold text-purple-800 mb-3">Formule de Base</h3>
              <div className="bg-gray-100 rounded p-3 text-center">
                <p className="font-mono text-lg">
                  House Edge = (Pertes du Joueur / Total des Mises) × 100
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">🎲 Jeux à Faible Avantage</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Blackjack (stratégie optimale)</span>
                    <span className="font-bold text-green-600">0.5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Baccarat (Banker)</span>
                    <span className="font-bold text-green-600">1.06%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Craps (Pass/Don't Pass)</span>
                    <span className="font-bold text-green-600">1.4%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Roulette Européenne</span>
                    <span className="font-bold text-yellow-600">2.7%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">🎰 Jeux à Fort Avantage</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Roulette Américaine</span>
                    <span className="font-bold text-orange-600">5.26%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Slots (moyenne)</span>
                    <span className="font-bold text-orange-600">2-10%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Keno</span>
                    <span className="font-bold text-red-600">25-40%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Roue de la Fortune</span>
                    <span className="font-bold text-red-600">11-24%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RTP et Payout */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💰 RTP (Return to Player)
          </h2>
          
          <div className="bg-green-50 rounded p-6">
            <p className="mb-4">
              Le RTP est l'inverse de l'avantage maison. C'est le pourcentage théorique 
              retourné aux joueurs sur le long terme.
            </p>
            
            <div className="bg-white rounded p-4 mb-4">
              <div className="text-center">
                <p className="font-mono text-lg mb-2">
                  RTP = 100% - House Edge
                </p>
                <p className="text-sm text-gray-600">
                  Ex: Slot avec 4% house edge = 96% RTP
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded p-4">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Comprendre le RTP</h3>
              <ul className="space-y-2 text-sm">
                <li>• RTP calculé sur des millions de tours</li>
                <li>• Ne garantit PAS des retours à court terme</li>
                <li>• Un RTP de 96% ne signifie pas récupérer 96€ sur 100€</li>
                <li>• La variance peut créer d'énormes écarts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Probabilités et cotes */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎲 Probabilités et Cotes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Roulette Européenne</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  Numéro plein : 1/37 = 2.70%
                </li>
                <li className="bg-white/10 rounded p-2">
                  Rouge/Noir : 18/37 = 48.65%
                </li>
                <li className="bg-white/10 rounded p-2">
                  Douzaine : 12/37 = 32.43%
                </li>
                <li className="bg-white/10 rounded p-2">
                  Sixain : 6/37 = 16.22%
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Blackjack</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  Blackjack naturel : 4.83%
                </li>
                <li className="bg-white/10 rounded p-2">
                  Bust dealer (17+) : 28.36%
                </li>
                <li className="bg-white/10 rounded p-2">
                  20 points : 10.25%
                </li>
                <li className="bg-white/10 rounded p-2">
                  19 points : 13.48%
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* La variance */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            📊 Variance et Volatilité
          </h2>
          
          <div className="bg-orange-50 rounded p-6">
            <p className="mb-4">
              La variance mesure l'écart entre les résultats à court terme et l'espérance mathématique.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded p-4">
                <h3 className="font-bold text-green-700 mb-2">Faible Variance</h3>
                <ul className="text-sm space-y-1">
                  <li>• Gains fréquents et petits</li>
                  <li>• Bankroll stable</li>
                  <li>• Sessions prévisibles</li>
                  <li>• Ex: Baccarat, BJ</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-4">
                <h3 className="font-bold text-yellow-700 mb-2">Variance Moyenne</h3>
                <ul className="text-sm space-y-1">
                  <li>• Mix gains/fréquence</li>
                  <li>• Swings modérés</li>
                  <li>• Équilibre risk/reward</li>
                  <li>• Ex: Roulette, Craps</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-4">
                <h3 className="font-bold text-red-700 mb-2">Haute Variance</h3>
                <ul className="text-sm space-y-1">
                  <li>• Gains rares mais gros</li>
                  <li>• Swings extrêmes</li>
                  <li>• Bankroll volatil</li>
                  <li>• Ex: Slots, Keno</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded p-4 mt-4">
              <p className="text-blue-800 font-semibold">
                💡 Plus la variance est élevée, plus votre bankroll doit être importante
              </p>
            </div>
          </div>
        </div>

        {/* Expected Value */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📈 Expected Value (EV)
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <p className="mb-4">
              L'Expected Value est le gain ou la perte moyenne attendue sur chaque mise.
            </p>
            
            <div className="bg-white/10 rounded p-4 mb-4">
              <h3 className="font-bold mb-2">Formule EV</h3>
              <p className="font-mono text-center">
                EV = (Probabilité Gain × Montant Gain) - (Probabilité Perte × Montant Perte)
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <h4 className="font-bold mb-2">Exemple : Roulette Rouge/Noir</h4>
                <ul className="text-sm space-y-1">
                  <li>• Mise : 10€ sur Rouge</li>
                  <li>• Probabilité gain : 18/37 = 48.65%</li>
                  <li>• Gain si rouge : +10€</li>
                  <li>• Probabilité perte : 19/37 = 51.35%</li>
                  <li>• Perte si pas rouge : -10€</li>
                  <li className="font-bold text-red-300 pt-2">
                    EV = (0.4865 × 10) - (0.5135 × 10) = -0.27€
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-400/20 rounded p-3">
                <p className="text-sm">
                  ⚠️ Au casino, l'EV est TOUJOURS négatif pour le joueur (sauf erreur du casino)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loi des grands nombres */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🔢 La Loi des Grands Nombres
          </h2>
          
          <div className="bg-indigo-50 rounded p-6">
            <p className="mb-4">
              Plus vous jouez, plus vos résultats convergeront vers l'espérance mathématique.
            </p>
            
            <div className="bg-white rounded p-4 mb-4">
              <h3 className="font-bold mb-3">Impact sur votre jeu</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Court terme ({"<"}1000 mises)</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Variance domine</li>
                    <li>• Gains possibles</li>
                    <li>• Résultats imprévisibles</li>
                    <li>• Luck factor élevé</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Long terme ({">"}10,000 mises)</h4>
                  <ul className="text-xs space-y-1">
                    <li>• House edge domine</li>
                    <li>• Pertes quasi certaines</li>
                    <li>• Résultats prévisibles</li>
                    <li>• Math toujours gagne</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-red-100 rounded p-4">
              <p className="text-red-800 font-semibold">
                🎰 Le casino compte sur cette loi : ils savent qu'avec assez de volume, ils gagneront
              </p>
            </div>
          </div>
        </div>

        {/* Standard Deviation */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            📐 Écart-Type (Standard Deviation)
          </h2>
          
          <div className="bg-purple-50 rounded p-6">
            <p className="mb-4">
              L'écart-type mesure la dispersion des résultats autour de la moyenne.
            </p>
            
            <div className="bg-white rounded p-4 mb-4">
              <h3 className="font-bold mb-2">Règle des 68-95-99.7</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>68%</strong> des résultats : ±1 écart-type</li>
                <li>• <strong>95%</strong> des résultats : ±2 écarts-types</li>
                <li>• <strong>99.7%</strong> des résultats : ±3 écarts-types</li>
              </ul>
            </div>
            
            <div className="bg-yellow-100 rounded p-4">
              <h4 className="font-bold text-yellow-800 mb-2">Exemple Pratique</h4>
              <p className="text-sm">
                1000 mises à 10€ sur Rouge (Roulette EU) :
              </p>
              <ul className="text-sm space-y-1 mt-2">
                <li>• Perte attendue : -27€</li>
                <li>• Écart-type : ~316€</li>
                <li>• 68% de chance d'être entre +289€ et -343€</li>
                <li>• 95% de chance d'être entre +605€ et -659€</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Calculs pratiques */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🧮 Calculs Pratiques pour Joueurs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Bankroll Nécessaire</h3>
              <div className="bg-white/10 rounded p-3 mb-3">
                <p className="text-sm font-mono">
                  Bankroll = Mise × (3 × √Sessions) / √(RTP)
                </p>
              </div>
              <p className="text-sm">
                Pour 100 sessions à 10€/mise, slot 96% RTP : 
                <span className="font-bold"> ~300€ minimum</span>
              </p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Durée de Jeu Estimée</h3>
              <div className="bg-white/10 rounded p-3 mb-3">
                <p className="text-sm font-mono">
                  Tours = Bankroll / (Mise × House Edge)
                </p>
              </div>
              <p className="text-sm">
                Avec 500€, mise 2€, house edge 3% : 
                <span className="font-bold"> ~8,333 tours</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mythes mathématiques */}
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            ❌ Mythes Mathématiques à Détruire
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-red-700 mb-2">🎰 "Cette machine n'a pas payé depuis longtemps"</h3>
              <p className="text-sm">
                FAUX : Chaque tour est indépendant. Les probabilités ne changent jamais.
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-red-700 mb-2">🎲 "Je suis dû pour gagner"</h3>
              <p className="text-sm">
                FAUX : Le "Gambler's Fallacy". Les pertes passées n'influencent pas le futur.
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-red-700 mb-2">🃏 "Les patterns existent"</h3>
              <p className="text-sm">
                FAUX : Le cerveau humain voit des patterns là où il n'y en a pas. C'est du hasard pur.
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-red-700 mb-2">💰 "Augmenter les mises récupère les pertes"</h3>
              <p className="text-sm">
                DANGEREUX : La martingale ne change pas l'EV négatif et peut ruiner rapidement.
              </p>
            </div>
          </div>
        </div>

        {/* Tableaux de référence */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📊 Tableaux de Référence Rapide
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-3">House Edge par Jeu</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="text-left p-2">Jeu</th>
                      <th className="text-center p-2">House Edge</th>
                      <th className="text-center p-2">RTP</th>
                      <th className="text-center p-2">Variance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Blackjack (optimal)</td>
                      <td className="text-center text-green-600 font-bold">0.5%</td>
                      <td className="text-center">99.5%</td>
                      <td className="text-center">Faible</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-2">Baccarat (Banker)</td>
                      <td className="text-center text-green-600 font-bold">1.06%</td>
                      <td className="text-center">98.94%</td>
                      <td className="text-center">Faible</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Craps (Pass)</td>
                      <td className="text-center text-green-600 font-bold">1.4%</td>
                      <td className="text-center">98.6%</td>
                      <td className="text-center">Moyenne</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-2">Roulette EU</td>
                      <td className="text-center text-yellow-600 font-bold">2.7%</td>
                      <td className="text-center">97.3%</td>
                      <td className="text-center">Moyenne</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Roulette US</td>
                      <td className="text-center text-orange-600 font-bold">5.26%</td>
                      <td className="text-center">94.74%</td>
                      <td className="text-center">Moyenne</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-2">Slots (moyenne)</td>
                      <td className="text-center text-orange-600 font-bold">4-8%</td>
                      <td className="text-center">92-96%</td>
                      <td className="text-center">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            🎓 Leçons Mathématiques Essentielles
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">1.</span>
              <span className="text-gray-700">Le casino a TOUJOURS un avantage mathématique intégré</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">2.</span>
              <span className="text-gray-700">Plus vous jouez, plus vous vous rapprochez de la perte théorique</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">3.</span>
              <span className="text-gray-700">La variance permet des gains à court terme, pas à long terme</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">4.</span>
              <span className="text-gray-700">Aucun système de mise ne peut battre les mathématiques</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">5.</span>
              <span className="text-gray-700">Choisissez les jeux avec le plus faible house edge</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">6.</span>
              <span className="text-gray-700">Comprenez la variance pour gérer votre bankroll</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">7.</span>
              <span className="text-gray-700">L'EV négatif signifie : le casino est un divertissement coûteux</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">8.</span>
              <span className="text-gray-700">Les patterns n'existent pas dans le hasard pur</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">9.</span>
              <span className="text-gray-700">La seule façon de gagner : jouer moins ou pas du tout</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">10.</span>
              <span className="text-gray-700">Utilisez ces connaissances pour jouer plus intelligemment, pas plus</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/gestion-bankroll"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Gestion de Bankroll
          </Link>
          <Link 
            href="/guide-casino/erreurs-eviter"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Erreurs à Éviter
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}