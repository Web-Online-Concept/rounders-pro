// app/guide-paris-sportifs/introduction/page.js
import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Introduction</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📖 Introduction aux Paris Sportifs
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Bienvenue dans l'univers des paris sportifs ! Ce guide complet vous accompagnera 
          de vos premiers pas jusqu'à la maîtrise des stratégies avancées. Que vous soyez 
          totalement débutant ou parieur occasionnel, vous trouverez ici toutes les clés 
          pour parier de manière éclairée et profitable.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Qu'est-ce qu'un pari sportif ?
        </h2>
        <p className="text-gray-700 mb-6">
          Un pari sportif consiste à miser de l'argent sur le résultat d'un événement sportif. 
          Si votre prédiction est correcte, vous récupérez votre mise multipliée par la cote 
          proposée par le bookmaker. C'est un mélange d'analyse, de stratégie et de gestion 
          du risque qui peut s'avérer profitable avec la bonne approche.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les acteurs du marché
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-2 text-green-700">🏛️ Les Bookmakers</h3>
            <p className="text-gray-600">
              Sociétés qui proposent des cotes sur les événements sportifs. Ils analysent 
              les probabilités et ajustent leurs cotes pour garantir leur marge.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-2 text-blue-700">👥 Les Parieurs</h3>
            <p className="text-gray-600">
              Vous ! Les personnes qui placent des mises sur les résultats sportifs. 
              Du parieur récréatif au professionnel, chacun a sa stratégie.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vocabulaire essentiel
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <dl className="space-y-4">
            <div>
              <dt className="font-bold text-gray-900">Cote</dt>
              <dd className="text-gray-700 ml-4">
                Multiplicateur qui détermine vos gains potentiels. Une cote de 2.00 
                signifie que vous doublez votre mise en cas de victoire.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900">Bankroll</dt>
              <dd className="text-gray-700 ml-4">
                Capital total dédié aux paris sportifs. Sa gestion est cruciale 
                pour parier sur le long terme.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900">Value Bet</dt>
              <dd className="text-gray-700 ml-4">
                Pari où la cote proposée est supérieure à la probabilité réelle 
                de l'événement. Le Saint Graal du parieur.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-gray-900">ROI (Return On Investment)</dt>
              <dd className="text-gray-700 ml-4">
                Retour sur investissement. Indicateur clé pour mesurer la rentabilité 
                de vos paris sur le long terme.
              </dd>
            </div>
          </dl>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les types de parieurs
        </h2>
        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-gray-900">🎲 Le Parieur Récréatif</h3>
            <p className="text-gray-700">
              Parie pour le plaisir, généralement sur son équipe favorite. 
              Mise de petites sommes sans stratégie particulière.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-900">📊 Le Parieur Stratégique</h3>
            <p className="text-gray-700">
              Utilise des analyses et stratégies. Cherche la value et gère 
              sa bankroll de manière rigoureuse.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-gray-900">💼 Le Parieur Professionnel</h3>
            <p className="text-gray-700">
              Fait des paris son activité principale. ROI stable, discipline 
              de fer et approche mathématique.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Pourquoi ce guide est différent ?
        </h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">
                <strong>Approche progressive :</strong> De débutant à expert, étape par étape
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">
                <strong>Exemples concrets :</strong> Cas réels et mises en situation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">
                <strong>Sans bullshit :</strong> La vérité sur les paris, sans fausses promesses
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">
                <strong>Orienté rentabilité :</strong> Focus sur le profit long terme, pas les coups de chance
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les règles d'or avant de commencer
        </h2>
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-gray-700">
              <strong>Ne pariez que ce que vous pouvez perdre</strong> - L'argent des paris 
              ne doit jamais être celui du loyer ou des courses
            </li>
            <li className="text-gray-700">
              <strong>Fixez-vous des limites</strong> - Temps et argent, définissez vos 
              limites AVANT de commencer
            </li>
            <li className="text-gray-700">
              <strong>Gardez la tête froide</strong> - Les émotions sont l'ennemi du parieur. 
              Pas de revenge bet !
            </li>
            <li className="text-gray-700">
              <strong>Formez-vous continuellement</strong> - Le monde des paris évolue, 
              restez informé et adaptez-vous
            </li>
            <li className="text-gray-700">
              <strong>Tenez un historique</strong> - Trackez tous vos paris pour analyser 
              vos performances
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Par où commencer ?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link href="/guide-paris-sportifs/comprendre-cotes" className="block group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2 text-green-700 group-hover:text-green-800">
                📊 Étape 1 : Comprendre les cotes
              </h3>
              <p className="text-gray-600">
                La base absolue. Sans comprendre les cotes, impossible de calculer 
                vos gains ou d'identifier la value.
              </p>
            </div>
          </Link>
          <Link href="/guide-paris-sportifs/types-paris" className="block group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2 text-blue-700 group-hover:text-blue-800">
                🎯 Étape 2 : Maîtriser les types de paris
              </h3>
              <p className="text-gray-600">
                Simple, combiné, système... Chaque type a ses avantages selon 
                votre stratégie et votre profil de risque.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au sommaire
          </Link>
          <Link 
            href="/guide-paris-sportifs/comprendre-cotes"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Chapitre suivant
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}