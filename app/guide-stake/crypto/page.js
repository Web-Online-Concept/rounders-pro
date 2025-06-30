// app/guide-stake/crypto/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Cryptomonnaies sur Stake - Guide Coinbase et Dépôts | Rounders Pro',
  description: 'Guide complet pour acheter des cryptos avec Coinbase et déposer sur Stake. Méthodes de dépôt, retrait, cryptos acceptées.',
  keywords: 'stake crypto, stake bitcoin, stake coinbase, stake depot, stake retrait',
};

export default function GuideCryptoPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ₿ Cryptomonnaies et Transactions
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
        <p className="text-blue-900 font-semibold">
          💳 Stake fonctionne exclusivement avec les cryptomonnaies
        </p>
        <p className="text-blue-800 mt-1">
          Transactions instantanées, anonymes et sans frais bancaires
        </p>
      </div>

      {/* Cryptos acceptées */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🪙 Cryptomonnaies Acceptées sur Stake
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">₿</div>
            <h3 className="font-bold text-gray-900">Bitcoin</h3>
            <p className="text-sm text-gray-600">BTC</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">🔷</div>
            <h3 className="font-bold text-gray-900">Ethereum</h3>
            <p className="text-sm text-gray-600">ETH</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">🔵</div>
            <h3 className="font-bold text-gray-900">Litecoin</h3>
            <p className="text-sm text-gray-600">LTC</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">🟢</div>
            <h3 className="font-bold text-gray-900">Bitcoin Cash</h3>
            <p className="text-sm text-gray-600">BCH</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">🐕</div>
            <h3 className="font-bold text-gray-900">Dogecoin</h3>
            <p className="text-sm text-gray-600">DOGE</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-900">Ripple</h3>
            <p className="text-sm text-gray-600">XRP</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">🔴</div>
            <h3 className="font-bold text-gray-900">TRON</h3>
            <p className="text-sm text-gray-600">TRX</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl mb-2">💱</div>
            <h3 className="font-bold text-gray-900">USDT/USDC</h3>
            <p className="text-sm text-gray-600">Stablecoins</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">
          + Plus de 20 autres cryptomonnaies disponibles
        </p>
      </section>

      {/* Guide Coinbase */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📱 Acheter des Cryptos avec Coinbase
        </h2>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Pourquoi Coinbase pour les Français ?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>100% légal en France</strong> - Agréé par l&apos;AMF</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Interface en français</strong> - Simple pour les débutants</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Virements SEPA gratuits</strong> - Depuis votre banque française</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Carte bancaire acceptée</strong> - Achat instantané</span>
            </li>
          </ul>
          
          <div className="mt-6 text-center">
            <a
              href="https://coinbase.com/join/PEUDKA3?src=referral-link"
              target="_blank"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              Créer un compte Coinbase →
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Recevez 10€ de Bitcoin gratuits*
            </p>
          </div>
        </div>

        {/* Étapes Coinbase */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          📋 Guide Étape par Étape
        </h3>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Créer votre compte Coinbase</h4>
                <p className="text-gray-700 mb-2">
                  Utilisez notre lien pour bénéficier du bonus de bienvenue. 
                  L&apos;inscription prend 5 minutes.
                </p>
                <a
                  href="https://coinbase.com/join/PEUDKA3?src=referral-link"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  → S&apos;inscrire sur Coinbase
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Vérifier votre identité</h4>
                <p className="text-gray-700">
                  Coinbase demande une pièce d&apos;identité (obligatoire en France). 
                  La vérification est automatique et prend quelques minutes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Déposer des euros</h4>
                <p className="text-gray-700 mb-3">
                  Deux options disponibles :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded p-3">
                    <h5 className="font-semibold text-gray-800">🏦 Virement SEPA</h5>
                    <p className="text-sm text-gray-600">Gratuit, 1-2 jours</p>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <h5 className="font-semibold text-gray-800">💳 Carte Bancaire</h5>
                    <p className="text-sm text-gray-600">Instantané, frais 1.49%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Acheter vos cryptos</h4>
                <p className="text-gray-700 mb-2">
                  Pour Stake, nous recommandons :
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <strong>USDT/USDC</strong> - Valeur stable (1$ = 1 USDT)</li>
                  <li>• <strong>Litecoin</strong> - Frais de transfert très bas</li>
                  <li>• <strong>Bitcoin</strong> - Le plus populaire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Déposer sur Stake */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          💸 Comment Déposer sur Stake
        </h2>

        <div className="bg-green-50 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-green-900 mb-3">✅ C&apos;est très simple !</h3>
          <ol className="list-decimal list-inside space-y-2 text-green-800">
            <li>Connectez-vous à Stake</li>
            <li>Cliquez sur "Wallet" → "Deposit"</li>
            <li>Choisissez votre crypto</li>
            <li>Copiez l&apos;adresse de dépôt</li>
            <li>Envoyez depuis Coinbase</li>
            <li>Attendez 5-30 minutes</li>
          </ol>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
          <p className="text-amber-900 font-semibold mb-2">⚠️ Attention Important</p>
          <ul className="space-y-1 text-amber-800 text-sm">
            <li>• Vérifiez toujours l&apos;adresse 2 fois avant d&apos;envoyer</li>
            <li>• Commencez par un petit montant pour tester</li>
            <li>• N&apos;envoyez jamais une crypto sur la mauvaise blockchain</li>
          </ul>
        </div>
      </section>

      {/* Retirer de Stake */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🏦 Comment Retirer de Stake
        </h2>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-gray-900 mb-2">1️⃣ Retrait vers Coinbase</h3>
            <p className="text-gray-700 text-sm mb-2">
              Wallet → Withdraw → Choisir crypto → Entrer adresse Coinbase
            </p>
            <p className="text-green-600 text-sm font-semibold">
              ⚡ Traitement : 15 minutes à 2 heures
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-gray-900 mb-2">2️⃣ Conversion en euros</h3>
            <p className="text-gray-700 text-sm mb-2">
              Sur Coinbase : Vendre crypto → EUR → Retrait SEPA
            </p>
            <p className="text-green-600 text-sm font-semibold">
              🏦 Sur votre compte : 1-2 jours ouvrés
            </p>
          </div>
        </div>
      </section>

      {/* Conseils pro */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          💡 Conseils de Pro
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">🚀 Pour économiser les frais</h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• Utilisez USDT sur réseau TRC20 (frais = 1$)</li>
              <li>• Évitez Bitcoin aux heures de pointe</li>
              <li>• Groupez vos transactions</li>
              <li>• Utilisez les virements SEPA sur Coinbase</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-purple-900 mb-3">🔒 Pour la sécurité</h3>
            <ul className="space-y-2 text-purple-800 text-sm">
              <li>• Activez la 2FA partout</li>
              <li>• Utilisez des adresses email différentes</li>
              <li>• Ne partagez jamais vos clés privées</li>
              <li>• Faites des captures d&apos;écran des transactions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🔄 Alternatives à Coinbase
        </h2>

        <div className="bg-gray-100 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Coinbase reste notre recommandation principale pour les Français, mais voici d&apos;autres options :
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Binance</strong> - Plus de cryptos, interface complexe</li>
            <li>• <strong>Kraken</strong> - Très sécurisé, bon support</li>
            <li>• <strong>Crypto.com</strong> - Carte de débit crypto incluse</li>
            <li>• <strong>Bitpanda</strong> - Simple, basé en Europe</li>
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Prêt à acheter vos premières cryptos ?
        </h3>
        <p className="mb-6">
          Commencez avec Coinbase et recevez 10€ de Bitcoin offerts
        </p>
        <a
          href="https://coinbase.com/join/PEUDKA3?src=referral-link"
          target="_blank"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Ouvrir un compte Coinbase →
        </a>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/jeux"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Les Jeux
        </Link>
        <Link
          href="/guide-stake/strategies"
          className="text-blue-600 hover:underline font-medium"
        >
          Stratégies →
        </Link>
      </div>
    </div>
  );
}