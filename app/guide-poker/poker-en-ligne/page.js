// app/guide-poker/poker-en-ligne/page.js
import Link from 'next/link';

export default function PokerEnLignePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Poker en Ligne</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💻 Poker en Ligne
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le poker online offre des avantages uniques : volume de mains énorme, multi-tabling, 
          outils d'analyse avancés et accès 24/7. Découvrez comment optimiser votre setup 
          et exploiter toutes les possibilités du poker digital.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Online vs Live */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🆚 Online vs Live Poker
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le poker online est un jeu différent du live. Plus rapide, plus technique, 
              mais aussi plus accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h3 className="font-semibold text-green-700 mb-2">💻 Avantages Online</h3>
              <ul className="text-sm space-y-1">
                <li>• 60-100 mains/heure (vs 30 live)</li>
                <li>• Multi-tabling possible</li>
                <li>• Pas de tells physiques à gérer</li>
                <li>• Rake plus bas (généralement)</li>
                <li>• Accès 24/7 depuis chez soi</li>
                <li>• Stakes très basses disponibles</li>
                <li>• Outils d'analyse (HUD, trackers)</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">🎰 Différences Clés</h3>
              <ul className="text-sm space-y-1">
                <li>• Jeu plus agressif online</li>
                <li>• Niveau moyen plus élevé</li>
                <li>• Timing tells importants</li>
                <li>• Bet sizing plus précis</li>
                <li>• Moins de récréatifs purs</li>
                <li>• Variance ressentie plus forte</li>
                <li>• Nécessite discipline stricte</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Setup optimal */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🖥️ Setup Optimal pour Grinder
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Un bon setup améliore votre confort, votre efficacité et donc votre winrate. 
              Investissez dans votre outil de travail.
            </p>
          </div>

          <div className="space-y-4">
            {/* Hardware */}
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">🔧 Hardware Recommandé</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold mb-1">Essentiel :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• PC/Mac rapide (SSD recommandé)</li>
                    <li>• Moniteur 24"+ (idéal : 27" ou dual)</li>
                    <li>• Souris gaming précise</li>
                    <li>• Connexion internet stable</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1">Confort + :</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Chaise ergonomique</li>
                    <li>• Éclairage adapté</li>
                    <li>• Casque anti-bruit</li>
                    <li>• Support moniteur ajustable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Software */}
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">💿 Software Essentiel</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Tracker :</strong>
                  <span className="text-xs block text-gray-600">PokerTracker 4 ou Holdem Manager 3 pour analyser votre jeu</span>
                </li>
                <li>
                  <strong>Table Manager :</strong>
                  <span className="text-xs block text-gray-600">TableNinja ou StarsCaption pour multi-tabler efficacement</span>
                </li>
                <li>
                  <strong>Équité Calculator :</strong>
                  <span className="text-xs block text-gray-600">Equilab ou Flopzilla pour étudier les ranges</span>
                </li>
                <li>
                  <strong>Note Taking :</strong>
                  <span className="text-xs block text-gray-600">Système de notes couleurs intégré ou externe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* HUD et Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            📊 HUD et Statistiques
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Le HUD (Heads-Up Display) affiche les stats de vos adversaires en temps réel. 
              C'est l'avantage majeur du online.
            </p>
          </div>

          {/* Stats essentielles */}
          <div className="mb-4">
            <h3 className="font-bold text-green-700 mb-3">📈 Stats HUD Essentielles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-green-200 rounded p-3">
                <h4 className="font-semibold text-sm mb-2">Stats de Base</h4>
                <ul className="text-xs space-y-1">
                  <li><strong>VPIP :</strong> % de mains jouées volontairement</li>
                  <li><strong>PFR :</strong> % de raise préflop</li>
                  <li><strong>3-Bet :</strong> % de sur-relance</li>
                  <li><strong>AF :</strong> Facteur d'agression post-flop</li>
                  <li><strong>WTSD :</strong> % d'arrivée au showdown</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-green-200 rounded p-3">
                <h4 className="font-semibold text-sm mb-2">Stats Avancées</h4>
                <ul className="text-xs space-y-1">
                  <li><strong>Fold to 3-bet :</strong> Défense vs 3-bet</li>
                  <li><strong>C-bet Flop :</strong> Fréquence de continuation</li>
                  <li><strong>Fold to C-bet :</strong> Résistance au c-bet</li>
                  <li><strong>4-bet Range :</strong> Agressivité préflop</li>
                  <li><strong>River AF :</strong> Agression river spécifique</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interprétation */}
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-semibold mb-2">🎯 Profils Types (6-max)</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Nit :</strong> VPIP {'<'} 15%, PFR {'<'} 12%
                <span className="text-xs block text-gray-600">→ Ultra serré, exploitable</span>
              </div>
              <div>
                <strong>TAG :</strong> VPIP 18-25%, PFR 15-20%
                <span className="text-xs block text-gray-600">→ Tight-aggressive, solide</span>
              </div>
              <div>
                <strong>LAG :</strong> VPIP 25-35%, PFR 20-28%
                <span className="text-xs block text-gray-600">→ Loose-aggressive, dangereux</span>
              </div>
              <div>
                <strong>Fish :</strong> VPIP {'>'} 35%, PFR {'<'} 15%
                <span className="text-xs block text-gray-600">→ Passif, cible prioritaire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-tabling */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎮 Multi-Tabling Efficace
          </h2>
          
          <div className="bg-white bg-opacity-20 rounded p-4 mb-4">
            <p>
              Le multi-tabling multiplie votre hourly rate mais nécessite organisation 
              et automatisation. Commencez progressivement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Progression Recommandée</h3>
              <ol className="text-sm space-y-1">
                <li>1. Maîtriser 1 table parfaitement</li>
                <li>2. Passer à 2 tables (1 mois min)</li>
                <li>3. 4 tables quand confortable</li>
                <li>4. 6-9 tables pour grinders</li>
                <li>5. 12+ tables (pros uniquement)</li>
              </ol>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Tips Multi-tabling</h3>
              <ul className="text-sm space-y-1">
                <li>• Disposition en grille (tiling)</li>
                <li>• Hotkeys pour tout</li>
                <li>• Bet sizing présélectionnés</li>
                <li>• Time bank stratégique</li>
                <li>• Pauses régulières obligatoires</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-white bg-opacity-10 rounded p-4">
            <p className="text-center text-sm">
              ⚠️ Attention : Plus de tables = moins de edge par table. Trouvez votre sweet spot.
            </p>
          </div>
        </div>

        {/* Sélection de sites */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🌐 Choisir ses Sites de Poker
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Tous les sites ne se valent pas. Considérez le trafic, le rake, 
              les bonus et surtout la qualité des joueurs.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h3 className="font-semibold text-orange-700 mb-2">Critères de Sélection</h3>
              <ul className="text-sm space-y-1">
                <li>✓ <strong>Trafic :</strong> Assez de tables à votre limite</li>
                <li>✓ <strong>Rake :</strong> Structure et rakeback disponible</li>
                <li>✓ <strong>Softness :</strong> Proportion de récréatifs</li>
                <li>✓ <strong>Sécurité :</strong> Licence et réputation</li>
                <li>✓ <strong>Software :</strong> Qualité et compatibilité HUD</li>
                <li>✓ <strong>Cashout :</strong> Rapidité et fiabilité</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-4">
              <h3 className="font-semibold text-yellow-700 mb-2">
                💡 Recommandation Stake
              </h3>
              <p className="text-sm text-gray-700">
                <Link href="/guide-stake" className="text-green-600 hover:text-green-700 underline font-semibold">
                  Stake
                </Link> offre une excellente option pour le poker online : 
                trafic international, rake compétitif, et cashouts crypto rapides. 
                Parfait pour commencer ou grinder sérieusement.
              </p>
            </div>
          </div>
        </div>

        {/* Bankroll Online */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            💰 Bankroll Management Online
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              La variance online est ressentie plus fortement due au volume. 
              Une gestion stricte est encore plus importante.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">Cash Game Online</h3>
              <ul className="text-sm space-y-1">
                <li>• NL2-NL10 : 30-40 buy-ins</li>
                <li>• NL25-NL50 : 40-50 buy-ins</li>
                <li>• NL100+ : 50-100 buy-ins</li>
                <li>• Zoom/Fast : +25% buy-ins</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">MTT Online</h3>
              <ul className="text-sm space-y-1">
                <li>• Low stakes : 200+ buy-ins</li>
                <li>• Mid stakes : 300+ buy-ins</li>
                <li>• Turbos : +50% buy-ins</li>
                <li>• Mix formats pour réduire variance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sécurité et Éthique */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🔒 Sécurité et Fair Play
          </h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">Sécurité du Compte</h3>
              <ul className="text-sm space-y-1">
                <li>• Mot de passe unique et complexe</li>
                <li>• 2FA activé obligatoirement</li>
                <li>• Email dédié au poker</li>
                <li>• VPN si autorisé (vérifiez T&C)</li>
                <li>• Ne jamais partager ses logins</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded p-4">
              <h3 className="font-semibold text-red-700 mb-2">❌ À Éviter Absolument</h3>
              <ul className="text-sm space-y-1">
                <li>• Bots ou assistance temps réel</li>
                <li>• Collusion ou chip dumping</li>
                <li>• Multi-accounting</li>
                <li>• Achat de mains histories illégal</li>
                <li>• Ghosting en tournoi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optimisations avancées */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Optimisations Avancées
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">⚡ Performance</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Scripts AutoHotkey personnalisés</li>
              <li>• Layouts de table sauvegardés</li>
              <li>• Filtres de lobby optimisés</li>
              <li>• Alertes sonores customisées</li>
              <li>• Backup régulier des databases</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-700 mb-3">📚 Étude Efficace</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Review database quotidienne</li>
              <li>• Marquage des mains intéressantes</li>
              <li>• Analyse des spots récurrents</li>
              <li>• Solvers GTO (PioSolver, GTO+)</li>
              <li>• Partage avec study group</li>
            </ul>
          </div>
        </div>

        {/* Routine quotidienne */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            📅 Routine d'un Grinder Online
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="font-bold mr-2">7h00 :</span>
              <span className="text-sm">Réveil, exercice physique (crucial pour l'endurance)</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">8h00 :</span>
              <span className="text-sm">Review de la session d'hier, analyse des gros pots</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">9h00 :</span>
              <span className="text-sm">Session 1 : 2-3h de grind focus</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">12h00 :</span>
              <span className="text-sm">Pause déjeuner longue, déconnexion totale</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">14h00 :</span>
              <span className="text-sm">Étude : vidéos, solver work, discussions</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">16h00 :</span>
              <span className="text-sm">Session 2 : 2-3h, souvent plus de trafic</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold mr-2">19h00 :</span>
              <span className="text-sm">Fin du poker, vie sociale/loisirs essentiels</span>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            💻 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le volume est l'avantage majeur du online - exploitez-le avec le multi-tabling progressif
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                HUD et trackers sont essentiels - investissez et apprenez à les utiliser parfaitement
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Votre setup est votre bureau - optimisez-le pour le confort et l'efficacité
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La discipline est encore plus importante online - respectez vos horaires et limites
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Stake offre un environnement idéal
                </Link> pour développer votre jeu online avec tous les formats disponibles
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/cash-game"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Cash Game
          </Link>
          <Link 
            href="/guide-poker/erreurs-eviter"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Erreurs à Éviter
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}