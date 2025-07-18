// app/guide-casino/bonus-promotions/layout.js
export const metadata = {
  title: 'Bonus et Promotions - Guide Casino | Rounders Pro',
  description: 'Guide complet des bonus casino : comprendre le wagering, calculer la vraie valeur, éviter les pièges et maximiser chaque promotion.',
  keywords: 'bonus casino, wagering, free spins, cashback, bonus sans dépôt, rollover, contribution jeux, expected value bonus',
  openGraph: {
    title: 'Maîtrisez les Bonus et Promotions Casino | Rounders Pro',
    description: 'Décryptez les conditions, calculez l\'EV et exploitez intelligemment les bonus casino. Guide expert complet.',
    url: 'https://www.rounders.pro/guide-casino/bonus-promotions',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/bonus-promotions',
  },
};

export default function BonusPromotionsLayout({ children }) {
  return <>{children}</>;
}