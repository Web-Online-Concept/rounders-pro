// app/guide-stake/astuces/layout.js
export const metadata = {
  title: 'Astuces Pro Stake 2025 | Euros, Coffre, 2FA - Rounders Pro',
  description: 'Astuces cachées 2025 pour Stake : afficher en euros, utiliser le coffre-fort, pourboires, activer la 2FA. Conseils pros par Rounders Pro.',
  keywords: 'stake astuces, stake euros, stake coffre, stake 2fa, stake tips, rounders pro',
  openGraph: {
    title: 'Astuces Pro Stake 2025 | Euros, Coffre, 2FA - Rounders Pro',
    description: 'Astuces 2025 pour Stake : euros, coffre-fort, pourboires, 2FA. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/astuces',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Astuces Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astuces Pro Stake 2025 | Euros, Coffre, 2FA - Rounders Pro',
    description: 'Astuces 2025 pour Stake : euros, coffre-fort, pourboires, 2FA. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/astuces',
  },
};

export default function AstucesLayout({ children }) {
  return children;
}