// app/gagnants/layout.js
export const metadata = {
  title: 'Rounders Pro - Gagnants des Bonus VIP',
  description: 'Consultez l’historique des gagnants des bonus VIP et de la Roue de la Fortune sur Rounders Pro. Statistiques et paiements vérifiés en temps réel.',
  keywords: 'gagnants rounders, roue fortune gagnants, stake bonus, rounders pro gagnants, bonus vip',
  openGraph: {
    title: 'Rounders Pro - Gagnants des Bonus VIP',
    description: 'Consultez l’historique des gagnants des bonus VIP et de la Roue de la Fortune sur Rounders Pro. Statistiques et paiements vérifiés en temps réel.',
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
    title: 'Rounders Pro - Gagnants des Bonus VIP',
    description: 'Historique des gagnants des bonus VIP et Roue de la Fortune sur Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/gagnants',
  },
};

export default function GagnantsLayout({ children }) {
  return children;
}