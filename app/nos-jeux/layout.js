// app/nos-jeux/layout.js
export const metadata = {
  title: 'Rounders Pro - Jeux et Bonus Exclusifs',
  description: 'Découvrez les jeux exclusifs Rounders Pro sur Twitter X et la Roue de la Fortune Stake. Gagnez des bonus cash jusqu’à 50€ par jour !',
  keywords: 'jeux rounders, roue fortune stake, bonus cash, twitter x rounders, stake jeux',
  openGraph: {
    title: 'Rounders Pro - Jeux et Bonus Exclusifs',
    description: 'Découvrez les jeux exclusifs Rounders Pro sur Twitter X et la Roue de la Fortune Stake. Gagnez des bonus cash jusqu’à 50€ par jour !',
    url: 'https://www.rounders.pro/nos-jeux',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Jeux et Bonus Exclusifs',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders Pro - Jeux et Bonus Exclusifs',
    description: 'Jeux exclusifs Rounders Pro sur Twitter X et Roue de la Fortune Stake. Bonus cash jusqu’à 50€ !',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/nos-jeux',
  },
};

export default function NosJeuxLayout({ children }) {
  return children;
}