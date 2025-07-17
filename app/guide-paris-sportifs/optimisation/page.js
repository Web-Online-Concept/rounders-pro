// app/guide-paris-sportifs/optimisation/page.js
import Link from 'next/link';

export default function OptimisationPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Optimisation</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🚀 Optimisation
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          L'optimisation fait la différence entre un parieur amateur et un professionnel. 
          Chaque détail compte : timing, sélection des bookmakers, gestion des bonus, comparaison des cotes. 
          Maximisez votre edge avec ces techniques avancées.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Optimisation des cotes */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            1. Optimisation des Cotes
          </h2>
          <p className="text-gray-700 mb-4">
            La différence entre 1.90 et 2.00 peut sembler minime, mais sur 1000 paris, 
            c'est la différence entre profit et perte.
          </p>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Stratégie multi-comptes :</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Bookmakers essentiels :</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Pinnacle :</strong> Meilleures cotes, pas de limites</li>
                  <li>• <strong>Bet365 :</strong> Couverture complète</li>
                  <li>• <strong>Betfair Exchange :</strong> Cotes du marché</li>
                  <li>• <strong>1xBet :</strong> Cotes élevées sur mineurs</li>
                  <li>• <strong>Asian bookies :</strong> Via agents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Impact sur le ROI :</h4>
                <table className="w-full text-sm">
                  <tr className="border-b">
                    <td className="py-1">Cote moyenne</td>
                    <td className="text-right">ROI annuel</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1">1.95</td>
                    <td className="text-right text-red-600">-2.5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1">2.00</td>
                    <td className="text-right text-yellow-600">+2.5%</td>
                  </tr>
                  <tr>
                    <td className="py-1">2.05</td>
                    <td className="text-right text-green-600">+7.5%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800">
              <strong>💡 Astuce Pro :</strong> Utilisez des comparateurs de cotes, mais vérifiez toujours 
              manuellement. Les meilleures opportunités disparaissent en secondes.
            </p>
          </div>
        </div>

        {/* Timing optimal */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            2. Timing Optimal des Paris
          </h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold mb-2">🌅 Ouverture des cotes (3-7 jours avant)</h3>
              <ul className="text-sm space-y-1">
                <li>✅ Erreurs de pricing fréquentes</li>
                <li>✅ Limites élevées sur majeurs</li>
                <li>✅ Value sur marchés secondaires</li>
                <li>❌ Peu d'infos sur les compos</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded p-4">
              <h3 className="font-bold mb-2">📅 Mi-semaine (2-3 jours avant)</h3>
              <ul className="text-sm space-y-1">
                <li>✅ Bonnes infos disponibles</li>
                <li>✅ Cotes pas encore trop ajustées</li>
                <li>✅ Sweet spot value/information</li>
                <li>❌ Début des mouvements de cotes</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold mb-2">⏰ Jour du match</h3>
              <ul className="text-sm space-y-1">
                <li>✅ Compositions confirmées</li>
                <li>✅ Dernières news (blessures, etc.)</li>
                <li>❌ Cotes très efficientes</li>
                <li>❌ Peu de value sauf surprise</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4 mt-4">
            <h4 className="font-semibold mb-2">🎯 Stratégie optimale :</h4>
            <p className="text-sm">
              Placez 70% de vos paris 2-3 jours avant, 20% à l'ouverture pour les erreurs, 
              10% le jour J pour exploiter les infos de dernière minute.
            </p>
          </div>
        </div>

        {/* Gestion des bonus */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            3. Exploitation des Bonus
          </h2>
          <p className="text-gray-700 mb-4">
            Les bonus peuvent transformer un ROI de 3% en 10%+ s'ils sont bien utilisés.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold mb-2">Bonus à privilégier :</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>Cashback :</strong> Réduit la variance</li>
                <li>• <strong>Odds boosts :</strong> Value instantanée</li>
                <li>• <strong>Free bets :</strong> Si conditions souples</li>
                <li>• <strong>Reload bonus :</strong> Récurrents</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold mb-2">Bonus à éviter :</h3>
              <ul className="text-sm space-y-1">
                <li>• Rollover {'>'} 5x</li>
				<li>• Cotes min {'>'} 1.80</li>
				<li>• Délais {'<'} 7 jours</li>
                <li>• Restrictions sports/marchés</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-semibold mb-2">Technique "Low-Risk Profit" :</h4>
            <ol className="text-sm space-y-1">
              <li>1. Bonus 100€ avec rollover 3x à cote min 1.50</li>
              <li>2. Placez sur des doubles chances ~1.55</li>
              <li>3. Taux de réussite ~65% = EV positive</li>
              <li>4. Profit moyen : 30-40€ par bonus</li>
            </ol>
          </div>
        </div>

        {/* Automatisation */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            4. Automatisation & Outils
          </h2>
          <p className="text-gray-700 mb-4">
            Gagnez du temps et de l'efficacité avec les bons outils.
          </p>
          
          <div className="space-y-4">
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold mb-2">🤖 Alertes automatiques</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm mb-1">Dropping odds :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Chute > 10% en 24h</li>
                    <li>• Volume de paris anormal</li>
                    <li>• Smart money indicators</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Value alerts :</p>
                  <ul className="text-sm space-y-1">
                    <li>• Cote > moyenne marché +5%</li>
                    <li>• Ouverture de nouveaux marchés</li>
                    <li>• Arbitrage temporaire</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-bold mb-2">📊 Tracking & Analytics</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>Betaminic :</strong> Big data des stratégies</li>
                <li>• <strong>Trademate :</strong> Value betting automatisé</li>
                <li>• <strong>Smart Bet Tracker :</strong> Analyse détaillée</li>
                <li>• <strong>Google Sheets :</strong> Custom tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optimisation fiscale */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            5. Optimisation Fiscale 💼
          </h2>
          <p className="mb-4">
            En France, les gains aux paris sportifs sont imposables. Optimisez légalement.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Déclaration obligatoire :</h3>
              <ul className="text-sm space-y-1">
                <li>• Gains > 1500€/an</li>
                <li>• Case 2TT ou 2TS</li>
                <li>• Flat tax 30% (12.8% + 17.2%)</li>
                <li>• Ou barème progressif si avantageux</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Optimisations légales :</h3>
              <ul className="text-sm space-y-1">
                <li>• Déduire les pertes de l'année</li>
                <li>• Frais réels (abonnements, outils)</li>
                <li>• Statut auto-entrepreneur si régulier</li>
                <li>• Compte séparé pour traçabilité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Psychologie avancée */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            6. Optimisation Mentale
          </h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold mb-2">🧠 Éliminer les biais</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Biais de confirmation :</strong>
                  <p className="text-sm">Notez TOUS vos paris, pas seulement les gagnants</p>
                </li>
                <li>
                  <strong>Effet de récence :</strong>
                  <p className="text-sm">Les 5 derniers résultats ne prédisent pas le prochain</p>
                </li>
                <li>
                  <strong>Aversion à la perte :</strong>
                  <p className="text-sm">Acceptez la variance, c'est mathématique</p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-bold mb-2">📈 Routine de pro</h3>
              <ol className="text-sm space-y-1">
                <li>1. Review hebdomadaire des performances</li>
                <li>2. Ajustement des stratégies si nécessaire</li>
                <li>3. Pauses obligatoires après mauvaises séries</li>
                <li>4. Formation continue (nouvelles stratégies)</li>
                <li>5. Network avec autres parieurs sérieux</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Techniques secrètes */}
        <div className="bg-red-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            7. Techniques "Grises" (Légales mais Borderline)
          </h2>
          <p class="text-red-600 font-semibold mb-4">
            ⚠️ Ces techniques peuvent entraîner des limitations. À vos risques.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold mb-2">Court Trading</h3>
              <p className="text-sm">
                Exploiter les délais de mise à jour entre bookmakers. 
                Placez sur les cotes lentes après mouvement chez Pinnacle.
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold mb-2">Bonus Hunting Extrême</h3>
              <p className="text-sm">
                Multi-comptes famille, amis. Rotation des bonus welcome. 
                ROI potentiel : 50-100% du capital initial.
              </p>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold mb-2">Steam Chasing</h3>
              <p className="text-sm">
                Suivre les mouvements des sharp bettors asiatiques. 
                Nécessite rapidité et comptes multiples.
              </p>
            </div>
          </div>
        </div>

        {/* Check-list optimisation */}
        <div className="bg-green-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            ✅ Check-list d'Optimisation Complète
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Setup initial :</h3>
              <ul className="space-y-2 text-sm">
                <li>☐ 10+ comptes bookmakers actifs</li>
                <li>☐ Comparateur de cotes installé</li>
                <li>☐ Système de tracking en place</li>
                <li>☐ Alertes configurées</li>
                <li>☐ Bankroll séparée</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Routine quotidienne :</h3>
              <ul className="space-y-2 text-sm">
                <li>☐ Check des cotes d'ouverture</li>
                <li>☐ Analyse value sur 5+ bookmakers</li>
                <li>☐ Vérification bonus disponibles</li>
                <li>☐ Update du tracker</li>
                <li>☐ Review des alertes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* KPIs optimisation */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            📊 KPIs d'Optimisation
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-4 text-center">
              <div className="text-2xl font-bold text-green-600">+0.05</div>
              <div className="text-sm">Gain moyen/cote via optimisation</div>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">15%</div>
              <div className="text-sm">ROI additionnel via bonus</div>
            </div>
            <div className="bg-white rounded p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">2.5x</div>
              <div className="text-sm">Multiplication du profit net</div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            🎯 L'optimisation fait la différence
          </h3>
          <p className="text-gray-700 mb-4">
            Un parieur non-optimisé avec 55% de réussite peut être perdant. 
            Un parieur optimisé avec 52% de réussite peut être largement profitable.
          </p>
          <p className="text-gray-700 font-semibold">
            Chaque détail compte. Chaque centième de cote. Chaque bonus. 
            C'est ça, le edge du professionnel.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/systemes-montantes"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Systèmes & Montantes
          </Link>
          <Link 
            href="/guide-paris-sportifs/erreurs-eviter"
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