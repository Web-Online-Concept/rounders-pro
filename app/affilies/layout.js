// app/affilies/layout.js
export const metadata = {
  title: 'Rounders Pro - Espace Affiliés Bonus VIP 200€',
  description: 'Réclamez jusqu’à 200€ de bonus VIP dans l’espace affiliés Rounders Pro. Suivi en temps réel, paiement crypto 48h.',
  keywords: 'espace affiliés, bonus rounders, bonus vip stake, rewards rounders, bonus cash stake',
  openGraph: {
    title: 'Rounders Pro - Espace Affiliés Bonus VIP 200€',
    description: 'Réclamez jusqu’à 200€ de bonus VIP dans l’espace affiliés Rounders Pro. Suivi en temps réel, paiement crypto 48h.',
    url: 'https://www.rounders.pro/affilies',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Espace Affiliés VIP',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders Pro - Espace Affiliés Bonus VIP 200€',
    description: 'Réclamez jusqu’à 200€ de bonus VIP dans l’espace affiliés Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/affilies',
  },
};

export default function AffiliesLayout({ children }) {
  return children;
}