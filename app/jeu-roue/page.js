'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JeuRouePage() {
  return (
    <>
      <style jsx global>{`
        .roue-page {
          background: #111827 !important;
          min-height: 100vh;
        }
      `}</style>
      
      <div className="roue-page">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                🎰 Roue de la Fortune Stake
              </h1>
              <p className="text-xl text-gray-300">
                Gagnez jusqu'à 50€ par jour !
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-400">
                La roue arrive bientôt...
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}