// app/guide-stake/inscription/layout.js
export const metadata = {
  title: 'Inscription sur Stake | Guide Étape par Étape - Rounders Pro',
  description: 'Tutoriel 2025 pour créer un compte Stake : inscription rapide en 30 secondes, vérification KYC, premiers pas. Guide par Rounders Pro.',
  keywords: 'inscription stake, créer compte stake, stake registration, rounders pro',
  openGraph: {
    title: 'Inscription sur Stake | Guide Étape par Étape - Rounders Pro',
    description: 'Tutoriel 2025 pour s’inscrire sur Stake : rapide, sans KYC obligatoire. Guide complet par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/inscription',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Inscription Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inscription sur Stake | Guide Étape par Étape - Rounders Pro',
    description: 'Tutoriel pour s’inscrire sur Stake en 30 secondes. Guide par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/inscription',
  },
};

export default function GuideInscriptionLayout({ children }) {
  return children;
}