export const metadata = {
  title: 'CGU - Conditions Générales | Rounders Pro - Jeux gratuits sans obligation',
  description: 'Conditions d\'utilisation de Rounders Pro. Jeux et bonus gratuits offerts sans obligation. Participation à vos risques et périls.',
};

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CGU() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Conditions Générales d&apos;Utilisation</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            {/* Avertissement important */}
            <section className="bg-red-50 border-2 border-red-400 p-6">
              <h2 className="text-2xl font-bold mb-4 text-red-800">⚠️ AVERTISSEMENT ESSENTIEL - À LIRE ABSOLUMENT</h2>
              <div className="space-y-4 text-red-700 font-semibold">
                <p className="text-lg">EN UTILISANT CE SITE ET EN PARTICIPANT À NOS JEUX, VOUS ACCEPTEZ EXPRESSÉMENT QUE :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>TOUS LES JEUX (Roue de la Fortune, concours Twitter, tirages au sort, etc.) SONT GRATUITS ET OFFERTS SANS AUCUNE OBLIGATION</li>
                  <li>NOUS N'AVONS AUCUNE OBLIGATION LÉGALE OU CONTRACTUELLE DE PAYER QUOI QUE CE SOIT</li>
                  <li>LES MONTANTS AFFICHÉS SONT PUREMENT INDICATIFS ET NON CONTRACTUELS</li>
                  <li>NOUS POUVONS REFUSER, MODIFIER OU ANNULER TOUT JEU/GAIN SANS JUSTIFICATION</li>
                  <li>LE SITE ET LES JEUX PEUVENT FERMER À TOUT MOMENT SANS PRÉAVIS</li>
                  <li>VOUS PARTICIPEZ À VOS PROPRES RISQUES ET PÉRILS</li>
                  <li>AUCUN RECOURS N'EST POSSIBLE EN CAS DE NON-PAIEMENT</li>
                </ul>
              </div>
            </section>

            {/* Article 1 - Objet */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 1 - Objet et acceptation</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les présentes CGU régissent l&apos;utilisation du site Rounders.pro et la participation à tous les jeux organisés par Web Online Concept.
                </p>
                <p className="font-semibold">
                  En participant à nos jeux (sur le site, Twitter/X ou toute autre plateforme), vous acceptez INTÉGRALEMENT et SANS RÉSERVE ces conditions.
                </p>
              </div>
            </section>

            {/* Article 2 - Nature des jeux */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 2 - Nature des jeux et absence d'obligation</h2>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold">
                  2.1 - Tous nos jeux sont des animations marketing gratuites :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Roue de la Fortune quotidienne</li>
                  <li>Concours et tirages au sort sur Twitter/X</li>
                  <li>Jeux surprise annoncés sur nos réseaux</li>
                  <li>Toute autre animation que nous créons</li>
                </ul>
                
                <p className="font-semibold mt-4">
                  2.2 - Ces jeux constituent des LIBÉRALITÉS (dons gratuits) :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Offerts sans contrepartie</li>
                  <li>Sans obligation de résultat</li>
                  <li>Révocables à tout moment</li>
                  <li>Modifiables sans préavis</li>
                </ul>

                <p className="font-semibold mt-4">
                  2.3 - Nous nous réservons le droit ABSOLU de :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Accepter ou refuser toute participation</li>
                  <li>Disqualifier tout participant sans justification</li>
                  <li>Modifier les règles en cours de jeu</li>
                  <li>Annuler tout jeu à tout moment</li>
                  <li>Ne pas payer les gains pour quelque raison que ce soit</li>
                </ul>
              </div>
            </section>

            {/* Article 3 - Participation aux jeux */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 3 - Conditions de participation</h2>
              <div className="space-y-4 text-gray-600">
                <p>Pour participer, vous devez :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Être majeur (18 ans minimum)</li>
                  <li>Accepter que la participation ne garantit aucun gain</li>
                  <li>Comprendre le caractère aléatoire et discrétionnaire des jeux</li>
                  <li>Ne pas créer plusieurs comptes ou contourner les règles</li>
                  <li>Accepter nos décisions sans contestation possible</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 mt-4 rounded">
                  <p className="font-semibold text-yellow-800">
                    La participation est limitée (ex: une fois par jour) pour éviter les abus, mais cette limitation ne crée AUCUNE obligation de paiement de notre part.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 4 - Absence totale de garantie */}
            <section className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Article 4 - Absence totale de garantie de paiement</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-bold text-lg">
                  WEB ONLINE CONCEPT N'A AUCUNE OBLIGATION DE PAYER LES GAINS ANNONCÉS.
                </p>
                <p>
                  Les montants affichés (0€, 1€, 3€, 5€, 10€, 50€, etc.) sont purement indicatifs et ne constituent en AUCUN CAS un engagement contractuel.
                </p>
                <p className="font-semibold">Nous pouvons :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Payer tout ou partie des gains</li>
                  <li>Ne rien payer du tout</li>
                  <li>Modifier les montants</li>
                  <li>Imposer des conditions supplémentaires</li>
                  <li>Demander des vérifications impossibles à satisfaire</li>
                </ul>
                <p className="font-bold mt-4">
                  AUCUN RECOURS LÉGAL N'EST POSSIBLE EN CAS DE NON-PAIEMENT.
                </p>
              </div>
            </section>

            {/* Article 5 - Données et vie privée */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 5 - Données personnelles</h2>
              <p className="text-gray-600">
                En participant, vous acceptez notre <a href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</a>. 
                Nous pouvons utiliser vos données pour accepter ou refuser votre participation à notre entière discrétion.
              </p>
            </section>

            {/* Article 6 - Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 6 - Propriété intellectuelle</h2>
              <p className="text-gray-600">
                Tout le contenu du site et des jeux est notre propriété exclusive. Toute reproduction est interdite.
              </p>
            </section>

            {/* Article 7 - Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 7 - Limitation totale de responsabilité</h2>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold">
                  Web Online Concept ne pourra JAMAIS être tenu responsable de :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>L'absence de gain ou de paiement</li>
                  <li>La déception liée à la participation</li>
                  <li>Les erreurs, bugs ou dysfonctionnements</li>
                  <li>La modification ou suppression des jeux</li>
                  <li>Les pertes de temps ou d'opportunités</li>
                  <li>Les décisions arbitraires concernant les gagnants</li>
                  <li>Tout préjudice direct ou indirect</li>
                </ul>
              </div>
            </section>

            {/* Article 8 - Jeux d'argent */}
            <section className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h2 className="text-2xl font-semibold mb-4">Article 8 - Avertissement jeux d'argent</h2>
              <div className="space-y-4 text-orange-800">
                <p className="font-semibold">
                  NOS JEUX GRATUITS NE SONT PAS DES JEUX D'ARGENT.
                </p>
                <p>
                  Cependant, nous sommes affiliés à Stake (plateforme de jeux d'argent). Les jeux d'argent :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Sont interdits aux mineurs</li>
                  <li>Peuvent créer une dépendance</li>
                  <li>Comportent des risques financiers</li>
                </ul>
                <p className="font-semibold">
                  Jouez responsable. Nos jeux gratuits ne doivent pas vous inciter aux jeux d'argent.
                </p>
              </div>
            </section>

            {/* Article 9 - Cessation d'activité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 9 - Fermeture du site et des jeux</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nous pouvons fermer le site et arrêter tous les jeux à tout moment, sans préavis ni indemnité.
                </p>
                <p>En cas de fermeture :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Tous les jeux en cours sont annulés</li>
                  <li>Aucun gain ne sera versé</li>
                  <li>Aucune compensation n'est due</li>
                  <li>Aucun recours n'est possible</li>
                </ul>
              </div>
            </section>

            {/* Article 10 - Modification des CGU */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 10 - Modification des CGU</h2>
              <p className="text-gray-600">
                Nous pouvons modifier ces CGU à tout moment. Les modifications sont effectives immédiatement. La participation continue vaut acceptation des nouvelles conditions.
              </p>
            </section>

            {/* Article 11 - Loi applicable */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 11 - Loi applicable</h2>
              <p className="text-gray-600">
                Ces CGU sont régies par le droit français. En cas de litige (ce qui est peu probable vu l'absence d'obligation), les tribunaux de Toulouse sont compétents.
              </p>
            </section>

            {/* Article 12 - Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 12 - Contact</h2>
              <p className="text-gray-600">
                Email : web.online.concept@gmail.com
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Note : Les réclamations concernant les jeux ne sont pas garanties d'obtenir une réponse.
              </p>
            </section>

            {/* Acceptation finale */}
            <section className="bg-gray-900 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">ACCEPTATION FINALE</h2>
              <p className="font-semibold">
                EN UTILISANT CE SITE ET EN PARTICIPANT À NOS JEUX, VOUS DÉCLAREZ :
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-2">
                <li>Avoir lu et compris l'intégralité de ces CGU</li>
                <li>Accepter le caractère gratuit et non obligatoire des jeux</li>
                <li>Renoncer à tout recours en cas de non-paiement</li>
                <li>Participer en connaissance de cause et à vos risques</li>
              </ul>
            </section>

            {/* Date de mise à jour */}
            <section className="text-sm text-gray-500 pt-4 border-t">
              <p>Dernière mise à jour : Janvier 2025</p>
              <p className="mt-2 font-bold">Version 2.0 - Renforcée pour la protection de Web Online Concept</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}