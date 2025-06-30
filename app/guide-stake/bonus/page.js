// app/guide-stake/bonus/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Bonus et Rakeback Stake - Jusqu\'à 10% de Cashback | Rounders Pro',
  description: 'Système de rakeback Stake expliqué : 10% instantané, bonus quotidiens, hebdomadaires et mensuels. Maximisez vos récompenses.',
  keywords: 'stake bonus, stake rakeback, stake cashback, stake reload, stake rewards',
};

export default function GuideBonusPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💰 Bonus et Système de Rakeback
      </h1>

      <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8">
        <p className="text-green-900 font-semibold">
          💰 Le système de récompenses le plus généreux du marché !
        </p>
        <p className="text-green-800 mt-1">
          Recevez jusqu&apos;à 10% de rakeback instantané + bonus quotidiens
        </p>
      </div>

      {/* Rakeback Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🔄 Rakeback Automatique Instantané
        </h2>
        
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <p className="text-gray-700 mb-4">
            Stake offre un rakeback instantané sur TOUS vos paris, gagnants ou perdants :
          </p>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">5%+</div>
            <p className="text-gray-600 text-lg">de l&apos;edge de la maison vous est retourné</p>
            <p className="text-sm text-gray-500 mt-4">
              Exemple : Sur un pari de 100€ avec un edge de 2%, vous recevez instantanément 0.10€
            </p>
            <p className="text-sm text-green-600 mt-2">
              Le rakeback augmente avec votre niveau VIP !
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-900 font-semibold mb-2">💡 Comment ça fonctionne ?</p>
          <ul className="space-y-2 text-blue-800">
            <li>• Le rakeback est crédité instantanément après chaque pari</li>
            <li>• Aucune condition de mise sur le rakeback</li>
            <li>• Valable sur TOUS les jeux (casino, sports, originals)</li>
            <li>• Commence à 5% avec le code affilié</li>
            <li>• Augmente progressivement jusqu&apos;à 20%+ !</li>
          </ul>
        </div>
      </section>

      {/* Daily Bonuses Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎁 Calendrier des Bonus
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-green-500 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              QUOTIDIEN
            </div>
            <h3 className="font-bold text-gray-900 mb-2 mt-2">🎁 Reload Quotidien</h3>
            <p className="text-gray-600 mb-3">
              Bonus basé sur votre activité des dernières 24h
            </p>
            <div className="text-green-600 font-bold text-xl">Jusqu&apos;à 1,000$+</div>
            <p className="text-sm text-gray-500 mt-2">
              ⚠️ Réservé aux niveaux Platine et supérieurs
            </p>
          </div>
          
          <div className="bg-white border-2 border-blue-500 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              HEBDOMADAIRE
            </div>
            <h3 className="font-bold text-gray-900 mb-2 mt-2">📅 Bonus Hebdomadaire</h3>
            <p className="text-gray-600 mb-3">
              Chaque samedi, basé sur votre volume de la semaine
            </p>
            <div className="text-blue-600 font-bold text-xl">Jusqu&apos;à 5,000$+</div>
            <p className="text-sm text-gray-500 mt-2">
              Disponible tous les samedis
            </p>
          </div>
          
          <div className="bg-white border-2 border-purple-500 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              MENSUEL
            </div>
            <h3 className="font-bold text-gray-900 mb-2 mt-2">🎂 Bonus Mensuel</h3>
            <p className="text-gray-600 mb-3">
              Récompense pour votre fidélité mensuelle
            </p>
            <div className="text-purple-600 font-bold text-xl">Jusqu&apos;à 10,000$+</div>
            <p className="text-sm text-gray-500 mt-2">
              Le 1er de chaque mois
            </p>
          </div>
          
          <div className="bg-white border-2 border-amber-500 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              VIP
            </div>
            <h3 className="font-bold text-gray-900 mb-2 mt-2">🏆 Bonus VIP</h3>
            <p className="text-gray-600 mb-3">
              Bonus exclusifs selon votre niveau VIP
            </p>
            <div className="text-amber-600 font-bold text-xl">Montants secrets</div>
            <p className="text-sm text-gray-500 mt-2">
              Plus vous montez, plus c&apos;est généreux
            </p>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎯 Promotions Spéciales
        </h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <h3 className="font-bold text-blue-900">🎯 Challenges Quotidiens</h3>
            <p className="text-blue-800">
              Participez aux défis quotidiens et hebdomadaires pour gagner des prix supplémentaires.
              Les challenges changent régulièrement avec des cagnottes allant jusqu&apos;à 50,000$.
            </p>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
            <h3 className="font-bold text-purple-900">🎰 Races de Slots</h3>
            <p className="text-purple-800">
              Compétitions de volume sur des jeux spécifiques avec des cagnottes allant jusqu&apos;à 100,000$.
              Plus vous jouez, plus vous montez dans le classement.
            </p>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
            <h3 className="font-bold text-amber-900">💸 Drops & Wins</h3>
            <p className="text-amber-800">
              Prix aléatoires sur certains slots pouvant atteindre 2,500$ par drop.
              Aucune inscription nécessaire, les prix tombent automatiquement.
            </p>
          </div>
        </div>
      </section>

      {/* Rounders Exclusive */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🚀 Bonus Exclusifs Rounders Pro</h3>
        <p className="mb-6 text-gray-300">
          En vous inscrivant via notre lien, vous bénéficiez en plus :
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-green-400 mb-2">✓ Bonus Cash par Niveau VIP</h4>
            <p className="text-sm text-gray-300 mb-2">
              Recevez de l&apos;argent réel à chaque palier franchi :
            </p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Bronze: 10€ • Argent: 20€ • Or: 30€</li>
              <li>• Platine I-III: 50€ • Platine IV-VI: 100€</li>
              <li>• Diamant: 200€ en USDC</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-2">✓ Paiement Rapide</h4>
            <p className="text-sm text-gray-300">
              Versement en USDC via pourboire Stake sous 24-48h
            </p>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-2">✓ Support Prioritaire</h4>
            <p className="text-sm text-gray-300">
              Assistance dédiée en français via notre équipe
            </p>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-2">✓ Guides Exclusifs</h4>
            <p className="text-sm text-gray-300">
              Stratégies avancées réservées à nos affiliés
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://stake.bet/?c=rounders"
            target="_blank"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center"
          >
            S&apos;inscrire sur Stake →
          </a>
          <Link
            href="/affilies"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition text-center"
          >
            Réclamer mes bonus VIP →
          </Link>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-amber-50 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-amber-900 mb-3">💡 Conseils pour Maximiser vos Bonus</h3>
        <ul className="space-y-2 text-amber-800">
          <li>• Connectez-vous chaque jour pour ne pas manquer le reload quotidien</li>
          <li>• Jouez régulièrement pour augmenter vos bonus hebdomadaires</li>
          <li>• Montez en niveau VIP pour débloquer des bonus plus importants</li>
          <li>• Participez aux challenges et races pour des gains supplémentaires</li>
          <li>• Utilisez le coffre-fort pour sécuriser vos gains de bonus</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/inscription"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Inscription
        </Link>
        <Link
          href="/guide-stake/vip"
          className="text-blue-600 hover:underline font-medium"
        >
          Programme VIP →
        </Link>
      </div>
    </div>
  );
}