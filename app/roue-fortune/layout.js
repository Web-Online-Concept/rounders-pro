// app/roue-fortune/layout.js
export const metadata = {
  title: 'Roue de la Fortune Rounders - Jusqu’à 50€ par Jeu',
  description: 'Tournez la Roue de la Fortune Rounders gratuitement toutes les 24h et gagnez des bonus cash jusqu’à 50€ pour Stake. Ouvert à tous les joueurs !',
  keywords: 'roue fortune rounders, bonus cash stake, jeux gratuits rounders, twitter x jeux, rounders pro',
  openGraph: {
    title: 'Roue de la Fortune Rounders - Jusqu’à 50€ par Jeu',
    description: 'Tournez la Roue de la Fortune Rounders gratuitement toutes les 24h et gagnez des bonus cash jusqu’à 50€ pour Stake. Ouvert à tous les joueurs !',
    url: 'https://www.rounders.pro/roue-fortune',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Roue de la Fortune',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roue de la Fortune Rounders - Jusqu’à 50€ par Jeu',
    description: 'Tournez la Roue de la Fortune Rounders et gagnez jusqu’à 50€ de bonus cash pour Stake !',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/roue-fortune',
  },
};

export default function RoueFortuneLayout({ children }) {
  return children;
}