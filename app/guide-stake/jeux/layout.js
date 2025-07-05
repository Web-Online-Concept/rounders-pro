// app/guide-stake/jeux/layout.js
export const metadata = {
  title: 'Jeux Stake | Casino, Slots, Originals - Guide Rounders Pro',
  description: 'Guide des jeux Stake : Originals (Dice, Plinko, Mines), slots, live casino, paris sportifs. Règles, RTP et stratégies par Rounders Pro.',
  keywords: 'jeux stake, stake originals, stake casino games, rounders pro',
  openGraph: {
    title: 'Jeux Stake | Casino, Slots, Originals - Guide Rounders Pro',
    description: 'Guide des jeux Stake : Originals, slots, live casino. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/jeux',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Jeux Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeux Stake | Casino, Slots, Originals - Guide Rounders Pro',
    description: 'Guide des jeux Stake : Originals, slots, live casino. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/jeux',
  },
};

export default function JeuxLayout({ children }) {
  return children;
}