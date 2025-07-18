// app/guide-poker/mains-poker/layout.js
export const metadata = {
  title: 'Classement des Mains au Poker - Guide Poker | Rounders Pro',
  description: 'Apprenez la hiérarchie complète des mains au poker : de la carte haute à la quinte flush royale. Probabilités, exemples et cas particuliers expliqués.',
  keywords: 'mains poker, classement mains, quinte flush, carré, full house, couleur, suite poker, paire, brelan, probabilités poker',
  openGraph: {
    title: 'Classement des Mains au Poker - Guide Poker | Rounders Pro',
    description: 'Maîtrisez la hiérarchie des mains au poker avec exemples et probabilités détaillées.',
    url: 'https://www.rounders.pro/guide-poker/mains-poker',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/mains-poker',
  },
};

export default function MainsPokerLayout({ children }) {
  return <>{children}</>;
}