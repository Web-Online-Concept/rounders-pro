// app/guide-poker/gestion-bankroll/page.js
import Link from 'next/link';

export default function GestionBankrollPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Gestion de Bankroll</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💰 Gestion de Bankroll
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          La gestion de bankroll est LA compétence qui sépare les joueurs récréatifs des professionnels. 
          Peu importe votre niveau technique, sans une gestion rigoureuse de votre capital, vous êtes 
          voué à l'échec. Apprenez à protéger votre bankroll et à progresser sereinement.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Qu'est-ce que la bankroll */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Comprendre la bankroll
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Votre bankroll est l'argent dédié exclusivement au poker, séparé de vos finances 
              personnelles. C'est votre outil de travail qu'il faut protéger de la variance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">✅ Vraie bankroll</h3>
              <ul className="text-sm space-y-1">
                <li>• Argent que vous pouvez perdre</li>
                <li>• Séparé des dépenses vitales</li>
                <li>• Dédié uniquement au poker</li>
                <li>• Permet de jouer sans pression</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">❌ Fausse bankroll</h3>
              <ul className="text-sm space-y-1">
                <li>• Argent du loyer</li>
                <li>• Économies d'urgence</li>
                <li>• Argent emprunté</li>
                <li>• "Scared money" sous pression</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Règles de base */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            📏 Règles de Bankroll Management
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le nombre de buy-ins nécessaires dépend du format de jeu, de votre edge 
              et de votre tolérance au risque.
            </p>
          </div>

          {/* Cash Game */}
          <div className="mb-6">
            <h3 className="font-bold text-green-700 mb-3">💵 Cash Game</h3>
            <div className="bg-green-50 rounded p-4">
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Conservative (Recommandé)</span>
                    <span className="text-green-600 font-bold">30-40 buy-ins</span>
                  </div>
                  <p className="text-xs text-gray-600">Pour les débutants et joueurs prudents</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Standard</span>
                    <span className="text-blue-600 font-bold">20-30 buy-ins</span>
                  </div>
                  <p className="text-xs text-gray-600">Pour les joueurs confirmés avec bon winrate</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Aggressive</span>
                    <span className="text-orange-600 font-bold">15-20 buy-ins</span>
                  </div>
                  <p className="text-xs text-gray-600">Pour les pros avec edge important (risqué)</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mt-3">
                <strong>Exemple :</strong> Pour jouer en NL50 (0.25€/0.50€), bankroll minimum 
                conservative = 40 × 50€ = 2000€
              </p>
            </div>
          </div>

          {/* Tournois */}
          <div>
            <h3 className="font-bold text-blue-700 mb-3">🏆 Tournois (MTT)</h3>
            <div className="bg-blue-50 rounded p-4">
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Conservative</span>
                    <span className="text-green-600 font-bold">100-150 buy-ins</span>
                  </div>
                  <p className="text-xs text-gray-600">Variance énorme en MTT</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Standard</span>
                    <span className="text-blue-600 font-bold">75-100 buy-ins</span>
                  </div>
                  <p className="text-xs text-gray-600">Pour joueurs avec volume important</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Sit & Go</span>
                    <span className="text-purple-600 font-bold">40-60 buy-ins</span>
                  </div>
                  <p className="text-xs text-gray-600">Moins de variance qu'en MTT</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mt-3">
                <strong>Exemple :</strong> Pour jouer des MTT 10€, bankroll minimum 
                conservative = 100 × 10€ = 1000€
              </p>
            </div>
          </div>
        </div>

        {/* La variance */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            📈 Comprendre la Variance
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              La variance est l'écart entre vos résultats court terme et votre espérance long terme. 
              Même les meilleurs joueurs peuvent perdre sur des milliers de mains.
            </p>
          </div>

          {/* Graphique conceptuel de variance */}
          <div className="bg-gray-100 rounded p-4 mb-4">
            <h3 className="font-bold mb-3 text-center">Évolution typique d'une bankroll</h3>
            <div className="relative h-48 bg-white rounded">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl mb-2">📊</p>
                  <p className="text-sm text-gray-600">
                    Ligne verte = Espérance (EV)<br/>
                    Ligne rouge = Résultats réels avec variance
                  </p>
                </div>
              </div>
              {/* Lignes conceptuelles */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 border-t-2 border-red-500 border-dashed"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">📉 Downswing</h3>
              <p className="text-sm text-gray-700 mb-2">
                Période de pertes malgré un jeu correct
              </p>
              <ul className="text-xs space-y-1">
                <li>• Peut durer des semaines/mois</li>
                <li>• -20 buy-ins possibles même en jouant bien</li>
                <li>• Test mental ultime</li>
                <li>• Partie normale du poker</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">📈 Upswing</h3>
              <p className="text-sm text-gray-700 mb-2">
                Période de gains au-dessus de l'EV
              </p>
              <ul className="text-xs space-y-1">
                <li>• Ne pas surestimer son niveau</li>
                <li>• Continuer à bien jouer</li>
                <li>• Mettre de côté pour le futur</li>
                <li>• Rester discipliné</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Montée et descente de limites */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            ⬆️ Montée et Descente de Limites
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Savoir quand monter ou descendre de limite est crucial pour la croissance 
              et la survie de votre bankroll.
            </p>
          </div>

          {/* Règles de montée */}
          <div className="mb-4">
            <h3 className="font-bold text-green-700 mb-3">🚀 Quand monter de limite</h3>
            <div className="bg-green-50 rounded p-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-sm">Bankroll = 30-40 buy-ins de la limite supérieure</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-sm">Winrate stable sur 50k+ mains</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-sm">Confiance et confort à la limite actuelle</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-sm">Mental prêt pour des pots plus gros</span>
                </div>
              </div>
              
              <div className="mt-3 bg-white rounded p-3">
                <p className="text-xs text-gray-600">
                  <strong>Conseil :</strong> Prenez des "shots" avec 10-20% de votre bankroll 
                  et redescendez si ça ne fonctionne pas.
                </p>
              </div>
            </div>
          </div>

          {/* Règles de descente */}
          <div>
            <h3 className="font-bold text-red-700 mb-3">⬇️ Quand descendre de limite</h3>
            <div className="bg-red-50 rounded p-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-sm">Bankroll < 20 buy-ins de la limite actuelle</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-sm">Série de pertes affectant votre jeu</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-sm">Tilt ou problèmes mentaux</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-sm">Besoin de retrouver la confiance</span>
                </div>
              </div>
              
              <div className="mt-3 bg-white rounded p-3">
                <p className="text-xs text-gray-600">
                  <strong>Important :</strong> Descendre n'est pas un échec, c'est une 
                  décision intelligente de protection du capital.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stop-loss et objectifs */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Stop-Loss et Objectifs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-3">🛑 Stop-Loss Session</h3>
              <ul className="space-y-2 text-sm">
                <li>• Maximum 3-4 buy-ins par session</li>
                <li>• Stop si tilt détecté</li>
                <li>• Pause après 2 buy-ins perdus rapidement</li>
                <li>• Respecter ses limites mentales</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded p-4">
              <h3 className="font-bold mb-3">🎯 Objectifs Réalistes</h3>
              <ul className="space-y-2 text-sm">
                <li>• Cash game : 3-5 bb/100 (bon winrate)</li>
                <li>• MTT : ROI 20-30% (excellent)</li>
                <li>• Progression lente mais stable</li>
                <li>• Focus sur l'amélioration, pas les gains</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-white bg-opacity-10 rounded p-4">
            <p className="text-sm text-center">
              "Le poker est un marathon, pas un sprint. La patience et la discipline 
              battent le talent sans gestion."
            </p>
          </div>
        </div>

        {/* Outils de tracking */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            📊 Tracker sa Bankroll
          </h2>
          
          <div className="bg-indigo-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Suivre précisément votre bankroll est essentiel pour détecter les leaks 
              et mesurer votre progression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">📱 Outils de tracking</h3>
              <ul className="text-sm space-y-1">
                <li>• Excel/Google Sheets (basique)</li>
                <li>• Applications dédiées poker</li>
                <li>• Trackers avec graphiques</li>
                <li>• Journal de sessions détaillé</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">📈 Métriques à suivre</h3>
              <ul className="text-sm space-y-1">
                <li>• Winrate (bb/100 ou ROI)</li>
                <li>• Variance et écart-type</li>
                <li>• Plus gros downswing</li>
                <li>• Progression mensuelle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conseils psychologiques */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Aspects psychologiques
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">💪 Mindset gagnant</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Penser en buy-ins, pas en euros</li>
              <li>• Focus sur les décisions, pas les résultats</li>
              <li>• Accepter la variance comme normale</li>
              <li>• Célébrer la discipline, pas les gains</li>
              <li>• Voir long terme (mois/années)</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-red-700 mb-3">🚫 Erreurs fatales</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Jouer au-dessus de ses moyens</li>
              <li>• Chasser les pertes (chase losses)</li>
              <li>• Emprunter pour jouer</li>
              <li>• Mélanger bankroll et finances perso</li>
              <li>• Monter trop vite de limite</li>
            </ul>
          </div>
        </div>

        {/* Plan d'action */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            📋 Plan d'Action Bankroll Management
          </h2>
          
          <ol className="space-y-3 text-gray-700">
            <li>
              <strong>1.</strong> Définissez votre bankroll initiale (argent que vous pouvez perdre)
            </li>
            <li>
              <strong>2.</strong> Choisissez votre format principal (cash game ou tournois)
            </li>
            <li>
              <strong>3.</strong> Calculez la limite appropriée (30-40 BI pour cash)
            </li>
            <li>
              <strong>4.</strong> Créez un système de tracking (Excel minimum)
            </li>
            <li>
              <strong>5.</strong> Fixez des règles de montée/descente claires
            </li>
            <li>
              <strong>6.</strong> Respectez vos stop-loss session
            </li>
            <li>
              <strong>7.</strong> Révisez votre plan tous les 3 mois
            </li>
          </ol>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            💰 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Votre bankroll est votre outil de travail - protégez-la avec des règles strictes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                30-40 buy-ins minimum en cash game, 100+ en tournois pour absorber la variance
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Descendre de limite n'est pas un échec mais une décision intelligente
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La discipline dans la gestion bankroll est plus importante que le talent
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Commencez petit sur Stake
                </Link> et montez progressivement en respectant votre plan
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/cotes-probabilites"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Cotes et Probabilités
          </Link>
          <Link 
            href="/guide-poker/tells-psychologie"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Tells et Psychologie
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}