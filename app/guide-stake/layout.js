// app/guide-stake/layout.js
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function GuideStakeLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const sections = [
    { href: '/guide-stake', title: '📚 Sommaire', exact: true },
    { href: '/guide-stake/introduction', title: '🎰 Introduction' },
    { href: '/guide-stake/france', title: '🇫🇷 Joueurs Français', highlight: true },
    { href: '/guide-stake/inscription', title: '✍️ Inscription' },
    { href: '/guide-stake/bonus', title: '💰 Bonus & Rakeback' },
    { href: '/guide-stake/jeux', title: '🎮 Les Jeux' },
    { href: '/guide-stake/vip', title: '⭐ Programme VIP' },
    { href: '/guide-stake/crypto', title: '₿ Cryptomonnaies' },
    { href: '/guide-stake/strategies', title: '📈 Stratégies' },
    { href: '/guide-stake/astuces', title: '💡 Astuces Pro' },
    { href: '/guide-stake/faq', title: '❓ FAQ' }
  ];

  const isActive = (href, exact = false) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Rounders<span className="text-blue-600">.pro</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Accueil
              </Link>
              <Link href="/guide-stake" className="text-blue-600 font-medium">
                Guide Stake
              </Link>
              <Link href="/jeu" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Jeu Quotidien
              </Link>
              <Link href="/affilies" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Espace Affiliés
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/guide-stake" 
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guide Stake
              </Link>
              <Link 
                href="/jeu" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jeu Quotidien
              </Link>
              <Link 
                href="/affilies" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Espace Affiliés
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 fixed left-0 h-full bg-gray-50 border-r pt-8 overflow-y-auto">
          <div className="px-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Guide Complet Stake
            </h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition ${
                    isActive(section.href, section.exact)
                      ? 'bg-blue-100 text-blue-700'
                      : section.highlight
                      ? 'text-red-700 hover:bg-red-50 font-bold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </Link>
              ))}
            </nav>

            {/* CTA Button in Sidebar */}
            <div className="mt-8 px-4">
              <a
                href="https://stake.bet/?c=upM179Vw"
                target="_blank"
                className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
              >
                S&apos;inscrire sur Stake →
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile Navigation Pills */}
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border-b z-40 px-4 py-2 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap transition ${
                  isActive(section.href, section.exact)
                    ? 'bg-blue-600 text-white'
                    : section.highlight
                    ? 'bg-red-100 text-red-700 font-bold'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 lg:ml-64 px-4 py-8 mt-12 lg:mt-0">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="grid grid-cols-3 h-16">
          <Link href="/jeu" className="flex flex-col items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-xs mt-1">Jouer</span>
          </Link>
          
          <a 
            href="https://stake.bet/?c=upM179Vw" 
            target="_blank"
            className="flex flex-col items-center justify-center bg-blue-600 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-xs mt-1 font-medium">Stake</span>
          </a>
          
          <Link href="/affilies" className="flex flex-col items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Bonus</span>
          </Link>
        </div>
      </div>
    </div>
  );
}