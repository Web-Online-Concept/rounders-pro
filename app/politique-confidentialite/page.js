export const metadata = {
  title: 'Politique de Confidentialité - Rounders Pro | Protection des données',
  description: 'Politique de confidentialité de Rounders Pro. Comment nous collectons et utilisons vos données pour nos jeux gratuits. Conforme RGPD.',
};

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-600 mb-4">
                La présente politique de confidentialité s&apos;applique au site Rounders.pro et à tous les jeux organisés par Web Online Concept (ci-après &quot;nous&quot;, &quot;notre&quot; ou &quot;nos&quot;).
              </p>
              <p className="text-gray-600">
                Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de nos jeux gratuits et animations marketing.
              </p>
            </section>

            {/* Avertissement */}
            <section className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h2 className="text-xl font-semibold mb-2 text-orange-800">Avertissement important</h2>
              <p className="text-orange-700">
                La participation à nos jeux est entièrement volontaire. En fournissant vos données, vous acceptez qu'elles soient utilisées à notre entière discrétion, y compris pour accepter ou refuser votre participation sans justification.
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Données collectées</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold mb-2">1.1 Lors de la participation aux jeux</h3>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Pseudo Stake ou Twitter</li>
                    <li>Adresse IP</li>
                    <li>Historique de participation</li>
                    <li>Données de navigation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">1.2 Données collectées automatiquement</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Type de navigateur et appareil</li>
                    <li>Pages visitées et durée</li>
                    <li>Source de trafic</li>
                    <li>Localisation approximative</li>
                    <li>Données via cookies et analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Utilisation des données */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
              <div className="space-y-4 text-gray-600">
                <p>Nous utilisons vos données pour :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Gérer votre participation aux jeux (acceptation/refus à notre discrétion)</li>
                  <li>Vérifier le respect des règles (une participation par jour, etc.)</li>
                  <li>Prévenir la fraude et les abus</li>
                  <li>Distribuer les gains si nous le décidons</li>
                  <li>Améliorer nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Note : La collecte de données ne constitue aucune obligation de notre part d'accepter votre participation ou de verser des gains.
                </p>
              </div>
            </section>

            {/* Partage des données */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Partage des données</h2>
              <div className="space-y-4 text-gray-600">
                <p>Nous pouvons partager vos données avec :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Nos prestataires techniques (hébergement, analytics)</li>
                  <li>Les autorités si la loi l'exige</li>
                  <li>Stake.com pour vérification des comptes</li>
                  <li>Twitter/X pour les jeux organisés sur cette plateforme</li>
                </ul>
                <p className="mt-4">
                  Nous ne vendons jamais vos données personnelles à des tiers.
                </p>
              </div>
            </section>

            {/* Conservation des données */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Conservation des données</h2>
              <p className="text-gray-600">
                Nous conservons vos données aussi longtemps que nécessaire pour la gestion des jeux et la prévention de la fraude. Nous pouvons supprimer toute donnée à tout moment sans préavis.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Sécurité des données</h2>
              <p className="text-gray-600">
                Nous mettons en œuvre des mesures de sécurité raisonnables. Cependant, nous ne garantissons pas la sécurité absolue et déclinons toute responsabilité en cas de violation de données.
              </p>
            </section>

            {/* Droits des utilisateurs */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Vos droits (RGPD)</h2>
              <div className="space-y-4 text-gray-600">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l&apos;effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits : web.online.concept@gmail.com
                </p>
                <div className="bg-yellow-50 p-4 mt-4 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Attention :</strong> L'exercice de certains droits (notamment l'effacement) peut entraîner l'impossibilité de participer à nos jeux et l'annulation de toute demande en cours.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p className="text-gray-600">
                Nous utilisons des cookies essentiels et analytiques. Voir notre <a href="/cookies" className="text-blue-600 hover:underline">Politique de Cookies</a> pour plus de détails.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
              <p className="text-gray-600">
                Nous pouvons modifier cette politique à tout moment. Les modifications sont effectives dès leur publication. Il vous appartient de la consulter régulièrement.
              </p>
            </section>

            {/* Clause de non-responsabilité */}
            <section className="bg-red-50 border-l-4 border-red-400 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-800">9. Limitation de responsabilité</h2>
              <div className="space-y-3 text-red-700">
                <p>En utilisant notre site et en participant à nos jeux, vous acceptez que :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Nous ne garantissons pas la sécurité absolue de vos données</li>
                  <li>Nous ne sommes pas responsables des violations de données</li>
                  <li>La fourniture de vos données ne garantit aucun gain</li>
                  <li>Nous pouvons utiliser vos données pour refuser votre participation</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
              <p className="text-gray-600">
                Pour toute question : web.online.concept@gmail.com
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
    </>
  );
}