import Link from 'next/link';

export const metadata = {
  title: 'Outils - Rounders Pro',
  description: 'Collection d\'outils professionnels pour les parieurs',
};

export default function OutilsPage() {
  const outils = [
    {
      slug: 'surebet-calculatrice',
      title: 'Calculateur de Surebets',
      description: 'Calculez vos mises optimales pour garantir un profit sur vos paris d\'arbitrage. Support 2 ou 3 issues avec gestion des commissions.',
      icon: '📊',
    },
    // Ajouter d'autres outils ici dans le futur
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Outils Rounders Pro
          </h1>
          <p className="text-xl text-gray-600">
            Des outils professionnels pour optimiser vos paris
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outils.map((outil) => (
            <Link
              key={outil.slug}
              href={`/outils/${outil.slug}`}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 p-6 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl flex-shrink-0">{outil.icon}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {outil.title}
                  </h2>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {outil.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-gray-400 group-hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}