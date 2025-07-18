// app/guide-poker/tells-psychologie/layout.js
export const metadata = {
  title: 'Tells et Psychologie au Poker - Guide Poker | Rounders Pro',
  description: 'Maîtrisez l\'aspect mental du poker : lecture des tells, contrôle émotionnel, gestion du tilt. Développez un mental de champion pour dominer vos adversaires.',
  keywords: 'tells poker, psychologie poker, lecture adversaire, tilt poker, mental game, contrôle émotionnel, poker tells',
  openGraph: {
    title: 'Tells et Psychologie au Poker - Guide Poker | Rounders Pro',
    description: 'Guide complet de la psychologie au poker : tells, mental game et contrôle émotionnel.',
    url: 'https://www.rounders.pro/guide-poker/tells-psychologie',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/tells-psychologie',
  },
};

export default function TellsPsychologieLayout({ children }) {
  return <>{children}</>;
}