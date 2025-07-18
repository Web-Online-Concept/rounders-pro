// app/guide-casino/machines-sous/layout.js
export const metadata = {
  title: 'Les Machines à Sous - Guide Casino | Rounders Pro',
  description: 'Guide complet des machines à sous : comprendre le RTP, la volatilité, les types de slots et stratégies pour optimiser votre expérience.',
  keywords: 'machines à sous, slots casino, RTP, volatilité, free spins, jackpot progressif, megaways, stratégie slots',
  openGraph: {
    title: 'Maîtrisez les Machines à Sous du Casino | Rounders Pro',
    description: 'Tout comprendre sur les slots : RTP, volatilité, types de machines et conseils pour maximiser vos chances.',
    url: 'https://www.rounders.pro/guide-casino/machines-sous',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-casino/machines-sous',
  },
};

export default function MachinesSousLayout({ children }) {
  return <>{children}</>;
}