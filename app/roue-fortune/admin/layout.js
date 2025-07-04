// app/roue-fortune/admin/layout.js
export const metadata = {
  title: 'Admin Roue de la Fortune Rounders | Gestion des Tours',
  description: 'Interface d’administration pour gérer les tours de la Roue de la Fortune Rounders. Accès restreint aux administrateurs pour configurer les budgets et les gagnants.',
  keywords: 'admin roue fortune, rounders pro admin, gestion tours rounders, interface admin stake',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Admin Roue de la Fortune Rounders | Gestion des Tours',
    description: 'Interface d’administration pour gérer les tours de la Roue de la Fortune Rounders. Accès restreint aux administrateurs.',
    url: 'https://www.rounders.pro/roue-fortune/admin',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Admin Roue de la Fortune',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Roue de la Fortune Rounders | Gestion des Tours',
    description: 'Interface d’administration pour la Roue de la Fortune Rounders. Accès restreint.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/roue-fortune/admin',
  },
};

export default function AdminLayout({ children }) {
  return children;
}