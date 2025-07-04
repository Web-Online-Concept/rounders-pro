// app/merci/layout.js
export const metadata = {
  title: 'Bienvenue chez Rounders Pro | Bonus VIP Confirmés',
  description: 'Votre demande de bonus Rounders est confirmée ! Réclamez jusqu’à 200€ de bonus VIP et profitez du rakeback 10% sur Stake. Guide inclus.',
  keywords: 'bonus rounders, inscription confirmée, bonus vip stake, rakeback stake, rounders pro',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Bienvenue chez Rounders Pro | Bonus VIP Confirmés',
    description: 'Votre demande de bonus Rounders est confirmée ! Réclamez jusqu’à 200€ de bonus VIP et profitez du rakeback 10% sur Stake.',
    url: 'https://www.rounders.pro/merci',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Confirmation Bonus',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bienvenue chez Rounders Pro | Bonus VIP Confirmés',
    description: 'Demande confirmée ! Réclamez jusqu’à 200€ de bonus VIP avec Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/merci',
  },
};

export default function MerciLayout({ children }) {
  return children;
}