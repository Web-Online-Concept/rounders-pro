// app/guide-poker/positions-table/layout.js
export const metadata = {
  title: 'Positions à la Table de Poker - Guide Poker | Rounders Pro',
  description: 'Maîtrisez l\'importance cruciale de la position au poker : UTG, MP, CO, Button, Blinds. Apprenez comment exploiter votre position pour maximiser vos gains.',
  keywords: 'position poker, button, cutoff, UTG, blinds, early position, late position, stratégie position poker',
  openGraph: {
    title: 'Positions à la Table de Poker - Guide Poker | Rounders Pro',
    description: 'Comprenez pourquoi la position est l\'arme la plus puissante au poker et comment l\'exploiter.',
    url: 'https://www.rounders.pro/guide-poker/positions-table',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/positions-table',
  },
};

export default function PositionsTableLayout({ children }) {
  return <>{children}</>;
}