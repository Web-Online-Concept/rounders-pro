// app/guide-casino/mathematiques/layout.js
export const metadata = {
  title: 'Mathématiques du Casino - Guide Casino | Rounders Pro',
  description: 'Comprenez les mathématiques du casino : avantage maison, RTP, variance, probabilités et expected value. La vérité sur les chances de gagner.',
  keywords: 'mathématiques casino, house edge, RTP, variance casino, probabilités jeux, expected value, avantage maison',
  openGraph: {
    title: 'Les Mathématiques du Casino Expliquées | Rounders Pro',
    description: 'Découvrez la vérité mathématique derrière chaque jeu de casino et pourquoi la maison gagne toujours.',
    url: 'https://www.rounders.pro/guide-casino/mathematiques',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/mathematiques',
  },
};

export default function MathematiquesLayout({ children }) {
  return <>{children}</>;
}