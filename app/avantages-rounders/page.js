import Header from '../components/Header';
import Footer from '../components/Footer';
import { AFFILIATE_LINK, AFFILIATE_CODE } from '../config/affiliate';

export default function AvantagesRounders() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          🎁 Avantages Exclusifs Rounders
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          En vous inscrivant sur Stake via notre lien d&apos;affiliation, vous bénéficiez 
          de bonus cash exclusifs EN PLUS de tous les bonus offerts par Stake
        </p>
      </div>

      {/* Alerte importante */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-blue-800">
              <strong>Important :</strong> Ces avantages sont offerts par Rounders et s&apos;ajoutent 
              aux bonus VIP, rakeback, et promotions déjà disponibles sur Stake.
            </p>
          </div>
        </div>
      </div>

      {/* Bonus Cash Rounders */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          💰 Bonus Cash Exclusifs Rounders
        </h2>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Recevez un bonus cash en fonction de votre niveau VIP atteint sur Stake !
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-2xl font-bold text-yellow-600 mb-2">Bronze</div>
              <div className="text-3xl font-bold text-gray-900">10€</div>
              <div className="text-sm text-gray-600 mt-2">Bonus Cash</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-2xl font-bold text-gray-600 mb-2">Argent</div>
              <div className="text-3xl font-bold text-gray-900">20€</div>
              <div className="text-sm text-gray-600 mt-2">Bonus Cash</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-2xl font-bold text-yellow-500 mb-2">Or</div>
              <div className="text-3xl font-bold text-gray-900">30€</div>
              <div className="text-sm text-gray-600 mt-2">Bonus Cash</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-2xl font-bold text-cyan-600 mb-2">Platine I-III</div>
              <div className="text-3xl font-bold text-gray-900">50€</div>
              <div className="text-sm text-gray-600 mt-2">Bonus Cash</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-2xl font-bold text-purple-600 mb-2">Platine IV-VI</div>
              <div className="text-3xl font-bold text-gray-900">100€</div>
              <div className="text-sm text-gray-600 mt-2">Bonus Cash</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-2xl font-bold text-pink-600 mb-2">Diamant I-V</div>
              <div className="text-3xl font-bold text-gray-900">200€</div>
              <div className="text-sm text-gray-600 mt-2">Bonus Cash</div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/affilies"
              className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              Réclamer mon bonus →
            </a>
          </div>
        </div>
      </div>

      {/* Comment ça marche */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          🎯 Comment obtenir vos avantages Rounders ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inscrivez-vous</h3>
            <p className="text-gray-600">
              Créez votre compte sur Stake en utilisant notre lien d&apos;affiliation 
              avec le code <strong>{AFFILIATE_CODE}</strong>
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Jouez et progressez</h3>
            <p className="text-gray-600">
              Atteignez les niveaux VIP Bronze, Argent, Or ou plus en jouant 
              sur Stake
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Réclamez</h3>
            <p className="text-gray-600">
              Rendez-vous dans l&apos;Espace Affiliés pour réclamer votre 
              bonus cash exclusif
            </p>
          </div>
        </div>
      </div>

      {/* Autres avantages */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          ✨ Autres avantages Rounders
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="text-2xl mr-2">💬</span>
              Support dédié
            </h3>
            <p className="text-gray-600">
              Une équipe disponible sur Twitter pour répondre à vos questions 
              et vous accompagner
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="text-2xl mr-2">📖</span>
              Guide complet
            </h3>
            <p className="text-gray-600">
              Un guide détaillé pour maîtriser Stake et optimiser vos gains 
              avec toutes les stratégies
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="text-2xl mr-2">🎁</span>
              Promotions futures
            </h3>
            <p className="text-gray-600">
              De nouvelles promotions exclusives à venir pour nos affiliés 
              les plus fidèles
            </p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à profiter de tous ces avantages ?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Rejoignez Rounders et bénéficiez de nos bonus exclusifs EN PLUS 
          de tout ce que Stake offre déjà !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            S&apos;inscrire sur Stake →
          </a>
          <a 
            href="/guide-stake"
            className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Consulter le guide
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          * Les bonus Rounders sont offerts indépendamment de Stake et sous réserve 
          de nos conditions générales
        </p>
      </div>
      </div>
      <Footer />
    </>
  );
}