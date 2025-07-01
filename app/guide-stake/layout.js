'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GuideLayout({ children }) {
  const pathname = usePathname();
  
  const linkClass = (path) => {
    return `block px-4 py-2 rounded ${
      pathname === path
        ? 'bg-orange-100 text-orange-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`;
  };

  return (
    <>
      <Header />
      
      {/* Menu mobile pour le guide */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Rounders.pro</h2>
          <div className="overflow-x-auto">
            <nav className="flex space-x-2 justify-center">
              <Link href="/guide-stake" className={`whitespace-nowrap px-2 py-1 rounded text-sm ${pathname === '/guide-stake' ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700'}`}>
                Retour
              </Link>
              <Link href="/guide-stake/france" className={`whitespace-nowrap px-2 py-1 rounded text-sm ${pathname === '/guide-stake/france' ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700'}`}>
                France
              </Link>
              <Link href="/guide-stake/vip" className={`whitespace-nowrap px-2 py-1 rounded text-sm ${pathname === '/guide-stake/vip' ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700'}`}>
                VIP
              </Link>
              <Link href="/guide-stake/bonus" className={`whitespace-nowrap px-2 py-1 rounded text-sm ${pathname === '/guide-stake/bonus' ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700'}`}>
                Bonus
              </Link>
              <Link href="/guide-stake/jeux" className={`whitespace-nowrap px-2 py-1 rounded text-sm ${pathname === '/guide-stake/jeux' ? 'bg-orange-100 text-orange-700 font-semibold' : 'text-gray-700'}`}>
                Jeux
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="min-h-screen flex">
        {/* Sidebar */}
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