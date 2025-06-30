'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Affilies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              💰 Réclamez votre Bonus Cash Rounders
            </h1>
            <p className="text-xl text-gray-600">
              Jusqu&apos;à 200€ selon votre niveau VIP sur Stake
            </p>
          </div>

          {/* Formulaire EN PREMIER */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Formulaire de demande de bonus</h2>
            
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* Access Key Web3Forms */}
              <input type="hidden" name="access_key" value="fe6cc4ed-5dc2-4b79-ad1d-909a898798ee" />
              
              {/* Redirection après soumission */}
              <input type="hidden" name="redirect" value="https://www.rounders.pro/merci" />
              
              {/* Sujet de l'email */}
              <input type="hidden" name="subject" value="Nouvelle demande de bonus Rounders" />
              
              {/* Email de l'utilisateur */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Pseudo Stake */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Pseudo Stake *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Votre pseudo sur Stake"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Niveau VIP */}
              <div>
                <label htmlFor="vipLevel" className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau VIP *
                </label>
                <select
                  id="vipLevel"
                  name="vipLevel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="Bronze">Bronze (10€)</option>
                  <option value="Argent">Argent (20€)</option>
                  <option value="Or">Or (30€)</option>
                  <option value="Platine I">Platine I (50€)</option>
                  <option value="Platine II">Platine II (50€)</option>
                  <option value="Platine III">Platine III (50€)</option>
                  <option value="Platine IV">Platine IV (100€)</option>
                  <option value="Platine V">Platine V (100€)</option>
                  <option value="Platine VI">Platine VI (100€)</option>
                  <option value="Diamant I">Diamant I (200€)</option>
                  <option value="Diamant II">Diamant II (200€)</option>
                  <option value="Diamant III">Diamant III (200€)</option>
                  <option value="Diamant IV">Diamant IV (200€)</option>
                  <option value="Diamant V">Diamant V (200€)</option>
                </select>
              </div>

              {/* Crypto préférée */}
              <div>
                <label htmlFor="crypto" className="block text-sm font-medium text-gray-700 mb-2">
                  Crypto préférée pour le bonus *
                </label>
                <select
                  id="crypto"
                  name="crypto"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez une crypto</option>
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="ETH">Ethereum (ETH)</option>
                  <option value="LTC">Litecoin (LTC)</option>
                  <option value="DOGE">Dogecoin (DOGE)</option>
                  <option value="BCH">Bitcoin Cash (BCH)</option>
                  <option value="XRP">Ripple (XRP)</option>
                  <option value="TRX">Tron (TRX)</option>
                  <option value="USDT">Tether (USDT)</option>
                  <option value="USDC">USD Coin (USDC)</option>
                </select>
              </div>

              {/* Réseau pour USDT/USDC */}
              <div>
                <label htmlFor="network" className="block text-sm font-medium text-gray-700 mb-2">
                  Si USDT/USDC, précisez le réseau
                </label>
                <input
                  type="text"
                  id="network"
                  name="network"
                  placeholder="Ex: ERC20, TRC20, BEP20..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Adresse crypto */}
              <div>
                <label htmlFor="cryptoAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse de réception *
                </label>
                <input
                  type="text"
                  id="cryptoAddress"
                  name="cryptoAddress"
                  required
                  placeholder="Votre adresse crypto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Capture d'écran */}
              <div>
                <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-2">
                  Capture d&apos;écran de votre niveau VIP
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-orange-400 transition-colors">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="screenshot"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                      >
                        <span>Télécharger une image</span>
                        <input
                          id="screenshot"
                          name="screenshot"
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,image/gif"
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu&apos;à 10MB</p>
                  </div>
                </div>
              </div>

              {/* Message optionnel */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Informations complémentaires..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Conditions */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Conditions importantes :</h3>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Être inscrit via notre lien d&apos;affiliation</li>
                  <li>• Un seul bonus par personne et par niveau</li>
                  <li>• Délai de traitement : 24-48h</li>
                  <li>• Minimum 100$ de wager sur les 30 derniers jours</li>
                  <li>• Nous vérifions manuellement chaque demande via notre accès direct aux statistiques affiliés Stake</li>
                </ul>
              </div>

              {/* Bouton submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* Section explicative - QUI PEUT ACCEDER - APRES LE FORMULAIRE */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Qui peut accéder à ce formulaire ?</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Ce formulaire est <strong>exclusivement réservé</strong> aux joueurs qui se sont inscrits sur Stake 
                via notre lien d&apos;affiliation Rounders. Si vous n&apos;êtes pas encore inscrit ou si vous avez utilisé 
                un autre lien, vous ne pourrez pas bénéficier de ces bonus exclusifs.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="font-semibold">
                  ⚠️ Important : Nous avons un accès direct aux données de nos affiliés et pouvons vérifier 
                  instantanément si vous êtes bien inscrit via notre lien.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Comment ça fonctionne ?</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Vous devez être inscrit sur Stake via notre lien d&apos;affiliation</li>
                <li>Atteindre un niveau VIP (Bronze minimum)</li>
                <li>Avoir au moins 100$ de wager sur les 30 derniers jours</li>
                <li>Remplir le formulaire ci-dessous avec vos informations</li>
                <li>Nous vérifions votre éligibilité (24-48h)</li>
                <li>Vous recevez votre bonus directement en crypto !</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">Montants des bonus par niveau</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 p-3 rounded text-center">
                  <p className="font-semibold">Bronze</p>
                  <p className="text-green-600 font-bold">10€</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center">
                  <p className="font-semibold">Argent</p>
                  <p className="text-green-600 font-bold">20€</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center">
                  <p className="font-semibold">Or</p>
                  <p className="text-green-600 font-bold">30€</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center">
                  <p className="font-semibold">Platine I-III</p>
                  <p className="text-green-600 font-bold">50€</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center">
                  <p className="font-semibold">Platine IV-VI</p>
                  <p className="text-green-600 font-bold">100€</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center">
                  <p className="font-semibold">Diamant I-V</p>
                  <p className="text-green-600 font-bold">200€</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
                <p className="text-orange-800">
                  <strong>Rappel :</strong> Un seul bonus par personne et par niveau. Une fois que vous avez 
                  réclamé votre bonus Bronze, vous devez atteindre Argent pour réclamer le bonus suivant.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE EXEMPLE - A LA FIN */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Exemple de capture d&apos;écran à fournir</h2>
            <p className="text-gray-600 mb-6">
              Voici ce que nous attendons comme capture d&apos;écran. Votre niveau VIP doit être clairement visible :
            </p>
            <div className="text-center">
              <img 
                src="/images/exemple-vip-stake.jpg" 
                alt="Exemple de capture d'écran du niveau VIP Stake"
                className="mx-auto rounded-lg shadow-lg border border-gray-200 max-w-full"
                style={{ maxHeight: '400px' }}
              />
              <p className="text-sm text-gray-500 mt-4">
                La capture doit montrer clairement votre pseudo et votre niveau VIP actuel
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}