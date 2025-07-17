// app/guide-paris-sportifs/erreurs-eviter/layout.js
export const metadata = {
  title: 'Erreurs à Éviter - Guide Paris Sportifs | Rounders Pro',
  description: 'Les 10 erreurs fatales qui ruinent 90% des parieurs. Apprenez à les identifier et les éviter pour protéger votre bankroll et devenir profitable.',
  keywords: 'erreurs paris sportifs, pièges parieurs, chasing losses, bankroll management, paris émotionnels, erreurs débutants, conseils paris',
  openGraph: {
    title: 'Les Erreurs Fatales des Parieurs - Guide Complet | Rounders Pro',
    description: 'Découvrez les 10 erreurs qui font perdre 90% des parieurs et comment les éviter pour devenir profitable.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/erreurs-eviter',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/erreurs-eviter',
  },
};

export default function ErreursEviterLayout({ children }) {
  return <>{children}</>;
}