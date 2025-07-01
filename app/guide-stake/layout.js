'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GuideLayout({ children }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const linkClass = (path) => {
    return `block px-4 py-2 rounded ${
      pathname === path
        ? 'bg-orange-100 text-orange-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`;
  };

  const mobileLinkClass = (path) => {
    return `block px-4 py-3 text-center ${
      pathname === path
        ? 'bg-orange-100 text-orange-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-50'
    }`;
  };

  return (
    <>
      <Header />
      
      {/* Menu burger mobile - sticky sous le header */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="flex justify-center p-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
            Menu Guide Stake
          </button>
        </div>
        
        {/* Menu déroulant */}
        {mobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 max-h-96 overflow-y-auto">
            <div className="text-center font-semibold text-gray-800 py-3 border-b">
              Navigation du Guide
            </div>
            <nav className="py-2">
              <Link href="/guide-stake" className={mobileLinkClass('/guide-stake')} onClick={() => setMobileMenuOpen(false)}>
                Retour au Guide
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <Link href="/guide-stake/france" className={mobileLinkClass('/guide-stake/france')} onClick={() => setMobileMenuOpen(false)}>
                Guide France
              </Link>
              <Link href="/guide-stake/introduction" className={mobileLinkClass('/guide-stake/introduction')} onClick={() => setMobileMenuOpen(false)}>
                Introduction
              </Link>
              <Link href="/guide-stake/inscription" className={mobileLinkClass('/guide-stake/inscription')} onClick={() => setMobileMenuOpen(false)}>
                Inscription & Vérification
              </Link>
              <Link href="/guide-stake/premier-depot" className={mobileLinkClass('/guide-stake/premier-depot')} onClick={() => setMobileMenuOpen(false)}>
                Premier Dépôt
              </Link>
              <Link href="/guide-stake/interface" className={mobileLinkClass('/guide-stake/interface')} onClick={() => setMobileMenuOpen(false)}>
                Interface & Navigation
              </Link>
              <Link href="/guide-stake/bonus" className={mobileLinkClass('/guide-stake/bonus')} onClick={() => setMobileMenuOpen(false)}>
                Bonus & Rakeback
              </Link>
              <Link href="/guide-stake/vip" className={mobileLinkClass('/guide-stake/vip')} onClick={() => setMobileMenuOpen(false)}>
                Programme VIP
              </Link>
              <Link href="/guide-stake/jeux" className={mobileLinkClass('/guide-stake/jeux')} onClick={() => setMobileMenuOpen(false)}>
                Les Jeux
              </Link>
              <Link href="/guide-stake/crypto" className={mobileLinkClass('/guide-stake/crypto')} onClick={() => setMobileMenuOpen(false)}>
                Cryptomonnaies
              </Link>
              <Link href="/guide-stake/strategies" className={mobileLinkClass('/guide-stake/strategies')} onClick={() => setMobileMenuOpen(false)}>
                Stratégies
              </Link>
              <Link href="/guide-stake/astuces" className={mobileLinkClass('/guide-stake/astuces')} onClick={() => setMobileMenuOpen(false)}>
                Astuces Pro
              </Link>
              <Link href="/guide-stake/responsable" className={mobileLinkClass('/guide-stake/responsable')} onClick={() => setMobileMenuOpen(false)}>
                Jeu Responsable
              </Link>
              <Link href="/guide-stake/faq" className={mobileLinkClass('/guide-stake/faq')} onClick={() => setMobileMenuOpen(false)}>
                FAQ Complète
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <div className="px-4 py-3">
                <a
                  href="https://stake.bet/?c=rounders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jouer sur Stake
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <div className="min-h-screen flex">
        {/* Sidebar desktop */}
        <aside className="hidden md:block w-64 bg-gray-50 border-r border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Guide Complet Stake</h2>
            
            <nav className="space-y-2">
              <Link href="/guide-stake" className={linkClass('/guide-stake')}>
                Retour au Guide
              </Link>
              <div className="border-t my-4"></div>
              <Link href="/guide-stake/france" className={linkClass('/guide-stake/france')}>
                Guide France
              </Link>
              <Link href="/guide-stake/introduction" className={linkClass('/guide-stake/introduction')}>
                Introduction
              </Link>
              <Link href="/guide-stake/inscription" className={linkClass('/guide-stake/inscription')}>
                Inscription & Vérification
              </Link>
              <Link href="/guide-stake/premier-depot" className={linkClass('/guide-stake/premier-depot')}>
                Premier Dépôt
              </Link>
              <Link href="/guide-stake/interface" className={linkClass('/guide-stake/interface')}>
                Interface & Navigation
              </Link>
              <Link href="/guide-stake/bonus" className={linkClass('/guide-stake/bonus')}>
                Bonus & Rakeback
              </Link>
              <Link href="/guide-stake/vip" className={linkClass('/guide-stake/vip')}>
                Programme VIP
              </Link>
              <Link href="/guide-stake/jeux" className={linkClass('/guide-stake/jeux')}>
                Les Jeux
              </Link>
              <Link href="/guide-stake/crypto" className={linkClass('/guide-stake/crypto')}>
                Cryptomonnaies
              </Link>
              <Link href="/guide-stake/strategies" className={linkClass('/guide-stake/strategies')}>
                Stratégies
              </Link>
              <Link href="/guide-stake/astuces" className={linkClass('/guide-stake/astuces')}>
                Astuces Pro
              </Link>
              <Link href="/guide-stake/responsable" className={linkClass('/guide-stake/responsable')}>
                Jeu Responsable
              </Link>
              <Link href="/guide-stake/faq" className={linkClass('/guide-stake/faq')}>
                FAQ Complète
              </Link>
            </nav>
            
            <div className="mt-8">
              <a
                href="https://stake.bet/?c=rounders"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Jouer sur Stake
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white pb-20 md:pb-0">
          <div className="max-w-4xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}