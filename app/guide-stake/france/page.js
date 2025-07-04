// app/guide-stake/france/page.js
import Link from 'next/link';
import { AFFILIATE_LINK } from '../../config/affiliate';

export default function GuideFrancePage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🇫🇷 Guide Spécial Joueurs Français
      </h1>

      {/* Alert Box */}
      <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-red-900 mb-3">
          ⚡ Information Importante pour les Français
        </h2>
        <p className="text-red-800 font-semibold mb-4">
          Stake n'est pas accessible directement depuis la France. 
          Voici la méthode simple et légale pour y accéder :
        </p>
      </div>

      {/* Method Section */}
      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📋 Méthode d'Accès en 3 Étapes
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Première Connexion avec VPN
                </h3>
                <p className="text-gray-700 mb-3">
                  Pour votre première inscription, utilisez un VPN connecté à l'un de ces pays :
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇨🇦 Canada
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇮🇪 Irlande
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇸🇬 Singapour
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇯🇵 Japon
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇦🇺 Australie
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇳🇿 Nouvelle-Zélande
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇲🇽 Mexique
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    🇧🇷 Brésil
                  </span>
                </div>
                <Link
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  S'inscrire sur Stake avec Bonus →
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Créez Votre Compte
                </h3>
                <p className="text-gray-700 mb-3">
                  Une fois sur Stake avec le VPN activé, inscrivez-vous normalement.
                  Stake va créer un cookie spécial qui vous permettra de vous reconnecter sans VPN.
                </p>
                <div className="bg-amber-50 border border-amber-300 rounded-lg p-3">
                  <p className="text-amber-800 text-sm">
                    💡 <strong>Astuce :</strong> Utilisez une adresse email dédiée et activez la 2FA pour sécuriser votre compte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Connectez-vous Sans VPN !
                </h3>
                <p className="text-gray-700 mb-3">
                  Après votre inscription, vous pouvez désactiver le VPN et vous connecter directement via :
                </p>
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                  <Link 
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-900 font-bold text-lg text-center block hover:underline"
                  >
                    www.stake.bet
                  </Link>
                  <p className="text-green-700 text-sm text-center mt-2">
                    ✅ Accès direct depuis la France sans VPN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="bg-blue-900 text-white rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold mb-3">🎁 Avantages Exclusifs Rounders Pro</h3>
        <p className="mb-4">
          En vous inscrivant avec notre lien d'affiliation, vous bénéficiez de :
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>Bonus supplémentaires à chaque palier VIP franchi</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>Récompenses et avantages exclusifs Rounders Pro</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>Support en français via notre équipe</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>Guides et stratégies exclusives en français</span>
          </li>
        </ul>
      </div>

      {/* Info Boxes */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">📱 VPN Recommandés</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>ExpressVPN</strong> - Le plus rapide et fiable</li>
            <li>• <strong>NordVPN</strong> - Excellent rapport qualité/prix</li>
            <li>• <strong>Surfshark</strong> - Option économique</li>
            <li>• <strong>ProtonVPN</strong> - Version gratuite disponible</li>
          </ul>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">⚠️ Points Importants</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• VPN nécessaire <strong>UNIQUEMENT</strong> pour l'inscription</li>
            <li>• Utilisez toujours <strong>stake.bet</strong> après inscription</li>
            <li>• Gardez vos identifiants en sécurité</li>
            <li>• Activez la 2FA dès que possible</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">❓ Questions Fréquentes</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Est-ce légal d'utiliser un VPN pour Stake ?
            </h4>
            <p className="text-gray-700">
              L'utilisation d'un VPN est parfaitement légale en France. 
              Vous accédez simplement à un site international depuis un autre pays.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Puis-je retirer mes gains en France ?
            </h4>
            <p className="text-gray-700">
              Oui, les retraits en cryptomonnaies sont possibles vers n'importe quel wallet. 
              Utilisez Coinbase ou Binance pour convertir en euros.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Que faire si stake.com ne fonctionne pas ?
            </h4>
            <p className="text-gray-700">
              Utilisez toujours <strong>stake.bet</strong> qui fonctionne parfaitement depuis la France 
              après votre inscription initiale avec VPN.
            </p>
          </div>
        </div>
      </div>

      {/* Community CTA */}
      <div className="text-center bg-gray-50 rounded-lg p-6">
        <p className="text-gray-600 mb-4">
          Besoin d'aide ? Rejoignez notre communauté française sur Twitter
        </p>
        <Link
          href="https://x.com/rounders_pro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:underline font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          @rounders_pro
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Retour au sommaire
        </Link>
        <Link
          href="/guide-stake/inscription"
          className="text-blue-600 hover:underline font-medium"
        >
          Inscription →
        </Link>
      </div>
    </div>
  );
}