// app/guide-stake/responsable/layout.js
export const metadata = {
  title: 'Jeu Responsable Stake 2025 | Outils et Conseils - Rounders Pro',
  description: 'Guide 2025 pour un jeu responsable sur Stake : outils de contrôle, limites, auto-évaluation, ressources d’aide. Conseils par Rounders Pro.',
  keywords: 'jeu responsable, stake responsable, limites de jeu, auto-exclusion, rounders pro',
  openGraph: {
    title: 'Jeu Responsable Stake 2025 | Outils et Conseils - Rounders Pro',
    description: 'Guide 2025 pour jouer responsablement sur Stake : outils, limites, aide. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/responsable',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Jeu Responsable Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeu Responsable Stake 2025 | Outils et Conseils - Rounders Pro',
    description: 'Guide 2025 pour jouer responsablement sur Stake : outils, limites, aide. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/responsable',
  },
};

export default function ResponsableLayout({ children }) {
  return children;
}