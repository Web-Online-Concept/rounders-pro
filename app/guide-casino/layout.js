// app/guide-casino/layout.js
import GuideCasinoSidebar from './GuideCasinoSidebar';

export const metadata = {
  title: 'Guide Casino - Maîtrisez tous les jeux | Rounders Pro',
  description: 'Guide complet du casino en ligne : stratégies, règles, gestion de bankroll et conseils d\'experts pour tous les jeux de casino.',
  keywords: 'guide casino, casino en ligne, stratégies casino, blackjack, roulette, baccarat, machines à sous, casino live',
  openGraph: {
    title: 'Guide Casino Complet - Devenez un Expert | Rounders Pro',
    description: 'Apprenez tout sur les jeux de casino avec notre guide expert. Stratégies, règles et conseils professionnels.',
    url: 'https://www.rounders.pro/guide-casino',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino',
  },
};

export default function GuideCasinoLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto bg-white shadow-lg">
        <GuideCasinoSidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}