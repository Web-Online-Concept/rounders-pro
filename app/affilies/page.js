'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EspaceAffilies() {
  const [formData, setFormData] = useState({
    email: '',
    pseudo: '',
    niveau: '',
    crypto: '',
    reseau: '',
    adresse: '',
    screenshot: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre demande a été envoyée ! Nous vous contacterons sous 24-48h.');
    // Reset form
    setFormData({
      email: '',
      pseudo: '',
      niveau: '',
      crypto: '',
      reseau: '',
      adresse: '',
      screenshot: null
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, screenshot: e.target.files[0] });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-8">Espace Affiliés Rounders</h1>
          
          {/* Avertissement important */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-3">⚠️ Important - Réservé aux affiliés</h2>
            <p className="text-blue-700 mb-3">
              Cet espace est exclusivement réservé aux joueurs inscrits sur Stake via notre lien d&apos;affiliation.
            </p>
            <ul className="list-disc list-inside text-blue-700 space-y-1 mb-3">
              <li>Code affilié requis : <strong>rounders</strong></li>
              <li>Inscription via : <a href="https://stake.bet/?c=rounders" className="underline hover:text-blue-900" target="_blank" rel="noopener noreferrer">stake.bet/?c=rounders</a></li>
              <li>Vérifiez votre adresse crypto avant soumission</li>
            </ul>
            <p className="text-sm text-blue-600">
              ⚠️ <strong>Attention :</strong> Toute erreur dans l&apos;adresse de réception crypto fournie ne sera pas de notre responsabilité. 
              Vérifiez soigneusement votre adresse et le réseau sélectionné avant de soumettre le formulaire.
            </p>
          </div>

          <p className="text-gray-600 text-center mb-4">
            Réclamez vos bonus cash à chaque niveau VIP atteint. 
            Consultez les <Link href="/guide-stake/vip" className="text-blue-600 hover:underline">modalités complètes du programme VIP</Link>.
          </p>

          {/* Tableau des bonus */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rappel des bonus par niveau</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span>🥉 Bronze</span>
                <span className="font-bold">10€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>🥈 Argent</span>
                <span className="font-bold">20€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>🥇 Or</span>
                <span className="font-bold">30€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>💎 Platine I-III</span>
                <span className="font-bold">50€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>💎 Platine IV-VI</span>
                <span className="font-bold">100€</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>💎 Diamant I-V</span>
                <span className="font-bold">200€</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Formulaire de réclamation</h2>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="pseudo" className="block text-sm font-medium text-gray-700 mb-2">
                Pseudo Stake *
              </label>
              <input
                type="text"
                id="pseudo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.pseudo}
                onChange={(e) => setFormData({ ...formData, pseudo: e.target.value })}
                placeholder="Votre pseudo sur Stake"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="niveau" className="block text-sm font-medium text-gray-700 mb-2">
                Niveau VIP atteint *
              </label>
              <select
                id="niveau"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.niveau}
                onChange={(e) => setFormData({ ...formData, niveau: e.target.value })}
              >
                <option value="">Sélectionnez votre niveau</option>
                <option value="bronze">Bronze (10€)</option>
                <option value="argent">Argent (20€)</option>
                <option value="or">Or (30€)</option>
                <option value="platine1">Platine I (50€)</option>
                <option value="platine2">Platine II (50€)</option>
                <option value="platine3">Platine III (50€)</option>
                <option value="platine4">Platine IV (100€)</option>
                <option value="platine5">Platine V (100€)</option>
                <option value="platine6">Platine VI (100€)</option>
                <option value="diamant1">Diamant I (200€)</option>
                <option value="diamant2">Diamant II (200€)</option>
                <option value="diamant3">Diamant III (200€)</option>
                <option value="diamant4">Diamant IV (200€)</option>
                <option value="diamant5">Diamant V (200€)</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="crypto" className="block text-sm font-medium text-gray-700 mb-2">
                Cryptomonnaie souhaitée *
              </label>
              <select
                id="crypto"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.crypto}
                onChange={(e) => setFormData({ ...formData, crypto: e.target.value })}
              >
                <option value="">Sélectionnez une crypto</option>
                <option value="btc">Bitcoin (BTC)</option>
                <option value="eth">Ethereum (ETH)</option>
                <option value="usdt">Tether (USDT)</option>
                <option value="usdc">USD Coin (USDC)</option>
                <option value="bnb">Binance Coin (BNB)</option>
                <option value="sol">Solana (SOL)</option>
                <option value="doge">Dogecoin (DOGE)</option>
                <option value="ltc">Litecoin (LTC)</option>
                <option value="trx">Tron (TRX)</option>
                <option value="matic">Polygon (MATIC)</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="reseau" className="block text-sm font-medium text-gray-700 mb-2">
                Réseau (si applicable)
              </label>
              <input
                type="text"
                id="reseau"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.reseau}
                onChange={(e) => setFormData({ ...formData, reseau: e.target.value })}
                placeholder="Ex: Solana, ERC-20, BEP-20, TRC-20..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Précisez le réseau pour USDT, USDC ou toute crypto multi-chaîne
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse de réception *
              </label>
              <input
                type="text"
                id="adresse"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.adresse}
                onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                placeholder="Votre adresse crypto"
              />
              <p className="text-xs text-red-500 mt-1">
                ⚠️ Vérifiez attentivement cette adresse - les erreurs ne sont pas de notre responsabilité
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-2">
                Capture d&apos;écran du niveau VIP *
              </label>
              <input
                type="file"
                id="screenshot"
                required
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Montrez clairement votre niveau VIP actuel sur Stake
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-2">Conditions :</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Vous devez être inscrit via notre lien d&apos;affiliation (code : rounders)</li>
                <li>Un seul bonus par niveau VIP</li>
                <li>Traitement sous 24-48h</li>
                <li>Paiement dans la crypto de votre choix</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Soumettre ma demande
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}