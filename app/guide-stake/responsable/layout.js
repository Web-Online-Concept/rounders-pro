// app/guide-stake/responsable/layout.js
export const metadata = {
  title: 'Jeu Responsable 2025 - Rounders Pro | Conseils et Ressources',
  description: 'Guide 2025 pour jouer responsable sur Stake : conseils, outils, limites, et ressources d’aide contre l’addiction. Par Rounders Pro.',
  keywords: 'jeu responsable, rounders pro, stake, addiction jeux, joueurs anonymes',
  openGraph: {
    title: 'Jeu Responsable 2025 - Rounders Pro | Conseils et Ressources',
    description: 'Guide 2025 pour jouer responsable : conseils et aide. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/responsable',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Jeu Responsable',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeu Responsable 2025 - Rounders Pro | Conseils et Ressources',
    description: 'Guide 2025 pour jouer responsable : conseils et aide. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/responsable',
  },
};

export default function ResponsableLayout({ children }) {
  return children;
}