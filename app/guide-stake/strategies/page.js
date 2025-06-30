// app/guide-stake/strategies/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Stratégies et Conseils Stake - Maximisez vos Gains | Rounders Pro',
  description: 'Stratégies avancées pour Stake : gestion de bankroll, stratégies par jeu, martingale, conseils pros. Jouez intelligemment.',
  keywords: 'stake stratégies, stake conseils, stake tips, stake bankroll, stake martingale',
};

export default function GuideStrategiesPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🧠 Stratégies et Conseils Pro
      </h1>

      <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mb-8">
        <p className="text-amber-900 font-semibold">
          ⚠️ Rappel important : Le jeu doit rester un divertissement
        </p>
        <p className="text-amber-800 mt-1">
          Ces stratégies peuvent améliorer vos chances mais ne garantissent pas les gains
        </p>
      </div>

      {/* Gestion de Bankroll */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          💰 Gestion de Bankroll - La Base
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
          <p className="text-gray-800 mb-4 font-medium">
            La gestion de bankroll est LA compétence la plus importante. 
            Sans elle, même les meilleures stratégies échoueront.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">📊 Règle des 5%</h3>
            <p className="text-gray-700 mb-3">
              Ne misez jamais plus de 5% de votre bankroll sur un seul pari.
            </p>
            <div className="bg-blue-50 rounded p-3">
              <p className="text-sm text-blue-800">
                <strong>Exemple :</strong> Bankroll de 1000$ = Max 50$ par pari
              </p>
            </div>
          </div>
          
          <div className="bg-white border-2 border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-3">🎯 Sessions limitées</h3>
            <p className="text-gray-700 mb-3">
              Fixez-vous des limites de temps ET d&apos;argent par session.
            </p>
            <div className="bg-green-50 rounded p-3">
              <p className="text-sm text-green-800">
                <strong>Conseil :</strong> Max 2h et 10% de bankroll par jour
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
          <p className="text-red-900 font-semibold mb-2">🚫 Erreurs à éviter</p>
          <ul className="space-y-1 text-red-800 text-sm">
            <li>• Courir après ses pertes (chasing losses)</li>
            <li>• Augmenter les mises en tilt</li>
            <li>• Jouer avec l&apos;argent du loyer</li>
            <li>• Ignorer ses limites prédéfinies</li>
          </ul>
        </div>
      </section>

      {/* Stratégies Stake Originals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎯 Stratégies pour Stake Originals
        </h2>
        
        <div className="space-y-6">
          {/* Mines */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">💣 Mines - La Stratégie Prudente</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-3">
                  Configuration recommandée pour débutants :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>3 mines</strong> seulement</li>
                  <li>• Révéler <strong>5-7 cases</strong> max</li>
                  <li>• Multiplicateur : <strong>1.45x - 2.09x</strong></li>
                  <li>• Profit régulier et constant</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">💡 Astuce Pro</p>
                <p className="text-sm text-gray-700">
                  Utilisez toujours le même pattern (ex: coins puis centre). 
                  La constance réduit les décisions émotionnelles.
                </p>
              </div>
            </div>
          </div>

          {/* Dice */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">🎲 Dice - Stratégie Martingale Modifiée</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-3">
                  Version sécurisée de la Martingale :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chance de gain : <strong>49.5%</strong></li>
                  <li>• Multiplicateur : <strong>2x</strong></li>
                  <li>• En cas de perte : x1.5 (pas x2)</li>
                  <li>• Reset après 3 pertes consécutives</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="font-semibold text-amber-800 mb-2">⚠️ Attention</p>
                <p className="text-sm text-amber-700">
                  La Martingale peut vider votre bankroll rapidement. 
                  Ne l&apos;utilisez qu&apos;avec 1% de votre capital max.
                </p>
              </div>
            </div>
          </div>

          {/* Crash */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">📈 Crash - La Méthode 2x</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-3">
                  Stratégie conservative mais efficace :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cash out automatique à <strong>2x</strong></li>
                  <li>• Probabilité : environ <strong>50%</strong></li>
                  <li>• Doublez votre mise toutes les 2 parties</li>
                  <li>• Bankroll recommandée : 20x mise initiale</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-semibold text-green-800 mb-2">📊 Statistiques</p>
                <p className="text-sm text-green-700">
                  Sur 1000 parties, le crash arrive avant 2x environ 475 fois. 
                  La patience est la clé !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégies Slots */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎰 Stratégies Slots
        </h2>
        
        <div className="bg-purple-50 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-purple-900 mb-3">🎯 La Méthode du Budget Fixe</h3>
          <div className="space-y-3 text-purple-800">
            <p>1. <strong>Définissez votre budget</strong> (ex: 100$)</p>
            <p>2. <strong>Choisissez votre mise</strong> = Budget ÷ 200 (0.50$ dans l&apos;exemple)</p>
            <p>3. <strong>200 spins garantis</strong> pour attraper les bonus</p>
            <p>4. <strong>Stop à +50% ou -100%</strong> du budget initial</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">🔄 Rotation des Slots</h4>
            <p className="text-blue-800 text-sm">
              Ne restez pas sur une slot froide. Après 50 spins sans bonus, 
              changez de jeu. Les RTP sont identiques mais les cycles varient.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-2">🎁 Bonus Buy Strategy</h4>
            <p className="text-green-800 text-sm">
              Si disponible, acheter les bonus peut être rentable. 
              Budget recommandé : 100x le coût du bonus.
            </p>
          </div>
        </div>
      </section>

      {/* Stratégies Paris Sportifs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ⚽ Stratégies Paris Sportifs
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-green-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-2">📊 Value Betting</h3>
            <p className="text-gray-700 mb-2">
              Cherchez les cotes surévaluées par rapport aux probabilités réelles.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Exemple :</strong> Si vous estimez 60% de chances mais la cote est à 2.00 (50%), 
              c&apos;est un value bet.
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-2">🎯 Spécialisation</h3>
            <p className="text-gray-700 mb-2">
              Maîtrisez 1-2 ligues plutôt que parier sur tout.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Conseil :</strong> Suivez les actualités, blessures, forme des équipes 
              de votre ligue de prédilection.
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-purple-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-2">💰 Stratégie des Underdogs</h3>
            <p className="text-gray-700 mb-2">
              Pariez sur les outsiders avec handicap plutôt que victoire directe.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Exemple :</strong> Au lieu de miser sur la victoire à 5.00, 
              prenez +1.5 handicap à 2.20.
            </p>
          </div>
        </div>
      </section>

      {/* Outils et Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🛠️ Outils Utiles
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">📈 Tracking</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Utilisez le <strong>Stats</strong> de Stake</li>
              <li>• Notez vos sessions dans un tableur</li>
              <li>• Analysez vos jeux les plus rentables</li>
              <li>• Identifiez vos heures de gains/pertes</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">🔧 Automatisation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• API Stake pour les stratégies auto</li>
              <li>• Scripts pour Dice/Limbo</li>
              <li>• Alertes de prix pour les paris</li>
              <li>• Limites automatiques</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conseils Psychologiques */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🧘 Aspect Psychologique
        </h2>
        
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">💭 Gardez le Contrôle</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">✅ À faire</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Jouez reposé et concentré</li>
                <li>• Célébrez les petites victoires</li>
                <li>• Prenez des pauses régulières</li>
                <li>• Acceptez les pertes comme normales</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">❌ À éviter</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Jouer sous émotion (colère, tristesse)</li>
                <li>• Augmenter les mises en tilt</li>
                <li>• Jouer sous influence</li>
                <li>• Emprunter pour jouer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégie Ultime */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🏆 La Stratégie Ultime</h3>
        <p className="mb-6 text-gray-300">
          La meilleure stratégie combine discipline, patience et plaisir. 
          Le jeu doit rester un divertissement, pas une source de revenus.
        </p>
        
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <p className="text-green-400 font-mono">
            Bankroll Management + Stratégie Adaptée + Mental Solide = Succès Long Terme
          </p>
        </div>
        
        <a
          href="https://stake.bet/?c=rounders"
          target="_blank"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Appliquer ces stratégies →
        </a>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/crypto"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Cryptomonnaies
        </Link>
        <Link
          href="/guide-stake/astuces"
          className="text-blue-600 hover:underline font-medium"
        >
          Astuces Pro →
        </Link>
      </div>
    </div>
  );
}