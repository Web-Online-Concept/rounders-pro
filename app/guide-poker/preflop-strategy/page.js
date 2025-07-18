// app/guide-poker/preflop-strategy/page.js
import Link from 'next/link';

export default function PreflopStrategyPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Stratégie Préflop</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎯 Stratégie Préflop
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le préflop est la fondation de votre jeu. Une stratégie préflop solide vous évitera des 
          situations difficiles post-flop et maximisera votre edge. Découvrez les ranges optimales, 
          les concepts de 3-bet/4-bet et comment adapter votre jeu selon les adversaires.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Concepts fondamentaux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Les concepts fondamentaux du préflop
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">🎯 RFI (Raise First In)</h3>
              <p className="text-sm text-gray-700">
                Quand personne n'a ouvert avant vous, vous faites un "raise first in". 
                C'est la base de votre stratégie d'ouverture.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">📊 Range</h3>
              <p className="text-sm text-gray-700">
                L'ensemble des mains que vous jouez dans une situation donnée. 
                Exprimée en pourcentage ou liste de mains.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">🚀 3-Bet</h3>
              <p className="text-sm text-gray-700">
                Sur-relancer après une ouverture. Utilisé pour value avec les premiums 
                et en bluff pour équilibrer.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">💥 4-Bet</h3>
              <p className="text-sm text-gray-700">
                Sur-relancer un 3-bet. Généralement avec les mains très fortes 
                ou en bluff polarisé.
              </p>
            </div>
          </div>
        </div>

        {/* Ranges d'ouverture */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Ranges d'ouverture par position (6-max)
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700 text-center">
              Ces ranges sont un point de départ solide. Ajustez selon la dynamique de table.
            </p>
          </div>

          {/* UTG Range */}
          <div className="mb-6">
            <h3 className="font-bold text-orange-700 mb-3">🔴 UTG - 15% des mains</h3>
            <div className="bg-orange-50 rounded p-4">
              <div className="grid grid-cols-13 gap-1 text-xs font-mono mb-2">
                <div className="bg-red-500 text-white p-1 text-center rounded">AA</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">KK</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">QQ</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">JJ</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">TT</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">99</div>
                <div className="bg-orange-500 text-white p-1 text-center rounded">88</div>
                <div className="bg-orange-500 text-white p-1 text-center rounded">77</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">AKs</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">AQs</div>
                <div className="bg-orange-500 text-white p-1 text-center rounded">AJs</div>
                <div className="bg-red-500 text-white p-1 text-center rounded">AKo</div>
                <div className="bg-orange-500 text-white p-1 text-center rounded">AQo</div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                + KQs, ATs, A5s-A4s (suited wheel aces)
              </p>
            </div>
          </div>

          {/* MP Range */}
          <div className="mb-6">
            <h3 className="font-bold text-blue-700 mb-3">🔵 MP - 20% des mains</h3>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Toute la range UTG +</strong>
              </p>
              <div className="grid grid-cols-10 gap-1 text-xs font-mono">
                <div className="bg-blue-500 text-white p-1 text-center rounded">66</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">55</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">AJo</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">KJs</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">QJs</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">JTs</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">T9s</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">98s</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">A9s</div>
                <div className="bg-blue-500 text-white p-1 text-center rounded">KQo</div>
              </div>
            </div>
          </div>

          {/* CO Range */}
          <div className="mb-6">
            <h3 className="font-bold text-green-700 mb-3">🟢 CO - 27% des mains</h3>
            <div className="bg-green-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Toute la range MP +</strong>
              </p>
              <div className="grid grid-cols-12 gap-1 text-xs font-mono">
                <div className="bg-green-500 text-white p-1 text-center rounded">44</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">33</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">22</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">ATo</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">A8s</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">A7s</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">A6s</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">KTs</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">QTs</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">87s</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">76s</div>
                <div className="bg-green-500 text-white p-1 text-center rounded">65s</div>
              </div>
            </div>
          </div>

          {/* BTN Range */}
          <div className="mb-6">
            <h3 className="font-bold text-yellow-700 mb-3">👑 BTN - 45% des mains</h3>
            <div className="bg-yellow-50 rounded p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Range très large incluant :</strong>
              </p>
              <ul className="text-sm space-y-1">
                <li>• Toutes les paires (22+)</li>
                <li>• Tous les As (A2s+, A7o+)</li>
                <li>• Tous les broadways (KJ+, QJ+)</li>
                <li>• Suited connectors (54s+)</li>
                <li>• Suited gappers (J8s, T7s, etc.)</li>
                <li>• K9o, Q9o, J9o, T9o</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sizing d'ouverture */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💰 Sizing d'ouverture
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le sizing standard a évolué. Aujourd'hui, les ouvertures plus petites sont la norme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">Online (6-max)</h3>
              <ul className="text-sm space-y-1">
                <li>• UTG/MP : 2.5x BB</li>
                <li>• CO : 2.5x BB</li>
                <li>• BTN : 2.2x BB</li>
                <li>• SB : 3x BB</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">Live / Ajustements</h3>
              <ul className="text-sm space-y-1">
                <li>• Live : +1BB par limper</li>
                <li>• Table passive : sizing plus gros</li>
                <li>• Table agressive : sizing plus petit</li>
                <li>• Deep stack : augmenter légèrement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stratégie de 3-bet */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🚀 Stratégie de 3-Bet
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le 3-bet moderne est polarisé : les meilleures mains (value) et quelques bluffs bien choisis.
            </p>
          </div>

          {/* 3-bet ranges */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">Value 3-bet</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1">vs Early Position :</p>
                  <p className="text-sm">QQ+, AK</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">vs Late Position :</p>
                  <p className="text-sm">TT+, AQ+, KQs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">Bluff 3-bet</h3>
              <p className="text-sm text-gray-700 mb-2">
                Choisissez des mains avec blockers et potentiel :
              </p>
              <ul className="text-sm space-y-1">
                <li>• A5s, A4s (blockers As + potentiel straight)</li>
                <li>• K9s, Q9s (blockers + jouabilité)</li>
                <li>• 65s, 76s (connecteurs suited)</li>
                <li>• Ratio : 2 value pour 1 bluff environ</li>
              </ul>
            </div>
          </div>

          {/* 3-bet sizing */}
          <div className="mt-4 bg-gray-100 rounded p-4">
            <h3 className="font-semibold mb-2">Sizing de 3-bet</h3>
            <ul className="text-sm space-y-1">
              <li>• En position : 3x la relance initiale</li>
              <li>• Hors position : 3.5-4x la relance initiale</li>
              <li>• vs Min-raise : au moins 3.5x</li>
              <li>• Multiway : augmenter le sizing</li>
            </ul>
          </div>
        </div>

        {/* Défense contre 3-bet */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🛡️ Défense contre 3-Bet
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Face à un 3-bet, vous avez 3 options : fold, call ou 4-bet. La décision dépend 
              de votre position, la position du 3-betteur et les tendances adverses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">Fold</h3>
              <ul className="text-sm space-y-1">
                <li>• Bottom de votre range</li>
                <li>• Mains dominées</li>
                <li>• vs 3-bet tight</li>
                <li>• Hors position</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">Call</h3>
              <ul className="text-sm space-y-1">
                <li>• Mains moyennes fortes</li>
                <li>• Paires moyennes</li>
                <li>• Broadways suited</li>
                <li>• En position</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">4-Bet</h3>
              <ul className="text-sm space-y-1">
                <li>• JJ+, AK (value)</li>
                <li>• A5s, A4s (bluff)</li>
                <li>• vs 3-bet fréquent</li>
                <li>• Sizing : 2.2-2.5x</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Défense des blinds */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🛡️ Défense des Blinds
          </h2>
          
          <div className="bg-indigo-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Défendre correctement ses blinds est crucial pour limiter les pertes. 
              La BB a de meilleures pot odds que la SB.
            </p>
          </div>

          {/* BB Defense */}
          <div className="mb-4">
            <h3 className="font-bold text-indigo-700 mb-3">Big Blind Defense</h3>
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <p className="text-sm font-semibold mb-2">vs 2.5x open :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold mb-1">vs BTN (défense ~40%) :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Toutes les paires</li>
                    <li>• A2s+, K4s+, Q6s+</li>
                    <li>• J7s+, T7s+, 97s+</li>
                    <li>• A7o+, K9o+, Q9o+</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1">vs UTG (défense ~15%) :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• 77+, parfois 22-66</li>
                    <li>• ATs+, KQs</li>
                    <li>• AQo+ parfois</li>
                    <li>• Suited connectors 78s+</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SB Defense */}
          <div>
            <h3 className="font-bold text-indigo-700 mb-3">Small Blind Defense</h3>
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <p className="text-sm font-semibold mb-2">Stratégie 3-bet ou fold :</p>
              <ul className="text-sm space-y-1">
                <li>• 3-bet : TT+, AQ+, bluffs polarisés</li>
                <li>• Call très rare (pot odds mauvaises)</li>
                <li>• Préférez le 3-bet avec initiative</li>
                <li>• Range totale ~15-20% vs late position</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ajustements */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ⚡ Ajustements exploitants
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">vs Joueur Tight</h3>
              <p className="text-purple-100">
                • Volez plus souvent leurs blinds<br/>
                • Réduisez vos calls de 3-bet<br/>
                • Croyez leurs 4-bets
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">vs Joueur Loose</h3>
              <p className="text-purple-100">
                • Resserrez vos opens<br/>
                • 3-bet plus en value<br/>
                • Élargissez vos calls de 3-bet
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">vs Joueur Passif</h3>
              <p className="text-purple-100">
                • Ouvrez plus large<br/>
                • C-bet fréquemment<br/>
                • Value bet thin
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-2">vs Joueur Agressif</h3>
              <p className="text-purple-100">
                • Piégez avec vos premiums<br/>
                • 4-bet bluff plus souvent<br/>
                • Call plus light en position
              </p>
            </div>
          </div>
        </div>

        {/* Erreurs fréquentes */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Erreurs préflop fréquentes
        </h2>
        <div className="space-y-4 mb-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ Jouer trop de mains</h3>
            <p className="text-gray-700">
              Le leak #1 des joueurs récréatifs. Respectez les ranges par position, 
              même si vous vous ennuyez.
            </p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ Limper</h3>
            <p className="text-gray-700">
              Ne limpez JAMAIS en première position. Raise ou fold. 
              Exception : SB vs BB en heads-up.
            </p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ Sizing incohérent</h3>
            <p className="text-gray-700">
              Utilisez le même sizing pour toute votre range dans une position donnée. 
              Ne donnez pas d'information gratuite.
            </p>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            🎯 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La position détermine votre range - serré en early, large en late position
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Ne limpez jamais - raise first in ou fold (sauf SB vs BB)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                3-bet polarisé : vos meilleures mains + quelques bluffs avec blockers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Défendez vos blinds mais ne surdefendez pas - la position compte
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Pratiquez ces concepts sur Stake
                </Link> en commençant par des ranges serrées puis élargissez progressivement
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/positions-table"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Positions à la Table
          </Link>
          <Link 
            href="/guide-poker/postflop-play"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Jeu Postflop
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}