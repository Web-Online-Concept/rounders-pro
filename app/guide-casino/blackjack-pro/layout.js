// app/guide-casino/blackjack-pro/layout.js
export const metadata = {
  title: 'Le Blackjack Pro - Guide Casino | Rounders Pro',
  description: 'Guide complet du Blackjack : stratégie de base, comptage de cartes, gestion de bankroll et techniques professionnelles pour minimiser l\'avantage maison.',
  keywords: 'blackjack stratégie, stratégie de base, comptage cartes, hi-lo, blackjack pro, règles blackjack, tableau blackjack',
  openGraph: {
    title: 'Maîtrisez le Blackjack comme un Pro | Rounders Pro',
    description: 'Stratégie de base, comptage de cartes, variations de règles. Tout pour devenir un expert du Blackjack.',
    url: 'https://www.rounders.pro/guide-casino/blackjack-pro',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/blackjack-pro',
  },
};

export default function BlackjackProLayout({ children }) {
  return <>{children}</>;
}