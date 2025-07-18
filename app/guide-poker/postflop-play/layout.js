// app/guide-poker/postflop-play/layout.js
export const metadata = {
  title: 'Jeu Postflop au Poker - Guide Poker | Rounders Pro',
  description: 'Maîtrisez le jeu postflop : c-bet, value bet, pot control, lecture du board. Apprenez à naviguer flop, turn et river comme un professionnel.',
  keywords: 'postflop poker, c-bet, value bet, pot control, texture flop, turn play, river décisions, floating poker',
  openGraph: {
    title: 'Jeu Postflop au Poker - Guide Poker | Rounders Pro',
    description: 'Guide complet du jeu postflop : concepts essentiels pour dominer après le flop.',
    url: 'https://www.rounders.pro/guide-poker/postflop-play',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/postflop-play',
  },
};

export default function PostflopPlayLayout({ children }) {
  return <>{children}</>;
}