// app/guide-paris-sportifs/responsable/layout.js
export const metadata = {
  title: 'Parier Responsable - Guide Paris Sportifs | Rounders Pro',
  description: 'Guide complet du jeu responsable : limites, outils de protection, signes d\'alerte, ressources d\'aide. Protégez-vous et gardez le contrôle.',
  keywords: 'jeu responsable, paris sportifs responsables, limites paris, addiction jeu, auto-exclusion, aide joueurs, protection joueurs',
  openGraph: {
    title: 'Parier Responsable - Protection et Prévention | Rounders Pro',
    description: 'Tous les outils et conseils pour garder le contrôle de vos paris sportifs. Limites, protection et ressources d\'aide.',
    url: 'https://www.rounders.pro/guide-paris-sportifs/responsable',
    siteName: 'Rounders Pro',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.rounders.pro/guide-paris-sportifs/responsable',
  },
};

export default function ResponsableLayout({ children }) {
  return <>{children}</>;
}