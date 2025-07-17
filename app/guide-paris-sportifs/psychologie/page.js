// app/guide-paris-sportifs/psychologie/page.js
import Link from 'next/link';

export default function PsychologiePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Psychologie du Parieur</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🧠 Psychologie du Parieur
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le mental représente 80% du succès aux paris sportifs. Les meilleurs systèmes échouent 
          face aux émotions mal gérées. Maîtrisez votre psychologie pour transformer vos connaissances 
          en profits constants.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Les biais cognitifs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            1. Les Biais Cognitifs du Parieur
          </h2>
          <p className="text-gray-700 mb-4">
            Notre cerveau nous joue des tours. Connaître ces biais est le premier pas pour les combattre.
          </p>
          
          <div className="space-y-4">
            {/* Biais de confirmation */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">🔍 Biais de Confirmation</h3>
              <p className="text-sm mb-3">
                Chercher uniquement les infos qui confirment notre opinion initiale.
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Exemple :</p>
                <p className="text-sm">"PSG va gagner" → On ne retient que leurs victoires récentes, 
                on ignore leurs défaites</p>
                <p className="text-purple-600 font-bold mt-2">Solution : Cherchez activement les contre-arguments</p>
              </div>
            </div>

            {/* Effet de récence */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">📅 Effet de Récence</h3>
              <p className="text-sm mb-3">
                Surpondérer les événements récents par rapport à la tendance long terme.
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Exemple :</p>
                <p className="text-sm">Une équipe perd 3 matchs → "Ils sont nuls maintenant" 
                (alors qu'ils ont 80% de victoires sur la saison)</p>
                <p className="text-blue-600 font-bold mt-2">Solution : Analysez minimum 10-15 matchs</p>
              </div>
            </div>

            {/* Illusion du joueur */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🎲 Sophisme du Joueur</h3>
              <p className="text-sm mb-3">
                Croire que les résultats passés influencent les probabilités futures.
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Exemple :</p>
                <p className="text-sm">"5 Over de suite, le prochain sera Under" 
                (chaque match est indépendant)</p>
                <p className="text-orange-600 font-bold mt-2">Solution : Chaque pari = nouvelle probabilité</p>
              </div>
            </div>

            {/* Ancrage mental */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">⚓ Biais d'Ancrage</h3>
              <p className="text-sm mb-3">
                S'accrocher à la première information reçue.
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Exemple :</p>
                <p className="text-sm">Cote d'ouverture 1.80 → "C'est de la value à 1.85" 
                (même si la vraie valeur est 1.70)</p>
                <p className="text-green-600 font-bold mt-2">Solution : Évaluez indépendamment</p>
              </div>
            </div>
          </div>
        </div>

        {/* États émotionnels dangereux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            2. États Émotionnels Dangereux
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Tilt */}
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-2">😤 Le Tilt</h3>
              <p className="text-sm mb-3">État de frustration qui mène aux décisions irrationnelles</p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">Déclencheurs :</p>
                <ul className="text-xs space-y-1">
                  <li>• Bad beat (pari perdu dernière minute)</li>
                  <li>• Série de pertes</li>
                  <li>• Erreur stupide</li>
                </ul>
                <p className="text-red-600 font-bold mt-2 text-sm">Stop immédiat si détecté</p>
              </div>
            </div>

            {/* Euphorie */}
            <div className="bg-yellow-50 rounded p-4">
              <h3 className="font-bold text-yellow-800 mb-2">🎉 L'Euphorie</h3>
              <p className="text-sm mb-3">Excès de confiance après victoires</p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">Dangers :</p>
                <ul className="text-xs space-y-1">
                  <li>• Augmentation des mises</li>
                  <li>• Abandon des règles</li>
                  <li>• Sentiment d'invincibilité</li>
                </ul>
                <p className="text-yellow-600 font-bold mt-2 text-sm">Restez discipliné</p>
              </div>
            </div>

            {/* Désespoir */}
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-bold text-gray-800 mb-2">😞 Le Désespoir</h3>
              <p className="text-sm mb-3">Perte de confiance totale</p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">Symptômes :</p>
                <ul className="text-xs space-y-1">
                  <li>• "Je suis maudit"</li>
                  <li>• Doute de tout</li>
                  <li>• Envie d'abandonner</li>
                </ul>
                <p className="text-gray-600 font-bold mt-2 text-sm">Pause nécessaire</p>
              </div>
            </div>

            {/* FOMO */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🏃 Le FOMO</h3>
              <p className="text-sm mb-3">Fear Of Missing Out</p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-1">Manifestations :</p>
                <ul className="text-xs space-y-1">
                  <li>• Parier sur tout</li>
                  <li>• Suivre les "tips chauds"</li>
                  <li>• Pas de sélection</li>
                </ul>
                <p className="text-blue-600 font-bold mt-2 text-sm">Quality > Quantity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Techniques de contrôle mental */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            3. Techniques de Contrôle Mental
          </h2>
          
          <div className="space-y-4">
            {/* Routine pré-pari */}
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">🎯 Routine Pré-Pari</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                  <span>État émotionnel check : Suis-je calme ?</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                  <span>Analyse objective complète</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                  <span>Vérification value (EV+)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">4</span>
                  <span>Respect des limites de mise</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">5</span>
                  <span>Validation finale : Ce pari respecte mes règles ?</span>
                </li>
              </ol>
            </div>

            {/* Mindfulness */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🧘 Techniques de Mindfulness</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Respiration 4-7-8 :</p>
                  <ul className="text-xs space-y-1">
                    <li>• Inspirer 4 secondes</li>
                    <li>• Retenir 7 secondes</li>
                    <li>• Expirer 8 secondes</li>
                    <li>• Répéter 3x</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sm mb-1">Body scan rapide :</p>
                  <ul className="text-xs space-y-1">
                    <li>• Tensions musculaires ?</li>
                    <li>• Rythme cardiaque ?</li>
                    <li>• Pensées agitées ?</li>
                    <li>• → Pause si nécessaire</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Journaling */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">📔 Journal du Parieur</h3>
              <p className="text-sm mb-3">Écrivez quotidiennement :</p>
              <ul className="space-y-2 text-sm">
                <li>• État émotionnel avant/après sessions</li>
                <li>• Décisions prises sous émotion</li>
                <li>• Patterns de comportement</li>
                <li>• Progrès et victoires mentales</li>
              </ul>
              <p className="text-purple-600 font-bold mt-3">Relecture hebdo = prise de conscience</p>
            </div>
          </div>
        </div>

        {/* Gestion de la variance */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            4. Gérer la Variance Mentalement
          </h2>
          <p className="mb-4">
            La variance est mathématique, pas personnelle. Acceptez-la.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">📊 Perspective Long Terme</h3>
              <ul className="text-sm space-y-1">
                <li>• 100 paris = échantillon minimum</li>
                <li>• 10-15 pertes d'affilée = normal</li>
                <li>• Focus sur l'EV, pas les résultats</li>
                <li>• Célébrez les bonnes décisions</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">🎢 Montagnes Russes</h3>
              <ul className="text-sm space-y-1">
                <li>• Bankroll ±30% = variance normale</li>
                <li>• Mois négatifs = inévitables</li>
                <li>• Downswing ≠ mauvais parieur</li>
                <li>• Upswing ≠ génie du pari</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mindset du pro */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            5. Le Mindset du Professionnel
          </h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-800 mb-3">Les 7 Piliers Mentaux</h3>
              
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">1. Détachement Émotionnel</h4>
                  <p className="text-xs">Chaque pari = décision business, pas passion</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">2. Process Over Results</h4>
                  <p className="text-xs">Une bonne décision reste bonne même si elle perd</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">3. Apprentissage Constant</h4>
                  <p className="text-xs">Chaque erreur = opportunité d'amélioration</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">4. Discipline de Fer</h4>
                  <p className="text-xs">Les règles sont non-négociables</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">5. Patience Infinie</h4>
                  <p className="text-xs">Attendre LA bonne opportunité, pas UNE opportunité</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">6. Humilité</h4>
                  <p className="text-xs">Le marché a toujours raison, vous pouvez toujours vous tromper</p>
                </div>
                
                <div className="bg-white rounded p-3">
                  <h4 className="font-semibold text-sm mb-1">7. Résilience</h4>
                  <p className="text-xs">Rebondir après les échecs est obligatoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Routine quotidienne */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            6. Routine Quotidienne du Mental
          </h2>
          
          <div className="bg-orange-50 rounded p-4">
            <div className="space-y-4">
              <div className="bg-white rounded p-3">
                <h4 className="font-bold text-orange-800 mb-2">🌅 Matin (5 min)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Méditation ou respiration</li>
                  <li>• Définir état mental du jour</li>
                  <li>• Rappel des objectifs long terme</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-3">
                <h4 className="font-bold text-orange-800 mb-2">⚡ Avant session (3 min)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Check émotionnel</li>
                  <li>• Rappel des règles</li>
                  <li>• Limite de temps/pertes</li>
                </ul>
              </div>
              
              <div className="bg-white rounded p-3">
                <h4 className="font-bold text-orange-800 mb-2">🌙 Soir (10 min)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Journal : émotions et décisions</li>
                  <li>• Identifier 1 point d'amélioration</li>
                  <li>• Gratitude pour 1 bonne décision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Signaux d'alarme */}
        <div className="bg-red-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            🚨 Signaux d'Alarme Psychologiques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-3">Stop immédiat si :</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span>Envie de "se refaire" rapidement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span>Colère/frustration intense</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span>Pensées obsessionnelles sur paris</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span>Mensonges sur vos pertes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span>Paris pour oublier problèmes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Actions protectrices :</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Pause minimum 48h</li>
                <li>✓ Parler à quelqu'un</li>
                <li>✓ Réduire les mises de 50%</li>
                <li>✓ Relire vos règles</li>
                <li>✓ Sport/activité physique</li>
                <li>✓ Si besoin : aide professionnelle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            💪 Exercices de Renforcement Mental
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Semaine 1 : Awareness</h3>
              <p className="text-sm">Notez CHAQUE émotion ressentie avant/pendant/après un pari</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Semaine 2 : Pause Power</h3>
              <p className="text-sm">5 minutes de pause obligatoire avant chaque pari</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Semaine 3 : Simulation</h3>
              <p className="text-sm">Parier "sur papier" une semaine pour enlever la pression financière</p>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">Semaine 4 : Détachement</h3>
              <p className="text-sm">Ne pas checker les résultats pendant 24h après placement</p>
            </div>
          </div>
        </div>

        {/* Ressources */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            📚 Ressources Psychologie & Trading
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Livres recommandés :</h4>
              <ul className="text-sm space-y-1">
                <li>• "Trading in the Zone" - Mark Douglas</li>
                <li>• "Thinking in Bets" - Annie Duke</li>
                <li>• "The Mental Game of Poker" - Jared Tendler</li>
                <li>• "Thinking, Fast and Slow" - Kahneman</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Apps utiles :</h4>
              <ul className="text-sm space-y-1">
                <li>• Headspace (méditation)</li>
                <li>• Jour (journaling)</li>
                <li>• Forest (focus & limites)</li>
                <li>• RescueTime (tracking comportement)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Citation finale */}
        <div className="bg-green-100 border-l-4 border-green-600 p-6">
          <p className="text-green-800 font-semibold text-lg italic">
            "Le pari sportif est 20% mathématiques, 80% psychologie. Maîtrisez votre esprit, 
            vous maîtriserez vos profits."
          </p>
          <p className="text-green-600 text-sm mt-2">
            - Vérité universelle du betting professionnel
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/outils-pro"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Outils Pro
          </Link>
          <Link 
            href="/guide-paris-sportifs/responsable"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Parier Responsable
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}