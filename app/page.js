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
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Stake avec Avantages Exclusifs
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Rejoignez Stake via Rounders et recevez jusqu&apos;à 200€ de bonus cash
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://stake.com/?c=rounders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                >
                  S&apos;inscrire sur Stake
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link 
                  href="/guide-stake"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Découvrir le Guide
                </Link>
              </div>
            </div>
          </div>
          
          {/* Image placeholder */}
          {/* <img 
            src="/images/hero-stake.jpg" 
            alt="Stake Casino" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          /> */}
        </section>

        {/* Features rapides */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎰</div>
                <div className="font-semibold">+7000 Jeux</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold">Bonus VIP généreux</div>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">Retraits instantanés</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🔐</div>
                <div className="font-semibold">100% Crypto</div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Comment ça marche ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inscrivez-vous</h3>
                <p className="text-gray-600">
                  Créez votre compte Stake en utilisant notre lien avec le code <strong>rounders</strong>
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Jouez et progressez</h3>
                <p className="text-gray-600">
                  Profitez des milliers de jeux et montez en niveau VIP
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Réclamez vos bonus</h3>
                <p className="text-gray-600">
                  Obtenez vos bonus cash exclusifs Rounders selon votre niveau
                </p>
              </div>
            </div>

            {/* Bonus Cash Exclusifs */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">💰 Bonus Cash Exclusifs Rounders</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-lg font-semibold text-yellow-600">Bronze</div>
                  <div className="text-2xl font-bold">10€</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-lg font-semibold text-gray-600">Argent</div>
                  <div className="text-2xl font-bold">20€</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-lg font-semibold text-yellow-500">Or</div>
                  <div className="text-2xl font-bold">30€</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-lg font-semibold text-cyan-600">Platine+</div>
                  <div className="text-2xl font-bold">50€-200€</div>
                </div>
              </div>
              <p className="text-center text-gray-600">
                Ces bonus sont offerts par Rounders en plus de tous les avantages Stake !
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi Choisir Rounders ? */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Pourquoi Choisir Rounders ?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Profitez du meilleur de Stake PLUS nos avantages exclusifs
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guide Complet Stake */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* <img 
                  src="/images/guide-stake.jpg" 
                  alt="Guide Stake"
                  className="w-full h-48 object-cover"
                /> */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Guide Complet Stake</h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez tout sur Stake : inscription, système VIP officiel, tous les jeux, 
                    rakeback, promotions et stratégies gagnantes.
                  </p>
                  <Link href="/guide-stake" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                    Consulter le guide Stake
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Avantages Exclusifs Rounders */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  EN PLUS !
                </div>
                {/* <img 
                  src="/images/avantages-rounders.jpg" 
                  alt="Avantages Rounders"
                  className="w-full h-48 object-cover"
                /> */}
                <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <span className="text-6xl">🎁</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Avantages Exclusifs Rounders</h3>
                  <p className="text-gray-600 mb-4">
                    Bonus cash de 10€ à 200€ offerts par Rounders selon votre niveau VIP. 
                    Ces bonus s&apos;AJOUTENT à tous les avantages Stake !
                  </p>
                  <Link href="/avantages-rounders" className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center">
                    Voir nos avantages exclusifs
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">+7000</div>
                <div className="text-xl opacity-90">Jeux disponibles</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-xl opacity-90">Support en ligne</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">Instant</div>
                <div className="text-xl opacity-90">Retraits crypto</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Prêt à commencer votre aventure ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez des milliers de joueurs et profitez des meilleurs bonus
            </p>
            <a 
              href="https://stake.com/?c=rounders"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
            >
              Créer mon compte Stake
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Code promo : <span className="font-semibold">rounders</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}