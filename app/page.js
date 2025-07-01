'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gagnez plus sur Stake avec Rounders
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bonus cash exclusifs jusqu&apos;à 200€ + Guide VIP français complet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/guide-stake" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                Découvrir le Guide Stake
              </Link>
              <a href="https://stake.bet/?c=rounders" target="_blank" className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-800 transition shadow-lg">
                Jouer sur Stake →
              </a>
            </div>
            <img 
              src="/images/hero-stake.jpg" 
              alt="Stake Casino et Bonus Rounders" 
              className="mt-12 rounded-lg shadow-2xl mx-auto max-w-full"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2">🎰</div>
                <p className="font-semibold text-sm md:text-base">+7000 Jeux</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2">⭐</div>
                <p className="font-semibold text-sm md:text-base">Bonus VIP</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2">💰</div>
                <p className="font-semibold text-sm md:text-base">Rakeback</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2">⚡</div>
                <p className="font-semibold text-sm md:text-base">Paiement Instant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Présentation */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              🎰 Découvrez Stake, le meilleur Casino & Bookmaker pour les joueurs Français
            </h2>
            <p className="text-lg text-gray-700">
              Stake est l&apos;une des plateformes de jeu en ligne les plus populaires au monde, offrant plus de 7000 jeux de casino (slots, jeux de table, live casino) et des paris sportifs sur tous les événements majeurs. Reconnu pour ses paiements instantanés en cryptomonnaie, son programme VIP généreux et son interface moderne, Stake attire des millions de joueurs. La plateforme accepte plus de 20 cryptos différentes et propose des bonus hebdomadaires et mensuels à tous ses membres VIP.
              <a href="https://stake.bet/?c=rounders" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Découvrir Stake →</a>
            </p>
          </div>
        </section>

        {/* Pourquoi choisir Rounders - DÉPLACÉ ICI */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold">Pourquoi choisir Rounders ?</h2>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                EN PLUS !
              </span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="font-bold text-lg mb-2">Bonus Cash Exclusifs</h3>
                <p className="text-gray-600">
                  De 10€ à 200€ offerts selon votre niveau VIP atteint, en plus des bonus Stake !
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-lg mb-2">Support Twitter</h3>
                <p className="text-gray-600">
                  Une équipe disponible sur @RoundersPro pour répondre à toutes vos questions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="font-bold text-lg mb-2">Guide Complet</h3>
                <p className="text-gray-600">
                  Guide exclusif français : méthodes, stratégies et astuces pour maximiser vos gains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche - MAINTENANT APRÈS */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Comment marchent les bonus Rounders avec Stake ?</h2>
            
            {/* Alerte importante */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Important :</strong> Ces avantages sont offerts par Rounders et s&apos;ajoutent aux bonus VIP, rakeback, et promotions déjà disponibles sur Stake.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Inscrivez-vous</h3>
                <p className="text-gray-600">Créez votre compte Stake via notre lien exclusif</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Jouez et progressez</h3>
                <p className="text-gray-600">Atteignez les niveaux VIP en jouant normalement</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Réclamez vos bonus</h3>
                <p className="text-gray-600">Jusqu&apos;à 200€ de bonus cash selon votre niveau</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Table */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Montants des Bonus Rounders par Niveau VIP</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-orange-600 font-bold text-lg mb-2">Bronze</div>
                  <div className="text-3xl font-bold">10€</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-orange-600 font-bold text-lg mb-2">Argent</div>
                  <div className="text-3xl font-bold">20€</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-orange-600 font-bold text-lg mb-2">Or</div>
                  <div className="text-3xl font-bold">30€</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-orange-600 font-bold text-lg mb-2">Platine I-III</div>
                  <div className="text-3xl font-bold">50€</div>
                </div>
                <div className="text-center p-4 bg-orange-100 rounded-lg">
                  <div className="text-orange-700 font-bold text-lg mb-2">Platine IV-VI</div>
                  <div className="text-3xl font-bold">100€</div>
                </div>
                <div className="text-center p-4 bg-orange-100 rounded-lg md:col-span-2">
                  <div className="text-orange-700 font-bold text-lg mb-2">Diamant I-V</div>
                  <div className="text-3xl font-bold">200€</div>
                </div>
              </div>
              <div className="bg-orange-600 text-white p-4 text-center">
                <p className="font-semibold">Un bonus par niveau atteint • Paiement sous 24-48h</p>
              </div>
            </div>
          </div>
        </section>

        {/* Double CTA */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/guide-stake" className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src="/images/guide-stake.jpg" 
                    alt="Guide Complet Stake"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">📚 Consulter le Guide Stake</h3>
                    <p className="text-gray-600">
                      Guide français complet : inscription, bonus, VIP, stratégies, cryptos...
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/avantages-rounders" className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src="/images/avantages-rounders.jpg" 
                    alt="Avantages Exclusifs Rounders"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">🎁 Voir nos Avantages Exclusifs</h3>
                    <p className="text-gray-600">
                      Découvrez tous les bonus et avantages réservés aux affiliés Rounders.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-orange-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à rejoindre Rounders ?
            </h2>
            <p className="text-xl mb-8">
              Inscrivez-vous sur Stake via notre lien et profitez de tous nos avantages exclusifs
            </p>
            <a 
              href="https://stake.bet/?c=rounders"
              target="_blank"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
            >
              S&apos;inscrire sur Stake →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}