// app/guide-casino/psychologie/layout.js
export const metadata = {
  title: 'Psychologie du Joueur - Guide Casino | Rounders Pro',
  description: 'Maîtrisez la psychologie du jeu : gestion des émotions, biais cognitifs, tilt et développement de la discipline mentale au casino.',
  keywords: 'psychologie casino, mental joueur, gestion émotions, tilt casino, biais cognitifs, discipline jeu',
  openGraph: {
    title: 'Psychologie du Joueur de Casino | Rounders Pro',
    description: 'Le mental fait 80% du succès. Apprenez à maîtriser vos émotions et développer une discipline de fer.',
    url: 'https://www.rounders.pro/guide-casino/psychologie',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/psychologie',
  },
};

export default function PsychologieLayout({ children }) {
  return <>{children}</>;
}