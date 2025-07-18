// app/guide-casino/blackjack-pro/page.js
import Link from 'next/link';

export default function BlackjackProPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Blackjack Pro</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ♠️ Le Blackjack Pro
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le Blackjack est le seul jeu de casino où vos décisions influencent directement vos chances 
          de gagner. Avec la stratégie de base et une gestion rigoureuse, l'avantage maison peut 
          descendre à seulement 0.5%. Devenez un joueur pro !
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Les règles détaillées */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Règles Complètes du Blackjack
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">🎯 Objectif du Jeu</h3>
              <p className="text-sm mb-3">
                Battre le croupier en obtenant une main plus proche de 21 sans dépasser (bust). 
                Le Blackjack naturel (As + 10) paie 3:2 et bat toute autre main de 21.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Valeur des Cartes</h4>
                  <ul className="text-xs space-y-1">
                    <li>• As : 1 ou 11 (flexible)</li>
                    <li>• Roi, Dame, Valet : 10</li>
                    <li>• 2-10 : Valeur nominale</li>
                    <li>• Couleurs : Sans importance</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-2">Types de Mains</h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Hard :</strong> Sans As ou As = 1</li>
                    <li>• <strong>Soft :</strong> As compté comme 11</li>
                    <li>• <strong>Pair :</strong> Deux cartes identiques</li>
                    <li>• <strong>Blackjack :</strong> As + 10 (2 cartes)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎮 Déroulement d'une Partie</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                  <span>Placez votre mise dans le cercle désigné</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                  <span>Le croupier distribue 2 cartes faces visibles aux joueurs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                  <span>Le croupier prend 2 cartes : 1 visible, 1 cachée</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">4</span>
                  <span>Vérification du Blackjack si As ou 10 visible</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">5</span>
                  <span>Les joueurs prennent leurs décisions tour à tour</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">6</span>
                  <span>Le croupier joue selon les règles fixes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">7</span>
                  <span>Comparaison et paiement des mains gagnantes</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Actions du joueur */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Actions Disponibles au Blackjack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">✋ Stand (Rester)</h3>
              <p className="text-sm mb-2">Garder votre main actuelle</p>
              <ul className="text-xs space-y-1">
                <li>• Fin de votre tour</li>
                <li>• Aucune carte supplémentaire</li>
                <li>• Signal : Main à plat sur la table</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">👆 Hit (Tirer)</h3>
              <p className="text-sm mb-2">Demander une carte supplémentaire</p>
              <ul className="text-xs space-y-1">
                <li>• Répétable jusqu'au bust</li>
                <li>• Risque de dépasser 21</li>
                <li>• Signal : Taper la table</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">💰 Double Down</h3>
              <p className="text-sm mb-2">Doubler la mise, recevoir UNE carte</p>
              <ul className="text-xs space-y-1">
                <li>• Une seule carte additionnelle</li>
                <li>• Généralement sur 9, 10, 11</li>
                <li>• Certains casinos : sur toute main</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">✂️ Split (Séparer)</h3>
              <p className="text-sm mb-2">Diviser une paire en deux mains</p>
              <ul className="text-xs space-y-1">
                <li>• Mise égale sur 2ème main</li>
                <li>• As splittés : 1 carte seulement</li>
                <li>• Re-split parfois autorisé</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-2">🏳️ Surrender (Abandon)</h3>
              <p className="text-sm mb-2">Abandonner et récupérer 50%</p>
              <ul className="text-xs space-y-1">
                <li>• Pas toujours disponible</li>
                <li>• Early : avant carte croupier</li>
                <li>• Late : après vérification BJ</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded p-4">
              <h3 className="font-bold text-yellow-800 mb-2">🛡️ Insurance (Assurance)</h3>
              <p className="text-sm mb-2">Pari secondaire si croupier As</p>
              <ul className="text-xs space-y-1">
                <li>• Coût : 50% mise initiale</li>
                <li>• Paie 2:1 si BJ croupier</li>
                <li>• Généralement -EV</li>
              </ul>
            </div>
          </div>
        </div>

        {/* La stratégie de base */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📊 La Stratégie de Base - Votre Bible
          </h2>
          <p className="mb-6">
            La stratégie de base est un tableau mathématiquement optimal qui vous dit exactement 
            quoi faire dans chaque situation. Mémorisez-la pour réduire l'avantage maison à ~0.5%.
          </p>
          
          <div className="bg-white text-gray-900 rounded p-6">
            <h3 className="font-bold mb-4">Tableau Simplifié - Mains Dures</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2">Votre Main</th>
                    <th className="p-1">2</th>
                    <th className="p-1">3</th>
                    <th className="p-1">4</th>
                    <th className="p-1">5</th>
                    <th className="p-1">6</th>
                    <th className="p-1">7</th>
                    <th className="p-1">8</th>
                    <th className="p-1">9</th>
                    <th className="p-1">10</th>
                    <th className="p-1">A</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-bold">17-21</td>
                    <td colSpan="10" className="text-center bg-red-100">S (Stand)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">16</td>
                    <td colSpan="6" className="text-center bg-red-100">S</td>
                    <td colSpan="4" className="text-center bg-green-100">H</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">15</td>
                    <td colSpan="6" className="text-center bg-red-100">S</td>
                    <td colSpan="4" className="text-center bg-green-100">H</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">13-14</td>
                    <td colSpan="5" className="text-center bg-red-100">S</td>
                    <td colSpan="5" className="text-center bg-green-100">H</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">12</td>
                    <td colSpan="2" className="text-center bg-green-100">H</td>
                    <td colSpan="3" className="text-center bg-red-100">S</td>
                    <td colSpan="5" className="text-center bg-green-100">H</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">11</td>
                    <td colSpan="10" className="text-center bg-blue-100">D (Double)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">10</td>
                    <td colSpan="9" className="text-center bg-blue-100">D</td>
                    <td className="text-center bg-green-100">H</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">9</td>
                    <td className="text-center bg-green-100">H</td>
                    <td colSpan="4" className="text-center bg-blue-100">D</td>
                    <td colSpan="5" className="text-center bg-green-100">H</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-bold">5-8</td>
                    <td colSpan="10" className="text-center bg-green-100">H</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2 text-gray-600">
              S = Stand | H = Hit | D = Double (sinon Hit) | Tableau pour 4-8 decks, S17
            </p>
          </div>
        </div>

        {/* Règles pour les paires */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            ✂️ Stratégie pour les Paires
          </h2>
          
          <div className="bg-orange-50 rounded p-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-orange-800 mb-3">Toujours Splitter</h3>
                <ul className="space-y-2 text-sm">
                  <li className="bg-white rounded p-2">
                    <strong>As-As :</strong> Toujours split (une carte par As)
                  </li>
                  <li className="bg-white rounded p-2">
                    <strong>8-8 :</strong> Toujours split (16 = pire main)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-orange-800 mb-3">Jamais Splitter</h3>
                <ul className="space-y-2 text-sm">
                  <li className="bg-white rounded p-2">
                    <strong>10-10 :</strong> 20 est trop fort pour risquer
                  </li>
                  <li className="bg-white rounded p-2">
                    <strong>5-5 :</strong> Jouez comme un 10 (double)
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 bg-white rounded p-4">
              <h3 className="font-bold mb-2">Autres Paires (Dépend du Croupier)</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>9-9 :</strong> Split vs 2-9 (sauf 7), Stand vs 7,10,A</li>
                <li>• <strong>7-7 :</strong> Split vs 2-7, Hit vs 8+</li>
                <li>• <strong>6-6 :</strong> Split vs 2-6, Hit vs 7+</li>
                <li>• <strong>4-4 :</strong> Split vs 5-6 seulement (si DAS)</li>
                <li>• <strong>3-3, 2-2 :</strong> Split vs 2-7, Hit vs 8+</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comptage de cartes */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🧮 Le Comptage de Cartes - Hi-Lo System
          </h2>
          <p className="mb-4">
            Le comptage n'est pas illégal mais les casinos peuvent vous bannir. 
            Le système Hi-Lo est le plus simple et efficace pour débuter.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Valeurs des Cartes</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>• 2, 3, 4, 5, 6</span>
                  <span className="font-bold">+1</span>
                </li>
                <li className="flex justify-between">
                  <span>• 7, 8, 9</span>
                  <span className="font-bold">0</span>
                </li>
                <li className="flex justify-between">
                  <span>• 10, J, Q, K, A</span>
                  <span className="font-bold">-1</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Comment Utiliser</h3>
              <ol className="text-sm space-y-1">
                <li>1. Commencez à 0 après mélange</li>
                <li>2. Ajoutez/soustrayez pour chaque carte</li>
                <li>3. Divisez par decks restants = True Count</li>
                <li>4. TC +2 ou plus = augmentez les mises</li>
                <li>5. TC négatif = mise minimum</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-red-800/50 rounded p-4 mt-4">
            <p className="text-sm">
              ⚠️ <strong>Attention :</strong> Nécessite beaucoup de pratique. 
              Les casinos utilisent des sabots 6-8 decks et mélangent souvent pour limiter l'efficacité.
            </p>
          </div>
        </div>

        {/* Variations de règles */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🎲 Variations de Règles et Impact
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="text-left p-2">Règle</th>
                  <th className="text-center p-2">Impact sur House Edge</th>
                  <th className="text-left p-2">Commentaire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Blackjack paie 6:5</td>
                  <td className="text-center text-red-600 font-bold">+1.39%</td>
                  <td>À ÉVITER !</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Croupier reste sur Soft 17</td>
                  <td className="text-center text-green-600 font-bold">-0.22%</td>
                  <td>Favorable</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Double après split (DAS)</td>
                  <td className="text-center text-green-600 font-bold">-0.14%</td>
                  <td>Recherchez</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Surrender autorisé</td>
                  <td className="text-center text-green-600 font-bold">-0.08%</td>
                  <td>Bon bonus</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Re-split des As</td>
                  <td className="text-center text-green-600 font-bold">-0.06%</td>
                  <td>Rare mais bon</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Un seul deck</td>
                  <td className="text-center text-green-600 font-bold">-0.48%</td>
                  <td>Excellent si trouvé</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">8 decks vs 6 decks</td>
                  <td className="text-center text-red-600">+0.02%</td>
                  <td>Négligeable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Gestion de bankroll */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💰 Gestion de Bankroll au Blackjack
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">Pour Joueurs Récréatifs</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Bankroll :</strong> 20-40x mise minimum</li>
                <li>• <strong>Session :</strong> Max 10% bankroll total</li>
                <li>• <strong>Mise de base :</strong> 1-2% bankroll</li>
                <li>• <strong>Stop loss :</strong> -20 unités</li>
                <li>• <strong>Stop win :</strong> +10-15 unités</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">Pour Compteurs de Cartes</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Bankroll :</strong> 100-200x mise max</li>
                <li>• <strong>Spread :</strong> 1-8 ou 1-12 unités</li>
                <li>• <strong>Kelly Criterion :</strong> Edge/Variance</li>
                <li>• <strong>Risk of Ruin :</strong> {'<'} 5% visé</li>
                <li>• <strong>Sessions :</strong> 2-3h max (fatigue)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded p-4 mt-4">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ Règle d'Or</h3>
            <p className="text-sm">
              Ne jouez JAMAIS avec de l'argent dont vous avez besoin. Le Blackjack reste 
              un jeu avec variance, même avec un edge positif.
            </p>
          </div>
        </div>

        {/* Erreurs courantes */}
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            ❌ Erreurs Courantes à Éviter
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Prendre l'assurance</strong>
                <p className="text-xs">Même avec un 20, c'est -EV à long terme</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Ne pas splitter 8-8</strong>
                <p className="text-xs">16 est horrible, deux 8 ont plus de potentiel</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Tirer sur 12 vs 2-3</strong>
                <p className="text-xs">Stand ! Le croupier peut bust</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Imiter le croupier</strong>
                <p className="text-xs">Toujours tirer jusqu'à 17 = 5.5% house edge!</p>
              </li>
            </ul>
            
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Jouer au feeling</strong>
                <p className="text-xs">Les maths {'>'} intuition, toujours</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Augmenter après pertes</strong>
                <p className="text-xs">Martingale = route vers la ruine</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Blâmer les autres joueurs</strong>
                <p className="text-xs">Leurs décisions n'affectent pas vos odds</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Jouer au 6:5 Blackjack</strong>
                <p className="text-xs">+1.39% pour le casino, inacceptable</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Side bets */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            🎰 Side Bets - À Éviter (Sauf Exception)
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-2">Side Bet</th>
                  <th className="text-center p-2">House Edge</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Perfect Pairs</td>
                  <td className="text-center text-red-600 font-bold">2-11%</td>
                  <td>Paire dans vos 2 premières cartes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">21+3</td>
                  <td className="text-center text-red-600 font-bold">3-7%</td>
                  <td>Poker hand avec vos 2 + dealer up</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Lucky Ladies</td>
                  <td className="text-center text-red-600 font-bold">17-25%</td>
                  <td>Vos 2 cartes = 20</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Bust It</td>
                  <td className="text-center text-red-600 font-bold">6-8%</td>
                  <td>Croupier bust avec 3+ cartes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Exception : Certains side bets sont comptables et peuvent avoir +EV dans des situations spécifiques.
          </p>
        </div>

        {/* Conseils pro */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            💎 Conseils de Pro pour Exceller
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Technique & Stratégie</h3>
              <ul className="text-sm space-y-2">
                <li>✓ Mémorisez la stratégie de base parfaitement</li>
                <li>✓ Pratiquez le comptage chez vous d'abord</li>
                <li>✓ Utilisez des apps pour vous entraîner</li>
                <li>✓ Regardez plusieurs tables avant de jouer</li>
                <li>✓ Préférez les tables S17 et 3:2</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Mental & Discipline</h3>
              <ul className="text-sm space-y-2">
                <li>✓ Jamais d'alcool en jouant sérieusement</li>
                <li>✓ Partez après 2-3h maximum</li>
                <li>✓ Acceptez la variance court terme</li>
                <li>✓ Tenez un journal de sessions</li>
                <li>✓ Célébrez la bonne décision, pas le résultat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/machines-sous"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Machines à Sous
          </Link>
          <Link 
            href="/guide-casino/roulette"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            La Roulette
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}