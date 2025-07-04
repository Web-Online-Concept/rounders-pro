export const metadata = {
  title: 'Admin Roue de la Fortune | Gestion des Tours',
  description: 'Interface d\'administration pour gérer les tours de la roue de la fortune. Accès restreint aux administrateurs.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Admin Roue de la Fortune | Gestion des Tours',
    description: 'Interface d\'administration pour gérer les tours de la roue de la fortune. Accès restreint aux administrateurs.',
    url: 'https://www.rounders.pro/roue-fortune/admin',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Admin',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Roue de la Fortune | Gestion des Tours',
    description: 'Interface d\'administration. Accès restreint aux administrateurs.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/roue-fortune/admin',
  },
};

export default function AdminLayout({ children }) {
  return children;
}