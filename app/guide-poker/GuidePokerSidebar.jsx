'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GuidePokerSidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-2 rounded ${
      pathname === path
        ? 'bg-green-100 text-green-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  const mobileLinkClass = (path) =>
    `block px-6 py-3 ${
      pathname === path
        ? 'bg-green-100 text-green-700 font-semibold border-l-4 border-green-500'
        : 'text-gray-700 hover:bg-gray-50'
    }`;

  return (
    <>
      {/* Menu Mobile - Uniquement visible sur mobile */}
      <div className="md:hidden">
        <div className="sticky top-0 z-40">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full py-3 px-4 bg-green-600 text-white font-bold flex items-center justify-center hover:bg-green-700 transition-colors border-b"
          >
            <span className="mr-2">{mobileMenuOpen ? '✕' : '☰'}</span>
            Menu Guide Poker
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
            <div className="bg-green-600 text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu Guide Poker</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl hover:text-green-200"
              >
                ✕
              </button>
            </div>
            <div className="py-2">
              <Link 
                href="/guide-poker" 
                className={mobileLinkClass('/guide-poker')}
                onClick={() => setMobileMenuOpen(false)}
              >
                ♠️ Accueil du Guide
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <Link 
                href="/guide-poker/introduction" 
                className={mobileLinkClass('/guide-poker/introduction')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📖 Introduction au Poker
              </Link>
              <Link 
                href="/guide-poker/regles-base" 
                className={mobileLinkClass('/guide-poker/regles-base')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📋 Règles et Variantes
              </Link>
              <Link 
                href="/guide-poker/mains-poker" 
                className={mobileLinkClass('/guide-poker/mains-poker')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🃏 Classement des Mains
              </Link>
              <Link 
                href="/guide-poker/positions-table" 
                className={mobileLinkClass('/guide-poker/positions-table')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💺 Positions à la Table
              </Link>
              <Link 
                href="/guide-poker/preflop-strategy" 
                className={mobileLinkClass('/guide-poker/preflop-strategy')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎯 Stratégie Préflop
              </Link>
              <Link 
                href="/guide-poker/postflop-play" 
                className={mobileLinkClass('/guide-poker/postflop-play')}
                onClick={() => setMobileMenuOpen(false)}
              >
                ♦️ Jeu Postflop
              </Link>
              <Link 
                href="/guide-poker/cotes-probabilites" 
                className={mobileLinkClass('/guide-poker/cotes-probabilites')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📊 Cotes et Probabilités
              </Link>
              <Link 
                href="/guide-poker/gestion-bankroll" 
                className={mobileLinkClass('/guide-poker/gestion-bankroll')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💰 Gestion de Bankroll
              </Link>
              <Link 
                href="/guide-poker/tells-psychologie" 
                className={mobileLinkClass('/guide-poker/tells-psychologie')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🧠 Tells et Psychologie
              </Link>
              <Link 
                href="/guide-poker/bluff-technique" 
                className={mobileLinkClass('/guide-poker/bluff-technique')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎭 L'Art du Bluff
              </Link>
              <Link 
                href="/guide-poker/tournois-strategie" 
                className={mobileLinkClass('/guide-poker/tournois-strategie')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🏆 Stratégie Tournois
              </Link>
              <Link 
                href="/guide-poker/cash-game" 
                className={mobileLinkClass('/guide-poker/cash-game')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💵 Cash Game
              </Link>
              <Link 
                href="/guide-poker/poker-en-ligne" 
                className={mobileLinkClass('/guide-poker/poker-en-ligne')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💻 Poker en Ligne
              </Link>
              <Link 
                href="/guide-poker/erreurs-eviter" 
                className={mobileLinkClass('/guide-poker/erreurs-eviter')}
                onClick={() => setMobileMenuOpen(false)}
              >
                ❌ Erreurs à Éviter
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <div className="px-4 py-3">
                <Link
                  href="/poker"
                  className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jouer au Poker →
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
      
      {/* Sidebar desktop */}
      <aside className="hidden md:block md:w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Guide Poker</h2>
          <nav className="space-y-2">
            <Link href="/guide-poker" className={linkClass('/guide-poker')}>
              ♠️ Accueil du Guide
            </Link>
            <div className="border-t my-4"></div>
            <Link href="/guide-poker/introduction" className={linkClass('/guide-poker/introduction')}>
              📖 Introduction au Poker
            </Link>
            <Link href="/guide-poker/regles-base" className={linkClass('/guide-poker/regles-base')}>
              📋 Règles et Variantes
            </Link>
            <Link href="/guide-poker/mains-poker" className={linkClass('/guide-poker/mains-poker')}>
              🃏 Classement des Mains
            </Link>
            <Link href="/guide-poker/positions-table" className={linkClass('/guide-poker/positions-table')}>
              💺 Positions à la Table
            </Link>
            <Link href="/guide-poker/preflop-strategy" className={linkClass('/guide-poker/preflop-strategy')}>
              🎯 Stratégie Préflop
            </Link>
            <Link href="/guide-poker/postflop-play" className={linkClass('/guide-poker/postflop-play')}>
              ♦️ Jeu Postflop
            </Link>
            <Link href="/guide-poker/cotes-probabilites" className={linkClass('/guide-poker/cotes-probabilites')}>
              📊 Cotes et Probabilités
            </Link>
            <Link href="/guide-poker/gestion-bankroll" className={linkClass('/guide-poker/gestion-bankroll')}>
              💰 Gestion de Bankroll
            </Link>
            <Link href="/guide-poker/tells-psychologie" className={linkClass('/guide-poker/tells-psychologie')}>
              🧠 Tells et Psychologie
            </Link>
            <Link href="/guide-poker/bluff-technique" className={linkClass('/guide-poker/bluff-technique')}>
              🎭 L'Art du Bluff
            </Link>
            <Link href="/guide-poker/tournois-strategie" className={linkClass('/guide-poker/tournois-strategie')}>
              🏆 Stratégie Tournois
            </Link>
            <Link href="/guide-poker/cash-game" className={linkClass('/guide-poker/cash-game')}>
              💵 Cash Game
            </Link>
            <Link href="/guide-poker/poker-en-ligne" className={linkClass('/guide-poker/poker-en-ligne')}>
              💻 Poker en Ligne
            </Link>
            <Link href="/guide-poker/erreurs-eviter" className={linkClass('/guide-poker/erreurs-eviter')}>
              ❌ Erreurs à Éviter
            </Link>
          </nav>
          <div className="mt-8">
            <Link
              href="/poker"
              className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Jouer au Poker →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}