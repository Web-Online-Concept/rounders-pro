// app/guide-casino/page.js
import Link from 'next/link';

export default function GuideCasinoPage() {
  const sections = [
    {
      title: "🎰 Introduction au Casino",
      slug: "introduction",
      description: "Découvrez l'univers du casino en ligne, les bases essentielles et comment bien démarrer"
    },
    {
      title: "🎲 Les Jeux de Table",
      slug: "jeux-table",
      description: "Roulette, Blackjack, Baccarat, Craps : règles, stratégies et variantes"
    },
    {
      title: "🎯 Les Machines à Sous",
      slug: "machines-sous",
      description: "Comprendre les slots : RTP, volatilité, lignes de paiement et bonus"
    },
    {
      title: "♠️ Le Blackjack Pro",
      slug: "blackjack-pro",
      description: "Stratégie de base, comptage de cartes, gestion de bankroll au Blackjack"
    },
    {
      title: "🎡 La Roulette Maîtrisée",
      slug: "roulette",
      description: "Systèmes de mise, probabilités et stratégies pour la roulette"
    },
    {
      title: "💎 Le Baccarat",
      slug: "baccarat",
      description: "Règles, stratégies et gestion des mises au Baccarat"
    },
    {
      title: "🎰 Stratégies Slots",
      slug: "strategies-slots",
      description: "Maximiser vos chances aux machines à sous : sélection et gestion"
    },
    {
      title: "🏆 Casino Live",
      slug: "casino-live",
      description: "Tout savoir sur les casinos en direct avec croupiers réels"
    },
    {
      title: "💰 Bonus et Promotions",
      slug: "bonus-promotions",
      description: "Comprendre et optimiser les bonus casino : wagering, conditions, stratégies"
    },
    {
      title: "📊 Gestion de Bankroll",
      slug: "gestion-bankroll",
      description: "Techniques de money management spécifiques au casino"
    },
    {
      title: "🧮 Mathématiques du Casino",
      slug: "mathematiques",
      description: "Comprendre l'avantage maison, RTP, variance et probabilités"
    },
    {
      title: "🚫 Erreurs à Éviter",
      slug: "erreurs-eviter",
      description: "Les pièges classiques du casino et comment les éviter"
    },
    {
      title: "🧠 Psychologie du Joueur",
      slug: "psychologie",
      description: "Maîtriser ses émotions et développer un mental de gagnant"
    },
    {
      title: "🛡️ Jouer Responsable",
      slug: "responsable",
      description: "Limites, contrôle et jeu responsable au casino"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🎰 Guide Ultime du Casino
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Maîtrisez tous les jeux de casino avec nos guides experts
          </p>
          <div className="bg-white/20 backdrop-blur rounded-lg p-6 max-w-3xl">
            <p className="text-lg">
              Du débutant au joueur confirmé, découvrez toutes les stratégies, 
              techniques et secrets pour maximiser vos chances au casino. 
              Guide complet et professionnel pour tous les jeux.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi ce guide casino ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-bold mb-2">Guide Complet</h3>
                <p className="text-gray-600">Tous les jeux de casino expliqués en détail</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold mb-2">Stratégies Pro</h3>
                <p className="text-gray-600">Techniques utilisées par les joueurs expérimentés</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-bold mb-2">Conseils Pratiques</h3>
                <p className="text-gray-600">Astuces concrètes pour améliorer votre jeu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections du guide */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explorez le Guide Casino
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={`/guide-casino/${section.slug}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.description}
                </p>
                <div className="mt-4 text-red-600 font-semibold flex items-center">
                  Découvrir
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à devenir un expert du casino ?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Commencez par les bases ou plongez directement dans les stratégies avancées
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guide-casino/introduction"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition"
            >
              Commencer le Guide
            </Link>
            <Link
              href="/nos-jeux"
              className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-800 transition border-2 border-white"
            >
              Jouer Maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* Points importants */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">
              ⚠️ Points Importants
            </h3>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Le casino reste un divertissement avec un avantage mathématique pour la maison</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Aucune stratégie ne garantit des gains à long terme</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Jouez toujours de manière responsable avec des limites définies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ce guide vise à optimiser votre expérience, pas à promettre des gains</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}