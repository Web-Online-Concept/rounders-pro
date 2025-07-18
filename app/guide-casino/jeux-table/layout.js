// app/guide-casino/jeux-table/layout.js
export const metadata = {
  title: 'Les Jeux de Table - Guide Casino | Rounders Pro',
  description: 'Guide complet des jeux de table au casino : Roulette, Blackjack, Baccarat, Craps. Règles, stratégies et comparatif pour chaque jeu.',
  keywords: 'jeux de table casino, roulette, blackjack, baccarat, craps, stratégie casino, règles jeux table',
  openGraph: {
    title: 'Maîtrisez les Jeux de Table du Casino | Rounders Pro',
    description: 'Tout savoir sur la roulette, le blackjack, le baccarat et le craps. Stratégies et conseils d\'experts.',
    url: 'https://www.rounders.pro/guide-casino/jeux-table',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/jeux-table',
  },
};

export default function JeuxTableLayout({ children }) {
  return <>{children}</>;
}