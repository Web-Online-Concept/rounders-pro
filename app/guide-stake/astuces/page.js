// app/guide-stake/astuces/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Astuces Pro Stake - Affichage Euros, Coffre, 2FA | Rounders Pro',
  description: 'Découvrez les astuces cachées de Stake : afficher en euros, utiliser le coffre-fort, système de pourboires, double authentification.',
  keywords: 'stake astuces, stake euros, stake coffre, stake 2fa, stake tips',
};

export default function GuideAstucesPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        💡 Astuces Pro pour Stake
      </h1>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-8">
        <p className="text-purple-900 font-semibold">
          🎯 Optimisez votre expérience Stake avec ces astuces méconnues
        </p>
        <p className="text-purple-800 mt-1">
          4 fonctionnalités essentielles que la plupart des joueurs ignorent
        </p>
      </div>

      {/* Astuce 1 - Affichage Euros */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </span>
              Afficher votre Solde en Euros
            </h2>
          </div>
          
          <div className="p-6">
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-blue-900 font-semibold">
                💶 Fini les calculs de conversion ! Affichez directement votre solde en euros.
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Comment faire :</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm font-bold">
                  1
                </span>
                <p className="text-gray-700">
                  En haut de la page, à gauche du bouton "Wallet", cliquez sur votre solde
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm font-bold">
                  2
                </span>
                <p className="text-gray-700">
                  Un menu déroulant apparaît avec toutes les devises
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm font-bold">
                  3
                </span>
                <p className="text-gray-700">
                  Sélectionnez <strong>EUR (€)</strong>
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm font-bold">
                  4
                </span>
                <p className="text-gray-700">
                  Votre solde s&apos;affiche maintenant en euros !
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
              <p className="text-green-800">
                <strong>✅ Avantage :</strong> Vous savez exactement combien vous misez et gagnez en euros, 
                sans avoir à convertir mentalement depuis les cryptos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Astuce 2 - Coffre */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="bg-white text-green-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </span>
              Utiliser le Coffre-Fort (Vault)
            </h2>
          </div>
          
          <div className="p-6">
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <p className="text-green-900 font-semibold">
                🔐 Protégez vos gains du tilt ! Le coffre vous permet de mettre de l&apos;argent de côté.
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">À quoi sert le coffre ?</h3>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>Protéger vos gains :</strong> L&apos;argent dans le coffre ne peut pas être misé
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>Gérer votre bankroll :</strong> Définissez un budget de jeu quotidien
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>Éviter le tilt :</strong> Impossible de toucher au coffre pendant 24h minimum
                </span>
              </li>
            </ul>

            <h3 className="font-bold text-gray-900 mb-4">Comment l&apos;utiliser :</h3>
            
            <div className="bg-gray-100 rounded-lg p-4">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Allez dans "Wallet" → "Vault"</li>
                <li>Choisissez le montant à mettre de côté</li>
                <li>Définissez une durée de verrouillage (24h minimum)</li>
                <li>Confirmez avec votre 2FA</li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mt-6">
              <p className="text-amber-900 font-semibold mb-2">💡 Stratégie Pro :</p>
              <p className="text-amber-800 text-sm">
                Après chaque grosse victoire, mettez 50% dans le coffre pour 7 jours. 
                Vous serez content de l&apos;avoir fait si vous perdez le reste !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Astuce 3 - Pourboires */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="bg-white text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </span>
              Système de Pourboires (Tips)
            </h2>
          </div>
          
          <div className="p-6">
            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <p className="text-purple-900 font-semibold">
                💸 Envoyez et recevez des pourboires instantanément avec d&apos;autres joueurs !
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Fonctionnalités du système :</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📤 Envoyer un tip</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Wallet → Tip</li>
                  <li>• Entrez le pseudo du joueur</li>
                  <li>• Choisissez le montant</li>
                  <li>• Ajoutez un message (optionnel)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📥 Recevoir des tips</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Notification instantanée</li>
                  <li>• Crédit immédiat sur le solde</li>
                  <li>• Historique dans Wallet</li>
                  <li>• Possibilité de remercier</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Utilisations populaires :</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Remercier un streamer</strong> pour ses conseils ou son contenu
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Partager la chance</strong> après un gros gain
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Aider un ami</strong> qui a eu une mauvaise série
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Organiser des concours</strong> dans le chat
                </span>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800">
                <strong>📊 Info :</strong> Les tips sont gratuits et instantanés. 
                Aucune commission n&apos;est prélevée par Stake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Astuce 4 - 2FA */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="bg-white text-red-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                4
              </span>
              Configurer la Double Authentification (2FA)
            </h2>
          </div>
          
          <div className="p-6">
            <div className="bg-red-50 rounded-lg p-4 mb-6">
              <p className="text-red-900 font-semibold">
                🔒 ESSENTIEL : Protégez votre compte avec la 2FA. C&apos;est votre meilleure défense !
              </p>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Pourquoi activer la 2FA ?</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✅ Avantages</h4>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Protection maximale du compte</li>
                  <li>• Sécurise connexions et retraits</li>
                  <li>• Bloque les accès non autorisés</li>
                  <li>• Tranquillité d&apos;esprit totale</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-2">❌ Sans 2FA</h4>
                <ul className="space-y-1 text-sm text-red-800">
                  <li>• Risque de piratage élevé</li>
                  <li>• Vol de fonds possible</li>
                  <li>• Aucun recours en cas de hack</li>
                  <li>• Compte vulnérable</li>
                </ul>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Configuration étape par étape :</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Téléchargez une app 2FA</p>
                  <p className="text-gray-700 text-sm">
                    Google Authenticator, Authy ou Microsoft Authenticator
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Allez dans Settings → Security</p>
                  <p className="text-gray-700 text-sm">
                    Cliquez sur "Enable 2FA"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Scannez le QR Code</p>
                  <p className="text-gray-700 text-sm">
                    Avec votre application d&apos;authentification
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 font-bold">
                  4
                </span>
                <div>
                  <p className="font-semibold text-gray-900">Sauvegardez les codes de récupération</p>
                  <p className="text-gray-700 text-sm">
                    <strong className="text-red-600">TRÈS IMPORTANT !</strong> Gardez-les en lieu sûr
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 mt-6">
              <p className="text-amber-900 font-bold mb-2">
                ⚠️ ATTENTION CRITIQUE
              </p>
              <p className="text-amber-800 text-sm">
                Sans vos codes de récupération, vous perdrez définitivement l&apos;accès à votre compte 
                si vous perdez votre téléphone. Imprimez-les ou stockez-les dans un coffre-fort numérique !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🎯 Astuces Bonus Rapides
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">⚡ Raccourcis Claviers</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <kbd>Space</kbd> = Lancer le pari</li>
              <li>• <kbd>A</kbd> = Pari automatique</li>
              <li>• <kbd>Q</kbd> = Diviser par 2</li>
              <li>• <kbd>W</kbd> = Multiplier par 2</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">🎨 Mode Sombre/Clair</h3>
            <p className="text-sm text-gray-700">
              Cliquez sur l&apos;icône soleil/lune en bas à gauche pour changer le thème
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">📊 Statistiques Détaillées</h3>
            <p className="text-sm text-gray-700">
              Statistics → Voir tous vos gains/pertes par jeu et période
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">🔕 Mode Invisible</h3>
            <p className="text-sm text-gray-700">
              Settings → Privacy → Cachez votre activité aux autres joueurs
            </p>
          </div>
        </div>
      </section>

      {/* CTA Twitter */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-3">
          Plus d&apos;astuces exclusives ?
        </h3>
        <p className="mb-4">
          Suivez-nous sur Twitter pour des tips quotidiens et des stratégies avancées
        </p>
        <a
          href="https://x.com/rounders_pro"
          target="_blank"
          className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          @rounders_pro
        </a>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/strategies"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Stratégies
        </Link>
        <Link
          href="/guide-stake/faq"
          className="text-blue-600 hover:underline font-medium"
        >
          FAQ →
        </Link>
      </div>
    </div>
  );
}