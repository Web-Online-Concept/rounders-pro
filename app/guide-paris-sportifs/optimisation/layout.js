// app/guide-paris-sportifs/optimisation/layout.js
export const metadata = {
  title: 'Optimisation des Paris Sportifs - Guide Avancé | Rounders Pro',
  description: 'Techniques d\'optimisation avancées : multi-comptes, timing, bonus, automatisation. Maximisez votre ROI avec ces stratégies professionnelles.',
  keywords: 'optimisation paris sportifs, multi-comptes, comparateur cotes, bonus betting, automatisation paris, ROI optimisation, techniques avancées',
  openGraph: {
    title: 'Optimisation Avancée - Maximisez vos Profits | Rounders Pro',
    description: 'Découvrez les techniques d\'optimisation qui font la différence entre amateurs et professionnels des paris sportifs.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/optimisation',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/optimisation',
  },
};

export default function OptimisationLayout({ children }) {
  return <>{children}</>;
}