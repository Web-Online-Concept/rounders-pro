'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RoueFortunePage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎰 Roue de la Fortune Stake
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gagnez jusqu'à 50€ par jour en tournant la roue !
          </p>
        </div>

        {/* Zone de test */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-700">
            La roue arrive bientôt...
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}