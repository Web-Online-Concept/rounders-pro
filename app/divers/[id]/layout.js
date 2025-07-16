export async function generateMetadata({ params }) {
  // Ici on pourrait faire un appel API pour récupérer le titre
  // Pour l'instant on met un titre générique
  return {
    title: 'Article - Rounders Pro',
    description: 'Lire l\'article complet sur Rounders Pro',
  }
}

export default function ArticleLayout({ children }) {
  return <>{children}</>
}