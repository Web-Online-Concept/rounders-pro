import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rounders Pro - Bonus Cash Exclusifs Stake | 5%+ Rakeback',
  description: 'Obtenez jusqu\'à 200€ de bonus cash exclusifs et 5%+ de rakeback instantané sur Stake. Guide complet, bonus VIP et code promo rounders.',
  keywords: 'stake, stake bonus, stake france, rounders stake, stake rakeback, stake vip, bonus stake, code promo stake',
  metadataBase: new URL('https://rounders.pro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rounders Pro - Bonus Cash Exclusifs Stake',
    description: 'Obtenez jusqu\'à 200€ de bonus cash exclusifs et 5%+ de rakeback sur Stake',
    url: 'https://rounders.pro',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders Pro - Bonus Stake Exclusifs',
    description: 'Jusqu\'à 200€ de bonus + 5% rakeback instantané',
    creator: '@rounders_pro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T2ZG9XKRVZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T2ZG9XKRVZ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}