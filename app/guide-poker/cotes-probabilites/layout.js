// app/guide-poker/cotes-probabilites/layout.js
export const metadata = {
  title: 'Cotes et Probabilités au Poker - Guide Poker | Rounders Pro',
  description: 'Maîtrisez les mathématiques du poker : pot odds, implied odds, équité, outs. Apprenez à calculer rapidement pour prendre les bonnes décisions.',
  keywords: 'cotes poker, pot odds, implied odds, équité poker, outs poker, probabilités poker, mathématiques poker, EV expected value',
  openGraph: {
    title: 'Cotes et Probabilités au Poker - Guide Poker | Rounders Pro',
    description: 'Guide complet des mathématiques du poker : calculs essentiels pour des décisions profitables.',
    url: 'https://www.rounders.pro/guide-poker/cotes-probabilites',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/cotes-probabilites',
  },
};

export default function CotesProbabilitesLayout({ children }) {
  return <>{children}</>;
}