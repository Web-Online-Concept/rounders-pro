'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomBar() {
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
      <div className="grid grid-cols-5 py-2">
        <Link 
          href="/" 
          className={`flex flex-col items-center py-2 ${pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Accueil</span>
        </Link>
        
        <Link 
          href="/guide-stake" 
          className={`flex flex-col items-center py-2 ${pathname.startsWith('/guide-stake') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-xs">Guide</span>
        </Link>
        
        <Link 
          href="/affilies" 
          className={`flex flex-col items-center py-2 ${pathname === '/affilies' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs">Affiliés</span>
        </Link>
        
        <a 
          href="https://twitter.com/rounders_pro" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center py-2 text-gray-600"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="text-xs">Twitter</span>
        </a>
        'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomBar() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="grid grid-cols-5 h-16">
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <span className="text-sm">Accueil</span>
        </Link>
        
        <Link 
          href="/guide-stake" 
          className={`flex flex-col items-center justify-center py-2 ${isActive('/guide-stake') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <span className="text-sm">Guide</span>
        </Link>
        
        <Link 
          href="/avantages-rounders" 
          className={`flex flex-col items-center justify-center py-2 ${isActive('/avantages-rounders') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <span className="text-sm">Avantages</span>
        </Link>
        
        <Link 
          href="/affilies" 
          className={`flex flex-col items-center justify-center py-2 ${isActive('/affilies') ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <span className="text-sm">Affiliés</span>
        </Link>
        
        <a 
          href="https://stake.com/?c=rounders" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 text-green-600"
        >
          <span className="text-sm">Jouer</span>
        </a>
      </div>
    </nav>
  );
}
        <a 
          href="https://stake.bet/?c=rounders" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center py-2 text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          <span className="text-xs">Jouer</span>
        </a>
      </div>
    </div>
  );
}