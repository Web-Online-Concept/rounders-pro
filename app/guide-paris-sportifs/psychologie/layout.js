// app/guide-paris-sportifs/psychologie/layout.js
export const metadata = {
  title: 'Psychologie du Parieur - Guide Paris Sportifs | Rounders Pro',
  description: 'Maîtrisez le mental du parieur : biais cognitifs, gestion des émotions, techniques de contrôle. La psychologie représente 80% du succès aux paris sportifs.',
  keywords: 'psychologie paris sportifs, mental parieur, biais cognitifs, tilt betting, gestion émotions, mindset professionnel, variance mentale',
  openGraph: {
    title: 'Psychologie du Parieur - Maîtrisez votre Mental | Rounders Pro',
    description: 'Le guide complet pour développer le mental d\'acier du parieur professionnel. Techniques, exercices et stratégies psychologiques.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/psychologie',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/psychologie',
  },
};

export default function PsychologieLayout({ children }) {
  return <>{children}</>;
}