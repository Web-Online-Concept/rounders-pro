// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Rounders.pro - Guide Stake & Bonus VIP jusqu\'à 200€ | Casino Crypto',
  description: 'Maximisez vos gains sur Stake avec Rounders. Guide complet en français, bonus cash exclusifs jusqu\'à 200€ par niveau VIP, stratégies et support dédié.',
  keywords: 'stake, stake casino, stake france, stake bonus, stake vip, stake guide, casino crypto, rounders pro, stake affiliation, stake rakeback',
  authors: [{ name: 'Rounders.pro' }],
  creator: 'Rounders.pro',
  publisher: 'Rounders.pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.rounders.pro',
  },
  openGraph: {
    title: 'Rounders.pro - Guide Stake & Bonus VIP jusqu\'à 200€',
    description: 'Le guide ultime pour maximiser vos gains sur Stake. Bonus cash exclusifs, stratégies avancées et support en français.',
    url: 'https://www.rounders.pro',
    siteName: 'Rounders.pro',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders.pro - Guide Stake & Bonus VIP',
    description: 'Maximisez vos gains sur Stake. Bonus cash jusqu\'à 200€ par niveau VIP.',
    creator: '@rounders_pro',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}