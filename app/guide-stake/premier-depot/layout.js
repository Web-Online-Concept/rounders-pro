// app/guide-stake/premier-depot/layout.js
export const metadata = {
  title: 'Premier Dépôt sur Stake | Guide Crypto 2025 - Rounders Pro',
  description: 'Guide 2025 pour votre premier dépôt sur Stake : cryptomonnaies acceptées, montants minimum, bonus de bienvenue. Tutoriel complet par Rounders Pro.',
  keywords: 'dépôt stake, stake deposit, crypto stake, rounders pro',
  openGraph: {
    title: 'Premier Dépôt sur Stake | Guide Crypto 2025 - Rounders Pro',
    description: 'Guide 2025 pour déposer sur Stake : cryptos, montants minimum, bonus. Tutoriel par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/premier-depot',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Premier Dépôt Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Dépôt sur Stake | Guide Crypto 2025 - Rounders Pro',
    description: 'Guide 2025 pour déposer sur Stake : cryptos et bonus. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/premier-depot',
  },
};

export default function PremierDepotLayout({ children }) {
  return children;
}