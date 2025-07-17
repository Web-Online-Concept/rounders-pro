// app/guide-paris-sportifs/strategies-base/page.js
import Link from 'next/link';

export default function StrategiesBasePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Stratégies de Base</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📈 Stratégies de Base
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Découvrez les stratégies fondamentales qui ont fait leurs preuves. Ces approches, utilisées 
          par des milliers de parieurs rentables, vous donneront une base solide pour développer 
          votre propre système gagnant.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Value Betting Simplifié */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            1. Le Value Betting (Base)
          </h2>
          <p className="text-gray-700 mb-4">
            Parier uniquement quand la cote proposée est supérieure à la probabilité réelle de l'événement.
          </p>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Formule simple :</h3>
            <p className="font-mono text-lg mb-2">Value = (Probabilité × Cote) - 1</p>
            <p className="text-sm">Si Value > 0, il y a de la valeur</p>
          </div>

          <div className="bg-gray-100 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Exemple concret :</h4>
            <ul className="space-y-2">
              <li>• Match : Liverpool vs Everton</li>
              <li>• Votre analyse : Liverpool a 70% de chances de gagner</li>
              <li>• Cote proposée : 1.55</li>
              <li>• Calcul : (0.70 × 1.55) - 1 = 0.085</li>
              <li className="font-bold text-green-700">• Résultat : +8.5% de value → PARIER ✓</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800">
              <strong>💡 Conseil :</strong> Commencez par chercher des values de +5% minimum. 
              Avec l'expérience, vous affinerez vos estimations.
            </p>
          </div>
        </div>

        {/* Stratégie des Favoris */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            2. Stratégie des Favoris à Domicile
          </h2>
          <p className="text-gray-700 mb-4">
            Miser sur les équipes favorites jouant à domicile avec des critères stricts.
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Critères de sélection :</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Cote entre 1.30 et 1.70</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Top 5 du championnat</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Minimum 70% de victoires à domicile</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Pas de blessés majeurs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Adversaire hors top 10</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded p-4">
              <h4 className="font-bold text-green-800 mb-2">✅ Avantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Taux de réussite ~65-70%</li>
                <li>• Simple à appliquer</li>
                <li>• Peu de recherche nécessaire</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded p-4">
              <h4 className="font-bold text-red-800 mb-2">❌ Limites</h4>
              <ul className="text-sm space-y-1">
                <li>• Cotes faibles = gains limités</li>
                <li>• Surprises possibles</li>
                <li>• ROI modeste (~3-5%)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Over/Under Goals */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            3. Stratégie Over/Under 2.5 Buts
          </h2>
          <p className="text-gray-700 mb-4">
            Exploiter les tendances de buts des équipes et des championnats.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-700 mb-2">Over 2.5 (3 buts ou +)</h3>
              <p className="text-sm mb-2">Ciblez :</p>
              <ul className="text-sm space-y-1">
                <li>• Équipes offensives (2+ buts/match)</li>
                <li>• Défenses faibles</li>
                <li>• Derbys et rivalités</li>
                <li>• Eredivisie, Bundesliga</li>
                <li>• Matchs sans enjeu</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-700 mb-2">Under 2.5 (2 buts ou -)</h3>
              <p className="text-sm mb-2">Ciblez :</p>
              <ul className="text-sm space-y-1">
                <li>• Équipes défensives</li>
                <li>• Matchs à enjeu élevé</li>
                <li>• Début de saison</li>
                <li>• Serie A, Ligue 1</li>
                <li>• Conditions météo difficiles</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-100 rounded p-4">
            <h4 className="font-bold text-purple-800 mb-2">📊 Stats à analyser :</h4>
            <ul className="text-sm space-y-1">
              <li>• Moyenne de buts par match (les 2 équipes)</li>
              <li>• % de matchs Over/Under sur les 10 derniers</li>
              <li>• Confrontations directes récentes</li>
              <li>• Moyenne du championnat</li>
            </ul>
          </div>
        </div>

        {/* Double Chance */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            4. Double Chance Sécurisée
          </h2>
          <p className="text-gray-700 mb-4">
            Couvrir 2 résultats sur 3 pour sécuriser vos paris sur les matchs serrés.
          </p>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Les 3 options :</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white rounded p-3 text-center">
                <div className="font-bold">1X</div>
                <div className="text-sm">Domicile ou Nul</div>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <div className="font-bold">X2</div>
                <div className="text-sm">Nul ou Extérieur</div>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <div className="font-bold">12</div>
                <div className="text-sm">Domicile ou Extérieur</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Stratégie optimale :</h4>
            <ol className="space-y-2 text-sm">
              <li>1. Identifier un match équilibré (cotes proches)</li>
              <li>2. Éliminer le résultat le moins probable</li>
              <li>3. Miser sur la double chance opposée</li>
              <li>4. Viser des cotes entre 1.30 et 1.50</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <strong>⚠️ ROI :</strong> Stratégie à faible risque mais faible rendement. 
              Idéale pour protéger sa bankroll ou en combiné.
            </p>
          </div>
        </div>

        {/* BTTS Strategy */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            5. BTTS (Les Deux Équipes Marquent)
          </h2>
          <p className="text-gray-700 mb-4">
            Stratégie populaire pour les matchs offensifs où les deux équipes ont des chances de marquer.
          </p>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Critères pour BTTS "Oui" :</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Stats offensives</h4>
                <ul className="text-sm space-y-1">
                  <li>• Les 2 équipes marquent 1.5+ buts/match</li>
                  <li>• BTTS dans 60%+ de leurs matchs</li>
                  <li>• Attaquants en forme</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Stats défensives</h4>
                <ul className="text-sm space-y-1">
                  <li>• Les 2 équipes encaissent régulièrement</li>
                  <li>• Pas de clean sheet récent</li>
                  <li>• Défenseurs absents</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-semibold mb-2">💰 Combo gagnant :</h4>
            <p className="text-sm">
              BTTS + Over 2.5 → Cotes attractives (~2.20-2.80) avec bonne probabilité 
              si bien analysé
            </p>
          </div>
        </div>

        {/* Stratégie Live */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            6. Stratégie Live "70e Minute"
          </h2>
          <p className="mb-4">
            Exploiter la pression finale et la fatigue en pariant sur les buts tardifs.
          </p>
          
          <div className="bg-white/20 rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Conditions idéales :</h3>
            <ul className="space-y-2">
              <li>• Score : 0-0 ou 1-0 à la 70e minute</li>
              <li>• Équipe menée pousse pour égaliser</li>
              <li>• Espaces qui s'ouvrent en défense</li>
              <li>• Cote "Un but de plus" > 1.50</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded p-3">
              <h4 className="font-bold mb-2">✅ Signaux positifs</h4>
              <ul className="text-sm space-y-1">
                <li>• Changements offensifs</li>
                <li>• Domination territoriale</li>
                <li>• Fatigue visible défense</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded p-3">
              <h4 className="font-bold mb-2">❌ Éviter si</h4>
              <ul className="text-sm space-y-1">
                <li>• Carton rouge équipe dominante</li>
                <li>• Temps perdu volontairement</li>
                <li>• Aucune occasion franche</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tableau comparatif */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Comparaison des stratégies
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Stratégie</th>
                <th className="px-4 py-3 text-center">Difficulté</th>
                <th className="px-4 py-3 text-center">ROI moyen</th>
                <th className="px-4 py-3 text-center">Variance</th>
                <th className="px-4 py-3 text-center">Temps requis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Value Betting</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-center text-green-600">5-15%</td>
                <td className="px-4 py-3 text-center">Moyenne</td>
                <td className="px-4 py-3 text-center">+++</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Favoris Domicile</td>
                <td className="px-4 py-3 text-center">⭐</td>
                <td className="px-4 py-3 text-center text-yellow-600">3-5%</td>
                <td className="px-4 py-3 text-center">Faible</td>
                <td className="px-4 py-3 text-center">+</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Over/Under</td>
                <td className="px-4 py-3 text-center">⭐⭐</td>
                <td className="px-4 py-3 text-center text-yellow-600">4-8%</td>
                <td className="px-4 py-3 text-center">Moyenne</td>
                <td className="px-4 py-3 text-center">++</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Double Chance</td>
                <td className="px-4 py-3 text-center">⭐</td>
                <td className="px-4 py-3 text-center text-orange-600">2-4%</td>
                <td className="px-4 py-3 text-center">Très faible</td>
                <td className="px-4 py-3 text-center">+</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">BTTS</td>
                <td className="px-4 py-3 text-center">⭐⭐</td>
                <td className="px-4 py-3 text-center text-yellow-600">3-7%</td>
                <td className="px-4 py-3 text-center">Moyenne</td>
                <td className="px-4 py-3 text-center">++</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Live 70e</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                <td className="px-4 py-3 text-center text-green-600">5-10%</td>
                <td className="px-4 py-3 text-center">Élevée</td>
                <td className="px-4 py-3 text-center">+++</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Plan de progression */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            📚 Plan de progression recommandé
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold mb-1">Mois 1-2 : Favoris à domicile</h3>
                <p className="text-gray-300 text-sm">
                  Commencez simple pour comprendre les mécaniques et gérer vos émotions
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold mb-1">Mois 3-4 : Over/Under + BTTS</h3>
                <p className="text-gray-300 text-sm">
                  Élargissez vos marchés et affinez votre analyse statistique
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold mb-1">Mois 5-6 : Introduction au Live</h3>
                <p className="text-gray-300 text-sm">
                  Testez les paris en direct avec des mises réduites
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold mb-1">Mois 6+ : Value Betting</h3>
                <p className="text-gray-300 text-sm">
                  Développez votre propre système basé sur la recherche de value
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-green-100 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            💡 Conseils pour réussir avec ces stratégies
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Spécialisez-vous :</strong> Maîtrisez 1-2 stratégies plutôt que toutes superficiellement
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Tenez des statistiques :</strong> Trackez chaque pari pour identifier ce qui fonctionne
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Patience :</strong> Les résultats se jugent sur 100+ paris, pas sur une semaine
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Adaptez :</strong> Ajustez les stratégies à votre style et vos connaissances
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Bankroll first :</strong> Aucune stratégie ne fonctionne sans gestion stricte du capital
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/analyse-matchs"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Analyse des Matchs
          </Link>
          <Link 
            href="/guide-paris-sportifs/value-betting"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Value Betting
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}