// app/guide-paris-sportifs/responsable/page.js
import Link from 'next/link';

export default function ResponsablePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Parier Responsable</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🛡️ Parier Responsable
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le jeu responsable n'est pas une option, c'est une obligation. Les paris sportifs doivent 
          rester un divertissement contrôlé, jamais une source de problèmes. Protégez-vous et vos proches 
          avec ces principes et outils essentiels.
        </p>
      </div>

      {/* Avertissement important */}
      <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-red-800 mb-2">⚠️ Message Important</h2>
        <p className="text-red-700 font-semibold mb-3">
          Les paris sportifs comportent des risques d'addiction et de pertes financières.
        </p>
        <p className="text-red-600">
          Si vous ressentez que le jeu devient un problème, n'hésitez pas à demander de l'aide.
          Numéro national : 09 74 75 13 13 (appel non surtaxé)
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Les règles d'or */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            1. Les 10 Règles d'Or du Jeu Responsable
          </h2>
          
          <div className="space-y-3">
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold text-green-800">Ne jamais parier l'argent dont vous avez besoin</h3>
                <p className="text-sm">Loyer, courses, factures = intouchables</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold text-green-800">Fixer des limites AVANT de jouer</h3>
                <p className="text-sm">Temps et argent maximum, non négociables</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold text-green-800">Ne jamais emprunter pour parier</h3>
                <p className="text-sm">Ni à la banque, ni aux amis, ni à la famille</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold text-green-800">Accepter les pertes comme partie du jeu</h3>
                <p className="text-sm">L'argent misé est déjà "perdu" mentalement</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <h3 className="font-bold text-green-800">Ne pas parier sous influence</h3>
                <p className="text-sm">Alcool, drogues, émotions fortes = abstention</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">6</span>
              <div>
                <h3 className="font-bold text-green-800">Garder le jeu comme divertissement</h3>
                <p className="text-sm">Pas une source de revenus ni une solution financière</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">7</span>
              <div>
                <h3 className="font-bold text-green-800">Faire des pauses régulières</h3>
                <p className="text-sm">Minimum 1 jour par semaine sans paris</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">8</span>
              <div>
                <h3 className="font-bold text-green-800">Parler ouvertement de ses habitudes</h3>
                <p className="text-sm">Transparence avec famille/amis = protection</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">9</span>
              <div>
                <h3 className="font-bold text-green-800">Tenir un registre de ses paris</h3>
                <p className="text-sm">Conscience réelle des gains/pertes</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded p-4 flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">10</span>
              <div>
                <h3 className="font-bold text-green-800">Demander de l'aide si besoin</h3>
                <p className="text-sm">Aucune honte à reconnaître un problème</p>
              </div>
            </div>
          </div>
        </div>

        {/* Outils de protection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            2. Outils de Protection Disponibles
          </h2>
          
          <div className="space-y-4">
            {/* Limites de dépôt */}
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">💰 Limites de Dépôt</h3>
              <p className="text-sm mb-3">
                Fixez un montant maximum à déposer par jour/semaine/mois
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Comment faire :</p>
                <ul className="text-sm space-y-1">
                  <li>• Dans les paramètres du compte</li>
                  <li>• Section "Jeu Responsable"</li>
                  <li>• Non modifiable à la hausse pendant 7 jours</li>
                  <li>• Recommandé : 5-10% revenus max</li>
                </ul>
              </div>
            </div>

            {/* Limites de mise */}
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">🎯 Limites de Mise</h3>
              <p className="text-sm mb-3">
                Plafonnez vos mises unitaires et totales
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Options disponibles :</p>
                <ul className="text-sm space-y-1">
                  <li>• Mise max par pari</li>
                  <li>• Mise totale par jour</li>
                  <li>• Nombre de paris max/jour</li>
                  <li>• Activation immédiate</li>
                </ul>
              </div>
            </div>

            {/* Limites de temps */}
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold text-orange-800 mb-2">⏰ Limites de Temps</h3>
              <p className="text-sm mb-3">
                Contrôlez votre temps de jeu quotidien
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Fonctionnement :</p>
                <ul className="text-sm space-y-1">
                  <li>• Rappels toutes les heures</li>
                  <li>• Déconnexion automatique</li>
                  <li>• Historique temps passé</li>
                  <li>• Max recommandé : 2h/jour</li>
                </ul>
              </div>
            </div>

            {/* Auto-exclusion */}
            <div className="bg-red-50 rounded p-4">
              <h3 className="font-bold text-red-800 mb-2">🚫 Auto-Exclusion</h3>
              <p className="text-sm mb-3">
                Interdisez-vous l'accès temporairement ou définitivement
              </p>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm mb-2">Durées possibles :</p>
                <ul className="text-sm space-y-1">
                  <li>• 24h / 7 jours / 1 mois</li>
                  <li>• 6 mois / 1 an / Définitive</li>
                  <li>• Irrévocable pendant la période</li>
                  <li>• Fichier national ARJEL disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Signes d'alerte */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            3. Signes d'Alerte d'un Problème de Jeu
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="font-semibold text-red-800 mb-3">
              Si vous cochez 3+ cases, il est temps d'agir :
            </p>
            
            <div className="space-y-3">
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Je pense aux paris constamment, même au travail/école</span>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">J'ai menti sur mes pertes à mes proches</span>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">J'ai emprunté ou vendu des biens pour parier</span>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Je me sens anxieux/déprimé quand je ne parie pas</span>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">J'ai essayé d'arrêter mais je n'y arrive pas</span>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Les paris affectent mes relations personnelles</span>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">Je parie pour oublier mes problèmes</span>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input type="checkbox" className="mt-1 mr-3" />
                <span className="text-sm">J'ai des problèmes financiers à cause des paris</span>
              </label>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <strong>Important :</strong> Ces signes ne signifient pas que vous êtes "faible". 
              L'addiction au jeu est une maladie reconnue qui se soigne.
            </p>
          </div>
        </div>

        {/* Ressources d'aide */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            4. Ressources d'Aide et Support
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">📞 Lignes d'Écoute</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Joueurs Info Service :</strong>
                  <p>09 74 75 13 13 (prix appel local)</p>
                  <p>7j/7 de 8h à 2h</p>
                </li>
                <li>
                  <strong>Adictel :</strong>
                  <p>0 805 020 000 (gratuit)</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">🌐 Sites Web</h3>
              <ul className="space-y-2 text-sm">
                <li>• joueurs-info-service.fr</li>
                <li>• ifac-addictions.fr</li>
                <li>• sos-jeu.ch</li>
                <li>• gamblingtherapy.org</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">👥 Groupes de Soutien</h3>
              <ul className="space-y-2 text-sm">
                <li>• Joueurs Anonymes France</li>
                <li>• Groupes locaux (CJC)</li>
                <li>• Forums en ligne</li>
                <li>• Thérapies de groupe</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-3">🏥 Aide Professionnelle</h3>
              <ul className="space-y-2 text-sm">
                <li>• Consultations addictologie</li>
                <li>• Psychologues spécialisés</li>
                <li>• Centres de soins (CSAPA)</li>
                <li>• Thérapies cognitives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pour les proches */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            5. Guide pour les Proches
          </h2>
          
          <div className="space-y-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">Comment aider quelqu'un ?</h3>
              <ul className="space-y-2 text-sm">
                <li>• Abordez le sujet avec bienveillance, sans jugement</li>
                <li>• Écoutez sans minimiser le problème</li>
                <li>• Ne prêtez jamais d'argent pour "aider"</li>
                <li>• Encouragez à chercher de l'aide professionnelle</li>
                <li>• Protégez vos propres finances</li>
                <li>• Participez aux groupes de soutien pour proches</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-bold mb-2">Ce qu'il ne faut PAS faire :</h3>
              <ul className="space-y-2 text-sm">
                <li>❌ Faire la morale ou culpabiliser</li>
                <li>❌ Couvrir les dettes ou mentir pour protéger</li>
                <li>❌ Ignorer le problème en espérant qu'il disparaisse</li>
                <li>❌ Menacer ou donner des ultimatums impossibles</li>
                <li>❌ Prendre le contrôle total de ses finances</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan de protection personnel */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            🛡️ Créez Votre Plan de Protection Personnel
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">1. Mes limites financières</h3>
              <ul className="text-sm space-y-1">
                <li>• Budget mensuel paris : _____€ (max 5% revenus)</li>
                <li>• Mise maximale par pari : _____€</li>
                <li>• Perte max tolérée/mois : _____€</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">2. Mes limites temporelles</h3>
              <ul className="text-sm space-y-1">
                <li>• Temps max/jour : _____ heures</li>
                <li>• Jours sans paris/semaine : _____</li>
                <li>• Pause obligatoire si : _____________</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">3. Mon système d'alerte</h3>
              <ul className="text-sm space-y-1">
                <li>• Personne de confiance : _____________</li>
                <li>• Check-in hebdomadaire avec : _______</li>
                <li>• Si problème, j'appelle : ___________</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded p-4">
              <h3 className="font-bold mb-2">4. Mes activités alternatives</h3>
              <ul className="text-sm space-y-1">
                <li>• Sport/hobby 1 : _________________</li>
                <li>• Sport/hobby 2 : _________________</li>
                <li>• Activité sociale : _______________</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alternatives saines */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            6. Alternatives Saines au Jeu
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold text-green-800 mb-2">🏃 Adrénaline</h3>
              <ul className="text-sm space-y-1">
                <li>• Sports extrêmes</li>
                <li>• Compétitions sportives</li>
                <li>• Jeux vidéo compétitifs</li>
                <li>• Escape games</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded p-4">
              <h3 className="font-bold text-blue-800 mb-2">🧮 Analyse</h3>
              <ul className="text-sm space-y-1">
                <li>• Trading démo</li>
                <li>• Fantasy sports gratuits</li>
                <li>• Jeux de stratégie</li>
                <li>• Programmation</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold text-purple-800 mb-2">💰 Finance</h3>
              <ul className="text-sm space-y-1">
                <li>• Investissement ETF</li>
                <li>• Épargne projet</li>
                <li>• Side business</li>
                <li>• Formation finance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Message final */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            💚 Message de Rounders Pro
          </h3>
          <p className="text-gray-700 mb-4">
            Chez Rounders Pro, nous croyons au jeu intelligent et responsable. Les paris sportifs 
            peuvent être une activité enrichissante quand ils sont pratiqués avec modération et discipline.
          </p>
          <p className="text-gray-700 mb-4">
            Si vous suivez ce guide mais ressentez toujours des difficultés à contrôler vos habitudes 
            de jeu, c'est le signe qu'il faut faire une pause et chercher de l'aide.
          </p>
          <p className="text-gray-700 font-semibold">
            Votre bien-être vaut infiniment plus que n'importe quel gain. Jouez responsable, jouez heureux.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/psychologie"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Psychologie du Parieur
          </Link>
          <Link 
            href="/guide-paris-sportifs"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
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