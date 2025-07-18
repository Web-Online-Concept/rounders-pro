// app/guide-casino/casino-live/layout.js
export const metadata = {
  title: 'Casino Live - Guide Casino | Rounders Pro',
  description: 'Guide complet du casino live : croupiers réels, stratégies spécifiques, game shows, optimisation technique et étiquette pour maximiser votre expérience.',
  keywords: 'casino live, croupier en direct, live dealer, crazy time, evolution gaming, blackjack live, roulette live, game shows casino',
  openGraph: {
    title: 'Maîtrisez le Casino Live avec Croupiers Réels | Rounders Pro',
    description: 'Découvrez comment profiter pleinement du casino live : jeux disponibles, stratégies adaptées et conseils d\'experts.',
    url: 'https://www.rounders.pro/guide-casino/casino-live',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/casino-live',
  },
};

export default function CasinoLiveLayout({ children }) {
  return <>{children}</>;
}