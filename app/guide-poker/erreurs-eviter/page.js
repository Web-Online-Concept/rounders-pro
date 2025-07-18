// app/guide-poker/erreurs-eviter/page.js
import Link from 'next/link';

export default function ErreursEviterPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-blue-600 hover:text-blue-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Erreurs à Éviter</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ❌ Erreurs à Éviter
      </h1>

      {/* Chapeau */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les erreurs au poker coûtent cher. Que vous soyez débutant ou joueur confirmé, 
          identifier et corriger vos leaks est essentiel pour progresser. Découvrez les pièges 
          classiques qui ruinent les bankrolls et comment les éviter définitivement.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Erreurs Préflop */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🚨 Erreurs Préflop Fatales
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le préflop est la fondation. Des erreurs ici se propagent et s'amplifient postflop.
            </p>
          </div>

          <div className="space-y-4">
            {/* Jouer trop de mains */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">1. Jouer Trop de Mains</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">❌ L'erreur :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• VPIP {'>'} 30% en 6-max</li>
                    <li>• Jouer K2o, Q7s, J8o...</li>
                    <li>• "Mais c'est suited!"</li>
                    <li>• Chasser l'action</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">✅ La solution :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Ranges strictes par position</li>
                    <li>• Fold pré sans hésiter</li>
                    <li>• Qualité {'>'} Quantité</li>
                    <li>• Patience = Profit</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limper */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">2. Limper (Open Limp)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">❌ L'erreur :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Juste caller la BB</li>
                    <li>• "Je veux voir le flop cheap"</li>
                    <li>• Limp avec AA pour piéger</li>
                    <li>• Pas d'initiative</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">✅ La solution :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Raise ou Fold TOUJOURS</li>
                    <li>• Exception : SB vs BB</li>
                    <li>• Prenez l'initiative</li>
                    <li>• Construisez le pot</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Calling 3-bets OOP */}
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">3. Call 3-Bet Hors Position</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">❌ L'erreur :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Call avec AJ, KQ OOP</li>
                    <li>• "Mais j'ai investi!"</li>
                    <li>• Jouer OOP = hard mode</li>
                    <li>• Dominé souvent</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">✅ La solution :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• 4-bet ou fold mostly</li>
                    <li>• Call only IP</li>
                    <li>• Ranges polarisées</li>
                    <li>• Position {'>'} Cartes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Erreurs Postflop */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            💥 Erreurs Postflop Coûteuses
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le postflop est où les gros pots se jouent. Les erreurs ici vident les bankrolls rapidement.
            </p>
          </div>

          <div className="space-y-4">
            {/* Overplay Top Pair */}
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">4. Surjouer Top Pair</h3>
              <p className="text-sm text-gray-700 mb-2">
                L'erreur classique qui coûte des stacks entiers.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Exemple désastreux :</p>
                <p className="text-xs">Vous : A♠️K♣️, Board : K♥️8♦️5♣️2♠️9♥️</p>
                <p className="text-xs">Action : Bet-Raise-Reraise... All-in avec TPTK</p>
                <p className="text-xs">Adversaire montre : 88 (set)</p>
                <p className="text-xs font-semibold mt-2">→ Solution : One pair = Small/Medium pot</p>
              </div>
            </div>

            {/* Chaser sans cotes */}
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">5. Chaser les Tirages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">❌ L'erreur :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Call sans pot odds</li>
                    <li>• "Mais si je touche..."</li>
                    <li>• Gutshots = gold</li>
                    <li>• Ignorer les sizings</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-xs font-semibold mb-1">✅ La solution :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Calculer TOUJOURS</li>
                    <li>• Fold si -EV</li>
                    <li>• Considérer implied odds</li>
                    <li>• Discipline {'>'} Espoir</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Predictable patterns */}
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">6. Patterns Prévisibles</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>C-bet 100% :</strong>
                  <span className="text-xs block text-gray-600">→ Les regs vous exploitent avec check-raises</span>
                </li>
                <li>
                  <strong>Check-fold trop souvent :</strong>
                  <span className="text-xs block text-gray-600">→ Invitez les bluffs constants</span>
                </li>
                <li>
                  <strong>Sizing tells :</strong>
                  <span className="text-xs block text-gray-600">→ Gros = nuts, petit = weak (terrible)</span>
                </li>
                <li>
                  <strong>Timing tells :</strong>
                  <span className="text-xs block text-gray-600">→ Instant = fort ou très faible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erreurs de Bankroll */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            💸 Erreurs de Bankroll Management
          </h2>
          
          <div className="bg-white bg-opacity-20 rounded p-4 mb-4">
            <p>
              Les erreurs de gestion de bankroll sont les plus destructrices. 
              Elles peuvent ruiner même les meilleurs joueurs techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Shot Taking Sauvage</h3>
              <ul className="text-sm space-y-1">
                <li>• Jouer NL200 avec 500€</li>
                <li>• "Je me sens en forme"</li>
                <li>• Ignorer les règles BRM</li>
                <li>• Un bad beat = broke</li>
              </ul>
              <p className="text-xs mt-2 font-semibold">
                → Fix : Shots avec MAX 10% BR
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Chasing Losses</h3>
              <ul className="text-sm space-y-1">
                <li>• Monter de limite en tilt</li>
                <li>• "Je dois récupérer"</li>
                <li>• Session marathon -EV</li>
                <li>• Dégénérer sur casino/sports</li>
              </ul>
              <p className="text-xs mt-2 font-semibold">
                → Fix : Stop loss strict
              </p>
            </div>
          </div>

          <div className="mt-4 bg-white bg-opacity-10 rounded p-4">
            <p className="text-center font-semibold">
              "La bankroll management ennuyeuse {'>'} Les moves fancy excitants"
            </p>
          </div>
        </div>

        {/* Erreurs Mentales */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🧠 Erreurs Mentales et Émotionnelles
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le mental game est souvent négligé mais cause autant de pertes que les erreurs techniques.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">7. Résultats {'>'} Processus</h3>
              <p className="text-sm text-gray-700 mb-2">
                Focus sur les gains court terme plutôt que les bonnes décisions.
              </p>
              <ul className="text-xs space-y-1">
                <li>• "J'ai perdu avec AA, c'est injuste!"</li>
                <li>• Juger une session sur le résultat</li>
                <li>• Négliger l'étude après une bonne session</li>
              </ul>
              <p className="text-xs font-semibold mt-2 text-green-600">
                → Focus : Décisions +EV, pas résultats
              </p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">8. Ego Battles</h3>
              <p className="text-sm text-gray-700 mb-2">
                Vouloir "montrer qui est le boss" coûte des fortunes.
              </p>
              <ul className="text-xs space-y-1">
                <li>• "Il me bluff tout le temps, je vais le coincer"</li>
                <li>• Cibler un joueur spécifique</li>
                <li>• Jouer pour l'ego, pas le profit</li>
              </ul>
              <p className="text-xs font-semibold mt-2 text-green-600">
                → Fix : Détachement émotionnel total
              </p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">9. Autopilot Mode</h3>
              <p className="text-sm text-gray-700 mb-2">
                Jouer sans réfléchir, surtout en multi-tabling.
              </p>
              <ul className="text-xs space-y-1">
                <li>• Décisions automatiques</li>
                <li>• Pas d'adaptation aux adversaires</li>
                <li>• Grind zombie sans focus</li>
              </ul>
              <p className="text-xs font-semibold mt-2 text-green-600">
                → Fix : Pauses régulières, moins de tables
              </p>
            </div>
          </div>
        </div>

        {/* Erreurs spécifiques formats */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🎮 Erreurs Spécifiques par Format
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">🏆 Erreurs Tournois</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Survival mode :</strong>
                  <span className="text-xs block text-gray-600">Jouer pour min-cash = -EV</span>
                </li>
                <li>
                  <strong>Ignorer l'ICM :</strong>
                  <span className="text-xs block text-gray-600">Flips inutiles en bubble</span>
                </li>
                <li>
                  <strong>Pas adapter aux phases :</strong>
                  <span className="text-xs block text-gray-600">Même stratégie early/late</span>
                </li>
                <li>
                  <strong>Négliger les stacks :</strong>
                  <span className="text-xs block text-gray-600">Pas exploiter les shorts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">💰 Erreurs Cash Game</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Mauvaise table selection :</strong>
                  <span className="text-xs block text-gray-600">Jouer vs 8 regs</span>
                </li>
                <li>
                  <strong>Pas quitter gagnant :</strong>
                  <span className="text-xs block text-gray-600">Donner back les gains</span>
                </li>
                <li>
                  <strong>Stack sizes ignorés :</strong>
                  <span className="text-xs block text-gray-600">Pas adapter vs shorts</span>
                </li>
                <li>
                  <strong>Ratholing :</strong>
                  <span className="text-xs block text-gray-600">Mauvais pour l'image</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comment identifier ses leaks */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🔍 Identifier et Corriger ses Leaks
        </h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">1. Utilisez votre Tracker</h3>
              <p className="text-sm text-gray-700">
                Filtrez par situation : regardez votre winrate par position, par taille de pot, 
                par action. Les zones rouges = leaks.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">2. Review Hebdomadaire</h3>
              <p className="text-sm text-gray-700">
                Chaque semaine, analysez vos 10 plus gros pots perdus. 
                Erreur ou cooler ? Soyez honnête.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">3. Study Group</h3>
              <p className="text-sm text-gray-700">
                Discutez vos mains avec d'autres joueurs. Un regard externe 
                révèle des leaks invisibles pour vous.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">4. Coach ou Vidéos</h3>
              <p className="text-sm text-gray-700">
                Investir dans du coaching ou des vidéos premium accélère 
                l'identification et correction des leaks.
              </p>
            </div>
          </div>
        </div>

        {/* Erreurs de progression */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            📈 Erreurs de Progression
          </h2>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <div>
                <strong>Brûler les étapes :</strong>
                <span className="text-sm block">Passer de NL10 à NL100 directement = désastre</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <div>
                <strong>Négliger l'étude :</strong>
                <span className="text-sm block">"Je vais apprendre en jouant" = stagnation</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <div>
                <strong>Pas de plan structuré :</strong>
                <span className="text-sm block">Jouer au hasard sans objectifs = errance</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">•</span>
              <div>
                <strong>Comparer aux autres :</strong>
                <span className="text-sm block">Votre progression ≠ celle des autres</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Plan d'action */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ✅ Plan d'Action Anti-Erreurs
          </h2>
          
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Audit Honnête</strong>
                <p className="text-sm text-blue-100">Listez vos 5 plus gros leaks actuels</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Prioriser</strong>
                <p className="text-sm text-blue-100">Attaquez le leak le plus coûteux en premier</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Plan Spécifique</strong>
                <p className="text-sm text-blue-100">Actions concrètes pour chaque leak</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Mesurer</strong>
                <p className="text-sm text-blue-100">Tracker pour vérifier l'amélioration</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <strong>Itérer</strong>
                <p className="text-sm text-blue-100">Nouveau leak → Répéter le processus</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            ❌ Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Les erreurs préflop se propagent - une fondation solide évite des catastrophes postflop
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                La bankroll management ennuyeuse protège votre avenir - respectez-la religieusement
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Le tilt et l'ego coûtent plus cher que le manque technique - travaillez votre mental
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Identifier ses leaks nécessite honnêteté et humilité - le déni = stagnation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-blue-300">
                  Commencez sur Stake aux micro-limites
                </Link> pour corriger vos erreurs sans pression financière
              </span>
            </li>
          </ul>
        </div>

        {/* Message final */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            🎯 Le Poker est un Jeu d'Erreurs
          </h3>
          <p className="text-lg mb-4">
            "Celui qui fait le moins d'erreurs gagne." - Doyle Brunson
          </p>
          <p className="text-blue-100">
            Acceptez vos erreurs, apprenez d'elles, et transformez-les en profit. 
            La perfection n'existe pas, mais l'amélioration constante mène au succès.
          </p>
          <div className="mt-6">
            <Link 
              href="/guide-stake"
              className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Commencer sur Stake →
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/poker-en-ligne"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Poker en Ligne
          </Link>
          <Link 
            href="/guide-poker"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Retour au Guide
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}