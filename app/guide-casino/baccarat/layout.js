// app/guide-casino/baccarat/layout.js
export const metadata = {
  title: 'Le Baccarat - Guide Casino | Rounders Pro',
  description: 'Guide complet du Baccarat : règles, stratégies, variantes et pourquoi c\'est le jeu préféré des high rollers. Apprenez à jouer comme un pro.',
  keywords: 'baccarat casino, punto banco, stratégie baccarat, règles baccarat, banker player tie, commission baccarat',
  openGraph: {
    title: 'Maîtrisez le Baccarat - Jeu des High Rollers | Rounders Pro',
    description: 'Découvrez pourquoi le Baccarat est le jeu de casino avec le plus faible avantage maison et comment en profiter.',
    url: 'https://www.rounders.pro/guide-casino/baccarat',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/baccarat',
  },
};

export default function BaccaratLayout({ children }) {
  return <>{children}</>;
}