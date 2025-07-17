// app/guide-paris-sportifs/gestion-bankroll/page.js
import Link from 'next/link';

export default function GestionBankrollPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Gestion de Bankroll</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💰 Gestion de Bankroll
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          La gestion de bankroll est LA compétence qui sépare les parieurs amateurs des professionnels. 
          C'est votre bouclier contre la ruine et votre passeport vers la rentabilité long terme. 
          Sans elle, même les meilleurs pronostiqueurs finissent par tout perdre.
        </p>
      </div>

      {/* Avertissement */}
      <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-red-800 mb-2">⚠️ Règle d'Or Absolue</h2>
        <p className="text-red-700 font-semibold">
          Ne pariez JAMAIS avec de l'argent dont vous avez besoin pour vivre. 
          Votre bankroll doit être de l'argent que vous pouvez vous permettre de perdre intégralement.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Qu'est-ce qu'une bankroll ?
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Votre bankroll est le capital total dédié exclusivement aux paris sportifs. 
            C'est votre "fonds de roulement" qui doit être :
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Séparé</strong> de vos finances personnelles</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Défini</strong> à l'avance (montant fixe)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Géré</strong> selon des règles strictes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Suivi</strong> précisément (gains/pertes)</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les unités de mise (Units)
        </h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Pensez en unités plutôt qu'en euros. Une unité = un pourcentage fixe de votre bankroll.
          </p>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Exemple avec 1000€ de bankroll :</h3>
            <ul className="space-y-2">
              <li>• 1 unité = 1% = 10€</li>
              <li>• 2 unités = 2% = 20€</li>
              <li>• 5 unités = 5% = 50€</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded p-4">
            <p className="text-blue-800 font-semibold">
              💡 Avantage : Les unités s'adaptent automatiquement à l'évolution de votre bankroll
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Stratégies de mise (Staking Plans)
        </h2>
        
        {/* Flat Betting */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-green-700 mb-3">1. Flat Betting (Mise Fixe)</h3>
          <p className="text-gray-700 mb-4">
            Miser toujours le même montant, quelle que soit la confiance ou la cote.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded p-4">
              <p className="font-semibold text-green-800 mb-2">Règle classique :</p>
              <p>1-2% de la bankroll par pari</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <p className="font-semibold text-gray-800 mb-2">Pour qui ?</p>
              <p>Débutants et parieurs disciplinés</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <p className="text-sm"><strong>Exemple :</strong> Bankroll 1000€ → Mise fixe 20€ (2%) sur chaque pari</p>
          </div>
        </div>

        {/* Mise Proportionnelle */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">2. Mise Proportionnelle (% de Bankroll)</h3>
          <p className="text-gray-700 mb-4">
            Adapter la mise selon votre niveau de confiance (1-5 unités).
          </p>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Confiance</th>
                  <th className="text-center pb-2">Unités</th>
                  <th className="text-right pb-2">% Bankroll</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">⭐ Faible</td>
                  <td className="text-center">1</td>
                  <td className="text-right">1%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">⭐⭐ Normale</td>
                  <td className="text-center">2</td>
                  <td className="text-right">2%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">⭐⭐⭐ Bonne</td>
                  <td className="text-center">3</td>
                  <td className="text-right">3%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">⭐⭐⭐⭐ Forte</td>
                  <td className="text-center">4</td>
                  <td className="text-right">4%</td>
                </tr>
                <tr>
                  <td className="py-2">⭐⭐⭐⭐⭐ Maximum</td>
                  <td className="text-center">5</td>
                  <td className="text-right">5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <strong>⚠️ Attention :</strong> Ne jamais dépasser 5% sur un seul pari, même très confiant !
            </p>
          </div>
        </div>

        {/* Kelly Criterion */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">3. Critère de Kelly</h3>
          <p className="text-gray-700 mb-4">
            Formule mathématique pour optimiser la taille des mises selon la value perçue.
          </p>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="font-mono text-lg mb-2">f = (p × c - 1) / (c - 1)</p>
            <ul className="text-sm space-y-1">
              <li>• f = fraction de bankroll à miser</li>
              <li>• p = probabilité estimée de gagner</li>
              <li>• c = cote décimale</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded p-4 mb-4">
            <p className="font-semibold mb-2">Exemple :</p>
            <p>Cote 2.00, probabilité estimée 55%</p>
            <p>f = (0.55 × 2 - 1) / (2 - 1) = 0.10 = 10%</p>
            <p className="text-purple-700 font-bold">→ Miser 10% de la bankroll</p>
          </div>

          <div className="bg-red-50 rounded p-4">
            <p className="text-red-700">
              <strong>🚨 Danger :</strong> Kelly pur est trop agressif. Utilisez plutôt "Fractional Kelly" (25-50% du montant calculé).
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Gestion du risque
        </h2>
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Les règles de survie</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h4 className="font-bold mb-2">Limites journalières</h4>
              <ul className="text-sm space-y-1">
                <li>• Max 3-5 paris/jour</li>
                <li>• Stop loss : -10 unités</li>
                <li>• Stop win : +15 unités</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h4 className="font-bold mb-2">Limites mensuelles</h4>
              <ul className="text-sm space-y-1">
                <li>• Perte max : 30% bankroll</li>
                <li>• Réévaluation obligatoire</li>
                <li>• Pause si nécessaire</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Évolution de la bankroll
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="font-bold mb-4">Scénarios types sur 100 paris</h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded p-4">
              <h4 className="font-semibold text-green-800">✅ Bon parieur (55% de réussite)</h4>
              <p>Mise fixe 2% → Bankroll +10-20%</p>
              <p className="text-sm text-green-700">ROI positif stable</p>
            </div>
            
            <div className="bg-yellow-50 rounded p-4">
              <h4 className="font-semibold text-yellow-800">⚡ Parieur moyen (52% de réussite)</h4>
              <p>Mise fixe 2% → Bankroll -5% à +5%</p>
              <p className="text-sm text-yellow-700">Break-even avec variance</p>
            </div>
            
            <div className="bg-red-50 rounded p-4">
              <h4 className="font-semibold text-red-800">❌ Mauvais parieur (48% de réussite)</h4>
              <p>Mise fixe 2% → Bankroll -15-25%</p>
              <p className="text-sm text-red-700">Perte progressive garantie</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Outils de suivi
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="font-bold mb-4">Tracker votre performance</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Informations à noter :</h4>
              <ul className="text-sm space-y-1">
                <li>• Date et heure du pari</li>
                <li>• Sport et compétition</li>
                <li>• Type de pari et sélection</li>
                <li>• Cote et mise</li>
                <li>• Résultat (W/L)</li>
                <li>• Profit/Perte</li>
                <li>• Bankroll mise à jour</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">KPIs à suivre :</h4>
              <ul className="text-sm space-y-1">
                <li>• ROI (Return On Investment)</li>
                <li>• Yield (profit/volume misé)</li>
                <li>• Taux de réussite</li>
                <li>• Cote moyenne</li>
                <li>• Plus grosse série (W/L)</li>
                <li>• Écart-type</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Erreurs fatales à éviter
        </h2>
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Chasing losses :</strong> Augmenter les mises après une perte pour "se refaire"
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>All-in :</strong> Miser toute sa bankroll sur un "pari sûr" (ça n'existe pas)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Emprunter :</strong> Ne JAMAIS emprunter pour parier
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Mélanger les budgets :</strong> Puiser dans l'argent du loyer/courses
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-xl">❌</span>
              <div>
                <strong>Ignorer la variance :</strong> 10 paris perdants d'affilée, c'est possible
              </div>
            </li>
          </ul>
        </div>

        {/* Plan d'action */}
        <div className="bg-green-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            🎯 Votre plan d'action
          </h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Définir votre bankroll</strong>
                <p className="text-green-100">Montant que vous pouvez perdre sans impact sur votre vie</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Choisir votre stratégie</strong>
                <p className="text-green-100">Flat betting 1-2% recommandé pour débuter</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Fixer vos limites</strong>
                <p className="text-green-100">Stop loss journalier et mensuel</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Tracker religieusement</strong>
                <p className="text-green-100">Chaque pari doit être enregistré</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <strong>Respecter le plan</strong>
                <p className="text-green-100">La discipline bat le talent sur le long terme</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/types-paris"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Types de Paris
          </Link>
          <Link 
            href="/guide-paris-sportifs/analyse-matchs"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Analyse des Matchs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}