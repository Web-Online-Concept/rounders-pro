// app/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="Accueil Rounders">
              <span className="text-3xl" aria-hidden="true">🎲</span>
              <span className="text-2xl font-bold text-gray-900">
                Rounders<span className="text-blue-600">.pro</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-gray-600 transition">
                Accueil
              </Link>
              <Link href="/guide-stake" className="hover:text-gray-600 transition">
                Guide Stake
              </Link>
              <Link href="/affilies" className="hover:text-gray-600 transition font-semibold text-green-600">
                Espace Affiliés
              </Link>
              <a
                href="https://stake.bet/?c=rounders"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Jouer sur Stake →
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu mobile"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4">
              <Link
                href="/"
                className="block px-6 py-3 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/guide-stake"
                className="block px-6 py-3 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Guide Stake
              </Link>
              <Link
                href="/affilies"
                className="block px-6 py-3 hover:bg-gray-100 transition font-semibold text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Espace Affiliés
              </Link>
              <a
                href="https://stake.bet/?c=rounders"
                target="_blank"
                className="block mx-6 mt-3 mb-2 bg-blue-600 text-white py-3 rounded-lg font-bold text-center"
              >
                Jouer sur Stake →
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16 pb-16 md:pb-8" aria-label="Section principale">
        <div className="max-w-6xl mx-auto px-4">
          {/* Image Hero - Décommentez quand l'image sera prête
          <div className="mb-8">
            <Image 
              src="/images/hero-stake.jpg" 
              alt="Interface du casino Stake avec bonus exclusifs Rounders"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl mx-auto"
              priority
            />
          </div>
          */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Gagnez plus sur Stake avec Rounders
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Le guide ultime pour maximiser vos gains sur Stake.
              <br className="hidden md:block" />
              Bonus exclusifs, stratégies avancées et support en français.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://stake.bet/?c=rounders"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition transform hover:scale-105"
                aria-label="S'inscrire sur Stake avec le code rounders"
              >
                Commencer sur Stake →
              </a>
              <Link
                href="/guide-stake"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
                aria-label="Accéder au guide complet Stake"
              >
                Découvrir le Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">5%+</div>
              <div className="text-gray-600 mt-1">Rakeback dès l&apos;inscription</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">200€</div>
              <div className="text-gray-600 mt-1">Bonus VIP max</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600">3000+</div>
              <div className="text-gray-600 mt-1">Jeux disponibles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-600">24/7</div>
              <div className="text-gray-600 mt-1">Support français</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <main>
        <section className="py-16 bg-gray-50" aria-label="Fonctionnalités principales">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Pourquoi choisir Rounders ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition">
                {/* Image Guide - Décommentez quand prête
                <div className="mb-4">
                  <Image 
                    src="/images/guide-stake.jpg" 
                    alt="Guide complet Stake en français avec VPN et stratégies"
                    width={400}
                    height={250}
                    className="rounded-lg w-full"
                  />
                </div>
                */}
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Guide Complet Stake
                </h3>
                <p className="text-gray-600 mb-4">
                  Le guide le plus détaillé en français pour maîtriser Stake de A à Z.
                </p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>✓ Guide spécial joueurs français</li>
                  <li>✓ Inscription pas à pas</li>
                  <li>✓ Astuces et stratégies pros</li>
                  <li>✓ Programme VIP expliqué</li>
                </ul>
                <Link href="/guide-stake" className="block">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                    Accéder au guide
                  </button>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition">
                {/* Image Bonus - Décommentez quand prête
                <div className="mb-4">
                  <Image 
                    src="/images/bonus-vip.jpg" 
                    alt="Bonus VIP Rounders - Jusqu'à 200€ par niveau sur Stake"
                    width={400}
                    height={250}
                    className="rounded-lg w-full"
                  />
                </div>
                */}
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Bonus Cash VIP
                </h3>
                <p className="text-gray-600 mb-4">
                  Recevez jusqu&apos;à 200€ en crypto à chaque niveau VIP franchi !
                </p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>✓ Bronze : 10€ • Argent : 20€</li>
                  <li>✓ Or : 30€ • Platine : 50-100€</li>
                  <li>✓ Diamant : 200€ cash</li>
                  <li>✓ Paiement dans votre crypto préférée</li>
                </ul>
                <Link href="/affilies" className="block">
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                    Réclamer mes bonus
                  </button>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition">
                {/* Image Affiliés - Décommentez quand prête
                <div className="mb-4">
                  <Image 
                    src="/images/espace-affilies.jpg" 
                    alt="Espace Affiliés Rounders - Réclamez vos bonus cash"
                    width={400}
                    height={250}
                    className="rounded-lg w-full"
                  />
                </div>
                */}
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Espace Affiliés VIP
                </h3>
                <p className="text-gray-600 mb-4">
                  Réclamez facilement vos bonus exclusifs à chaque palier VIP atteint.
                </p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>✓ Formulaire simple</li>
                  <li>✓ Paiement sous 24-48h</li>
                  <li>✓ Support dédié</li>
                  <li>✓ Suivi personnalisé</li>
                </ul>
                <Link href="/affilies" className="block">
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                    Espace Affiliés
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Comment ça marche ?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Inscrivez-vous</h3>
                <p className="text-gray-600 text-sm">
                  Créez votre compte Stake avec notre code affilié &quot;rounders&quot;
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Jouez & Montez</h3>
                <p className="text-gray-600 text-sm">
                  Jouez normalement et grimpez les niveaux VIP
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Réclamez</h3>
                <p className="text-gray-600 text-sm">
                  Soumettez votre niveau VIP dans l&apos;Espace Affiliés
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Recevez</h3>
                <p className="text-gray-600 text-sm">
                  Recevez votre bonus en crypto sous 24-48h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à maximiser vos gains ?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Rejoignez Rounders et profitez de tous nos avantages exclusifs
            </p>
            <a
              href="https://stake.bet/?c=rounders"
              target="_blank"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Commencer maintenant →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 hidden md:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              &copy; 2025 Rounders.pro - Tous droits réservés
            </div>
            <nav className="flex gap-6" aria-label="Navigation footer">
              <Link href="/guide-stake" className="text-gray-600 hover:text-gray-900">
                Guide Stake
              </Link>
              <Link href="/guide-stake/france" className="text-gray-600 hover:text-gray-900">
                Jouer depuis la France
              </Link>
              <Link href="/guide-stake/vip" className="text-gray-600 hover:text-gray-900">
                Programme VIP
              </Link>
              <Link href="/affilies" className="text-gray-600 hover:text-gray-900">
                Espace Affiliés
              </Link>
              <a href="mailto:rounders.pro@gmail.com" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <a href="https://x.com/rounders_pro" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                Twitter
              </a>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              Rounders.pro est un guide indépendant sur Stake. Jouez de manière responsable. 18+ uniquement.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="grid grid-cols-3 items-center">
          <Link href="/guide-stake" className="flex flex-col items-center py-3 hover:bg-gray-50">
            <span className="text-2xl mb-1">📚</span>
            <span className="text-xs">Guide</span>
          </Link>
          <a 
            href="https://stake.bet/?c=rounders" 
            target="_blank"
            className="flex flex-col items-center py-3 bg-blue-600 text-white"
          >
            <span className="text-2xl mb-1">🎰</span>
            <span className="text-xs font-bold">Stake</span>
          </a>
          <Link href="/affilies" className="flex flex-col items-center py-3 hover:bg-gray-50">
            <span className="text-2xl mb-1">💰</span>
            <span className="text-xs">Bonus</span>
          </Link>
        </div>
      </div>
    </div>
  );
}