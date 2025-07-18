// app/guide-poker/cotes-probabilites/page.js
import Link from 'next/link';

export default function CotesProbabilitesPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-blue-600 hover:text-blue-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Cotes et Probabilités</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📊 Cotes et Probabilités
      </h1>

      {/* Chapeau */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le poker est un jeu de décisions mathématiques. Comprendre les cotes, l'équité et les 
          probabilités vous permettra de savoir quand suivre, relancer ou se coucher. Ces concepts 
          sont la base d'un jeu profitable à long terme.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Concepts de base */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Concepts fondamentaux
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">🎯 Outs</h3>
              <p className="text-sm text-gray-700">
                Cartes qui améliorent votre main. Un tirage couleur a 9 outs, 
                un tirage quinte par les deux bouts a 8 outs.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">📈 Équité</h3>
              <p className="text-sm text-gray-700">
                Votre pourcentage de chances de gagner le pot à l'abattage. 
                AA vs KK = 80% d'équité pour les As.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">💰 Pot Odds</h3>
              <p className="text-sm text-gray-700">
                Rapport entre la mise à payer et le pot total. 
                Détermine si un call est mathématiquement correct.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">💎 Implied Odds</h3>
              <p className="text-sm text-gray-700">
                Argent supplémentaire que vous pouvez gagner si vous touchez. 
                Justifie parfois un call -EV direct.
              </p>
            </div>
          </div>
        </div>

        {/* Calcul des Outs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🎯 Compter ses Outs
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              La première étape est d'identifier combien de cartes améliorent votre main. 
              Attention aux outs "sales" qui peuvent aussi aider l'adversaire.
            </p>
          </div>

          {/* Table des outs communs */}
          <div className="bg-white border-2 border-purple-200 rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Outs pour les tirages courants</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>🔸 Tirage couleur (4 cartes suited)</span>
                <span className="font-bold text-purple-700">9 outs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🔸 Tirage quinte par les deux bouts</span>
                <span className="font-bold text-purple-700">8 outs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🔸 Tirage quinte ventral (gutshot)</span>
                <span className="font-bold text-purple-700">4 outs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🔸 Deux overcards vs paire</span>
                <span className="font-bold text-purple-700">6 outs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🔸 Paire → Brelan</span>
                <span className="font-bold text-purple-700">2 outs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🔸 Brelan → Full ou Carré</span>
                <span className="font-bold text-purple-700">7 outs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🔸 Tirage quinte flush (deux bouts)</span>
                <span className="font-bold text-purple-700">15 outs</span>
              </div>
            </div>
          </div>

          {/* Règle du 2 et 4 */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-4">
            <h3 className="font-bold text-yellow-800 mb-2">⚡ Règle du 2 et 4 (calcul rapide)</h3>
            <p className="text-gray-700 mb-2">
              Pour estimer rapidement votre équité :
            </p>
            <ul className="space-y-1">
              <li>• <strong>Au flop :</strong> Outs × 4 = % de toucher à la river</li>
              <li>• <strong>Au turn :</strong> Outs × 2 = % de toucher à la river</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              Exemple : 9 outs au flop = 9 × 4 = 36% (réel : 35%)
            </p>
          </div>
        </div>

        {/* Pot Odds */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💰 Pot Odds - Cotes du Pot
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Les pot odds comparent le coût d'un call au pot total. Si vos chances de gagner 
              dépassent les pot odds, le call est profitable.
            </p>
          </div>

          {/* Formule */}
          <div className="bg-gray-100 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">📐 Formule des Pot Odds</h3>
            <div className="bg-white rounded p-3 font-mono text-center">
              <p className="text-lg">Pot Odds = Mise à payer / (Pot actuel + Mise à payer)</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Résultat en pourcentage = équité minimum nécessaire
            </p>
          </div>

          {/* Exemples */}
          <div className="space-y-3">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h4 className="font-semibold text-green-700 mb-2">Exemple 1 : Call profitable</h4>
              <p className="text-sm text-gray-700">
                Pot : 100€, Adversaire mise : 50€<br/>
                Call : 50€ pour gagner 150€<br/>
                Pot odds : 50 / (150 + 50) = 25%<br/>
                <span className="font-bold text-green-600">→ Besoin de 25% d'équité minimum</span>
              </p>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h4 className="font-semibold text-red-700 mb-2">Exemple 2 : Call non profitable</h4>
              <p className="text-sm text-gray-700">
                Pot : 100€, Adversaire mise : 200€<br/>
                Call : 200€ pour gagner 300€<br/>
                Pot odds : 200 / (300 + 200) = 40%<br/>
                <span className="font-bold text-red-600">→ Besoin de 40% d'équité (difficile)</span>
              </p>
            </div>
          </div>

          {/* Table de référence rapide */}
          <div className="mt-4 bg-blue-50 rounded p-4">
            <h3 className="font-bold mb-2">📊 Références rapides Bet Sizing → Équité requise</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>• 1/4 pot (25%) → 17% équité</div>
              <div>• 1/3 pot (33%) → 20% équité</div>
              <div>• 1/2 pot (50%) → 25% équité</div>
              <div>• 2/3 pot (66%) → 28% équité</div>
              <div>• 3/4 pot (75%) → 30% équité</div>
              <div>• Pot (100%) → 33% équité</div>
              <div>• 1.5x pot (150%) → 37% équité</div>
              <div>• 2x pot (200%) → 40% équité</div>
            </div>
          </div>
        </div>

        {/* Implied Odds */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            💎 Implied Odds - Cotes Implicites
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Les implied odds considèrent l'argent futur que vous pouvez gagner si vous touchez. 
              Cruciales pour les mains spéculatives et les petites paires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">✅ Bonnes Implied Odds</h3>
              <ul className="text-sm space-y-1">
                <li>• Adversaire avec gros stack</li>
                <li>• Main cachée (set, straight)</li>
                <li>• Adversaire agressif</li>
                <li>• Position favorable</li>
                <li>• Tirage vers les nuts</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">❌ Mauvaises Implied Odds</h3>
              <ul className="text-sm space-y-1">
                <li>• Stack court</li>
                <li>• Tirage évident</li>
                <li>• Adversaire prudent</li>
                <li>• Hors position</li>
                <li>• Tirage non-nuts</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-gray-100 rounded p-4">
            <p className="text-sm text-gray-700">
              <strong>Exemple :</strong> Petite paire préflop. Pot odds mauvaises pour setminer, 
              mais si l'adversaire a AA et un gros stack, les implied odds justifient le call.
            </p>
          </div>
        </div>

        {/* Expected Value */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            📈 Expected Value (EV)
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              L'Expected Value est le gain ou la perte moyenne d'une décision sur le long terme. 
              Toute décision au poker devrait être +EV.
            </p>
          </div>

          {/* Formule EV */}
          <div className="bg-gray-100 rounded p-4 mb-4">
            <h3 className="font-bold mb-2">📐 Calcul de l'EV</h3>
            <div className="bg-white rounded p-3 font-mono">
              <p className="text-center mb-2">EV = (% Victoire {'×'} Gain) - (% Défaite {'×'} Perte)</p>
            </div>
          </div>

          {/* Exemple détaillé */}
          <div className="bg-white border-2 border-red-200 rounded p-4">
            <h3 className="font-semibold text-red-700 mb-2">Exemple pratique</h3>
            <p className="text-sm text-gray-700 mb-2">
              Pot : 100€, vous devez payer 50€ avec un tirage couleur au turn (9 outs = 18%)
            </p>
            <div className="bg-gray-50 rounded p-2 text-sm">
              <p>• Si touché (18%) : Gain = 150€</p>
              <p>• Si raté (82%) : Perte = 50€</p>
              <p>• EV = (0.18 {'×'} 150) - (0.82 {'×'} 50)</p>
              <p>• EV = 27 - 41 = <span className="font-bold text-red-600">-14€</span></p>
              <p className="mt-1 font-semibold">→ Call -EV sans implied odds</p>
            </div>
          </div>
        </div>

        {/* Probabilités importantes */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎲 Probabilités Essentielles à Mémoriser
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-3">Préflop</h3>
              <ul className="space-y-1 text-sm">
                <li>• Recevoir AA : 0.45% (1/221)</li>
                <li>• Recevoir une paire : 5.9% (1/17)</li>
                <li>• Recevoir AK : 1.2% (1/83)</li>
                <li>• AA vs KK : 80% - 20%</li>
                <li>• Paire vs 2 overcards : 55% - 45%</li>
                <li>• Paire haute vs basse : 80% - 20%</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-3">Postflop</h3>
              <ul className="space-y-1 text-sm">
                <li>• Flopper un set avec paire : 11.8%</li>
                <li>• Flopper couleur avec suited : 0.84%</li>
                <li>• Flopper tirage couleur : 10.9%</li>
                <li>• Compléter couleur turn→river : 19.6%</li>
                <li>• Compléter quinte OESD : 31.5%</li>
                <li>• Runner-runner couleur : 4.2%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Concepts avancés */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🚀 Concepts Mathématiques Avancés
          </h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-700 mb-2">Reverse Implied Odds</h3>
              <p className="text-sm text-gray-700">
                L'argent que vous risquez de perdre avec la 2ème meilleure main. 
                Exemple : Top pair weak kicker face à une action forte.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-700 mb-2">Fold Equity</h3>
              <p className="text-sm text-gray-700">
                La valeur ajoutée par la possibilité que l'adversaire se couche. 
                EV totale = EV showdown + Fold equity.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-700 mb-2">Blockers Effect</h3>
              <p className="text-sm text-gray-700">
                Avoir certaines cartes réduit les combos possibles adverses. 
                Avoir A♠ réduit les combos de couleur pique adverse.
              </p>
            </div>
          </div>
        </div>

        {/* Applications pratiques */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Applications pratiques
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">✅ Utilisez les maths pour</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Décisions de call/fold</li>
              <li>• Sizing de vos mises</li>
              <li>• Évaluer la profitabilité long terme</li>
              <li>• Identifier les spots +EV</li>
              <li>• Optimiser votre stratégie</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-red-700 mb-3">❌ Pièges à éviter</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Surestimer vos outs</li>
              <li>• Ignorer les reverse implied odds</li>
              <li>• Calculer sans contexte</li>
              <li>• Oublier le rake online</li>
              <li>• Négliger la position</li>
            </ul>
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            📝 Exercices pour progresser
          </h2>
          
          <ol className="space-y-3 text-gray-700">
            <li>
              <strong>1.</strong> Après chaque session, révisez 3 spots où vous avez call/fold 
              et vérifiez si c'était mathématiquement correct.
            </li>
            <li>
              <strong>2.</strong> Mémorisez les équités courantes (paire vs overcards, etc.) 
              pour décider plus vite en jeu.
            </li>
            <li>
              <strong>3.</strong> Pratiquez le calcul rapide des pot odds avec différents sizings 
              jusqu'à ce que ce soit automatique.
            </li>
            <li>
              <strong>4.</strong> Utilisez un calculateur d'équité pour vérifier vos estimations 
              et affiner votre intuition.
            </li>
          </ol>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            📊 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Les pot odds déterminent si un call est profitable - comparez toujours équité vs cote
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                La règle du 2 et 4 permet d'estimer rapidement votre équité avec des tirages
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Les implied odds justifient parfois des calls -EV directs avec des mains cachées
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                Toute décision au poker devrait être +EV sur le long terme
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-blue-300">
                  Pratiquez sur Stake
                </Link> en calculant systématiquement avant chaque décision importante
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/postflop-play"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Jeu Postflop
          </Link>
          <Link 
            href="/guide-poker/gestion-bankroll"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Gestion de Bankroll
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}