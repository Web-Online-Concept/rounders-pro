// app/guide-poker/cash-game/page.js
import Link from 'next/link';

export default function CashGamePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Cash Game</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💵 Cash Game
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le cash game est la forme la plus pure du poker. Chaque jeton a une valeur réelle, 
          vous pouvez quitter quand vous voulez, et la variance est plus faible qu'en tournoi. 
          Découvrez comment construire un winrate solide et devenir un grinder profitable.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Cash Game vs Tournois */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🆚 Cash Game vs Tournois
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Comprendre les différences fondamentales est crucial pour adapter votre stratégie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">💰 Avantages Cash Game</h3>
              <ul className="text-sm space-y-1">
                <li>• Liberté totale (arriver/partir)</li>
                <li>• Variance plus faible</li>
                <li>• Pas de pression ICM</li>
                <li>• Stacks profonds constants</li>
                <li>• Revenus plus réguliers</li>
                <li>• Possibilité de reload</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">⚠️ Inconvénients</h3>
              <ul className="text-sm space-y-1">
                <li>• Pas de gros multiplicateurs</li>
                <li>• Rake important (surtout micro)</li>
                <li>• Discipline requise constante</li>
                <li>• Tilt plus coûteux</li>
                <li>• Grind répétitif</li>
                <li>• Moins de gloire</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stratégie Deep Stack */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🏔️ Stratégie Deep Stack (100BB+)
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le jeu deep stack est où les vrais skills s'expriment. Plus de streets, 
              plus de décisions, plus d'edge pour les bons joueurs.
            </p>
          </div>

          <div className="space-y-4">
            {/* Préflop Deep */}
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">🎯 Ajustements Préflop</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold mb-1">Élargir :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Suited connectors (implied odds)</li>
                    <li>• Petites paires (set mining)</li>
                    <li>• Suited aces (nut potential)</li>
                    <li>• 3-bet bluff combos</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1">Attention :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Reverse implied odds</li>
                    <li>• Domination coûteuse</li>
                    <li>• SPR élevé = + de mistakes</li>
                    <li>• Éviter les gros pots marginaux</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Postflop Deep */}
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">♠️ Jeu Postflop Deep</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Multi-street planning :</strong>
                  <span className="text-xs block text-gray-600">Planifiez les 3 streets dès le flop</span>
                </li>
                <li>
                  <strong>Pot control crucial :</strong>
                  <span className="text-xs block text-gray-600">One pair = small pot, two pair+ = big pot</span>
                </li>
                <li>
                  <strong>Thin value betting :</strong>
                  <span className="text-xs block text-gray-600">Extraire max value des ranges de call larges</span>
                </li>
                <li>
                  <strong>Protection vs draws :</strong>
                  <span className="text-xs block text-gray-600">Charger cher les tirages avec stacks derrière</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎯 Table Selection - La Clé du Profit
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              "Ne cherchez pas à être le 10ème meilleur joueur du monde. Cherchez à jouer 
              contre le 10ème plus mauvais." La sélection de table est cruciale.
            </p>
          </div>

          {/* Critères de bonne table */}
          <div className="mb-4">
            <h3 className="font-bold text-green-700 mb-3">✅ Signes d'une Table Profitable</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-2">Stats à rechercher</h4>
                <ul className="text-xs space-y-1">
                  <li>• VPIP moyen {'>'} 30%</li>
                  <li>• Plusieurs joueurs 40%+ VPIP</li>
                  <li>• Beaucoup de limpers</li>
                  <li>• Pots multiway fréquents</li>
                  <li>• Peu de 3-bets</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-2">Comportements</h4>
                <ul className="text-xs space-y-1">
                  <li>• Showdown avec mains faibles</li>
                  <li>• Chase les tirages</li>
                  <li>• Tilt visible</li>
                  <li>• Stack pas à 100BB</li>
                  <li>• Chat actif (récréatifs)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Critères de mauvaise table */}
          <div>
            <h3 className="font-bold text-red-700 mb-3">❌ Tables à Éviter</h3>
            <div className="bg-red-50 rounded p-4">
              <ul className="text-sm space-y-1">
                <li>• Table pleine de regs (low VPIP, 3-bet élevé)</li>
                <li>• Personne ne va au showdown</li>
                <li>• Tout le monde a exactement 100BB</li>
                <li>• Silence total dans le chat</li>
                <li>• Vous êtes le fish de la table</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exploiter les récréatifs */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🐠 Exploiter les Joueurs Récréatifs
          </h2>
          
          <div className="bg-white bg-opacity-20 rounded p-4 mb-4">
            <p>
              Les récréatifs sont la source principale de profit. Apprenez à maximiser 
              votre edge contre leurs erreurs communes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Erreurs Typiques</h3>
              <ul className="text-sm space-y-1">
                <li>• Jouent trop de mains</li>
                <li>• Calling stations</li>
                <li>• Surévaluent top pair</li>
                <li>• Chase tous les tirages</li>
                <li>• Bluffent mal/jamais</li>
                <li>• Tilt facilement</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Ajustements</h3>
              <ul className="text-sm space-y-1">
                <li>• Value bet plus thin</li>
                <li>• Moins de bluffs</li>
                <li>• Gros sizings value</li>
                <li>• Isoler agressivement</li>
                <li>• Jouer plus de pots IP</li>
                <li>• Éviter les fancy plays</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-white bg-opacity-10 rounded p-4">
            <p className="text-center text-sm">
              💡 "Contre un fish, jouez ABC poker : value bet relentlessly, bluff sparingly"
            </p>
          </div>
        </div>

        {/* Winrate et Variance */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            📊 Winrate et Variance
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Comprendre les métriques du cash game vous aidera à évaluer vos performances 
              et gérer vos attentes.
            </p>
          </div>

          {/* Winrates typiques */}
          <div className="bg-white border-2 border-orange-200 rounded p-4 mb-4">
            <h3 className="font-semibold text-orange-700 mb-2">Winrates Réalistes (bb/100)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>Micro stakes (NL2-NL10) :</span>
                <span className="font-bold text-green-600">5-10 bb/100</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Small stakes (NL25-NL50) :</span>
                <span className="font-bold text-blue-600">3-7 bb/100</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Mid stakes (NL100-NL400) :</span>
                <span className="font-bold text-purple-600">2-5 bb/100</span>
              </div>
              <div className="flex justify-between items-center">
                <span>High stakes (NL500+) :</span>
                <span className="font-bold text-red-600">1-3 bb/100</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Note : Winrates après rake. Les meilleurs crushers peuvent faire mieux.
            </p>
          </div>

          {/* Sample size */}
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-semibold mb-2">📈 Sample Size Nécessaire</h3>
            <ul className="text-sm space-y-1">
              <li>• 10k mains : Rien n'est sûr</li>
              <li>• 50k mains : Tendance visible</li>
              <li>• 100k mains : Winrate approximatif</li>
              <li>• 500k+ mains : Winrate fiable</li>
            </ul>
          </div>
        </div>

        {/* Stratégies spécifiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🎮 Stratégies Spécifiques Cash Game
          </h2>
          
          <div className="space-y-4">
            {/* Short Stack Strategy */}
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">📉 Short Stack Strategy (20-40BB)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Stratégie simplifiée mais moins profitable. Utile pour débuter ou petit bankroll.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Push/fold avec premiums</li>
                <li>• Pas de jeu postflop complexe</li>
                <li>• Évite les erreurs coûteuses</li>
                <li>• Auto-profit vs mauvais joueurs</li>
                <li>• Limitation : plafond de winrate bas</li>
              </ul>
            </div>

            {/* Zoom/Fast Poker */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-semibold text-blue-700 mb-2">⚡ Zoom/Fast Poker</h3>
              <p className="text-sm text-gray-700 mb-2">
                Format rapide où vous changez de table après chaque fold.
              </p>
              <ul className="text-xs space-y-1">
                <li>• 3-4x plus de mains/heure</li>
                <li>• Pas de reads spécifiques</li>
                <li>• Jeu plus GTO nécessaire</li>
                <li>• Moins de récréatifs</li>
                <li>• Excellent pour grinder du volume</li>
              </ul>
            </div>

            {/* Live Cash Game */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">🎰 Live Cash Game</h3>
              <p className="text-sm text-gray-700 mb-2">
                Le live est très différent de l'online. Plus soft mais plus lent.
              </p>
              <ul className="text-xs space-y-1">
                <li>• 30 mains/heure seulement</li>
                <li>• Niveau général plus faible</li>
                <li>• Tells physiques importants</li>
                <li>• Rake souvent capé = gros pots EV+</li>
                <li>• Image et social skills comptent</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leaks communs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Leaks Communs en Cash Game
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-red-700 mb-3">🚫 Leaks Techniques</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Jouer trop de mains OOP</li>
              <li>• C-bet 100% (trop prévisible)</li>
              <li>• Pas assez de 3-bet</li>
              <li>• Overplay one pair hands</li>
              <li>• Sizing tells</li>
              <li>• Auto-pilot sans adaptation</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="font-bold text-orange-700 mb-3">🧠 Leaks Mentaux</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Jouer trop longtemps fatigué</li>
              <li>• Monter de limite trop vite</li>
              <li>• Tilt après bad beats</li>
              <li>• Pas quitter les mauvaises tables</li>
              <li>• Ego battles coûteux</li>
              <li>• Négliger la table selection</li>
            </ul>
          </div>
        </div>

        {/* Session Management */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            ⏱️ Session Management
          </h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-2">Durée Optimale</h3>
              <p className="text-sm text-gray-700">
                2-4 heures pour la concentration maximale. Qualité {'>'} Quantité. 
                Faites des pauses de 5 min toutes les heures.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Quand Arrêter</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Signes de fatigue (bâillements, erreurs)</li>
                <li>• Tilt détecté (même léger)</li>
                <li>• Table devenue mauvaise</li>
                <li>• Objectif de temps atteint</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Stop-Win ?</h3>
              <p className="text-sm text-gray-700">
                NON ! Si vous jouez bien et la table est bonne, continuez. 
                Les récréatifs peuvent être en tilt après avoir perdu.
              </p>
            </div>
          </div>
        </div>

        {/* Progression et amélioration */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📈 Plan de Progression Cash Game
          </h2>
          
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Commencer en NL2/NL5</strong>
                <p className="text-sm text-purple-100">Apprenez les bases sans pression financière</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>50k mains minimum par limite</strong>
                <p className="text-sm text-purple-100">Prouvez votre edge avant de monter</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Étudier 25% du temps de jeu</strong>
                <p className="text-sm text-purple-100">Vidéos, sims GTO, review de mains</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Tracker + analyse des stats</strong>
                <p className="text-sm text-purple-100">Identifiez et corrigez vos leaks</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <strong>Network avec d'autres grinders</strong>
                <p className="text-sm text-purple-100">Discutez stratégie, partagez les spots difficiles</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            💵 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La table selection est votre décision la plus importante - ne jouez que sur de bonnes tables
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le cash game reward la constance - développez une routine solide et respectez-la
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Exploitez les récréatifs sans pitié - ils sont là pour s'amuser, vous pour profit
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le volume est roi - visez la qualité ET la quantité pour maximiser l'hourly
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Grindez sur Stake
                </Link> avec une approche professionnelle et une bankroll management stricte
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/tournois-strategie"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Stratégie Tournois
          </Link>
          <Link 
            href="/guide-poker/poker-en-ligne"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Poker en Ligne
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}