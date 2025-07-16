'use client'

import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function CommentCaMarcheMartingalePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Comment fonctionnent nos Martingales ?
              </h1>
              <Link 
                href="/paris-sportifs/martingale" 
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour
              </Link>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-red-600">🎯 Qu'est-ce qu'une Martingale ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>Martingale Rounders</strong> est une stratégie de récupération où l'objectif est 
              d'atteindre un profit net fixé à l'avance. Contrairement à la montante qui vise un capital total, 
              la martingale se concentre sur le profit pur, en augmentant les mises après chaque échec 
              pour récupérer les pertes et sécuriser le gain visé.
            </p>
            <div className="bg-red-50 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Stratégie à haut risque :</strong> La martingale nécessite une discipline stricte 
                et une bankroll suffisante. Elle est réservée aux parieurs expérimentés comprenant parfaitement 
                les risques encourus.
              </p>
            </div>
          </div>

          {/* Principe de fonctionnement */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-amber-600">⚙️ Le mécanisme détaillé</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold mb-2">1. Objectif de profit net</h3>
                <p className="text-gray-700">
                  Nous fixons un objectif de profit net (exemple : +50€). Peu importe le nombre de paliers 
                  nécessaires, l'objectif reste constant. C'est le profit final qui compte, pas le capital total.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold mb-2">2. Calcul des mises</h3>
                <p className="text-gray-700">
                  Chaque mise est calculée pour récupérer toutes les pertes précédentes ET atteindre 
                  l'objectif de profit. La mise augmente donc après chaque échec selon une formule précise.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded text-sm">
                  <strong>Formule :</strong> Mise = (Pertes cumulées + Objectif profit) / (Cote - 1)
                </div>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold mb-2">3. Récupération progressive</h3>
                <p className="text-gray-700">
                  Un seul pari gagnant suffit pour récupérer toutes les pertes et atteindre l'objectif. 
                  C'est la force et le danger de la martingale : tout se joue sur la capacité à tenir jusqu'à la victoire.
                </p>
              </div>
            </div>
          </div>

          {/* Exemple pratique */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">📊 Exemple concret d'une martingale</h2>
            <p className="text-gray-600 mb-4">Objectif : <strong>+50€ de profit net</strong></p>
            
            <div className="space-y-3">
              {/* Palier 1 */}
              <div className="bg-red-50 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Palier 1</h4>
                  <span className="text-red-600 font-medium">❌ Perdu</span>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Mise : 30€ @ 1.70</p>
                  <p>• Gain potentiel : 51€ (profit net : +21€)</p>
                  <p>• Résultat : Perte de 30€</p>
                  <p className="font-medium text-red-600">Total investi : 30€ | Pertes : -30€</p>
                </div>
              </div>

              {/* Palier 2 */}
              <div className="bg-red-50 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Palier 2</h4>
                  <span className="text-red-600 font-medium">❌ Perdu</span>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Mise : 55€ @ 1.80 (récupérer 30€ + objectif 50€)</p>
                  <p>• Gain potentiel : 99€ (profit net : +44€)</p>
                  <p>• Résultat : Perte de 55€</p>
                  <p className="font-medium text-red-600">Total investi : 85€ | Pertes : -85€</p>
                </div>
              </div>

              {/* Palier 3 */}
              <div className="bg-green-50 p-4 rounded border-2 border-green-500">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Palier 3</h4>
                  <span className="text-green-600 font-medium">✅ Gagné !</span>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Mise : 90€ @ 1.90 (récupérer 85€ + objectif 50€)</p>
                  <p>• Gain réel : 171€</p>
                  <p>• Total investi : 175€</p>
                  <p className="font-bold text-green-600 text-base">
                    Profit net final : 171€ - 175€ = +51€ ✓
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-amber-50 rounded">
              <p className="text-sm text-amber-800">
                <strong>💡 À noter :</strong> Les mises augmentent rapidement. Une série de pertes peut 
                nécessiter des mises très élevées, d'où l'importance d'une bankroll conséquente.
              </p>
            </div>
          </div>

          {/* Comment suivre */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">🔔 Comment suivre nos martingales ?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Notifications Twitter/X</h4>
                  <p className="text-gray-600 text-sm">
                    Suivez <a href="https://x.com/rounders_pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">@rounders_pro</a> pour 
                    être alerté dès qu'une martingale démarre ou qu'un nouveau palier est publié.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Suivi en temps réel</h4>
                  <p className="text-gray-600 text-sm">
                    La martingale active affiche le total investi, les pertes cumulées et le profit net actuel. 
                    Chaque palier montre la mise calculée pour atteindre l'objectif.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Gestion transparente</h4>
                  <p className="text-gray-600 text-sm">
                    En cas de réussite, la martingale est archivée avec le profit net final. 
                    Si nous décidons d'abandonner (limites atteintes), la perte est comptabilisée.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risques et limites */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-red-600">⚠️ Risques et limites importantes</h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-semibold text-red-800 mb-2">Progression exponentielle des mises</h4>
                <p className="text-sm text-gray-700">
                  Après plusieurs échecs, les mises peuvent atteindre des montants très élevés. 
                  Une martingale qui démarre à 10€ peut nécessiter des mises de plusieurs centaines 
                  d'euros après 4-5 échecs.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded">
                <h4 className="font-semibold text-orange-800 mb-2">Limites des bookmakers</h4>
                <p className="text-sm text-gray-700">
                  Les bookmakers imposent des limites de mise maximum. Une martingale peut devenir 
                  impossible à poursuivre si la mise nécessaire dépasse ces limites.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded">
                <h4 className="font-semibold text-amber-800 mb-2">Bankroll nécessaire</h4>
                <p className="text-sm text-gray-700">
                  Une bankroll substantielle est indispensable. Nous recommandons d'avoir au minimum 
                  20 fois la mise initiale en réserve, idéalement plus.
                </p>
              </div>
            </div>
          </div>

          {/* Nos règles */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">📋 Nos règles strictes</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span><strong>Limite de paliers :</strong> Nous nous fixons un maximum de 5-6 paliers avant abandon.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span><strong>Cotes minimum :</strong> Nous privilégions des cotes entre 1.60 et 2.00 pour limiter la progression.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span><strong>Capital maximum :</strong> Jamais plus de 5% de notre bankroll totale sur une martingale.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span><strong>Abandon possible :</strong> Nous savons quand arrêter les frais si la situation devient trop risquée.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span><strong>Une seule active :</strong> Jamais plusieurs martingales en simultané.</span>
              </li>
            </ul>
          </div>

          {/* Conseils */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">💡 Conseils pour bien suivre</h2>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <p className="text-sm text-gray-700 font-medium">
                ⚠️ Les martingales ne sont PAS recommandées pour les débutants ou les petites bankrolls. 
                C'est une stratégie à très haut risque qui peut entraîner des pertes importantes.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Capital séparé :</strong> Utilisez uniquement de l'argent que vous pouvez vous permettre de perdre entièrement.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Suivi strict :</strong> Ne déviez jamais des mises calculées, même si la tentation est forte.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Émotions maîtrisées :</strong> La pression monte vite, gardez la tête froide.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Limites respectées :</strong> Si nous abandonnons, c'est pour de bonnes raisons. Acceptez-le.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Comprenez-vous les risques ?</h3>
            <p className="text-gray-600 mb-6">
              Les martingales sont notre stratégie la plus risquée. Assurez-vous de bien comprendre 
              le mécanisme et les dangers avant de nous suivre sur ce type de paris.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/paris-sportifs/martingale"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Voir la Martingale Active
              </Link>
              <a 
                href="https://x.com/rounders_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Suivre sur 𝕏
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}