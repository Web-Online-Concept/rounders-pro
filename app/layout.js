// app/layout.js
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

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
    images: [
      {
        url: 'https://www.rounders.pro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders - Guide Stake & Bonus VIP',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders.pro - Guide Stake & Bonus VIP',
    description: 'Maximisez vos gains sur Stake. Bonus cash jusqu\'à 200€ par niveau VIP.',
    creator: '@rounders_pro',
    images: ['https://www.rounders.pro/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google',
    yandex: 'votre-code-yandex',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Préconnexion pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org pour SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rounders.pro",
              "description": "Guide Stake et bonus VIP exclusifs pour joueurs français",
              "url": "https://www.rounders.pro",
              "logo": "https://www.rounders.pro/logo.png",
              "sameAs": [
                "https://x.com/rounders_pro"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "rounders.pro@gmail.com",
                "contactType": "customer support",
                "availableLanguage": ["French"]
              }
            })
          }}
        />
        
        {/* Schema pour les FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Comment obtenir les bonus Rounders sur Stake ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Inscrivez-vous sur Stake avec le code 'rounders', montez en niveau VIP et réclamez vos bonus cash dans l'Espace Affiliés. Bronze 10€, Argent 20€, Or 30€, jusqu'à 200€ au niveau Diamant."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment jouer sur Stake depuis la France ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Utilisez un VPN (Canada, Irlande, Singapour) pour l'inscription initiale. Ensuite, vous pouvez jouer sans VPN grâce au cookie de connexion. Consultez notre guide français complet."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}