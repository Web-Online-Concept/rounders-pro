'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center px-4 pb-16 md:pb-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Gagnez plus sur Stake avec Rounders
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Le guide ultime pour maximiser vos gains sur Stake
              <br className="hidden md:block" />
              avec des bonus cash exclusifs jusqu&apos;à 200€ par niveau VIP
            </p>
            
            {/* Image placeholder */}
            {/* <Image 
              src="/images/hero-stake.jpg" 
              alt="Interface Stake avec bonus Rounders" 
              width={1200} 
              height={600} 
              className="w-full rounded-lg shadow-xl mb-8"
              priority
            /> */}
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Commencer sur Stake →
              </a>
              <Link href="/guide-stake" className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors">
                Découvrir le guide
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 md:py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">200€</div>
                <div className="text-gray-600 mt-2">Max par niveau VIP</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">5%+</div>
                <div className="text-gray-600 mt-2">Rakeback dès l&apos;inscription</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">12</div>
                <div className="text-gray-600 mt-2">Guides détaillés</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600 mt-2">Support disponible</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pourquoi choisir Rounders ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Guide Complet Stake */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {/* <Image 
                  src="/images/guide-stake.jpg" 
                  alt="Guide Stake complet" 
                  width={400} 
                  height={250} 
                  className="w-full rounded-lg mb-6"
                /> */}
                <h3 className="text-2xl font-bold mb-4">Guide Complet Stake</h3>
                <p className="text-gray-600 mb-6">
                  Tout ce qu&apos;il faut savoir pour réussir sur Stake, de l&apos;inscription aux stratégies avancées.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Guide spécial France (VPN)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Tutoriel crypto détaillé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Stratégies par jeu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Programme VIP expliqué</span>
                  </li>
                </ul>
                <Link href="/guide-stake" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Voir le guide →
                </Link>
              </div>

              {/* Avantages Exclusifs Rounders */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {/* <Image 
                  src="/images/avantages-rounders.jpg" 
                  alt="Avantages exclusifs Rounders" 
                  width={400} 
                  height={250} 
                  className="w-full rounded-lg mb-6"
                /> */}
                <h3 className="text-2xl font-bold mb-4">Avantages Exclusifs Rounders</h3>
                <p className="text-gray-600 mb-6">
                  En plus de Stake, profitez des avantages exclusifs réservés à notre communauté d&apos;affiliés.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">💰 Bonus Cash VIP</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>10€ dès le niveau Bronze</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Jusqu&apos;à 200€ au Diamant</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">🎯 Espace Affiliés Dédié</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Réclamation simple et rapide</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Paiement crypto au choix</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link href="/affilies" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Découvrir les avantages →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comment ça marche ?
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Inscrivez-vous</h3>
                <p className="text-gray-600 text-sm">
                  Créez votre compte Stake avec notre lien affilié
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Jouez</h3>
                <p className="text-gray-600 text-sm">
                  Profitez des jeux et montez en niveau VIP
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Réclamez</h3>
                <p className="text-gray-600 text-sm">
                  Demandez vos bonus cash à chaque niveau
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Recevez</h3>
                <p className="text-gray-600 text-sm">
                  Bonus envoyé dans la crypto de votre choix
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Cash Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                💰 Bonus Cash Exclusifs Rounders
              </h2>
              <p className="text-xl mb-8 text-center">
                Recevez des bonus cash à chaque niveau VIP atteint !
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Montants par niveau :</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>🥉 Bronze</span>
                      <span className="font-bold text-xl">10€</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>🥈 Argent</span>
                      <span className="font-bold text-xl">20€</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>🥇 Or</span>
                      <span className="font-bold text-xl">30€</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>💎 Platine I-III</span>
                      <span className="font-bold text-xl">50€</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>💎 Platine IV-VI</span>
                      <span className="font-bold text-xl">100€</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>💎 Diamant I-V</span>
                      <span className="font-bold text-xl">200€</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Comment ça fonctionne :</h3>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Inscrivez-vous via notre lien affilié</li>
                    <li>Atteignez un nouveau niveau VIP</li>
                    <li>Prenez une capture d&apos;écran</li>
                    <li>Réclamez votre bonus dans l&apos;Espace Affiliés</li>
                    <li>Recevez votre paiement en crypto</li>
                  </ol>
                  <div className="mt-6">
                    <Link 
                      href="/affilies" 
                      className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Réclamer mes bonus →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à maximiser vos gains ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez Rounders et profitez de nos bonus exclusifs jusqu&apos;à 200€ par niveau VIP
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://stake.bet/?c=rounders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                S&apos;inscrire sur Stake →
              </a>
              <Link href="/guide-stake" className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
                Lire le guide complet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}