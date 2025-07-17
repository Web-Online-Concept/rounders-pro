// app/guide-paris-sportifs/layout.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
import GuideParisSidebar from './GuideParisSidebar';

export const metadata = {
  title: 'Guide Complet Paris Sportifs | Stratégies & Conseils Pro - Rounders Pro',
  description: 'Guide ultime des paris sportifs : maîtrisez les cotes, stratégies, value betting, surebets et gestion de bankroll. Devenez un parieur professionnel.',
  keywords: 'guide paris sportifs, stratégies paris, value betting, surebets, gestion bankroll, comprendre cotes, rounders pro',
  openGraph: {
    title: 'Guide Complet Paris Sportifs | Stratégies & Conseils Pro - Rounders Pro',
    description: 'Guide ultime des paris sportifs : maîtrisez les cotes, stratégies, value betting et gestion de bankroll.',
    url: 'https://www.rounders.pro/guide-paris-sportifs',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-guide-paris-sportifs.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Guide Paris Sportifs',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Complet Paris Sportifs | Stratégies Pro - Rounders Pro',
    description: 'Maîtrisez les paris sportifs avec notre guide complet : cotes, stratégies, value betting.',
    images: ['/images/og-guide-paris-sportifs.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs',
  },
};

export default function GuideParisLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <GuideParisSidebar />
        <main className="flex-1 p-8 pb-20 md:pb-8">
          {children}
        </main>
      </div>
      <Footer />
      <BottomBar />
    </div>
  );
}