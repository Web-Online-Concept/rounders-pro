// app/guide-paris-sportifs/value-betting/layout.js
export const metadata = {
  title: 'Value Betting - Guide Paris Sportifs | Rounders Pro',
  description: 'Maîtrisez le value betting : la méthode mathématique pour battre les bookmakers. Formules, identification de la value, gestion optimale.',
  keywords: 'value betting, expected value, EV betting, battre bookmakers, probabilités paris, CLV, value bet, paris sportifs rentables',
  openGraph: {
    title: 'Value Betting - La Clé de la Rentabilité | Rounders Pro',
    description: 'Le concept fondamental pour gagner aux paris sportifs. Apprenez à identifier et exploiter les cotes surévaluées.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/value-betting',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/value-betting',
  },
};

export default function ValueBettingLayout({ children }) {
  return <>{children}</>;
}