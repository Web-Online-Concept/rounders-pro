export default function PremierDepot() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">💳 Premier Dépôt sur Stake</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Guide complet pour effectuer votre premier dépôt sur Stake en toute sécurité. 
          Découvrez les méthodes disponibles et nos conseils pour bien démarrer.
        </p>

        {/* Alerte Bonus Rounders */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-green-800">
                <strong>Rappel :</strong> Vous devez vous être inscrit via notre lien Rounders pour bénéficier 
                de nos bonus exclusifs. <a href="/avantages-rounders" className="underline">Voir les bonus</a>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Méthodes de dépôt disponibles</h2>
        <p className="mb-6">
          Stake accepte exclusivement les cryptomonnaies, ce qui garantit des transactions rapides et sécurisées :
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">💰 Cryptos principales</h3>
            <ul className="text-sm space-y-1">
              <li>• Bitcoin (BTC)</li>
              <li>• Ethereum (ETH)</li>
              <li>• Litecoin (LTC)</li>
              <li>• Dogecoin (DOGE)</li>
              <li>• Bitcoin Cash (BCH)</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-800 mb-2">💎 Stablecoins & Altcoins</h3>
            <ul className="text-sm space-y-1">
              <li>• USDT (Tether)</li>
              <li>• USDC</li>
              <li>• APE</li>
              <li>• SHIB</li>
              <li>• Et 15+ autres cryptos</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Comment déposer étape par étape</h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-semibold mb-2">Accédez à la caisse</h3>
              <p className="text-gray-700">Cliquez sur le bouton &quot;Wallet&quot; en haut à droite de l&apos;écran</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-semibold mb-2">Sélectionnez &quot;Deposit&quot;</h3>
              <p className="text-gray-700">Choisissez l&apos;onglet dépôt dans votre wallet</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-semibold mb-2">Choisissez votre crypto</h3>
              <p className="text-gray-700">Sélectionnez la cryptomonnaie que vous souhaitez déposer</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="font-semibold mb-2">Copiez l&apos;adresse</h3>
              <p className="text-gray-700">Copiez l&apos;adresse de dépôt ou scannez le QR code</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="font-semibold mb-2">Envoyez vos cryptos</h3>
              <p className="text-gray-700">Depuis votre wallet ou exchange, envoyez les fonds à cette adresse</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Points d&apos;attention importants</h3>
          <ul className="space-y-2 text-yellow-700">
            <li>• <strong>Vérifiez toujours l&apos;adresse</strong> avant d&apos;envoyer</li>
            <li>• <strong>Respectez le réseau</strong> (ERC-20, TRC-20, etc.)</li>
            <li>• <strong>Montant minimum :</strong> Varie selon la crypto (vérifiez sur Stake)</li>
            <li>• <strong>Confirmations :</strong> 1-3 pour BTC, variable selon la crypto</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conseils pour votre premier dépôt</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Commencez petit :</strong> Faites un premier dépôt modeste pour tester</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Utilisez des stablecoins :</strong> USDT ou USDC pour éviter la volatilité</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Gardez des frais :</strong> Prévoyez les frais de transaction</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Sauvegardez l&apos;adresse :</strong> Pour vos futurs dépôts</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Acheter des cryptos pour déposer</h2>
        <p className="mb-4">
          Si vous n&apos;avez pas encore de cryptomonnaies, voici les meilleures options :
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Exchanges</h3>
            <p className="text-sm text-gray-600">Binance, Kraken, Coinbase</p>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold mb-2">P2P</h3>
            <p className="text-sm text-gray-600">LocalBitcoins, Paxful</p>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Cartes bancaires</h3>
            <p className="text-sm text-gray-600">MoonPay, Simplex</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Délais de traitement</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Crypto</th>
                <th className="px-4 py-3 text-center">Confirmations</th>
                <th className="px-4 py-3 text-center">Temps moyen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">Bitcoin (BTC)</td>
                <td className="px-4 py-3 text-center">1-3</td>
                <td className="px-4 py-3 text-center">10-30 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3">Ethereum (ETH)</td>
                <td className="px-4 py-3 text-center">12</td>
                <td className="px-4 py-3 text-center">2-5 min</td>
              </tr>
              <tr>
                <td className="px-4 py-3">USDT/USDC</td>
                <td className="px-4 py-3 text-center">Variable</td>
                <td className="px-4 py-3 text-center">1-10 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3">Litecoin (LTC)</td>
                <td className="px-4 py-3 text-center">6</td>
                <td className="px-4 py-3 text-center">15-30 min</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">💡 Prêt à jouer ?</h3>
          <p className="text-blue-700 mb-4">
            Une fois votre dépôt confirmé, vous pouvez immédiatement commencer à jouer et progresser 
            dans le programme VIP pour débloquer vos bonus Rounders !
          </p>
          <a href="/guide-stake/jeux" className="text-blue-600 underline">
            Découvrir les jeux disponibles →
          </a>
        </div>
      </div>
    </div>
  );
}