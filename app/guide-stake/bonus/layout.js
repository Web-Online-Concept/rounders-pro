// app/guide-stake/bonus/layout.js
export const metadata = {
  title: 'Bonus Stake | Rakeback, Reload, VIP - Guide 2025 Rounders Pro',
  description: 'Découvrez tous les bonus Stake : rakeback, reload du samedi, bonus VIP. Maximisez vos avantages avec le guide 2025 de Rounders Pro.',
  keywords: 'bonus stake, rakeback stake, reload saturday, rounders pro',
  openGraph: {
    title: 'Bonus Stake | Rakeback, Reload, VIP - Guide 2025 Rounders Pro',
    description: 'Guide 2025 des bonus Stake : rakeback, reload, VIP. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/bonus',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Bonus Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonus Stake | Rakeback, Reload, VIP - Guide 2025 Rounders Pro',
    description: 'Guide 2025 des bonus Stake : rakeback, reload, VIP. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/bonus',
  },
};

export default function BonusLayout({ children }) {
  return children;
}