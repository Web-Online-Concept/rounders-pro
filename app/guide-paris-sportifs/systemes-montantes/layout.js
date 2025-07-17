// app/guide-paris-sportifs/systemes-montantes/layout.js
export const metadata = {
  title: 'Systèmes & Montantes - Guide Paris Sportifs | Rounders Pro',
  description: 'Découvrez tous les systèmes de mise : Martingale, Fibonacci, D\'Alembert, Labouchère. Dangers, avantages et alternatives sûres.',
  keywords: 'martingale, fibonacci betting, système d\'alembert, labouchère, montante positive, paroli, systèmes paris sportifs, progressions mises',
  openGraph: {
    title: 'Systèmes & Montantes - Vérités et Dangers | Rounders Pro',
    description: 'Guide complet des systèmes de mise progressifs. Comprenez pourquoi certains mènent à la ruine et découvrez les alternatives sûres.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/systemes-montantes',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/systemes-montantes',
  },
};

export default function SystemesMontantesLayout({ children }) {
  return <>{children}</>;
}