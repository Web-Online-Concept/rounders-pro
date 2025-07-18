// app/guide-poker/cash-game/layout.js
export const metadata = {
  title: 'Stratégie Cash Game - Guide Poker | Rounders Pro',
  description: 'Maîtrisez le cash game : stratégies deep stack, exploitation des récréatifs, sélection de tables. Devenez un grinder profitable avec notre guide complet.',
  keywords: 'cash game poker, stratégie cash game, deep stack poker, table selection, grinder poker, NL holdem cash',
  openGraph: {
    title: 'Stratégie Cash Game - Guide Poker | Rounders Pro',
    description: 'Guide complet du cash game : techniques pour battre les parties et construire un winrate solide.',
    url: 'https://www.rounders.pro/guide-poker/cash-game',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/cash-game',
  },
};

export default function CashGameLayout({ children }) {
  return <>{children}</>;
}