export const metadata = {
  title: 'Roue de la Fortune Stake - Gagnez jusqu\'à 50€ | Rounders.pro',
  description: 'Tentez votre chance à la Roue de la Fortune Stake et gagnez jusqu\'à 50€ par jour ! Jeu gratuit exclusif pour les membres Rounders.',
  keywords: 'roue de la fortune stake, gagner argent stake, jeu gratuit casino, rounders bonus, stake casino bonus',
  openGraph: {
    title: 'Roue de la Fortune Stake - Gagnez jusqu\'à 50€',
    description: 'Tournez la roue et gagnez jusqu\'à 50€ par jour sur Stake !',
    url: 'https://www.rounders.pro/jeu-roue',
    siteName: 'Rounders.pro',
    type: 'website',
    images: [
      {
        url: '/images/roue-fortune-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Roue de la Fortune Stake'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roue de la Fortune Stake - Gagnez jusqu\'à 50€',
    description: 'Tournez la roue et gagnez jusqu\'à 50€ par jour sur Stake !',
    images: ['/images/roue-fortune-twitter.jpg']
  },
  alternates: {
    canonical: 'https://www.rounders.pro/jeu-roue'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function JeuRoueLayout({ children }) {
  return children;
}