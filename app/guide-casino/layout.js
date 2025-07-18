// app/guide-casino/layout.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from '@/components/MobileMenu';

export default function GuideCasinoLayout({ children }) {
  const pathname = usePathname();
  
  const sections = [
    { title: "Introduction", slug: "introduction", emoji: "🎰" },
    { title: "Jeux de Table", slug: "jeux-table", emoji: "🎲" },
    { title: "Machines à Sous", slug: "machines-sous", emoji: "🎯" },
    { title: "Blackjack Pro", slug: "blackjack-pro", emoji: "♠️" },
    { title: "Roulette", slug: "roulette", emoji: "🎡" },
    { title: "Baccarat", slug: "baccarat", emoji: "💎" },
    { title: "Stratégies Slots", slug: "strategies-slots", emoji: "🎰" },
    { title: "Casino Live", slug: "casino-live", emoji: "🏆" },
    { title: "Bonus", slug: "bonus-promotions", emoji: "💰" },
    { title: "Bankroll", slug: "gestion-bankroll", emoji: "📊" },
    { title: "Mathématiques", slug: "mathematiques", emoji: "🧮" },
    { title: "Erreurs", slug: "erreurs-eviter", emoji: "🚫" },
    { title: "Psychologie", slug: "psychologie", emoji: "🧠" },
    { title: "Responsable", slug: "responsable", emoji: "🛡️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar desktop */}
          <aside className="hidden md:block">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-red-800 mb-6">Guide Casino</h2>
              <nav className="space-y-2">
                <Link 
                  href="/guide-casino"
                  className={`block px-4 py-2 rounded-lg transition ${
                    pathname === '/guide-casino' 
                      ? 'bg-red-600 text-white' 
                      : 'hover:bg-red-100 text-gray-700'
                  }`}
                >
                  📖 Sommaire
                </Link>
                {sections.map((section) => {
                  const isActive = pathname === `/guide-casino/${section.slug}`;
                  return (
                    <Link
                      key={section.slug}
                      href={`/guide-casino/${section.slug}`}
                      className={`block px-4 py-2 rounded-lg transition ${
                        isActive 
                          ? 'bg-red-600 text-white' 
                          : 'hover:bg-red-100 text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{section.emoji}</span>
                      {section.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Contenu principal */}
          <main className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              {children}
            </div>
          </main>
        </div>

        {/* Navigation mobile sticky */}
        <MobileMenu sections={sections} baseUrl="/guide-casino" />
      </div>
    </div>
  );
}