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
        <aside className="hidden md:block w-64 bg-white shadow-md fixed h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Guide Complet Stake</h2>
            
            <nav className="space-y-2">
              <Link href="/guide-stake" className={linkClass('/guide-stake')}>
                Retour au Guide
              </Link>
              <div className="border-t my-4"></div>
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
            
            <div className="mt-8 p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-700 mb-2">💰 Bonus Exclusif</h3>
              <p className="text-sm text-orange-600 mb-3">
                Inscrivez-vous via notre lien pour recevoir des bonus cash jusqu'à 200€ !
              </p>
              <a
                href="https://stake.bet/?c=rounders"
                target="_blank"
                className="block text-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition font-semibold text-sm"
              >
                S'inscrire →
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 md:ml-64 bg-gray-50">
          <div className="max-w-4xl mx-auto p-6 pb-24 md:pb-16">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}