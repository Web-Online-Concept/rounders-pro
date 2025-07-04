// app/guide-stake/introduction/layout.js
export const metadata = {
  title: 'Introduction à Stake | Présentation Complète - Rounders Pro',
  description: 'Découvrez Stake, la plateforme leader de casino et paris sportifs crypto. Histoire, fonctionnement, avantages exclusifs. Guide par Rounders Pro.',
  keywords: 'stake introduction, qu\'est-ce que stake, stake présentation, rounders pro',
  openGraph: {
    title: 'Introduction à Stake | Présentation Complète - Rounders Pro',
    description: 'Découvrez Stake, la plateforme leader de casino et paris sportifs crypto. Guide complet par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/introduction',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Introduction à Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introduction à Stake | Présentation Complète - Rounders Pro',
    description: 'Découvrez Stake : casino et paris crypto. Guide complet par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/introduction',
  },
};

export default function GuideIntroductionLayout({ children }) {
  return children;
}