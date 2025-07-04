// app/guide-stake/france/layout.js
export const metadata = {
  title: 'Stake France | Jouer depuis la France avec VPN - Rounders Pro',
  description: 'Guide complet pour les joueurs français : utilisez un VPN pour vous inscrire sur Stake et accédez-y sans VPN depuis la France. Par Rounders Pro.',
  keywords: 'stake france, stake vpn, stake français, accès stake france, vpn stake, rounders pro',
  openGraph: {
    title: 'Stake France | Jouer depuis la France avec VPN - Rounders Pro',
    description: 'Guide complet pour les joueurs français : utilisez un VPN pour vous inscrire sur Stake et accédez-y sans VPN depuis la France.',
    url: 'https://www.rounders.pro/guide-stake/france',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Stake France',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stake France | Jouer depuis la France avec VPN - Rounders Pro',
    description: 'Guide pour jouer sur Stake depuis la France avec un VPN. Accès simplifié après inscription.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/france',
  },
};

export default function GuideFranceLayout({ children }) {
  return children;
}