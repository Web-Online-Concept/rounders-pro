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