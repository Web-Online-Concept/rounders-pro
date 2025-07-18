// app/guide-casino/page.js
import Link from 'next/link';

export default function GuideCasinoPage() {
  const sections = [
    {
      href: '/guide-casino/introduction',
      title: '🎰 Introduction au Casino',
      description: 'Découvrez l\'univers du casino en ligne, les bases essentielles et comment bien démarrer.',
      tag: 'DÉBUTER'
    },
    {
      href: '/guide-casino/jeux-table',
      title: '🎲 Les Jeux de Table',
      description: 'Roulette, Blackjack, Baccarat, Craps : règles, stratégies et variantes expliquées.',
      tag: 'ESSENTIEL'
    },
    {
      href: '/guide-casino/machines-sous',
      title: '🎯 Les Machines à Sous',
      description: 'Comprendre les slots : RTP, volatilité, lignes de paiement et fonctionnalités bonus.',
      tag: 'APPRENDRE'
    },
    {
      href: '/guide-casino/blackjack-pro',
      title: '♠️ Le Blackjack Pro',
      description: 'Stratégie de base, comptage de cartes et gestion de bankroll au Blackjack.',
      highlight: true,
      tag: 'CRUCIAL'
    },
    {
      href: '/guide-casino/roulette',
      title: '🎡 La Roulette Maîtrisée',
      description: 'Systèmes de mise, probabilités et stratégies pour optimiser vos sessions roulette.',
      tag: 'ANALYSE'
    },
    {
      href: '/guide-casino/baccarat',
      title: '💎 Le Baccarat',
      description: 'Règles complètes, stratégies avancées et gestion des mises au Baccarat.',
      tag: 'STRATÉGIE'
    },
    {
      href: '/guide-casino/strategies-slots',
      title: '🎰 Stratégies Slots',
      description: 'Maximiser vos chances aux machines à sous : sélection, bankroll et sessions.',
      highlight: true,
      tag: 'PRO'
    },
    {
      href: '/guide-casino/casino-live',
      title: '🏆 Casino Live',
      description: 'Tout savoir sur les casinos en direct avec croupiers réels et stratégies adaptées.',
      tag: 'AVANCÉ'
    },
    {
      href: '/guide-casino/bonus-promotions',
      title: '💰 Bonus et Promotions',
      description: 'Comprendre et optimiser les bonus casino : wagering, conditions et calculs EV.',
      tag: 'BONUS'
    },
    {
      href: '/guide-casino/gestion-bankroll',
      title: '📊 Gestion de Bankroll',
      description: 'Techniques de money management spécifiques au casino pour durer dans le temps.',
      tag: 'OPTIMISER'
    },
    {
      href: '/guide-casino/mathematiques',
      title: '🧮 Mathématiques du Casino',
      description: 'Comprendre l\'avantage maison, RTP, variance et probabilités de tous les jeux.',
      tag: 'IMPORTANT'
    },
    {
      href: '/guide-casino/erreurs-eviter',
      title: '🚫 Erreurs à Éviter',
      description: 'Les pièges classiques du casino et comment les éviter définitivement.',
      tag: 'ERREURS'
    },
    {
      href: '/guide-casino/psychologie',
      title: '🧠 Psychologie du Joueur',
      description: 'Maîtriser ses émotions, éviter le tilt et développer un mental de gagnant.',
      tag: 'MENTAL'
    },
    {
      href: '/guide-casino/responsable',
      title: '🛡️ Jouer Responsable',
      description: 'Conseils essentiels pour garder le contrôle et faire du casino un plaisir sain.',
      tag: 'SÉCURITÉ'
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Guide Ultime du Casino
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Le guide le plus complet en français pour maîtriser tous les jeux de casino. 
          De débutant à expert, apprenez les stratégies des joueurs professionnels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/guide-casino/introduction"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg text-center"
          >
            Commencer le Guide →
          </Link>
          <Link
            href="/guide-stake"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition shadow-lg text-center"
          >
            Jouer au Casino →
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-red-600">14</div>
          <div className="text-sm text-gray-600">Chapitres</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">10+</div>
          <div className="text-sm text-gray-600">Stratégies</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">PRO</div>
          <div className="text-sm text-gray-600">Niveau</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">2025</div>
          <div className="text-sm text-gray-600">Mis à jour</div>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="space-y-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={`block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
              section.highlight ? 'ring-2 ring-red-500' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">
                    {section.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                    section.highlight 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {section.tag}
                  </span>
                </div>
              </div>
            </div>
            <div className={`h-1 ${
              section.highlight ? 'bg-red-500' : 'bg-red-600'
            } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          🎰 Prêt à devenir un joueur de casino profitable ?
        </h3>
        <p className="text-red-100 mb-6">
          Commencez par les bases et progressez à votre rythme jusqu'aux stratégies avancées
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guide-casino/introduction"
            className="inline-block bg-white text-red-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Débuter le Guide →
          </Link>
          <Link
            href="/guide-stake"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-500 transition shadow-lg"
          >
            Jouer au Casino →
          </Link>
        </div>
      </div>
    </div>
  );
}