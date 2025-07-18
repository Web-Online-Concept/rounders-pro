import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
import GuidePokerSidebar from './GuidePokerSidebar';

export const metadata = {
  title: 'Guide Complet du Poker | Stratégies & Techniques Pro - Rounders Pro',
  description: 'Guide ultime du poker : maîtrisez les règles, stratégies, probabilités, tells et bankroll management. Devenez un joueur de poker professionnel.',
  keywords: 'guide poker, stratégie poker, texas holdem, probabilités poker, tells, bluff, bankroll poker, rounders pro',
  openGraph: {
    title: 'Guide Complet du Poker | Stratégies & Techniques Pro - Rounders Pro',
    description: 'Guide ultime du poker : maîtrisez les règles, stratégies, probabilités et bankroll management.',
    url: 'https://www.rounders.pro/guide-poker',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-guide-poker.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Poker',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet du Poker | Stratégies Pro - Rounders Pro',
    description: 'Maîtrisez le poker avec notre guide complet : stratégies, probabilités, tells et bluff.',
    images: ['/images/og-guide-poker.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-poker',
  },
};

export default function GuidePokerLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <GuidePokerSidebar />
        <main className="flex-1 bg-white pb-20 md:pb-8">
          <div className="max-w-4xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
      <Footer />
      <BottomBar />
    </div>
  );
}