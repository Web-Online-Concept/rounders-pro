// app/guide-poker/regles-base/page.js
import Link from 'next/link';

export default function ReglesBasePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Règles et Variantes</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📋 Règles et Variantes du Poker
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le poker se décline en plusieurs variantes, chacune avec ses spécificités. Du Texas Hold'em, 
          le plus populaire, à l'Omaha et au Stud, découvrez les règles détaillées de chaque variante 
          pour choisir celle qui vous convient et maîtriser parfaitement le déroulement des parties.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Texas Hold'em */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Texas Hold'em - La variante reine
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le Texas Hold'em est la variante la plus jouée au monde. Chaque joueur reçoit 2 cartes 
              privées et utilise 5 cartes communes pour former la meilleure main de 5 cartes possible.
            </p>
          </div>

          <h3 className="font-bold text-lg mb-3">Déroulement d'une main :</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h4 className="font-semibold">Préflop</h4>
                <p className="text-gray-600">Chaque joueur reçoit 2 cartes fermées. Premier tour d'enchères.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h4 className="font-semibold">Flop</h4>
                <p className="text-gray-600">3 cartes communes sont révélées. Deuxième tour d'enchères.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h4 className="font-semibold">Turn</h4>
                <p className="text-gray-600">4ème carte commune révélée. Troisième tour d'enchères.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <h4 className="font-semibold">River</h4>
                <p className="text-gray-600">5ème et dernière carte commune. Dernier tour d'enchères.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <h4 className="font-semibold">Showdown</h4>
                <p className="text-gray-600">Les joueurs restants montrent leurs cartes. La meilleure main gagne.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-gray-100 rounded p-4">
            <h4 className="font-bold mb-2">Structure des mises :</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>No Limit :</strong> Mise de tout votre tapis à tout moment (le plus populaire)</li>
              <li>• <strong>Pot Limit :</strong> Mise maximum = taille du pot</li>
              <li>• <strong>Fixed Limit :</strong> Mises fixes prédéterminées</li>
            </ul>
          </div>
        </div>

        {/* Actions possibles */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Les actions possibles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold mb-2">✅ Check (Parole)</h3>
              <p className="text-sm text-gray-700">
                Passer l'action sans miser quand personne n'a misé avant vous.
              </p>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold mb-2">💰 Bet (Miser)</h3>
              <p className="text-sm text-gray-700">
                Être le premier à mettre de l'argent dans le pot sur un tour d'enchères.
              </p>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold mb-2">📞 Call (Suivre)</h3>
              <p className="text-sm text-gray-700">
                Égaler la mise précédente pour rester dans le coup.
              </p>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold mb-2">🚀 Raise (Relancer)</h3>
              <p className="text-sm text-gray-700">
                Augmenter la mise précédente, forçant les autres à payer plus.
              </p>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold mb-2">🏳️ Fold (Se coucher)</h3>
              <p className="text-sm text-gray-700">
                Abandonner la main et perdre ce qui a déjà été misé.
              </p>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold mb-2">💥 All-in (Tapis)</h3>
              <p className="text-sm text-gray-700">
                Miser tous ses jetons restants (No Limit uniquement).
              </p>
            </div>
          </div>
        </div>

        {/* Omaha */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Omaha - Plus d'action, plus de variance
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              L'Omaha est la deuxième variante la plus populaire. Similaire au Hold'em mais avec 
              4 cartes privées au lieu de 2, créant plus de possibilités et d'action.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-800">
              <strong>⚠️ Règle cruciale :</strong> Vous DEVEZ utiliser exactement 2 de vos 4 cartes 
              privées ET exactement 3 cartes du board pour former votre main.
            </p>
          </div>

          <h3 className="font-bold mb-3">Variantes d'Omaha :</h3>
          
          <div className="space-y-3">
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h4 className="font-semibold text-purple-700">Pot Limit Omaha (PLO)</h4>
              <p className="text-sm text-gray-600">
                La plus jouée. Mise maximum = taille du pot. Jeu très dynamique avec de gros pots.
              </p>
            </div>
            
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h4 className="font-semibold text-purple-700">Omaha Hi-Lo (O8)</h4>
              <p className="text-sm text-gray-600">
                Le pot est partagé entre la meilleure main haute et la meilleure main basse (8 ou moins).
              </p>
            </div>
            
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h4 className="font-semibold text-purple-700">5-Card Omaha</h4>
              <p className="text-sm text-gray-600">
                5 cartes privées au lieu de 4. Encore plus d'action et de variance.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Card Stud */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            Seven Card Stud - Le classique
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Avant l'explosion du Hold'em, le Stud était LA variante de poker. Pas de cartes communes, 
              chaque joueur reçoit ses propres cartes, certaines face visible.
            </p>
          </div>

          <h3 className="font-bold mb-3">Structure du Stud :</h3>
          
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <div>
                <strong>Ante :</strong> Mise obligatoire de tous les joueurs
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <div>
                <strong>3rd Street :</strong> 2 cartes fermées + 1 ouverte. Le plus petit jeu visible mise (bring-in)
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <div>
                <strong>4th Street :</strong> 1 carte ouverte supplémentaire
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              <div>
                <strong>5th Street :</strong> 1 carte ouverte supplémentaire (les mises doublent)
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">5.</span>
              <div>
                <strong>6th Street :</strong> 1 carte ouverte supplémentaire
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">6.</span>
              <div>
                <strong>7th Street (River) :</strong> 1 carte fermée finale
              </div>
            </li>
          </ol>

          <div className="mt-4 bg-gray-100 rounded p-4">
            <p className="text-sm text-gray-700">
              <strong>Total :</strong> 3 cartes fermées + 4 cartes ouvertes = 7 cartes pour faire la meilleure main de 5 cartes
            </p>
          </div>
        </div>

        {/* Autres variantes */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Autres variantes populaires
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-red-700 mb-3">🃏 Razz</h3>
            <p className="text-gray-700 mb-2">
              Stud inversé où la main la plus basse gagne. L'As est toujours bas, pas de quintes ni couleurs.
            </p>
            <p className="text-sm text-gray-600">
              Meilleure main possible : A-2-3-4-5 (la "roue")
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-700 mb-3">🎰 2-7 Triple Draw</h3>
            <p className="text-gray-700 mb-2">
              Lowball avec 3 tirages. Le but est d'avoir la main la plus basse sans quinte ni couleur.
            </p>
            <p className="text-sm text-gray-600">
              Meilleure main : 2-3-4-5-7 (pas de même couleur)
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">♠️ H.O.R.S.E.</h3>
            <p className="text-gray-700 mb-2">
              Format mixte alternant 5 variantes : Hold'em, Omaha Hi-Lo, Razz, Stud, Eight-or-better.
            </p>
            <p className="text-sm text-gray-600">
              Test ultime de polyvalence au poker
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-purple-700 mb-3">💎 Short Deck (6+)</h3>
            <p className="text-gray-700 mb-2">
              Hold'em avec cartes 2-5 retirées. Flushes battent les fulls, action explosive.
            </p>
            <p className="text-sm text-gray-600">
              Variante moderne très populaire en Asie
            </p>
          </div>
        </div>

        {/* Positions et dealer button */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Positions et ordre de jeu
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">Le Dealer Button</h3>
            <p className="text-gray-700">
              Le bouton du dealer tourne dans le sens horaire après chaque main. Il détermine 
              l'ordre de parole et qui poste les blinds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Small Blind (SB)</h4>
              <ul className="text-sm space-y-1">
                <li>• À gauche du bouton</li>
                <li>• Mise obligatoire = moitié de la big blind</li>
                <li>• Parle en premier post-flop</li>
                <li>• Pire position post-flop</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-blue-200 rounded p-4">
              <h4 className="font-semibold text-blue-700 mb-2">Big Blind (BB)</h4>
              <ul className="text-sm space-y-1">
                <li>• À gauche de la small blind</li>
                <li>• Mise obligatoire complète</li>
                <li>• Parle en dernier préflop</li>
                <li>• Défend son investissement</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 text-sm">
              <strong>💡 Important :</strong> La position est cruciale au poker. Plus vous parlez tard, 
              plus vous avez d'informations sur vos adversaires avant de prendre votre décision.
            </p>
          </div>
        </div>

        {/* Règles spéciales */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Règles spéciales importantes
        </h2>
        <div className="space-y-4 mb-8">
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-bold text-red-700 mb-2">🚨 All-in et pots annexes</h3>
            <p className="text-gray-700">
              Quand un joueur fait tapis, un pot annexe est créé. Il ne peut gagner que ce qu'il a 
              couvert. Les autres joueurs continuent dans le pot principal.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-700 mb-2">🤝 Égalité (Split pot)</h3>
            <p className="text-gray-700">
              Si deux joueurs ont exactement la même main, le pot est partagé équitablement. 
              Les couleurs n'ont pas de hiérarchie au poker.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-700 mb-2">⏱️ Time bank</h3>
            <p className="text-gray-700">
              En ligne, chaque joueur dispose d'un temps limité pour agir. Une réserve de temps 
              supplémentaire peut être utilisée pour les décisions difficiles.
            </p>
          </div>
        </div>

        {/* Choisir sa variante */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Quelle variante choisir ?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">🎯 Pour débuter : Texas Hold'em No Limit</h3>
              <p className="text-blue-100">
                Le plus populaire, le plus de ressources d'apprentissage, présent partout
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">🚀 Pour plus d'action : Pot Limit Omaha</h3>
              <p className="text-blue-100">
                Plus de variance, gros pots, requires une excellente gestion de bankroll
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">🧩 Pour la stratégie pure : Stud ou Razz</h3>
              <p className="text-blue-100">
                Moins de variance, plus d'informations visibles, jeu plus mathématique
              </p>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            📋 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Commencez par maîtriser le Texas Hold'em avant d'explorer d'autres variantes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La position est cruciale dans toutes les variantes avec blinds
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Chaque variante a ses spécificités stratégiques - ne les sous-estimez pas
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                En Omaha, respectez toujours la règle du 2+3 pour former votre main
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Stake propose toutes ces variantes
                </Link> - testez-les en micro-limites
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/introduction"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Introduction au Poker
          </Link>
          <Link 
            href="/guide-poker/mains-poker"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Classement des Mains
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}