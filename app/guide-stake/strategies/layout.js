// app/guide-stake/strategies/layout.js
export const metadata = {
  title: 'Stratégies Stake 2025 | Conseils pour Maximiser Gains - Rounders Pro',
  description: 'Stratégies avancées 2025 pour Stake : gestion de bankroll, stratégies par jeu, martingale, conseils pros par Rounders Pro.',
  keywords: 'stake stratégies, stake conseils, stake tips, stake bankroll, stake martingale, rounders pro',
  openGraph: {
    title: 'Stratégies Stake 2025 | Conseils pour Maximiser Gains - Rounders Pro',
    description: 'Stratégies avancées 2025 pour Stake : bankroll, jeux, conseils pros. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/strategies',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Stratégies Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stratégies Stake 2025 | Conseils pour Maximiser Gains - Rounders Pro',
    description: 'Stratégies avancées 2025 pour Stake : bankroll, jeux, conseils pros. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/strategies',
  },
};

export default function StrategiesLayout({ children }) {
  return children;
}