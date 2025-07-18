// app/guide-casino/gestion-bankroll/layout.js
export const metadata = {
  title: 'Gestion de Bankroll - Guide Casino | Rounders Pro',
  description: 'Maîtrisez la gestion de bankroll au casino : calculs, stratégies par jeu, risk of ruin, systèmes de progression et protection du capital.',
  keywords: 'bankroll casino, gestion bankroll, money management, risk of ruin, bankroll management, sessions casino, limites casino',
  openGraph: {
    title: 'Gestion de Bankroll Professionnelle | Rounders Pro',
    description: 'La compétence essentielle pour durer au casino. Techniques et stratégies de gestion du capital.',
    url: 'https://www.rounders.pro/guide-casino/gestion-bankroll',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/gestion-bankroll',
  },
};

export default function GestionBankrollLayout({ children }) {
  return <>{children}</>;
}