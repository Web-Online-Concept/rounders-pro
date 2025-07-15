'use client';
import Link from 'next/link';
import { AFFILIATE_LINK } from '../config/affiliate';
import { useState } from 'react';

export default function Header() {
  const [isParisOpen, setIsParisOpen] = useState(false);
  const [isAffiliationOpen, setIsAffiliationOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - À gauche sur mobile */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Rounders" className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-900">Rounders.pro</span>
            </Link>
            
            {/* Logos sociaux */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://x.com/rounders_pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Twitter Rounders"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Lien Nos Jeux mobile uniquement */}
          <Link 
            href="/nos-jeux" 
            className="md:hidden flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
            aria-label="Nos Jeux Rounders"
          >
            Nos Jeux
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Menu Paris Sportifs */}
            <div 
              className="relative py-5"
              onMouseEnter={() => setIsParisOpen(true)}
              onMouseLeave={() => setIsParisOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Paris Sportifs
              </button>
              {isParisOpen && (
                <div className="absolute top-full left-0 -mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/paris-sportifs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Tous nos Paris Sportifs
                  </Link>
                  <Link href="/paris-sportifs/montante" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Montantes
                  </Link>
                  <Link href="/paris-sportifs/martingale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Martingales
                  </Link>
                </div>
              )}
            </div>

            {/* Menu Affiliation & Guide Stake */}
            <div 
              className="relative py-5"
              onMouseEnter={() => setIsAffiliationOpen(true)}
              onMouseLeave={() => setIsAffiliationOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Affiliation & Guide Stake
              </button>
              {isAffiliationOpen && (
                <div className="absolute top-full left-0 -mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/guide-stake" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Guide Stake
                  </Link>
                  <Link href="/avantages-rounders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Avantages Rounders
                  </Link>
                  <Link href="/affilies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Bonus Affiliés
                  </Link>
                  <Link href="/nos-jeux" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Nos Jeux
                  </Link>
                </div>
              )}
            </div>

            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Commencer sur Stake →
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}