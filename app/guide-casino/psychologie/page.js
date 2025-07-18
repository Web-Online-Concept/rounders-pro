// app/guide-casino/psychologie/page.js
import Link from 'next/link';

export default function PsychologiePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Psychologie du Joueur</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🧠 Psychologie du Joueur
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le mental représente 80% du succès au casino. Comprendre la psychologie du jeu, 
          maîtriser ses émotions et développer la discipline mentale sont essentiels pour 
          éviter les pièges émotionnels qui mènent aux pertes.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Comprendre le cerveau du joueur */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🧬 Le Cerveau Face au Jeu
          </h2>
          
          <div className="bg-purple-50 rounded p-6">
            <h3 className="font-bold text-purple-800 mb-4">La Chimie du Plaisir</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">🎰 Dopamine et Récompense</h4>
                <ul className="text-sm space-y-2">
                  <li>• Anticipation du gain = pic dopamine</li>
                  <li>• Plus fort que le gain lui-même</li>
                  <li>• Crée l'addiction comportementale</li>
                  <li>• "Near miss" = dopamine aussi</li>
                </ul>
              </div>
              <div className="bg-white rounded p-4">
                <h4 className="font-bold mb-2">⚡ Adrénaline et Stress</h4>
                <ul className="text-sm space-y-2">
                  <li>• Montée d'adrénaline = excitation</li>
                  <li>• Stress positif recherché</li>
                  <li>• Peut masquer la fatigue</li>
                  <li>• Altère le jugement</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded p-4">
              <p className="text-yellow-800 font-semibold">
                ⚠️ Le casino exploite ces mécanismes : sons, lumières, near-miss programmés
              </p>
            </div>
          </div>
        </div>

        {/* Biais cognitifs */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🎭 Les Biais Cognitifs du Joueur
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">1. L'Illusion de Contrôle</h3>
              <p className="text-sm mb-2">
                Croire qu'on peut influencer le hasard par ses actions.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Souffler sur les dés</li>
                <li>• "Sentir" la bonne machine</li>
                <li>• Rituels porte-bonheur</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">2. Le Sophisme du Joueur</h3>
              <p className="text-sm mb-2">
                Penser que les événements passés influencent le futur.
              </p>
              <ul className="text-sm space-y-1">
                <li>• "Le rouge est dû après 5 noirs"</li>
                <li>• "Cette slot n'a pas payé depuis longtemps"</li>
                <li>• Chercher des patterns inexistants</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">3. Le Biais de Confirmation</h3>
              <p className="text-sm mb-2">
                Ne retenir que ce qui confirme nos croyances.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Oublier les pertes</li>
                <li>• Surestimer les gains</li>
                <li>• "Mon système marche" (en ignorant les échecs)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* États émotionnels */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            😤 Le Tilt : L'Ennemi #1
          </h2>
          
          <div className="bg-red-50 rounded p-6">
            <p className="mb-4">
              Le tilt est l'état émotionnel où la frustration prend le contrôle de vos décisions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <h3 className="font-bold text-red-800 mb-2">🔥 Signes du Tilt</h3>
                <ul className="text-sm space-y-1">
                  <li>• Augmenter les mises brutalement</li>
                  <li>• Jouer plus vite, sans réfléchir</li>
                  <li>• Changer de stratégie constamment</li>
                  <li>• Colère/frustration visible</li>
                  <li>• "All-in" irrationnels</li>
                  <li>• Ignorer ses limites</li>
                </ul>
              </div>
              <div className="bg-white rounded p-4">
                <h3 className="font-bold text-green-800 mb-2">💊 Antidotes au Tilt</h3>
                <ul className="text-sm space-y-1">
                  <li>• STOP immédiat (pas "encore un")</li>
                  <li>• Respiration profonde 5 min</li>
                  <li>• Sortir physiquement</li>
                  <li>• Rappeler ses limites</li>
                  <li>• Accepter la variance</li>
                  <li>• Pause minimum 24h</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-200 rounded p-3 mt-4">
              <p className="text-red-900 font-semibold text-center">
                90% des grosses pertes arrivent en tilt. Reconnaître = Pouvoir stopper
              </p>
            </div>
          </div>
        </div>

        {/* Profils psychologiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            👥 Les 4 Profils de Joueurs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">🎯 Le Stratège</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Forces :</strong> Discipliné, calculateur</li>
                <li><strong>Faiblesses :</strong> Trop confiant, rigide</li>
                <li><strong>Danger :</strong> Croire battre le système</li>
                <li><strong>Conseil :</strong> Accepter les limites math</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🎲 L'Émotionnel</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Forces :</strong> Intuitif, passionné</li>
                <li><strong>Faiblesses :</strong> Impulsif, tilt facile</li>
                <li><strong>Danger :</strong> Pertes de contrôle</li>
                <li><strong>Conseil :</strong> Limites strictes obligatoires</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">🎰 Le Social</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Forces :</strong> Joue pour le fun</li>
                <li><strong>Faiblesses :</strong> Influence des autres</li>
                <li><strong>Danger :</strong> Dépasser pour impressionner</li>
                <li><strong>Conseil :</strong> Budget personnel fixe</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">🏆 Le Compétiteur</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Forces :</strong> Déterminé, endurant</li>
                <li><strong>Faiblesses :</strong> Mauvais perdant</li>
                <li><strong>Danger :</strong> Chasser les pertes</li>
                <li><strong>Conseil :</strong> Victoire = partir gagnant</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Techniques mentales */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🧘 Techniques de Maîtrise Mentale
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">🎯 Avant la Session</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  <strong>Visualisation :</strong> Imaginer respecter ses limites
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Objectifs clairs :</strong> Fun, pas profit
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Check mental :</strong> Humeur stable ?
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Rappel limites :</strong> Budget et temps
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">⚡ Pendant le Jeu</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  <strong>Respiration :</strong> 3 profondes entre décisions
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Pauses forcées :</strong> 5 min/heure minimum
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Self-talk positif :</strong> "Je contrôle"
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Détachement :</strong> Observer ses émotions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gestion des émotions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            💭 Gérer les Émotions du Jeu
          </h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded p-4">
              <h3 className="font-bold text-indigo-800 mb-3">😊 Après un Gain</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-red-100 rounded p-3">
                  <p className="font-semibold text-sm mb-1">❌ Pièges</p>
                  <ul className="text-xs space-y-1">
                    <li>• Euphorie = mauvaises décisions</li>
                    <li>• "Je suis en veine" = illusion</li>
                    <li>• Augmenter les mises</li>
                    <li>• Jouer plus longtemps</li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded p-3">
                  <p className="font-semibold text-sm mb-1">✅ Bonne Gestion</p>
                  <ul className="text-xs space-y-1">
                    <li>• Célébrer modérément</li>
                    <li>• Sécuriser une partie</li>
                    <li>• Garder même stratégie</li>
                    <li>• Considérer partir gagnant</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">😔 Après une Perte</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-red-100 rounded p-3">
                  <p className="font-semibold text-sm mb-1">❌ Pièges</p>
                  <ul className="text-xs space-y-1">
                    <li>• Colère/frustration</li>
                    <li>• "Je dois me refaire"</li>
                    <li>• Doubler les mises</li>
                    <li>• Emprunter pour continuer</li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded p-3">
                  <p className="font-semibold text-sm mb-1">✅ Bonne Gestion</p>
                  <ul className="text-xs space-y-1">
                    <li>• Accepter = partie du jeu</li>
                    <li>• Respecter stop loss</li>
                    <li>• Pause obligatoire</li>
                    <li>• Analyser à froid plus tard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Développer la discipline */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            💪 Développer la Discipline Mentale
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <h3 className="text-xl font-bold mb-4">Les 5 Piliers de la Discipline</h3>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <h4 className="font-bold mb-2">1. Conscience de Soi</h4>
                <p className="text-sm">
                  Connaître ses triggers, faiblesses et limites personnelles.
                </p>
              </div>
              
              <div className="bg-white/10 rounded p-4">
                <h4 className="font-bold mb-2">2. Préparation Mentale</h4>
                <p className="text-sm">
                  Plan clair avant chaque session. Jamais d'improvisation.
                </p>
              </div>
              
              <div className="bg-white/10 rounded p-4">
                <h4 className="font-bold mb-2">3. Détachement Émotionnel</h4>
                <p className="text-sm">
                  L'argent misé est déjà perdu mentalement. Juste du divertissement.
                </p>
              </div>
              
              <div className="bg-white/10 rounded p-4">
                <h4 className="font-bold mb-2">4. Respect des Règles</h4>
                <p className="text-sm">
                  Ses propres règles sont sacrées. Aucune exception.
                </p>
              </div>
              
              <div className="bg-white/10 rounded p-4">
                <h4 className="font-bold mb-2">5. Apprentissage Constant</h4>
                <p className="text-sm">
                  Analyser ses sessions pour identifier patterns destructeurs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exercices pratiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🏋️ Exercices de Renforcement Mental
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">📝 Journal de Jeu</h3>
              <p className="text-sm mb-2">
                Tenir un journal détaillé de chaque session :
              </p>
              <ul className="text-sm space-y-1">
                <li>• État émotionnel avant/après</li>
                <li>• Décisions prises et pourquoi</li>
                <li>• Moments de faiblesse</li>
                <li>• Respect des limites ?</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">⏱️ Simulation Mentale</h3>
              <p className="text-sm mb-2">
                Pratiquer mentalement des scénarios difficiles :
              </p>
              <ul className="text-sm space-y-1">
                <li>• Visualiser une grosse perte et rester calme</li>
                <li>• S'imaginer respecter son stop loss</li>
                <li>• Répéter "je pars" après un gain</li>
                <li>• Anticiper la tentation de rechaser</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">🎭 Role-Play</h3>
              <p className="text-sm mb-2">
                Jouer différents scénarios avec un ami :
              </p>
              <ul className="text-sm space-y-1">
                <li>• L'ami vous pousse à continuer</li>
                <li>• Résister à la pression sociale</li>
                <li>• Expliquer pourquoi vous partez</li>
                <li>• Pratiquer le "non" ferme</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mindset gagnant */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🏆 Le Mindset du Joueur Intelligent
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">✅ Mentalité Saine</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Je paie pour du divertissement"</li>
                <li>• "Les pertes sont le prix du fun"</li>
                <li>• "Je contrôle mes actions, pas les résultats"</li>
                <li>• "Partir = toujours une victoire"</li>
                <li>• "Mon ego n'est pas en jeu"</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">❌ Mentalité Toxique</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Je dois gagner pour être heureux"</li>
                <li>• "Je mérite de gagner"</li>
                <li>• "Le casino me doit quelque chose"</li>
                <li>• "Je ne peux pas partir perdant"</li>
                <li>• "Je suis meilleur que les autres"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ressources aide */}
        <div className="bg-orange-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            🆘 Quand Chercher de l'Aide
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-3">Signaux d'Alerte Psychologiques</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  • Obsession constante du jeu
                </li>
                <li className="bg-white rounded p-2">
                  • Anxiété sans jouer
                </li>
                <li className="bg-white rounded p-2">
                  • Mensonges sur le jeu
                </li>
                <li className="bg-white rounded p-2">
                  • Isolation sociale
                </li>
                <li className="bg-white rounded p-2">
                  • Dépression liée aux pertes
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Ressources d'Aide</h3>
              <div className="bg-white rounded p-4">
                <ul className="space-y-2 text-sm">
                  <li><strong>Joueurs Anonymes :</strong> Groupes de soutien</li>
                  <li><strong>Psychologue spécialisé :</strong> Thérapie addiction</li>
                  <li><strong>Ligne d'écoute :</strong> 09 74 75 13 13</li>
                  <li><strong>Auto-exclusion :</strong> Se bannir des casinos</li>
                  <li><strong>Famille/Amis :</strong> Réseau de soutien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            🧠 Les 10 Lois de la Psychologie du Joueur
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">1.</span>
              <span className="text-gray-700">Ton pire ennemi au casino, c'est toi-même</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">2.</span>
              <span className="text-gray-700">Les émotions fortes = décisions catastrophiques</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">3.</span>
              <span className="text-gray-700">Le tilt a ruiné plus de joueurs que la malchance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">4.</span>
              <span className="text-gray-700">Ton cerveau voit des patterns où il n'y en a pas</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">5.</span>
              <span className="text-gray-700">La discipline bat le talent 100% du temps</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">6.</span>
              <span className="text-gray-700">Accepter de perdre = première victoire mentale</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">7.</span>
              <span className="text-gray-700">L'ego au casino = compte en banque vide</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">8.</span>
              <span className="text-gray-700">Partir est toujours la décision la plus difficile et la plus sage</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">9.</span>
              <span className="text-gray-700">La vraie victoire : s'amuser sans se ruiner</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">10.</span>
              <span className="text-gray-700">Connaître ses limites mentales > connaître les stratégies</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/erreurs-eviter"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Erreurs à Éviter
          </Link>
          <Link 
            href="/guide-casino/responsable"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Jouer Responsable
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}