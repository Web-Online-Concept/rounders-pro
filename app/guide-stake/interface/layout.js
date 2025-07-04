// app/guide-stake/interface/layout.js
export const metadata = {
  title: 'Interface Stake | Guide Navigation - Rounders Pro',
  description: 'Maîtrisez l’interface de Stake : navigation, sections, paramètres. Guide visuel complet par Rounders Pro pour optimiser votre expérience.',
  keywords: 'interface stake, navigation stake, stake tutoriel, rounders pro',
  openGraph: {
    title: 'Interface Stake | Guide Navigation - Rounders Pro',
    description: 'Guide pour maîtriser l’interface Stake : navigation, paramètres. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/interface',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Interface Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interface Stake | Guide Navigation - Rounders Pro',
    description: 'Guide pour l’interface Stake : navigation, paramètres. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/interface',
  },
};

export default function InterfaceLayout({ children }) {
  return children;
}