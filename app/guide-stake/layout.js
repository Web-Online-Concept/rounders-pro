'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GuideLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const navigation = [
    { name: 'Sommaire', path: '/guide-stake' },
    { name: 'Introduction', path: '/guide-stake/introduction' },
    { name: 'Guide France', path: '/guide-stake/france' },
    { name: 'Inscription', path: '/guide-stake/inscription' },
    { name: 'Bonus & Rakeback', path: '/guide-stake/bonus' },
    { name: 'Programme VIP', path: '/guide-stake/vip' },
    { name: 'Les Jeux', path: '/guide-stake/jeux' },
    { name: 'Cryptomonnaies', path: '/guide-stake/crypto' },
    { name: 'Stratégies', path: '/guide-stake/strategies' },
    { name: 'Astuces Pro', path: '/guide-stake/astuces' },
    { name: 'FAQ', path: '/guide-stake/faq' },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="flex relative">
          {/* Sidebar Desktop */}
          <aside className="hidden md:block w-64 bg-white shadow-lg fixed h-full overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-2">🎲</span>
                Guide Stake
              </h2>
              <nav>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 mb-3">
                  Prêt à commencer ?
                </p>
                <Link 
                  href="/affilies"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors mb-2"
                >
                  Espace Affiliés
                </Link>
                <a
                  href="https://stake.bet/?c=rounders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Jouer sur Stake
                </a>
              </div>
            </div>
          </aside>

          {/* Mobile Sidebar */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
              <aside className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <span className="text-3xl mr-2">🎲</span>
                      Guide
                    </h2>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <nav>
                    <ul className="space-y-2">
                      {navigation.map((item) => (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            onClick={() => setSidebarOpen(false)}
                            className={`block px-4 py-2 rounded-lg transition-colors ${
                              isActive(item.path)
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 md:ml-64">
            <div className="container mx-auto px-4 py-8 max-w-4xl mb-20 md:mb-0">
              {children}
            </div>
          </main>
        </div>

        {/* Bottom Bar Mobile - Moved outside main content */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
          <div className="grid grid-cols-3 py-2">
            <Link href="/" className="flex flex-col items-center py-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs">Accueil</span>
            </Link>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex flex-col items-center py-2"
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-xs text-blue-600">Menu</span>
            </button>
            <Link href="/affilies" className="flex flex-col items-center py-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">Affiliés</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}