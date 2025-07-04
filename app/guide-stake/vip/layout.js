// app/guide-stake/vip/layout.js
export const metadata = {
  title: 'Programme VIP Stake | 15 Niveaux & Récompenses - Rounders Pro 2025',
  description: 'Guide 2025 du programme VIP Stake : de Bronze à Obsidienne, découvrez bonus, rakeback, et reloads quotidiens. Bonus cash exclusifs Rounders Pro inclus.',
  keywords: 'stake vip, stake programme vip, stake niveaux, stake bronze, stake platine, stake diamant, rounders pro',
  openGraph: {
    title: 'Programme VIP Stake | 15 Niveaux & Récompenses - Rounders Pro 2025',
    description: 'Guide 2025 du programme VIP Stake : bonus, rakeback, reloads. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/vip',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Programme VIP Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programme VIP Stake | 15 Niveaux & Récompenses - Rounders Pro 2025',
    description: 'Guide 2025 du programme VIP Stake : bonus, rakeback. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/vip',
  },
};

export default function VipLayout({ children }) {
  return children;
}