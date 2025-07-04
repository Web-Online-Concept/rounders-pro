// app/cookies/layout.js
export const metadata = {
  title: 'Politique de Cookies 2025 - Rounders Pro | Gestion des Cookies',
  description: 'Politique de cookies 2025 de Rounders Pro : utilisation des cookies pour nos jeux gratuits, gestion et consentement. Conforme RGPD.',
  keywords: 'politique cookies, rounders pro, gestion cookies, rgpd, jeux gratuits',
  openGraph: {
    title: 'Politique de Cookies 2025 - Rounders Pro | Gestion des Cookies',
    description: 'Politique 2025 de Rounders Pro : cookies pour jeux gratuits. Conforme RGPD.',
    url: 'https://www.rounders.pro/cookies',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Politique de Cookies',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de Cookies 2025 - Rounders Pro | Gestion des Cookies',
    description: 'Politique 2025 de Rounders Pro : cookies pour jeux gratuits. Conforme RGPD.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/cookies',
  },
};

export default function CookiesLayout({ children }) {
  return children;
}