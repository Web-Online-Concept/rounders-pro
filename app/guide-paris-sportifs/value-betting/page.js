// app/guide-paris-sportifs/value-betting/page.js
import Link from 'next/link';

export default function ValueBettingPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Value Betting</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💎 Value Betting
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le Value Betting est LE concept fondamental qui sépare les parieurs perdants des gagnants. 
          C'est la seule approche mathématiquement prouvée pour battre les bookmakers sur le long terme. 
          Maîtrisez-le et vous aurez la clé de la rentabilité.
        </p>
      </div>

      {/* Avertissement */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-2">⚠️ Principe Fondamental</h2>
        <p className="text-yellow-700 font-semibold">
          "On ne gagne pas en prédisant qui va gagner, on gagne en trouvant des cotes mal évaluées par les bookmakers."
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Qu'est-ce que la Value ?
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Il y a value quand la probabilité réelle qu'un événement se produise est supérieure 
            à la probabilité implicite de la cote proposée par le bookmaker.
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">La formule magique :</h3>
            <p className="font-mono text-xl mb-2">EV = (P × C) - 1</p>
            <ul className="text-sm space-y-1">
              <li>• EV = Expected Value (Valeur Espérée)</li>
              <li>• P = Probabilité réelle estimée (en décimal)</li>
              <li>• C = Cote proposée</li>
              <li className="font-bold">• Si EV {'>'} 0 → Il y a de la value !</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-semibold mb-2">Exemple concret :</h4>
            <p className="mb-2">Lancer de pièce - Probabilité réelle : 50% (0.50)</p>
            <ul className="space-y-1">
              <li>• Bookmaker offre cote 2.10 pour Face</li>
              <li>• EV = (0.50 × 2.10) - 1 = 0.05</li>
              <li className="font-bold text-green-600">• +5% de value → Pari rentable à long terme !</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Comprendre les probabilités
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="font-bold mb-4">Conversion Cote → Probabilité</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-semibold mb-2">Formule :</h4>
              <p className="font-mono">Probabilité = 1 / Cote × 100%</p>
            </div>
            <div className="bg-blue-50 rounded p-4">
              <h4 className="font-semibold mb-2">Exemples :</h4>
              <ul className="text-sm space-y-1">
                <li>• Cote 2.00 → 50% probabilité</li>
                <li>• Cote 1.50 → 66.7% probabilité</li>
                <li>• Cote 3.00 → 33.3% probabilité</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-100 rounded p-4">
            <h4 className="font-bold text-yellow-800 mb-2">🎯 Le piège de la marge</h4>
            <p className="text-yellow-700">
              Les bookmakers incluent une marge. Sur un match à 2 issues égales, 
              ils offrent 1.90/1.90 au lieu de 2.00/2.00. Votre job : trouver où ils se trompent !
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Comment identifier la value ?
        </h2>
        
        {/* Méthode 1 : Estimation personnelle */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            1. Méthode de l'Estimation Personnelle
          </h3>
          <p className="text-gray-700 mb-4">
            Développez votre propre modèle d'évaluation des probabilités.
          </p>
          
          <div className="bg-gray-50 rounded p-4 mb-4">
            <h4 className="font-semibold mb-3">Processus étape par étape :</h4>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 flex-shrink-0">1</span>
                <span>Analysez le match en profondeur (stats, forme, contexte)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 flex-shrink-0">2</span>
                <span>Estimez vos probabilités AVANT de regarder les cotes</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 flex-shrink-0">3</span>
                <span>Convertissez en cotes minimales acceptables</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 flex-shrink-0">4</span>
                <span>Comparez avec les cotes du marché</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2 flex-shrink-0">5</span>
                <span>Pariez uniquement si value {'>'} 5%</span>
              </li>
            </ol>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-semibold mb-2">Exemple pratique :</h4>
            <p>Bayern vs Dortmund - Votre analyse :</p>
            <ul className="text-sm space-y-1 mt-2">
              <li>• Bayern gagne : 65% → Cote min 1.54</li>
              <li>• Nul : 20% → Cote min 5.00</li>
              <li>• Dortmund : 15% → Cote min 6.67</li>
              <li className="font-bold">• Si Bayern proposé à 1.70 → VALUE !</li>
            </ul>
          </div>
        </div>

        {/* Méthode 2 : Comparaison de cotes */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">
            2. Méthode de Comparaison des Cotes
          </h3>
          <p className="text-gray-700 mb-4">
            Exploitez les différences entre bookmakers pour détecter la value.
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Principe :</h4>
            <p>
              Si la majorité des bookmakers proposent 1.80 et qu'un seul offre 2.00, 
              il y a probablement de la value sur cette cote isolée.
            </p>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Bookmaker</th>
                  <th className="text-center pb-2">Cote</th>
                  <th className="text-right pb-2">Écart</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Bet365</td>
                  <td className="text-center">1.80</td>
                  <td className="text-right">-</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Unibet</td>
                  <td className="text-center">1.83</td>
                  <td className="text-right">+1.7%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Pinnacle</td>
                  <td className="text-center">1.85</td>
                  <td className="text-right">+2.8%</td>
                </tr>
                <tr className="bg-green-100">
                  <td className="py-2 font-bold">BookmakerX</td>
                  <td className="text-center font-bold">2.00</td>
                  <td className="text-right font-bold text-green-700">+11.1% ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Méthode 3 : Modèles statistiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">
            3. Méthode des Modèles Statistiques
          </h3>
          <p className="text-gray-700 mb-4">
            Utilisez des modèles mathématiques pour calculer les probabilités objectives.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded p-4">
              <h4 className="font-semibold mb-2">Modèles simples :</h4>
              <ul className="text-sm space-y-1">
                <li>• Poisson (nombre de buts)</li>
                <li>• ELO Rating (force relative)</li>
                <li>• Forme récente pondérée</li>
                <li>• Moyenne ajustée domicile/extérieur</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded p-4">
              <h4 className="font-semibold mb-2">Données à intégrer :</h4>
              <ul className="text-sm space-y-1">
                <li>• xG (Expected Goals)</li>
                <li>• Possession ajustée</li>
                <li>• Occasions nettes</li>
                <li>• Performance vs niveau opposé</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les erreurs des bookmakers
        </h2>
        <div className="bg-red-50 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-red-800 mb-4">Où les bookmakers se trompent souvent :</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">📰 Biais médiatique</h4>
              <p className="text-sm">
                Surévaluation des équipes populaires et sous-évaluation des "petites" équipes en forme
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">📊 Réaction excessive</h4>
              <p className="text-sm">
                Ajustements trop importants après un résultat surprenant (une défaite 5-0 ne se reproduit pas)
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">🏠 Facteur domicile</h4>
              <p className="text-sm">
                Surestimation de l'avantage domicile dans certains contextes (huis clos, derbys)
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">📅 Calendrier ignoré</h4>
              <p className="text-sm">
                Non-prise en compte de la fatigue, rotations probables, matchs importants à venir
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Gestion de bankroll spécifique
        </h2>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Adapter vos mises à la value</h3>
          
          <div className="bg-white/20 rounded p-4 mb-4">
            <h4 className="font-bold mb-2">Règle proportionnelle :</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="text-left pb-2">Value détectée</th>
                  <th className="text-right pb-2">Mise recommandée</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20">
                  <td className="py-2">5-10%</td>
                  <td className="text-right">1-2% bankroll</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-2">10-15%</td>
                  <td className="text-right">2-3% bankroll</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-2">15-20%</td>
                  <td className="text-right">3-4% bankroll</td>
                </tr>
                <tr>
                  <td className="py-2">{'>'} 20%</td>
                  <td className="text-right">4-5% max</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white/10 rounded p-4">
            <p className="text-sm">
              <strong>⚠️ Important :</strong> Ne dépassez JAMAIS 5% même sur une value énorme. 
              La variance existe et même un pari EV+ peut perdre.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tracker ses performances
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="font-bold mb-4">Métriques essentielles du value bettor :</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">À mesurer :</h4>
              <ul className="text-sm space-y-1">
                <li>• CLV (Closing Line Value)</li>
                <li>• ROI par tranche de value</li>
                <li>• Taux de réussite vs attendu</li>
                <li>• P-value de vos résultats</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Objectifs réalistes :</h4>
              <ul className="text-sm space-y-1">
                <li>• ROI long terme : 3-8%</li>
                <li>• Minimum 500 paris pour juger</li>
                <li>• Variance normale : ±20% bankroll</li>
                <li>• Mois négatifs : normal (30-40%)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Outils et ressources
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">🛠️ Outils essentiels</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Comparateurs :</strong> Oddschecker, BetBrain</li>
                <li>• <strong>Trackers :</strong> Betlogger, Bettingmetrics</li>
                <li>• <strong>Stats :</strong> FBref, Understat</li>
                <li>• <strong>Alertes :</strong> Services de dropping odds</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">📚 Pour approfondir</h3>
              <ul className="space-y-2 text-sm">
                <li>• Concept de CLV (Closing Line Value)</li>
                <li>• Théorie des marchés efficients</li>
                <li>• Pinnacle articles éducatifs</li>
                <li>• Forums spécialisés value betting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan d'action */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            🎯 Votre plan d'action Value Betting
          </h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Semaine 1-2</strong>
                <p className="text-gray-300">Estimez des probas sans parier. Comparez avec les cotes de clôture.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Semaine 3-4</strong>
                <p className="text-gray-300">Commencez avec des mises minimales sur vos meilleures values (+10%).</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Mois 2</strong>
                <p className="text-gray-300">Augmentez progressivement si CLV positive. Affinez votre modèle.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Mois 3+</strong>
                <p className="text-gray-300">Standardisez votre processus. Visez 100+ value bets par mois.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Citation finale */}
        <div className="bg-green-100 border-l-4 border-green-600 p-6 mt-8">
          <p className="text-green-800 font-semibold text-lg italic">
            "Le value betting n'est pas une stratégie, c'est LA seule façon mathématiquement viable 
            de battre les bookmakers. Tout le reste n'est que gambling."
          </p>
          <p className="text-green-600 text-sm mt-2">- Principe fondamental du pari professionnel</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/strategies-base"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Stratégies de Base
          </Link>
          <Link 
            href="/guide-paris-sportifs/surebets"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Surebets & Arbitrage
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}