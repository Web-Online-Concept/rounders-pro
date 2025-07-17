// app/guide-paris-sportifs/outils-pro/layout.js
export const metadata = {
  title: 'Outils Pro - Guide Paris Sportifs | Rounders Pro',
  description: 'Découvrez les meilleurs outils professionnels pour les paris sportifs : analyse statistique, comparateurs de cotes, tracking, value betting et plus.',
  keywords: 'outils paris sportifs, logiciels betting, comparateur cotes, tracking paris, value betting tools, analyse statistique, fbref, understat',
  openGraph: {
    title: 'Outils Professionnels Paris Sportifs | Rounders Pro',
    description: 'La boîte à outils complète du parieur professionnel : stats, tracking, comparateurs et automatisation.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/outils-pro',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/outils-pro',
  },
};

export default function OutilsProLayout({ children }) {
  return <>{children}</>;
}