'use client';
import Link from 'next/link';
import { AFFILIATE_LINK } from '../config/affiliate';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - À gauche sur mobile */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Rounders" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Rounders.pro</span>
          </Link>
          
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
            <Link href="/avantages-rounders" className="text-gray-700 hover:text-blue-600 transition-colors">
              Avantages Rounders
            </Link>
            <Link href="/affilies" className="text-gray-700 hover:text-blue-600 transition-colors">
              Bonus Affiliés
            </Link>
            <Link href="/nos-jeux" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Nos Jeux
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="/guide-stake" className="text-gray-700 hover:text-blue-600 transition-colors">
              Guide Stake
            </Link>
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