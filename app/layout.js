// app/layout.js
import './globals.css'; // Ajout pour charger Tailwind
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Rounders Pro | Paris Sportifs & Bonus Stake 200€',
  description: 'Paris sportifs gagnants avec nos montantes et martingales. Pronostics experts + Bonus jusqu\'à 200€ sur Stake. Stratégies éprouvées et résultats transparents.',
  keywords: 'rounders pro, paris sportifs, montantes, martingales, pronostics sportifs, stake bonus, affiliation stake, pronos, stratégies paris',
  openGraph: {
    title: 'Rounders Pro | Paris Sportifs & Bonus Stake',
    description: 'Découvrez nos paris sportifs gagnants : montantes, martingales et pronos experts. PLUS bonus exclusifs jusqu\'à 200€ sur la plateforme Stake.',
    url: 'https://www.rounders.pro',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-pro.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Paris Sportifs & Bonus Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders Pro | Paris Sportifs & Bonus Stake 200€',
    description: 'Paris sportifs experts + Bonus jusqu\'à 200€ sur Stake. Montantes, martingales et pronos.',
    images: ['/images/og-rounders-pro.jpg'],
    creator: '@rounders_pro',
  },
  alternates: {
    canonical: 'https://www.rounders.pro',
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
    google: 'votre-code-verification-google',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rounders Pro",
              "url": "https://www.rounders.pro",
              "logo": "https://www.rounders.pro/logo.png",
              "description": "Paris sportifs et affiliation Stake. Montantes, martingales et pronostics experts.",
              "sameAs": [
                "https://x.com/rounders_pro"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Paris Sportifs",
                  "description": "Montantes, martingales et pronostics experts"
                },
                {
                  "@type": "Offer", 
                  "name": "Bonus Stake Affiliation",
                  "description": "Jusqu'à 200€ de bonus exclusifs"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}