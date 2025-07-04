export const metadata = {
  title: 'Roue de la Fortune Gratuite | Gagnez jusqu\'à 50€ par Jour',
  description: 'Tournez gratuitement toutes les 24h et gagnez des bonus cash pour Stake. Jackpot jusqu\'à 50€, gains instantanés. Ouvert à tous possesseurs d\'un compte Stake.',
  keywords: 'roue fortune stake, gagner bonus quotidien, wheel fortune gratuit',
  openGraph: {
    title: 'Roue de la Fortune Gratuite | Gagnez jusqu\'à 50€ par Jour',
    description: 'Tournez gratuitement toutes les 24h et gagnez des bonus cash pour Stake. Jackpot jusqu\'à 50€, gains instantanés. Ouvert à tous possesseurs d\'un compte Stake.',
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
    title: 'Roue de la Fortune Gratuite | Gagnez jusqu\'à 50€ par Jour',
    description: 'Tournez gratuitement toutes les 24h et gagnez des bonus cash. Jackpot jusqu\'à 50€.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/roue-fortune',
  },
};

export default function RoueFortuneLayout({ children }) {
  return children;
}