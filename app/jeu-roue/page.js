'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JeuRouePage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              🎰 Roue de la Fortune Stake
            </h1>
            <p className="text-xl text-gray-300">
              Gagnez jusqu'à 50€ par jour !
            </p>
          </div>

          {/* Zone de contenu */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">
              La roue arrive bientôt...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}