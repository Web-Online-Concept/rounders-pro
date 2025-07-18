// app/guide-casino/introduction/page.js
import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Introduction</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎰 Introduction au Casino en Ligne
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Bienvenue dans l'univers fascinant du casino en ligne ! Ce guide complet vous accompagne 
          de vos premiers pas jusqu'aux stratégies avancées. Découvrez comment maximiser votre 
          expérience tout en jouant de manière responsable.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Qu'est-ce qu'un casino en ligne */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Qu'est-ce qu'un Casino en Ligne ?
          </h2>
          <p className="text-gray-700 mb-4">
            Un casino en ligne est une plateforme digitale qui reproduit l'expérience d'un casino 
            traditionnel sur internet. Vous y retrouvez tous les jeux classiques : machines à sous, 
            roulette, blackjack, poker, et bien plus encore.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-2">🏛️ Casino Traditionnel</h3>
              <ul className="text-sm space-y-1">
                <li>• Déplacement nécessaire</li>
                <li>• Horaires d'ouverture</li>
                <li>• Ambiance physique</li>
                <li>• Interaction directe</li>
                <li>• Mises minimales élevées</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">💻 Casino en Ligne</h3>
              <ul className="text-sm space-y-1">
                <li>• Accessible 24/7</li>
                <li>• Jouer depuis chez soi</li>
                <li>• Plus de variété de jeux</li>
                <li>• Bonus et promotions</li>
                <li>• Mises flexibles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Les différents types de jeux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Les Grandes Catégories de Jeux
          </h2>
          
          <div className="space-y-4">
            {/* Machines à sous */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">🎰 Machines à Sous (Slots)</h3>
              <p className="text-sm mb-2">Les jeux les plus populaires du casino</p>
              <ul className="text-sm space-y-1">
                <li>• <strong>Classiques :</strong> 3 rouleaux, symboles fruits</li>
                <li>• <strong>Vidéo :</strong> 5+ rouleaux, thèmes variés</li>
                <li>• <strong>Progressives :</strong> Jackpots croissants</li>
                <li>• <strong>Megaways :</strong> Milliers de façons de gagner</li>
              </ul>
            </div>

            {/* Jeux de table */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🎲 Jeux de Table</h3>
              <p className="text-sm mb-2">Les classiques intemporels du casino</p>
              <ul className="text-sm space-y-1">
                <li>• <strong>Roulette :</strong> Européenne, Américaine, Française</li>
                <li>• <strong>Blackjack :</strong> Le 21, multiples variantes</li>
                <li>• <strong>Baccarat :</strong> Punto Banco, Chemin de Fer</li>
                <li>• <strong>Craps :</strong> Les dés, adrénaline garantie</li>
              </ul>
            </div>

            {/* Jeux de cartes */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">♠️ Jeux de Cartes</h3>
              <p className="text-sm mb-2">Stratégie et psychologie</p>
              <ul className="text-sm space-y-1">
                <li>• <strong>Poker :</strong> Texas Hold'em, Omaha, Stud</li>
                <li>• <strong>Video Poker :</strong> Jacks or Better, Deuces Wild</li>
                <li>• <strong>Autres :</strong> Sic Bo, Pai Gow, Red Dog</li>
              </ul>
            </div>

            {/* Casino Live */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🏆 Casino Live</h3>
              <p className="text-sm mb-2">L'expérience authentique avec croupiers réels</p>
              <ul className="text-sm space-y-1">
                <li>• Streaming HD en temps réel</li>
                <li>• Interaction avec le croupier</li>
                <li>• Ambiance casino authentique</li>
                <li>• Limites de mise plus élevées</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comment fonctionne un casino */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Comment Fonctionne un Casino en Ligne ?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">🎲 RNG (Random Number Generator)</h3>
              <p className="text-sm">
                Générateur de nombres aléatoires qui garantit l'équité des jeux. 
                Audité régulièrement par des organismes indépendants.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">📊 RTP (Return to Player)</h3>
              <p className="text-sm">
                Pourcentage théorique retourné aux joueurs sur le long terme. 
                Ex: RTP 96% = le casino garde 4% en moyenne.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">🏠 Avantage Maison</h3>
              <p className="text-sm">
                Marge mathématique du casino sur chaque jeu. Varie selon les jeux : 
                Blackjack (~0.5%), Roulette (~2.7%), Slots (~2-10%).
              </p>
            </div>
          </div>
        </div>

        {/* Commencer en toute sécurité */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🛡️ Commencer en Toute Sécurité
          </h2>
          
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">1</span>
              <div>
                <strong>Choisir un casino licencié</strong>
                <p className="text-green-100 text-sm">Vérifiez les licences (MGA, Curaçao, UK...)</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">2</span>
              <div>
                <strong>Créer un compte</strong>
                <p className="text-green-100 text-sm">Informations réelles, vérification KYC</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">3</span>
              <div>
                <strong>Définir des limites</strong>
                <p className="text-green-100 text-sm">Budget, temps de jeu, limites de dépôt</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">4</span>
              <div>
                <strong>Profiter du bonus de bienvenue</strong>
                <p className="text-green-100 text-sm">Lisez bien les conditions (wagering)</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">5</span>
              <div>
                <strong>Commencer petit</strong>
                <p className="text-green-100 text-sm">Mode démo puis petites mises</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Vocabulaire essentiel */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            📚 Vocabulaire Essentiel du Casino
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded p-3">
              <h4 className="font-bold text-indigo-800">Bankroll</h4>
              <p className="text-sm">Budget total alloué au jeu</p>
            </div>
            <div className="bg-indigo-50 rounded p-3">
              <h4 className="font-bold text-indigo-800">Wagering</h4>
              <p className="text-sm">Conditions de mise des bonus</p>
            </div>
            <div className="bg-indigo-50 rounded p-3">
              <h4 className="font-bold text-indigo-800">Volatilité</h4>
              <p className="text-sm">Fréquence et taille des gains</p>
            </div>
            <div className="bg-indigo-50 rounded p-3">
              <h4 className="font-bold text-indigo-800">House Edge</h4>
              <p className="text-sm">Avantage mathématique du casino</p>
            </div>
            <div className="bg-indigo-50 rounded p-3">
              <h4 className="font-bold text-indigo-800">Comp Points</h4>
              <p className="text-sm">Points de fidélité convertibles</p>
            </div>
            <div className="bg-indigo-50 rounded p-3">
              <h4 className="font-bold text-indigo-800">High Roller</h4>
              <p className="text-sm">Joueur aux mises élevées</p>
            </div>
          </div>
        </div>

        {/* Avantages du casino en ligne */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ✨ Pourquoi Jouer en Ligne ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-4 text-center">
              <span className="text-3xl mb-2 block">🎁</span>
              <h4 className="font-bold mb-1">Bonus Généreux</h4>
              <p className="text-sm text-gray-600">Welcome bonus, free spins, cashback...</p>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <span className="text-3xl mb-2 block">🎮</span>
              <h4 className="font-bold mb-1">Plus de Choix</h4>
              <p className="text-sm text-gray-600">Milliers de jeux disponibles</p>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <span className="text-3xl mb-2 block">💰</span>
              <h4 className="font-bold mb-1">Mises Flexibles</h4>
              <p className="text-sm text-gray-600">De 0.01€ à des milliers</p>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <span className="text-3xl mb-2 block">📱</span>
              <h4 className="font-bold mb-1">Mobile</h4>
              <p className="text-sm text-gray-600">Jouez partout, tout le temps</p>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <span className="text-3xl mb-2 block">🏆</span>
              <h4 className="font-bold mb-1">Tournois</h4>
              <p className="text-sm text-gray-600">Compétitions et prix exclusifs</p>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <span className="text-3xl mb-2 block">🔒</span>
              <h4 className="font-bold mb-1">Sécurité</h4>
              <p className="text-sm text-gray-600">Transactions cryptées</p>
            </div>
          </div>
        </div>

        {/* Conseils pour débuter */}
        <div className="bg-red-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            💡 10 Conseils pour Bien Débuter
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-300 mr-2">1.</span>
                <span>Fixez un budget strict et respectez-le</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">2.</span>
                <span>Apprenez les règles avant de miser</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">3.</span>
                <span>Utilisez le mode démo pour pratiquer</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">4.</span>
                <span>Comprenez le RTP de chaque jeu</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">5.</span>
                <span>Ne poursuivez jamais vos pertes</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-300 mr-2">6.</span>
                <span>Profitez des bonus intelligemment</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">7.</span>
                <span>Faites des pauses régulières</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">8.</span>
                <span>Évitez l'alcool en jouant</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">9.</span>
                <span>Gardez vos émotions sous contrôle</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">10.</span>
                <span>Le casino est un divertissement, pas un revenu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Citation finale */}
        <div className="bg-red-100 border-l-4 border-red-600 p-6">
          <p className="text-red-800 font-semibold text-lg italic">
            "La maison gagne toujours à long terme. Jouez pour le plaisir, avec de l'argent 
            que vous pouvez vous permettre de perdre."
          </p>
          <p className="text-red-600 text-sm mt-2">
            - Règle d'or du casino responsable
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au sommaire
          </Link>
          <Link 
            href="/guide-casino/jeux-table"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Les Jeux de Table
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}