// app/page.js
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { AFFILIATE_LINK, AFFILIATE_CODE } from './config/affiliate';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="pb-16 md:pb-0">
        {/* Hero Section - EN ORANGE AVEC IMAGE DE FOND COMME DEMANDÉ */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white pt-1 pb-20 md:py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FFFF00' }}>
              💰 Découvrez l'Affiliation Rounders avec la plateforme STAKE
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Bénéficiez de bonus cash exclusifs EN PLUS des bonus offerts par Stake
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Link href="/avantages-rounders" className="bg-white text-orange-600 px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                Les Avantages Rounders
              </Link>
              <Link href="/guide-stake" className="bg-orange-700 text-white px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-orange-800 transition shadow-lg">
                Découvrir Stake →
              </Link>
            </div>
            <img 
              src="/images/hero-stake.jpg" 
              alt="Stake Casino et Bonus Rounders" 
              className="rounded-lg shadow-2xl mx-auto max-w-full mb-8"
              style={{ maxHeight: '400px' }}
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🎰 Découvrez la plateforme STAKE
            </h2>
            <p className="text-lg md:text-xl">
              Paris Sportifs - Poker - Casino
            </p>
          </div>
        </section>

        {/* Features rapides */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">🎰</div>
                <div className="text-sm md:text-base font-semibold">+7000 Jeux</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">💰</div>
                <div className="text-sm md:text-base font-semibold">Bonus VIP</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">⚡</div>
                <div className="text-sm md:text-base font-semibold">Retraits instant</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">🔐</div>
                <div className="text-sm md:text-base font-semibold">100% Crypto</div>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation de Stake */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              🎰 Découvrez Stake, le meilleur Casino & Bookmaker pour les joueurs Français
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Stake est l'une des plateformes de jeu en ligne les plus populaires au monde, 
              offrant plus de 7000 jeux de casino (slots, jeux de table, live casino) et des 
              paris sportifs sur tous les événements majeurs. Reconnu pour ses paiements 
              instantanés en cryptomonnaie, son programme VIP généreux et son interface moderne, 
              Stake attire des millions de joueurs. La plateforme accepte plus de 20 cryptos 
              différentes et propose des bonus hebdomadaires et mensuels à tous ses membres VIP.
              <Link href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                Découvrir Stake →
              </Link>
            </p>
          </div>
        </section>

        {/* Pourquoi Choisir Rounders ? - DÉPLACÉ ICI AVANT COMMENT MARCHENT LES BONUS */}
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
              <Link href="/guide-stake" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <img 
                  src="/images/guide-stake.jpg" 
                  alt="Guide Stake"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Guide Complet Stake</h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez tout sur Stake : inscription, système VIP officiel, tous les jeux, 
                    rakeback, promotions et stratégies gagnantes.
                  </p>
                  <span className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                    Consulter le guide Stake
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              
              {/* Avantages Exclusifs Rounders */}
              <Link href="/avantages-rounders" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative group">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  EN PLUS !
                </div>
                <img 
                  src="/images/avantages-rounders.jpg" 
                  alt="Avantages Rounders"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Avantages Exclusifs Rounders</h3>
                  <p className="text-gray-600 bt">
                    Bonus cash de 10€ à 200€ offerts par Rounders selon votre niveau VIP. 
                    Ces bonus s'AJOUTENT à tous les avantages Stake !
                  </p>
                  <span className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center">
                    Voir nos avantages exclusifs
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Comment marchent les bonus Rounders - MAINTENANT APRÈS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Comment marchent les bonus Rounders avec Stake ?
            </h2>
            
            {/* Alerte importante */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 max-w-4xl mx-auto">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-blue-800">
                    <strong>Important :</strong> Ces avantages sont offerts par Rounders et s'ajoutent 
                    aux bonus VIP, rakeback, et promotions déjà disponibles sur Stake.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  Cres  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inscrivez-vous</h3>
                <p className="text-gray-600">
                  Créez votre compte Stake en utilisant notre lien avec le code <strong>{AFFILIATE_CODE}</strong>
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
                Ces bonus sont offerts by Rounders en plus de tous les avantages Stake !
              </p>
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
            <Link 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
            >
              Créer mon compte Stake
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Code promo : <span className="font-semibold">{AFFILIATE_CODE}</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}