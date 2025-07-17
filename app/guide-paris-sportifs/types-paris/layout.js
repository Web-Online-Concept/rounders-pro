// app/guide-paris-sportifs/types-paris/layout.js
export const metadata = {
  title: 'Types de Paris Sportifs - Guide Complet | Rounders Pro',
  description: 'Découvrez tous les types de paris : simple, combiné, système, handicap, over/under. Avantages, inconvénients et stratégies pour chaque type de pari.',
  keywords: 'types paris sportifs, pari simple, pari combiné, pari système, handicap, over under, BTTS, double chance, paris live',
  openGraph: {
    title: 'Types de Paris Sportifs - Guide Complet | Rounders Pro',
    description: 'Maîtrisez tous les types de paris sportifs : du simple au système complexe. Guide détaillé avec exemples et stratégies.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/types-paris',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/types-paris',
  },
};

export default function TypesParisLayout({ children }) {
  return <>{children}</>;
}