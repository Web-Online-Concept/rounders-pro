// app/guide-stake/jeux/page.js
import Link from 'next/link';
import { AFFILIATE_LINK } from '../../config/affiliate';

export default function GuideJeuxPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🎮 Guide Complet des Jeux
      </h1>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-8">
        <p className="text-purple-900 font-semibold">
          🎯 Plus de 3000 jeux disponibles + Poker !
        </p>
        <p className="text-purple-800 mt-1">
          Slots, Live Casino, Stake Originals, Sports, Poker... Il y en a pour tous les goûts
        </p>
      </div>

      {/* Stake Originals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ⭐ Stake Originals - Les Exclusivités
        </h2>
        
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6">
          <p className="text-gray-800 mb-4">
            Les Stake Originals sont des jeux développés exclusivement par Stake. 
            RTP élevé (99%), transparence totale et gameplay innovant !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">🎯 Plinko</h3>
            <p className="text-sm text-gray-600 mb-2">
              Lâchez la bille et priez ! Multiplicateurs jusqu'à 1000x
            </p>
            <div className="text-xs text-gray-500">
              RTP: 99% | Volatilité: Variable
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">💣 Mines</h3>
            <p className="text-sm text-gray-600 mb-2">
              Évitez les mines, trouvez les diamants. Stratégie pure !
            </p>
            <div className="text-xs text-gray-500">
              RTP: 99% | Volatilité: Variable
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">📈 Crash</h3>
            <p className="text-sm text-gray-600 mb-2">
              Encaissez avant le crash ! Adrénaline garantie
            </p>
            <div className="text-xs text-gray-500">
              RTP: 99% | Volatilité: Haute
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">🎲 Dice</h3>
            <p className="text-sm text-gray-600 mb-2">
              Le classique réinventé. Simple et efficace
            </p>
            <div className="text-xs text-gray-500">
              RTP: 99% | Volatilité: Faible
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">🎱 Limbo</h3>
            <p className="text-sm text-gray-600 mb-2">
              Passez sous la barre ! Multiplicateurs énormes
            </p>
            <div className="text-xs text-gray-500">
              RTP: 99% | Volatilité: Extrême
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">🏁 HiLo</h3>
            <p className="text-sm text-gray-600 mb-2">
              Plus haut ou plus bas ? Enchaînez les bonnes prédictions
            </p>
            <div className="text-xs text-gray-500">
              RTP: 99% | Volatilité: Moyenne
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-blue-900 font-semibold mb-2">💡 Pourquoi choisir les Originals ?</p>
          <ul className="space-y-1 text-blue-800 text-sm">
            <li>• RTP de 99% (contre 96% sur les slots classiques)</li>
            <li>• Résultats vérifiables (Provably Fair)</li>
            <li>• Stratégies possibles (pas que de la chance)</li>
            <li>• Mise minimum très basse (0.00000001 BTC)</li>
          </ul>
        </div>
      </section>

      {/* Slots */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎰 Machines à Sous (Slots)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">📊 Statistiques Slots</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>2000+</strong> machines à sous</li>
              <li>• <strong>50+</strong> providers premium</li>
              <li>• RTP moyen : <strong>96.5%</strong></li>
              <li>• Jackpots jusqu'à <strong>10M$</strong></li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">🏆 Top Providers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Pragmatic Play</strong></li>
              <li>• <strong>Play'n GO</strong></li>
              <li>• <strong>NetEnt</strong></li>
              <li>• <strong>Hacksaw Gaming</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">🔥 Slots Populaires sur Stake</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded p-3 text-center">
              <div className="text-2xl mb-1">🍬</div>
              <div className="text-sm font-medium">Sweet Bonanza</div>
              <div className="text-xs text-gray-500">21,175x max</div>
            </div>
            <div className="bg-white rounded p-3 text-center">
              <div className="text-2xl mb-1">🏛️</div>
              <div className="text-sm font-medium">Gates of Olympus</div>
              <div className="text-xs text-gray-500">5,000x max</div>
            </div>
            <div className="bg-white rounded p-3 text-center">
              <div className="text-2xl mb-1">🐶</div>
              <div className="text-sm font-medium">The Dog House</div>
              <div className="text-xs text-gray-500">6,750x max</div>
            </div>
            <div className="bg-white rounded p-3 text-center">
              <div className="text-2xl mb-1">💀</div>
              <div className="text-sm font-medium">Book of Dead</div>
              <div className="text-xs text-gray-500">5,000x max</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Casino */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎯 Live Casino
        </h2>
        
        <div className="bg-red-50 rounded-lg p-6 mb-6">
          <p className="text-gray-800 mb-4">
            Jouez en direct avec de vrais croupiers ! Immersion totale depuis chez vous.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">🃏 Blackjack Live</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tables VIP disponibles</li>
                <li>• Limites : 1$ - 10,000$</li>
                <li>• Side bets disponibles</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">🎡 Roulette Live</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Européenne & Américaine</li>
                <li>• Lightning Roulette</li>
                <li>• Auto-Roulette 24/7</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">🎲 Baccarat Live</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Speed Baccarat</li>
                <li>• No Commission</li>
                <li>• Squeeze disponible</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-4">
          <p className="text-amber-900 font-semibold mb-2">🎮 Game Shows Live</p>
          <p className="text-amber-800 text-sm">
            Crazy Time, Monopoly Live, Deal or No Deal... Les jeux TV en live avec 
            des multiplicateurs fous et une ambiance unique !
          </p>
        </div>
      </section>

      {/* Paris Sportifs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ⚽ Paris Sportifs & eSports
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-3">🏆 Sports Traditionnels</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-green-800">Football ⚽</div>
                <div className="text-sm text-green-700">100+ ligues, paris en direct</div>
              </div>
              <div>
                <div className="font-semibold text-green-800">Tennis 🎾</div>
                <div className="text-sm text-green-700">ATP, WTA, Grand Chelem</div>
              </div>
              <div>
                <div className="font-semibold text-green-800">Basketball 🏀</div>
                <div className="text-sm text-green-700">NBA, EuroLeague, NCAA</div>
              </div>
              <div>
                <div className="font-semibold text-green-800">Et 50+ autres sports</div>
                <div className="text-sm text-green-700">MMA, Boxe, Rugby, Cricket...</div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-purple-900 mb-3">🎮 eSports</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-purple-800">CS:GO 🔫</div>
                <div className="text-sm text-purple-700">Tous les tournois majeurs</div>
              </div>
              <div>
                <div className="font-semibold text-purple-800">League of Legends 🏹</div>
                <div className="text-sm text-purple-700">LEC, LCS, Worlds</div>
              </div>
              <div>
                <div className="font-semibold text-purple-800">Dota 2 ⚔️</div>
                <div className="text-sm text-purple-700">The International, DPC</div>
              </div>
              <div>
                <div className="font-semibold text-purple-800">Valorant & plus</div>
                <div className="text-sm text-purple-700">VCT, FIFA, Overwatch...</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-blue-900 font-semibold mb-2">💰 Avantages Paris Sportifs Stake</p>
          <ul className="space-y-1 text-blue-800 text-sm">
            <li>• Cotes parmi les meilleures du marché</li>
            <li>• Cash out disponible sur la plupart des paris</li>
            <li>• Pas de limite de gains</li>
            <li>• Paris combinés avec boost</li>
            <li>• Streaming gratuit de certains matchs</li>
          </ul>
        </div>
      </section>

      {/* Poker */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ♠️ Poker - Nouvelle Section
        </h2>
        
        <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-6 mb-6">
          <p className="text-gray-800 mb-4">
            Stake a lancé sa section poker en septembre 2024 ! Rejoignez des centaines 
            de joueurs sur les tables de cash game et tournois.
          </p>
          <div className="flex items-center space-x-2">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">NOUVEAU</span>
            <span className="text-red-900 font-medium">Section poker complète disponible</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-3">🎯 Variantes Disponibles</h3>
            <div className="space-y-3">
              <div className="bg-red-50 rounded p-3">
                <div className="font-semibold text-red-800">Texas Hold'em</div>
                <div className="text-sm text-red-700">Le classique incontournable</div>
              </div>
              <div className="bg-red-50 rounded p-3">
                <div className="font-semibold text-red-800">Pot Limit Omaha</div>
                <div className="text-sm text-red-700">Pour les joueurs expérimentés</div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-3">💰 Stakes & Limites</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Micro stakes:</span>
                <span className="font-bold text-red-800">$0.01/$0.02</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Low stakes:</span>
                <span className="font-bold text-red-800">jusqu'à $0.50/$1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tournois GTD:</span>
                <span className="font-bold text-red-800">jusqu'à $2,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">🎮 Formats de Jeu</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">💵 Cash Games</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tables full-ring (9 joueurs)</li>
                <li>• Action 24/7</li>
                <li>• Jusqu'à 30 tables aux heures de pointe</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">🏆 Tournois</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• MTT avec garanties</li>
                <li>• Formats variés</li>
                <li>• Buy-ins accessibles</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">⚡ Sit & Go</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Démarrage rapide</li>
                <li>• Différentes structures</li>
                <li>• Idéal pour sessions courtes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-900 font-semibold mb-2">🎯 Pourquoi jouer au poker sur Stake ?</p>
            <ul className="space-y-1 text-yellow-800 text-sm">
              <li>• Field très soft (joueurs casino récréatifs)</li>
              <li>• 19 cryptomonnaies acceptées</li>
              <li>• Intégré au programme VIP général</li>
              <li>• Client web moderne et fluide</li>
              <li>• Multi-tabling disponible</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-900 font-semibold mb-2">🚀 Fonctionnalités Poker</p>
            <ul className="space-y-1 text-green-800 text-sm">
              <li>• Run it Twice disponible</li>
              <li>• Affichage des stacks en BB</li>
              <li>• Historique des mains</li>
              <li>• Personnalisation du client</li>
              <li>• Dépôts/retraits instantanés</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">💡 Conseils pour débuter au poker Stake</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Pour les débutants :</p>
              <ul className="text-sm space-y-1">
                <li>• Commencez aux micro stakes ($0.01/$0.02)</li>
                <li>• Privilégiez les tables full-ring</li>
                <li>• Jouez serré au début</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Pour progresser :</p>
              <ul className="text-sm space-y-1">
                <li>• Utilisez l'historique des mains</li>
                <li>• Observez les tendances des joueurs</li>
                <li>• Profitez du field récréatif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommandations par profil */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎯 Recommandations par Profil
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border-2 border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-2">🌱 Débutant</h3>
            <p className="text-gray-700 mb-3">
              Commencez par les Stake Originals (Dice, Mines) pour comprendre les mécaniques. 
              RTP élevé et mises minimales très basses.
            </p>
            <div className="text-sm text-green-700">
              <strong>Recommandé :</strong> Dice, Plinko, Mines
            </div>
          </div>
          
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">🎰 Amateur de Slots</h3>
            <p className="text-gray-700 mb-3">
              Explorez les slots Pragmatic Play et Hacksaw Gaming. 
              Commencez en mode démo puis passez en argent réel.
            </p>
            <div className="text-sm text-blue-700">
              <strong>Recommandé :</strong> Sweet Bonanza, Gates of Olympus, Wanted Dead or a Wild
            </div>
          </div>
          
          <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
            <h3 className="font-bold text-purple-900 mb-2">🎯 Stratège</h3>
            <p className="text-gray-700 mb-3">
              Le Poker, Blackjack, Baccarat et les paris sportifs vous permettront 
              d'appliquer vos stratégies et analyses.
            </p>
            <div className="text-sm text-purple-700">
              <strong>Recommandé :</strong> Poker Texas Hold'em, Blackjack Live, Paris sportifs, Mines
            </div>
          </div>
          
          <div className="bg-white border-2 border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-amber-900 mb-2">🚀 Chasseur de Sensations</h3>
            <p className="text-gray-700 mb-3">
              Les jeux à haute volatilité et les game shows live vous donneront 
              votre dose d'adrénaline.
            </p>
            <div className="text-sm text-amber-700">
              <strong>Recommandé :</strong> Crash, Limbo, Crazy Time, Lightning Roulette
            </div>
          </div>
          
          <div className="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-2">♠️ Joueur de Poker</h3>
            <p className="text-gray-700 mb-3">
              Tables cash game et tournois vous attendent. Profitez d'un field soft 
              avec de nombreux joueurs récréatifs venant du casino.
            </p>
            <div className="text-sm text-red-700">
              <strong>Recommandé :</strong> Texas Hold'em cash games, MTT garantis, Omaha
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">🎮 Prêt à jouer ?</h3>
        <p className="mb-6 text-gray-300">
          Testez d'abord en mode démo, puis profitez du rakeback de 10% 
          sur tous vos paris avec notre code affilié.
        </p>
        <Link
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Explorer les jeux →
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/vip"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Programme VIP
        </Link>
        <Link
          href="/guide-stake/crypto"
          className="text-blue-600 hover:underline font-medium"
        >
          Cryptomonnaies →
        </Link>
      </div>
    </div>
  );
}