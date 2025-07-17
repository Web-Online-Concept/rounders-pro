// app/politique-confidentialite/page.js
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';

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
                La présente politique de confidentialité s'applique au site Rounders.pro et à tous les services proposés par Web Online Concept (jeux gratuits, pronostics sportifs, blog).
              </p>
              <p className="text-gray-600">
                Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles.
              </p>
            </section>

            {/* Avertissement */}
            <section className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h2 className="text-xl font-semibold mb-2 text-orange-800">Avertissement important</h2>
              <p className="text-orange-700">
                L'utilisation de nos services est entièrement volontaire. En fournissant vos données, vous acceptez qu'elles soient utilisées selon notre discrétion, y compris pour accepter ou refuser votre participation aux jeux, ou pour analyser vos habitudes de consultation des pronostics et articles.
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
                  <h3 className="font-semibold mb-2">1.2 Lors de la consultation des pronostics</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Pages de pronostics consultées</li>
                    <li>Fréquence de consultation</li>
                    <li>Temps passé sur chaque page</li>
                    <li>Pronostics copiés ou partagés</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1.3 Lors de la lecture du blog</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Articles consultés</li>
                    <li>Vidéos visionnées</li>
                    <li>Temps de lecture</li>
                    <li>Interactions avec le contenu</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">1.4 Données collectées automatiquement</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Type de navigateur et appareil</li>
                    <li>Système d'exploitation</li>
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
                  <li>Gérer votre participation aux jeux</li>
                  <li>Analyser l'utilisation de nos pronostics</li>
                  <li>Améliorer notre contenu éditorial</li>
                  <li>Prévenir la fraude et les abus</li>
                  <li>Personnaliser votre expérience</li>
                  <li>Respecter nos obligations légales</li>
                  <li>Vous envoyer des notifications (si autorisé)</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Note importante : La collecte de données ne crée aucune obligation de notre part concernant les jeux, pronostics ou contenus.
                </p>
              </div>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Base légale du traitement</h2>
              <div className="space-y-4 text-gray-600">
                <p>Nous traitons vos données sur les bases suivantes :</p>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Consentement :</strong> pour les jeux et notifications</li>
                  <li><strong>Intérêt légitime :</strong> pour l'analyse et l'amélioration des services</li>
                  <li><strong>Obligation légale :</strong> pour la prévention de la fraude</li>
                </ul>
              </div>
            </section>

            {/* Partage des données */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Partage des données</h2>
              <div className="space-y-4 text-gray-600">
                <p>Nous pouvons partager vos données avec :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Nos prestataires techniques (hébergement, analytics)</li>
                  <li>Les autorités compétentes si requis par la loi</li>
                  <li>Stake.com pour vérification (programme d'affiliation)</li>
                  <li>Twitter/X pour les jeux sur cette plateforme</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Nous ne vendons JAMAIS vos données personnelles.
                </p>
              </div>
            </section>

            {/* Conservation des données */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Conservation des données</h2>
              <div className="text-gray-600">
                <p>Durées de conservation :</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Données de jeux : 2 ans après dernière participation</li>
                  <li>Données de navigation : 13 mois</li>
                  <li>Cookies : selon leur type (session ou persistants)</li>
                </ul>
                <p className="mt-4">
                  Nous pouvons conserver certaines données plus longtemps pour des raisons légales ou de sécurité.
                </p>
              </div>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Sécurité des données</h2>
              <p className="text-gray-600">
                Nous mettons en œuvre des mesures de sécurité appropriées (chiffrement, accès restreint, sauvegardes). Cependant, aucun système n'est infaillible et nous ne pouvons garantir une sécurité absolue.
              </p>
            </section>

            {/* Droits des utilisateurs */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Vos droits (RGPD)</h2>
              <div className="space-y-4 text-gray-600">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Rectification :</strong> corriger vos données</li>
                  <li><strong>Effacement :</strong> supprimer vos données</li>
                  <li><strong>Limitation :</strong> restreindre le traitement</li>
                  <li><strong>Portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Opposition :</strong> vous opposer à certains traitements</li>
                  <li><strong>Retrait du consentement :</strong> à tout moment</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits : web.online.concept@gmail.com
                </p>
                <p className="text-sm mt-2">
                  Délai de réponse : 1 mois (prolongeable selon complexité)
                </p>
                <div className="bg-yellow-50 p-4 mt-4 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Attention :</strong> L'exercice de certains droits peut entraîner l'impossibilité d'utiliser nos services.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Cookies et technologies similaires</h2>
              <div className="text-gray-600">
                <p>Nous utilisons des cookies pour :</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Assurer le fonctionnement du site</li>
                  <li>Mémoriser vos préférences</li>
                  <li>Analyser l'utilisation (Google Analytics)</li>
                  <li>Prévenir la fraude</li>
                </ul>
                <p className="mt-4">
                  Voir notre{' '}
                  <Link href="/cookies" className="text-blue-600 hover:underline">
                    Politique de Cookies
                  </Link>{' '}
                  pour plus de détails.
                </p>
              </div>
            </section>

            {/* Mineurs */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Protection des mineurs</h2>
              <p className="text-gray-600">
                Notre site est interdit aux moins de 18 ans. Nous ne collectons pas sciemment de données de mineurs. Si nous découvrons qu'un mineur utilise nos services, nous supprimerons immédiatement ses données.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Modifications de la politique</h2>
              <p className="text-gray-600">
                Nous pouvons modifier cette politique à tout moment. Les modifications importantes seront signalées sur le site. Votre utilisation continue vaut acceptation.
              </p>
            </section>

            {/* Clause de non-responsabilité */}
            <section className="bg-red-50 border-l-4 border-red-400 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-800">11. Limitation de responsabilité</h2>
              <div className="space-y-3 text-red-700">
                <p>En utilisant notre site, vous acceptez que :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Nous ne garantissons pas la sécurité absolue des données</li>
                  <li>Nous ne sommes pas responsables des violations de données</li>
                  <li>Les données peuvent être utilisées pour refuser vos participations</li>
                  <li>Nous ne sommes pas responsables de l'usage fait de vos données publiques</li>
                </ul>
              </div>
            </section>

            {/* DPO et réclamations */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact et réclamations</h2>
              <div className="text-gray-600">
                <p><strong>Responsable des données :</strong> Web Online Concept</p>
                <p><strong>Email :</strong> web.online.concept@gmail.com</p>
                <p className="mt-4">
                  <strong>Réclamation CNIL :</strong> Si vous n'êtes pas satisfait de notre réponse, vous pouvez déposer une réclamation auprès de la CNIL :
                </p>
                <p className="mt-2">
                  Commission Nationale de l'Informatique et des Libertés<br />
                  3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
                  Tél : 01 53 73 22 22<br />
                  <Link href="https://www.cnil.fr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    www.cnil.fr
                  </Link>
                </p>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="text-sm text-gray-500 pt-4 border-t">
              <p>Dernière mise à jour : Janvier 2025</p>
              <p>Version 2.0 - Incluant pronostics sportifs et blog</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
	  <BottomBar />
    </>
  );
}