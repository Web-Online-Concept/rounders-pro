'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AFFILIATE_LINK } from '../../config/affiliate';

export default function GuideBonus() {
  const [activeTab, setActiveTab] = useState('rakeback');

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Bonus & Rakeback sur Stake</h1>
      
      {/* Introduction */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 md:p-6 mb-8">
        <p className="text-blue-800 text-sm md:text-base">
          Stake offre l&apos;un des meilleurs systèmes de bonus du marché. Avec notre code affilié <strong>rounders</strong>, 
          vous bénéficiez de 5%+ de rakeback dès l&apos;inscription, plus nos bonus cash exclusifs !
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex overflow-x-auto border-b">
          <button
            onClick={() => setActiveTab('rakeback')}
            className={`px-4 md:px-6 py-3 font-semibold transition-colors whitespace-nowrap text-sm md:text-base ${
              activeTab === 'rakeback' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Rakeback
          </button>
          <button
            onClick={() => setActiveTab('calendrier')}
            className={`px-4 md:px-6 py-3 font-semibold transition-colors whitespace-nowrap text-sm md:text-base ${
              activeTab === 'calendrier' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Calendrier
          </button>
          <button
            onClick={() => setActiveTab('exclusifs')}
            className={`px-4 md:px-6 py-3 font-semibold transition-colors whitespace-nowrap text-sm md:text-base ${
              activeTab === 'exclusifs' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Bonus Rounders
          </button>
        </div>

        <div className="p-4 md:p-6">
          {/* Rakeback Tab */}
          {activeTab === 'rakeback' && (
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Le système de Rakeback</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3">🎁 Offre de bienvenue Rounders</h3>
                <p className="text-base md:text-lg">
                  En vous inscrivant avec notre code <strong>rounders</strong>, vous obtenez immédiatement 
                  <span className="text-green-600 font-bold"> 5% de rakeback minimum</span> au lieu du taux standard !
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Comment fonctionne le rakeback ?</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Le rakeback est un pourcentage de l&apos;avantage de la maison (house edge) qui vous est retourné sur chaque mise. 
                  Par exemple, avec 10% de rakeback sur un jeu avec 1% de house edge, vous récupérez 0.1% de chaque mise.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold mb-2">Exemple concret :</p>
                  <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                    <li>• Vous misez 1000$ sur un jeu avec 1% de house edge</li>
                    <li>• Avec 10% de rakeback, vous récupérez 1$ (0.1% de 1000$)</li>
                    <li>• Plus vous jouez, plus vous récupérez !</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Évolution du rakeback selon votre VIP</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-3 md:px-4 py-2 text-left text-sm md:text-base">Niveau VIP</th>
                        <th className="px-3 md:px-4 py-2 text-center text-sm md:text-base">Rakeback %</th>
                        <th className="px-3 md:px-4 py-2 text-left text-sm md:text-base">Avantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-3 md:px-4 py-3 text-sm md:text-base">Sans code</td>
                        <td className="px-3 md:px-4 py-3 text-center text-sm md:text-base">Variable</td>
                        <td className="px-3 md:px-4 py-3 text-gray-600 text-sm md:text-base">Taux de base</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-3 md:px-4 py-3 font-semibold text-sm md:text-base">Avec code &quot;rounders&quot;</td>
                        <td className="px-3 md:px-4 py-3 text-center font-semibold text-sm md:text-base">5%+</td>
                        <td className="px-3 md:px-4 py-3 text-green-600 font-semibold text-sm md:text-base">Boost immédiat !</td>
                      </tr>
                      <tr>
                        <td className="px-3 md:px-4 py-3 text-sm md:text-base">Bronze → Platine</td>
                        <td className="px-3 md:px-4 py-3 text-center text-sm md:text-base">5% → 15%</td>
                        <td className="px-3 md:px-4 py-3 text-gray-600 text-sm md:text-base">Augmentation progressive</td>
                      </tr>
                      <tr>
                        <td className="px-3 md:px-4 py-3 text-sm md:text-base">Diamant</td>
                        <td className="px-3 md:px-4 py-3 text-center text-sm md:text-base">20%+</td>
                        <td className="px-3 md:px-4 py-3 text-gray-600 text-sm md:text-base">Maximum possible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Calendrier Tab */}
          {activeTab === 'calendrier' && (
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Calendrier des bonus Stake</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 md:px-4 py-2 text-left text-sm md:text-base">Bonus</th>
                      <th className="px-3 md:px-4 py-2 text-center text-sm md:text-base">Fréquence</th>
                      <th className="px-3 md:px-4 py-2 text-center text-sm md:text-base">Niveau</th>
                      <th className="px-3 md:px-4 py-2 text-left text-sm md:text-base">Montant</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-3 md:px-4 py-3 md:py-4 font-semibold text-sm md:text-base">Boost Telegram</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">Variable</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">Tous</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-gray-600 text-sm md:text-base">5$ - 50$+</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-3 md:px-4 py-3 md:py-4 font-semibold text-sm md:text-base">Bonus hebdo</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">Samedi</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-gray-600 text-sm md:text-base">VIP</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-gray-600 text-sm md:text-base">Selon wager</td>
                    </tr>
                    <tr>
                      <td className="px-3 md:px-4 py-3 md:py-4 font-semibold text-sm md:text-base">Bonus mensuel</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">1er du mois</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">VIP</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-gray-600 text-sm md:text-base">Important</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-3 md:px-4 py-3 md:py-4 font-semibold text-sm md:text-base">Bonus Rounders</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">À la demande</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">Tous VIP</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-blue-600 font-semibold text-sm md:text-base">10€ - 200€</td>
                    </tr>
                    <tr>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base">Anniversaire</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">Annuel</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">Tous</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-gray-600 text-sm md:text-base">Variable</td>
                    </tr>
                    <tr>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base">Tirages VIP</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">Aléatoire</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-center text-sm md:text-base">VIP élevé</td>
                      <td className="px-3 md:px-4 py-3 md:py-4 text-gray-600 text-sm md:text-base">Gros lots</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800 text-sm md:text-base">
                  <strong>Note :</strong> Les montants des bonus hebdomadaires et mensuels dépendent de votre volume de jeu 
                  et de votre niveau VIP. Plus vous jouez, plus les bonus sont importants !
                </p>
              </div>
            </div>
          )}

          {/* Bonus Exclusifs Tab */}
          {activeTab === 'exclusifs' && (
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Bonus Exclusifs Rounders Pro</h2>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4">💰 Nos bonus cash par niveau VIP</h3>
                <p className="text-base md:text-lg mb-4">
                  En plus des bonus Stake, recevez nos bonus cash exclusifs à chaque palier !
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base">🥉 Bronze</span>
                        <span className="font-bold text-lg md:text-xl">10€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base">🥈 Argent</span>
                        <span className="font-bold text-lg md:text-xl">20€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base">🥇 Or</span>
                        <span className="font-bold text-lg md:text-xl">30€</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base">💎 Platine I-III</span>
                        <span className="font-bold text-lg md:text-xl">50€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base">💎 Platine IV-VI</span>
                        <span className="font-bold text-lg md:text-xl">100€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base">💎 Diamant I-V</span>
                        <span className="font-bold text-lg md:text-xl">200€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Comment réclamer vos bonus Rounders ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Atteignez un nouveau niveau VIP</p>
                      <p className="text-gray-600 text-sm">Bronze, Argent, Or, Platine ou Diamant</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Prenez une capture d&apos;écran</p>
                      <p className="text-gray-600 text-sm">Montrez clairement votre nouveau niveau VIP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Remplissez le formulaire</p>
                      <p className="text-gray-600 text-sm">Dans notre <Link href="/affilies" className="text-blue-600 hover:underline">Espace Affiliés</Link></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Recevez votre bonus</p>
                      <p className="text-gray-600 text-sm">Paiement dans la crypto de votre choix sous 24-48h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold mb-2">✅ Conditions simples</h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>• Inscription via notre lien affilié (code: rounders)</li>
                  <li>• Un bonus par niveau atteint</li>
                  <li>• Paiement garanti sous 48h</li>
                  <li>• Choix de la crypto pour le paiement</li>
                </ul>
              </div>

              <div className="text-center">
                <Link 
                  href="/affilies" 
                  className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm md:text-base"
                >
                  Réclamer mes bonus →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 md:p-8 text-white text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Prêt à profiter de tous ces bonus ?</h2>
        <p className="text-base md:text-lg mb-6">
          Inscrivez-vous avec notre code et commencez à accumuler rakeback et bonus dès maintenant !
        </p>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
        >
          S&apos;inscrire avec le code rounders →
        </a>
      </div>
    </>
  );
}