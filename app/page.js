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
        <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white pt-2 pb-12 md:py-20 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                GAGNEZ PLUS SUR STAKE<br className="hidden md:block" />
                AVEC ROUNDERS
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Bonus cash exclusifs + 5% de rakeback minimum
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://stake.bet/?c=rounders" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg transform hover:scale-105"
                >
                  Inscription avec bonus →
                </a>
                <Link 
                  href="/guide-stake" 
                  className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition shadow-lg"
                >
                  Guide complet Stake
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 hidden lg:block">
            <div className="text-2xl font-bold">200€</div>
            <div className="text-sm">Bonus max</div>
          </div>
          <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 hidden lg:block">
            <div className="text-2xl font-bold">24h</div>
            <div className="text-sm">Paiement rapide</div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Qu&apos;est-ce que Stake ?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Stake est l&apos;une des plateformes de jeu en ligne les plus populaires au monde, offrant plus de 7000 jeux de casino (slots, jeux de table, live casino) et des paris sportifs sur tous les événements majeurs. Reconnu pour ses paiements instantanés en cryptomonnaie, son programme VIP généreux et son interface moderne, Stake attire des millions de joueurs. La plateforme accepte plus de 20 cryptos différentes et propose des bonus hebdomadaires et mensuels à tous ses membres VIP.
              </p>
              <p className="text-center">
                <a 
                  href="https://stake.bet/?c=rounders" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Découvrir Stake →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Rounders Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Rounders Pro ?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg">
                <img
                  src="/images/bonus-cash.svg"
                  alt="Bonus cash exclusifs"
                  className="w-20 h-20 mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Bonus Cash Exclusifs</h3>
                <p className="text-gray-700 mb-4">
                  Recevez entre 10€ et 200€ en crypto pour chaque niveau VIP atteint sur Stake. 
                  Ces bonus sont EN PLUS des récompenses officielles Stake !
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Bronze : 10€ | Argent : 20€ | Or : 30€</li>
                  <li>✓ Platine : 50€ à 100€ selon le niveau</li>
                  <li>✓ Diamant : 200€ par niveau</li>
                  <li>✓ Paiement dans la crypto de votre choix</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg">
                <img
                  src="/images/rakeback-boost.svg"
                  alt="Rakeback boosté"
                  className="w-20 h-20 mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">5% Rakeback Minimum</h3>
                <p className="text-gray-700 mb-4">
                  Avec notre code affilié &quot;rounders&quot;, démarrez directement avec 5% de rakeback au lieu du taux standard. 
                  C&apos;est de l&apos;argent récupéré sur chaque mise !
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ 5% dès l&apos;inscription (au lieu de moins)</li>
                  <li>✓ Rakeback instantané après chaque pari</li>
                  <li>✓ Monte jusqu&apos;à 20%+ avec le VIP</li>
                  <li>✓ Cumulable avec tous les autres bonus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comment marchent les bonus Rounders avec Stake ?</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inscrivez-vous sur Stake</h3>
                    <p className="text-gray-700">
                      Créez votre compte via notre lien spécial et utilisez le code <strong>&quot;rounders&quot;</strong> pour activer 
                      immédiatement le rakeback boosté à 5% minimum.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Jouez et montez en VIP</h3>
                    <p className="text-gray-700">
                      Profitez des milliers de jeux disponibles. Chaque mise vous rapporte des points VIP et du rakeback instantané. 
                      Les niveaux VIP se débloquent automatiquement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Réclamez vos bonus cash</h3>
                    <p className="text-gray-700">
                      À chaque nouveau niveau VIP atteint (Bronze, Argent, Or...), prenez une capture d&apos;écran et réclamez 
                      votre bonus cash exclusif Rounders via notre formulaire.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Recevez votre paiement</h3>
                    <p className="text-gray-700">
                      Nous vous envoyons votre bonus dans la crypto de votre choix sous 24-48h maximum. 
                      Simple, rapide et garanti !
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link 
                  href="/affilies" 
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition"
                >
                  Voir comment réclamer les bonus →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stake Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Les avantages de jouer sur Stake</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">+7000 jeux</h3>
                <p className="text-gray-600">
                  Slots, live casino, jeux Stake Originals, paris sportifs... La plus grande sélection du marché.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Paiements instantanés</h3>
                <p className="text-gray-600">
                  Dépôts et retraits en crypto traités immédiatement. Pas d&apos;attente, pas de vérification complexe.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Programme VIP</h3>
                <p className="text-gray-600">
                  15 niveaux VIP avec rakeback jusqu&apos;à 20%+, bonus hebdo/mensuel, et reload quotidien dès Platine.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Promotions régulières</h3>
                <p className="text-gray-600">
                  Races quotidiennes 100k$, tirages hebdomadaires, défis avec cagnottes énormes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sécurité maximale</h3>
                <p className="text-gray-600">
                  Licence Curaçao, protocoles de sécurité avancés, équité prouvable des jeux.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Communauté active</h3>
                <p className="text-gray-600">
                  Chat en direct, forum, challenges communautaires et hosts VIP dédiés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos membres</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;J&apos;ai reçu mes 50€ en BTC moins de 24h après avoir atteint Platine. Service au top !&quot;
                </p>
                <p className="font-semibold">- Marc, Platine II</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Le rakeback à 5% dès le début fait vraiment la différence. Je recommande à 100%.&quot;
                </p>
                <p className="font-semibold">- Sophie, Or</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;200€ par niveau Diamant, c&apos;est énorme ! Merci Rounders pour ces bonus exclusifs.&quot;
                </p>
                <p className="font-semibold">- Alex, Diamant I</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à maximiser vos gains sur Stake ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoignez des milliers de joueurs qui profitent déjà de nos bonus exclusifs et du rakeback boosté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
              >
                Commencer avec 5% de rakeback →
              </a>
              <Link 
                href="/guide-stake" 
                className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition inline-block"
              >
                Lire le guide complet
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}