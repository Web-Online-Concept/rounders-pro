// app/cgu/page.js
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';

export default function CGU() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            {/* Avertissement important */}
            <section className="bg-red-50 border-2 border-red-400 p-6">
              <h2 className="text-2xl font-bold mb-4 text-red-800">⚠️ AVERTISSEMENT ESSENTIEL - À LIRE ABSOLUMENT</h2>
              <div className="space-y-4 text-red-700 font-semibold">
                <p className="text-lg">EN UTILISANT CE SITE, EN PARTICIPANT À NOS JEUX, EN CONSULTANT NOS PRONOSTICS OU EN LISANT NOTRE BLOG, VOUS ACCEPTEZ EXPRESSÉMENT QUE :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>TOUS LES JEUX (Roue de la Fortune, concours Twitter, tirages au sort, etc.) SONT GRATUITS ET OFFERTS SANS AUCUNE OBLIGATION</li>
                  <li>NOUS N'AVONS AUCUNE OBLIGATION LÉGALE OU CONTRACTUELLE DE PAYER QUOI QUE CE SOIT</li>
                  <li>LES MONTANTS AFFICHÉS SONT PUREMENT INDICATIFS ET NON CONTRACTUELS</li>
                  <li>LES PRONOSTICS SPORTIFS SONT À TITRE INFORMATIF UNIQUEMENT ET NE GARANTISSENT AUCUN GAIN</li>
                  <li>LE CONTENU DU BLOG EST FOURNI "TEL QUEL" SANS AUCUNE GARANTIE</li>
                  <li>NOUS POUVONS REFUSER, MODIFIER OU ANNULER TOUT JEU/GAIN SANS JUSTIFICATION</li>
                  <li>LE SITE ET LES SERVICES PEUVENT FERMER À TOUT MOMENT SANS PRÉAVIS</li>
                  <li>VOUS UTILISEZ NOS SERVICES À VOS PROPRES RISQUES ET PÉRILS</li>
                  <li>AUCUN RECOURS N'EST POSSIBLE EN CAS DE NON-PAIEMENT OU DE PERTES</li>
                </ul>
              </div>
            </section>

            {/* Article 1 - Objet */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 1 - Objet et acceptation</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les présentes CGU régissent l'utilisation du site Rounders.pro, la participation aux jeux, la consultation des pronostics sportifs et du blog organisés par Web Online Concept.
                </p>
                <p className="font-semibold">
                  En utilisant nos services, vous acceptez INTÉGRALEMENT et SANS RÉSERVE ces conditions.
                </p>
              </div>
            </section>

            {/* Article 2 - Services proposés */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 2 - Nature des services et absence d'obligation</h2>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold">
                  2.1 - Nos services gratuits comprennent :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Jeux gratuits (Roue de la Fortune, concours Twitter, tirages au sort)</li>
                  <li>Pronostics sportifs gratuits (classiques, montantes, martingales)</li>
                  <li>Articles de blog et vidéos informatifs</li>
                  <li>Informations sur l'affiliation Stake</li>
                </ul>
                
                <p className="font-semibold mt-4">
                  2.2 - Concernant les PRONOSTICS SPORTIFS :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Fournis à titre purement informatif et éducatif</li>
                  <li>Ne constituent PAS des conseils d'investissement</li>
                  <li>N'offrent AUCUNE garantie de gain</li>
                  <li>Les résultats passés ne garantissent pas les résultats futurs</li>
                  <li>Vous êtes SEUL responsable de vos décisions de paris</li>
                  <li>Nous ne sommes PAS responsables de vos pertes</li>
                </ul>

                <p className="font-semibold mt-4">
                  2.3 - Concernant le BLOG et les ARTICLES :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Contenu fourni "en l'état" sans garantie d'exactitude</li>
                  <li>Opinions personnelles qui n'engagent pas notre responsabilité</li>
                  <li>Informations pouvant être obsolètes ou erronées</li>
                  <li>Aucune obligation de mise à jour du contenu</li>
                  <li>Vidéos YouTube intégrées sous la responsabilité de leurs auteurs</li>
                </ul>

                <p className="font-semibold mt-4">
                  2.4 - Nous nous réservons le droit ABSOLU de :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Modifier, suspendre ou supprimer tout service</li>
                  <li>Refuser l'accès à tout utilisateur</li>
                  <li>Supprimer tout contenu sans préavis</li>
                  <li>Modifier nos pronostics ou analyses</li>
                  <li>Ne pas publier de nouveaux contenus</li>
                </ul>
              </div>
            </section>

            {/* Article 3 - Responsabilité pronostics */}
            <section className="bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Article 3 - Clause spéciale PRONOSTICS SPORTIFS</h2>
              <div className="space-y-4 text-yellow-900">
                <p className="font-bold text-lg">
                  AVERTISSEMENT CRUCIAL SUR LES PRONOSTICS :
                </p>
                <ul className="list-disc list-inside ml-4 font-semibold">
                  <li>Les pronostics NE SONT PAS des conseils de paris</li>
                  <li>Parier peut entraîner des PERTES FINANCIÈRES IMPORTANTES</li>
                  <li>Nous NE GARANTISSONS AUCUN taux de réussite</li>
                  <li>Les stratégies présentées peuvent ÉCHOUER</li>
                  <li>Vous pariez À VOS RISQUES ET PÉRILS</li>
                  <li>Nous déclinons TOUTE responsabilité pour vos pertes</li>
                  <li>Ne pariez JAMAIS plus que vous ne pouvez perdre</li>
                </ul>
                <p className="font-bold mt-4">
                  EN UTILISANT NOS PRONOSTICS, VOUS RECONNAISSEZ AVOIR COMPRIS CES RISQUES.
                </p>
              </div>
            </section>

            {/* Article 4 - Participation aux jeux */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 4 - Conditions de participation</h2>
              <div className="space-y-4 text-gray-600">
                <p>Pour utiliser nos services, vous devez :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Être majeur (18 ans minimum)</li>
                  <li>Accepter l'absence totale de garantie</li>
                  <li>Comprendre les risques liés aux paris sportifs</li>
                  <li>Ne pas tenir le site responsable de vos décisions</li>
                  <li>Respecter les limites de participation aux jeux</li>
                  <li>Accepter nos décisions sans contestation</li>
                </ul>
              </div>
            </section>

            {/* Article 5 - Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 5 - Propriété intellectuelle</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tout le contenu (pronostics, articles, analyses, vidéos) reste notre propriété exclusive.
                </p>
                <p className="font-semibold">Il est STRICTEMENT INTERDIT de :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Copier ou revendre nos pronostics</li>
                  <li>Reproduire nos articles sans autorisation</li>
                  <li>Se faire passer pour Rounders.pro</li>
                  <li>Utiliser notre contenu à des fins commerciales</li>
                </ul>
              </div>
            </section>

            {/* Article 6 - Données personnelles */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 6 - Données personnelles</h2>
              <p className="text-gray-600">
                En utilisant nos services, vous acceptez notre{' '}
                <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                  Politique de Confidentialité
                </Link>
                . Nous collectons des données pour gérer les jeux et améliorer nos services.
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
                  <li>Pertes financières liées à l'utilisation de nos pronostics</li>
                  <li>Décisions de paris prises sur la base de nos informations</li>
                  <li>Erreurs ou inexactitudes dans nos analyses</li>
                  <li>Contenu obsolète ou incorrect dans le blog</li>
                  <li>Absence de gain aux jeux gratuits</li>
                  <li>Modification ou suppression de contenu</li>
                  <li>Dommages directs ou indirects</li>
                  <li>Addiction aux jeux d'argent</li>
                  <li>Tout préjudice résultant de l'utilisation du site</li>
                </ul>
                <p className="font-bold mt-4">
                  NOTRE RESPONSABILITÉ EST LIMITÉE À ZÉRO EURO (0€).
                </p>
              </div>
            </section>

            {/* Article 8 - Jeux d'argent */}
            <section className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h2 className="text-2xl font-semibold mb-4">Article 8 - Avertissement jeux d'argent</h2>
              <div className="space-y-4 text-orange-800">
                <p className="font-semibold">
                  LES JEUX D'ARGENT ET PARIS SPORTIFS SONT DANGEREUX.
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Interdits aux mineurs (-18 ans)</li>
                  <li>Peuvent créer une dépendance</li>
                  <li>Entraînent des risques de ruine financière</li>
                  <li>Peuvent détruire des vies et des familles</li>
                </ul>
                <p className="font-semibold mt-4">
                  NE JOUEZ PAS SI VOUS NE POUVEZ PAS VOUS PERMETTRE DE PERDRE.
                </p>
                <p>
                  Aide et information : <strong>09-74-75-13-13</strong> (appel non surtaxé)
                </p>
              </div>
            </section>

            {/* Article 9 - Indemnisation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 9 - Indemnisation</h2>
              <p className="text-gray-600">
                Vous vous engagez à nous indemniser contre toute réclamation résultant de votre utilisation du site, de vos paris ou de vos pertes financières.
              </p>
            </section>

            {/* Article 10 - Cessation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 10 - Fermeture et cessation</h2>
              <p className="text-gray-600">
                Nous pouvons fermer le site, arrêter les pronostics ou supprimer le blog à tout moment, sans préavis ni compensation.
              </p>
            </section>

            {/* Article 11 - Modification */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 11 - Modification des CGU</h2>
              <p className="text-gray-600">
                Ces CGU peuvent être modifiées à tout moment. L'utilisation continue vaut acceptation.
              </p>
            </section>

            {/* Article 12 - Loi applicable */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 12 - Loi applicable et juridiction</h2>
              <p className="text-gray-600">
                Droit français applicable. Tribunaux de Toulouse compétents. Tout litige doit d'abord faire l'objet d'une tentative de résolution amiable.
              </p>
            </section>

            {/* Acceptation finale */}
            <section className="bg-gray-900 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">ACCEPTATION FINALE ET IRRÉVOCABLE</h2>
              <p className="font-semibold">
                EN UTILISANT CE SITE, VOUS DÉCLAREZ :
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 space-y-2">
                <li>Avoir lu et compris l'intégralité de ces CGU</li>
                <li>Accepter tous les risques liés aux paris sportifs</li>
                <li>Renoncer à toute action en responsabilité</li>
                <li>Comprendre que les pronostics ne garantissent rien</li>
                <li>Assumer seul vos décisions et leurs conséquences</li>
              </ul>
            </section>

            {/* Date de mise à jour */}
            <section className="text-sm text-gray-500 pt-4 border-t">
              <p>Dernière mise à jour : Janvier 2025</p>
              <p className="mt-2 font-bold">Version 3.0 - Intégrant pronostics sportifs et blog</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
	  <BottomBar />
    </>
  );
}