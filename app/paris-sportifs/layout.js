export const metadata = {
  title: 'Outils Paris Sportifs Gratuits - Montante, Martingale | Rounders Pro',
  description: 'Suite d\'outils gratuits pour optimiser vos paris sportifs : calculateur de montante, gestion martingale, suivi bankroll. Interface simple et résultats en temps réel.',
  keywords: 'paris sportifs, montante, martingale, gestion bankroll, calculateur paris, stratégie paris sportifs, outils paris gratuits',
  openGraph: {
    title: 'Outils Paris Sportifs Gratuits - Rounders Pro',
    description: 'Optimisez vos stratégies de paris avec nos outils gratuits',
    type: 'website',
  },
}

export default function ParisSporifsLayout({ children }) {
  return (
    <div className="paris-sportifs-layout">
      {children}
    </div>
  )
}