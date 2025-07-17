// app/guide-paris-sportifs/analyse-matchs/page.js
import Link from 'next/link';

export default function AnalyseMatchsPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Analyse des Matchs</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🔍 Analyse des Matchs
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          L'analyse approfondie est ce qui différencie le parieur qui mise au hasard de celui qui prend 
          des décisions éclairées. Apprenez à décortiquer un match sous tous les angles pour identifier 
          les véritables opportunités de value.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les piliers de l'analyse
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-bold text-blue-700">Statistiques</h3>
            <p className="text-sm">Données objectives</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="font-bold text-green-700">Forme</h3>
            <p className="text-sm">Dynamique récente</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">⚔️</div>
            <h3 className="font-bold text-purple-700">H2H</h3>
            <p className="text-sm">Confrontations directes</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold text-orange-700">Contexte</h3>
            <p className="text-sm">Facteurs externes</p>
          </div>
        </div>

        {/* Analyse Statistique */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            1. Analyse Statistique
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold mb-3">Football - Métriques clés :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Offensives</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Buts marqués (domicile/extérieur)</li>
                    <li>• Expected Goals (xG)</li>
                    <li>• Tirs par match / Tirs cadrés</li>
                    <li>• Possession moyenne</li>
                    <li>• Passes clés</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Défensives</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Buts encaissés</li>
                    <li>• Clean sheets %</li>
                    <li>• Tirs concédés</li>
                    <li>• Expected Goals Against (xGA)</li>
                    <li>• Fautes commises</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 rounded p-4">
              <h4 className="font-bold text-blue-800 mb-2">💡 Astuce Pro :</h4>
              <p className="text-blue-700">
                Les xG (Expected Goals) sont plus fiables que les buts réels pour prédire les performances futures. 
                Une équipe avec xG > buts marqués est en "sous-performance" et devrait s'améliorer.
              </p>
            </div>
          </div>
        </div>

        {/* Analyse de Forme */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            2. Analyse de la Forme
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Fenêtres d'analyse :</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-semibold mr-2">5 derniers matchs :</span>
                <span className="text-green-700">Forme actuelle</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">10 derniers matchs :</span>
                <span className="text-green-700">Tendance moyen terme</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Saison complète :</span>
                <span className="text-green-700">Niveau réel</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-400 rounded p-4">
              <h4 className="font-bold text-green-700 mb-2">✅ Signes positifs</h4>
              <ul className="text-sm space-y-1">
                <li>• Série de victoires</li>
                <li>• Amélioration progressive des stats</li>
                <li>• Retour de joueurs clés</li>
                <li>• Nouvel entraîneur (effet boost)</li>
                <li>• Confiance retrouvée</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-red-400 rounded p-4">
              <h4 className="font-bold text-red-700 mb-2">❌ Signes négatifs</h4>
              <ul className="text-sm space-y-1">
                <li>• Série de défaites</li>
                <li>• Problèmes défensifs récurrents</li>
                <li>• Blessures en cascade</li>
                <li>• Tensions dans le vestiaire</li>
                <li>• Pression médiatique</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Confrontations Directes */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            3. Confrontations Directes (H2H)
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-3">
              L'historique des confrontations révèle souvent des tendances psychologiques importantes.
            </p>
            
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold mb-2">Points d'attention :</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Domination historique :</strong> Certaines équipes ont un "complexe" face à d'autres</li>
                <li>• <strong>Styles de jeu :</strong> Certains styles s'opposent mal à d'autres</li>
                <li>• <strong>Facteur domicile :</strong> L'importance du terrain dans les H2H</li>
                <li>• <strong>Évolution récente :</strong> Les 5 dernières confrontations > historique ancien</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <strong>⚠️ Piège :</strong> Ne surestimez pas les H2H anciens. Les équipes changent, 
              les effectifs évoluent. Privilégiez les 2-3 dernières années.
            </p>
          </div>
        </div>

        {/* Analyse Contextuelle */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            4. Analyse Contextuelle
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold mb-3">📅 Calendrier</h3>
              <ul className="text-sm space-y-1">
                <li>• Congestion des matchs</li>
                <li>• Importance du match</li>
                <li>• Matchs à venir (rotation ?)</li>
                <li>• Voyages et fatigue</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold mb-3">🏥 Effectif</h3>
              <ul className="text-sm space-y-1">
                <li>• Blessés et suspendus</li>
                <li>• Retours de blessure</li>
                <li>• Rotation probable</li>
                <li>• Moral de l'équipe</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-4">
            <h4 className="font-bold mb-2">Facteurs externes importants :</h4>
            <div className="grid md:grid-cols-3 gap-2 text-sm">
              <div>
                <strong>🌤️ Météo</strong>
                <p>Pluie, vent, température</p>
              </div>
              <div>
                <strong>🏟️ Stade</strong>
                <p>Surface, dimensions</p>
              </div>
              <div>
                <strong>👥 Public</strong>
                <p>Huis clos, ambiance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Méthodologie complète */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Méthodologie d'analyse complète
        </h2>
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 mb-8">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Collecte des données</strong>
                <p className="text-blue-100">Stats des 10 derniers matchs, compositions probables, news</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Analyse objective</strong>
                <p className="text-blue-100">xG, forme, H2H, sans biais émotionnel</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Contexte et ajustements</strong>
                <p className="text-blue-100">Enjeux, absences, facteurs externes</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Estimation des probabilités</strong>
                <p className="text-blue-100">Votre évaluation vs cotes du marché</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <strong>Décision finale</strong>
                <p className="text-blue-100">Value bet identifié ? Taille de mise appropriée</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Sources d'information */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Sources d'information fiables
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">📊 Statistiques</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>FBref :</strong> Stats détaillées gratuites</li>
                <li>• <strong>Understat :</strong> xG et analytics avancés</li>
                <li>• <strong>WhoScored :</strong> Notes et stats complètes</li>
                <li>• <strong>Soccerway :</strong> Résultats et H2H</li>
                <li>• <strong>FlashScore :</strong> Live et stats rapides</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">📰 Actualités</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Sites officiels :</strong> Infos directes des clubs</li>
                <li>• <strong>Journalistes fiables :</strong> Twitter/X</li>
                <li>• <strong>Conférences de presse :</strong> Indices composition</li>
                <li>• <strong>Forums spécialisés :</strong> Infos locales</li>
                <li>• <strong>Médias sportifs :</strong> L'Équipe, Sky Sports</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exemple pratique */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Exemple d'analyse complète
        </h2>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-blue-800 mb-3">PSG vs Marseille - Ligue 1</h3>
          
          <div className="space-y-4 text-sm">
            <div className="bg-white rounded p-3">
              <strong>1. Stats :</strong> PSG (2.3 xG/match) vs OM (1.7 xG/match)
            </div>
            <div className="bg-white rounded p-3">
              <strong>2. Forme :</strong> PSG 4V-1N, OM 2V-2N-1D sur les 5 derniers
            </div>
            <div className="bg-white rounded p-3">
              <strong>3. H2H :</strong> PSG 4 victoires sur les 5 derniers Classicos
            </div>
            <div className="bg-white rounded p-3">
              <strong>4. Contexte :</strong> PSG sans Mbappé (blessé), OM au complet
            </div>
            <div className="bg-white rounded p-3">
              <strong>5. Conclusion :</strong> Value potentielle sur X2 (Nul ou OM) à 2.40
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            🎯 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                L'analyse objective bat toujours l'intuition sur le long terme
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Ne négligez aucun aspect : stats + forme + contexte = décision éclairée
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Les xG sont vos meilleurs amis pour identifier la "vraie" valeur des équipes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le temps investi dans l'analyse = ROI amélioré
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Gardez une trace de vos analyses pour apprendre de vos erreurs
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/gestion-bankroll"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Gestion de Bankroll
          </Link>
          <Link 
            href="/guide-paris-sportifs/strategies-base"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Stratégies de Base
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}