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
                La présente politique de confidentialité s&apos;applique au site Rounders.pro, édité par Web Online Concept (ci-après &quot;nous&quot;, &quot;notre&quot; ou &quot;nos&quot;).
              </p>
              <p className="text-gray-600">
                Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles.
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Données collectées</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold mb-2">1.1 Données fournies volontairement</h3>
                  <p>Lors de l&apos;utilisation du formulaire de réclamation de bonus :</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Adresse email</li>
                    <li>Pseudo Stake</li>
                    <li>Niveau VIP</li>
                    <li>Adresse de cryptomonnaie</li>
                    <li>Capture d&apos;écran</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">1.2 Données collectées automatiquement</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Date et heure de visite</li>
                    <li>Données de navigation via cookies</li>
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
                  <li>Traiter vos demandes de bonus (si nous le décidons)</li>
                  <li>Vous contacter concernant votre demande</li>
                  <li>Améliorer notre site et nos services</li>
                  <li>Respecter nos obligations légales</li>
                  <li>Prévenir la fraude et les abus</li>
                </ul>
              </div>
            </section>

            {/* Partage des données */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Partage des données</h2>
              <div className="space-y-4 text-gray-600">
                <p>Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Nos prestataires techniques (hébergement, analytics)</li>
                  <li>Les autorités compétentes si la loi l&apos;exige</li>
                  <li>Stake.com dans le cadre du programme d&apos;affiliation</li>
                </ul>
              </div>
            </section>

            {/* Conservation des données */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Conservation des données</h2>
              <p className="text-gray-600">
                Nous conservons vos données aussi longtemps que nécessaire pour les finalités décrites, ou selon les exigences légales. Nous nous réservons le droit de supprimer toute donnée à tout moment sans préavis.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Sécurité des données</h2>
              <p className="text-gray-600">
                Nous mettons en œuvre des mesures de sécurité appropriées. Cependant, aucune transmission sur Internet n&apos;est totalement sécurisée. Nous déclinons toute responsabilité en cas de violation de données.
              </p>
            </section>

            {/* Droits des utilisateurs */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Vos droits</h2>
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
                  Pour exercer ces droits, contactez-nous à : web.online.concept@gmail.com
                </p>
                <p className="text-sm italic">
                  Note : L&apos;exercice de certains droits peut entraîner l&apos;impossibilité de bénéficier de nos services.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p className="text-gray-600">
                Nous utilisons des cookies pour améliorer votre expérience. Consultez notre <a href="/cookies" className="text-blue-600 hover:underline">Politique de Cookies</a> pour plus d&apos;informations.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
              <p className="text-gray-600">
                Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il vous appartient de consulter régulièrement cette page.
              </p>
            </section>

            {/* Clause de non-responsabilité */}
            <section className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">9. Limitation de responsabilité</h2>
              <p className="text-orange-700">
                En utilisant notre site, vous reconnaissez que nous ne garantissons pas la sécurité absolue de vos données et que nous ne serons pas responsables des dommages résultant d&apos;une violation de données, d&apos;une utilisation non autorisée ou de toute autre incident de sécurité.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
              <p className="text-gray-600">
                Pour toute question concernant cette politique : web.online.concept@gmail.com
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