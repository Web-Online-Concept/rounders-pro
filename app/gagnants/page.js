'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function GagnantsPage() {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, today, yesterday, week
  const [stats, setStats] = useState({
    totalDistributed: 0,
    totalWinners: 0,
    biggestWin: 0
  });

  useEffect(() => {
    fetchWinners();
  }, []);

  const fetchWinners = async () => {
    try {
      const response = await fetch('/api/jeu-roue/winners');
      const data = await response.json();
      
      if (data.success) {
        setWinners(data.winners);
        calculateStats(data.winners);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des gagnants:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (winnersData) => {
    const total = winnersData.reduce((sum, w) => sum + w.amount, 0);
    const count = winnersData.length;
    const biggest = Math.max(...winnersData.map(w => w.amount), 0);
    
    setStats({
      totalDistributed: total,
      totalWinners: count,
      biggestWin: biggest
    });
  };

  const getFilteredWinners = () => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];

    switch (filter) {
      case 'today':
        return winners.filter(w => w.date === today);
      case 'yesterday':
        return winners.filter(w => w.date === yesterday);
      case 'week':
        return winners.filter(w => w.date >= weekAgo);
      default:
        return winners;
    }
  };

  const maskPseudo = (pseudo) => {
    if (!pseudo || pseudo.length <= 3) return pseudo;
    return pseudo.substring(0, 3) + '***';
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (dateStr === today.toISOString().split('T')[0]) {
      return "Aujourd'hui";
    } else if (dateStr === yesterday.toISOString().split('T')[0]) {
      return "Hier";
    }
    
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const filteredWinners = getFilteredWinners();

  // Données structurées pour le SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Gagnants de la Roue de la Fortune Rounders",
    "description": "Liste complète des gagnants de la Roue de la Fortune Rounders. Découvrez qui a gagné et combien !",
    "url": "https://www.rounders.pro/gagnants",
    "numberOfItems": winners.length,
    "itemListElement": winners.slice(0, 10).map((winner, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Person",
        "name": winner.pseudo,
        "award": `${winner.amount}€`,
        "datePublished": winner.date
      }
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.rounders.pro"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Roue de la Fortune",
        "item": "https://www.rounders.pro/jeu-roue"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Gagnants",
        "item": "https://www.rounders.pro/gagnants"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Gagnants de la Roue de la Fortune - Historique Complet | Rounders.pro</title>
        <meta name="description" content={`Découvrez les ${stats.totalWinners} gagnants de la Roue de la Fortune Rounders ! Plus de ${stats.totalDistributed}€ distribués. Consultez l'historique complet des gains.`} />
        <meta name="keywords" content="gagnants roue fortune, historique gains, winners stake, rounders gagnants, liste gagnants, gains casino" />
        <link rel="canonical" href="https://www.rounders.pro/gagnants" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gagnants Roue de la Fortune - Historique Complet" />
        <meta property="og:description" content={`Plus de ${stats.totalDistributed}€ distribués à ${stats.totalWinners} gagnants ! Consultez la liste complète.`} />
        <meta property="og:url" content="https://www.rounders.pro/gagnants" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rounders.pro/images/gagnants-og.jpg" />
        <meta property="og:site_name" content="Rounders.pro" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gagnants Roue de la Fortune Rounders" />
        <meta name="twitter:description" content={`${stats.totalDistributed}€ distribués ! Découvrez tous les gagnants.`} />
        <meta name="twitter:image" content="https://www.rounders.pro/images/gagnants-twitter.jpg" />
        <meta name="twitter:site" content="@rounders_pro" />
        
        {/* Autres métadonnées */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rounders.pro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête avec breadcrumb */}
          <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-gray-700 hover:text-blue-600">
                  Accueil
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <a href="/jeu-roue" className="text-gray-700 hover:text-blue-600 ml-1">
                    Roue de la Fortune
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500 ml-1">Gagnants</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Titre principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏆 Historique des Gagnants
            </h1>
            <p className="text-xl text-gray-600">
              Découvrez tous les gagnants de la Roue de la Fortune Rounders
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stats.totalDistributed}€
              </div>
              <p className="text-gray-600">Total distribué</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stats.totalWinners}
              </div>
              <p className="text-gray-600">Gagnants au total</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {stats.biggestWin}€
              </div>
              <p className="text-gray-600">Plus gros gain</p>
            </div>
          </div>

          {/* Filtres */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Voir tous les gagnants"
              >
                Tous les gagnants
              </button>
              <button
                onClick={() => setFilter('today')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'today' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Voir les gagnants d'aujourd'hui"
              >
                Aujourd'hui
              </button>
              <button
                onClick={() => setFilter('yesterday')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'yesterday' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Voir les gagnants d'hier"
              >
                Hier
              </button>
              <button
                onClick={() => setFilter('week')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'week' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Voir les gagnants de la semaine"
              >
                Cette semaine
              </button>
            </div>
          </div>

          {/* Liste des gagnants */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Chargement des gagnants...</p>
            </div>
          ) : filteredWinners.length > 0 ? (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pseudo
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Heure
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gain
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredWinners.map((winner, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(winner.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              {maskPseudo(winner.pseudo)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {winner.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            winner.amount >= 50 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : winner.amount >= 10 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {winner.amount >= 50 && '🏆 '}
                            {winner.amount >= 10 && winner.amount < 50 && '🥈 '}
                            {winner.amount}€
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500 text-lg">
                {filter === 'all' 
                  ? "Aucun gagnant pour le moment."
                  : `Aucun gagnant ${
                      filter === 'today' ? "aujourd'hui" : 
                      filter === 'yesterday' ? "hier" : 
                      "cette semaine"
                    }.`
                }
              </p>
              <a
                href="/jeu-roue"
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Tentez votre chance !
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tentez votre chance !
            </h2>
            <p className="text-gray-600 mb-6">
              Jouez gratuitement à la Roue de la Fortune et gagnez jusqu'à 50€
            </p>
            <a
              href="/jeu-roue"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Jouer maintenant
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}