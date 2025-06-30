'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Affilies() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">💰 Espace Affiliés Rounders</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Réclamez vos bonus cash exclusifs selon votre niveau VIP Stake
          </p>

          {/* Alerte importante */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-yellow-800 font-semibold">Réservé aux affiliés Rounders</h3>
                <p className="text-yellow-700 text-sm mt-1">
                  Cet espace est exclusivement réservé aux joueurs inscrits sur Stake via notre lien d&apos;affiliation. 
                  Vous devez utiliser le code <strong>rounders</strong> lors de votre inscription.
                </p>
              </div>
            </div>
          </div>

        {/* Montants des bonus */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Montants des bonus par niveau VIP</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-lg font-semibold text-yellow-600">Bronze</div>
              <div className="text-2xl font-bold">10€</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-lg font-semibold text-gray-600">Argent</div>
              <div className="text-2xl font-bold">20€</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-lg font-semibold text-yellow-500">Or</div>
              <div className="text-2xl font-bold">30€</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-lg font-semibold text-cyan-600">Platine I-III</div>
              <div className="text-2xl font-bold">50€</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-lg font-semibold text-purple-600">Platine IV-VI</div>
              <div className="text-2xl font-bold">100€</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-lg font-semibold text-pink-600">Diamant I-V</div>
              <div className="text-2xl font-bold">200€</div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 text-center mt-6">
            Ces bonus sont offerts en plus de tous les avantages VIP Stake. 
            <a href="/guide-stake/vip" className="text-blue-600 hover:underline">
              Voir le détail du programme VIP →
            </a>
          </p>
        </div>

        {/* Formulaire de réclamation */}
        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <span className="text-3xl mr-3">💸</span>
            Réclamer mon bonus
          </h2>
          
          <form 
            action="https://formspree.io/f/myzjonkv"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6"
          >
            {/* Sujet personnalisé pour l'email */}
            <input type="hidden" name="_subject" value="Nouvelle demande de bonus Rounders" />
            
            <div>
              <label htmlFor="pseudo" className="block text-sm font-medium text-gray-700 mb-1">
                Pseudo Stake
              </label>
              <input
                type="text"
                id="pseudo"
                name="pseudo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Votre pseudo sur Stake"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="niveau" className="block text-sm font-medium text-gray-700 mb-1">
                Niveau VIP atteint
              </label>
              <select
                id="niveau"
                name="niveau"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
              >
                <option value="">Sélectionnez votre niveau</option>
                <option value="bronze">Bronze (10€)</option>
                <option value="argent">Argent (20€)</option>
                <option value="or">Or (30€)</option>
                <option value="platine1-3">Platine I-III (50€)</option>
                <option value="platine4-6">Platine IV-VI (100€)</option>
                <option value="diamant">Diamant I-V (200€)</option>
              </select>
            </div>

            <div>
              <label htmlFor="crypto" className="block text-sm font-medium text-gray-700 mb-1">
                Cryptomonnaie souhaitée
              </label>
              <select
                id="crypto"
                name="crypto"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
              >
                <option value="">Sélectionnez une crypto</option>
                <option value="USDT">USDT (Tether)</option>
                <option value="USDC">USDC</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="LTC">Litecoin (LTC)</option>
                <option value="TRX">Tron (TRX)</option>
                <option value="DOGE">Dogecoin (DOGE)</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="reseau" className="block text-sm font-medium text-gray-700 mb-1">
                Réseau (si applicable)
              </label>
              <input
                type="text"
                id="reseau"
                name="reseau"
                placeholder="Ex: Solana, ERC-20, TRC-20..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse de réception
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Votre adresse crypto"
              />
              <p className="mt-1 text-sm text-red-600">
                ⚠️ Vérifiez bien votre adresse. Toute erreur ne sera pas de notre responsabilité.
              </p>
            </div>

            <div>
              <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-1">
                Capture d&apos;écran de votre niveau VIP
              </label>
              <input
                type="file"
                id="screenshot"
                name="screenshot"
                accept="image/*"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="mt-1 text-sm text-gray-600">
                Formats acceptés : JPG, PNG, GIF (max 10MB)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Conditions importantes :
              </h3>
              <ul className="text-sm text-amber-800 space-y-1.5">
                <li>• Vous devez être inscrit via notre lien d&apos;affiliation (code : <strong>rounders</strong>)</li>
                <li>• Un seul bonus par niveau atteint</li>
                <li>• Délai de traitement : 24-48h</li>
                <li>• Nous nous réservons le droit de vérifier votre éligibilité</li>
                <li>• Nous vérifions manuellement chaque demande via notre accès direct aux statistiques affiliés Stake</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Comment ça marche ?</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Remplissez le formulaire avec vos informations</li>
            <li>Nous vérifions votre inscription via notre lien d&apos;affiliation</li>
            <li>Nous contrôlons votre niveau VIP actuel</li>
            <li>Vous recevez votre bonus sous 24-48h</li>
          </ol>
          <p className="text-sm text-blue-700 mt-3 italic">
            Note : Après validation, vous serez redirigé vers une page de confirmation.
          </p>
        </div>
      </div>
    </main>

    <Footer />
  </>
  );
}