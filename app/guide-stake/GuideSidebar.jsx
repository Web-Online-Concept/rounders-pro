// app/guide-stake/GuideSidebar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AFFILIATE_LINK } from '../config/affiliate';

export default function GuideSidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-2 rounded ${
      pathname === path
        ? 'bg-orange-100 text-orange-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  const mobileLinkClass = (path) =>
    `block px-6 py-3 ${
      pathname === path
        ? 'bg-orange-100 text-orange-700 font-semibold border-l-4 border-orange-500'
        : 'text-gray-700 hover:bg-gray-50'
    }`;

  return (
    <>
      {/* Menu Mobile - Uniquement visible sur mobile */}
      <div className="md:hidden">
        <div className="sticky top-0 z-40">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full py-3 px-4 bg-orange-600 text-white font-bold flex items-center justify-center hover:bg-orange-700 transition-colors border-b"
          >
            <span className="mr-2">{mobileMenuOpen ? '✕' : '☰'}</span>
            Menu Guide Stake
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
            <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu Guide Stake</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl hover:text-orange-200"
              >
                ✕
              </button>
            </div>
            <div className="py-2">
              <Link 
                href="/guide-stake" 
                className={mobileLinkClass('/guide-stake')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Retour au Guide
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <Link 
                href="/guide-stake/france" 
                className={mobileLinkClass('/guide-stake/france')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Guide France
              </Link>
              <Link 
                href="/guide-stake/introduction" 
                className={mobileLinkClass('/guide-stake/introduction')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Introduction
              </Link>
              <Link 
                href="/guide-stake/inscription" 
                className={mobileLinkClass('/guide-stake/inscription')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Inscription & Vérification
              </Link>
              <Link 
                href="/guide-stake/premier-depot" 
                className={mobileLinkClass('/guide-stake/premier-depot')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Premier Dépôt
              </Link>
              <Link 
                href="/guide-stake/interface" 
                className={mobileLinkClass('/guide-stake/interface')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Interface & Navigation  
              </Link>
              <Link 
                href="/guide-stake/bonus" 
                className={mobileLinkClass('/guide-stake/bonus')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Bonus & Rakeback
              </Link>
              <Link 
                href="/guide-stake/vip" 
                className={mobileLinkClass('/guide-stake/vip')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Programme VIP
              </Link>
              <Link 
                href="/guide-stake/jeux" 
                className={mobileLinkClass('/guide-stake/jeux')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Les Jeux
              </Link>
              <Link 
                href="/guide-stake/crypto" 
                className={mobileLinkClass('/guide-stake/crypto')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cryptomonnaies
              </Link>
              <Link 
                href="/guide-stake/strategies" 
                className={mobileLinkClass('/guide-stake/strategies')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Stratégies
              </Link>
              <Link 
                href="/guide-stake/astuces" 
                className={mobileLinkClass('/guide-stake/astuces')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Astuces Pro
              </Link>
              <Link 
                href="/guide-stake/responsable" 
                className={mobileLinkClass('/guide-stake/responsable')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Jeu Responsable
              </Link>
              <Link 
                href="/guide-stake/faq" 
                className={mobileLinkClass('/guide-stake/faq')}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ Complète
              </Link>
              <div className="border-t mx-8 my-2"></div>
              <div className="px-4 py-3">
                <Link
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jouer sur Stake
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
      
      {/* Sidebar desktop - Position absolue pour ne pas affecter le layout mobile */}
      <aside className="hidden md:block md:sticky md:top-0 md:h-screen md:w-64 bg-gray-50 border-r border-gray-200 md:pt-16 md:overflow-y-auto">
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
            <Link
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Jouer sur Stake
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}