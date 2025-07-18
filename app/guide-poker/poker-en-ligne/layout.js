// app/guide-poker/poker-en-ligne/layout.js
export const metadata = {
  title: 'Poker en Ligne - Guide Poker | Rounders Pro',
  description: 'Maîtrisez le poker online : multi-tabling, HUD, trackers, sélection de sites. Optimisez votre setup et maximisez votre hourly rate.',
  keywords: 'poker en ligne, poker online, HUD poker, tracker poker, multi-tabling, logiciels poker, sites poker',
  openGraph: {
    title: 'Poker en Ligne - Guide Poker | Rounders Pro',
    description: 'Guide complet du poker online : outils, stratégies et optimisations pour dominer les tables virtuelles.',
    url: 'https://www.rounders.pro/guide-poker/poker-en-ligne',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/poker-en-ligne',
  },
};

export default function PokerEnLigneLayout({ children }) {
  return <>{children}</>;
}