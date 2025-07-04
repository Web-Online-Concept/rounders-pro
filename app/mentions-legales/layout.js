// app/mentions-legales/layout.js
export const metadata = {
  title: 'Mentions Légales 2025 - Rounders Pro | Jeux sans obligation',
  description: 'Mentions légales 2025 de Rounders Pro : jeux gratuits sans obligation, édité par Web Online Concept. Informations légales et responsabilité.',
  keywords: 'mentions légales, rounders pro, web online concept, jeux gratuits, stake affiliation',
  openGraph: {
    title: 'Mentions Légales 2025 - Rounders Pro | Jeux sans obligation',
    description: 'Mentions légales 2025 de Rounders Pro : jeux gratuits, édité par Web Online Concept.',
    url: 'https://www.rounders.pro/mentions-legales',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Mentions Légales',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentions Légales 2025 - Rounders Pro | Jeux sans obligation',
    description: 'Mentions légales 2025 de Rounders Pro : jeux gratuits, édité par Web Online Concept.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/mentions-legales',
  },
};

export default function MentionsLegalesLayout({ children }) {
  return children;
}