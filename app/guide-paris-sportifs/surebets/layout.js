// app/guide-paris-sportifs/surebets/layout.js
export const metadata = {
  title: 'Surebets & Arbitrage - Guide Paris Sportifs | Rounders Pro',
  description: 'Découvrez l\'arbitrage sportif : la méthode pour garantir des profits. Surebets, middles, calculs, outils et stratégies pour éviter les limitations.',
  keywords: 'surebets, arbitrage sportif, arbitrage betting, surebet calculator, middles betting, paris sans risque, scanner surebets',
  openGraph: {
    title: 'Surebets & Arbitrage - Profits Garantis | Rounders Pro',
    description: 'Guide complet de l\'arbitrage sportif : techniques, calculs, outils et pièges à éviter pour des profits garantis.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/surebets',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/surebets',
  },
};

export default function SurebetsLayout({ children }) {
  return <>{children}</>;
}