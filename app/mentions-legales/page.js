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
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Société :</strong> Web Online Concept</p>
                <p><strong>Adresse :</strong> Rue Paul Estival, 31200 Toulouse, France</p>
                <p><strong>Email :</strong> web.online.concept@gmail.com</p>
                <p><strong>Site web :</strong> <a href="https://web-online-concept.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">web-online-concept.com</a></p>
                <p><strong>SIRET :</strong> 510 583 800 00048</p>
                <p><strong>Directeur de publication :</strong> Le représentant légal de Web Online Concept</p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos) est la propriété exclusive de Web Online Concept ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite.
              </p>
              <p className="text-gray-600">
                La marque Rounders.pro est la propriété exclusive de Web Online Concept.
              </p>
            </section>

            {/* Avertissements importants */}
            <section className="bg-red-50 border-l-4 border-red-400 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-800">Avertissements importants</h2>
              <div className="space-y-4 text-red-700">
                <p>
                  <strong>Nature du service :</strong> Rounders.pro est un site d&apos;information et de recommandation. Les bonus mentionnés sont offerts à titre gracieux, sans aucune obligation contractuelle de notre part.
                </p>
                <p>
                  <strong>Absence de garantie :</strong> Web Online Concept se réserve le droit de modifier, suspendre ou cesser tout ou partie de ses services à tout moment, sans préavis ni indemnité.
                </p>
                <p>
                  <strong>Jeux d&apos;argent :</strong> Les jeux d&apos;argent comportent des risques financiers et peuvent créer une dépendance. Ils sont interdits aux mineurs. Jouez responsable.
                </p>
                <p>
                  <strong>Affiliation :</strong> Rounders.pro participe au programme d&apos;affiliation de Stake et peut percevoir des commissions sur les inscriptions réalisées via nos liens.
                </p>
              </div>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Web Online Concept ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser ce site.
                </p>
                <p>
                  Les informations fournies le sont à titre indicatif et ne constituent en aucun cas des conseils personnalisés. L&apos;utilisateur reste seul responsable de ses décisions.
                </p>
                <p>
                  Web Online Concept décline toute responsabilité concernant les sites tiers vers lesquels des liens sont établis.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-600">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter à : web.online.concept@gmail.com
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