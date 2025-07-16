'use client'

import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function CommentCaMarcheClassiquesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Comment fonctionnent nos Pronostics Classiques ?
              </h1>
              <Link 
                href="/paris-sportifs/classiques" 
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
            <h2 className="text-xl font-semibold mb-4 text-blue-600">📊 Notre philosophie</h2>
            <p className="text-gray-700 leading-relaxed">
              Les <strong>Pronostics Classiques Rounders</strong> représentent notre sélection 
              de paris sportifs minutieusement analysés. Chaque pronostic est publié avec transparence 
              et suivi jusqu'à son résultat final. Notre approche privilégie la qualité à la quantité, 
              avec une sélection rigoureuse des meilleures opportunités.
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded">
              <p className="text-sm text-blue-800">
                <strong>⚡ Règle d'or :</strong> Nous ne sélectionnons jamais de cotes inférieures à 1.50, 
                privilégiant ainsi un équilibre optimal entre sécurité et rentabilité.
              </p>
            </div>
          </div>

          {/* Types de pronos */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">🎯 Nos types de sélections</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold mb-2">Pronostic Simple</h3>
                <p className="text-gray-700">
                  Une sélection unique sur un match spécifique. Idéal pour les paris sûrs avec 
                  un excellent rapport risque/rendement.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded text-sm">
                  <strong>Exemple récent :</strong> Manchester City gagne contre Burnley @ 1.55<br/>
                  <span className="text-green-600">✓ Résultat : Gagné</span>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Pronostic Combiné</h3>
                <p className="text-gray-700">
                  Association de plusieurs sélections pour maximiser les gains. Nous limitons 
                  généralement nos combinés à 3-4 sélections pour maintenir un taux de réussite élevé.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded text-sm">
                  <strong>Exemple récent :</strong><br/>
                  • Liverpool gagne @ 1.65<br/>
                  • Plus de 2.5 buts PSG-Lyon @ 1.70<br/>
                  • Bayern Munich gagne @ 1.52<br/>
                  Cote totale : 4.26 - <span className="text-green-600">✓ Gagné</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comment suivre */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">⚙️ Comment suivre nos pronostics ?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Abonnez-vous à notre Twitter/X</h4>
                  <p className="text-gray-600 text-sm">
                    Pour être notifié dès qu'un nouveau pronostic est publié, abonnez-vous à 
                    <a href="https://x.com/rounders_pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium"> @rounders_pro</a>. 
                    Nous publions régulièrement nos sélections et vous recevrez une notification instantanée.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Consultez nos sélections</h4>
                  <p className="text-gray-600 text-sm">
                    Chaque pronostic inclut toutes les informations nécessaires : le sport, 
                    le match, le type de pari et la cote. Tous nos pronos sont accessibles 
                    sur cette page.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Placez vos paris chez votre bookmaker</h4>
                  <p className="text-gray-600 text-sm">
                    Nous plaçons nos paris sur Stake et sur les principaux bookmakers français. Les cotes peuvent 
                    légèrement varier selon votre opérateur.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold">Suivez les résultats en temps réel</h4>
                  <p className="text-gray-600 text-sm">
                    Tous nos pronostics sont mis à jour avec leur résultat final. 
                    L'historique complet reste consultable pour analyser nos performances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comprendre les statistiques */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-amber-600">📈 Comprendre nos statistiques</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded">
                <h4 className="font-semibold text-amber-800 mb-2">Taux de réussite</h4>
                <p className="text-sm text-gray-700">
                  Pourcentage de nos pronostics gagnants. Nous visons constamment 
                  un taux supérieur à 60% sur le long terme.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">ROI (Return on Investment)</h4>
                <p className="text-sm text-gray-700">
                  Mesure la rentabilité globale. Un ROI de 15% signifie 15€ de profit 
                  pour chaque 100€ misés.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-2">Profit total</h4>
                <p className="text-sm text-gray-700">
                  Cumul de tous les gains et pertes. Le graphique d'évolution 
                  vous montre la progression dans le temps.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-semibold text-purple-800 mb-2">Série en cours</h4>
                <p className="text-sm text-gray-700">
                  Indique notre dynamique actuelle. Une information utile pour 
                  gérer votre bankroll selon les périodes.
                </p>
              </div>
            </div>
          </div>

          {/* Gestion de bankroll */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">💡 Nos recommandations</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Gestion de capital :</strong> Nous conseillons de ne jamais miser plus de 5% de votre bankroll sur un seul pronostic.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Régularité :</strong> Suivez nos pronostics sur la durée pour lisser les variations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Discipline :</strong> Respectez les mises conseillées et évitez de "chasser" les pertes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Analyse :</strong> Utilisez notre historique pour comprendre nos points forts (sports, types de paris).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Patience :</strong> Les paris sportifs sont un marathon, pas un sprint. La régularité paie sur le long terme.</span>
              </li>
            </ul>
          </div>

          {/* Transparence */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-red-600">🔍 Notre engagement transparence</h2>
            <p className="text-gray-700 mb-4">
              Tous nos pronostics sont publiés AVANT le début des matchs et ne sont jamais modifiés. 
              Les résultats sont mis à jour honnêtement, qu'ils soient gagnants ou perdants.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">
                <strong>Important :</strong> Les paris sportifs comportent des risques. Ne misez jamais 
                plus que ce que vous pouvez vous permettre de perdre. Nos pronostics sont des suggestions 
                basées sur notre analyse, mais le sport reste imprévisible.
              </p>
            </div>
          </div>

          {/* Twitter/X Call-to-Action */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">🐦 Ne manquez aucun pronostic !</h2>
                <p className="text-gray-200">
                  Abonnez-vous à notre compte Twitter/X afin de pouvoir recevoir une notification 
                  instantanée à chaque nouveau pronostic publié.
                </p>
              </div>
              <a 
                href="https://x.com/rounders_pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center"
              >
                Suivre @rounders_pro
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Prêt à nous suivre ?</h3>
            <p className="text-gray-600 mb-6">
              Rejoignez des centaines de parieurs qui suivent nos sélections 
              pour optimiser leurs paris sportifs.
            </p>
            <Link 
              href="/paris-sportifs/classiques"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir nos Pronostics
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}