// app/politique-confidentialite/layout.js
export const metadata = {
  title: 'Politique de Confidentialité 2025 - Rounders Pro | RGPD',
  description: 'Politique de confidentialité 2025 de Rounders Pro : collecte, utilisation et protection des données pour nos jeux gratuits. Conforme RGPD.',
  keywords: 'politique confidentialité, rounders pro, protection données, rgpd, jeux gratuits',
  openGraph: {
    title: 'Politique de Confidentialité 2025 - Rounders Pro | RGPD',
    description: 'Politique 2025 de Rounders Pro : collecte et protection des données. Conforme RGPD.',
    url: 'https://www.rounders.pro/politique-confidentialite',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Politique de Confidentialité',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de Confidentialité 2025 - Rounders Pro | RGPD',
    description: 'Politique 2025 de Rounders Pro : collecte et protection des données. Conforme RGPD.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/politique-confidentialite',
  },
};

export default function PolitiqueConfidentialiteLayout({ children }) {
  return children;
}