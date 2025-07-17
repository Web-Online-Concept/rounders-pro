// app/guide-paris-sportifs/comprendre-cotes/page.js
import Link from 'next/link';

export default function ComprendreCotesPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Comprendre les Cotes</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📊 Comprendre les Cotes
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les cotes sont le cœur des paris sportifs. Elles déterminent vos gains potentiels et reflètent 
          les probabilités estimées par les bookmakers. Maîtriser leur lecture et leur calcul est 
          essentiel pour devenir un parieur profitable.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Qu'est-ce qu'une cote ?
        </h2>
        <p className="text-gray-700 mb-6">
          Une cote est un multiplicateur qui indique combien vous pouvez gagner par rapport à votre mise. 
          Elle représente aussi inversement la probabilité estimée qu'un événement se produise. 
          Plus la cote est élevée, moins l'événement est probable (selon le bookmaker).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les différents formats de cotes
        </h2>
        
        {/* Cotes décimales */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-green-700 mb-3">1. Cotes Décimales (Européennes)</h3>
          <p className="text-gray-700 mb-4">
            Le format le plus utilisé en Europe et le plus simple à comprendre.
          </p>
          <div className="bg-gray-50 rounded p-4 mb-4">
            <p className="font-mono text-lg mb-2">Gain = Mise × Cote</p>
            <p className="text-gray-600">Exemple : Mise de 10€ à une cote de 2.50</p>
            <p className="text-green-600 font-bold">Gain total = 10€ × 2.50 = 25€</p>
            <p className="text-gray-600">Bénéfice net = 25€ - 10€ = 15€</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-3 bg-blue-50 rounded">
              <div className="font-bold text-blue-700">1.50</div>
              <div className="text-sm text-gray-600">Favori</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded">
              <div className="font-bold text-green-700">3.00</div>
              <div className="text-sm text-gray-600">Équilibré</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded">
              <div className="font-bold text-orange-700">5.00</div>
              <div className="text-sm text-gray-600">Outsider</div>
            </div>
          </div>
        </div>

        {/* Cotes fractionnelles */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">2. Cotes Fractionnelles (Britanniques)</h3>
          <p className="text-gray-700 mb-4">
            Populaires au Royaume-Uni, elles indiquent le profit par rapport à la mise.
          </p>
          <div className="bg-gray-50 rounded p-4 mb-4">
            <p className="font-mono text-lg mb-2">Format : Profit/Mise</p>
            <p className="text-gray-600">Exemple : 5/2 signifie un profit de 5€ pour 2€ misés</p>
            <p className="text-blue-600 font-bold">Gain total = Mise + (Mise × 5/2)</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Conversions courantes :</h4>
              <ul className="space-y-1 text-sm">
                <li>1/2 = 1.50 (décimale)</li>
                <li>2/1 = 3.00 (décimale)</li>
                <li>5/1 = 6.00 (décimale)</li>
                <li>10/1 = 11.00 (décimale)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Formule de conversion :</h4>
              <p className="text-sm bg-blue-50 p-2 rounded font-mono">
                Décimale = (Numérateur/Dénominateur) + 1
              </p>
            </div>
          </div>
        </div>

        {/* Cotes américaines */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">3. Cotes Américaines (Moneyline)</h3>
          <p className="text-gray-700 mb-4">
            Utilisées aux États-Unis, avec des valeurs positives (+) ou négatives (-).
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded p-4">
              <h4 className="font-bold text-red-700 mb-2">Cotes négatives (-)</h4>
              <p className="text-sm text-gray-700 mb-2">Indiquent combien miser pour gagner 100$</p>
              <p className="font-mono">-200 = Miser 200$ pour gagner 100$</p>
              <p className="text-sm mt-2">Conversion : Décimale = 1 + (100/|cote|)</p>
            </div>
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-bold text-green-700 mb-2">Cotes positives (+)</h4>
              <p className="text-sm text-gray-700 mb-2">Indiquent le gain pour 100$ misés</p>
              <p className="font-mono">+150 = Gagner 150$ pour 100$ misés</p>
              <p className="text-sm mt-2">Conversion : Décimale = 1 + (cote/100)</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Relation entre cotes et probabilités
        </h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-blue-900 mb-3">Formule fondamentale :</h3>
          <p className="font-mono text-lg mb-4">Probabilité implicite = 1 / Cote décimale × 100%</p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white rounded p-3">
              <span>Cote 1.50</span>
              <span className="text-blue-600 font-bold">→ 66.67% de probabilité</span>
            </div>
            <div className="flex justify-between items-center bg-white rounded p-3">
              <span>Cote 2.00</span>
              <span className="text-green-600 font-bold">→ 50% de probabilité</span>
            </div>
            <div className="flex justify-between items-center bg-white rounded p-3">
              <span>Cote 4.00</span>
              <span className="text-orange-600 font-bold">→ 25% de probabilité</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          La marge du bookmaker
        </h2>
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-6">
          <p className="text-gray-700 mb-4">
            Les bookmakers incluent une marge dans leurs cotes pour garantir leur profit. 
            C'est pourquoi la somme des probabilités implicites dépasse toujours 100%.
          </p>
          
          <h3 className="font-bold mb-3">Exemple concret :</h3>
          <div className="bg-white rounded p-4">
            <p className="font-semibold mb-2">Match de tennis :</p>
            <ul className="space-y-2">
              <li>Joueur A : Cote 1.80 → 55.56% de probabilité</li>
              <li>Joueur B : Cote 2.10 → 47.62% de probabilité</li>
              <li className="font-bold text-red-600">Total : 103.18% (marge de 3.18%)</li>
            </ul>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            💡 Plus la marge est faible, meilleures sont vos chances de profit à long terme.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Calculateur de gains
        </h2>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Tableau de calcul rapide</h3>
          <div className="bg-white text-gray-900 rounded p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Mise</th>
                  <th className="text-center pb-2">Cote 1.50</th>
                  <th className="text-center pb-2">Cote 2.00</th>
                  <th className="text-center pb-2">Cote 3.00</th>
                  <th className="text-center pb-2">Cote 5.00</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">10€</td>
                  <td className="text-center">15€</td>
                  <td className="text-center">20€</td>
                  <td className="text-center">30€</td>
                  <td className="text-center">50€</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">50€</td>
                  <td className="text-center">75€</td>
                  <td className="text-center">100€</td>
                  <td className="text-center">150€</td>
                  <td className="text-center">250€</td>
                </tr>
                <tr>
                  <td className="py-2">100€</td>
                  <td className="text-center">150€</td>
                  <td className="text-center">200€</td>
                  <td className="text-center">300€</td>
                  <td className="text-center">500€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Points clés à retenir
        </h2>
        <div className="bg-gray-100 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                Les cotes décimales sont les plus simples : multipliez votre mise par la cote
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                Une cote faible = événement probable mais gain limité
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                La marge du bookmaker réduit vos chances de profit
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                Comparez toujours les cotes entre différents bookmakers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                Apprenez à convertir rapidement entre les formats
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/introduction"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Introduction
          </Link>
          <Link 
            href="/guide-paris-sportifs/types-paris"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Types de Paris
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}