// app/guide-stake/faq/layout.js
export const metadata = {
  title: 'FAQ Stake 2025 | Questions Fréquentes et Réponses - Rounders Pro',
  description: 'FAQ 2025 pour Stake : bonus Rounders, programme VIP, jouer depuis la France, cryptos, support. Réponses claires par Rounders Pro.',
  keywords: 'stake faq, rounders faq, stake questions, bonus rounders, stake vip, rounders pro',
  openGraph: {
    title: 'FAQ Stake 2025 | Questions Fréquentes et Réponses - Rounders Pro',
    description: 'FAQ 2025 pour Stake : bonus, VIP, France, cryptos, support. Par Rounders Pro.',
    url: 'https://www.rounders.pro/guide-stake/faq',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide FAQ Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Stake 2025 | Questions Fréquentes et Réponses - Rounders Pro',
    description: 'FAQ 2025 pour Stake : bonus, VIP, France, cryptos, support. Par Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake/faq',
  },
};

export default function FAQLayout({ children }) {
  return children;
}