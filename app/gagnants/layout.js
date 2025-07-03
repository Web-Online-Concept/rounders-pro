export const metadata = {
  title: 'Gagnants de la Roue de la Fortune | Rounders.pro',
  description: 'Découvrez tous les gagnants de la Roue de la Fortune Stake. Plus de 1000€ déjà distribués ! Vérifiez les derniers gains et tentez votre chance.',
  keywords: 'gagnants stake, roue fortune gagnants, gains stake casino, rounders winners',
  openGraph: {
    title: 'Tous les Gagnants - Roue de la Fortune Stake',
    description: 'Liste complète des gagnants de la Roue de la Fortune. Gagnez jusqu\'à 50€ par jour !',
    url: 'https://www.rounders.pro/gagnants',
    siteName: 'Rounders.pro',
    type: 'website',
    images: [
      {
        url: '/images/gagnants-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Gagnants Roue de la Fortune Stake'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gagnants de la Roue de la Fortune Stake',
    description: 'Découvrez tous ceux qui ont gagné à la Roue de la Fortune !',
    images: ['/images/gagnants-twitter.jpg']
  },
  alternates: {
    canonical: 'https://www.rounders.pro/gagnants'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function GagnantsLayout({ children }) {
  return children;
}