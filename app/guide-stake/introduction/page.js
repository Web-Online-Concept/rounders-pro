// app/guide-stake/introduction/page.js
import Link from 'next/link';
import Image from 'next/image';
import { AFFILIATE_LINK } from '../../config/affiliate';

export const metadata = {
  title: 'Introduction à Stake - Présentation complète | Guide Rounders',
  description: 'Découvrez Stake, la plateforme de casino et paris sportifs crypto. Histoire, fonctionnement, avantages. Guide objectif par Rounders Pro.',
  keywords: 'stake introduction, qu\'est-ce que stake, stake présentation',
};

export default function GuideIntroductionPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎰 Introduction à Stake
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
        <p className="text-blue-900 font-semibold">
          🌟 Le leader mondial du casino et paris sportifs crypto
        </p>
        <p className="text-blue-800 mt-1">
          Plus de 3 millions de joueurs actifs dans le monde
        </p>
      </div>

      {/* Qu'est-ce que Stake */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🤔 Qu&apos;est-ce que Stake ?
        </h2>
        
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <p className="text-gray-700 mb-4">
            Stake est la plus grande plateforme de casino et paris sportifs crypto au monde, fondée en 2017. 
            Propriété de Medium Rare N.V. et licenciée à Curaçao, Stake révolutionne le gambling en ligne 
            avec une approche 100% crypto et des fonctionnalités innovantes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">📊 Chiffres clés</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plus de <strong>100 milliards $</strong> de volume parié</li>
                <li>• <strong>3+ millions</strong> de joueurs actifs</li>
                <li>• <strong>3000+</strong> jeux disponibles</li>
                <li>• <strong>30+</strong> cryptomonnaies acceptées</li>
                <li>• Disponible en <strong>15+ langues</strong></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">🏆 Partenariats prestigieux</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>UFC</strong> - Partenaire officiel</li>
                <li>• <strong>Everton FC</strong> - Sponsor maillot</li>
                <li>• <strong>Drake</strong> - Ambassadeur</li>
                <li>• <strong>Watford FC</strong> - Partenaire</li>
                <li>• <strong>Sergio Agüero</strong> - Ambassadeur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Stake */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          💎 Pourquoi choisir Stake ?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-gray-900 mb-2">Transactions instantanées</h3>
            <p className="text-gray-700">
              Dépôts et retraits en crypto traités en quelques secondes. 
              Pas d&apos;attente, pas de vérification bancaire.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="font-bold text-gray-900 mb-2">Bonus les plus généreux</h3>
            <p className="text-gray-700">
              10% de rakeback instantané + bonus quotidiens, hebdomadaires et mensuels. 
              Programme VIP avec 15 niveaux.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="font-bold text-gray-900 mb-2">3000+ jeux premium</h3>
            <p className="text-gray-700">
              Slots, jeux de table, live casino, Stake Originals exclusifs. 
              Les meilleurs providers du marché.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6">
            <div className="text-3xl mb-3">🏟️</div>
            <h3 className="font-bold text-gray-900 mb-2">Paris sportifs complets</h3>
            <p className="text-gray-700">
              50+ sports, eSports, paris en direct. 
              Les meilleures cotes du marché avec cash out disponible.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-2">Sécurité maximale</h3>
            <p className="text-gray-700">
              Licence Curaçao, cryptage SSL, 2FA disponible. 
              Coffre-fort intégré pour sécuriser vos gains.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="font-bold text-gray-900 mb-2">Anonymat préservé</h3>
            <p className="text-gray-700">
              Inscription en 10 secondes, pas de KYC obligatoire. 
              Jouez en toute discrétion avec les cryptos.
            </p>
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🚀 Innovations Stake
        </h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <h3 className="font-bold text-blue-900">🎯 Stake Originals</h3>
            <p className="text-blue-800">
              Jeux exclusifs développés en interne : Plinko, Mines, Dice, Crash, Limbo... 
              RTP élevé et gameplay innovant introuvable ailleurs.
            </p>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
            <h3 className="font-bold text-purple-900">💬 Chat & Communauté</h3>
            <p className="text-purple-800">
              Chat en direct intégré, système de pourboires entre joueurs, 
              rain (pluie de crypto) régulières. Une vraie communauté de passionnés.
            </p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-4">
            <h3 className="font-bold text-green-900">📊 Statistiques détaillées</h3>
            <p className="text-green-800">
              Historique complet, statistiques de jeu, profit tracker. 
              Analysez vos performances et optimisez votre stratégie.
            </p>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
            <h3 className="font-bold text-amber-900">⚡ API pour développeurs</h3>
            <p className="text-amber-800">
              API publique pour créer des bots, analyser les données, 
              automatiser certaines actions. Paradis des développeurs.
            </p>
          </div>
        </div>
      </section>

      {/* Comparaison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📊 Stake vs Casinos traditionnels
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Critère</th>
                <th className="px-4 py-3 text-center">Stake 🎰</th>
                <th className="px-4 py-3 text-center">Casinos classiques</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Inscription</td>
                <td className="px-4 py-3 text-center text-green-600">✓ 10 secondes</td>
                <td className="px-4 py-3 text-center text-red-600">✗ 10+ minutes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium">Vérification KYC</td>
                <td className="px-4 py-3 text-center text-green-600">✓ Optionnelle</td>
                <td className="px-4 py-3 text-center text-red-600">✗ Obligatoire</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Vitesse retraits</td>
                <td className="px-4 py-3 text-center text-green-600">✓ Instantané</td>
                <td className="px-4 py-3 text-center text-red-600">✗ 1-5 jours</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium">Limites dépôt/retrait</td>
                <td className="px-4 py-3 text-center text-green-600">✓ Aucune</td>
                <td className="px-4 py-3 text-center text-red-600">✗ Limitées</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Rakeback</td>
                <td className="px-4 py-3 text-center text-green-600">✓ 10% instant</td>
                <td className="px-4 py-3 text-center text-red-600">✗ 0-5% différé</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium">Cryptos acceptées</td>
                <td className="px-4 py-3 text-center text-green-600">✓ 30+</td>
                <td className="px-4 py-3 text-center text-red-600">✗ 0-5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎯 Prêt à découvrir Stake ?</h3>
        <p className="mb-6 text-gray-300">
          Rejoignez plus de 3 millions de joueurs satisfaits et profitez 
          du meilleur du gambling crypto avec nos bonus exclusifs Rounders Pro.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center"
          >
            Commencer sur Stake →
          </a>
          <Link
            href="/guide-stake/france"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition text-center"
          >
            Guide pour joueurs français →
          </Link>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-amber-50 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-amber-900 mb-3">💡 Le saviez-vous ?</h3>
        <ul className="space-y-2 text-amber-800">
          <li>• Stake reverse 90% de ses profits aux joueurs via les bonus et promotions</li>
          <li>• Plus de 1 million $ sont distribués chaque semaine en bonus</li>
          <li>• Le plus gros gain enregistré : 11.5 millions $ sur Plinko</li>
          <li>• Drake a gagné et perdu des millions en direct sur Stake</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Sommaire
        </Link>
        <Link
          href="/guide-stake/inscription"
          className="text-blue-600 hover:underline font-medium"
        >
          Guide d&apos;inscription →
        </Link>
      </div>
    </div>
  );
}