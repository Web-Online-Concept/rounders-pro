export const metadata = {
  title: 'Gagnants Rounders Pro | Retrouvez la liste complète de nos gagnants',
  description: 'Tableau des gagnants en temps réel : découvrez qui a reçu les bonus VIP Stake aujourd\'hui. Paiements vérifiés.',
  keywords: 'gagnants rounders, bonus stake payés, winners rounders pro',
  openGraph: {
    title: 'Gagnants Rounders Pro | Retrouvez la liste complète des gagnants à nos jeux',
    description: 'Tableau des gagnants en temps réel : découvrez qui a reçu les bonus VIP Stake aujourd\'hui. Paiements vérifiés.',
    url: 'https://www.rounders.pro/gagnants',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Gagnants Bonus VIP',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gagnants Rounders Pro | +15,000€ de Bonus Distribués',
    description: 'Tableau des gagnants en temps réel. Plus de 15,000€ distribués, paiements vérifiés.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/gagnants',
  },
};

export default function GagnantsLayout({ children }) {
  return children;
}