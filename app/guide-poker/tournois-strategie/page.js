// app/guide-poker/tournois-strategie/page.js
import Link from 'next/link';

export default function TournoisStrategiePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Stratégie Tournois</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🏆 Stratégie Tournois (MTT)
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les tournois multi-tables (MTT) offrent la possibilité de transformer un petit buy-in en 
          gains énormes. Mais la variance est immense et la stratégie diffère radicalement du cash game. 
          Découvrez comment naviguer les différentes phases et maximiser vos chances de victoire.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Les phases du tournoi */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            📊 Les Phases d'un Tournoi
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Un tournoi se divise en phases distinctes, chacune nécessitant une approche différente. 
              Adapter votre jeu à chaque phase est crucial.
            </p>
          </div>

          {/* Early Stage */}
          <div className="mb-6">
            <h3 className="font-bold text-green-700 mb-3">🌅 Early Stage (100BB+)</h3>
            <div className="bg-green-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-3">
                Stack profond, pression faible. C'est le moment de jouer du poker solide.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Stratégie</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Jouer serré, éviter les gros pots marginaux</li>
                    <li>• Chercher les spots +EV évidents</li>
                    <li>• Petits pots avec mains moyennes</li>
                    <li>• Éviter les flips pour le stack</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Focus</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Identifier les récréatifs</li>
                    <li>• Prendre des notes</li>
                    <li>• Construire une image</li>
                    <li>• Patience et discipline</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Stage */}
          <div className="mb-6">
            <h3 className="font-bold text-orange-700 mb-3">☀️ Middle Stage (25-75BB)</h3>
            <div className="bg-orange-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-3">
                Les blinds augmentent, la pression commence. Temps d'accumuler des jetons.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Stratégie</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Ouvrir plus large en position</li>
                    <li>• Attaquer les blinds des serrés</li>
                    <li>• 3-bet light vs late position</li>
                    <li>• Resteal des blinds</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Ajustements</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Plus d'agression préflop</li>
                    <li>• Moins de call, plus de raise/fold</li>
                    <li>• Exploiter les stacks moyens</li>
                    <li>• Éviter les confrontations vs big stacks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble */}
          <div className="mb-6">
            <h3 className="font-bold text-red-700 mb-3">🫧 Bubble Phase</h3>
            <div className="bg-red-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-3">
                Proche des places payées. Pression maximale sur les stacks moyens.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Big Stack</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Abuser de votre position</li>
                    <li>• Mettre la pression constante</li>
                    <li>• Attaquer les moyens stacks</li>
                    <li>• Éviter les shorts (désespérés)</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Short Stack</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Push/fold strategy</li>
                    <li>• Chercher les spots +cEV</li>
                    <li>• Ignorer l'ICM si {'<'} 10BB</li>
                    <li>• Viser les double-ups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ITM & Final Table */}
          <div>
            <h3 className="font-bold text-purple-700 mb-3">🎯 ITM & Final Table</h3>
            <div className="bg-purple-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-3">
                Dans l'argent. Maintenant, visez le sommet avec l'ICM en tête.
              </p>
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold text-sm mb-2">Considérations clés</h4>
                <ul className="text-xs space-y-1">
                  <li>• ICM pressure sur chaque décision</li>
                  <li>• Pay jumps significatifs</li>
                  <li>• Deals possibles</li>
                  <li>• Jouer pour gagner, pas survivre</li>
                  <li>• Exploiter la peur des autres</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ICM - Independent Chip Model */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            💎 ICM - Independent Chip Model
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              L'ICM convertit votre stack en valeur monétaire réelle basée sur la structure 
              de paiement. Comprendre l'ICM est essentiel pour les décisions en tournoi.
            </p>
          </div>

          {/* Principes ICM */}
          <div className="bg-gray-100 rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Principes Fondamentaux</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>1.</strong> Les jetons n'ont pas une valeur linéaire 
                (doubler son stack ≠ doubler sa prize pool equity)
              </li>
              <li>
                <strong>2.</strong> Perdre des jetons coûte plus cher que d'en gagner 
                le même montant ne rapporte
              </li>
              <li>
                <strong>3.</strong> La pression ICM augmente près des pay jumps significatifs
              </li>
              <li>
                <strong>4.</strong> Les décisions doivent considérer tous les stacks à la table
              </li>
            </ul>
          </div>

          {/* Exemple ICM */}
          <div className="bg-white border-2 border-purple-200 rounded p-4">
            <h3 className="font-bold text-purple-700 mb-2">Exemple Pratique</h3>
            <div className="bg-gray-50 rounded p-3 mb-3">
              <p className="text-xs font-semibold">Situation : Bubble 4 joueurs, 3 payés</p>
              <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                <div>
                  <strong>Stacks :</strong>
                  <ul>
                    <li>• Chip leader : 40k</li>
                    <li>• Vous : 20k</li>
                    <li>• Joueur 3 : 20k</li>
                    <li>• Short : 5k</li>
                  </ul>
                </div>
                <div>
                  <strong>Payouts :</strong>
                  <ul>
                    <li>• 1er : 500€</li>
                    <li>• 2e : 300€</li>
                    <li>• 3e : 200€</li>
                    <li>• 4e : 0€</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Décision :</strong> Vous avez AK, le chip leader pousse all-in. 
              En chip EV, c'est un call. En ICM, c'est un fold car le short stack va 
              probablement buster bientôt, vous garantissant 200€ minimum.
            </p>
          </div>
        </div>

        {/* Stack Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            📏 Stack Management par Taille
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Votre stack size dicte votre stratégie. Chaque catégorie a ses propres règles.
            </p>
          </div>

          <div className="space-y-4">
            {/* Deep Stack */}
            <div className="bg-white border-2 border-blue-200 rounded p-4">
              <h3 className="font-semibold text-blue-700 mb-2">🏔️ Deep Stack (100BB+)</h3>
              <ul className="text-sm space-y-1">
                <li>• Poker "normal", éviter les flips</li>
                <li>• Petits pots avec mains marginales</li>
                <li>• Exploiter les erreurs post-flop</li>
                <li>• Pas de pression, jouer patient</li>
              </ul>
            </div>

            {/* Medium Stack */}
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">⛰️ Medium Stack (25-75BB)</h3>
              <ul className="text-sm space-y-1">
                <li>• Zone de danger - ni assez pour jouer deep, ni assez court pour push/fold</li>
                <li>• Resteal agressif en position</li>
                <li>• 3-bet ou fold préflop majoritairement</li>
                <li>• Chercher les spots pour doubler</li>
              </ul>
            </div>

            {/* Short Stack */}
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">🏕️ Short Stack (10-25BB)</h3>
              <ul className="text-sm space-y-1">
                <li>• Mode push/fold activé</li>
                <li>• Chercher les spots de resteal</li>
                <li>• All-in préflop avec premiums</li>
                <li>• Exploiter la fold equity</li>
              </ul>
            </div>

            {/* Micro Stack */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">🔥 Micro Stack ({'<'}10BB)</h3>
              <ul className="text-sm space-y-1">
                <li>• Push/fold strict selon les charts</li>
                <li>• Ignorer l'ICM, jouer pour chip EV</li>
                <li>• First in = all-in avec range appropriée</li>
                <li>• Espérer un double-up rapide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Push/Fold Strategy */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Push/Fold Strategy
          </h2>
          
          <div className="bg-white bg-opacity-20 rounded p-4 mb-4">
            <p>
              Avec un stack court, le jeu se simplifie : all-in ou fold. 
              Les charts push/fold sont basés sur les maths pures.
            </p>
          </div>

          {/* Simplified Push Chart */}
          <div className="bg-white bg-opacity-10 rounded p-4">
            <h3 className="font-bold mb-3">Push Ranges Simplifiées (10BB)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Early Position</h4>
                <p className="text-xs">77+, AT+, KQ+</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Middle Position</h4>
                <p className="text-xs">55+, A8+, KJ+, QJ</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Button</h4>
                <p className="text-xs">22+, A2+, K5+, Q8+, J8+, T8+</p>
              </div>
            </div>
            
            <p className="text-xs mt-4 text-center">
              Note : Ajustez selon les stacks derrière et leur tendance à call
            </p>
          </div>
        </div>

        {/* Stratégies spécifiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🎯 Stratégies Spécifiques MTT
          </h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">🎪 Satellite Strategy</h3>
              <p className="text-sm text-gray-700 mb-2">
                Les satellites ont une structure de paiement unique : tous les qualifiés gagnent le même prix.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Survie {'>'} accumulation de jetons</li>
                <li>• Éviter les confrontations avec stacks similaires</li>
                <li>• Exploiter les joueurs qui jouent pour gagner</li>
                <li>• Fold même AA près de la qualification si nécessaire</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">🎰 Bounty/KO Tournaments</h3>
              <p className="text-sm text-gray-700 mb-2">
                Chaque élimination rapporte une prime immédiate.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Élargir les ranges de call vs shorts</li>
                <li>• La bounty change les maths (pot odds)</li>
                <li>• Plus d'action = plus de variance</li>
                <li>• Couvrir les joueurs = priorité</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">🏃 Turbo/Hyper Strategy</h3>
              <p className="text-sm text-gray-700 mb-2">
                Structure accélérée, peu de jeu post-flop.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Push/fold arrive très vite</li>
                <li>• Accumulation agressive early</li>
                <li>• Variance énorme, volume nécessaire</li>
                <li>• Moins de place pour les moves fancy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Table Strategy */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            🏆 Final Table Strategy
          </h2>
          
          <div className="bg-yellow-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              La table finale est où les gros gains se font. Chaque décision peut valoir des milliers d'euros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">Considérations ICM</h3>
              <ul className="text-sm space-y-1">
                <li>• Pay jumps énormes entre chaque place</li>
                <li>• Pression maximale sur les moyens stacks</li>
                <li>• Les chip leaders peuvent abuser</li>
                <li>• Deals souvent proposés</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">Ajustements</h3>
              <ul className="text-sm space-y-1">
                <li>• Jouer plus serré vs stacks similaires</li>
                <li>• Attaquer les joueurs qui "ladder"</li>
                <li>• Garder la pression si chip leader</li>
                <li>• Viser la victoire, pas juste survivre</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erreurs courantes */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Erreurs Courantes en Tournoi
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-red-700 mb-3">❌ Erreurs à Éviter</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Jouer trop serré en début de tournoi</li>
              <li>• Ne pas adapter aux phases</li>
              <li>• Ignorer les stack sizes</li>
              <li>• Survivre au lieu de gagner</li>
              <li>• Pas exploiter la bubble</li>
              <li>• Mauvais timing des moves</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">✅ Best Practices</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Toujours connaître les stacks</li>
              <li>• Identifier qui peut vous buster</li>
              <li>• Exploiter les dynamiques de table</li>
              <li>• Prendre des notes constamment</li>
              <li>• Rester concentré jusqu'au bout</li>
              <li>• Jouer pour la win</li>
            </ul>
          </div>
        </div>

        {/* Mental game tournois */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            🧠 Mental Game des Tournois
          </h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-2">Gérer la Variance</h3>
              <p className="text-sm text-gray-700">
                Les MTT ont une variance énorme. Même les meilleurs joueurs ne cashent que 
                15-20% du temps. Acceptez les longues périodes sans gains.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Endurance</h3>
              <p className="text-sm text-gray-700">
                Les tournois peuvent durer 8-12 heures. Préparez-vous physiquement : 
                hydratation, snacks sains, pauses régulières.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Focus Final</h3>
              <p className="text-sm text-gray-700">
                Les erreurs en fin de tournoi coûtent cher. Gardez votre concentration maximale 
                quand les enjeux sont les plus hauts.
              </p>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            🏆 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Adaptez votre stratégie à chaque phase : tight early, agro middle, ICM bubble
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                L'ICM change tout - les jetons n'ont pas une valeur linéaire en tournoi
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Votre stack size dicte votre stratégie - maîtrisez le push/fold
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Jouez pour gagner, pas pour min-cash - la vraie valeur est au sommet
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Pratiquez sur Stake
                </Link> avec des petits buy-ins pour développer votre jeu de tournoi
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/bluff-technique"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            L'Art du Bluff
          </Link>
          <Link 
            href="/guide-poker/cash-game"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Cash Game
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}