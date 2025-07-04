// app/cgu/layout.js
export const metadata = {
  title: 'CGU 2025 - Rounders Pro | Conditions des Jeux Gratuits',
  description: 'Conditions générales d’utilisation 2025 de Rounders Pro : jeux gratuits sans obligation, règles et responsabilités. Par Web Online Concept.',
  keywords: 'cgu, conditions générales, rounders pro, jeux gratuits, web online concept',
  openGraph: {
    title: 'CGU 2025 - Rounders Pro | Conditions des Jeux Gratuits',
    description: 'CGU 2025 de Rounders Pro : jeux gratuits sans obligation. Par Web Online Concept.',
    url: 'https://www.rounders.pro/cgu',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Conditions Générales d’Utilisation',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGU 2025 - Rounders Pro | Conditions des Jeux Gratuits',
    description: 'CGU 2025 de Rounders Pro : jeux gratuits sans obligation. Par Web Online Concept.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/cgu',
  },
};

export default function CGULayout({ children }) {
  return children;
}