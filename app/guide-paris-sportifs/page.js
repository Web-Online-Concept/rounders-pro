// app/guide-paris-sportifs/page.js
import Link from 'next/link';

export default function GuideParisPage() {
  const sections = [
    {
      href: '/guide-paris-sportifs/introduction',
      title: '📖 Introduction aux Paris Sportifs',
      description: 'Découvrez les bases essentielles des paris sportifs, le vocabulaire et les principes fondamentaux pour bien débuter.',
      tag: 'DÉBUTER'
    },
    {
      href: '/guide-paris-sportifs/comprendre-cotes',
      title: '📊 Comprendre les Cotes',
      description: 'Maîtrisez les différents types de cotes (décimales, fractionnelles, américaines) et apprenez à calculer vos gains potentiels.',
      tag: 'ESSENTIEL'
    },
    {
      href: '/guide-paris-sportifs/types-paris',
      title: '🎯 Types de Paris',
      description: 'Du pari simple au système complexe : découvrez tous les types de paris et leurs spécificités.',
      tag: 'APPRENDRE'
    },
    {
      href: '/guide-paris-sportifs/gestion-bankroll',
      title: '💰 Gestion de Bankroll',
      description: 'La clé du succès à long terme : apprenez à gérer votre capital comme un professionnel.',
      highlight: true,
      tag: 'CRUCIAL'
    },
    {
      href: '/guide-paris-sportifs/analyse-matchs',
      title: '🔍 Analyse des Matchs',
      description: 'Méthodologie complète pour analyser un match : statistiques, forme, confrontations directes, contexte.',
      tag: 'ANALYSE'
    },
    {
      href: '/guide-paris-sportifs/strategies-base',
      title: '📈 Stratégies de Base',
      description: 'Les stratégies fondamentales que tout parieur doit connaître pour maximiser ses chances.',
      tag: 'STRATÉGIE'
    },
    {
      href: '/guide-paris-sportifs/value-betting',
      title: '💎 Value Betting',
      description: 'Le concept le plus important : identifier et exploiter les cotes surévaluées par les bookmakers.',
      highlight: true,
      tag: 'PRO'
    },
    {
      href: '/guide-paris-sportifs/surebets',
      title: '🎯 Surebets & Arbitrage',
      description: 'Découvrez comment garantir des profits avec l\'arbitrage et la détection de surebets.',
      tag: 'AVANCÉ'
    },
    {
      href: '/guide-paris-sportifs/systemes-montantes',
      title: '📊 Systèmes & Montantes',
      description: 'Martingale, Fibonacci, D\'Alembert : tous les systèmes de mise expliqués avec leurs risques.',
      tag: 'SYSTÈMES'
    },
    {
      href: '/guide-paris-sportifs/optimisation',
      title: '🚀 Optimisation',
      description: 'Techniques avancées pour optimiser vos paris : timing, comparaison de cotes, bonus.',
      tag: 'OPTIMISER'
    },
    {
      href: '/guide-paris-sportifs/erreurs-eviter',
      title: '❌ Erreurs à Éviter',
      description: 'Les pièges classiques qui ruinent les parieurs et comment les éviter définitivement.',
      tag: 'IMPORTANT'
    },
    {
      href: '/guide-paris-sportifs/outils-pro',
      title: '🛠️ Outils Pro',
      description: 'Logiciels, sites et applications indispensables pour parier comme un professionnel.',
      tag: 'OUTILS'
    },
    {
      href: '/guide-paris-sportifs/psychologie',
      title: '🧠 Psychologie du Parieur',
      description: 'Maîtrisez vos émotions, évitez le tilt et développez un mental de gagnant.',
      tag: 'MENTAL'
    },
    {
      href: '/guide-paris-sportifs/responsable',
      title: '🛡️ Parier Responsable',
      description: 'Conseils essentiels pour garder le contrôle et faire des paris sportifs un plaisir sain.',
      tag: 'SÉCURITÉ'
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Guide Ultime des Paris Sportifs
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Le guide le plus complet en français pour maîtriser les paris sportifs. 
          De débutant à expert, apprenez les stratégies des parieurs professionnels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/guide-paris-sportifs/introduction"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg text-center"
          >
            Commencer le Guide →
          </Link>
          <Link
            href="/paris-sportifs"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition shadow-lg text-center"
          >
            Voir nos Pronostics →
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
          🎯 Prêt à devenir un parieur profitable ?
        </h3>
        <p className="text-green-100 mb-6">
          Commencez par les bases et progressez à votre rythme jusqu'aux stratégies avancées
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guide-paris-sportifs/introduction"
            className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Débuter le Guide →
          </Link>
          <Link
            href="/paris-sportifs"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-500 transition shadow-lg"
          >
            Pronostics Gratuits →
          </Link>
        </div>
      </div>
    </div>
  );
}