// app/guide-paris-sportifs/systemes-montantes/page.js
import Link from 'next/link';

export default function SystemesMontantesPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Systèmes & Montantes</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📊 Systèmes & Montantes
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les systèmes de mise progressifs promettent de récupérer les pertes et générer des profits. 
          Certains fonctionnent mathématiquement, d'autres sont des mirages dangereux. 
          Apprenez à les utiliser intelligemment... ou à les éviter.
        </p>
      </div>

      {/* Avertissement */}
      <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-red-800 mb-2">🚨 Avertissement Critique</h2>
        <p className="text-red-700 font-semibold">
          La plupart des systèmes progressifs peuvent mener à la ruine rapide. 
          Une série de pertes est TOUJOURS possible, même improbable. 
          Ne misez jamais plus que votre bankroll ne peut supporter.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Martingale Classique */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            1. La Martingale Classique 💀
          </h2>
          <p className="text-gray-700 mb-4">
            Le système le plus connu et le plus dangereux. Doublez votre mise après chaque perte.
          </p>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Principe :</h3>
            <p>Doublez jusqu'à gagner, puis revenez à la mise initiale.</p>
          </div>

          <div className="bg-gray-100 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Exemple avec mise initiale 10€ :</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Tour</th>
                  <th className="text-center pb-2">Mise</th>
                  <th className="text-center pb-2">Total investi</th>
                  <th className="text-right pb-2">Si gain (cote 2.0)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">1</td>
                  <td className="text-center">10€</td>
                  <td className="text-center">10€</td>
                  <td className="text-right text-green-600">+10€</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">2</td>
                  <td className="text-center">20€</td>
                  <td className="text-center">30€</td>
                  <td className="text-right text-green-600">+10€</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">3</td>
                  <td className="text-center">40€</td>
                  <td className="text-center">70€</td>
                  <td className="text-right text-green-600">+10€</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">4</td>
                  <td className="text-center">80€</td>
                  <td className="text-center">150€</td>
                  <td className="text-right text-green-600">+10€</td>
                </tr>
                <tr className="border-b bg-red-100">
                  <td className="py-2">5</td>
                  <td className="text-center">160€</td>
                  <td className="text-center">310€</td>
                  <td className="text-right text-green-600">+10€</td>
                </tr>
                <tr className="bg-red-200">
                  <td className="py-2">7</td>
                  <td className="text-center font-bold">640€</td>
                  <td className="text-center font-bold">1270€</td>
                  <td className="text-right text-green-600">+10€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-100 rounded p-4">
            <h4 className="font-bold text-red-800 mb-2">💣 Pourquoi c'est mortel :</h4>
            <ul className="text-red-700 space-y-1">
              <li>• 7 pertes = risquer 1270€ pour gagner 10€</li>
              <li>• 10 pertes = mise de 5120€ nécessaire</li>
              <li>• Limites des bookmakers atteintes rapidement</li>
              <li>• Probabilité de ruine : 100% sur le long terme</li>
            </ul>
          </div>
        </div>

        {/* Fibonacci */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            2. Système Fibonacci ⚠️
          </h2>
          <p className="text-gray-700 mb-4">
            Progression plus douce basée sur la suite de Fibonacci.
          </p>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Suite de Fibonacci :</h3>
            <p className="font-mono">1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...</p>
            <p className="text-sm mt-2">Chaque nombre = somme des deux précédents</p>
          </div>

          <div className="bg-gray-100 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Règles :</h4>
            <ul className="space-y-2">
              <li>• <strong>Perte :</strong> Avancez d'un niveau dans la suite</li>
              <li>• <strong>Gain :</strong> Reculez de 2 niveaux (ou retour au début)</li>
              <li>• <strong>Cotes :</strong> Idéalement 2.50+ pour être profitable</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded p-4">
              <h4 className="font-bold text-green-800 mb-2">✅ Avantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Progression plus lente que Martingale</li>
                <li>• Récupération possible avec 33% de réussite</li>
                <li>• Moins de pression sur la bankroll</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded p-4">
              <h4 className="font-bold text-red-800 mb-2">❌ Dangers</h4>
              <ul className="text-sm space-y-1">
                <li>• Toujours une progression négative</li>
                <li>• Longues séries perdantes = gros problèmes</li>
                <li>• Nécessite des cotes élevées</li>
              </ul>
            </div>
          </div>
        </div>

        {/* D'Alembert */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            3. Système D'Alembert 📈
          </h2>
          <p className="text-gray-700 mb-4">
            Progression arithmétique simple : +1 unité après perte, -1 après gain.
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Exemple de progression :</h3>
            <div className="font-mono text-sm">
              <p>Mise de base : 10€</p>
              <p>❌ Perte → Mise suivante : 20€</p>
              <p>❌ Perte → Mise suivante : 30€</p>
              <p>✅ Gain → Mise suivante : 20€</p>
              <p>✅ Gain → Mise suivante : 10€</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-semibold mb-2">Variante "Contre D'Alembert" :</h4>
            <p>Inversez ! +1 après gain, -1 après perte. Pour surfer sur les séries gagnantes.</p>
          </div>
        </div>

        {/* Labouchère */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            4. Système Labouchère 🧮
          </h2>
          <p className="text-gray-700 mb-4">
            Système complexe basé sur une séquence de nombres que vous définissez.
          </p>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Fonctionnement :</h3>
            <ol className="space-y-2 text-sm">
              <li>1. Créez une séquence (ex: 1-2-3-4)</li>
              <li>2. Mise = premier + dernier nombre</li>
              <li>3. Si gain : barrez ces deux nombres</li>
              <li>4. Si perte : ajoutez la mise à la fin</li>
              <li>5. Objectif : barrer tous les nombres</li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-semibold mb-2">Exemple pratique :</h4>
            <div className="text-sm space-y-1">
              <p>Séquence : [1, 2, 3, 4]</p>
              <p>Tour 1 : Mise 5€ (1+4) → ❌ Perte</p>
              <p>Nouvelle : [1, 2, 3, 4, 5]</p>
              <p>Tour 2 : Mise 6€ (1+5) → ✅ Gain</p>
              <p>Nouvelle : [2, 3, 4]</p>
              <p>Continue jusqu'à séquence vide...</p>
            </div>
          </div>
        </div>

        {/* Montantes Positives */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            5. Montantes Positives (Recommandées) ✅
          </h2>
          <p className="mb-4">
            Augmentez vos mises après les GAINS, pas les pertes. Bien plus sûr !
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Paroli (Anti-Martingale)</h3>
              <ul className="text-sm space-y-1">
                <li>• Doublez après chaque gain</li>
                <li>• Retour mise initiale après 3 gains</li>
                <li>• Ou après première perte</li>
                <li>• Maximise les séries gagnantes</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">1-3-2-6</h3>
              <ul className="text-sm space-y-1">
                <li>• Séquence fixe de mises</li>
                <li>• 1 unité → 3 → 2 → 6</li>
                <li>• Retour au début après perte</li>
                <li>• Limite les pertes, booste gains</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Analyse comparative */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Comparaison des systèmes
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Système</th>
                <th className="px-4 py-3 text-center">Risque</th>
                <th className="px-4 py-3 text-center">Bankroll min</th>
                <th className="px-4 py-3 text-center">Complexité</th>
                <th className="px-4 py-3 text-center">Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Martingale</td>
                <td className="px-4 py-3 text-center text-red-600">Extrême</td>
                <td className="px-4 py-3 text-center">1000+ unités</td>
                <td className="px-4 py-3 text-center">⭐</td>
                <td className="px-4 py-3 text-center">❌ À éviter</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Fibonacci</td>
                <td className="px-4 py-3 text-center text-orange-600">Élevé</td>
                <td className="px-4 py-3 text-center">200 unités</td>
                <td className="px-4 py-3 text-center">⭐⭐</td>
                <td className="px-4 py-3 text-center">⚠️ Prudence</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">D'Alembert</td>
                <td className="px-4 py-3 text-center text-yellow-600">Modéré</td>
                <td className="px-4 py-3 text-center">100 unités</td>
                <td className="px-4 py-3 text-center">⭐</td>
                <td className="px-4 py-3 text-center">🤔 Acceptable</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Labouchère</td>
                <td className="px-4 py-3 text-center text-orange-600">Élevé</td>
                <td className="px-4 py-3 text-center">150 unités</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-center">⚠️ Experts</td>
              </tr>
              <tr className="border-b bg-green-50">
                <td className="px-4 py-3">Paroli</td>
                <td className="px-4 py-3 text-center text-green-600">Faible</td>
                <td className="px-4 py-3 text-center">20 unités</td>
                <td className="px-4 py-3 text-center">⭐</td>
                <td className="px-4 py-3 text-center">✅ Recommandé</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3">1-3-2-6</td>
                <td className="px-4 py-3 text-center text-green-600">Faible</td>
                <td className="px-4 py-3 text-center">12 unités</td>
                <td className="px-4 py-3 text-center">⭐⭐</td>
                <td className="px-4 py-3 text-center">✅ Recommandé</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Simulation réaliste */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Simulation : 10 pertes consécutives
        </h2>
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <p className="text-red-800 font-semibold mb-4">
            Voici pourquoi les progressions négatives sont dangereuses :
          </p>
          
          <table className="w-full bg-white rounded">
            <thead className="bg-red-200">
              <tr>
                <th className="px-4 py-2 text-left">Système</th>
                <th className="px-4 py-2 text-right">Perte totale (base 10€)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Flat (fixe)</td>
                <td className="px-4 py-2 text-right">100€</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">D'Alembert</td>
                <td className="px-4 py-2 text-right">550€</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Fibonacci</td>
                <td className="px-4 py-2 text-right">1,430€</td>
              </tr>
              <tr className="bg-red-100">
                <td className="px-4 py-2 font-bold">Martingale</td>
                <td className="px-4 py-2 text-right font-bold text-red-600">10,230€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notre système Rounders */}
        <div className="bg-green-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🏆 Le Système Rounders (Notre Approche)
          </h2>
          <p className="mb-4">
            Basé sur la value et la gestion stricte, pas sur des progressions magiques.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">1. Base : Flat betting 1-2%</h3>
              <p>Mise fixe sur toutes les value bets identifiées</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">2. Ajustement mensuel</h3>
              <p>Recalculez vos unités selon l'évolution de la bankroll</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">3. Boost confiance (optionnel)</h3>
              <p>2-3% sur les meilleures values (+15% EV minimum)</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">4. Protection</h3>
              <p>Stop loss journalier : -5% bankroll max</p>
            </div>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            💡 Vérités sur les systèmes
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Aucun système ne change les probabilités.</strong> Une cote 2.00 reste 50% de chances.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Les progressions négatives = route vers la faillite.</strong> C'est mathématique.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>La seule progression gagnante : améliorer vos analyses.</strong> Le reste est illusion.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Si vous devez utiliser un système, choisissez positif.</strong> Limitez les dégâts.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Le meilleur système : value betting + flat betting.</strong> Ennuyeux mais profitable.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/surebets"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Surebets & Arbitrage
          </Link>
          <Link 
            href="/guide-paris-sportifs/optimisation"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Optimisation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}