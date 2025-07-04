// app/nos-jeux/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Rounders Pro - Jeux Exclusifs et Roue de la Fortune',
  description: 'Participez aux jeux exclusifs Rounders Pro sur Twitter X et gagnez des bonus cash avec la Roue de la Fortune Stake. Jusqu’à 50€ par jour !',
  keywords: 'jeux rounders, roue fortune stake, bonus cash, twitter x rounders, stake jeux',
  openGraph: {
    title: 'Rounders Pro - Jeux Exclusifs et Roue de la Fortune',
    description: 'Participez aux jeux exclusifs Rounders Pro sur Twitter X et gagnez des bonus cash avec la Roue de la Fortune Stake. Jusqu’à 50€ par jour !',
    url: 'https://www.rounders.pro/nos-jeux',
    siteName: 'Rounders Pro',
    images: [
      {
        url: '/images/og-rounders-stake.jpg',
        width: 1200,
        height: 630,
        alt: 'Rounders Pro - Jeux Exclusifs et Roue de la Fortune',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounders Pro - Jeux Exclusifs et Roue de la Fortune',
    description: 'Gagnez des bonus cash avec les jeux Rounders Pro sur Twitter X et la Roue de la Fortune.',
    images: ['/images/og-rounders-stake.jpg'],
  },
  alternates: {
    canonical: 'https://www.rounders.pro/nos-jeux',
  },
};

export default function NosJeux() {
  const [stats, setStats] = useState({
    totalDistributed: 0,
    averageWin: 0,
    totalWinners: 0,
    biggestWin: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await fetch('/api/roue-fortune/winners?limit=all');
      const data = await response.json();
      const winnersData = data.winners || [];

      // Calculer les statistiques
      let totalAmount = 0;
      let biggestWin = 0;

      winnersData.forEach(winner => {
        const amount = parseInt(winner.amount.replace('€', ''));
        totalAmount += amount;
        if (amount > biggestWin) biggestWin = amount;
      });

      const averageWin = winnersData.length > 0 ? totalAmount / winnersData.length : 0;

      setStats({
        totalDistributed: totalAmount,
        averageWin: averageWin.toFixed(2),
        totalWinners: winnersData.length,
        biggestWin
      });
    } catch (error) {
      console.error('Erreur chargement stats:', error);
    }
  };

  return (
    <>
      <Header />
      
      <main className="pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                🎮 Les Jeux Exclusifs Rounders
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Des bonus cash à gagner chaque jour sur Twitter X
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://twitter.com/rounders_pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Suivre @rounders_pro
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link 
                  href="/avantages-rounders"
                  className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Devenir Affilié Rounders
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
                🎯 Comment ça marche ?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h3 className="font-bold text-lg mb-2">Suivez-nous</h3>
                  <p className="text-gray-600">Suivez @rounders_pro sur Twitter X</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h3 className="font-bold text-lg mb-2">Suivez nos publis Twitter X</h3>
                  <p className="text-gray-600">Soyez averti dès qu'un jeu est publié</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h3 className="font-bold text-lg mb-2">Cliquez le lien</h3>
                  <p className="text-gray-600">Accédez au jeu via le lien exclusif du tweet</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">4️⃣</div>
                  <h3 className="font-bold text-lg mb-2">Gagnez des bonus</h3>
                  <p className="text-gray-600">Tentez votre chance pour gagner du cash</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Roue de la Fortune */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/roue-fortune" className="block group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white group-hover:shadow-2xl transition-shadow cursor-pointer">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    🎡 La Roue de la Fortune Stake
                  </h2>
                  
                  {/* Statistiques globales */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      📊 Statistiques globales
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-sm opacity-90">Total distribué</p>
                        <p className="text-2xl font-bold">{stats.totalDistributed}€</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Nombre de gagnants</p>
                        <p className="text-2xl font-bold">{stats.totalWinners}</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Gain moyen</p>
                        <p className="text-2xl font-bold">{stats.averageWin}€</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Plus gros gain</p>
                        <p className="text-2xl font-bold">{stats.biggestWin}€</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💰</span>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Gagnez jusqu'à 50€ à chaque Jeu proposé</h3>
                          <p className="opacity-90">Des gains en cash entre 0€ et 50€ à chaque jeu</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Conditions variables</h3>
                          <p className="opacity-90">Ouvert à tous les joueurs ayant un compte Stake</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⏰</span>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Une chance par jour</h3>
                          <p className="opacity-90">Une seule participation autorisée par personne</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Paiement rapide sur Stake sous 48h</h3>
                          <p className="opacity-90">Recevez vos gains rapidement et en toute sécurité</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Pourquoi Twitter X */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-12">
                🚀 Pourquoi sur Twitter X ?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">⏱️</div>
                  <h3 className="font-bold text-xl mb-3">Jeux surprises</h3>
                  <p className="text-gray-600">À des horaires variés pour que tout le monde ait sa chance</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="font-bold text-xl mb-3">Communauté active</h3>
                  <p className="text-gray-600">Rejoignez la team Rounders et partagez vos gains</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">🔔</div>
                  <h3 className="font-bold text-xl mb-3">Notifications instant</h3>
                  <p className="text-gray-600">Ne ratez jamais une opportunité de gagner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Note importante */}
        <section className="py-12 bg-yellow-50 border-t-4 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg font-semibold text-yellow-800">
                ⚠️ Important : Les jeux sont disponibles UNIQUEMENT via les liens publiés sur notre Twitter.
              </p>
              <p className="text-yellow-700 mt-2">
                Aucun accès direct depuis le site - Suivez @rounders_pro pour participer !
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                💪 Rejoignez la Team Rounders
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ne manquez plus aucun jeu et maximisez vos gains sur Stake
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://twitter.com/rounders_pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Suivre @rounders_pro sur X
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link 
                  href="/avantages-rounders"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  Devenir Affilié Rounders →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}