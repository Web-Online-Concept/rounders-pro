// app/guide-casino/roulette/page.js
import Link from 'next/link';

export default function RoulettePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Roulette</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎡 La Roulette Maîtrisée
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          La roulette est le jeu de casino le plus iconique. Simple en apparence mais riche en possibilités, 
          elle fascine par son élégance. Découvrez les variantes, probabilités, systèmes de mise et 
          stratégies pour optimiser votre expérience à la roulette.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Les types de roulette */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Les Trois Types de Roulette
          </h2>
          
          <div className="space-y-4">
            {/* Européenne */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">🇪🇺 Roulette Européenne (Recommandée)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">La version standard et la plus avantageuse</p>
                  <ul className="text-xs space-y-1">
                    <li>• 37 numéros : 0 à 36</li>
                    <li>• Un seul zéro (vert)</li>
                    <li>• 18 rouges, 18 noirs</li>
                    <li>• Disposition alternée rouge/noir</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-2">Avantage Maison :</p>
                  <p className="text-2xl font-bold text-green-600">2.70%</p>
                  <p className="text-xs mt-2">Sur tous les paris</p>
                </div>
              </div>
            </div>

            {/* Française */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🇫🇷 Roulette Française (La Meilleure)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Européenne avec règles spéciales favorables</p>
                  <ul className="text-xs space-y-1">
                    <li>• Même roue que l'Européenne</li>
                    <li>• Règle "La Partage" ou "En Prison"</li>
                    <li>• Tapis en français</li>
                    <li>• Mise minimum souvent plus élevée</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-2">Avantage Maison :</p>
                  <p className="text-2xl font-bold text-blue-600">1.35%</p>
                  <p className="text-xs mt-2">Sur chances simples avec La Partage</p>
                </div>
              </div>
            </div>

            {/* Américaine */}
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">🇺🇸 Roulette Américaine (À Éviter)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Version défavorable avec double zéro</p>
                  <ul className="text-xs space-y-1">
                    <li>• 38 numéros : 0, 00 à 36</li>
                    <li>• Deux zéros (0 et 00)</li>
                    <li>• Ordre des numéros différent</li>
                    <li>• Plus répandue aux USA</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-2">Avantage Maison :</p>
                  <p className="text-2xl font-bold text-red-600">5.26%</p>
                  <p className="text-xs mt-2">Presque le double !</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Les types de paris */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Tous les Types de Paris à la Roulette
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Paris intérieurs */}
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-800 mb-3">🎯 Paris Intérieurs</h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Plein (Straight Up)</strong>
                      <p className="text-xs">1 numéro</p>
                    </div>
                    <span className="font-bold text-green-600">35:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Cheval (Split)</strong>
                      <p className="text-xs">2 numéros adjacents</p>
                    </div>
                    <span className="font-bold text-green-600">17:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Transversale (Street)</strong>
                      <p className="text-xs">3 numéros d'une ligne</p>
                    </div>
                    <span className="font-bold text-green-600">11:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Carré (Corner)</strong>
                      <p className="text-xs">4 numéros en carré</p>
                    </div>
                    <span className="font-bold text-green-600">8:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Sixain (Line)</strong>
                      <p className="text-xs">6 numéros (2 lignes)</p>
                    </div>
                    <span className="font-bold text-green-600">5:1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Paris extérieurs */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">📊 Paris Extérieurs</h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Colonne</strong>
                      <p className="text-xs">12 numéros verticaux</p>
                    </div>
                    <span className="font-bold text-blue-600">2:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Douzaine</strong>
                      <p className="text-xs">1-12, 13-24, 25-36</p>
                    </div>
                    <span className="font-bold text-blue-600">2:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Rouge/Noir</strong>
                      <p className="text-xs">18 numéros</p>
                    </div>
                    <span className="font-bold text-gray-600">1:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Pair/Impair</strong>
                      <p className="text-xs">18 numéros</p>
                    </div>
                    <span className="font-bold text-gray-600">1:1</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-sm">Manque/Passe</strong>
                      <p className="text-xs">1-18 / 19-36</p>
                    </div>
                    <span className="font-bold text-gray-600">1:1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Règles spéciales */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎰 Règles Spéciales Favorables
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">La Partage</h3>
              <p className="text-sm mb-2">
                Si le zéro sort sur une chance simple (rouge/noir, pair/impair, manque/passe), 
                vous récupérez la moitié de votre mise.
              </p>
              <p className="text-xs bg-white/20 rounded p-2">
                Réduit l'avantage maison à 1.35% sur ces paris
              </p>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">En Prison</h3>
              <p className="text-sm mb-2">
                Alternative à La Partage : votre mise reste "en prison" pour le tour suivant. 
                Si vous gagnez, vous récupérez votre mise sans gain.
              </p>
              <p className="text-xs bg-white/20 rounded p-2">
                Même effet mathématique que La Partage
              </p>
            </div>
          </div>
        </div>

        {/* Probabilités et mathématiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🧮 Probabilités et Mathématiques
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-100">
                  <th className="text-left p-2">Type de Pari</th>
                  <th className="text-center p-2">Numéros Couverts</th>
                  <th className="text-center p-2">Probabilité EU</th>
                  <th className="text-center p-2">Paiement</th>
                  <th className="text-center p-2">Espérance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Plein</td>
                  <td className="text-center">1</td>
                  <td className="text-center">2.70%</td>
                  <td className="text-center">35:1</td>
                  <td className="text-center text-red-600">-2.70%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Cheval</td>
                  <td className="text-center">2</td>
                  <td className="text-center">5.41%</td>
                  <td className="text-center">17:1</td>
                  <td className="text-center text-red-600">-2.70%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Transversale</td>
                  <td className="text-center">3</td>
                  <td className="text-center">8.11%</td>
                  <td className="text-center">11:1</td>
                  <td className="text-center text-red-600">-2.70%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Carré</td>
                  <td className="text-center">4</td>
                  <td className="text-center">10.81%</td>
                  <td className="text-center">8:1</td>
                  <td className="text-center text-red-600">-2.70%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Colonne/Douzaine</td>
                  <td className="text-center">12</td>
                  <td className="text-center">32.43%</td>
                  <td className="text-center">2:1</td>
                  <td className="text-center text-red-600">-2.70%</td>
                </tr>
                <tr className="border-b bg-green-50">
                  <td className="p-2">Chances Simples</td>
                  <td className="text-center">18</td>
                  <td className="text-center">48.65%</td>
                  <td className="text-center">1:1</td>
                  <td className="text-center text-green-600">-1.35%*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            * Avec La Partage sur roulette française
          </p>
        </div>

        {/* Systèmes de mise */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            📈 Systèmes de Mise Populaires
          </h2>
          
          <div className="space-y-4">
            {/* Martingale */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🔴 Martingale Classique</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Doubler après chaque perte</p>
                  <ul className="text-xs space-y-1">
                    <li>• Mise : 1-2-4-8-16-32...</li>
                    <li>• Sur chances simples</li>
                    <li>• Récupère toutes les pertes + 1</li>
                    <li>• Simple à comprendre</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded p-3">
                  <p className="font-semibold text-xs mb-1">⚠️ DANGER</p>
                  <ul className="text-xs space-y-1 text-red-700">
                    <li>• Limites de table atteintes vite</li>
                    <li>• 7 pertes = mise x128 !</li>
                    <li>• Ruine rapide possible</li>
                    <li>• Ne change pas les odds</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fibonacci */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🔢 Système Fibonacci</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Suite mathématique célèbre</p>
                  <ul className="text-xs space-y-1">
                    <li>• Mise : 1-1-2-3-5-8-13-21...</li>
                    <li>• Reculer de 2 après gain</li>
                    <li>• Progression plus douce</li>
                    <li>• Moins risqué que Martingale</li>
                  </ul>
                </div>
                <div className="bg-yellow-100 rounded p-3">
                  <p className="font-semibold text-xs mb-1">Réalité</p>
                  <ul className="text-xs space-y-1">
                    <li>• Toujours progression négative</li>
                    <li>• Pertes s'accumulent</li>
                    <li>• Limites atteintes aussi</li>
                    <li>• Aucun avantage math</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* D'Alembert */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">➕ Système D'Alembert</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Progression arithmétique simple</p>
                  <ul className="text-xs space-y-1">
                    <li>• +1 unité après perte</li>
                    <li>• -1 unité après gain</li>
                    <li>• Ex: 5-6-7-6-5-6...</li>
                    <li>• Plus stable</li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded p-3">
                  <p className="font-semibold text-xs mb-1">Le moins pire</p>
                  <ul className="text-xs space-y-1">
                    <li>• Progression lente</li>
                    <li>• Risque modéré</li>
                    <li>• Sessions plus longues</li>
                    <li>• Toujours -EV</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Labouchere */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">📝 Système Labouchere</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Système de séquence personnalisée</p>
                  <ul className="text-xs space-y-1">
                    <li>• Créer séquence : 1-2-3-4</li>
                    <li>• Miser : Premier + Dernier</li>
                    <li>• Gagné : Barrer les deux</li>
                    <li>• Perdu : Ajouter à la fin</li>
                  </ul>
                </div>
                <div className="bg-purple-100 rounded p-3">
                  <p className="font-semibold text-xs mb-1">Complexité</p>
                  <ul className="text-xs space-y-1">
                    <li>• Nécessite papier/crayon</li>
                    <li>• Calculs constants</li>
                    <li>• Séquences s'allongent</li>
                    <li>• Illusion de contrôle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* La vérité sur les systèmes */}
        <div className="bg-red-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ⚠️ La Vérité sur les Systèmes de Mise
          </h2>
          <div className="bg-white/20 rounded p-6">
            <p className="text-lg font-semibold mb-4">
              AUCUN système ne peut battre l'avantage mathématique du casino
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>Chaque tour est indépendant - la roue n'a pas de mémoire</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>Les progressions négatives mènent à des pertes catastrophiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>Les limites de table existent pour stopper les systèmes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-300 mr-2">•</span>
                <span>Si ça marchait, les casinos auraient fermé depuis longtemps</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stratégies intelligentes */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            💡 Stratégies Intelligentes (Qui Fonctionnent)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎯 Optimisation des Règles</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>1.</strong> Jouez UNIQUEMENT roulette européenne/française
                </li>
                <li className="bg-white rounded p-2">
                  <strong>2.</strong> Privilégiez les tables avec La Partage
                </li>
                <li className="bg-white rounded p-2">
                  <strong>3.</strong> Évitez la roulette américaine (-5.26%)
                </li>
                <li className="bg-white rounded p-2">
                  <strong>4.</strong> Chances simples = meilleur pari (1.35%)
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">💰 Gestion de Bankroll</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>1.</strong> Budget fixe par session (jamais dépassé)
                </li>
                <li className="bg-white rounded p-2">
                  <strong>2.</strong> Mises plates de 1-2% du budget
                </li>
                <li className="bg-white rounded p-2">
                  <strong>3.</strong> Stop-loss à -50% de la session
                </li>
                <li className="bg-white rounded p-2">
                  <strong>4.</strong> Stop-win à +30-50% du budget
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Paris annoncés */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🎰 Paris Annoncés (Call Bets)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">Voisins du Zéro</h3>
              <p className="text-xs mb-2">17 numéros autour du 0 (22-25)</p>
              <ul className="text-xs space-y-1">
                <li>• Coût : 9 jetons</li>
                <li>• Couvre 45.9% de la roue</li>
                <li>• Gains : 8 à 17 jetons</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">Tiers du Cylindre</h3>
              <p className="text-xs mb-2">12 numéros opposés au zéro</p>
              <ul className="text-xs space-y-1">
                <li>• Coût : 6 jetons</li>
                <li>• Couvre 32.4% de la roue</li>
                <li>• Gain : 17 jetons</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">Orphelins</h3>
              <p className="text-xs mb-2">8 numéros restants</p>
              <ul className="text-xs space-y-1">
                <li>• Coût : 5 jetons</li>
                <li>• Couvre 21.6% de la roue</li>
                <li>• Gains : 17 ou 35 jetons</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">Voisins d'un Numéro</h3>
              <p className="text-xs mb-2">Un numéro + 2 voisins de chaque côté</p>
              <ul className="text-xs space-y-1">
                <li>• Coût : 5 jetons</li>
                <li>• 5 numéros consécutifs</li>
                <li>• Gain : 35 jetons</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mythes et réalités */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            🎭 Mythes vs Réalités de la Roulette
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800/50 rounded p-4">
                <h3 className="font-bold mb-2">❌ MYTHE</h3>
                <p className="text-sm">"Les numéros chauds/froids existent"</p>
              </div>
              <div className="bg-green-800/50 rounded p-4">
                <h3 className="font-bold mb-2">✅ RÉALITÉ</h3>
                <p className="text-sm">Chaque tour est indépendant, probabilité toujours identique</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800/50 rounded p-4">
                <h3 className="font-bold mb-2">❌ MYTHE</h3>
                <p className="text-sm">"Les croupiers peuvent viser des secteurs"</p>
              </div>
              <div className="bg-green-800/50 rounded p-4">
                <h3 className="font-bold mb-2">✅ RÉALITÉ</h3>
                <p className="text-sm">Vitesse roue + bille = résultat 100% aléatoire</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800/50 rounded p-4">
                <h3 className="font-bold mb-2">❌ MYTHE</h3>
                <p className="text-sm">"Après 10 rouges, le noir est dû"</p>
              </div>
              <div className="bg-green-800/50 rounded p-4">
                <h3 className="font-bold mb-2">✅ RÉALITÉ</h3>
                <p className="text-sm">Sophisme du joueur - toujours 48.65% pour noir</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-800/50 rounded p-4">
                <h3 className="font-bold mb-2">❌ MYTHE</h3>
                <p className="text-sm">"Les roulettes sont truquées"</p>
              </div>
              <div className="bg-green-800/50 rounded p-4">
                <h3 className="font-bold mb-2">✅ RÉALITÉ</h3>
                <p className="text-sm">Casinos licenciés = équipement vérifié régulièrement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roulette live */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎥 Roulette Live vs RNG
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Roulette Live</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Croupier réel, roue physique</li>
                <li>✓ Transparence totale</li>
                <li>✓ Ambiance casino authentique</li>
                <li>✓ Paris annoncés disponibles</li>
                <li>✗ Plus lent (30-60 sec/tour)</li>
                <li>✗ Mises min plus élevées</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Roulette RNG</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Très rapide (5-10 sec/tour)</li>
                <li>✓ Mises très faibles possibles</li>
                <li>✓ Mode démo disponible</li>
                <li>✓ Statistiques détaillées</li>
                <li>✗ Moins immersif</li>
                <li>✗ Confiance au RNG requise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Budget et session */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💸 Plan de Session Optimal
          </h2>
          
          <div className="bg-green-50 rounded p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                <div>
                  <strong>Budget Session</strong>
                  <p className="text-sm">20-50 unités de mise de base</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                <div>
                  <strong>Mise de Base</strong>
                  <p className="text-sm">2-5% du budget session</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                <div>
                  <strong>Types de Paris</strong>
                  <p className="text-sm">70% chances simples, 30% autres</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                <div>
                  <strong>Durée Maximale</strong>
                  <p className="text-sm">1-2 heures (fatigue = mauvaises décisions)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">5</span>
                <div>
                  <strong>Objectifs Réalistes</strong>
                  <p className="text-sm">Divertissement avant tout, gains = bonus</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-red-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4">
            🎯 Conseils d'Expert pour la Roulette
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Toujours européenne/française :</strong> 2.7% vs 5.26% fait une énorme différence
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Chances simples avec La Partage :</strong> Le meilleur pari mathématiquement (1.35%)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Oubliez les systèmes :</strong> Aucun ne change l'avantage maison
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Budget strict :</strong> Décidez avant, respectez toujours
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>C'est un divertissement :</strong> Le casino gagne toujours à long terme
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/blackjack-pro"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Blackjack Pro
          </Link>
          <Link 
            href="/guide-casino/baccarat"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Le Baccarat
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}