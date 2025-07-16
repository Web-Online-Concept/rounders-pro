'use client'

import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function CommentCaMarcheMontantePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Comment fonctionnent nos Montantes ?
              </h1>
              <Link 
                href="/paris-sportifs/montante" 
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
            <h2 className="text-xl font-semibold mb-4 text-green-600">📈 Qu'est-ce qu'une Montante ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>Montante Rounders</strong> est une stratégie de paris progressifs où nous partons 
              d'un capital initial pour atteindre un objectif défini. Contrairement aux paris classiques, 
              chaque gain est réinvesti dans le palier suivant, créant ainsi un effet boule de neige.
            </p>
            <div className="bg-green-50 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Exemple concret :</strong> Avec 10€ de départ et un objectif de 100€, 
                nous construisons une progression en plusieurs paliers jusqu'à atteindre l'objectif 
                ou échouer sur un palier.
              </p>
            </div>
          </div>

          {/* Principe de fonctionnement */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">⚙️ Le principe en détail</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">1. Capital initial</h3>
                <p className="text-gray-700">
                  Chaque montante démarre avec une mise de base définie (généralement entre 10€ et 50€). 
                  C'est le seul montant réellement risqué dans l'opération.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold mb-2">2. Progression par paliers</h3>
                <p className="text-gray-700">
                  À chaque palier réussi, la totalité des gains est remise en jeu sur le palier suivant. 
                  La montante se compose généralement de 3 à 5 paliers selon l'objectif.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold mb-2">3. Objectif final</h3>
                <p className="text-gray-700">
                  L'objectif est fixé dès le départ (exemple : transformer 10€ en 100€). 
                  Une fois atteint, la montante est validée et les gains sont sécurisés.
                </p>
              </div>
            </div>
          </div>

          {/* Exemple visuel */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">📊 Exemple d'une montante réussie</h2>
            <div className="bg-gray-50 p-4 rounded">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded">
                  <span className="font-semibold">Mise initiale</span>
                  <span className="text-blue-600 font-bold">10€</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-center">
                    <div className="text-2xl">⬇️</div>
                    <p className="text-xs text-gray-500">Palier 1 @ 2.00</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>Après palier 1</span>
                  <span className="text-green-600 font-bold">20€</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-center">
                    <div className="text-2xl">⬇️</div>
                    <p className="text-xs text-gray-500">Palier 2 @ 1.80</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>Après palier 2</span>
                  <span className="text-green-600 font-bold">36€</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-center">
                    <div className="text-2xl">⬇️</div>
                    <p className="text-xs text-gray-500">Palier 3 @ 1.70</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>Après palier 3</span>
                  <span className="text-green-600 font-bold">61.20€</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 text-center">
                    <div className="text-2xl">⬇️</div>
                    <p className="text-xs text-gray-500">Palier 4 @ 1.65</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-green-100 rounded border-2 border-green-500">
                  <span className="font-semibold">Objectif atteint !</span>
                  <span className="text-green-600 font-bold text-lg">100.98€ ✓</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  <strong>Bénéfice net :</strong> 90.98€ pour 10€ investis
                </p>
              </div>
            </div>
          </div>

          {/* Comment suivre */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-amber-600">🔔 Comment suivre nos montantes ?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-amber-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Notification sur Twitter/X</h4>
                  <p className="text-gray-600 text-sm">
                    Abonnez-vous à <a href="https://x.com/rounders_pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">@rounders_pro</a> pour 
                    être alerté dès qu'une nouvelle montante démarre ou qu'un palier est publié.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Suivez la progression</h4>
                  <p className="text-gray-600 text-sm">
                    La montante active s'affiche avec sa progression en temps réel, le capital actuel 
                    et l'objectif à atteindre. Chaque palier indique les matchs sélectionnés.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-amber-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Résultats transparents</h4>
                  <p className="text-gray-600 text-sm">
                    Chaque palier est validé publiquement. En cas d'échec, la montante est archivée. 
                    En cas de succès, elle rejoint notre historique de réussites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Avantages et risques */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-red-600">⚖️ Avantages et points d'attention</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-2">✅ Les avantages</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Gains potentiels importants avec mise limitée</li>
                  <li>• Stratégie claire et définie à l'avance</li>
                  <li>• Montée en capital progressive</li>
                  <li>• Adrénaline de la progression</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Points d'attention</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Un seul échec fait perdre toute la montante</li>
                  <li>• Nécessite de la discipline pour ne pas craquer</li>
                  <li>• Plus risqué que les paris classiques</li>
                  <li>• Réservé à une petite partie du capital</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">📈 Nos performances</h2>
            <p className="text-gray-700 mb-4">
              Notre historique de montantes est consultable en permanence. Vous y trouverez :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded">
                <h4 className="font-semibold text-indigo-800 mb-2">Taux de réussite</h4>
                <p className="text-sm text-gray-700">
                  Pourcentage de montantes menées à leur objectif. Un bon taux se situe 
                  au-dessus de 40% compte tenu des multiplicateurs visés.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-semibold text-purple-800 mb-2">ROI moyen</h4>
                <p className="text-sm text-gray-700">
                  Retour sur investissement calculé sur l'ensemble des montantes. 
                  Inclut les réussites et les échecs.
                </p>
              </div>
            </div>
          </div>

          {/* Conseils */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">💡 Nos conseils pour bien suivre</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Capital dédié :</strong> Ne consacrez jamais plus de 10% de votre bankroll totale aux montantes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Patience :</strong> Attendez nos sélections officielles, ne tentez pas de devancer les paliers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Discipline :</strong> Respectez les montants exacts de chaque palier.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Acceptation :</strong> Les échecs font partie du jeu, l'important est le bilan global.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Diversification :</strong> Les montantes complètent nos pronos classiques, ne misez pas tout dessus.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Prêt pour l'aventure ?</h3>
            <p className="text-gray-600 mb-6">
              Les montantes ajoutent du piment à vos paris sportifs. 
              Suivez nos progressions et partagez l'excitation de chaque palier !
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/paris-sportifs/montante"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Voir la Montante Active
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