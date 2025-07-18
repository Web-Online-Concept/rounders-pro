// app/guide-casino/jeux-table/page.js
import Link from 'next/link';

export default function JeuxTablePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Jeux de Table</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎲 Les Jeux de Table
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les jeux de table sont l'essence même du casino. Roulette, Blackjack, Baccarat, Craps... 
          Découvrez les règles, stratégies et variantes de ces classiques intemporels qui fascinent 
          les joueurs depuis des siècles.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Vue d'ensemble */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Vue d'Ensemble des Jeux de Table
          </h2>
          <p className="text-gray-700 mb-4">
            Les jeux de table combinent chance, stratégie et interaction sociale. Contrairement aux 
            machines à sous, ils offrent souvent de meilleures probabilités et permettent d'influencer 
            le résultat par vos décisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">✅ Avantages</h3>
              <ul className="text-sm space-y-1">
                <li>• Avantage maison plus faible</li>
                <li>• Stratégies applicables</li>
                <li>• Rythme de jeu contrôlé</li>
                <li>• Interaction sociale (live)</li>
                <li>• Transparence des règles</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold text-gray-800 mb-2">⚠️ Points d'attention</h3>
              <ul className="text-sm space-y-1">
                <li>• Courbe d'apprentissage</li>
                <li>• Mises minimales plus élevées</li>
                <li>• Pression sociale possible</li>
                <li>• Nécessite concentration</li>
                <li>• Temps de jeu plus long</li>
              </ul>
            </div>
          </div>
        </div>

        {/* La Roulette */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🎡 La Roulette - La Reine du Casino
          </h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">Principe du Jeu</h3>
              <p className="text-sm mb-3">
                Une bille lancée sur une roue tournante avec 37 cases (européenne) ou 38 cases 
                (américaine). Les joueurs parient sur le numéro, la couleur ou le groupe où la bille s'arrêtera.
              </p>
              
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">🇪🇺 Européenne</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 37 cases (0 à 36)</li>
                    <li>• Avantage maison : 2.7%</li>
                    <li>• La plus populaire</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">🇺🇸 Américaine</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 38 cases (0, 00 à 36)</li>
                    <li>• Avantage maison : 5.26%</li>
                    <li>• À éviter si possible</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">🇫🇷 Française</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 37 cases + règles spéciales</li>
                    <li>• La Partage / En Prison</li>
                    <li>• Avantage : 1.35% (chances simples)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">Types de Paris</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Paris Intérieurs</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Plein (1 numéro) : 35:1</li>
                    <li>• Cheval (2 numéros) : 17:1</li>
                    <li>• Transversale (3 numéros) : 11:1</li>
                    <li>• Carré (4 numéros) : 8:1</li>
                    <li>• Sixain (6 numéros) : 5:1</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Paris Extérieurs</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Colonne/Douzaine : 2:1</li>
                    <li>• Rouge/Noir : 1:1</li>
                    <li>• Pair/Impair : 1:1</li>
                    <li>• Manque/Passe : 1:1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Le Blackjack */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            ♠️ Le Blackjack - Le Jeu de Stratégie
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">Principe du Jeu</h3>
              <p className="text-sm mb-3">
                Atteindre 21 ou s'en approcher sans dépasser, en battant le croupier. 
                C'est le jeu de table avec le plus faible avantage maison si joué correctement.
              </p>
              
              <div className="bg-white rounded p-3 mb-3">
                <h4 className="font-semibold text-sm mb-2">Valeur des Cartes</h4>
                <ul className="text-xs space-y-1">
                  <li>• As : 1 ou 11 (au choix)</li>
                  <li>• Figures (Roi, Dame, Valet) : 10</li>
                  <li>• Cartes numérotées : valeur faciale</li>
                  <li>• Blackjack : As + carte valant 10 = 21 naturel</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Actions du Joueur</h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Hit :</strong> Tirer une carte</li>
                    <li>• <strong>Stand :</strong> Rester</li>
                    <li>• <strong>Double :</strong> Doubler la mise</li>
                    <li>• <strong>Split :</strong> Séparer une paire</li>
                    <li>• <strong>Surrender :</strong> Abandonner</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Règles du Croupier</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Tire jusqu'à 16</li>
                    <li>• Reste à 17+</li>
                    <li>• Soft 17 : varie selon casino</li>
                    <li>• Pas de décisions subjectives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded p-4">
              <h3 className="font-bold text-yellow-800 mb-2">⚡ Stratégie de Base</h3>
              <p className="text-sm mb-2">
                Tableau mathématique optimal réduisant l'avantage maison à ~0.5%
              </p>
              <div className="text-xs bg-white rounded p-3">
                <p className="font-semibold">Principes clés :</p>
                <ul className="mt-2 space-y-1">
                  <li>• Toujours splitter les As et les 8</li>
                  <li>• Jamais splitter les 10 ou les 5</li>
                  <li>• Doubler sur 11 contre 2-10 du croupier</li>
                  <li>• Rester sur 17+ dur</li>
                  <li>• Tirer sur 11 ou moins</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Le Baccarat */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            💎 Le Baccarat - Le Jeu des High Rollers
          </h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">Principe du Jeu</h3>
              <p className="text-sm mb-3">
                Jeu de cartes simple où vous pariez sur la victoire du Joueur, de la Banque, 
                ou sur une Égalité. La main la plus proche de 9 gagne.
              </p>
              
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Paris Joueur</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Paiement : 1:1</li>
                    <li>• Avantage maison : 1.24%</li>
                    <li>• Bon choix</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Paris Banque</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Paiement : 0.95:1</li>
                    <li>• Avantage maison : 1.06%</li>
                    <li>• Meilleur pari</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">Paris Égalité</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Paiement : 8:1</li>
                    <li>• Avantage maison : 14.36%</li>
                    <li>• À éviter !</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">Règles de Tirage</h3>
              <div className="text-sm">
                <p className="mb-2">Automatiques, aucune décision du joueur :</p>
                <ul className="text-xs space-y-1">
                  <li>• 0-5 : Le joueur tire une 3ème carte</li>
                  <li>• 6-7 : Le joueur reste</li>
                  <li>• 8-9 : "Naturel" - aucun tirage supplémentaire</li>
                  <li>• La banque suit des règles complexes selon la 3ème carte du joueur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Le Craps */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🎲 Le Craps - L'Adrénaline Pure
          </h2>
          
          <div className="space-y-4">
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-3">Principe du Jeu</h3>
              <p className="text-sm mb-3">
                Jeu de dés excitant où les joueurs parient sur le résultat des lancers. 
                Intimidant au début mais offrant d'excellentes cotes une fois maîtrisé.
              </p>
              
              <div className="bg-white rounded p-3 mb-3">
                <h4 className="font-semibold text-sm mb-2">Phase Come Out Roll</h4>
                <ul className="text-xs space-y-1">
                  <li>• 7 ou 11 : Pass Line gagne</li>
                  <li>• 2, 3 ou 12 : Pass Line perd (Craps)</li>
                  <li>• 4, 5, 6, 8, 9, 10 : Devient le Point</li>
                </ul>
              </div>

              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-2">Phase Point</h4>
                <ul className="text-xs space-y-1">
                  <li>• Refaire le Point avant un 7 pour gagner</li>
                  <li>• 7 = "Seven Out" : Pass Line perd</li>
                  <li>• Autres numéros : on continue</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">Meilleurs Paris</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Pass/Don't Pass :</strong> Avantage maison 1.4%</li>
                <li>• <strong>Come/Don't Come :</strong> Idem, après le point</li>
                <li>• <strong>Odds Bet :</strong> 0% avantage maison (!)</li>
                <li>• <strong>Place 6/8 :</strong> Avantage 1.5%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Autres jeux de table */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Autres Jeux de Table Populaires
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">🀄 Sic Bo</h3>
              <p className="text-sm mb-2">Jeu de dés asiatique avec multiples paris</p>
              <ul className="text-xs space-y-1">
                <li>• 3 dés lancés</li>
                <li>• Nombreuses combinaisons</li>
                <li>• Avantage : 2.8% à 33%</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">🃏 Pai Gow Poker</h3>
              <p className="text-sm mb-2">Poker chinois à 7 cartes</p>
              <ul className="text-xs space-y-1">
                <li>• 2 mains créées</li>
                <li>• Joker inclus</li>
                <li>• Avantage : 2.5%</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">♣️ Three Card Poker</h3>
              <p className="text-sm mb-2">Poker simplifié rapide</p>
              <ul className="text-xs space-y-1">
                <li>• 3 cartes seulement</li>
                <li>• Ante & Play</li>
                <li>• Avantage : 3.4%</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">🎰 Casino War</h3>
              <p className="text-sm mb-2">Le plus simple des jeux</p>
              <ul className="text-xs space-y-1">
                <li>• Carte haute gagne</li>
                <li>• Égalité = guerre</li>
                <li>• Avantage : 2.9%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stratégies générales */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            📈 Stratégies Générales pour les Jeux de Table
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold mb-1">Connaître l'Avantage Maison</h3>
                <p className="text-gray-300 text-sm">Choisissez les jeux et paris avec le plus faible avantage</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold mb-1">Maîtriser la Stratégie de Base</h3>
                <p className="text-gray-300 text-sm">Apprenez par cœur les décisions optimales</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold mb-1">Gérer sa Bankroll</h3>
                <p className="text-gray-300 text-sm">Ne misez jamais plus de 5% de votre capital par session</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold mb-1">Éviter les Paris Secondaires</h3>
                <p className="text-gray-300 text-sm">Insurance, side bets = avantage maison élevé</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <h3 className="font-bold mb-1">Pratiquer en Mode Démo</h3>
                <p className="text-gray-300 text-sm">Maîtrisez les règles avant de miser réellement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau comparatif */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📊 Comparatif des Jeux de Table
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2">Jeu</th>
                  <th className="text-center py-2">Avantage Maison</th>
                  <th className="text-center py-2">Complexité</th>
                  <th className="text-center py-2">Stratégie</th>
                  <th className="text-center py-2">Rythme</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Blackjack</td>
                  <td className="text-center">0.5%</td>
                  <td className="text-center">⭐⭐⭐</td>
                  <td className="text-center">Élevée</td>
                  <td className="text-center">Moyen</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Baccarat</td>
                  <td className="text-center">1.06%</td>
                  <td className="text-center">⭐</td>
                  <td className="text-center">Faible</td>
                  <td className="text-center">Rapide</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Craps (Pass)</td>
                  <td className="text-center">1.4%</td>
                  <td className="text-center">⭐⭐⭐⭐</td>
                  <td className="text-center">Moyenne</td>
                  <td className="text-center">Variable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Roulette EU</td>
                  <td className="text-center">2.7%</td>
                  <td className="text-center">⭐</td>
                  <td className="text-center">Aucune</td>
                  <td className="text-center">Lent</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Roulette US</td>
                  <td className="text-center">5.26%</td>
                  <td className="text-center">⭐</td>
                  <td className="text-center">Aucune</td>
                  <td className="text-center">Lent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-red-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">
            💡 Conseils d'Expert pour les Jeux de Table
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Commencez par le Baccarat ou la Roulette :</strong> Règles simples, décisions minimales
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Maîtrisez le Blackjack :</strong> Meilleur ratio effort/récompense avec la stratégie de base
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Évitez les systèmes de mise :</strong> Martingale et autres ne changent pas l'avantage maison
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Profitez des bonus :</strong> Mais vérifiez la contribution des jeux de table au wagering
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Casino Live {'>'} RNG :</strong> Pour l'expérience authentique et la transparence
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/introduction"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Introduction
          </Link>
          <Link 
            href="/guide-casino/machines-sous"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Les Machines à Sous
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}