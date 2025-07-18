// app/guide-casino/responsable/page.js
import Link from 'next/link';

export default function ResponsablePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-casino" className="text-red-600 hover:text-red-700">
          Guide Casino
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Jouer Responsable</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🛡️ Jouer Responsable
      </h1>

      {/* Chapeau */}
      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le jeu responsable est la seule façon de profiter du casino sans mettre en danger 
          votre bien-être financier et personnel. Apprenez à fixer des limites, reconnaître 
          les signes d'alerte et maintenir le jeu comme un divertissement sain.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Principes fondamentaux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎯 Les Principes du Jeu Responsable
          </h2>
          
          <div className="bg-green-50 rounded p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded p-4">
                <h3 className="font-bold text-green-800 mb-3">✅ Le Jeu DOIT Être</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Un divertissement :</strong> Comme le cinéma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Budgété :</strong> Argent qu'on peut perdre</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Limité dans le temps :</strong> Sessions courtes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Social :</strong> Partagé avec modération</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Contrôlé :</strong> Vous décidez toujours</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-100 rounded p-4">
                <h3 className="font-bold text-red-800 mb-3">❌ Le Jeu NE DOIT PAS</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Être une solution :</strong> Financière ou émotionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Dominer votre vie :</strong> Priorité sur le reste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Créer du stress :</strong> Anxiété, dette</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Être caché :</strong> Mensonges, dissimulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Échapper au contrôle :</strong> Compulsion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Outils de contrôle */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🛠️ Outils de Contrôle Essentiels
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">⏰ Limites de Temps</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  <strong>Session :</strong> Maximum 1-2h
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Hebdomadaire :</strong> 2-3 sessions max
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Alarmes :</strong> Rappels obligatoires
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Pauses :</strong> 15min/heure minimum
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">💰 Limites Financières</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/10 rounded p-2">
                  <strong>Dépôt :</strong> Maximum/mois fixé
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Perte :</strong> Stop loss par session
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Mise :</strong> % fixe du budget
                </li>
                <li className="bg-white/10 rounded p-2">
                  <strong>Retrait :</strong> Gains sécurisés
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 rounded p-4 mt-4">
            <p className="text-center">
              💡 La plupart des casinos offrent ces outils. UTILISEZ-LES !
            </p>
          </div>
        </div>

        {/* Test auto-évaluation */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            📋 Test d'Auto-Évaluation
          </h2>
          
          <div className="bg-orange-50 rounded p-6">
            <p className="mb-4 font-semibold">
              Répondez honnêtement. 3+ "OUI" = Signal d'alerte
            </p>
            
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm">1. Jouez-vous plus longtemps que prévu régulièrement ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">2. Avez-vous déjà menti sur vos pertes ou le temps passé ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">3. Empruntez-vous ou utilisez-vous l'argent des factures ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">4. Le jeu affecte-t-il votre humeur ou sommeil ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">5. Pensez-vous au jeu quand vous ne jouez pas ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">6. Avez-vous essayé d'arrêter sans succès ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">7. Négligez-vous travail/famille pour jouer ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">8. Jouez-vous pour échapper aux problèmes ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">9. Chassez-vous vos pertes systématiquement ?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">10. Le jeu est-il votre principale source d'excitation ?</p>
              </div>
            </div>
            
            <div className="bg-red-100 rounded p-4 mt-4">
              <p className="text-red-800 font-semibold">
                Score 3+ : Considérez sérieusement une pause et/ou aide professionnelle
              </p>
            </div>
          </div>
        </div>

        {/* Stratégies de protection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🛡️ Stratégies de Protection
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-3">💳 Protection Financière</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Compte séparé :</strong> Juste pour le jeu
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Carte prépayée :</strong> Montant limité
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Pas de crédit :</strong> Cash uniquement
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Blocage bancaire :</strong> Transactions casino
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Budget visible :</strong> Suivi transparent
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">🧠 Protection Mentale</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white rounded p-2">
                  <strong>Activités alternatives :</strong> Sport, hobbies
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Réseau de soutien :</strong> Amis informés
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Journal de jeu :</strong> Track émotions
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Méditation :</strong> Gestion du stress
                </li>
                <li className="bg-white rounded p-2">
                  <strong>Objectifs vie :</strong> Au-delà du jeu
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan de jeu sain */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📅 Votre Plan de Jeu Responsable
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <div className="space-y-4">
              <div className="bg-white/10 rounded p-4">
                <h3 className="font-bold mb-2">1. Définir le Budget Mensuel</h3>
                <p className="text-sm">
                  Maximum 5% du revenu disponible après toutes charges
                </p>
                <div className="bg-white/20 rounded p-2 mt-2">
                  <p className="text-center">Mon budget : _______€/mois</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded p-4">
                <h3 className="font-bold mb-2">2. Fréquence de Jeu</h3>
                <p className="text-sm">
                  Maximum 2-3 sessions par semaine, jamais jours consécutifs
                </p>
                <div className="bg-white/20 rounded p-2 mt-2">
                  <p className="text-center">Mes jours : _______ et _______</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded p-4">
                <h3 className="font-bold mb-2">3. Durée par Session</h3>
                <p className="text-sm">
                  Maximum 1-2 heures avec pause obligatoire
                </p>
                <div className="bg-white/20 rounded p-2 mt-2">
                  <p className="text-center">Ma limite : _______ minutes</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded p-4">
                <h3 className="font-bold mb-2">4. Stop Loss</h3>
                <p className="text-sm">
                  Perte maximum acceptée par session (20-30% budget mensuel)
                </p>
                <div className="bg-white/20 rounded p-2 mt-2">
                  <p className="text-center">Mon stop : _______€</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ressources d'aide */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🆘 Ressources d'Aide et Support
          </h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-3">📞 Lignes d'Aide</h3>
              <ul className="space-y-2">
                <li className="bg-white rounded p-3">
                  <strong>Joueurs Info Service :</strong> 09 74 75 13 13
                  <p className="text-sm text-gray-600">7j/7, 8h-2h, appel non surtaxé</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong>Adictel :</strong> 0 805 020 000
                  <p className="text-sm text-gray-600">Service gratuit et anonyme</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong>SOS Joueurs :</strong> 09 69 39 55 12
                  <p className="text-sm text-gray-600">Écoute et orientation</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-3">👥 Groupes de Soutien</h3>
              <ul className="space-y-2">
                <li className="bg-white rounded p-3">
                  <strong>Joueurs Anonymes France</strong>
                  <p className="text-sm">Réunions dans toute la France</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong>Forums en ligne</strong>
                  <p className="text-sm">Communautés d'entraide</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong>Thérapies de groupe</strong>
                  <p className="text-sm">Encadrées par professionnels</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-3">🏥 Aide Professionnelle</h3>
              <ul className="space-y-2">
                <li className="bg-white rounded p-3">
                  <strong>Psychologues spécialisés</strong>
                  <p className="text-sm">Addiction comportementale</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong>Centres CSAPA</strong>
                  <p className="text-sm">Gratuit et anonyme</p>
                </li>
                <li className="bg-white rounded p-3">
                  <strong>Médecin traitant</strong>
                  <p className="text-sm">Premier contact possible</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Auto-exclusion */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🚫 L'Auto-Exclusion : Un Outil Puissant
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <p className="mb-4">
              L'auto-exclusion vous interdit l'accès aux casinos pour une période définie.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded p-4">
                <h3 className="font-bold mb-2">Types d'Exclusion</h3>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Temporaire :</strong> 6 mois à 3 ans</li>
                  <li>• <strong>Définitive :</strong> Sans retour possible</li>
                  <li>• <strong>Site unique :</strong> Un casino spécifique</li>
                  <li>• <strong>Nationale :</strong> Tous les casinos</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded p-4">
                <h3 className="font-bold mb-2">Comment Faire</h3>
                <ul className="text-sm space-y-1">
                  <li>• Contact support casino</li>
                  <li>• Formulaire en ligne</li>
                  <li>• Fichier national (ARJEL)</li>
                  <li>• Immédiat et gratuit</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-400/20 rounded p-3 mt-4">
              <p className="text-center font-semibold">
                Pas de honte à s'exclure = Acte de courage et de responsabilité
              </p>
            </div>
          </div>
        </div>

        {/* Environnement sain */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🏡 Créer un Environnement Sain
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">👨‍👩‍👧 Famille</h3>
              <ul className="text-sm space-y-1">
                <li>• Communication ouverte</li>
                <li>• Budget transparent</li>
                <li>• Activités ensemble</li>
                <li>• Pas de jugement</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">💼 Travail</h3>
              <ul className="text-sm space-y-1">
                <li>• Jamais au bureau</li>
                <li>• Pauses productives</li>
                <li>• Focus carrière</li>
                <li>• Équilibre vie pro</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">🎯 Personnel</h3>
              <ul className="text-sm space-y-1">
                <li>• Hobbies variés</li>
                <li>• Sport régulier</li>
                <li>• Sommeil suffisant</li>
                <li>• Alimentation saine</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Message positif */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            ✨ Le Jeu Responsable = Plus de Plaisir
          </h2>
          
          <div className="bg-white/20 rounded p-6">
            <p className="text-lg mb-4">
              Contrairement aux idées reçues, jouer responsable augmente le plaisir :
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-2xl mr-3">😊</span>
                <div>
                  <strong>Moins de stress :</strong> Pas d'inquiétude financière
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎉</span>
                <div>
                  <strong>Plus de fun :</strong> Focus sur le divertissement
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">💪</span>
                <div>
                  <strong>Contrôle total :</strong> Vous décidez toujours
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🌟</span>
                <div>
                  <strong>Durabilité :</strong> Plaisir qui dure des années
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Engagement personnel */}
        <div className="bg-blue-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            📜 Mon Engagement Personnel
          </h2>
          
          <div className="bg-white rounded p-6">
            <p className="mb-4 text-center font-semibold">
              Je m'engage à jouer de manière responsable :
            </p>
            
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">1.</span>
                <span>Je ne jouerai qu'avec de l'argent que je peux me permettre de perdre</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">2.</span>
                <span>Je fixerai et respecterai mes limites de temps et d'argent</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">3.</span>
                <span>Je ne jouerai jamais sous l'influence d'alcool ou d'émotions fortes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">4.</span>
                <span>Je ne chercherai jamais à récupérer mes pertes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">5.</span>
                <span>Je garderai le jeu comme un divertissement, pas une solution</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">6.</span>
                <span>Je serai honnête avec moi-même et mes proches</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">7.</span>
                <span>Je demanderai de l'aide si je perds le contrôle</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">8.</span>
                <span>Je privilégierai toujours ma santé et mes relations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">9.</span>
                <span>Je prendrai des pauses régulières et évaluerai mon comportement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">10.</span>
                <span>Je me rappellerai que ma valeur ne dépend pas de mes gains ou pertes</span>
              </li>
            </ol>
            
            <div className="mt-6 p-4 border-2 border-blue-300 rounded">
              <p className="text-center text-blue-700 font-semibold">
                Date : _____________ Signature : _____________
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-green-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">
            🎯 Rappel Final : Le Vrai Jackpot
          </h3>
          <p className="text-lg text-green-800 mb-4">
            Le vrai jackpot n'est pas dans les machines, mais dans :
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Une vie équilibrée et épanouie</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Des relations saines avec vos proches</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Une situation financière stable</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">La paix d'esprit et le contrôle de soi</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span className="text-gray-700">Le plaisir sans les regrets</span>
            </li>
          </ul>
          <p className="mt-4 text-center font-bold text-green-900">
            Ne misez jamais ces vrais trésors sur un coup de dés ! 🎲
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-casino/psychologie"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Psychologie du Joueur
          </Link>
          <Link 
            href="/guide-casino"
            className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Retour au Guide
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}