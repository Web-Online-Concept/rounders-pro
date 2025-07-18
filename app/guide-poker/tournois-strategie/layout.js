// app/guide-poker/tournois-strategie/layout.js
export const metadata = {
  title: 'Stratégie Tournois MTT - Guide Poker | Rounders Pro',
  description: 'Maîtrisez la stratégie des tournois de poker : ICM, bubble play, stack management, phases de jeu. Devenez un champion des MTT avec notre guide complet.',
  keywords: 'stratégie tournoi poker, MTT poker, ICM, bubble factor, stack management, final table, tournoi poker stratégie',
  openGraph: {
    title: 'Stratégie Tournois MTT - Guide Poker | Rounders Pro',
    description: 'Guide complet pour dominer les tournois : ICM, gestion des phases et stratégies gagnantes.',
    url: 'https://www.rounders.pro/guide-poker/tournois-strategie',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/tournois-strategie',
  },
};

export default function TournoisStrategieLayout({ children }) {
  return <>{children}</>;
}