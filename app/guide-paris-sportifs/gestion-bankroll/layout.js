// app/guide-paris-sportifs/gestion-bankroll/layout.js
export const metadata = {
  title: 'Gestion de Bankroll - Guide Paris Sportifs | Rounders Pro',
  description: 'Maîtrisez la gestion de bankroll : stratégies de mise, critère de Kelly, gestion du risque. La compétence essentielle pour être rentable aux paris sportifs.',
  keywords: 'gestion bankroll, money management, stratégies mise, critère kelly, flat betting, unités paris, gestion risque, ROI paris sportifs',
  openGraph: {
    title: 'Gestion de Bankroll - Guide Paris Sportifs | Rounders Pro',
    description: 'La clé de la rentabilité aux paris sportifs : apprenez à gérer votre capital comme un professionnel.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/gestion-bankroll',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/gestion-bankroll',
  },
};

export default function GestionBankrollLayout({ children }) {
  return <>{children}</>;
}