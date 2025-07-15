// app/page.js
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';
import { AFFILIATE_LINK, AFFILIATE_CODE } from './config/affiliate';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="pb-16 md:pb-0">
        {/* Section Paris Sportifs - NOUVELLE SECTION EN PREMIER */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-12 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                ⚽ Nos Paris Sportifs Premium
              </h1>
              <p className="text-xl md:text-2xl mb-2">
                Des pronostics gagnants basés sur des analyses expertes
              </p>
              <p className="text-lg opacity-90">
                Montantes, Martingales et pronos exclusifs pour maximiser vos gains
              </p>
            </div>

            {/* Cartes des services Paris Sportifs */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link href="/paris-sportifs/montante" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold mb-2">Nos Montantes</h3>
                  <p className="text-white/80 text-sm">
                    Stratégies progressives pour des gains constants et maîtrisés
                  </p>
                </div>
              </Link>

              <Link href="/paris-sportifs/martingale" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">Nos Martingales</h3>
                  <p className="text-white/80 text-sm">
                    Méthode éprouvée pour récupérer et générer des profits
                  </p>
                </div>
              </Link>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative">
                <div className="absolute top-2 right-2 bg-yellow-400 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                  BIENTÔT
                </div>
                <div className="text-center opacity-75">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-2">Pronos Premium</h3>
                  <p className="text-white/80 text-sm">
                    Sélection quotidienne de nos meilleurs pronostics
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Paris Sportifs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">87%</div>
                  <div className="text-sm opacity-80">Taux de réussite</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-green-300">+45%</div>
                  <div className="text-sm opacity-80">ROI moyen</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Membres actifs</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Analyses en continu</div>
                </div>
              </div>
            </div>

            {/* CTA Paris Sportifs */}
            <div className="text-center mt-12">
              <Link 
                href="/paris-sportifs" 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center"
              >
                Découvrir tous nos Paris Sportifs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Section Affiliation - CONSERVÉ ET DÉPLACÉ ICI */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white pt-8 pb-20 md:py-10">
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
      </main>

      <Footer />
      <BottomBar />
    </>
  );
}