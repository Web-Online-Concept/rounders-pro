// app/guide-stake/page.js
import Link from 'next/link';
import { AFFILIATE_LINK } from '../config/affiliate';

export const metadata = {
  title: 'Guide Stake 2025 - Casino, Sport & Crypto | Par Rounders Pro',
  description: 'Guide complet de Stake : inscription, bonus, stratégies, VIP. Tout pour maîtriser la plateforme de casino et paris sportifs crypto.',
  keywords: 'guide stake, stake casino, stake tutorial, stake france',
};

export default function GuideStakePage() {
  const sections = [
    {
      href: '/guide-stake/france',
      title: '🇫🇷 Guide Spécial Joueurs Français',
      description: 'Méthode VPN, accès depuis la France, toutes les astuces pour jouer sur Stake en toute tranquillité.',
      highlight: true,
      tag: 'IMPORTANT'
    },
    {
      href: '/guide-stake/introduction',
      title: '🎰 Introduction à Stake',
      description: 'Présentation complète de la plateforme, ses avantages, pourquoi Stake est le leader mondial.',
      tag: 'COMMENCER'
    },
    {
      href: '/guide-stake/inscription',
      title: '✍️ Comment s\'inscrire',
      description: 'Guide pas à pas pour créer votre compte, sécuriser avec 2FA et recevoir vos premiers bonus.',
      tag: 'TUTORIEL'
    },
    {
      href: '/guide-stake/premier-depot',
      title: '💳 Premier Dépôt',
      description: 'Comment effectuer votre premier dépôt, bonus de bienvenue, méthodes recommandées.',
      tag: 'DEPOT'
    },
    {
      href: '/guide-stake/interface',
      title: '🖥️ Interface & Navigation',
      description: 'Maîtrisez l\'interface Stake, personnalisation, raccourcis et fonctionnalités cachées.',
      tag: 'GUIDE'
    },
    {
      href: '/guide-stake/bonus',
      title: '💰 Bonus et Rakeback',
      description: 'Système de rakeback automatique, bonus hebdomadaires et mensuels expliqués. Reload quotidien VIP.',
      tag: 'GAINS'
    },
    {
      href: '/guide-stake/vip',
      title: '⭐ Programme VIP',
      description: 'Tous les paliers VIP, récompenses exclusives et bonus supplémentaires Rounders Pro.',
      tag: 'EXCLUSIF'
    },
    {
      href: '/guide-stake/jeux',
      title: '🎮 Catalogue de Jeux',
      description: 'Plus de 3000 jeux : slots, casino live, Stake Originals, paris sportifs.',
      tag: 'EXPLORER'
    },
    {
      href: '/guide-stake/crypto',
      title: '₿ Cryptomonnaies',
      description: 'Guide complet Coinbase, méthodes de dépôt et retrait, cryptos acceptées.',
      tag: 'CRYPTO'
    },
    {
      href: '/guide-stake/strategies',
      title: '📈 Stratégies Gagnantes',
      description: 'Techniques avancées, gestion de bankroll, maximiser vos chances de gains.',
      tag: 'PRO'
    },
    {
      href: '/guide-stake/astuces',
      title: '💡 Astuces Pro',
      description: 'Affichage en euros, utilisation du coffre, système de pourboires, trucs cachés.',
      tag: 'TIPS'
    },
    {
      href: '/guide-stake/responsable',
      title: '🛡️ Jeu Responsable',
      description: 'Limites de jeu, auto-exclusion, conseils pour garder le contrôle et jouer sereinement.',
      tag: 'SECURITE'
    },
    {
      href: '/guide-stake/faq',
      title: '❓ FAQ Complète',
      description: 'Réponses à toutes vos questions sur Stake, le programme VIP et les bonus.',
      tag: 'AIDE'
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Guide Ultime Stake 2025
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Le guide le plus complet en français pour maîtriser Stake et maximiser vos gains.
          Écrit par des experts, mis à jour quotidiennement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg text-center"
          >
            Commencer sur Stake →
          </Link>
          <Link
            href="/guide-stake/france"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg text-center"
          >
            🇫🇷 Guide Français →
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">13</div>
          <div className="text-sm text-gray-600">Sections</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">100+</div>
          <div className="text-sm text-gray-600">Conseils</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-amber-600">2025</div>
          <div className="text-sm text-gray-600">Mis à jour</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-red-600">🇫🇷</div>
          <div className="text-sm text-gray-600">Français</div>
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
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
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
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {section.tag}
                  </span>
                </div>
              </div>
            </div>
            <div className={`h-1 ${
              section.highlight ? 'bg-red-500' : 'bg-blue-600'
            } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-gray-900 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Prêt à commencer votre aventure Stake ?
        </h3>
        <p className="text-gray-300 mb-6">
          Inscrivez-vous via notre lien pour bénéficier de tous les avantages exclusifs Rounders Pro
        </p>
        <Link
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
        >
          Inscription avec Bonus →
        </Link>
      </div>
    </div>
  );
}