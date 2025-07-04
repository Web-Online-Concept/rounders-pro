// app/guide-stake/inscription/page.js
import Link from 'next/link';
import { AFFILIATE_LINK, AFFILIATE_CODE } from '../../config/affiliate';

export const metadata = {
  title: 'Comment s\'inscrire sur Stake - Guide étape par étape | Rounders',
  description: 'Tutoriel complet pour créer un compte Stake en 2025. Inscription rapide, vérification KYC, premiers pas. Guide officiel Rounders Pro.',
  keywords: 'inscription stake, créer compte stake, stake registration',
};

export default function GuideInscriptionPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📝 Guide d&apos;Inscription Complet
      </h1>

      <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8">
        <p className="text-green-900 font-semibold">
          ⏱️ Inscription en moins de 30 secondes !
        </p>
        <p className="text-green-800 mt-1">
          Pas de KYC obligatoire, juste un email et c&apos;est parti
        </p>
      </div>

      {/* Rappel VPN pour français */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <span className="text-2xl mr-3">🇫🇷</span>
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Rappel pour les joueurs français</h3>
            <p className="text-blue-800 mb-2">
              Activez votre VPN avant l&apos;inscription (pays recommandés : Canada, Irlande, Singapour).
            </p>
            <Link 
              href="/guide-stake/france" 
              className="text-blue-600 hover:underline font-medium"
            >
              → Voir le guide complet France
            </Link>
          </div>
        </div>
      </div>

      {/* Étapes d'inscription */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🚀 Inscription en 4 étapes
        </h2>
        
        <div className="space-y-6">
          {/* Étape 1 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Accédez à Stake via notre lien
                </h3>
                <p className="text-gray-700 mb-4">
                  Cliquez sur le bouton ci-dessous pour accéder à Stake avec notre code affilié. 
                  Cela vous garantit l&apos;accès à tous les bonus Rounders Pro.
                </p>
                
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Ouvrir Stake avec bonus →
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  💡 Le code &quot;{AFFILIATE_CODE}&quot; sera automatiquement appliqué
                </p>
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Cliquez sur &quot;S&apos;inscrire&quot;
                </h3>
                <p className="text-gray-700 mb-4">
                  Le bouton vert &quot;S&apos;inscrire&quot; se trouve en haut à droite de la page. 
                  Une fenêtre popup va s&apos;ouvrir avec le formulaire d&apos;inscription.
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Note :</strong> Si vous voyez déjà un formulaire d&apos;inscription, 
                    c&apos;est parfait ! Passez directement à l&apos;étape 3.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Remplissez le formulaire
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">📧 Email</h4>
                    <p className="text-gray-600">
                      Utilisez une adresse valide (important pour la récupération du compte)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">👤 Nom d&apos;utilisateur</h4>
                    <p className="text-gray-600">
                      Choisissez un pseudo unique (3-16 caractères)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">🔒 Mot de passe</h4>
                    <p className="text-gray-600">
                      Minimum 8 caractères (utilisez un mot de passe fort)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">📅 Date de naissance</h4>
                    <p className="text-gray-600">
                      Vous devez avoir 18 ans ou plus
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">🎁 Code promo (optionnel)</h4>
                    <p className="text-gray-600">
                      Si pas déjà rempli, entrez : <strong className="text-blue-600">{AFFILIATE_CODE}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Étape 4 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Validez et commencez !
                </h3>
                <p className="text-gray-700 mb-4">
                  Cochez les conditions d&apos;utilisation et cliquez sur &quot;Jouer maintenant&quot;. 
                  Félicitations, votre compte est créé !
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    🎉 Vous pouvez maintenant déposer et jouer immédiatement !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité du compte */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🔒 Sécuriser votre compte (Recommandé)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">🔐 Activer le 2FA</h3>
            <p className="text-blue-800 mb-3">
              Protection maximale avec Google Authenticator :
            </p>
            <ol className="space-y-2 text-blue-700 text-sm">
              <li>1. Allez dans Paramètres → Sécurité</li>
              <li>2. Cliquez sur &quot;Activer 2FA&quot;</li>
              <li>3. Scannez le QR code avec Google Authenticator</li>
              <li>4. Entrez le code à 6 chiffres</li>
              <li>5. Sauvegardez le code de récupération !</li>
            </ol>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-purple-900 mb-3">🔑 Session et mot de passe</h3>
            <p className="text-purple-800 mb-3">
              Bonnes pratiques de sécurité :
            </p>
            <ul className="space-y-2 text-purple-700 text-sm">
              <li>• Utilisez un mot de passe unique</li>
              <li>• Activez la déconnexion automatique</li>
              <li>• Vérifiez l&apos;historique des sessions</li>
              <li>• Ne partagez jamais vos identifiants</li>
              <li>• Méfiez-vous des sites de phishing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Premiers pas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎯 Vos premiers pas sur Stake
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-green-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-1">1️⃣ Configurez votre profil</h3>
            <p className="text-gray-700">
              Ajoutez un avatar, configurez votre fuseau horaire et choisissez votre devise d&apos;affichage
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-1">2️⃣ Explorez les jeux gratuits</h3>
            <p className="text-gray-700">
              Testez les jeux en mode démo pour vous familiariser sans risquer d&apos;argent
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-purple-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-1">3️⃣ Effectuez votre premier dépôt</h3>
            <p className="text-gray-700">
              Commencez petit pour tester la plateforme (minimum 10$ en crypto)
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-amber-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-1">4️⃣ Réclamez vos bonus</h3>
            <p className="text-gray-700">
              N&apos;oubliez pas de réclamer vos bonus dans l&apos;espace affiliés Rounders Pro
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-red-600 pl-6 py-4">
            <h3 className="font-bold text-gray-900 mb-1">5️⃣ Rejoignez la communauté</h3>
            <p className="text-gray-700">
              Participez au chat, suivez les rain et connectez-vous avec d&apos;autres joueurs
            </p>
          </div>
        </div>
      </section>

      {/* Problèmes courants */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ⚠️ Problèmes courants et solutions
        </h2>
        
        <div className="space-y-4">
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer">
              Le site ne s&apos;affiche pas ou erreur de connexion
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="mb-2">Solutions :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Vérifiez que votre VPN est bien activé (pays autorisé)</li>
                <li>Essayez de vider le cache de votre navigateur</li>
                <li>Utilisez un navigateur différent</li>
                <li>Essayez l&apos;URL alternative : stake.bet</li>
              </ul>
            </div>
          </details>
          
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer">
              Email déjà utilisé
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="mb-2">Solutions :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utilisez la fonction &quot;Mot de passe oublié&quot;</li>
                <li>Vérifiez que vous n&apos;avez pas déjà un compte</li>
                <li>Utilisez une autre adresse email</li>
                <li>Contactez le support si c&apos;est une erreur</li>
              </ul>
            </div>
          </details>
          
          <details className="bg-gray-50 rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer">
              Code promo non reconnu
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="mb-2">Solutions :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Assurez-vous d&apos;utiliser : <strong>{AFFILIATE_CODE}</strong></li>
                <li>Pas d&apos;espace avant ou après le code</li>
                <li>Tout en minuscules</li>
                <li>Si déjà inscrit, contactez-nous pour les bonus</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* CTA final */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">✅ Prêt à vous inscrire ?</h3>
        <p className="mb-6 text-gray-300">
          L&apos;inscription prend moins de 30 secondes. Rejoignez la communauté 
          Rounders Pro et profitez de tous nos avantages exclusifs !
        </p>
        
        
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          S&apos;inscrire maintenant →
        </a>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/introduction"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Introduction
        </Link>
        <Link
          href="/guide-stake/bonus"
          className="text-blue-600 hover:underline font-medium"
        >
          Bonus & Rakeback →
        </Link>
      </div>
    </div>
  );
}