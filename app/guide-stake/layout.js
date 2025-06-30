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
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-gray-50 border-r border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Guide Complet Stake</h2>
            
            <nav className="space-y-2">
              <Link href="/guide-stake/introduction" className={linkClass('/guide-stake/introduction')}>
                Introduction
              </Link>
              <Link href="/guide-stake/france" className={linkClass('/guide-stake/france')}>
                Guide France
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
              <Link href="/guide-stake/jeux" className={linkClass('/guide-stake/jeux')}>
                Les Jeux
              </Link>
              <Link href="/guide-stake/bonus" className={linkClass('/guide-stake/bonus')}>
                Bonus & Rakeback
              </Link>
              <Link href="/guide-stake/vip" className={linkClass('/guide-stake/vip')}>
                Programme VIP
              </Link>
              <Link href="/guide-stake/crypto" className={linkClass('/guide-stake/crypto')}>
                Cryptomonnaies
              </Link>
              <Link href="/guide-stake/strategies" className={linkClass('/guide-stake/strategies')}>
                Stratégies
              </Link>
              <Link href="/guide-stake/responsable" className={linkClass('/guide-stake/responsable')}>
                Jeu Responsable
              </Link>
              <Link href="/guide-stake/astuces" className={linkClass('/guide-stake/astuces')}>
                Astuces Pro
              </Link>
              <Link href="/guide-stake/faq" className={linkClass('/guide-stake/faq')}>
                FAQ Complète
              </Link>
            </nav>
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