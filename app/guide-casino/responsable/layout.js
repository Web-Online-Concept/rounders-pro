// app/guide-casino/responsable/layout.js
export const metadata = {
  title: 'Jouer Responsable - Guide Casino | Rounders Pro',
  description: 'Guide complet du jeu responsable : limites, outils de contrôle, auto-évaluation, ressources d\'aide et maintenir le casino comme divertissement sain.',
  keywords: 'jeu responsable, limites casino, auto-exclusion, aide addiction jeu, contrôle casino, ressources aide joueurs',
  openGraph: {
    title: 'Guide du Jeu Responsable au Casino | Rounders Pro',
    description: 'Apprenez à maintenir le contrôle et faire du casino un divertissement sain. Outils, limites et ressources.',
    url: 'https://www.rounders.pro/guide-casino/responsable',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/responsable',
  },
};

export default function ResponsableLayout({ children }) {
  return <>{children}</>;
}