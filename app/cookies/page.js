// app/cookies/page.js
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Politique de Cookies</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-600 mb-4">
                Cette politique explique comment Rounders.pro utilise les cookies dans le cadre de ses jeux gratuits et animations marketing.
              </p>
              <p className="text-gray-600">
                En continuant à utiliser notre site et à participer à nos jeux, vous acceptez l'utilisation de cookies conformément à cette politique.
              </p>
            </section>

            {/* Qu'est-ce qu'un cookie */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-600">
                Un cookie est un petit fichier texte stocké sur votre appareil. Dans le contexte de nos jeux, ils nous permettent notamment de vérifier que vous ne participez qu'une fois par jour.
              </p>
            </section>

            {/* Types de cookies utilisés */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Cookies utilisés pour nos jeux</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold mb-2">2.1 Cookies de jeu</h3>
                  <p>Essentiels pour :</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Vérifier votre participation quotidienne</li>
                    <li>Mémoriser votre progression dans les jeux</li>
                    <li>Prévenir la fraude et les participations multiples</li>
                    <li>Sauvegarder temporairement vos données de jeu</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2.2 Cookies analytiques</h3>
                  <p>Google Analytics pour comprendre comment vous utilisez nos jeux et améliorer l'expérience.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2.3 Cookies d'affiliation</h3>
                  <p>Pour suivre les inscriptions Stake via nos liens (programme d'affiliation).</p>
                </div>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Données collectées</h2>
              <div className="space-y-2 text-gray-600">
                <p>Les cookies peuvent collecter :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Historique de participation aux jeux</li>
                  <li>Pages de jeux visitées</li>
                  <li>Performance dans les jeux</li>
                  <li>Préférences de jeu</li>
                  <li>Données techniques (navigateur, appareil)</li>
                </ul>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Durée de conservation</h2>
              <div className="space-y-2 text-gray-600">
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Cookies de jeu :</strong> 24h (réinitialisation quotidienne)</li>
                  <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                  <li><strong>Google Analytics :</strong> 26 mois</li>
                  <li><strong>Cookies d'affiliation :</strong> 30 jours</li>
                </ul>
              </div>
            </section>

            {/* Gestion des cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Gestion des cookies</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="font-semibold text-yellow-800">
                    ⚠️ Attention : La désactivation des cookies peut empêcher votre participation aux jeux.
                  </p>
                </div>
                <p>
                  Vous pouvez gérer les cookies dans votre navigateur, mais cela peut affecter :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Votre capacité à participer aux jeux</li>
                  <li>La vérification de votre participation quotidienne</li>
                  <li>La sauvegarde de votre progression</li>
                </ul>
                <div>
                  <p className="font-semibold mb-2">Paramètres par navigateur :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <Link
                        href="https://support.google.com/chrome/answer/95647"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chrome
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Firefox
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Safari
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://support.microsoft.com/fr-fr/help/17442"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Edge
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies tiers */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies tiers</h2>
              <div className="space-y-4 text-gray-600">
                <p>Services tiers utilisés :</p>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Google Analytics :</strong> Analyse des jeux</li>
                  <li><strong>Vercel :</strong> Performance du site</li>
                  <li><strong>Stake :</strong> Tracking d'affiliation</li>
                  <li><strong>Twitter/X :</strong> Pour les jeux Twitter</li>
                </ul>
                <p className="mt-4">
                  Ces services ont leurs propres politiques de confidentialité.
                </p>
              </div>
            </section>

            {/* Consentement */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Votre consentement</h2>
              <p className="text-gray-600">
                En participant à nos jeux, vous acceptez l'utilisation de cookies. Si vous refusez, vous ne pourrez pas participer aux jeux nécessitant des cookies.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
              <p className="text-gray-600">
                Nous pouvons modifier cette politique à tout moment. Les modifications sont effectives immédiatement.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="text-gray-600">
                Questions sur les cookies : web.online.concept@gmail.com
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="text-sm text-gray-500 pt-4 border-t">
              <p>Dernière mise à jour : Janvier 2025</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
	  <BottomBar />
    </>
  );
}