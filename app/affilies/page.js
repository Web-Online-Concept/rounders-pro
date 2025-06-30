// app/affilies/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AffiliesPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    vipLevel: '',
    screenshot: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const bonusAmounts = {
    'bronze': '10€',
    'argent': '20€',
    'or': '30€',
    'platine1-3': '50€',
    'platine4-6': '100€',
    'diamant': '200€'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Ici vous intégrerez votre logique d'envoi
    // Pour l'instant, on simule l'envoi
    setTimeout(() => {
      setSubmitMessage('Votre demande a été envoyée ! Nous la traiterons dans les 24h.');
      setIsSubmitting(false);
      setFormData({
        username: '',
        email: '',
        vipLevel: '',
        screenshot: null,
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          💰 Espace Affiliés Rounders Pro
        </h1>

        {/* Rappel des bonus */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Vos Bonus Cash Exclusifs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(bonusAmounts).map(([level, amount]) => (
              <div key={level} className="bg-white/10 backdrop-blur rounded p-3 text-center">
                <div className="text-sm font-semibold capitalize">
                  {level.replace('1-3', ' I-III').replace('4-6', ' IV-VI')}
                </div>
                <div className="text-xl font-bold">{amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Réclamer votre bonus VIP
          </h2>

          {submitMessage && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pseudo Stake *
              </label>
              <input
                type="text"
                required
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre pseudo sur Stake"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email de contact *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niveau VIP atteint *
              </label>
              <select
                required
                value={formData.vipLevel}
                onChange={(e) => setFormData({...formData, vipLevel: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Capture d&apos;écran du niveau VIP *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  required
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, screenshot: e.target.files[0]})}
                  className="hidden"
                  id="screenshot"
                />
                <label htmlFor="screenshot" className="cursor-pointer">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    {formData.screenshot ? formData.screenshot.name : 'Cliquez pour télécharger votre capture'}
                  </p>
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                La capture doit montrer clairement votre pseudo et niveau VIP
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (optionnel)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Informations supplémentaires..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-bold transition ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Réclamer mon bonus'}
            </button>
          </form>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-amber-50 rounded-lg p-6">
          <h3 className="font-bold text-amber-900 mb-3">📋 Instructions importantes</h3>
          <ul className="space-y-2 text-amber-800">
            <li>• Vous devez être inscrit via notre lien d&apos;affiliation (code : rounders)</li>
            <li>• Un seul bonus par niveau VIP (pas de cumul)</li>
            <li>• La capture d&apos;écran doit être récente et non modifiée</li>
            <li>• Paiement en USDC via la fonction pourboire Stake sous 24-48h</li>
            <li>• En cas de problème, contactez-nous : rounders.pro@gmail.com</li>
          </ul>
        </div>

        {/* Pas encore inscrit ? */}
        <div className="mt-8 text-center bg-gray-100 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Pas encore inscrit sur Stake ?
          </p>
          <a
            href="https://stake.bet/?c=rounders"
            target="_blank"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
          >
            S&apos;inscrire sur Stake →
          </a>
        </div>

        {/* Retour */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}