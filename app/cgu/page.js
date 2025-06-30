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
              <h2 className="text-2xl font-bold mb-4 text-red-800">⚠️ AVERTISSEMENT IMPORTANT</h2>
              <div className="space-y-4 text-red-700 font-semibold">
                <p>
                  EN UTILISANT CE SITE, VOUS ACCEPTEZ QUE :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Les bonus mentionnés sont offerts À TITRE GRACIEUX, sans aucune obligation de notre part</li>
                  <li>Nous pouvons REFUSER, MODIFIER ou ANNULER tout bonus à notre seule discrétion</li>
                  <li>Le site peut FERMER À TOUT MOMENT sans préavis ni compensation</li>
                  <li>Nous n&apos;avons AUCUNE OBLIGATION de payer les bonus promis</li>
                  <li>Vous utilisez ce site À VOS PROPRES RISQUES</li>
                </ul>
              </div>
            </section>

            {/* Article 1 - Objet */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 1 - Objet</h2>
              <p className="text-gray-600">
                Les présentes CGU régissent l&apos;utilisation du site Rounders.pro édité par Web Online Concept. L&apos;utilisation du site implique l&apos;acceptation sans réserve de ces conditions.
              </p>
            </section>

            {/* Article 2 - Nature du service */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 2 - Nature du service</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Rounders.pro est un site d&apos;information et de recommandation concernant la plateforme Stake. Nous participons au programme d&apos;affiliation de Stake.
                </p>
                <p>
                  <strong>Les bonus mentionnés sur notre site constituent des libéralités offertes sans contrepartie et sans obligation contractuelle.</strong> Ils peuvent être modifiés, suspendus ou supprimés à tout moment sans préavis.
                </p>
              </div>
            </section>

            {/* Article 3 - Absence d'obligation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 3 - Absence d&apos;obligation de paiement</h2>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold">
                  Web Online Concept n&apos;a AUCUNE OBLIGATION LÉGALE OU CONTRACTUELLE de verser les bonus mentionnés sur le site.
                </p>
                <p>
                  Les montants affichés sont donnés à titre indicatif et peuvent être modifiés ou annulés sans justification. Le versement de tout bonus reste à notre entière discrétion.
                </p>
                <p>
                  Nous nous réservons le droit de :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Refuser toute demande de bonus sans justification</li>
                  <li>Modifier les montants à tout moment</li>
                  <li>Suspendre ou arrêter le programme de bonus</li>
                  <li>Exiger des conditions supplémentaires</li>
                </ul>
              </div>
            </section>

            {/* Article 4 - Cessation d'activité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 4 - Cessation d&apos;activité</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Web Online Concept peut décider de cesser l&apos;exploitation du site Rounders.pro à tout moment, sans préavis ni indemnité d&apos;aucune sorte.
                </p>
                <p>
                  En cas de fermeture du site :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Aucune compensation ne sera due aux utilisateurs</li>
                  <li>Les demandes de bonus en cours seront annulées</li>
                  <li>Aucun recours ne sera possible</li>
                </ul>
              </div>
            </section>

            {/* Article 5 - Conditions d'utilisation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 5 - Conditions d&apos;utilisation</h2>
              <div className="space-y-4 text-gray-600">
                <p>L&apos;utilisateur s&apos;engage à :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Être majeur (18 ans minimum)</li>
                  <li>Fournir des informations exactes</li>
                  <li>Ne pas utiliser le site à des fins frauduleuses</li>
                  <li>Respecter les lois en vigueur dans son pays</li>
                  <li>Ne pas créer plusieurs comptes</li>
                </ul>
              </div>
            </section>

            {/* Article 6 - Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 6 - Propriété intellectuelle</h2>
              <p className="text-gray-600">
                Tout le contenu du site est protégé par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation écrite.
              </p>
            </section>

            {/* Article 7 - Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 7 - Limitation de responsabilité</h2>
              <div className="space-y-4 text-gray-600">
                <p className="font-semibold">
                  Web Online Concept ne pourra être tenu responsable de :
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Pertes financières liées aux jeux d&apos;argent</li>
                  <li>Problèmes techniques ou interruptions de service</li>
                  <li>Dommages directs ou indirects résultant de l&apos;utilisation du site</li>
                  <li>Actions ou omissions de Stake.com</li>
                  <li>Non-versement des bonus pour quelque raison que ce soit</li>
                </ul>
              </div>
            </section>

            {/* Article 8 - Jeux d'argent */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 8 - Avertissement sur les jeux d&apos;argent</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les jeux d&apos;argent comportent des risques : endettement, isolement, dépendance. Ils sont interdits aux mineurs.
                </p>
                <p>
                  L&apos;utilisateur est seul responsable de vérifier la légalité des jeux d&apos;argent en ligne dans son pays de résidence.
                </p>
              </div>
            </section>

            {/* Article 9 - Modification des CGU */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 9 - Modification des CGU</h2>
              <p className="text-gray-600">
                Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications prennent effet immédiatement après leur publication. L&apos;utilisation continue du site vaut acceptation des nouvelles conditions.
              </p>
            </section>

            {/* Article 10 - Loi applicable */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 10 - Loi applicable et juridiction</h2>
              <p className="text-gray-600">
                Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux de Toulouse seront seuls compétents.
              </p>
            </section>

            {/* Article 11 - Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article 11 - Contact</h2>
              <p className="text-gray-600">
                Pour toute question : web.online.concept@gmail.com
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="text-sm text-gray-500 pt-4 border-t">
              <p>Dernière mise à jour : Décembre 2024</p>
              <p className="mt-2 font-semibold">En utilisant ce site, vous reconnaissez avoir lu, compris et accepté l&apos;intégralité de ces conditions.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}