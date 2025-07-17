// app/guide-paris-sportifs/outils-pro/page.js
import Link from 'next/link';

export default function OutilsProPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Outils Pro</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🛠️ Outils Pro
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Les bons outils font la différence entre un amateur et un professionnel. 
          Découvrez les logiciels, sites et applications indispensables pour analyser, 
          tracker et optimiser vos paris sportifs comme un vrai pro.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Outils d'analyse statistique */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            1. Analyse Statistique & Data
          </h2>
          
          <div className="space-y-4">
            {/* FBref */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">📊 FBref</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Stats avancées football gratuites</p>
                  <ul className="text-sm space-y-1">
                    <li>• Expected Goals (xG)</li>
                    <li>• Stats par joueur/équipe</li>
                    <li>• Comparaisons détaillées</li>
                    <li>• Historiques complets</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Utilisation pro :</p>
                  <p className="text-xs">Analysez les xG sur 5-10 matchs pour identifier les équipes sur/sous-performantes</p>
                  <p className="text-green-600 font-bold mt-2">Gratuit</p>
                </div>
              </div>
            </div>

            {/* Understat */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">📈 Understat</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">xG et analytics avancés</p>
                  <ul className="text-sm space-y-1">
                    <li>• xG/xGA détaillés</li>
                    <li>• Shot maps</li>
                    <li>• Tendances de forme</li>
                    <li>• Top 5 championnats</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Point fort :</p>
                  <p className="text-xs">Visualisations claires des performances attendues vs réelles</p>
                  <p className="text-blue-600 font-bold mt-2">Gratuit</p>
                </div>
              </div>
            </div>

            {/* WhoScored */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">⚽ WhoScored</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Notes et stats complètes</p>
                  <ul className="text-sm space-y-1">
                    <li>• Ratings par match</li>
                    <li>• Formations tactiques</li>
                    <li>• Points forts/faibles</li>
                    <li>• Prédictions pre-match</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Astuce :</p>
                  <p className="text-xs">Les "Strengths/Weaknesses" sont parfaits pour les paris spéciaux</p>
                  <p className="text-purple-600 font-bold mt-2">Gratuit (Premium dispo)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparateurs de cotes */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            2. Comparateurs de Cotes
          </h2>
          
          <div className="space-y-4">
            {/* Oddschecker */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🔍 Oddschecker</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Le plus populaire UK</p>
                  <ul className="text-sm space-y-1">
                    <li>• 25+ bookmakers</li>
                    <li>• Mouvements de cotes</li>
                    <li>• % de paris publics</li>
                    <li>• Historique des cotes</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Feature killer :</p>
                  <p className="text-xs">Le "betting percentage" montre où va l'argent du public</p>
                  <p className="text-blue-600 font-bold mt-2">Gratuit</p>
                </div>
              </div>
            </div>

            {/* BetBrain */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🧠 BetBrain</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Meilleur pour l'arbitrage</p>
                  <ul className="text-sm space-y-1">
                    <li>• 100+ bookmakers</li>
                    <li>• Alertes surebets</li>
                    <li>• Value bets</li>
                    <li>• API disponible</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Usage pro :</p>
                  <p className="text-xs">Filtrez par "opening odds" pour trouver les erreurs initiales</p>
                  <p className="text-orange-600 font-bold mt-2">Freemium</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking et Analyse */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            3. Tracking & Analyse de Performance
          </h2>
          
          <div className="space-y-4">
            {/* Betlogger */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">📱 Betlogger</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">App mobile de tracking</p>
                  <ul className="text-sm space-y-1">
                    <li>• Import automatique</li>
                    <li>• Stats détaillées</li>
                    <li>• Graphiques évolution</li>
                    <li>• Alertes personnalisées</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Top feature :</p>
                  <p className="text-xs">Synchronisation avec 50+ bookmakers pour import auto</p>
                  <p className="text-purple-600 font-bold mt-2">4.99€/mois</p>
                </div>
              </div>
            </div>

            {/* Bettingmetrics */}
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-800 mb-2">📊 Bettingmetrics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Analytics avancés</p>
                  <ul className="text-sm space-y-1">
                    <li>• CLV tracking</li>
                    <li>• Analyse par marché</li>
                    <li>• P&L détaillé</li>
                    <li>• Rapports personnalisés</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Pour qui :</p>
                  <p className="text-xs">Parieurs sérieux voulant analyser leur edge réel</p>
                  <p className="text-indigo-600 font-bold mt-2">9.99€/mois</p>
                </div>
              </div>
            </div>

            {/* Google Sheets */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">📋 Google Sheets</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Solution DIY flexible</p>
                  <ul className="text-sm space-y-1">
                    <li>• 100% personnalisable</li>
                    <li>• Formules complexes</li>
                    <li>• Graphiques custom</li>
                    <li>• Partage facile</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Template pro :</p>
                  <p className="text-xs">Cherchez "betting tracker template" pour des modèles prêts</p>
                  <p className="text-green-600 font-bold mt-2">Gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Betting & Arbitrage */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            4. Value Betting & Arbitrage
          </h2>
          
          <div className="space-y-4">
            {/* RebelBetting */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🎯 RebelBetting</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Leader du value betting</p>
                  <ul className="text-sm space-y-1">
                    <li>• Value bets automatiques</li>
                    <li>• Sure betting</li>
                    <li>• Tracker intégré</li>
                    <li>• Formation incluse</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">ROI moyen users :</p>
                  <p className="text-xs">30% sur les 3 premiers mois (données officielles)</p>
                  <p className="text-orange-600 font-bold mt-2">89€/mois</p>
                </div>
              </div>
            </div>

            {/* Trademate */}
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-2">📈 Trademate Sports</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Value betting premium</p>
                  <ul className="text-sm space-y-1">
                    <li>• IA pour edge detection</li>
                    <li>• Backtesting</li>
                    <li>• Gestion bankroll auto</li>
                    <li>• 100+ bookmakers</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Particularité :</p>
                  <p className="text-xs">Focus sur soft bookmakers pour éviter limitations</p>
                  <p className="text-red-600 font-bold mt-2">120€/mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outils Live */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            5. Outils Live & Streaming
          </h2>
          
          <div className="space-y-4">
            {/* FlashScore */}
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-2">⚡ FlashScore</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Live scores ultra-rapides</p>
                  <ul className="text-sm space-y-1">
                    <li>• Notifications push</li>
                    <li>• Stats en direct</li>
                    <li>• Lineups confirmés</li>
                    <li>• H2H rapide</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Killer feature :</p>
                  <p className="text-xs">Les "Attack Momentum" graphs pour le live betting</p>
                  <p className="text-red-600 font-bold mt-2">Gratuit (ads)</p>
                </div>
              </div>
            </div>

            {/* SofaScore */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">📺 SofaScore</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Stats live détaillées</p>
                  <ul className="text-sm space-y-1">
                    <li>• Heatmaps live</li>
                    <li>• Ratings en direct</li>
                    <li>• Momentum graphs</li>
                    <li>• Stats avancées</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Usage pro :</p>
                  <p className="text-xs">Les ratings live aident pour les paris joueurs</p>
                  <p className="text-blue-600 font-bold mt-2">Gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outils spécialisés */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            6. Outils Spécialisés
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Asian Handicap Calculator */}
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">🧮 AH Calculator</h3>
              <p className="text-sm mb-2">Calculs handicaps asiatiques complexes</p>
              <ul className="text-sm space-y-1">
                <li>• Split handicaps</li>
                <li>• Quarter balls</li>
                <li>• P&L scenarios</li>
              </ul>
              <p className="font-bold mt-2">Gratuit (web)</p>
            </div>

            {/* Dropping Odds */}
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">📉 Dropping Odds Tools</h3>
              <p className="text-sm mb-2">Alertes mouvements de cotes</p>
              <ul className="text-sm space-y-1">
                <li>• Steam moves</li>
                <li>• Smart money</li>
                <li>• Line shopping</li>
              </ul>
              <p className="font-bold mt-2">10-50€/mois</p>
            </div>

            {/* Closing Line Value */}
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">📊 CLV Trackers</h3>
              <p className="text-sm mb-2">Mesure votre edge réel</p>
              <ul className="text-sm space-y-1">
                <li>• No-vig CLV</li>
                <li>• Beat % tracking</li>
                <li>• Pinnacle comparison</li>
              </ul>
              <p className="font-bold mt-2">Dans trackers premium</p>
            </div>

            {/* Backtesting */}
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">⏮️ Backtesting Tools</h3>
              <p className="text-sm mb-2">Testez vos stratégies</p>
              <ul className="text-sm space-y-1">
                <li>• Historical odds</li>
                <li>• Strategy testing</li>
                <li>• P&L simulation</li>
              </ul>
              <p className="font-bold mt-2">50-200€/mois</p>
            </div>
          </div>
        </div>

        {/* Extensions navigateur */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            7. Extensions Navigateur Utiles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">🔧 Odds Portal Extension</h3>
              <p className="text-sm">Compare les cotes directement sur les sites bookmakers</p>
              <p className="text-gray-600 font-bold mt-2">Chrome/Firefox - Gratuit</p>
            </div>
            
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">🚫 BetBlocker</h3>
              <p className="text-sm">Bloque l'accès aux sites de paris (pauses forcées)</p>
              <p className="text-gray-600 font-bold mt-2">Multi-navigateurs - Gratuit</p>
            </div>
            
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">📸 Screenshot Tool</h3>
              <p className="text-sm">Capture automatique de vos paris pour archives</p>
              <p className="text-gray-600 font-bold mt-2">Chrome - Gratuit</p>
            </div>
            
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-2">🔔 Web Alert</h3>
              <p className="text-sm">Notifications quand une page change (cotes, news)</p>
              <p className="text-gray-600 font-bold mt-2">Chrome - Gratuit</p>
            </div>
          </div>
        </div>

        {/* Budget recommandé */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            💰 Budget Outils Recommandé
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-green-700 mb-2">Débutant (0-10€/mois)</h3>
              <ul className="text-sm space-y-1">
                <li>• Outils gratuits uniquement</li>
                <li>• Google Sheets pour tracking</li>
                <li>• FBref + Understat pour stats</li>
                <li>• Oddschecker pour comparaison</li>
              </ul>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-blue-700 mb-2">Intermédiaire (20-50€/mois)</h3>
              <ul className="text-sm space-y-1">
                <li>• Tracker premium (Betlogger)</li>
                <li>• Un outil spécialisé selon stratégie</li>
                <li>• Accès données premium occasionnel</li>
              </ul>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-purple-700 mb-2">Avancé (100-200€/mois)</h3>
              <ul className="text-sm space-y-1">
                <li>• Value betting software</li>
                <li>• Multiple data sources</li>
                <li>• Backtesting capabilities</li>
                <li>• ROI justifie l'investissement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workflow optimal */}
        <div className="bg-green-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            ⚡ Workflow Optimal avec les Outils
          </h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Pré-analyse (J-2)</strong>
                <p className="text-green-100">FBref/Understat pour stats, WhoScored pour tactique</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Comparaison cotes (J-1)</strong>
                <p className="text-green-100">Oddschecker pour trouver best odds + value</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Placement (Jour J)</strong>
                <p className="text-green-100">Vérification finale lineups, placement optimal</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Live monitoring</strong>
                <p className="text-green-100">FlashScore/SofaScore pour opportunités live</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <strong>Post-match</strong>
                <p className="text-green-100">Update tracker, analyse CLV, notes pour futur</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Conseils finaux */}
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            💡 Maximiser l'Usage des Outils
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Commencez simple :</strong> Maîtrisez 2-3 outils avant d'en ajouter
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Automatisez :</strong> Les tâches répétitives doivent être automatiques
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>ROI first :</strong> Un outil doit rapporter plus qu'il ne coûte
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Mobile friendly :</strong> Privilégiez les outils avec app mobile
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Testez avant d'acheter :</strong> Essais gratuits = obligatoires
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/erreurs-eviter"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Erreurs à Éviter
          </Link>
          <Link 
            href="/guide-paris-sportifs/psychologie"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Psychologie du Parieur
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}