import Header from '../components/Header';
import Footer from '../components/Footer';

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
                Cette politique de cookies explique ce que sont les cookies, comment nous les utilisons sur Rounders.pro, et vos options concernant leur utilisation.
              </p>
              <p className="text-gray-600">
                En continuant à utiliser notre site, vous acceptez l&apos;utilisation de cookies conformément à cette politique.
              </p>
            </section>

            {/* Qu'est-ce qu'un cookie */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p className="text-gray-600">
                Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences.
              </p>
            </section>

            {/* Types de cookies utilisés */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Types de cookies utilisés</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold mb-2">2.1 Cookies essentiels</h3>
                  <p>Nécessaires au fonctionnement du site. Sans eux, certaines fonctionnalités peuvent ne pas être disponibles.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2.2 Cookies analytiques</h3>
                  <p>Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site. Ces cookies collectent des informations de manière anonyme.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2.3 Cookies d&apos;affiliation</h3>
                  <p>Ces cookies nous permettent de suivre les visiteurs qui s&apos;inscrivent sur Stake via nos liens d&apos;affiliation.</p>
                </div>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Données collectées via les cookies</h2>
              <div className="space-y-2 text-gray-600">
                <p>Les cookies peuvent collecter :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de trafic (d&apos;où vous venez)</li>
                  <li>Type d&apos;appareil et navigateur</li>
                  <li>Localisation approximative (pays/ville)</li>
                  <li>Actions effectuées sur le site</li>
                </ul>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Durée de conservation</h2>
              <div className="space-y-2 text-gray-600">
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                  <li><strong>Cookies persistants :</strong> Jusqu&apos;à 2 ans selon le type</li>
                  <li><strong>Google Analytics :</strong> 26 mois</li>
                </ul>
              </div>
            </section>

            {/* Gestion des cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Comment gérer les cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et configurer la plupart des navigateurs pour empêcher leur installation.
                </p>
                <p>
                  <strong>Attention :</strong> Si vous désactivez les cookies, certaines fonctionnalités du site peuvent ne pas fonctionner correctement.
                </p>
                <div>
                  <p className="font-semibold mb-2">Pour gérer les cookies dans votre navigateur :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                    <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                    <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                    <li><a href="https://support.microsoft.com/fr-fr/help/17442" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Edge</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies tiers */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies tiers</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nous utilisons des services tiers qui peuvent placer leurs propres cookies :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Google Analytics :</strong> Analyse du trafic</li>
                  <li><strong>Vercel :</strong> Hébergement et performance</li>
                  <li><strong>Stake :</strong> Suivi d&apos;affiliation</li>
                </ul>
                <p>
                  Nous n&apos;avons pas de contrôle sur ces cookies tiers. Consultez les politiques de confidentialité de ces services pour plus d&apos;informations.
                </p>
              </div>
            </section>

            {/* Consentement */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Votre consentement</h2>
              <p className="text-gray-600">
                En utilisant notre site, vous consentez à l&apos;utilisation de cookies conformément à cette politique. Si vous n&apos;acceptez pas l&apos;utilisation de cookies, veuillez ne pas utiliser ce site.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Modifications de cette politique</h2>
              <p className="text-gray-600">
                Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications prennent effet dès leur publication sur cette page.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="text-gray-600">
                Pour toute question concernant notre utilisation des cookies : web.online.concept@gmail.com
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="text-sm text-gray-500 pt-4 border-t">
              <p>Dernière mise à jour : Décembre 2024</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}