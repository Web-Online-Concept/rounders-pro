// app/avantages-rounders/layout.js
export const metadata = {
  title: 'Avantages Rounders Pro | Bonus VIP Stake jusqu’à 200€',
  description: 'Obtenez jusqu’à 200€ de bonus cash et 10% de rakeback avec Rounders Pro sur Stake. Programme VIP exclusif et stratégies pour maximiser vos gains.',
  keywords: 'avantages rounders, bonus vip stake, code rounders, rakeback stake, bonus exclusifs, rounders pro',
  openGraph: {
    title: 'Avantages Rounders Pro | Bonus VIP Stake jusqu’à 200€',
    description: 'Obtenez jusqu’à 200€ de bonus cash et 10% de rakeback avec Rounders Pro sur Stake. Programme VIP exclusif.',
    url: 'https://www.rounders.pro/avantages-rounders',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Bonus VIP Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avantages Rounders Pro | Bonus VIP Stake jusqu’à 200€',
    description: 'Bonus jusqu’à 200€ et 10% rakeback avec Rounders Pro sur Stake.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/avantages-rounders',
  },
};

export default function AvantagesRoundersLayout({ children }) {
  return children;
}