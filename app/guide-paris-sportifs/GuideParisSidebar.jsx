'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GuideParisSidebar() {
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
            Menu Guide Paris Sportifs
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
              <h2 className="text-lg font-bold">Menu Guide Paris Sportifs</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl hover:text-green-200"
              >
                ✕
              </button>
            </div>
            <div className="py-2">
              <Link 
                href="/guide-paris-sportifs" 
                className={mobileLinkClass('/guide-paris-sportifs')}
                onClick={() => setMobileMenuOpen(false)}
              >
                ⚽ Accueil du Guide
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <Link 
                href="/guide-paris-sportifs/introduction" 
                className={mobileLinkClass('/guide-paris-sportifs/introduction')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📖 Introduction
              </Link>
              <Link 
                href="/guide-paris-sportifs/comprendre-cotes" 
                className={mobileLinkClass('/guide-paris-sportifs/comprendre-cotes')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📊 Comprendre les Cotes
              </Link>
              <Link 
                href="/guide-paris-sportifs/types-paris" 
                className={mobileLinkClass('/guide-paris-sportifs/types-paris')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎯 Types de Paris
              </Link>
              <Link 
                href="/guide-paris-sportifs/gestion-bankroll" 
                className={mobileLinkClass('/guide-paris-sportifs/gestion-bankroll')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💰 Gestion de Bankroll
              </Link>
              <Link 
                href="/guide-paris-sportifs/analyse-matchs" 
                className={mobileLinkClass('/guide-paris-sportifs/analyse-matchs')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🔍 Analyse des Matchs
              </Link>
              <Link 
                href="/guide-paris-sportifs/strategies-base" 
                className={mobileLinkClass('/guide-paris-sportifs/strategies-base')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📈 Stratégies de Base
              </Link>
              <Link 
                href="/guide-paris-sportifs/value-betting" 
                className={mobileLinkClass('/guide-paris-sportifs/value-betting')}
                onClick={() => setMobileMenuOpen(false)}
              >
                💎 Value Betting
              </Link>
              <Link 
                href="/guide-paris-sportifs/surebets" 
                className={mobileLinkClass('/guide-paris-sportifs/surebets')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎯 Surebets & Arbitrage
              </Link>
              <Link 
                href="/guide-paris-sportifs/systemes-montantes" 
                className={mobileLinkClass('/guide-paris-sportifs/systemes-montantes')}
                onClick={() => setMobileMenuOpen(false)}
              >
                📊 Systèmes & Montantes
              </Link>
              <Link 
                href="/guide-paris-sportifs/optimisation" 
                className={mobileLinkClass('/guide-paris-sportifs/optimisation')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🚀 Optimisation
              </Link>
              <Link 
                href="/guide-paris-sportifs/erreurs-eviter" 
                className={mobileLinkClass('/guide-paris-sportifs/erreurs-eviter')}
                onClick={() => setMobileMenuOpen(false)}
              >
                ❌ Erreurs à Éviter
              </Link>
              <Link 
                href="/guide-paris-sportifs/outils-pro" 
                className={mobileLinkClass('/guide-paris-sportifs/outils-pro')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🛠️ Outils Pro
              </Link>
              <Link 
                href="/guide-paris-sportifs/psychologie" 
                className={mobileLinkClass('/guide-paris-sportifs/psychologie')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🧠 Psychologie du Parieur
              </Link>
              <Link 
                href="/guide-paris-sportifs/responsable" 
                className={mobileLinkClass('/guide-paris-sportifs/responsable')}
                onClick={() => setMobileMenuOpen(false)}
              >
                🛡️ Parier Responsable
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <div className="px-4 py-3">
                <Link
                  href="/paris-sportifs"
                  className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Voir nos Pronostics →
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
      
      {/* Sidebar desktop */}
      <aside className="hidden md:block md:w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Guide Paris Sportifs</h2>
          <nav className="space-y-2">
            <Link href="/guide-paris-sportifs" className={linkClass('/guide-paris-sportifs')}>
              ⚽ Accueil du Guide
            </Link>
            <div className="border-t my-4"></div>
            <Link href="/guide-paris-sportifs/introduction" className={linkClass('/guide-paris-sportifs/introduction')}>
              📖 Introduction
            </Link>
            <Link href="/guide-paris-sportifs/comprendre-cotes" className={linkClass('/guide-paris-sportifs/comprendre-cotes')}>
              📊 Comprendre les Cotes
            </Link>
            <Link href="/guide-paris-sportifs/types-paris" className={linkClass('/guide-paris-sportifs/types-paris')}>
              🎯 Types de Paris
            </Link>
            <Link href="/guide-paris-sportifs/gestion-bankroll" className={linkClass('/guide-paris-sportifs/gestion-bankroll')}>
              💰 Gestion de Bankroll
            </Link>
            <Link href="/guide-paris-sportifs/analyse-matchs" className={linkClass('/guide-paris-sportifs/analyse-matchs')}>
              🔍 Analyse des Matchs
            </Link>
            <Link href="/guide-paris-sportifs/strategies-base" className={linkClass('/guide-paris-sportifs/strategies-base')}>
              📈 Stratégies de Base
            </Link>
            <Link href="/guide-paris-sportifs/value-betting" className={linkClass('/guide-paris-sportifs/value-betting')}>
              💎 Value Betting
            </Link>
            <Link href="/guide-paris-sportifs/surebets" className={linkClass('/guide-paris-sportifs/surebets')}>
              🎯 Surebets & Arbitrage
            </Link>
            <Link href="/guide-paris-sportifs/systemes-montantes" className={linkClass('/guide-paris-sportifs/systemes-montantes')}>
              📊 Systèmes & Montantes
            </Link>
            <Link href="/guide-paris-sportifs/optimisation" className={linkClass('/guide-paris-sportifs/optimisation')}>
              🚀 Optimisation
            </Link>
            <Link href="/guide-paris-sportifs/erreurs-eviter" className={linkClass('/guide-paris-sportifs/erreurs-eviter')}>
              ❌ Erreurs à Éviter
            </Link>
            <Link href="/guide-paris-sportifs/outils-pro" className={linkClass('/guide-paris-sportifs/outils-pro')}>
              🛠️ Outils Pro
            </Link>
            <Link href="/guide-paris-sportifs/psychologie" className={linkClass('/guide-paris-sportifs/psychologie')}>
              🧠 Psychologie du Parieur
            </Link>
            <Link href="/guide-paris-sportifs/responsable" className={linkClass('/guide-paris-sportifs/responsable')}>
              🛡️ Parier Responsable
            </Link>
          </nav>
          <div className="mt-8">
            <Link
              href="/paris-sportifs"
              className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Voir nos Pronostics →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}