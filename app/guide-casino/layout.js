import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BottomBar from '../../components/BottomBar';
import GuideCasinoSidebar from './GuideCasinoSidebar';

export const metadata = {
  title: 'Guide Complet Casino | Stratégies & Conseils Pro - Rounders Pro',
  description: 'Guide ultime du casino en ligne : maîtrisez blackjack, roulette, baccarat, slots et gestion de bankroll. Devenez un joueur professionnel.',
  keywords: 'guide casino, stratégies casino, blackjack, roulette, baccarat, machines à sous, gestion bankroll, rounders pro',
  openGraph: {
    title: 'Guide Complet Casino | Stratégies & Conseils Pro - Rounders Pro',
    description: 'Guide ultime du casino : maîtrisez tous les jeux et stratégies pour maximiser vos chances.',
    url: 'https://www.rounders.pro/guide-casino',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-guide-casino.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Casino',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet Casino | Stratégies Pro - Rounders Pro',
    description: 'Maîtrisez le casino avec notre guide complet : blackjack, roulette, slots et plus.',
    images: ['/images/og-guide-casino.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino',
  },
};

export default function GuideCasinoLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <GuideCasinoSidebar />
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