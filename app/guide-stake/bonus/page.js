// app/guide-stake/vip/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Programme VIP Stake - Tous les Niveaux et Récompenses | Rounders Pro',
  description: 'Guide complet du programme VIP Stake : Bronze à Obsidienne, bonus par niveau, rakeback, reload quotidien Platinum, calcul de progression.',
  keywords: 'stake vip, stake niveaux, stake platinum, stake diamant, stake bonus vip',
};

export default function GuideVIPPage() {
  const vipLevels = [
    { name: 'Bronze', points: '10,000', color: 'amber-600', rakeback: '5%', reload: '❌', weekly: '✅', monthly: '✅' },
    { name: 'Argent', points: '50,000', color: 'gray-500', rakeback: '5%', reload: '❌', weekly: '✅', monthly: '✅' },
    { name: 'Or', points: '100,000', color: 'yellow-500', rakeback: '5%', reload: '❌', weekly: '✅', monthly: '✅' },
    { name: 'Platine I', points: '250,000', color: 'blue-400', rakeback: '6%', reload: '✅', weekly: '✅', monthly: '✅' },
    { name: 'Platine II', points: '500,000', color: 'blue-400', rakeback: '7%', reload: '✅', weekly: '✅', monthly: '✅' },
    { name: 'Platine III', points: '1,000,000', color: 'blue-400', rakeback: '8%', reload: '✅', weekly: '✅', monthly: '✅' },
    { name: 'Platine IV', points: '2,500,000', color: 'blue-400', rakeback: '9%', reload: '✅', weekly: '✅', monthly: '✅' },
    { name: 'Platine V', points: '5,000,000', color: 'blue-400', rakeback: '9.5%', reload: '✅', weekly: '✅', monthly: '✅' },
    { name: 'Platine VI', points: '10,000,000', color: 'blue-400', rakeback: '10%', reload: '✅', weekly: '✅', monthly: '✅' },
    { name: 'Diamant I', points: '25,000,000', color: 'cyan-400', rakeback: '10%', reload: '✅', weekly: '✅', monthly: '✅', host: '✅' },
    { name: 'Diamant II', points: '50,000,000', color: 'cyan-400', rakeback: '10%', reload: '✅', weekly: '✅', monthly: '✅', host: '✅' },
    { name: 'Diamant III', points: '100,000,000', color: 'cyan-400', rakeback: '10%', reload: '✅', weekly: '✅', monthly: '✅', host: '✅' },
    { name: 'Diamant IV', points: '250,000,000', color: 'cyan-400', rakeback: '10%', reload: '✅', weekly: '✅', monthly: '✅', host: '✅' },
    { name: 'Diamant V', points: '500,000,000', color: 'cyan-400', rakeback: '10%', reload: '✅', weekly: '✅', monthly: '✅', host: '✅' },
    { name: 'Obsidienne', points: '1,000,000,000', color: 'gray-900', rakeback: '10%+', reload: '✅', weekly: '✅', monthly: '✅', host: '✅', special: '✅' },
  ];

  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ⭐ Programme VIP Complet
      </h1>

      <div className="bg-gradient-to-r from-amber-50 to-cyan-50 border-l-4 border-amber-600 p-4 mb-8">
        <p className="text-amber-900 font-semibold">
          🏆 Grimpez les échelons et débloquez des récompenses exclusives !
        </p>
        <p className="text-amber-800 mt-1">
          De Bronze à Obsidienne : 15 niveaux de privilèges croissants
        </p>
      </div>

      {/* Comment ça marche */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🎯 Comment fonctionne le programme VIP ?
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📊 Système de Points</h3>
              <p className="text-gray-700">
                Chaque dollar misé = 1 point. Les paris sportifs comptent <strong>3 fois plus</strong> !
              </p>
              <div className="bg-blue-50 rounded-lg p-3 mt-2">
                <p className="text-sm text-blue-800">
                  💡 Exemple : Un pari sportif de 100$ = 300 points
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎁 Récompenses par Niveau</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Bronze+</strong> : Bonus hebdomadaires et mensuels</li>
                <li>• <strong>Platine+</strong> : Reload quotidien débloqué</li>
                <li>• <strong>Diamant+</strong> : Hôte VIP personnel</li>
                <li>• <strong>Obsidienne</strong> : Avantages secrets exclusifs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau des niveaux */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📈 Tous les Niveaux VIP
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Niveau</th>
                <th className="px-4 py-3 text-center">Points requis</th>
                <th className="px-4 py-3 text-center">Rakeback</th>
                <th className="px-4 py-3 text-center">Reload</th>
                <th className="px-4 py-3 text-center">Weekly</th>
                <th className="px-4 py-3 text-center">Monthly</th>
                <th className="px-4 py-3 text-center hidden md:table-cell">Hôte VIP</th>
              </tr>
            </thead>
            <tbody>
              {vipLevels.map((level, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-4 py-3">
                    <span className={`font-bold text-${level.color}`}>
                      {level.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center font-mono text-sm">
                    {level.points}
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-green-600">
                    {level.rakeback}
                  </td>
                  <td className="px-4 py-3 text-center text-2xl">
                    {level.reload}
                  </td>
                  <td className="px-4 py-3 text-center text-2xl">
                    {level.weekly}
                  </td>
                  <td className="px-4 py-3 text-center text-2xl">
                    {level.monthly}
                  </td>
                  <td className="px-4 py-3 text-center text-2xl hidden md:table-cell">
                    {level.host || '❌'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p>✅ = Disponible | ❌ = Non disponible</p>
          <p className="font-semibold text-red-600">
            ⚠️ Le Reload Quotidien n&apos;est disponible qu&apos;à partir du niveau Platine I
          </p>
        </div>
      </section>

      {/* Calcul de progression */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🧮 Calculer votre progression
        </h2>
        
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">Exemple de calcul :</h3>
          <p className="text-gray-700 mb-4">
            Vous êtes Bronze avec 45% de progression vers Argent :
          </p>
          
          <div className="bg-white rounded-lg p-4 space-y-3 font-mono text-sm">
            <div>1️⃣ Argent (50,000) - Bronze (10,000) = <strong>40,000 points</strong> à faire</div>
            <div>2️⃣ 45% × 40,000 = <strong>18,000 points</strong> déjà faits</div>
            <div>3️⃣ 40,000 - 18,000 = <strong>22,000 points</strong> restants</div>
            <div className="text-green-600 font-bold pt-2">
              → Il vous reste 22,000$ à miser (ou 7,333$ en paris sportifs)
            </div>
          </div>
        </div>
      </section>

      {/* Bonus par niveau */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎁 Détail des Bonus VIP
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">📅 Boost Hebdomadaire</h3>
            <p className="text-blue-800 mb-2">
              Chaque samedi à 12h30 GMT via Telegram VIP
            </p>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Disponible dès le niveau Bronze</li>
              <li>• Montant basé sur votre activité</li>
              <li>• Distribué via canal Telegram exclusif</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <h3 className="font-bold text-purple-900 mb-3">📆 Bonus Mensuel</h3>
            <p className="text-purple-800 mb-2">
              Autour du 15 de chaque mois par email
            </p>
            <ul className="space-y-1 text-sm text-purple-700">
              <li>• Disponible dès le niveau Bronze</li>
              <li>• Basé sur votre volume mensuel</li>
              <li>• Vérifiez vos spams !</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-3">🔄 Reload Quotidien</h3>
            <p className="text-green-800 mb-2">
              Bonus quotidien pour les VIP Platine+
            </p>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• <strong>Exclusif Platine et +</strong></li>
              <li>• Basé sur 7-42 jours d&apos;activité</li>
              <li>• Montants croissants par niveau</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6">
            <h3 className="font-bold text-amber-900 mb-3">👤 Hôte VIP Personnel</h3>
            <p className="text-amber-800 mb-2">
              Service exclusif Diamant+
            </p>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• Contact direct privilégié</li>
              <li>• Bonus personnalisés</li>
              <li>• Support prioritaire 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bonus spéciaux */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🎉 Autres Avantages VIP
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start bg-white rounded-lg shadow p-4">
            <span className="text-2xl mr-4">🎂</span>
            <div>
              <h3 className="font-bold text-gray-900">Bonus d&apos;Anniversaire</h3>
              <p className="text-gray-700 text-sm">
                Recevez un bonus spécial le jour de votre anniversaire (email vérifié requis)
              </p>
            </div>
          </div>
          
          <div className="flex items-start bg-white rounded-lg shadow p-4">
            <span className="text-2xl mr-4">🎟️</span>
            <div>
              <h3 className="font-bold text-gray-900">Tirage Hebdomadaire 75,000$</h3>
              <p className="text-gray-700 text-sm">
                1 ticket pour chaque 1,000$ misés - tirage chaque semaine
              </p>
            </div>
          </div>
          
          <div className="flex items-start bg-white rounded-lg shadow p-4">
            <span className="text-2xl mr-4">🏃</span>
            <div>
              <h3 className="font-bold text-gray-900">Course Quotidienne 100,000$</h3>
              <p className="text-gray-700 text-sm">
                Les 5,000 meilleurs joueurs se partagent la cagnotte toutes les 24h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Rounders */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🚀 Bonus Exclusifs Rounders Pro</h3>
        <p className="mb-6 text-gray-300">
          En plus du programme VIP Stake, nos affiliés bénéficient de :
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">💰 Bonus Paliers VIP</h4>
            <p className="text-sm text-gray-300">
              Recevez un bonus supplémentaire à chaque nouveau niveau atteint
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">📊 Tableau de Bord</h4>
            <p className="text-sm text-gray-300">
              Suivez votre progression et réclamez vos bonus facilement
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link
            href="/affilies"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Rejoindre l&apos;Espace Affiliés →
          </Link>
        </div>
      </div>

      {/* Telegram */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-blue-900 mb-3">💬 Rejoindre le Telegram VIP</h3>
        <p className="text-blue-800 mb-4">
          Dès le niveau Bronze, rejoignez le canal Telegram exclusif pour recevoir vos boosts hebdomadaires 
          et rester informé de toutes les promotions spéciales.
        </p>
        <p className="text-sm text-blue-700">
          📱 Le lien vous sera fourni automatiquement une fois le niveau Bronze atteint
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/bonus"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Bonus & Rakeback
        </Link>
        <Link
          href="/guide-stake/jeux"
          className="text-blue-600 hover:underline font-medium"
        >
          Les Jeux →
        </Link>
      </div>
    </div>
  );
}