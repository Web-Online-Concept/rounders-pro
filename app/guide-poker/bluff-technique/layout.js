// app/guide-poker/bluff-technique/layout.js
export const metadata = {
  title: 'L\'Art du Bluff au Poker - Guide Poker | Rounders Pro',
  description: 'Maîtrisez l\'art du bluff : timing, sizing, fréquence, tells inversés. Apprenez quand et comment bluffer efficacement pour maximiser vos profits.',
  keywords: 'bluff poker, technique bluff, semi-bluff, timing bluff, sizing bluff, fréquence bluff, stone cold bluff',
  openGraph: {
    title: 'L\'Art du Bluff au Poker - Guide Poker | Rounders Pro',
    description: 'Guide complet pour bluffer comme un pro : techniques, timing et psychologie du bluff.',
    url: 'https://www.rounders.pro/guide-poker/bluff-technique',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/bluff-technique',
  },
};

export default function BluffTechniqueLayout({ children }) {
  return <>{children}</>;
}