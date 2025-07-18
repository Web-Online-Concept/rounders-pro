// app/guide-casino/erreurs-eviter/layout.js
export const metadata = {
  title: 'Erreurs à Éviter au Casino - Guide Casino | Rounders Pro',
  description: 'Les pièges et erreurs fatales au casino qui ruinent les joueurs. Apprenez à les identifier et les éviter pour protéger votre bankroll.',
  keywords: 'erreurs casino, pièges casino, éviter pertes, erreurs joueurs, mythes casino, signaux alarme addiction',
  openGraph: {
    title: 'Évitez ces Erreurs Fatales au Casino | Rounders Pro',
    description: 'Guide complet des erreurs qui coûtent cher aux joueurs de casino et comment les éviter.',
    url: 'https://www.rounders.pro/guide-casino/erreurs-eviter',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/erreurs-eviter',
  },
};

export default function ErreursEviterLayout({ children }) {
  return <>{children}</>;
}