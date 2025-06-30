'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Centré sur mobile, à gauche sur desktop */}
          <Link href="/" className="flex items-center space-x-2 mx-auto md:mx-0 md:mr-auto">
            <span className="text-3xl">🎲</span>
            <span className="text-xl font-bold text-gray-800">Rounders.pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/guide-stake" className="text-gray-600 hover:text-blue-600 transition-colors">
              Guide Complet Stake
            </Link>
            <a 
              href="https://twitter.com/rounders_pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <span>Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <Link href="/affilies" className="text-gray-600 hover:text-blue-600 transition-colors">
              Espace Affiliés
            </Link>
            <a 
              href="https://stake.bet/?c=rounders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Commencer sur Stake
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}