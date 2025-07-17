// app/guide-paris-sportifs/comprendre-cotes/layout.js
export const metadata = {
  title: 'Comprendre les Cotes - Guide Paris Sportifs | Rounders Pro',
  description: 'Maîtrisez les cotes des paris sportifs : formats décimaux, fractionnels et américains. Calculez vos gains, comprenez les probabilités et la marge des bookmakers.',
  keywords: 'comprendre cotes, cotes décimales, cotes fractionnelles, cotes américaines, probabilités paris, calcul gains, marge bookmaker',
  openGraph: {
    title: 'Comprendre les Cotes - Guide Paris Sportifs | Rounders Pro',
    description: 'Tout savoir sur les cotes : formats, calculs, probabilités et marges. Guide complet pour maîtriser cet aspect essentiel des paris sportifs.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/comprendre-cotes',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/comprendre-cotes',
  },
};

export default function ComprendreCotesLayout({ children }) {
  return <>{children}</>;
}