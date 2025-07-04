// app/guide-stake/vip/page.js
import Link from 'next/link';
import { AFFILIATE_LINK } from '../../config/affiliate';

export default function GuideVIPPage() {
  const vipLevels = [
    { name: 'Bronze', points: '10,000', rakeback: '5%+', bonus: 'Hebdo + Mensuel', color: 'amber' },
    { name: 'Argent', points: '50,000', rakeback: '6%+', bonus: 'Hebdo + Mensuel', color: 'gray' },
    { name: 'Or', points: '100,000', rakeback: '7%+', bonus: 'Hebdo + Mensuel', color: 'yellow' },
    { name: 'Platine I', points: '250,000', rakeback: '8%+', bonus: 'Hebdo + Mensuel + DAILY', color: 'cyan' },
    { name: 'Platine II', points: '500,000', rakeback: '9%+', bonus: 'Hebdo + Mensuel + Daily', color: 'cyan' },
    { name: 'Platine III', points: '1,000,000', rakeback: '10%+', bonus: 'Hebdo + Mensuel + Daily', color: 'cyan' },
    { name: 'Platine IV', points: '2,500,000', rakeback: '11%+', bonus: 'Hebdo + Mensuel + Daily', color: 'cyan' },
    { name: 'Platine V', points: '5,000,000', rakeback: '12%+', bonus: 'Hebdo + Mensuel + Daily', color: 'cyan' },
    { name: 'Platine VI', points: '10,000,000', rakeback: '13%+', bonus: 'Hebdo + Mensuel + Daily', color: 'cyan' },
    { name: 'Diamant I', points: '25,000,000', rakeback: '14%+', bonus: 'Tous + Host VIP', color: 'blue' },
    { name: 'Diamant II', points: '50,000,000', rakeback: '15%+', bonus: 'Tous + Host VIP', color: 'blue' },
    { name: 'Diamant III', points: '100,000,000', rakeback: '16%+', bonus: 'Tous + Host VIP', color: 'blue' },
    { name: 'Diamant IV', points: '250,000,000', rakeback: '17%+', bonus: 'Tous + Host VIP', color: 'blue' },
    { name: 'Diamant V', points: '500,000,000', rakeback: '18%+', bonus: 'Tous + Host VIP', color: 'blue' },
    { name: 'Obsidienne', points: '1,000,000,000', rakeback: '20%+', bonus: 'Tous + Avantages secrets', color: 'purple' },
  ];

  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
        👑 Programme VIP Stake Complet
      </h1>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-8">
        <p className="text-purple-900 font-semibold text-sm md:text-base">
          💎 15 niveaux VIP avec des récompenses croissantes
        </p>
        <p className="text-purple-800 mt-1 text-sm md:text-base">
          Plus vous jouez, plus vous gagnez ! Bonus cash exclusifs Rounders Pro inclus.
        </p>
      </div>

      {/* Offre de Bienvenue */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          🎁 Offre de Bienvenue & Autres Bonus
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6">
            <h3 className="font-bold text-green-900 mb-3 text-base md:text-lg">🎊 Offre de Bienvenue</h3>
            <p className="text-green-800 mb-3 text-sm md:text-base">
              Utilisez un code d'affiliation dans les 24h après inscription pour débloquer :
            </p>
            <ul className="space-y-2 text-green-700 text-sm md:text-base">
              <li>• <strong>5% de rakeback instantané</strong> avant même d'être Bronze</li>
              <li>• Accès anticipé aux récompenses VIP</li>
              <li>• Code à saisir : <strong className="text-green-900">rounders</strong></li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
            <h3 className="font-bold text-blue-900 mb-3 text-base md:text-lg">📱 Boost Hebdomadaire Telegram</h3>
            <p className="text-blue-800 mb-3 text-sm md:text-base">
              Chaque samedi à 12h30 GMT, recevez votre boost :
            </p>
            <ul className="space-y-2 text-blue-700 text-sm md:text-base">
              <li>• Réservé aux VIP Bronze et +</li>
              <li>• Distribué sur le groupe Telegram VIP</li>
              <li>• Cliquez sur le lien pour réclamer</li>
              <li>• Montant selon votre activité</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 md:p-6">
          <h3 className="font-bold text-amber-900 mb-3 text-base md:text-lg">🎯 Autres Bonus Disponibles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-amber-800">
            <div>
              <p className="font-semibold text-sm md:text-base">🎂 Bonus d'anniversaire</p>
              <p className="text-xs md:text-sm">Email avec coupon valable 7 jours</p>
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base">💸 Tirage hebdo 50-75k$</p>
              <p className="text-xs md:text-sm">1 ticket par 1000$ misés</p>
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base">🏃 Course 100k$ - 24h</p>
              <p className="text-xs md:text-sm">Top 5000 coureurs gagnent</p>
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base">💬 Pluies quotidiennes</p>
              <p className="text-xs md:text-sm">Dans le chat Stake</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          🎯 Comment fonctionne le programme VIP ?
        </h2>
        
        <div className="bg-gray-100 rounded-lg p-4 md:p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg">📊 Calcul des points VIP</h3>
              <p className="text-gray-700 mb-2 text-sm md:text-base">
                Les points sont gagnés en pariant sur les jeux de casino et les événements sportifs.
              </p>
              <div className="bg-white rounded p-3 text-xs md:text-sm">
                <p className="font-mono">Points = (Mise × Edge) × multiplicateur</p>
                <p className="text-gray-600 mt-2">• Casino : multiplicateur standard</p>
                <p className="text-gray-600">• <strong className="text-green-600">Sports : compte 3x plus !</strong></p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg">🔄 Progression automatique</h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li>• Points cumulés à vie (jamais perdus)</li>
                <li>• Montée de niveau instantanée</li>
                <li>• Minimum 10,000 points pour Bronze</li>
                <li>• Rakeback augmenté en temps réel</li>
                <li>• Bonus débloqués immédiatement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau des niveaux */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          📈 Tous les Niveaux VIP
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base">Niveau</th>
                <th className="px-2 md:px-4 py-3 text-right text-sm md:text-base">Points</th>
                <th className="px-2 md:px-4 py-3 text-center text-sm md:text-base">Rakeback</th>
                <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base">Bonus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vipLevels.map((level, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 md:px-4 py-3 font-medium text-sm md:text-base">{level.name}</td>
                  <td className="px-2 md:px-4 py-3 text-right font-mono text-xs md:text-sm">{level.points}</td>
                  <td className="px-2 md:px-4 py-3 text-center font-bold text-green-600 text-sm md:text-base">{level.rakeback}</td>
                  <td className="px-2 md:px-4 py-3 text-xs md:text-sm">{level.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Avantages par niveau */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          🎁 Avantages Détaillés par Palier
        </h2>
        
        <div className="space-y-6">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-4 md:p-6">
            <h3 className="font-bold text-amber-900 mb-2 text-base md:text-lg">🥉 Bronze → Or (Niveaux 1-3)</h3>
            <ul className="space-y-1 text-amber-800 text-sm md:text-base">
              <li>• Rakeback de base : 10% → 12%</li>
              <li>• Bonus hebdomadaire (chaque samedi)</li>
              <li>• Bonus mensuel (1er du mois)</li>
              <li>• Accès aux promotions générales</li>
              <li>• Support standard</li>
            </ul>
          </div>
          
          <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 md:p-6">
            <h3 className="font-bold text-cyan-900 mb-2 text-base md:text-lg">💎 Platine I-VI (Niveaux 4-9)</h3>
            <ul className="space-y-1 text-cyan-800 text-sm md:text-base">
              <li>• Rakeback augmenté : 13% → 18%</li>
              <li>• <strong className="text-red-600">Reload quotidien débloqué !</strong></li>
              <li>• Bonus hebdomadaire et mensuel augmentés</li>
              <li>• Limites de retrait augmentées</li>
              <li>• Support prioritaire</li>
              <li>• Invitations aux événements spéciaux</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6">
            <h3 className="font-bold text-blue-900 mb-2 text-base md:text-lg">💎 Diamant I-V (Niveaux 10-14)</h3>
            <ul className="space-y-1 text-blue-800 text-sm md:text-base">
              <li>• Rakeback premium : 19% → 23%</li>
              <li>• <strong>Host VIP dédié</strong></li>
              <li>• Bonus personnalisés négociables</li>
              <li>• Cadeaux physiques (merchandise, gadgets)</li>
              <li>• Accès aux paris pre-live exclusifs</li>
              <li>• Invitations VIP (événements sportifs, voyages)</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 md:p-6">
            <h3 className="font-bold text-purple-900 mb-2 text-base md:text-lg">🌟 Obsidienne (Niveau 15)</h3>
            <ul className="space-y-1 text-purple-800 text-sm md:text-base">
              <li>• Rakeback maximum : 25%+</li>
              <li>• Avantages secrets non divulgués</li>
              <li>• Bonus sur mesure illimités</li>
              <li>• Accès direct aux dirigeants Stake</li>
              <li>• Expériences uniques (jets privés, yachts)</li>
              <li>• Statut de légende dans la communauté</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bonus Exclusifs Rounders Pro */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
            🎁 Bonus Cash Exclusifs Rounders Pro
          </h2>
          
          <p className="text-center mb-8 text-base md:text-lg">
            En plus des récompenses Stake, recevez des bonus CASH à chaque niveau franchi !
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 md:p-4 text-center">
              <div className="text-amber-300 font-bold text-sm md:text-xl mb-1">Bronze</div>
              <div className="text-xl md:text-3xl font-bold">10€</div>
              <div className="text-xs md:text-sm opacity-80">crypto au choix</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 md:p-4 text-center">
              <div className="text-gray-300 font-bold text-sm md:text-xl mb-1">Argent</div>
              <div className="text-xl md:text-3xl font-bold">20€</div>
              <div className="text-xs md:text-sm opacity-80">crypto au choix</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 md:p-4 text-center">
              <div className="text-yellow-300 font-bold text-sm md:text-xl mb-1">Or</div>
              <div className="text-xl md:text-3xl font-bold">30€</div>
              <div className="text-xs md:text-sm opacity-80">crypto au choix</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 md:p-4 text-center">
              <div className="text-cyan-300 font-bold text-sm md:text-xl mb-1">Platine I-III</div>
              <div className="text-xl md:text-3xl font-bold">50€</div>
              <div className="text-xs md:text-sm opacity-80">crypto au choix</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 md:p-4 text-center">
              <div className="text-cyan-200 font-bold text-sm md:text-xl mb-1">Platine IV-VI</div>
              <div className="text-xl md:text-3xl font-bold">100€</div>
              <div className="text-xs md:text-sm opacity-80">crypto au choix</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 md:p-4 text-center">
              <div className="text-blue-300 font-bold text-sm md:text-xl mb-1">Diamant I-V</div>
              <div className="text-xl md:text-3xl font-bold">200€</div>
              <div className="text-xs md:text-sm opacity-80">crypto au choix</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 md:p-6">
            <h3 className="font-bold text-lg md:text-xl mb-4 text-center">
              💸 Comment réclamer vos bonus ?
            </h3>
            <ol className="space-y-3">
              <li className="flex items-start text-sm md:text-base">
                <span className="font-bold mr-2">1.</span>
                <span>Inscrivez-vous sur Stake avec notre code : <strong className="text-yellow-300">rounders</strong></span>
              </li>
              <li className="flex items-start text-sm md:text-base">
                <span className="font-bold mr-2">2.</span>
                <span>Atteignez un nouveau niveau VIP</span>
              </li>
              <li className="flex items-start text-sm md:text-base">
                <span className="font-bold mr-2">3.</span>
                <span>Prenez une capture d'écran de votre niveau</span>
              </li>
              <li className="flex items-start text-sm md:text-base">
                <span className="font-bold mr-2">4.</span>
                <span>Réclamez votre bonus dans l'Espace Affiliés</span>
              </li>
            </ol>
            
            <div className="mt-6 text-center">
              <Link
                href="/affilies"
                className="inline-block bg-white text-gray-900 px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-sm md:text-base"
              >
                Réclamer mes bonus →
              </Link>
            </div>
          </div>
          
          <p className="text-center mt-6 text-xs md:text-sm opacity-80">
            💰 Paiement rapide dans la crypto de votre choix via la fonction pourboire Stake
          </p>
        </div>
      </section>

      {/* Conseils VIP */}
      <div className="bg-amber-50 rounded-lg p-4 md:p-6 mb-8">
        <h3 className="font-bold text-amber-900 mb-3 text-base md:text-lg">💡 Conseils pour monter rapidement</h3>
        <ul className="space-y-2 text-amber-800 text-sm md:text-base">
          <li>• Jouez régulièrement plutôt que sporadiquement</li>
          <li>• Privilégiez les jeux à faible edge pour plus de volume</li>
          <li>• Participez aux promotions et challenges</li>
          <li>• Réinvestissez vos bonus pour générer plus de wager</li>
          <li>• Utilisez le rakeback instantané à votre avantage</li>
        </ul>
      </div>

      {/* FAQ VIP */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          ❓ Questions Fréquentes VIP
        </h2>
        
        <div className="space-y-4">
          <details className="bg-white border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer text-sm md:text-base">
              Peut-on perdre son niveau VIP ?
            </summary>
            <p className="mt-3 text-gray-700 text-sm md:text-base">
              Non ! Les niveaux VIP sont permanents. Une fois atteint, vous gardez votre niveau à vie.
            </p>
          </details>
          
          <details className="bg-white border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer text-sm md:text-base">
              Comment est calculé le rakeback ?
            </summary>
            <p className="mt-3 text-gray-700 text-sm md:text-base">
              Le rakeback est un pourcentage de l'edge de la maison qui vous est retourné. 
              Par exemple, avec 5% de rakeback sur un pari de 100$ avec 2% d'edge, vous recevez 0.10$ instantanément
              (100$ × 2% edge × 5% rakeback = 0.10$), que vous gagniez ou perdiez.
            </p>
          </details>
          
          <details className="bg-white border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer text-sm md:text-base">
              Les bonus Rounders Pro sont-ils cumulables ?
            </summary>
            <p className="mt-3 text-gray-700 text-sm md:text-base">
              Non, vous recevez un bonus unique pour chaque niveau atteint. 
              Par exemple, si vous passez de Bronze à Argent, vous recevez 20€ (pas 10€ + 20€).
            </p>
          </details>
          
          <details className="bg-white border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer text-sm md:text-base">
              Comment rejoindre le groupe Telegram VIP ?
            </summary>
            <p className="mt-3 text-gray-700 text-sm md:text-base">
              Une fois niveau Bronze atteint, vous pouvez rejoindre le groupe Telegram VIP exclusif 
              pour recevoir votre boost hebdomadaire chaque samedi à 12h30 GMT et des cadeaux spéciaux.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gray-900 text-white rounded-lg p-4 md:p-8 mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4">🚀 Commencez votre ascension VIP</h3>
        <p className="mb-6 text-gray-300 text-sm md:text-base">
          Inscrivez-vous avec notre code pour profiter des bonus cash exclusifs 
          en plus du programme VIP Stake.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center text-sm md:text-base"
          >
            S'inscrire sur Stake →
          </Link>
          <Link
            href="/affilies"
            className="inline-block bg-green-600 text-white px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition text-center text-sm md:text-base"
          >
            Voir l'Espace Affiliés →
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/bonus"
          className="text-blue-600 hover:underline font-medium text-sm md:text-base"
        >
          ← Bonus & Rakeback
        </Link>
        <Link
          href="/guide-stake/jeux"
          className="text-blue-600 hover:underline font-medium text-sm md:text-base"
        >
          Les Jeux →
        </Link>
      </div>
    </div>
  );
}