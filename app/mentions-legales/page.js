// app/mentions-legales/page.js
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 pb-24 md:pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            {/* Avertissement préliminaire */}
            <section className="bg-red-50 border-2 border-red-400 p-6">
              <h2 className="text-2xl font-bold mb-4 text-red-800">⚠️ AVERTISSEMENT IMPORTANT</h2>
              <div className="space-y-4 text-red-700 font-semibold">
                <p>TOUS LES JEUX, BONUS ET RÉCOMPENSES MENTIONNÉS SUR CE SITE SONT OFFERTS À TITRE PUREMENT GRACIEUX ET VOLONTAIRE.</p>
                <p>WEB ONLINE CONCEPT N'A AUCUNE OBLIGATION CONTRACTUELLE OU LÉGALE DE VERSER QUELQUE SOMME QUE CE SOIT.</p>
                <p>NOUS NOUS RÉSERVONS LE DROIT DE MODIFIER, SUSPENDRE OU ANNULER TOUT JEU OU BONUS À TOUT MOMENT, SANS PRÉAVIS NI JUSTIFICATION.</p>
              </div>
            </section>

            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Société :</strong> Web Online Concept</p>
                <p><strong>Adresse :</strong> Rue Paul Estival, 31200 Toulouse, France</p>
                <p><strong>Email :</strong> web.online.concept@gmail.com</p>
                <p>
                  <strong>Site web :</strong>{' '}
                  <Link
                    href="https://web-online-concept.com"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    web-online-concept.com
                  </Link>
                </p>
                <p><strong>SIRET :</strong> 510 583 800 00048</p>
                <p><strong>Directeur de publication :</strong> Le représentant légal de Web Online Concept</p>
              </div>
            </section>

            {/* Nature du site */}
            <section className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h2 className="text-2xl font-semibold mb-4">Nature du site et des services</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Rounders.pro est un site d'information et de divertissement gratuit.</strong></p>
                <p>Les jeux proposés (Roue de la Fortune, tirages au sort, concours Twitter, etc.) sont des animations marketing offertes sans contrepartie et sans obligation de résultat.</p>
                <p>Nous participons au programme d'affiliation de Stake mais restons totalement indépendants dans l'organisation de nos jeux.</p>
                <p className="font-semibold">Les participants reconnaissent que :</p>
                <ul className="list-disc list-inside ml-4">
                  <li>La participation est gratuite et volontaire</li>
                  <li>Aucun achat n'est nécessaire</li>
                  <li>Les gains annoncés sont indicatifs et non contractuels</li>
                  <li>Nous pouvons disqualifier tout participant sans justification</li>
                  <li>Les jeux peuvent être annulés à tout moment</li>
                </ul>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p>
                  <strong>Site web :</strong>{' '}
                  <Link
                    href="https://vercel.com"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vercel.com
                  </Link>
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos) est la propriété exclusive de Web Online Concept ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite.
              </p>
              <p className="text-gray-600">
                La marque Rounders.pro est la propriété exclusive de Web Online Concept.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Limitation totale de responsabilité</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">Web Online Concept ne saurait être tenu responsable de :</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>L'absence de gain lors de la participation aux jeux</li>
                  <li>La modification ou l'annulation de tout jeu ou bonus</li>
                  <li>Les erreurs techniques empêchant la participation</li>
                  <li>Les décisions de refus de paiement, quelle qu'en soit la raison</li>
                  <li>Les pertes financières liées aux jeux d'argent sur Stake</li>
                  <li>L'impossibilité de participer aux jeux pour quelque raison que ce soit</li>
                  <li>La fermeture temporaire ou définitive du site</li>
                </ul>
              </div>
            </section>

            {/* Jeux d'argent */}
            <section className="bg-red-50 border-l-4 border-red-400 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-800">Avertissement jeux d'argent</h2>
              <div className="space-y-4 text-red-700">
                <p className="font-semibold">
                  Les jeux d'argent comportent des risques : endettement, isolement, dépendance.
                </p>
                <p>
                  <strong>Interdiction formelle aux mineurs de moins de 18 ans.</strong>
                </p>
                <p>
                  Nos jeux gratuits ne doivent pas inciter aux jeux d'argent. L'utilisateur est seul responsable de ses décisions de jeu sur Stake ou toute autre plateforme.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-600">
                Pour toute question concernant ces mentions légales : web.online.concept@gmail.com
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                Note : Les réclamations concernant les jeux ne sont pas garanties d'obtenir une réponse.
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