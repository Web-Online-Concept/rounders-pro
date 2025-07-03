'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JeuRouePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-white text-4xl">
          TEST - Le fond devrait être GRIS FONCÉ
        </h1>
      </main>

      <Footer />
    </div>
  );
}