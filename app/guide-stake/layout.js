// app/guide-stake/layout.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
import GuideSidebar from './GuideSidebar';

export const metadata = {
  title: 'Guide Ultime Stake | Casino, Sports & Crypto - Rounders Pro',
  description: 'Guide complet pour maîtriser Stake : inscription, bonus VIP, rakeback, stratégies pour casino et paris sportifs crypto. Par Rounders Pro.',
  keywords: 'guide stake, stake casino, stake tutorial, stake france, rounders pro, bonus vip stake',
  openGraph: {
    title: 'Guide Ultime Stake | Casino, Sports & Crypto - Rounders Pro',
    description: 'Guide complet pour maîtriser Stake : inscription, bonus VIP, rakeback, stratégies pour casino et paris sportifs crypto.',
    url: 'https://www.rounders.pro/guide-stake',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Stake',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Ultime Stake | Casino, Sports & Crypto - Rounders Pro',
    description: 'Maîtrisez Stake avec notre guide : inscription, bonus VIP, rakeback, stratégies.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-stake',
  },
};

export default function GuideLayout({ children }) {
  return (
    <>
      <Header />
      <div className="md:flex">
        <GuideSidebar />
        <main className="flex-1 min-h-screen bg-white pb-20 md:pb-0">
          <div className="max-w-4xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
      <Footer />
      <BottomBar />
    </>
  );
}