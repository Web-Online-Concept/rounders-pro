export const metadata = {
  title: 'Top Jeux Stake Rentables | RTP 99% + Stratégies Gagnantes',
  description: 'Sélection exclusive des jeux Stake les plus rentables : Plinko, Mines, Dice. RTP jusqu\'à 99%, stratégies testées, gains maximisés. Guide gratuit inclus.',
  keywords: 'jeux stake rentables, stake rtp 99, strategies stake, meilleurs jeux stake',
  openGraph: {
    title: 'Top Jeux Stake Rentables | RTP 99% + Stratégies Gagnantes',
    description: 'Sélection exclusive des jeux Stake les plus rentables : Plinko, Mines, Dice. RTP jusqu\'à 99%, stratégies testées, gains maximisés. Guide gratuit inclus.',
    url: 'https://www.rounders.pro/nos-jeux',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Top Jeux Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Jeux Stake Rentables | RTP 99% + Stratégies Gagnantes',
    description: 'Sélection exclusive des jeux Stake les plus rentables. RTP jusqu\'à 99%, stratégies testées.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/nos-jeux',
  },
};

export default function NosJeuxLayout({ children }) {
  return children;
}