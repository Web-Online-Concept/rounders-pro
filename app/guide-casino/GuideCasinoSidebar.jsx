'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GuideCasinoSidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-2 rounded ${
      pathname === path
        ? 'bg-red-100 text-red-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  const mobileLinkClass = (path) =>
    `block px-6 py-3 ${
      pathname === path
        ? 'bg-red-100 text-red-700 font-semibold border-l-4 border-red-500'
        : 'text-gray-700 hover:bg-gray-50'
    }`;

  return (
    <>
      {/* Menu Mobile - Uniquement visible sur mobile */}
      <div className="md:hidden">
        <div className="sticky top-0 z-40">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full py-3 px-4 bg-red-600 text-white font-bold flex items-center justify-center hover:bg-red-700 transition-colors border-b"
          >
            <span className="mr-2">{mobileMenuOpen ? '✕' : '☰'}</span>
            Menu Guide Casino
          </button>
        </div>
      </div>

      {/* Overlay et Menu Slide-in */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav 
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-red-600 text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu Guide Casino</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl hover:text-red-200"
              >
                ✕
              </button>
            </div>
            <div className="py-2">
              <Link 
                href="/guide-casino" 
                className={mobileLinkClass('/guide-casino')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎰 Accueil du Guide
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <Link 
                href="/guide-casino/introduction" 
                className={mobileLinkClass('/guide-casino/introduction')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎰 Introduction
              </Link>
              <Link 
                href="/guide-casino/jeux-table" 
                className={mobileLinkClass('/guide-casino/jeux-table')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎲 Jeux de Table
              </Link>
              <Link 
                href="/guide-casino/machines-sous" 
                className={mobileLinkClass('/guide-casino/machines-sous')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎯 Machines à Sous
              </Link>
              <Link 
                href="/guide-casino/blackjack-pro" 
                className={mobileLinkClass('/guide-casino/blackjack-pro')}
                onClick={() => setMobileMenuOpen(false)}
              >
                ♠️ Blackjack Pro
              </Link>
              <Link 
                href="/guide-casino/roulette" 
                className={mobileLinkClass('/guide-casino/roulette')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎡 Roulette
              </Link>
              <Link 
                href="/guide-casino/baccarat" 
                className={mobileLinkClass('/guide-casino/baccarat')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💎 Baccarat
              </Link>
              <Link 
                href="/guide-casino/strategies-slots" 
                className={mobileLinkClass('/guide-casino/strategies-slots')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎰 Stratégies Slots
              </Link>
              <Link 
                href="/guide-casino/casino-live" 
                className={mobileLinkClass('/guide-casino/casino-live')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🏆 Casino Live
              </Link>
              <Link 
                href="/guide-casino/bonus-promotions" 
                className={mobileLinkClass('/guide-casino/bonus-promotions')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💰 Bonus & Promotions
              </Link>
              <Link 
                href="/guide-casino/gestion-bankroll" 
                className={mobileLinkClass('/guide-casino/gestion-bankroll')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📊 Gestion de Bankroll
              </Link>
              <Link 
                href="/guide-casino/mathematiques" 
                className={mobileLinkClass('/guide-casino/mathematiques')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🧮 Mathématiques
              </Link>
              <Link 
                href="/guide-casino/erreurs-eviter" 
                className={mobileLinkClass('/guide-casino/erreurs-eviter')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🚫 Erreurs à Éviter
              </Link>
              <Link 
                href="/guide-casino/psychologie" 
                className={mobileLinkClass('/guide-casino/psychologie')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🧠 Psychologie
              </Link>
              <Link 
                href="/guide-casino/responsable" 
                className={mobileLinkClass('/guide-casino/responsable')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🛡️ Jouer Responsable
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <div className="px-4 py-3">
                <Link
                  href="/nos-jeux"
                  className="block w-full bg-red-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jouer au Casino →
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
      
      {/* Sidebar desktop */}
      <aside className="hidden md:block md:w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Guide Casino</h2>
          <nav className="space-y-2">
            <Link href="/guide-casino" className={linkClass('/guide-casino')}>
              🎰 Accueil du Guide
            </Link>
            <div className="border-t my-4"></div>
            <Link href="/guide-casino/introduction" className={linkClass('/guide-casino/introduction')}>
              🎰 Introduction
            </Link>
            <Link href="/guide-casino/jeux-table" className={linkClass('/guide-casino/jeux-table')}>
              🎲 Jeux de Table
            </Link>
            <Link href="/guide-casino/machines-sous" className={linkClass('/guide-casino/machines-sous')}>
              🎯 Machines à Sous
            </Link>
            <Link href="/guide-casino/blackjack-pro" className={linkClass('/guide-casino/blackjack-pro')}>
              ♠️ Blackjack Pro
            </Link>
            <Link href="/guide-casino/roulette" className={linkClass('/guide-casino/roulette')}>
              🎡 Roulette
            </Link>
            <Link href="/guide-casino/baccarat" className={linkClass('/guide-casino/baccarat')}>
              💎 Baccarat
            </Link>
            <Link href="/guide-casino/strategies-slots" className={linkClass('/guide-casino/strategies-slots')}>
              🎰 Stratégies Slots
            </Link>
            <Link href="/guide-casino/casino-live" className={linkClass('/guide-casino/casino-live')}>
              🏆 Casino Live
            </Link>
            <Link href="/guide-casino/bonus-promotions" className={linkClass('/guide-casino/bonus-promotions')}>
              💰 Bonus & Promotions
            </Link>
            <Link href="/guide-casino/gestion-bankroll" className={linkClass('/guide-casino/gestion-bankroll')}>
              📊 Gestion de Bankroll
            </Link>
            <Link href="/guide-casino/mathematiques" className={linkClass('/guide-casino/mathematiques')}>
              🧮 Mathématiques du Casino
            </Link>
            <Link href="/guide-casino/erreurs-eviter" className={linkClass('/guide-casino/erreurs-eviter')}>
              🚫 Erreurs à Éviter
            </Link>
            <Link href="/guide-casino/psychologie" className={linkClass('/guide-casino/psychologie')}>
              🧠 Psychologie du Joueur
            </Link>
            <Link href="/guide-casino/responsable" className={linkClass('/guide-casino/responsable')}>
              🛡️ Jouer Responsable
            </Link>
          </nav>
          <div className="mt-8">
            <Link
              href="/guide-stake"
              className="block w-full bg-red-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Jouer au Casino →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}