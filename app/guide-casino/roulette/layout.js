// app/guide-casino/roulette/layout.js
export const metadata = {
  title: 'La Roulette Maîtrisée - Guide Casino | Rounders Pro',
  description: 'Guide complet de la roulette : types, probabilités, systèmes de mise, stratégies et conseils pour optimiser votre jeu à la roulette européenne.',
  keywords: 'roulette casino, roulette européenne, roulette française, systèmes mise, martingale, stratégie roulette, probabilités roulette',
  openGraph: {
    title: 'Maîtrisez la Roulette du Casino | Rounders Pro',
    description: 'Tout comprendre sur la roulette : variantes, probabilités, systèmes de mise et stratégies intelligentes.',
    url: 'https://www.rounders.pro/guide-casino/roulette',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/roulette',
  },
};

export default function RouletteLayout({ children }) {
  return <>{children}</>;
}