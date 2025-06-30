// app/guide-stake/layout.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function GuideLayout({ children }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">😎</span>
              <span className="text-2xl font-bold text-gray-900">
                Rounders<span className="text-blue-600">.pro</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="hover:text-gray-600 transition">
                Accueil
              </Link>
              <a
                href="https://stake.bet/?c=rounders"
                target="_blank"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Jouer sur Stake →
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="font-bold text-gray-900 mb-4">Guide Stake</h2>
              
              {/* Navigation Links */}
              <div className="space-y-1">
                <Link
                  href="/guide-stake"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  📚 Sommaire
                </Link>
                <Link
                  href="/guide-stake/introduction"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/introduction' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  🎰 Introduction
                </Link>
                <Link
                  href="/guide-stake/france"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/france' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  🇫🇷 Guide Français
                </Link>
                <Link
                  href="/guide-stake/inscription"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/inscription' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  📝 Inscription
                </Link>
                <Link
                  href="/guide-stake/bonus"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/bonus' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  💰 Bonus
                </Link>
                <Link
                  href="/guide-stake/vip"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/vip' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  👑 Programme VIP
                </Link>
                <Link
                  href="/guide-stake/jeux"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/jeux' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  🎮 Jeux
                </Link>
                <Link
                  href="/guide-stake/crypto"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/crypto' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  💎 Cryptomonnaies
                </Link>
                <Link
                  href="/guide-stake/strategies"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/strategies' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  🧠 Stratégies
                </Link>
                <Link
                  href="/guide-stake/astuces"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/astuces' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  💡 Astuces Pro
                </Link>
                <Link
                  href="/guide-stake/faq"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-stake/faq' 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  ❓ FAQ
                </Link>
              </div>

              {/* Espace Affiliés */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/affilies"
                  className="block px-4 py-3 rounded-lg bg-green-600 text-white font-bold text-center hover:bg-green-700 transition"
                >
                  💰 Espace Affiliés
                </Link>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://stake.bet/?c=rounders"
                  target="_blank"
                  className="block bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Jouer sur Stake →
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-sm p-8 pb-24 md:pb-8">
            {/* Mobile Navigation */}
            <div className="md:hidden mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Navigation du guide
              </label>
              <select
                value={pathname}
                onChange={(e) => window.location.href = e.target.value}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="/guide-stake">📚 Sommaire</option>
                <option value="/guide-stake/introduction">🎰 Introduction</option>
                <option value="/guide-stake/france">🇫🇷 Guide Français</option>
                <option value="/guide-stake/inscription">📝 Inscription</option>
                <option value="/guide-stake/bonus">💰 Bonus</option>
                <option value="/guide-stake/vip">👑 Programme VIP</option>
                <option value="/guide-stake/jeux">🎮 Jeux</option>
                <option value="/guide-stake/crypto">💎 Cryptomonnaies</option>
                <option value="/guide-stake/strategies">🧠 Stratégies</option>
                <option value="/guide-stake/astuces">💡 Astuces Pro</option>
                <option value="/guide-stake/faq">❓ FAQ</option>
              </select>
              
              <Link
                href="/affilies"
                className="block mt-4 px-4 py-3 rounded-lg bg-green-600 text-white font-bold text-center hover:bg-green-700 transition"
              >
                💰 Espace Affiliés
              </Link>
            </div>

            {children}
          </main>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-3 items-center">
          <Link href="/" className="flex flex-col items-center py-3 hover:bg-gray-50">
            <span className="text-2xl mb-1">🏠</span>
            <span className="text-xs">Accueil</span>
          </Link>
          <a 
            href="https://stake.bet/?c=rounders" 
            target="_blank"
            className="flex flex-col items-center py-3 bg-blue-600 text-white"
          >
            <span className="text-2xl mb-1">🎰</span>
            <span className="text-xs font-bold">Stake</span>
          </a>
          <Link href="/affilies" className="flex flex-col items-center py-3 hover:bg-gray-50">
            <span className="text-2xl mb-1">💰</span>
            <span className="text-xs">Bonus</span>
          </Link>
        </div>
      </div>
    </div>
  );
}