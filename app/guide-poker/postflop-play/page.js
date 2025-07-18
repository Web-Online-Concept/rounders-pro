// app/guide-poker/postflop-play/page.js
import Link from 'next/link';

export default function PostflopPlayPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Jeu Postflop</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ♦️ Jeu Postflop
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le postflop est où les vrais profits se font. C'est là que la complexité du poker s'exprime 
          pleinement. Maîtriser les concepts de c-bet, value bet, pot control et lecture du board 
          vous permettra de maximiser vos gains et minimiser vos pertes.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Concepts fondamentaux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Concepts fondamentaux du postflop
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">🎯 C-Bet (Continuation Bet)</h3>
              <p className="text-sm text-gray-700">
                Miser au flop après avoir été l'agresseur préflop. Représente la force 
                et maintient l'initiative.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">💰 Value Bet</h3>
              <p className="text-sm text-gray-700">
                Miser avec une main forte pour extraire de la valeur des mains 
                plus faibles qui vont payer.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">🛡️ Pot Control</h3>
              <p className="text-sm text-gray-700">
                Gérer la taille du pot avec des mains moyennes pour éviter 
                de jouer un gros pot marginal.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">🎭 Bluff</h3>
              <p className="text-sm text-gray-700">
                Représenter une main forte quand on est faible. Doit raconter 
                une histoire crédible.
              </p>
            </div>
          </div>
        </div>

        {/* Texture des flops */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            📊 Comprendre les textures de flop
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              La texture du flop détermine votre stratégie. Apprenez à catégoriser les flops 
              pour adapter votre jeu.
            </p>
          </div>

          {/* Flops secs */}
          <div className="mb-6">
            <h3 className="font-bold text-green-700 mb-3">🏜️ Flops Secs (Dry)</h3>
            <div className="bg-green-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Exemples :</strong> K♠️ 7♦️ 2♣️ ou A♥️ 8♣️ 3♦️
              </p>
              <ul className="text-sm space-y-1">
                <li>• Peu de tirages possibles</li>
                <li>• C-bet fréquent et petit (33-40% pot)</li>
                <li>• Favorise le range de l'agresseur préflop</li>
                <li>• Bluff peu coûteux</li>
              </ul>
            </div>
          </div>

          {/* Flops humides */}
          <div className="mb-6">
            <h3 className="font-bold text-blue-700 mb-3">💧 Flops Humides (Wet)</h3>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Exemples :</strong> 9♥️ 8♥️ 7♠️ ou J♦️ T♦️ 8♣️
              </p>
              <ul className="text-sm space-y-1">
                <li>• Nombreux tirages (suites, couleurs)</li>
                <li>• C-bet sélectif et plus gros (66-75% pot)</li>
                <li>• Protection nécessaire avec mains vulnérables</li>
                <li>• Check-raise fréquent des adversaires</li>
              </ul>
            </div>
          </div>

          {/* Flops monotones */}
          <div className="mb-6">
            <h3 className="font-bold text-red-700 mb-3">🎨 Flops Monotones</h3>
            <div className="bg-red-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Exemples :</strong> K♣️ J♣️ 5♣️ ou A♦️ 9♦️ 4♦️
              </p>
              <ul className="text-sm space-y-1">
                <li>• 3 cartes de même couleur</li>
                <li>• C-bet très prudent</li>
                <li>• Favorise le défenseur (plus de suited)</li>
                <li>• Petit sizing avec range entière</li>
              </ul>
            </div>
          </div>

          {/* Flops paired */}
          <div>
            <h3 className="font-bold text-orange-700 mb-3">👯 Flops Doublés (Paired)</h3>
            <div className="bg-orange-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Exemples :</strong> Q♠️ Q♦️ 5♣️ ou 7♥️ 7♣️ 2♦️
              </p>
              <ul className="text-sm space-y-1">
                <li>• Peu de combinaisons de brelan</li>
                <li>• C-bet fréquent petit sizing</li>
                <li>• Bluff très efficace</li>
                <li>• Difficile pour l'adversaire de continuer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stratégie de C-bet */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎯 Stratégie de Continuation Bet
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le c-bet moderne n'est plus automatique. La fréquence et le sizing dépendent 
              de la texture du board et du nombre d'adversaires.
            </p>
          </div>

          {/* Quand C-bet */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">✅ C-bet fréquent</h3>
              <ul className="text-sm space-y-1">
                <li>• Flops secs favorables (A-high, K-high)</li>
                <li>• Heads-up en position</li>
                <li>• Boards paired</li>
                <li>• Quand vous avez équité + blockers</li>
                <li>• vs Adversaires tight/passifs</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">❌ Check fréquent</h3>
              <ul className="text-sm space-y-1">
                <li>• Flops très connectés (789, JT9)</li>
                <li>• Multiway (3+ joueurs)</li>
                <li>• Monotone sans couleur</li>
                <li>• Hors position vs bon joueur</li>
                <li>• Board favorise le défenseur</li>
              </ul>
            </div>
          </div>

          {/* Sizing C-bet */}
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-semibold mb-2">Sizing moderne du C-bet</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>• Flop sec, HU :</span>
                <span className="font-semibold">33-40% du pot</span>
              </div>
              <div className="flex justify-between">
                <span>• Flop humide, protection :</span>
                <span className="font-semibold">66-75% du pot</span>
              </div>
              <div className="flex justify-between">
                <span>• Multiway :</span>
                <span className="font-semibold">50-66% du pot</span>
              </div>
              <div className="flex justify-between">
                <span>• Polarisé (nuts ou air) :</span>
                <span className="font-semibold">75-100% du pot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Turn Play */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🔄 Jeu au Turn
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le turn sépare les bons joueurs des grands joueurs. Les pots grossissent 
              et les décisions deviennent cruciales.
            </p>
          </div>

          <div className="space-y-4">
            {/* Barreling */}
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">🚂 Double Barrel (2nd C-bet)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Continuer l'agression au turn après avoir c-bet le flop.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold mb-1">Bonnes cartes turn :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Overcards au board</li>
                    <li>• Cartes qui complètent vos tirages</li>
                    <li>• Cartes qui bloquent les tirages adverses</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1">Mauvaises cartes turn :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Cartes qui complètent les tirages</li>
                    <li>• Cartes dans le range de call adverse</li>
                    <li>• Doublette du board</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pot Control */}
            <div className="bg-white border-2 border-blue-200 rounded p-4">
              <h3 className="font-semibold text-blue-700 mb-2">🛡️ Pot Control au Turn</h3>
              <p className="text-sm text-gray-700 mb-2">
                Avec des mains moyennes, contrôlez le pot pour voir un showdown pas cher.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Check behind en position avec top pair weak kicker</li>
                <li>• Petite mise défensive hors position</li>
                <li>• Évaluer si votre main peut supporter 3 streets de value</li>
                <li>• Préférer check-call vs joueurs agressifs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* River Decisions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🌊 Décisions River
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              La river est la street de la vérité. Plus de cartes à venir, les ranges sont 
              définis, et les décisions sont souvent pour des gros pots.
            </p>
          </div>

          {/* Value Betting */}
          <div className="mb-4">
            <h3 className="font-bold text-green-700 mb-3">💰 Value Bet River</h3>
            <div className="bg-green-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                Pour value bet river, vous devez gagner >50% quand payé.
              </p>
              <div className="bg-white rounded p-3 mt-2">
                <p className="font-semibold text-sm mb-2">Questions à se poser :</p>
                <ul className="text-sm space-y-1">
                  <li>1. Quelles mains moins bonnes peuvent payer ?</li>
                  <li>2. Quelles meilleures mains l'adversaire aurait déjà relancé ?</li>
                  <li>3. Mon sizing induit-il les calls des mains ciblées ?</li>
                  <li>4. Suis-je prêt à faire face à un raise ?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bluffing */}
          <div className="mb-4">
            <h3 className="font-bold text-red-700 mb-3">🎭 Bluff River</h3>
            <div className="bg-red-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                Les bluffs river doivent raconter une histoire cohérente.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div className="bg-white rounded p-3">
                  <p className="text-xs font-semibold mb-1">Bons bluffs river :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Tirages manqués avec blockers</li>
                    <li>• As ou K comme blockers</li>
                    <li>• Histoire cohérente</li>
                    <li>• vs Ranges cappées</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-xs font-semibold mb-1">Mauvais bluffs river :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Aucun blocker pertinent</li>
                    <li>• vs Calling stations</li>
                    <li>• Sizing incohérent</li>
                    <li>• Board trop connecté</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Calls */}
          <div>
            <h3 className="font-bold text-purple-700 mb-3">🦸 Hero Call River</h3>
            <div className="bg-purple-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                Payer avec une main faible (bluff-catcher) nécessite une analyse précise.
              </p>
              <div className="bg-white rounded p-3 mt-2">
                <p className="font-semibold text-sm mb-2">Facteurs pour hero call :</p>
                <ul className="text-sm space-y-1">
                  <li>• L'histoire est-elle cohérente ?</li>
                  <li>• L'adversaire bluff-t-il assez ? (>33% avec pot bet)</li>
                  <li>• Avez-vous des blockers sur ses value hands ?</li>
                  <li>• Votre image induit-elle le bluff ?</li>
                  <li>• Le sizing suggère-t-il bluff ou value ?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Concepts avancés */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Concepts Postflop Avancés
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">Float</h3>
              <p className="text-indigo-100">
                Suivre une mise avec l'intention de bluffer plus tard. Efficace en position 
                contre les c-betteurs fréquents.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">Check-Raise</h3>
              <p className="text-indigo-100">
                Puissant move pour reprendre l'initiative. Utilisez avec vos mains fortes 
                et des bluffs bien choisis (tirages + blockers).
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">Donk Bet</h3>
              <p className="text-indigo-100">
                Miser hors position dans l'agresseur préflop. Rare mais efficace sur 
                certaines textures qui favorisent votre range.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">Probe Bet</h3>
              <p className="text-indigo-100">
                Miser quand l'agresseur préflop a check behind. Exploite la faiblesse 
                perçue et prend l'initiative.
              </p>
            </div>
          </div>
        </div>

        {/* Sizing */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💰 Guide des Sizings Postflop
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700 text-center font-semibold">
              Le sizing révèle vos intentions. Utilisez différents sizings pour différents objectifs.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white border-2 border-green-200 rounded p-3">
              <div>
                <span className="font-semibold">Small (25-40% pot)</span>
                <p className="text-xs text-gray-600">Probe, block bet, c-bet dry flops</p>
              </div>
              <span className="text-green-600 font-bold">Info/Control</span>
            </div>
            
            <div className="flex items-center justify-between bg-white border-2 border-blue-200 rounded p-3">
              <div>
                <span className="font-semibold">Medium (50-66% pot)</span>
                <p className="text-xs text-gray-600">Standard c-bet, value standard</p>
              </div>
              <span className="text-blue-600 font-bold">Balanced</span>
            </div>
            
            <div className="flex items-center justify-between bg-white border-2 border-orange-200 rounded p-3">
              <div>
                <span className="font-semibold">Large (75-100% pot)</span>
                <p className="text-xs text-gray-600">Protection, value forte, bluff polarisé</p>
              </div>
              <span className="text-orange-600 font-bold">Polarized</span>
            </div>
            
            <div className="flex items-center justify-between bg-white border-2 border-red-200 rounded p-3">
              <div>
                <span className="font-semibold">Overbet (>100% pot)</span>
                <p className="text-xs text-gray-600">Nuts ou bluff, max pressure</p>
              </div>
              <span className="text-red-600 font-bold">Extreme</span>
            </div>
          </div>
        </div>

        {/* Ajustements */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ajustements selon les adversaires
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-700 mb-3">🐠 vs Récréatifs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Value bet plus large et plus souvent</li>
              <li>• Moins de bluffs sophistiqués</li>
              <li>• Gros sizings avec vos mains fortes</li>
              <li>• Évitez les moves fancy</li>
              <li>• Exploitez leurs leaks évidents</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-purple-700 mb-3">🦈 vs Réguliers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Équilibrez vos ranges</li>
              <li>• Utilisez des sizings mixtes</li>
              <li>• Bluffez avec des combos logiques</li>
              <li>• Protégez vos ranges de check</li>
              <li>• Pensez en terme de ranges vs ranges</li>
            </ul>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            ♦️ Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La texture du board détermine votre stratégie - adaptez fréquence et sizing
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le c-bet n'est plus automatique - checkez parfois pour protéger votre range
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Position = information = profit. Exploitez l'avantage positionnel sans pitié
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Vos sizings doivent avoir un but précis - ne misez pas "au feeling"
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Pratiquez ces concepts sur Stake
                </Link> en analysant chaque décision postflop consciemment
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/preflop-strategy"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Stratégie Préflop
          </Link>
          <Link 
            href="/guide-poker/cotes-probabilites"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Cotes et Probabilités
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}