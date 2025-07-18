// app/guide-casino/erreurs-eviter/page.js
import Link from 'next/link';

export default function ErreursEviterPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Erreurs à Éviter</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🚫 Erreurs à Éviter au Casino
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les casinos comptent sur ces erreurs courantes pour maximiser leurs profits. 
          Apprenez à les identifier et les éviter pour protéger votre bankroll et jouer 
          plus intelligemment. Ces pièges ont ruiné des milliers de joueurs.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Erreurs de débutant */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🔰 Erreurs Classiques de Débutant
          </h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">1. Ne Pas Connaître les Règles</h3>
              <div className="bg-white rounded p-4">
                <p className="mb-3">
                  Jouer sans comprendre parfaitement les règles est la première erreur fatale.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-100 rounded p-3">
                    <h4 className="font-semibold text-sm mb-2">❌ Conséquences</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Décisions coûteuses</li>
                      <li>• Opportunités manquées</li>
                      <li>• Confusion et stress</li>
                      <li>• Pertes évitables</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <h4 className="font-semibold text-sm mb-2">✅ Solution</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Mode démo d'abord</li>
                      <li>• Lire règles complètes</li>
                      <li>• Regarder tutoriels</li>
                      <li>• Commencer petites mises</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">2. Ignorer l'Avantage Maison</h3>
              <div className="bg-white rounded p-4">
                <p className="mb-3">
                  Croire qu'on peut battre le casino sur le long terme est une illusion dangereuse.
                </p>
                <div className="bg-yellow-100 rounded p-3">
                  <p className="text-sm">
                    💡 Rappel : TOUS les jeux ont un avantage mathématique pour le casino
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">3. Jouer Sans Budget Défini</h3>
              <div className="bg-white rounded p-4">
                <p className="mb-3">
                  Entrer au casino sans limite claire = désastre garanti.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Définir montant maximum AVANT</li>
                  <li>• Ne jamais dépasser cette limite</li>
                  <li>• Pas de carte bancaire sur soi</li>
                  <li>• Cash uniquement = contrôle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Erreurs de gestion */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            💰 Erreurs de Gestion d'Argent
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">🔥 Chasser ses Pertes (Le Tilt)</h3>
              <div className="bg-white/10 rounded p-3">
                <p className="mb-2">La spirale infernale qui a ruiné le plus de joueurs :</p>
                <ol className="text-sm space-y-1">
                  <li>1. Perdre 100€</li>
                  <li>2. Miser 200€ pour "récupérer"</li>
                  <li>3. Perdre → Miser 400€</li>
                  <li>4. Compte vidé en 1h</li>
                </ol>
                <p className="mt-3 font-bold text-yellow-300">
                  STOP : Les pertes font partie du jeu. Acceptez et partez.
                </p>
              </div>
            </div>

            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">💸 Emprunter pour Jouer</h3>
              <div className="bg-red-900/50 rounded p-3">
                <p className="font-bold mb-2">JAMAIS. POINT FINAL.</p>
                <ul className="text-sm space-y-1">
                  <li>• Pas d'emprunt amis/famille</li>
                  <li>• Pas de crédit rapide</li>
                  <li>• Pas de découvert bancaire</li>
                  <li>• Pas de prêt sur salaire</li>
                </ul>
                <p className="mt-2 text-xs">
                  Si vous n'avez pas l'argent, vous ne jouez pas. C'est simple.
                </p>
              </div>
            </div>

            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">📈 Augmenter les Mises Après Gains</h3>
              <p className="text-sm mb-2">
                "Je suis chaud" = illusion dangereuse. Les gains passés ne prédisent RIEN.
              </p>
              <p className="text-yellow-300 font-semibold">
                Gardez les mêmes mises du début à la fin.
              </p>
            </div>
          </div>
        </div>

        {/* Erreurs psychologiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🧠 Erreurs Psychologiques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">Biais du Joueur</h3>
              <ul className="space-y-3">
                <li className="bg-white rounded p-3">
                  <strong className="text-sm">"Le rouge doit sortir"</strong>
                  <p className="text-xs">Après 10 noirs, le rouge n'est PAS "dû"</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong className="text-sm">"Cette machine va payer"</strong>
                  <p className="text-xs">Chaque spin = chances identiques</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong className="text-sm">"J'ai un système"</strong>
                  <p className="text-xs">Aucun système ne bat les maths</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">États Dangereux</h3>
              <ul className="space-y-3">
                <li className="bg-white rounded p-3">
                  <strong className="text-sm">🍺 Jouer Alcoolisé</strong>
                  <p className="text-xs">Jugement altéré = pertes garanties</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong className="text-sm">😤 Jouer Émotionnel</strong>
                  <p className="text-xs">Colère, tristesse = mauvaises décisions</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong className="text-sm">😴 Jouer Fatigué</strong>
                  <p className="text-xs">Concentration réduite = erreurs</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erreurs stratégiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎯 Erreurs Stratégiques par Jeu
          </h2>
          
          <div className="space-y-4">
            {/* Blackjack */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">♠️ Blackjack</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="bg-red-100 rounded p-3 text-sm space-y-1">
                  <li className="font-semibold">❌ Erreurs Courantes</li>
                  <li>• Prendre l'assurance</li>
                  <li>• Tirer sur 17+</li>
                  <li>• Ne pas splitter les As</li>
                  <li>• Imiter le croupier</li>
                  <li>• Jouer au feeling</li>
                </ul>
                <ul className="bg-green-100 rounded p-3 text-sm space-y-1">
                  <li className="font-semibold">✅ Bonne Pratique</li>
                  <li>• Jamais d'assurance</li>
                  <li>• Suivre stratégie de base</li>
                  <li>• Toujours splitter As/8</li>
                  <li>• Utiliser tableau référence</li>
                  <li>• Décisions mathématiques</li>
                </ul>
              </div>
            </div>

            {/* Roulette */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🎡 Roulette</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="bg-red-100 rounded p-3 text-sm space-y-1">
                  <li className="font-semibold">❌ Erreurs Courantes</li>
                  <li>• Jouer roulette américaine</li>
                  <li>• Parier sur patterns</li>
                  <li>• Systèmes progressifs</li>
                  <li>• Numéros "chauds/froids"</li>
                </ul>
                <ul className="bg-green-100 rounded p-3 text-sm space-y-1">
                  <li className="font-semibold">✅ Bonne Pratique</li>
                  <li>• Européenne uniquement</li>
                  <li>• Mises extérieures</li>
                  <li>• Mise fixe toujours</li>
                  <li>• Accepter le hasard</li>
                </ul>
              </div>
            </div>

            {/* Slots */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">🎰 Machines à Sous</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="bg-red-100 rounded p-3 text-sm space-y-1">
                  <li className="font-semibold">❌ Erreurs Courantes</li>
                  <li>• Slots à faible RTP</li>
                  <li>• Max bet constant</li>
                  <li>• Chasser les jackpots</li>
                  <li>• Croire aux cycles</li>
                </ul>
                <ul className="bg-green-100 rounded p-3 text-sm space-y-1">
                  <li className="font-semibold">✅ Bonne Pratique</li>
                  <li>• RTP 96%+ minimum</li>
                  <li>• Petites mises longues</li>
                  <li>• Pour le fun seulement</li>
                  <li>• Limites strictes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Erreurs bonus */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎁 Erreurs avec les Bonus
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Ne Pas Lire les Conditions</h3>
              <p className="text-sm mb-3">
                90% des joueurs acceptent sans lire = problèmes garantis
              </p>
              <ul className="text-sm space-y-1">
                <li>• Wagering requirements cachés</li>
                <li>• Jeux exclus de vos préférés</li>
                <li>• Max bet piégeux</li>
                <li>• Délais impossibles</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">Chasser les Gros Bonus</h3>
              <p className="text-sm mb-3">
                Plus le bonus est gros, pires sont les conditions
              </p>
              <div className="bg-white/10 rounded p-3">
                <p className="text-xs">
                  Préférez : Petit bonus facile {'>'} Gros bonus impossible
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Signaux d'alarme */}
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            🚨 Signaux d'Alarme - Arrêtez Immédiatement Si...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Vous mentez sur vos pertes</strong>
                <p className="text-xs">Cacher la vérité = problème sérieux</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Vous empruntez pour jouer</strong>
                <p className="text-xs">Ligne rouge absolue franchie</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Le jeu affecte votre humeur</strong>
                <p className="text-xs">Irritable, déprimé après pertes</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Vous négligez responsabilités</strong>
                <p className="text-xs">Travail, famille passent après</p>
              </li>
            </ul>
            
            <ul className="space-y-3">
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Vous pensez jeu constamment</strong>
                <p className="text-xs">Obsession = addiction proche</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Vous jouez pour "refaire"</strong>
                <p className="text-xs">Rattraper pertes = spirale</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Budget de base touché</strong>
                <p className="text-xs">Loyer, nourriture en danger</p>
              </li>
              <li className="bg-white rounded p-3">
                <strong className="text-red-700">Promesses brisées</strong>
                <p className="text-xs">"Dernière fois" répétée</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-200 rounded p-4 mt-4">
            <p className="text-red-900 font-bold text-center">
              Si 2+ signaux présents : STOP TOTAL + Aide professionnelle
            </p>
          </div>
        </div>

        {/* Mythes dangereux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🎭 Mythes Dangereux à Détruire
          </h2>
          
          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold">Mythe : "Je peux vivre du casino"</h3>
              <p className="text-sm text-gray-600">
                Réalité : 99.9% des "pros" finissent ruinés. Le casino n'est PAS un travail.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold">Mythe : "J'ai un don/système secret"</h3>
              <p className="text-sm text-gray-600">
                Réalité : Les maths ne mentent pas. Aucun don ne bat l'avantage maison.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold">Mythe : "Les gros gains arrivent à ceux qui persistent"</h3>
              <p className="text-sm text-gray-600">
                Réalité : Plus vous jouez, plus vous perdez. C'est mathématique.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold">Mythe : "Le casino en ligne est truqué, pas le réel"</h3>
              <p className="text-sm text-gray-600">
                Réalité : Mêmes maths, mêmes pertes. La forme ne change rien.
              </p>
            </div>
          </div>
        </div>

        {/* Plan d'action */}
        <div className="bg-green-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ✅ Plan d'Action Anti-Erreurs
          </h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold">Avant de Jouer</h4>
                <ul className="text-sm space-y-1 mt-1">
                  <li>• Budget fixé et cash uniquement</li>
                  <li>• Règles comprises à 100%</li>
                  <li>• État mental vérifié</li>
                </ul>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold">Pendant le Jeu</h4>
                <ul className="text-sm space-y-1 mt-1">
                  <li>• Mises constantes</li>
                  <li>• Pauses régulières</li>
                  <li>• Pas d'alcool</li>
                </ul>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold">Stop Immédiat Si</h4>
                <ul className="text-sm space-y-1 mt-1">
                  <li>• Budget atteint</li>
                  <li>• Émotions fortes</li>
                  <li>• Envie de "refaire"</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>

        {/* Conclusion */}
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            🎯 Les 10 Commandements Anti-Erreurs
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">1.</span>
              <span className="text-gray-700">Jamais d'argent que tu ne peux pas perdre</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">2.</span>
              <span className="text-gray-700">Les pertes tu accepteras sans les chasser</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">3.</span>
              <span className="text-gray-700">Aucun système miracle tu ne croiras</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">4.</span>
              <span className="text-gray-700">L'avantage maison tu respecteras toujours</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">5.</span>
              <span className="text-gray-700">Sobre et reposé tu joueras uniquement</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">6.</span>
              <span className="text-gray-700">Les conditions de bonus tu liras entièrement</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">7.</span>
              <span className="text-gray-700">Jamais pour l'argent mais pour le fun</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">8.</span>
              <span className="text-gray-700">Les signaux d'alarme tu écouteras</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">9.</span>
              <span className="text-gray-700">Tes limites tu respecteras absolument</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">10.</span>
              <span className="text-gray-700">Le casino reste un divertissement coûteux</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/mathematiques"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Mathématiques du Casino
          </Link>
          <Link 
            href="/guide-casino/psychologie"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Psychologie du Joueur
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}