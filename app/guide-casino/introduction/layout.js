// app/guide-casino/introduction/layout.js
export const metadata = {
  title: 'Introduction au Casino - Guide Casino | Rounders Pro',
  description: 'Découvrez l\'univers du casino en ligne : types de jeux, fonctionnement, vocabulaire essentiel et conseils pour bien débuter en toute sécurité.',
  keywords: 'casino en ligne, introduction casino, débuter casino, guide casino, jeux casino, RTP, RNG, casino débutant',
  openGraph: {
    title: 'Introduction au Casino en Ligne | Rounders Pro',
    description: 'Guide complet pour découvrir et comprendre l\'univers du casino en ligne. Tout ce qu\'il faut savoir pour bien commencer.',
    url: 'https://www.rounders.pro/guide-casino/introduction',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/introduction',
  },
};

export default function IntroductionLayout({ children }) {
  return <>{children}</>;
}