{/* Menu Mobile */}
      <div className="md:hidden sticky top-0 bg-white z-50 border-b">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full py-3 px-4 bg-orange-600 text-white font-bold flex items-center justify-center hover:bg-orange-700 transition-colors"
        >
          <span className="mr-2">{mobileMenuOpen ? '✕' : '☰'}</span>
          Menu Guide Stake
        </button>
      </div>

      {/* Overlay et Menu Slide-in */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav 
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du menu */}
            <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu Guide Stake</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl hover:text-orange-200"
              >
                ✕
              </button>
            </div>

            {/* Liens du menu */}
            <div className="p-4">
              <Link 
                href="/guide-stake/france" 
                className={`${linkClass('/guide-stake/france')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                🇫🇷 Guide France
              </Link>
              <Link 
                href="/guide-stake/introduction" 
                className={`${linkClass('/guide-stake/introduction')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎰 Introduction
              </Link>
              <Link 
                href="/guide-stake/inscription" 
                className={`${linkClass('/guide-stake/inscription')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ✍️ Inscription & Vérification
              </Link>
              <Link 
                href="/guide-stake/premier-depot" 
                className={`${linkClass('/guide-stake/premier-depot')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                💳 Premier Dépôt
              </Link>
              <Link 
                href="/guide-stake/interface" 
                className={`${linkClass('/guide-stake/interface')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                🖥️ Interface & Navigation  
              </Link>
              <Link 
                href="/guide-stake/bonus" 
                className={`${linkClass('/guide-stake/bonus')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                💰 Bonus & Rakeback
              </Link>
              <Link 
                href="/guide-stake/vip" 
                className={`${linkClass('/guide-stake/vip')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ⭐ Programme VIP
              </Link>
              <Link 
                href="/guide-stake/jeux" 
                className={`${linkClass('/guide-stake/jeux')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                🎮 Les Jeux
              </Link>
              <Link 
                href="/guide-stake/crypto" 
                className={`${linkClass('/guide-stake/crypto')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ₿ Cryptomonnaies
              </Link>
              <Link 
                href="/guide-stake/strategies" 
                className={`${linkClass('/guide-stake/strategies')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                📈 Stratégies
              </Link>
              <Link 
                href="/guide-stake/astuces" 
                className={`${linkClass('/guide-stake/astuces')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                💡 Astuces Pro
              </Link>
              <Link 
                href="/guide-stake/responsable" 
                className={`${linkClass('/guide-stake/responsable')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                🛡️ Jeu Responsable
              </Link>
              <Link 
                href="/guide-stake/faq" 
                className={`${linkClass('/guide-stake/faq')} block py-3 px-4 rounded transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ❓ FAQ Complète
              </Link>
            </div>

            {/* Bouton CTA en bas */}
            <div className="p-4 border-t">
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white px-4 py-3 rounded-lg text-center hover:bg-blue-700 transition-colors font-semibold"
              >
                🎯 Jouer sur Stake
              </a>
            </div>
          </nav>
        </div>
      )}