// app/guide-poker/page.js
import Link from 'next/link';

export default function GuidePokerPage() {
  const sections = [
    {
      href: '/guide-poker/introduction',
      title: '📖 Introduction au Poker',
      description: 'Découvrez l\'univers du poker, son histoire, sa popularité et pourquoi c\'est plus qu\'un simple jeu de cartes.',
      tag: 'DÉBUTER'
    },
    {
      href: '/guide-poker/regles-base',
      title: '📋 Règles et Variantes',
      description: 'Texas Hold\'em, Omaha, Stud : maîtrisez les règles de toutes les variantes populaires du poker.',
      tag: 'ESSENTIEL'
    },
    {
      href: '/guide-poker/mains-poker',
      title: '🃏 Classement des Mains',
      description: 'De la carte haute à la quinte flush royale : apprenez la hiérarchie des mains et leurs probabilités.',
      tag: 'FONDAMENTAL'
    },
    {
      href: '/guide-poker/positions-table',
      title: '💺 Positions à la Table',
      description: 'UTG, Button, Blinds : comprenez l\'importance cruciale de la position et comment l\'exploiter.',
      highlight: true,
      tag: 'CRUCIAL'
    },
    {
      href: '/guide-poker/preflop-strategy',
      title: '🎯 Stratégie Préflop',
      description: 'Ranges d\'ouverture, 3-bet, 4-bet : construisez une stratégie préflop solide et profitable.',
      tag: 'STRATÉGIE'
    },
    {
      href: '/guide-poker/postflop-play',
      title: '♦️ Jeu Postflop',
      description: 'C-bet, value bet, pot control : maîtrisez les concepts essentiels du jeu après le flop.',
      tag: 'AVANCÉ'
    },
    {
      href: '/guide-poker/cotes-probabilites',
      title: '📊 Cotes et Probabilités',
      description: 'Pot odds, implied odds, équité : les mathématiques essentielles pour prendre les bonnes décisions.',
      highlight: true,
      tag: 'MATHS'
    },
    {
      href: '/guide-poker/gestion-bankroll',
      title: '💰 Gestion de Bankroll',
      description: 'Buy-ins, variance, BRM : gérez votre capital comme un pro pour jouer sereinement.',
      tag: 'GESTION'
    },
    {
      href: '/guide-poker/tells-psychologie',
      title: '🧠 Tells et Psychologie',
      description: 'Lecture des adversaires, contrôle émotionnel, image à la table : l\'aspect mental du poker.',
      tag: 'MENTAL'
    },
    {
      href: '/guide-poker/bluff-technique',
      title: '🎭 L\'Art du Bluff',
      description: 'Timing, sizing, fréquence : apprenez quand et comment bluffer efficacement.',
      tag: 'TECHNIQUE'
    },
    {
      href: '/guide-poker/tournois-strategie',
      title: '🏆 Stratégie Tournois',
      description: 'ICM, bubble play, stack management : adaptez votre jeu aux spécificités des tournois.',
      tag: 'MTT'
    },
    {
      href: '/guide-poker/cash-game',
      title: '💵 Cash Game',
      description: 'Deep stack, short stack, exploitation : optimisez votre jeu en parties d\'argent.',
      tag: 'CASH'
    },
    {
      href: '/guide-poker/poker-en-ligne',
      title: '💻 Poker en Ligne',
      description: 'Multi-tabling, HUD, tracker : utilisez la technologie pour maximiser vos profits online.',
      tag: 'ONLINE'
    },
    {
      href: '/guide-poker/erreurs-eviter',
      title: '❌ Erreurs à Éviter',
      description: 'Les leaks classiques qui coûtent cher et comment les corriger définitivement.',
      tag: 'IMPORTANT'
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Guide Ultime du Poker
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Le guide le plus complet en français pour maîtriser le poker. 
          De débutant à joueur confirmé, apprenez les stratégies des professionnels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/guide-poker/introduction"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg text-center"
          >
            Commencer le Guide →
          </Link>
          <Link
            href="/guide-stake"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition shadow-lg text-center"
          >
            Jouer sur Stake →
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">14</div>
          <div className="text-sm text-gray-600">Chapitres</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">50+</div>
          <div className="text-sm text-gray-600">Concepts</div>
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
              section.highlight ? 'ring-2 ring-green-500' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">
                    {section.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                    section.highlight 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {section.tag}
                  </span>
                </div>
              </div>
            </div>
            <div className={`h-1 ${
              section.highlight ? 'bg-green-500' : 'bg-green-600'
            } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          ♠️ Prêt à devenir un joueur gagnant ?
        </h3>
        <p className="text-green-100 mb-6">
          Commencez par les bases et progressez jusqu\'aux stratégies avancées des pros
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guide-poker/introduction"
            className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Débuter le Guide →
          </Link>
          <Link
            href="/guide-stake"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-500 transition shadow-lg"
          >
            Jouer sur Stake →
          </Link>
        </div>
      </div>
    </div>
  );
}