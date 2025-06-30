// app/page.js
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Rounders<span className="text-blue-600">.pro</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Accueil
              </Link>
              <Link href="/guide-stake" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Guide Stake
              </Link>
              <Link href="/jeu" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Jeu Quotidien
              </Link>
              <Link href="/affilies" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Espace Affiliés
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/guide-stake" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guide Stake
              </Link>
              <Link 
                href="/jeu" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jeu Quotidien
              </Link>
              <Link 
                href="/affilies" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Espace Affiliés
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Maximisez vos gains avec <span className="text-blue-600">Stake</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Rejoignez la communauté Rounders Pro et profitez de bonus exclusifs, 
              d&apos;un jeu quotidien gratuit et de récompenses VIP supplémentaires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://stake.com/?c=VOTRE_CODE"
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Rejoindre Stake →
              </a>
              <Link
                href="/guide-stake"
                className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transition"
              >
                Découvrir le Guide
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Affiliés actifs</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-green-500">10,000€</div>
                <div className="text-gray-600">Bonus distribués</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-amber-500">VIP+</div>
                <div className="text-gray-600">Récompenses exclusives</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Main Features */}
      <section className="py-12 md:py-16 px-4 pb-24 md:pb-16">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Tout ce dont vous avez besoin pour réussir
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Guide Complet */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Guide Stake Complet</h4>
              <p className="text-gray-600 mb-4">
                Découvrez tous les secrets de Stake : inscription, jeux, stratégies, 
                rakeback et astuces pour maximiser vos gains.
              </p>
              <Link href="/guide-stake" className="text-blue-600 font-medium hover:underline inline-flex items-center">
                Explorer le guide →
              </Link>
            </div>

            {/* Jeu Quotidien */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Jeu Quotidien Gratuit</h4>
              <p className="text-gray-600 mb-4">
                Tentez votre chance chaque jour avec notre roue de la fortune 
                et gagnez des récompenses en crypto.
              </p>
              <Link href="/jeu" className="text-green-600 font-medium hover:underline inline-flex items-center">
                Jouer maintenant →
              </Link>
            </div>

            {/* Espace Affiliés */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bonus VIP Exclusifs</h4>
              <p className="text-gray-600 mb-4">
                Recevez des bonus supplémentaires à chaque palier VIP franchi. 
                Récompenses exclusives pour nos affiliés.
              </p>
              <Link href="/affilies" className="text-amber-600 font-medium hover:underline inline-flex items-center">
                Accéder à l&apos;espace →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à maximiser vos gains ?
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Rejoignez Stake via notre lien et profitez de tous nos avantages exclusifs
          </p>
          <a
            href="https://stake.com/?c=VOTRE_CODE"
            target="_blank"
            className="inline-block bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Inscription Gratuite sur Stake →
          </a>
        </div>
      </section>

      {/* Footer - Hidden on mobile because of bottom bar */}
      <footer className="bg-gray-900 text-gray-300 py-8 hidden md:block">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 Rounders.pro - Tous droits réservés</p>
          <p className="text-sm">
            Jouez de manière responsable. 18+ uniquement.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="grid grid-cols-3 h-16">
          <Link href="/jeu" className="flex flex-col items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-xs mt-1">Jouer</span>
          </Link>
          
          <a 
            href="https://stake.com/?c=VOTRE_CODE" 
            target="_blank"
            className="flex flex-col items-center justify-center bg-blue-600 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-xs mt-1 font-medium">Stake</span>
          </a>
          
          <Link href="/affilies" className="flex flex-col items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Bonus</span>
          </Link>
        </div>
      </div>
    </div>
  );
}