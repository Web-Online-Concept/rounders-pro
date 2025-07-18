// app/guide-poker/regles-base/layout.js
export const metadata = {
  title: 'Règles et Variantes du Poker - Guide Poker | Rounders Pro',
  description: 'Apprenez les règles du Texas Hold\'em, Omaha, Stud et autres variantes. Guide complet avec le déroulement des parties, les actions possibles et les spécificités de chaque variante.',
  keywords: 'règles poker, texas holdem, omaha, stud poker, variantes poker, comment jouer poker, rounders pro',
  openGraph: {
    title: 'Règles et Variantes du Poker - Guide Poker | Rounders Pro',
    description: 'Maîtrisez les règles de toutes les variantes du poker : Texas Hold\'em, Omaha, Stud et plus.',
    url: 'https://www.rounders.pro/guide-poker/regles-base',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/regles-base',
  },
};

export default function ReglesBaseLayout({ children }) {
  return <>{children}</>;
}