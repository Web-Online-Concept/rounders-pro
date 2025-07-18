// app/guide-poker/preflop-strategy/layout.js
export const metadata = {
  title: 'Stratégie Préflop au Poker - Guide Poker | Rounders Pro',
  description: 'Maîtrisez la stratégie préflop : ranges d\'ouverture par position, 3-bet, 4-bet, défense des blinds. Charts et conseils pour bien démarrer chaque main.',
  keywords: 'stratégie préflop, ranges poker, 3-bet, 4-bet, opening ranges, défense blinds, GTO poker, charts préflop',
  openGraph: {
    title: 'Stratégie Préflop au Poker - Guide Poker | Rounders Pro',
    description: 'Apprenez les ranges d\'ouverture optimales et la stratégie préflop avancée pour dominer dès le début.',
    url: 'https://www.rounders.pro/guide-poker/preflop-strategy',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/preflop-strategy',
  },
};

export default function PreflopStrategyLayout({ children }) {
  return <>{children}</>;
}