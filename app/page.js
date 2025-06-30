'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🎲</span>
              <span className="text-xl font-bold text-gray-800">Rounders</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/guide-stake" className="text-gray-600 hover:text-blue-600 transition-colors">
                Guide Complet
              </Link>
              <Link href="/guide-stake/bonus" className="text-gray-600 hover:text-blue-600 transition-colors">
                Bonus
              </Link>
              <Link href="/guide-stake/vip" className="text-gray-600 hover:text-blue-600 transition-colors">
                Programme VIP
              </Link>
              <Link href="/affilies" className="text-gray-600 hover:text-blue-600 transition-colors">
                Espace Affiliés
              </Link>
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Commencer sur Stake
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <Link href="/guide-stake" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Guide Complet
              </Link>
              <Link href="/guide-stake/bonus" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Bonus
              </Link>
              <Link href="/guide-stake/vip" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Programme VIP
              </Link>
              <Link href="/affilies" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Espace Affiliés
              </Link>
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Commencer sur Stake
              </a>
            </div>
          )}
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center px-4 pb-16 md:pb-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Gagnez plus sur Stake avec Rounders
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Le guide ultime pour maximiser vos gains sur Stake
              <br className="hidden md:block" />
              avec des bonus cash exclusifs jusqu'à 200€ par niveau VIP
            </p>
            
            {/* Image placeholder */}
            {/* <Image 
              src="/images/hero-stake.jpg" 
              alt="Interface Stake avec bonus Rounders" 
              width={1200} 
              height={600} 
              className="w-full rounded-lg shadow-xl mb-8"
              priority
            /> */}
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Commencer sur Stake →
              </a>
              <Link href="/guide-stake" className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors">
                Découvrir le guide
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 md:py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">200€</div>
                <div className="text-gray-600 mt-2">Max par niveau VIP</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">5%+</div>
                <div className="text-gray-600 mt-2">Rakeback dès l'inscription</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">12</div>
                <div className="text-gray-600 mt-2">Guides détaillés</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600 mt-2">Support disponible</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pourquoi choisir Rounders ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Guide Complet */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {/* <Image 
                  src="/images/guide-stake.jpg" 
                  alt="Guide Stake complet" 
                  width={400} 
                  height={250} 
                  className="w-full rounded-lg mb-6"
                /> */}
                <h3 className="text-2xl font-bold mb-4">Guide Complet</h3>
                <p className="text-gray-600 mb-6">
                  Tout ce qu'il faut savoir pour réussir sur Stake, de l'inscription aux stratégies avancées.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Guide spécial France (VPN)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Tutoriel crypto détaillé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Stratégies par jeu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Programme VIP expliqué</span>
                  </li>
                </ul>
                <Link href="/guide-stake" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Voir le guide →
                </Link>
              </div>

              {/* Bonus Cash VIP */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {/* <Image 
                  src="/images/bonus-vip.jpg" 
                  alt="Bonus VIP exclusifs" 
                  width={400} 
                  height={250} 
                  className="w-full rounded-lg mb-6"
                /> */}
                <h3 className="text-2xl font-bold mb-4">Bonus Cash VIP</h3>
                <p className="text-gray-600 mb-6">
                  Recevez des bonus cash exclusifs à chaque niveau VIP franchi, jusqu'à 200€ !
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>10€ dès le niveau Bronze</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Jusqu'à 200€ au Diamant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Paiement avec crypto au choix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Réclamation simple</span>
                  </li>
                </ul>
                <Link href="/guide-stake/vip" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Voir les bonus →
                </Link>
              </div>

              {/* Espace Affiliés */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {/* <Image 
                  src="/images/espace-affilies.jpg" 
                  alt="Espace affiliés VIP" 
                  width={400} 
                  height={250} 
                  className="w-full rounded-lg mb-6"
                /> */}
                <h3 className="text-2xl font-bold mb-4">Espace Affiliés VIP</h3>
                <p className="text-gray-600 mb-6">
                  Réclamez facilement vos bonus cash à chaque niveau VIP atteint sur Stake.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Formulaire simple</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Traitement rapide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Support dédié</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Suivi personnalisé</span>
                  </li>
                </ul>
                <Link href="/affilies" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Réclamer mes bonus →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comment ça marche ?
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Inscrivez-vous</h3>
                <p className="text-gray-600 text-sm">
                  Créez votre compte Stake avec notre lien affilié
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Jouez</h3>
                <p className="text-gray-600 text-sm">
                  Profitez des jeux et montez en niveau VIP
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Réclamez</h3>
                <p className="text-gray-600 text-sm">
                  Demandez vos bonus cash à chaque niveau
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Recevez</h3>
                <p className="text-gray-600 text-sm">
                  Bonus envoyé dans la crypto de votre choix
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à maximiser vos gains ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez Rounders et profitez de nos bonus exclusifs jusqu'à 200€ par niveau VIP
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                S'inscrire sur Stake →
              </a>
              <Link href="/guide-stake" className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
                Lire le guide complet
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">Rounders</h4>
              <p className="text-sm">
                Le guide ultime pour maximiser vos gains sur Stake avec des bonus exclusifs.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Guide</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guide-stake" className="hover:text-white">Sommaire</Link></li>
                <li><Link href="/guide-stake/france" className="hover:text-white">Jouer depuis la France</Link></li>
                <li><Link href="/guide-stake/inscription" className="hover:text-white">Inscription</Link></li>
                <li><Link href="/guide-stake/crypto" className="hover:text-white">Cryptomonnaies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Bonus</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guide-stake/bonus" className="hover:text-white">Bonus & Rakeback</Link></li>
                <li><Link href="/guide-stake/vip" className="hover:text-white">Programme VIP</Link></li>
                <li><Link href="/affilies" className="hover:text-white">Espace Affiliés</Link></li>
                <li><Link href="/guide-stake/strategies" className="hover:text-white">Stratégies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email : rounders.pro@gmail.com</li>
                <li>Twitter : @rounders_pro</li>
                <li><Link href="/guide-stake/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Rounders. Tous droits réservés. Jouez responsable.</p>
          </div>
        </div>
      </footer>
    </>
  );
}