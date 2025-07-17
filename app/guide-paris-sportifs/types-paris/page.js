// app/guide-paris-sportifs/types-paris/page.js
import Link from 'next/link';

export default function TypesParisPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Types de Paris</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎯 Types de Paris
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Découvrez tous les types de paris disponibles, du simple au système complexe. 
          Chaque type a ses avantages et ses risques. Comprendre leurs spécificités vous 
          permettra de choisir la stratégie la plus adaptée à votre profil et vos objectifs.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Paris Simple */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            1. Le Pari Simple (Single)
          </h2>
          <p className="text-gray-700 mb-4">
            Le pari le plus basique et le plus utilisé. Vous misez sur un seul événement.
          </p>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Exemple :</h3>
            <p className="mb-2">PSG vs Marseille - Victoire du PSG à 1.80</p>
            <p>Mise : 20€</p>
            <p className="font-bold text-green-700">Gain potentiel : 20€ × 1.80 = 36€</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded p-4">
              <h4 className="font-bold text-green-800 mb-2">✅ Avantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Simple à comprendre</li>
                <li>• Risque limité à un événement</li>
                <li>• Idéal pour les value bets</li>
                <li>• Cashout souvent disponible</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded p-4">
              <h4 className="font-bold text-red-800 mb-2">❌ Inconvénients</h4>
              <ul className="text-sm space-y-1">
                <li>• Gains limités par la cote</li>
                <li>• Nécessite du volume pour être rentable</li>
                <li>• Pas de compensation entre paris</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paris Combiné */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            2. Le Pari Combiné (Accumulator)
          </h2>
          <p className="text-gray-700 mb-4">
            Vous combinez plusieurs sélections en un seul pari. Toutes doivent être gagnantes pour remporter le pari.
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Calcul de la cote combinée :</h3>
            <p className="font-mono mb-4">Cote totale = Cote 1 × Cote 2 × Cote 3 × ...</p>
            
            <div className="bg-white rounded p-3">
              <p className="font-semibold mb-2">Exemple de combiné triple :</p>
              <ul className="space-y-1 mb-2">
                <li>• Liverpool gagne : 1.50</li>
                <li>• Plus de 2.5 buts Real/Barça : 1.70</li>
                <li>• Bayern Munich gagne : 1.40</li>
              </ul>
              <p className="font-bold">Cote totale : 1.50 × 1.70 × 1.40 = 3.57</p>
              <p className="text-blue-700 font-bold">Mise 10€ → Gain potentiel : 35.70€</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-800">
              <strong>⚠️ Attention :</strong> La probabilité de gagner diminue drastiquement avec chaque sélection ajoutée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-100 rounded p-4">
              <h4 className="font-bold text-blue-800 mb-2">✅ Avantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Gains potentiels élevés</li>
                <li>• Petite mise peut rapporter gros</li>
                <li>• Adrénaline garantie</li>
                <li>• Bonus combiné chez certains bookmakers</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded p-4">
              <h4 className="font-bold text-red-800 mb-2">❌ Inconvénients</h4>
              <ul className="text-sm space-y-1">
                <li>• Très difficile à gagner</li>
                <li>• Un seul échec = pari perdu</li>
                <li>• Tentation de trop combiner</li>
                <li>• ROI négatif sur le long terme</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paris Système */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            3. Le Pari Système
          </h2>
          <p className="text-gray-700 mb-4">
            Combinaison de plusieurs paris combinés. Vous pouvez gagner même si toutes vos sélections ne sont pas correctes.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold mb-2">Trixie (3 sélections)</h3>
              <p className="text-sm mb-2">4 paris : 3 doubles + 1 triple</p>
              <p className="text-purple-700">Gagnant si au moins 2 sélections correctes</p>
            </div>
            
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold mb-2">Yankee (4 sélections)</h3>
              <p className="text-sm mb-2">11 paris : 6 doubles + 4 triples + 1 quadruple</p>
              <p className="text-indigo-700">Mise totale = Mise unitaire × 11</p>
            </div>
            
            <div className="bg-pink-50 rounded p-4">
              <h3 className="font-bold mb-2">Lucky 15 (4 sélections)</h3>
              <p className="text-sm mb-2">15 paris : 4 simples + 6 doubles + 4 triples + 1 quadruple</p>
              <p className="text-pink-700">Bonus souvent offerts par les bookmakers</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-semibold mb-2">📊 Exemple concret - Trixie :</h4>
            <p className="text-sm mb-2">3 matchs sélectionnés à 2.00 chacun, mise 1€ par pari (4€ total)</p>
            <ul className="text-sm space-y-1">
              <li>• Si 2/3 corrects : Retour ~4€ (rentabilité)</li>
              <li>• Si 3/3 corrects : Retour ~12€ (profit 200%)</li>
            </ul>
          </div>
        </div>

        {/* Paris Spéciaux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            4. Les Paris Spéciaux
          </h2>
          
          <div className="space-y-4">
            {/* Handicap */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Handicap</h3>
              <p className="text-gray-700 mb-2">
                Équilibrer les chances en donnant un avantage/désavantage virtuel.
              </p>
              <div className="bg-orange-50 rounded p-3">
                <p className="text-sm">PSG -1.5 vs Lens signifie que PSG doit gagner par 2 buts d'écart minimum</p>
              </div>
            </div>

            {/* Over/Under */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Over/Under (Plus/Moins)</h3>
              <p className="text-gray-700 mb-2">
                Parier sur un total (buts, points, corners...) supérieur ou inférieur à une valeur.
              </p>
              <div className="bg-yellow-50 rounded p-3">
                <p className="text-sm">Plus de 2.5 buts = il faut 3 buts ou plus dans le match</p>
              </div>
            </div>

            {/* BTTS */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-2">BTTS (Both Teams To Score)</h3>
              <p className="text-gray-700 mb-2">
                Les deux équipes marquent-elles au moins un but ?
              </p>
              <div className="bg-red-50 rounded p-3">
                <p className="text-sm">BTTS Oui : Les deux équipes doivent marquer</p>
              </div>
            </div>

            {/* Double Chance */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Double Chance</h3>
              <p className="text-gray-700 mb-2">
                Couvrir 2 résultats sur 3 possibles (1X, X2, 12).
              </p>
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm">1X = Victoire domicile OU match nul</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paris Live */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            5. Les Paris Live (In-Play)
          </h2>
          <p className="mb-4">
            Parier pendant le déroulement du match. Les cotes évoluent en temps réel selon les événements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h4 className="font-bold mb-2">Opportunités</h4>
              <ul className="text-sm space-y-1">
                <li>• Analyse en direct du match</li>
                <li>• Cotes parfois surévaluées</li>
                <li>• Hedging possible</li>
                <li>• Cashout disponible</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h4 className="font-bold mb-2">Précautions</h4>
              <ul className="text-sm space-y-1">
                <li>• Décisions impulsives</li>
                <li>• Délai de validation</li>
                <li>• Cotes qui bougent vite</li>
                <li>• Addiction potentielle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tableau récapitulatif */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tableau comparatif
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-center">Difficulté</th>
                <th className="px-4 py-3 text-center">Potentiel de gain</th>
                <th className="px-4 py-3 text-center">Recommandé pour</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Simple</td>
                <td className="px-4 py-3 text-center">⭐</td>
                <td className="px-4 py-3 text-center">⭐⭐</td>
                <td className="px-4 py-3">Débutants, Value betting</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Combiné</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="px-4 py-3">Fun, petites mises</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Système</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                <td className="px-4 py-3">Parieurs expérimentés</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Handicap</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                <td className="px-4 py-3">Matchs déséquilibrés</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Live</td>
                <td className="px-4 py-3 text-center">⭐⭐</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                <td className="px-4 py-3">Tous profils</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conseils finaux */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            💡 Conseils pour choisir le bon type de pari
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Débutants :</strong> Commencez par les paris simples pour comprendre les mécaniques
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>ROI optimal :</strong> Les paris simples sur des value bets restent les plus rentables
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Fun bet :</strong> Les combinés avec de petites mises pour le plaisir
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Live :</strong> Excellent pour profiter d'opportunités en direct
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Système :</strong> Pour les parieurs expérimentés cherchant un compromis
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/comprendre-cotes"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Comprendre les Cotes
          </Link>
          <Link 
            href="/guide-paris-sportifs/gestion-bankroll"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Gestion de Bankroll
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}