// app/guide-poker/introduction/layout.js
export const metadata = {
  title: 'Introduction au Poker - Guide Poker | Rounders Pro',
  description: 'Découvrez l\'univers fascinant du poker : histoire, popularité mondiale, pourquoi c\'est un jeu de stratégie et comment débuter votre apprentissage.',
  keywords: 'introduction poker, débuter poker, apprendre poker, histoire poker, poker stratégie, rounders pro',
  openGraph: {
    title: 'Introduction au Poker - Guide Poker | Rounders Pro',
    description: 'Découvrez pourquoi le poker est plus qu\'un jeu de cartes : stratégie, psychologie et compétences.',
    url: 'https://www.rounders.pro/guide-poker/introduction',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/introduction',
  },
};

export default function IntroductionLayout({ children }) {
  return <>{children}</>;
}