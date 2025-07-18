// app/guide-casino/gestion-bankroll/page.js
import Link from 'next/link';

export default function GestionBankrollPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Gestion de Bankroll</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📊 Gestion de Bankroll
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          La gestion de bankroll est LA compétence qui sépare les joueurs qui durent de ceux qui 
          disparaissent. Apprenez les techniques professionnelles pour protéger votre capital, 
          survivre à la variance et maximiser vos sessions de jeu.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Principes fondamentaux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Les Principes Fondamentaux
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">💰 Qu'est-ce qu'une Bankroll ?</h3>
              <p className="text-sm mb-3">
                Votre bankroll est l'argent dédié EXCLUSIVEMENT au jeu, séparé de vos finances personnelles. 
                C'est de l'argent que vous pouvez vous permettre de perdre sans impact sur votre vie.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">✅ Fait partie de la bankroll</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Argent mis de côté pour jouer</li>
                    <li>• Gains réinvestis</li>
                    <li>• Budget loisir alloué au casino</li>
                    <li>• Bonus convertis en cash</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">❌ N'en fait PAS partie</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Loyer/factures</li>
                    <li>• Épargne d'urgence</li>
                    <li>• Argent emprunté</li>
                    <li>• Budget courses/essence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎯 Les 3 Règles d'Or</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                  <div>
                    <strong>Ne jamais mélanger</strong>
                    <p className="text-sm">Compte séparé ou enveloppe dédiée obligatoire</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                  <div>
                    <strong>Ne jamais recharger sous émotion</strong>
                    <p className="text-sm">Perdu = accepté. Pas de "je me refais"</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                  <div>
                    <strong>Adapter les mises à la bankroll</strong>
                    <p className="text-sm">Pas l'inverse ! Bankroll dicte les limites</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Calcul de la bankroll */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🧮 Calculer sa Bankroll Idéale
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <h3 className="text-xl font-bold mb-4">Formule de Base par Type de Joueur</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 rounded p-4">
                <h4 className="font-bold mb-2">🎰 Joueur de Slots</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Low volatility :</strong> 200-300x mise</li>
                  <li>• <strong>Medium volatility :</strong> 500-750x mise</li>
                  <li>• <strong>High volatility :</strong> 1000-1500x mise</li>
                  <li className="text-yellow-300">Ex: Mise 1€ high vol = 1500€ bankroll</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded p-4">
                <h4 className="font-bold mb-2">🎲 Joueur de Table</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Roulette :</strong> 50-100 unités</li>
                  <li>• <strong>Blackjack :</strong> 100-200 unités</li>
                  <li>• <strong>Baccarat :</strong> 40-80 unités</li>
                  <li className="text-yellow-300">Ex: Mise 10€ BJ = 2000€ bankroll</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-400/20 rounded p-4 mt-4">
              <p className="text-center font-semibold">
                💡 Règle Simple : Si vous stressez sur vos mises, votre bankroll est trop petite !
              </p>
            </div>
          </div>
        </div>

        {/* Gestion par sessions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🎯 Gestion par Sessions
          </h2>
          
          <div className="bg-orange-50 rounded p-6">
            <h3 className="font-bold text-orange-800 mb-4">Le Système des Sessions</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">📅 Division Mensuelle</h4>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-orange-100 rounded p-3 text-center">
                    <p className="font-bold">Bankroll Totale</p>
                    <p className="text-2xl font-bold">1000€</p>
                  </div>
                  <div className="text-center pt-8">
                    <span className="text-2xl">→</span>
                  </div>
                  <div className="bg-orange-100 rounded p-3 text-center">
                    <p className="font-bold">10 Sessions</p>
                    <p className="text-2xl font-bold">100€/session</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">✋ Limites par Session</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>• Stop Loss :</span>
                    <span className="font-bold text-red-600">-100% session (100€)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Stop Win :</span>
                    <span className="font-bold text-green-600">+50-100% session (150-200€)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Durée Max :</span>
                    <span className="font-bold">2-3 heures</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Pause Obligatoire :</span>
                    <span className="font-bold">24h entre sessions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 rounded p-4">
                <p className="text-yellow-800 font-semibold">
                  ⚠️ JAMAIS emprunter à la session suivante ! Perdu = stop jusqu'à demain
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stratégies par jeu */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🎮 Stratégies Spécifiques par Jeu
          </h2>
          
          <div className="space-y-4">
            {/* Slots */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎰 Machines à Sous</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Budget par Volatilité</h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Faible :</strong> 2-3h de jeu = 200 spins</li>
                    <li>• <strong>Moyenne :</strong> 1-2h de jeu = 150 spins</li>
                    <li>• <strong>Haute :</strong> 30min-1h = 100 spins</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Calcul Mise Optimale</h4>
                  <p className="text-xs font-mono bg-gray-100 rounded p-2">
                    Session ÷ Spins Prévus = Mise
                  </p>
                  <p className="text-xs mt-2">Ex: 100€ ÷ 200 spins = 0.50€/spin</p>
                </div>
              </div>
            </div>

            {/* Blackjack */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">♠️ Blackjack</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Système 1-2-3-5</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Mise de base : 1% bankroll</li>
                    <li>• Après gain : 1→2→3→5→1</li>
                    <li>• Après perte : retour à 1</li>
                    <li>• Max 5% bankroll/main</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Protection Splits/Doubles</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Réserve 3x mise initiale</li>
                    <li>• Pour split + double down</li>
                    <li>• Ex: Mise 10€ → 30€ disponible</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Roulette */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">🎡 Roulette</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Répartition 60-30-10</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 60% : Chances simples</li>
                    <li>• 30% : Douzaines/Colonnes</li>
                    <li>• 10% : Numéros pleins (fun)</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Unités par Session</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 50 unités minimum</li>
                    <li>• 1 unité = mise de base</li>
                    <li>• Stop à -25 ou +25 unités</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk of Ruin */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📉 Risk of Ruin (Risque de Ruine)
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <p className="mb-4">
              Le Risk of Ruin calcule la probabilité de perdre toute votre bankroll selon votre style de jeu
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/20">
                    <th className="text-left p-2">Unités de Bankroll</th>
                    <th className="text-center p-2">Edge -1%</th>
                    <th className="text-center p-2">Edge -2.7%</th>
                    <th className="text-center p-2">Edge -5%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/20">
                    <td className="p-2">50 unités</td>
                    <td className="text-center text-red-400">89%</td>
                    <td className="text-center text-red-400">95%</td>
                    <td className="text-center text-red-400">99%</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="p-2">100 unités</td>
                    <td className="text-center text-orange-400">53%</td>
                    <td className="text-center text-red-400">71%</td>
                    <td className="text-center text-red-400">87%</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="p-2">200 unités</td>
                    <td className="text-center text-yellow-400">18%</td>
                    <td className="text-center text-orange-400">38%</td>
                    <td className="text-center text-red-400">63%</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="p-2">500 unités</td>
                    <td className="text-center text-green-400">2%</td>
                    <td className="text-center text-yellow-400">11%</td>
                    <td className="text-center text-orange-400">31%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-400/20 rounded p-3 mt-4">
              <p className="text-sm text-center">
                💡 Leçon : Plus votre bankroll est grande par rapport aux mises, plus vous survivez longtemps
              </p>
            </div>
          </div>
        </div>

        {/* Gestion émotionnelle */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🧠 Bankroll et État Émotionnel
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">🔴 Signaux d'Alerte</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Chasing losses :</strong> Augmenter pour récupérer
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Tilt spending :</strong> Dépôts rage après pertes
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Emprunt mental :</strong> "Je rembourse demain"
                </li>
                <li className="bg-white rounded p-2">
                  <strong>All-in fréquents :</strong> Désespoir ou ennui
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Sessions marathon :</strong> Refus d'accepter pertes
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">✅ Bonnes Pratiques</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Cool-off :</strong> 24-48h après grosse perte
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Win goals :</strong> Objectifs réalistes (+20-30%)
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Journal :</strong> Noter sessions et émotions
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Alertes :</strong> Rappels pour pauses
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Reward :</strong> Se féliciter pour discipline
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Système de progression */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📈 Faire Croître sa Bankroll
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <h3 className="text-xl font-bold mb-4">Le Système 50/30/20</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/20 rounded p-4 text-center">
                <p className="text-3xl font-bold mb-2">50%</p>
                <p className="font-bold">Réinvestir</p>
                <p className="text-sm">Augmenter la bankroll</p>
              </div>
              <div className="bg-white/20 rounded p-4 text-center">
                <p className="text-3xl font-bold mb-2">30%</p>
                <p className="font-bold">Retirer</p>
                <p className="text-sm">Profiter des gains</p>
              </div>
              <div className="bg-white/20 rounded p-4 text-center">
                <p className="text-3xl font-bold mb-2">20%</p>
                <p className="font-bold">Réserve</p>
                <p className="text-sm">Coussin de sécurité</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded p-4">
              <h4 className="font-bold mb-2">Exemple Concret</h4>
              <ul className="text-sm space-y-1">
                <li>• Bankroll initiale : 1000€</li>
                <li>• Gains du mois : +400€</li>
                <li>• Réinvestir : 200€ → Nouvelle BR 1200€</li>
                <li>• Retirer : 120€ → Plaisir/récompense</li>
                <li>• Réserve : 80€ → Compte séparé</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Outils de tracking */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            📱 Outils de Suivi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-800 mb-3">📊 Spreadsheet Simple</h3>
              <p className="text-sm mb-3">Colonnes essentielles à tracker :</p>
              <ul className="text-xs space-y-1 bg-white rounded p-3">
                <li>• Date et heure</li>
                <li>• Jeu joué</li>
                <li>• Budget session</li>
                <li>• Résultat final</li>
                <li>• Durée de jeu</li>
                <li>• Notes (état mental, etc.)</li>
                <li>• Bankroll mise à jour</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">📈 Métriques Clés</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Win Rate :</strong> % sessions gagnantes
                </li>
                <li className="bg-white rounded p-2">
                  <strong>ROI :</strong> Return on Investment mensuel
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Avg Session :</strong> Gain/perte moyen
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Hourly Rate :</strong> Gain/perte par heure
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Variance :</strong> Écart-type des résultats
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erreurs courantes */}
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            ❌ Erreurs Fatales de Bankroll Management
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Jouer avec l'argent du loyer</strong>
                <p className="text-xs">Route directe vers les problèmes</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Pas de limites claires</strong>
                <p className="text-xs">"Je verrai bien" = désastre</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Chasser les pertes</strong>
                <p className="text-xs">La spirale infernale classique</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Augmenter après gains</strong>
                <p className="text-xs">Redonner tout en 1 session</p>
              </li>
            </ul>
            
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Ignorer la variance</strong>
                <p className="text-xs">10 pertes d'affilée = possible</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Mixer les bankrolls</strong>
                <p className="text-xs">Poker + casino + paris = confusion</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Pas de suivi</strong>
                <p className="text-xs">Aucune idée des vraies pertes</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Emprunter pour jouer</strong>
                <p className="text-xs">JAMAIS. Point final.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Plan d'action */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📋 Votre Plan d'Action Bankroll
          </h2>
          
          <div className="bg-white rounded p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-1">Définir le Budget Total</h4>
                  <p className="text-sm">Montant que vous pouvez perdre sans stress : _______€</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-1">Choisir vos Jeux Principaux</h4>
                  <p className="text-sm">Maximum 2-3 jeux pour commencer</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-1">Calculer les Unités</h4>
                  <p className="text-sm">Bankroll ÷ unités recommandées = mise de base</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-1">Diviser en Sessions</h4>
                  <p className="text-sm">10-20 sessions égales selon fréquence de jeu</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-1">Fixer les Limites</h4>
                  <p className="text-sm">Stop loss/win par session + durée max</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">6</span>
                <div>
                  <h4 className="font-bold mb-1">Créer le Tracker</h4>
                  <p className="text-sm">Excel/Google Sheets avec formules auto</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">7</span>
                <div>
                  <h4 className="font-bold mb-1">Review Mensuelle</h4>
                  <p className="text-sm">Analyser, ajuster, améliorer</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            💎 Les 10 Commandements de la Bankroll
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">1.</span>
              <span className="text-gray-700">Ta bankroll est sacrée, jamais tu ne la mélangeras</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">2.</span>
              <span className="text-gray-700">Les limites de session tu respecteras religieusement</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">3.</span>
              <span className="text-gray-700">Jamais tu n'emprunteras pour reconstituer</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">4.</span>
              <span className="text-gray-700">La variance tu accepteras comme partie du jeu</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">5.</span>
              <span className="text-gray-700">Tes sessions tu trackeras avec discipline</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">6.</span>
              <span className="text-gray-700">Sous émotion jamais tu ne rechargeras</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">7.</span>
              <span className="text-gray-700">Les gains tu répartiras selon ton système</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">8.</span>
              <span className="text-gray-700">Ta mise à ta bankroll tu adapteras, pas l'inverse</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">9.</span>
              <span className="text-gray-700">Le long terme tu privilégieras sur le coup d'éclat</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">10.</span>
              <span className="text-gray-700">Sans bankroll adaptée, tu ne joueras point</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/bonus-promotions"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Bonus et Promotions
          </Link>
          <Link 
            href="/guide-casino/mathematiques"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Mathématiques du Casino
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}