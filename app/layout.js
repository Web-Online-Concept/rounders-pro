// app/layout.js
import './globals.css'; // Ajout pour charger Tailwind
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Rounders Pro | Bonus Stake 200€ & Guide VIP 2025',
  description: 'Obtenez jusqu’à 200€ de bonus cash et 10% de rakeback sur Stake avec Rounders Pro. Guide VIP, stratégies, et avantages exclusifs pour joueurs français.',
  keywords: 'rounders pro, stake bonus, code promo stake, guide vip, affiliation stake, casino crypto',
  openGraph: {
    title: 'Rounders Pro | Bonus Stake 200€ & Guide VIP 2025',
    description: 'Obtenez jusqu’à 200€ de bonus cash et 10% de rakeback sur Stake avec Rounders Pro. Guide complet pour joueurs français.',
    url: 'https://www.rounders.pro',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Bonus Stake VIP',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders Pro | Bonus Stake 200€ & Guide VIP 2025',
    description: 'Bonus jusqu’à 200€ et 10% rakeback sur Stake avec Rounders Pro.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}