// app/guide-paris-sportifs/analyse-matchs/layout.js
export const metadata = {
  title: 'Analyse des Matchs - Guide Paris Sportifs | Rounders Pro',
  description: 'Apprenez à analyser un match comme un pro : statistiques, forme des équipes, confrontations directes et contexte. Méthodologie complète pour identifier les value bets.',
  keywords: 'analyse match, statistiques football, expected goals, xG, forme équipe, confrontations directes, H2H, analyse contextuelle, value betting',
  openGraph: {
    title: 'Analyse des Matchs - Guide Paris Sportifs | Rounders Pro',
    description: 'Méthodologie complète pour analyser un match : stats, forme, H2H et contexte. Devenez un analyste expert.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/analyse-matchs',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/analyse-matchs',
  },
};

export default function AnalyseMatchsLayout({ children }) {
  return <>{children}</>;
}