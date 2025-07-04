// app/guide-stake/crypto/layout.js
export const metadata = {
  title: 'Cryptos sur Stake | Guide Coinbase et Dépôts 2025 - Rounders Pro',
  description: 'Guide 2025 pour acheter des cryptos avec Coinbase et déposer sur Stake. Méthodes de dépôt, retrait, cryptos acceptées par Rounders Pro.',
  keywords: 'stake crypto, stake bitcoin, stake coinbase, stake depot, stake retrait, rounders pro',
  openGraph: {
    title: 'Cryptos sur Stake | Guide Coinbase et Dépôts 2025 - Rounders Pro',
    description: 'Guide 2025 pour acheter des cryptos et déposer sur Stake. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/crypto',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Cryptos Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cryptos sur Stake | Guide Coinbase et Dépôts 2025 - Rounders Pro',
    description: 'Guide 2025 pour acheter des cryptos et déposer sur Stake. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/crypto',
  },
};

export default function CryptoLayout({ children }) {
  return children;
}