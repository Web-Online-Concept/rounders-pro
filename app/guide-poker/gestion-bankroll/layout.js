// app/guide-poker/gestion-bankroll/layout.js
export const metadata = {
  title: 'Gestion de Bankroll au Poker - Guide Poker | Rounders Pro',
  description: 'Apprenez à gérer votre capital au poker : règles de bankroll management, variance, montée de limites. La clé pour survivre et prospérer à long terme.',
  keywords: 'bankroll poker, gestion capital poker, variance poker, BRM, montée limites, downswing, bankroll management',
  openGraph: {
    title: 'Gestion de Bankroll au Poker - Guide Poker | Rounders Pro',
    description: 'Guide complet du bankroll management : protégez votre capital et progressez sereinement.',
    url: 'https://www.rounders.pro/guide-poker/gestion-bankroll',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker/gestion-bankroll',
  },
};

export default function GestionBankrollLayout({ children }) {
  return <>{children}</>;
}