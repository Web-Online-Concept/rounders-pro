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
                Comment fonctionnent les Pronostics Classiques ?
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
            <h2 className="text-xl font-semibold mb-4 text-blue-600">📊 Vue d'ensemble</h2>
            <p className="text-gray-700 leading-relaxed">
              Les <strong>Pronostics Classiques</strong> sont notre système de paris le plus simple et direct. 
              Chaque pronostic est indépendant des autres, sans progression ni récupération. 
              C'est idéal pour les parieurs qui préfèrent une approche traditionnelle avec une gestion 
              de bankroll maîtrisée.
            </p>
          </div>

          {/* Types de pronos */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">🎯 Types de pronostics</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold mb-2">Pronostic Simple</h3>
                <p className="text-gray-700">
                  Un seul match, un seul pari. La cote du match détermine directement vos gains potentiels.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded text-sm">
                  <strong>Exemple :</strong> PSG gagne contre Lyon @ 1.85<br/>
                  Mise : 10€ → Gain potentiel : 18.50€
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Pronostic Combiné</h3>
                <p className="text-gray-700">
                  Plusieurs matchs combinés. Les cotes se multiplient pour un gain potentiel plus élevé, 
                  mais tous les matchs doivent être gagnants.
                </p>
                <div className="mt-2 bg-gray-50 p-3 rounded text-sm">
                  <strong>Exemple :</strong><br/>
                  • PSG gagne @ 1.85<br/>
                  • Real Madrid gagne @ 1.60<br/>
                  • Plus de 2.5 buts @ 1.70<br/>
                  Cote totale : 1.85 × 1.60 × 1.70 = <strong>5.03</strong><br/>
                  Mise : 10€ → Gain potentiel : 50.30€
                </div>
              </div>
            </div>
          </div>

          {/* Fonctionnement */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">⚙️ Comment ça fonctionne ?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Création du pronostic</h4>
                  <p className="text-gray-600 text-sm">
                    Choisissez vos matchs, vos paris, définissez votre mise et sélectionnez votre bookmaker.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Suivi en temps réel</h4>
                  <p className="text-gray-600 text-sm">
                    Le pronostic reste "En attente" jusqu'à la fin des matchs. 
                    Vous pouvez suivre tous vos pronos actifs sur la page.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Validation du résultat</h4>
                  <p className="text-gray-600 text-sm">
                    Une fois les matchs terminés, validez votre prono comme "Gagné" ou "Perdu". 
                    Les statistiques se mettent à jour automatiquement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-amber-600">📈 Statistiques et indicateurs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded">
                <h4 className="font-semibold text-amber-800 mb-2">Taux de réussite</h4>
                <p className="text-sm text-gray-700">
                  Pourcentage de pronos gagnés sur le total des pronos validés. 
                  Un bon taux se situe au-dessus de 55%.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">ROI (Return on Investment)</h4>
                <p className="text-sm text-gray-700">
                  Rentabilité de vos paris. Un ROI positif signifie que vous êtes bénéficiaire.
                  ROI = (Gains - Mises) / Mises × 100
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-2">Profit total</h4>
                <p className="text-sm text-gray-700">
                  La somme de tous vos gains moins toutes vos pertes. 
                  C'est votre bénéfice net réel.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-semibold text-purple-800 mb-2">Série en cours</h4>
                <p className="text-sm text-gray-700">
                  Nombre de victoires ou défaites consécutives. 
                  Permet d'identifier les bonnes et mauvaises passes.
                </p>
              </div>
            </div>
          </div>

          {/* Conseils */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">💡 Conseils pour réussir</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Gestion de bankroll :</strong> Ne misez jamais plus de 5% de votre capital sur un seul prono.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Spécialisation :</strong> Concentrez-vous sur les sports et ligues que vous connaissez bien.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Value betting :</strong> Cherchez les cotes qui offrent de la valeur, pas forcément les favoris.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Discipline :</strong> Respectez votre stratégie même en cas de série négative.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Analyse :</strong> Utilisez les statistiques pour identifier vos points forts et faibles.</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Prêt à commencer ?</h3>
            <p className="text-gray-600 mb-6">
              Les pronostics classiques sont parfaits pour une approche mesurée et analytique des paris sportifs.
            </p>
            <Link 
              href="/paris-sportifs/classiques"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accéder aux Pronostics Classiques
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}