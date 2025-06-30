'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GuideLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  const menuItems = [
    { href: '/guide-stake', label: 'Introduction' },
    { href: '/guide-stake/inscription', label: 'Inscription & Vérification' },
    { href: '/guide-stake/premier-depot', label: 'Premier Dépôt' },
    { href: '/guide-stake/interface', label: 'Interface & Navigation' },
    { href: '/guide-stake/jeux', label: 'Les Jeux' },
    { href: '/guide-stake/bonus', label: 'Bonus & Rakeback' },
    { href: '/guide-stake/programme-vip', label: 'Programme VIP' },
    { href: '/guide-stake/crypto', label: 'Cryptomonnaies' },
    { href: '/guide-stake/strategies', label: 'Stratégies' },
    { href: '/guide-stake/responsable', label: 'Jeu Responsable' },
    { href: '/guide-stake/astuces', label: 'Astuces Pro' },
    { href: '/guide-stake/faq', label: 'FAQ Complète' },
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen flex flex-col">
        {/* Menu mobile sticky */}
        <div className="md:hidden sticky top-0 z-30 bg-white border-b border-gray-200">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full px-4 py-3 flex items-center justify-center text-gray-700 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Menu du guide
          </button>
        </div>

        <div className="flex-1 flex">
          {/* Sidebar desktop */}
          <aside className="hidden md:block w-64 bg-gray-50 sticky top-0 h-screen overflow-y-auto">
            <div className="p-6">
              {/* Logo et titre dans la sidebar desktop uniquement */}
              <div className="mb-8">
                <Link href="/" className="flex items-center space-x-2">
                  <img src="/logo.png" alt="Rounders" className="w-6 h-6" />
                  <span className="text-lg font-bold">Rounders.pro</span>
                </Link>
                <h2 className="text-xl font-bold text-gray-900 mt-4">Guide Complet Stake</h2>
              </div>
              
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Sidebar */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-3">
                  Prêt à jouer ?
                </p>
                <a 
                  href="https://stake.com/?c=rounders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  S&apos;inscrire sur Stake
                </a>
              </div>

              {/* Lien vers Espace Affiliés */}
              <div className="mt-4">
                <Link href="/affilies" className="text-sm text-blue-600 hover:text-blue-700">
                  → Espace Affiliés
                </Link>
              </div>
            </div>
          </aside>

          {/* Menu mobile fullscreen */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-white overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Menu du Guide</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-3 rounded-md text-base font-medium ${
                        isActive(item.href)
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">
                    Prêt à jouer ?
                  </p>
                  <a 
                    href="https://stake.com/?c=rounders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    S&apos;inscrire sur Stake
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Contenu principal */}
          <main className="flex-1 max-w-4xl mx-auto w-full">
            <div className="px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-16">
              {children}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}