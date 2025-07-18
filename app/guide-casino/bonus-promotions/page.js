// app/guide-casino/bonus-promotions/page.js
import Link from 'next/link';

export default function BonusPromotionsPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Bonus et Promotions</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💰 Bonus et Promotions
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les bonus casino peuvent doubler ou tripler votre budget de jeu, mais attention aux pièges ! 
          Apprenez à décrypter les conditions, calculer la vraie valeur des offres et maximiser 
          chaque promotion pour jouer plus longtemps avec l'argent du casino.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Types de bonus */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Les Différents Types de Bonus Casino
          </h2>
          
          <div className="space-y-4">
            {/* Bonus de bienvenue */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">🎁 Bonus de Bienvenue</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Le plus généreux, réservé aux nouveaux joueurs</p>
                  <ul className="text-xs space-y-1">
                    <li>• 100-200% sur 1er dépôt</li>
                    <li>• Souvent étalé sur 2-3 dépôts</li>
                    <li>• Free spins inclus parfois</li>
                    <li>• Montants jusqu'à 1000€+</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-2">Exemple typique :</p>
                  <p className="text-xs">100% jusqu'à 500€ + 100 free spins</p>
                  <p className="text-xs mt-1">= Déposez 500€, jouez avec 1000€</p>
                  <p className="text-orange-600 font-bold text-xs mt-2">Wagering : x30-40 habituel</p>
                </div>
              </div>
            </div>

            {/* Bonus sans dépôt */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">🎰 Bonus Sans Dépôt</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Argent gratuit juste pour l'inscription</p>
                  <ul className="text-xs space-y-1">
                    <li>• Montants : 5-20€ généralement</li>
                    <li>• Ou 10-50 free spins</li>
                    <li>• Test sans risque</li>
                    <li>• Gains souvent plafonnés</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded p-3">
                  <p className="font-semibold text-xs mb-2">⚠️ Attention :</p>
                  <ul className="text-xs space-y-1">
                    <li>• Wagering très élevé (x50-70)</li>
                    <li>• Retrait max limité (50-100€)</li>
                    <li>• Vérification ID obligatoire</li>
                    <li>• Pays restreints parfois</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Free spins */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎡 Free Spins</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Tours gratuits sur slots spécifiques</p>
                  <ul className="text-xs space-y-1">
                    <li>• Welcome spins : avec dépôt</li>
                    <li>• No deposit spins : gratuits</li>
                    <li>• Wager-free spins : les meilleurs</li>
                    <li>• Daily/Weekly spins : fidélité</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-2">Valeur réelle :</p>
                  <p className="text-xs">100 spins à 0.10€ = 10€ théorique</p>
                  <p className="text-xs">RTP 96% = 9.60€ espérance</p>
                  <p className="text-xs">Wagering x30 = 0.32€ valeur finale</p>
                  <p className="text-blue-600 font-bold text-xs mt-2">Très surévalués !</p>
                </div>
              </div>
            </div>

            {/* Cashback */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-3">💸 Cashback</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Récupération d'un % des pertes</p>
                  <ul className="text-xs space-y-1">
                    <li>• 5-20% des pertes nettes</li>
                    <li>• Hebdomadaire généralement</li>
                    <li>• Cash ou bonus</li>
                    <li>• VIP : jusqu'à 25%+</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-xs mb-2">Calcul exemple :</p>
                  <p className="text-xs">Perdu 1000€ en 1 semaine</p>
                  <p className="text-xs">Cashback 10% = 100€</p>
                  <p className="text-xs">Si bonus : wagering à vérifier</p>
                  <p className="text-green-600 font-bold text-xs mt-2">Excellent pour gros joueurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprendre le wagering */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Comprendre le Wagering (Mise Requise)
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <p className="text-lg font-semibold mb-4">
              Le wagering est le montant total que vous devez miser avant de pouvoir retirer
            </p>
            
            <div className="bg-white text-gray-900 rounded p-4 mb-4">
              <h3 className="font-bold mb-2">Formule de Base :</h3>
              <p className="text-center text-xl font-mono">
                (Bonus + Dépôt?) × Wagering = Mise Totale Requise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 rounded p-4">
                <h4 className="font-bold mb-2">Exemple Bonus Seul (x30)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Dépôt : 100€</li>
                  <li>• Bonus : 100€</li>
                  <li>• Wagering : 100€ × 30 = 3000€</li>
                  <li>• À miser : 3000€</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded p-4">
                <h4 className="font-bold mb-2">Exemple Bonus+Dépôt (x30)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Dépôt : 100€</li>
                  <li>• Bonus : 100€</li>
                  <li>• Wagering : 200€ × 30 = 6000€</li>
                  <li>• À miser : 6000€ (!)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution des jeux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            📊 Contribution des Jeux au Wagering
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-blue-800 font-semibold">
              ⚠️ Tous les jeux ne comptent pas de la même façon pour le wagering !
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="text-left p-2">Type de Jeu</th>
                  <th className="text-center p-2">Contribution Typique</th>
                  <th className="text-center p-2">Mise 100€ Compte Pour</th>
                  <th className="text-left p-2">Raison</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Slots</td>
                  <td className="text-center text-green-600 font-bold">100%</td>
                  <td className="text-center">100€</td>
                  <td className="text-xs">House edge élevé</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-semibold">Slots Jackpot</td>
                  <td className="text-center text-orange-600 font-bold">0-20%</td>
                  <td className="text-center">0-20€</td>
                  <td className="text-xs">RTP trop variable</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Roulette</td>
                  <td className="text-center text-blue-600 font-bold">10-20%</td>
                  <td className="text-center">10-20€</td>
                  <td className="text-xs">Faible house edge</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-semibold">Blackjack</td>
                  <td className="text-center text-orange-600 font-bold">5-10%</td>
                  <td className="text-center">5-10€</td>
                  <td className="text-xs">Jouable +EV</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Baccarat</td>
                  <td className="text-center text-orange-600 font-bold">5-10%</td>
                  <td className="text-center">5-10€</td>
                  <td className="text-xs">Très faible edge</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-semibold">Video Poker</td>
                  <td className="text-center text-red-600 font-bold">0-10%</td>
                  <td className="text-center">0-10€</td>
                  <td className="text-xs">Skill-based</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Craps/Dice</td>
                  <td className="text-center text-red-600 font-bold">0%</td>
                  <td className="text-center">0€</td>
                  <td className="text-xs">Souvent exclus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Calcul valeur réelle */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🧮 Calculer la Vraie Valeur d'un Bonus
          </h2>
          
          <div className="bg-green-50 rounded p-6">
            <h3 className="font-bold text-green-800 mb-4">Formule de l'Expected Value (EV)</h3>
            
            <div className="bg-white rounded p-4 mb-4">
              <p className="text-center text-lg font-mono">
                EV = Bonus - (Wagering × House Edge) - Variance Risk
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">Exemple 1 : Bonus 100€, Wagering x30, Slots 96% RTP</h4>
                <ul className="text-sm space-y-1">
                  <li>• Bonus : 100€</li>
                  <li>• Wagering total : 100€ × 30 = 3000€</li>
                  <li>• House edge : 4% (100-96)</li>
                  <li>• Perte attendue : 3000€ × 4% = 120€</li>
                  <li className="font-bold text-red-600">• EV = 100€ - 120€ = -20€ (Négatif !)</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">Exemple 2 : Bonus 100€, Wagering x20, Slots 97% RTP</h4>
                <ul className="text-sm space-y-1">
                  <li>• Bonus : 100€</li>
                  <li>• Wagering total : 100€ × 20 = 2000€</li>
                  <li>• House edge : 3%</li>
                  <li>• Perte attendue : 2000€ × 3% = 60€</li>
                  <li className="font-bold text-green-600">• EV = 100€ - 60€ = +40€ (Positif !)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stratégies bonus */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            🎯 Stratégies pour Maximiser les Bonus
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">📈 Low Variance Strategy</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  • Slots faible volatilité uniquement
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Mises minimum (0.20-0.50€)
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Sessions longues et patientes
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Objectif : compléter wagering
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Succès : 70-80% mais gains faibles
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">🚀 High Risk High Reward</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  • Slots haute volatilité
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Mises moyennes (1-2€)
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Viser gros multiplicateurs
                </li>
                <li className="bg-white/10 rounded p-2">
                  • All-in si gros gain early
                </li>
                <li className="bg-white/10 rounded p-2">
                  • Succès : 20-30% mais gains ++
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-400/20 rounded p-4 mt-6">
            <p className="text-center font-semibold">
              💡 Pro Tip : La stratégie dépend de votre tolérance au risque et objectifs
            </p>
          </div>
        </div>

        {/* Types de promotions régulières */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🔄 Promotions Régulières et Programmes VIP
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">📅 Promotions Récurrentes</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Reload Bonus :</strong> 25-50% hebdo/mensuel
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Weekend Booster :</strong> Free spins vendredi
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Happy Hours :</strong> Bonus horaires live
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Tournois Slots :</strong> Prize pools partagés
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Drops & Wins :</strong> Prix aléatoires
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-800 mb-3">👑 Programme VIP/Fidélité</h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2">
                  <p className="font-semibold text-sm">Niveau Bronze</p>
                  <p className="text-xs">• Cashback 5% • Birthday bonus</p>
                </div>
                <div className="bg-white rounded p-2">
                  <p className="font-semibold text-sm">Niveau Argent</p>
                  <p className="text-xs">• Cashback 10% • Reload 50%</p>
                </div>
                <div className="bg-white rounded p-2">
                  <p className="font-semibold text-sm">Niveau Or</p>
                  <p className="text-xs">• Cashback 15% • Manager dédié</p>
                </div>
                <div className="bg-white rounded p-2">
                  <p className="font-semibold text-sm">Niveau Platine</p>
                  <p className="text-xs">• Cashback 20% • Voyages offerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pièges à éviter */}
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            ⚠️ Pièges à Éviter Absolument
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Wagering sur Bonus+Dépôt</strong>
                <p className="text-xs">Double le wagering réel, fuyez !</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Délais trop courts</strong>
                <p className="text-xs">7 jours pour x40 = impossible</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Max bet déguisé</strong>
                <p className="text-xs">"30% du bonus max" = piège</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Jeux exclus cachés</strong>
                <p className="text-xs">Vos préférés à 0% contribution</p>
              </li>
            </ul>
            
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Max win capé bas</strong>
                <p className="text-xs">Bonus 500€, max win 1000€ = nul</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Pays exclus après coup</strong>
                <p className="text-xs">Bonus annulé à la vérification</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Sticky bonus</strong>
                <p className="text-xs">Non retirable = valeur ÷ 2</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Codes "oubliés"</strong>
                <p className="text-xs">Pas de code = pas de bonus</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bonus hunting */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Le Bonus Hunting Professionnel
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <p className="mb-4">
              Certains joueurs se spécialisent dans l'exploitation optimale des bonus (+EV uniquement)
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/20 rounded p-4">
                <h3 className="font-bold mb-2">✅ Critères de Sélection</h3>
                <ul className="text-sm space-y-1">
                  <li>• Wagering {'<'} x25 (bonus seul)</li>
                  <li>• RTP slots 97%+ disponibles</li>
                  <li>• Pas de max bet restrictif</li>
                  <li>• Délai 30+ jours</li>
                  <li>• Casino réputé uniquement</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded p-4">
                <h3 className="font-bold mb-2">📊 Tracking Essentiel</h3>
                <ul className="text-sm space-y-1">
                  <li>• Spreadsheet détaillé</li>
                  <li>• EV calculé par bonus</li>
                  <li>• Wagering progressé</li>
                  <li>• Dates limites</li>
                  <li>• ROI global mensuel</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-800/50 rounded p-3 mt-4">
              <p className="text-sm font-semibold">
                ⚠️ Attention : Le bonus hunting peut mener à des limitations/exclusions de casinos
              </p>
            </div>
          </div>
        </div>

        {/* Cashback optimisation */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💸 Optimiser le Cashback
          </h2>
          
          <div className="bg-green-50 rounded p-6">
            <p className="text-sm mb-4">
              Le cashback est souvent la promo la plus valuable pour les joueurs réguliers
            </p>
            
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold mb-2">Cashback en Cash (Sans Wagering)</h4>
                <p className="text-sm mb-2">La perle rare - Valeur = 100% du montant</p>
                <ul className="text-xs space-y-1">
                  <li>• Jouez normalement toute la semaine</li>
                  <li>• Récupérez 10-20% des pertes</li>
                  <li>• Réinvestir ou retirer, votre choix</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-3">
                <h4 className="font-semibold mb-2">Cashback Bonus (Avec Wagering)</h4>
                <p className="text-sm mb-2">Plus commun - Valeur = 10-30% selon wagering</p>
                <ul className="text-xs space-y-1">
                  <li>• Calculez l'EV avant d'accepter</li>
                  <li>• Parfois mieux de refuser si wagering {'>'} x10</li>
                  <li>• Négociable pour VIP players</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 rounded p-3">
                <p className="text-yellow-800 font-semibold text-sm">
                  💡 Stratégie : Concentrez vos pertes sur 1 casino avec bon cashback plutôt que disperser
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guide pratique */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📋 Check-list Avant d'Accepter un Bonus
          </h2>
          
          <div className="bg-white rounded p-6">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                <div className="flex-1">
                  <strong>Lire TOUS les termes</strong>
                  <p className="text-sm text-gray-600">Ctrl+F pour "maximum", "excluded", "forfeit"</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                <div className="flex-1">
                  <strong>Calculer le wagering total</strong>
                  <p className="text-sm text-gray-600">Bonus seul ou bonus+dépôt ?</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                <div className="flex-1">
                  <strong>Vérifier contribution des jeux</strong>
                  <p className="text-sm text-gray-600">Vos jeux préférés comptent à combien ?</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                <div className="flex-1">
                  <strong>Checker max bet autorisé</strong>
                  <p className="text-sm text-gray-600">Généralement 5€ max avec bonus actif</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">5</span>
                <div className="flex-1">
                  <strong>Délai de complétion</strong>
                  <p className="text-sm text-gray-600">Réaliste par rapport au wagering ?</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">6</span>
                <div className="flex-1">
                  <strong>Max win/withdrawal</strong>
                  <p className="text-sm text-gray-600">Plafond sur les gains du bonus ?</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">7</span>
                <div className="flex-1">
                  <strong>Calculer l'EV</strong>
                  <p className="text-sm text-gray-600">Positif = GO, Négatif = réfléchir</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            💡 10 Règles d'Or des Bonus Casino
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">1.</span>
              <span className="text-gray-700">Un bonus n'est pas de l'argent gratuit - c'est un prêt avec conditions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">2.</span>
              <span className="text-gray-700">Wagering {'>'} x30 sur bonus seul = généralement -EV</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">3.</span>
              <span className="text-gray-700">Les free spins sont surévalués marketing - calculez la vraie valeur</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">4.</span>
              <span className="text-gray-700">Cashback sans wagering {'>'} tous les autres bonus</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">5.</span>
              <span className="text-gray-700">Ne changez jamais votre style de jeu pour un bonus</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">6.</span>
              <span className="text-gray-700">Lisez TOUJOURS les termes complets avant de déposer</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">7.</span>
              <span className="text-gray-700">Un petit bonus sans conditions {'>'} gros bonus impossible</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">8.</span>
              <span className="text-gray-700">Tracker votre wagering progress évite les mauvaises surprises</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">9.</span>
              <span className="text-gray-700">Les programmes VIP long terme {'>'} bonus ponctuels</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">10.</span>
              <span className="text-gray-700">Pouvoir refuser un bonus = liberté de jouer comme vous voulez</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/casino-live"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Casino Live
          </Link>
          <Link 
            href="/guide-casino/gestion-bankroll"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Gestion de Bankroll
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}