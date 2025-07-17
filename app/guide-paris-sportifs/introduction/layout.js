// app/guide-paris-sportifs/introduction/layout.js
export const metadata = {
  title: 'Introduction aux Paris Sportifs - Guide Complet | Rounders Pro',
  description: 'Découvrez les bases des paris sportifs : vocabulaire essentiel, types de parieurs, règles d\'or. Le point de départ idéal pour devenir un parieur profitable.',
  keywords: 'introduction paris sportifs, débuter paris, vocabulaire paris sportifs, bases paris sportifs, guide débutant',
  openGraph: {
    title: 'Introduction aux Paris Sportifs - Guide Complet | Rounders Pro',
    description: 'Découvrez les bases des paris sportifs : vocabulaire essentiel, types de parieurs, règles d\'or.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/introduction',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/introduction',
  },
};

export default function IntroductionLayout({ children }) {
  return <>{children}</>;
}