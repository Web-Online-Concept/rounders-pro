'use client';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Centré sur mobile */}
          <Link href="/" className="flex items-center space-x-2 mx-auto md:mx-0">
            <img src="/logo.png" alt="Rounders" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Rounders.pro</span>
          </Link>
          
          {/* Logo Twitter mobile uniquement */}
          <a 
            href="https://twitter.com/rounders_pro" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="md:hidden absolute right-4"
            aria-label="Twitter Rounders Pro"
          >
            <svg className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/guide-stake" className="text-gray-700 hover:text-blue-600 transition-colors">
              Guide Stake
            </Link>
            <Link href="/avantages-rounders" className="text-gray-700 hover:text-blue-600 transition-colors">
              Avantages Rounders
            </Link>
            <a href="https://twitter.com/rounders_pro" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Twitter
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <Link href="/affilies" className="text-gray-700 hover:text-blue-600 transition-colors">
              Espace Affiliés
            </Link>
            <a 
              href="https://stake.bet/?c=rounders&offer=rounders"
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