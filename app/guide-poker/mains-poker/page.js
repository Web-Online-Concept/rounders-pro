// app/guide-poker/mains-poker/page.js
import Link from 'next/link';

export default function MainsPokerPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Classement des Mains</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🃏 Classement des Mains au Poker
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          La première étape pour jouer au poker est de connaître parfaitement la hiérarchie des mains. 
          De la simple carte haute à la mythique quinte flush royale, découvrez toutes les combinaisons 
          possibles, leurs probabilités et les subtilités qui font la différence.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Vue d'ensemble */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Les 10 mains du poker - De la plus forte à la plus faible
          </h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div>
              <p>1. 👑 Quinte Flush Royale</p>
              <p>2. 🌟 Quinte Flush</p>
              <p>3. 🎰 Carré</p>
              <p>4. 🏠 Full House</p>
              <p>5. 💎 Couleur</p>
            </div>
            <div>
              <p>6. 📈 Suite (Quinte)</p>
              <p>7. 🎲 Brelan</p>
              <p>8. 👫 Double Paire</p>
              <p>9. 👥 Paire</p>
              <p>10. 🃏 Carte Haute</p>
            </div>
          </div>
        </div>

        {/* 1. Quinte Flush Royale */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            👑 1. Quinte Flush Royale (Royal Flush)
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> A-K-Q-J-10 de la même couleur
            </p>
            <p className="text-2xl text-center my-4">
              A♠️ K♠️ Q♠️ J♠️ 10♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h4 className="font-semibold text-purple-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 0.000154%</li>
                <li>• 1 chance sur 649,740</li>
                <li>• 4 combinaisons possibles</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h4 className="font-semibold text-purple-700">💡 À savoir</h4>
              <p className="text-sm">
                La main ultime au poker. Imbattable. Certains joueurs ne la verront jamais en live.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Quinte Flush */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            🌟 2. Quinte Flush (Straight Flush)
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> 5 cartes consécutives de la même couleur
            </p>
            <p className="text-2xl text-center my-4">
              9♥️ 8♥️ 7♥️ 6♥️ 5♥️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded p-4">
              <h4 className="font-semibold text-blue-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 0.00139%</li>
                <li>• 1 chance sur 72,193</li>
                <li>• 36 combinaisons (sans royale)</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded p-4">
              <h4 className="font-semibold text-blue-700">⚠️ Attention</h4>
              <p className="text-sm">
                A-2-3-4-5 est la plus petite quinte flush. L'As peut être haut ou bas.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Carré */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            🎰 3. Carré (Four of a Kind)
          </h2>
          
          <div className="bg-red-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> 4 cartes de même valeur
            </p>
            <p className="text-2xl text-center my-4">
              K♠️ K♥️ K♦️ K♣️ 7♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h4 className="font-semibold text-red-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 0.024%</li>
                <li>• 1 chance sur 4,165</li>
                <li>• 624 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-red-200 rounded p-4">
              <h4 className="font-semibold text-red-700">🎯 Kicker</h4>
              <p className="text-sm">
                La 5ème carte (kicker) départage les carrés identiques (rare mais possible).
              </p>
            </div>
          </div>
        </div>

        {/* 4. Full House */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            🏠 4. Full House (Full)
          </h2>
          
          <div className="bg-orange-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> Un brelan + une paire
            </p>
            <p className="text-2xl text-center my-4">
              Q♠️ Q♥️ Q♦️ 9♣️ 9♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h4 className="font-semibold text-orange-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 0.144%</li>
                <li>• 1 chance sur 694</li>
                <li>• 3,744 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-orange-200 rounded p-4">
              <h4 className="font-semibold text-orange-700">🔍 Hiérarchie</h4>
              <p className="text-sm">
                "Queens full of nines" - Le brelan prime sur la paire pour départager.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Couleur */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💎 5. Couleur (Flush)
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> 5 cartes de la même couleur (non consécutives)
            </p>
            <p className="text-2xl text-center my-4">
              A♦️ J♦️ 9♦️ 5♦️ 3♦️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h4 className="font-semibold text-green-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 0.197%</li>
                <li>• 1 chance sur 508</li>
                <li>• 5,108 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-green-200 rounded p-4">
              <h4 className="font-semibold text-green-700">⚔️ Départage</h4>
              <p className="text-sm">
                La carte la plus haute gagne. Puis la 2ème, 3ème, etc. "Ace-high flush".
              </p>
            </div>
          </div>
        </div>

        {/* 6. Suite */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            📈 6. Suite / Quinte (Straight)
          </h2>
          
          <div className="bg-indigo-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> 5 cartes consécutives de couleurs différentes
            </p>
            <p className="text-2xl text-center my-4">
              10♠️ 9♥️ 8♦️ 7♣️ 6♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <h4 className="font-semibold text-indigo-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 0.392%</li>
                <li>• 1 chance sur 255</li>
                <li>• 10,200 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <h4 className="font-semibold text-indigo-700">🎲 Cas spéciaux</h4>
              <p className="text-sm">
                • A-2-3-4-5 : "Wheel" (plus petite)<br/>
                • 10-J-Q-K-A : "Broadway" (plus grande)
              </p>
            </div>
          </div>
        </div>

        {/* 7. Brelan */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">
            🎲 7. Brelan (Three of a Kind)
          </h2>
          
          <div className="bg-pink-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> 3 cartes de même valeur
            </p>
            <p className="text-2xl text-center my-4">
              8♠️ 8♥️ 8♦️ K♣️ 4♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-pink-200 rounded p-4">
              <h4 className="font-semibold text-pink-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 2.11%</li>
                <li>• 1 chance sur 47</li>
                <li>• 54,912 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-pink-200 rounded p-4">
              <h4 className="font-semibold text-pink-700">📝 Vocabulaire</h4>
              <p className="text-sm">
                • "Set" : brelan avec paire en main<br/>
                • "Trips" : brelan avec 1 carte en main
              </p>
            </div>
          </div>
        </div>

        {/* 8. Double Paire */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            👫 8. Double Paire (Two Pair)
          </h2>
          
          <div className="bg-yellow-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> 2 paires différentes
            </p>
            <p className="text-2xl text-center my-4">
              J♠️ J♥️ 7♦️ 7♣️ 2♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-yellow-200 rounded p-4">
              <h4 className="font-semibold text-yellow-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 4.75%</li>
                <li>• 1 chance sur 21</li>
                <li>• 123,552 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-yellow-200 rounded p-4">
              <h4 className="font-semibold text-yellow-700">🏆 Départage</h4>
              <p className="text-sm">
                1. Paire la plus haute<br/>
                2. Deuxième paire<br/>
                3. Kicker
              </p>
            </div>
          </div>
        </div>

        {/* 9. Paire */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            👥 9. Paire (One Pair)
          </h2>
          
          <div className="bg-gray-100 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> 2 cartes de même valeur
            </p>
            <p className="text-2xl text-center my-4">
              A♠️ A♥️ K♦️ 9♣️ 5♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-gray-300 rounded p-4">
              <h4 className="font-semibold text-gray-700">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 42.3%</li>
                <li>• Main la plus fréquente</li>
                <li>• 1,098,240 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded p-4">
              <h4 className="font-semibold text-gray-700">🎯 Kickers</h4>
              <p className="text-sm">
                Les 3 cartes restantes (kickers) sont cruciales pour départager.
              </p>
            </div>
          </div>
        </div>

        {/* 10. Carte Haute */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            🃏 10. Carte Haute (High Card)
          </h2>
          
          <div className="bg-gray-50 rounded p-4 mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Définition :</strong> Aucune combinaison
            </p>
            <p className="text-2xl text-center my-4">
              A♠️ K♥️ 9♦️ 7♣️ 4♠️
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-gray-200 rounded p-4">
              <h4 className="font-semibold text-gray-600">📊 Probabilités</h4>
              <ul className="text-sm space-y-1">
                <li>• Texas Hold'em : 50.1%</li>
                <li>• 1 chance sur 2</li>
                <li>• 1,302,540 combinaisons</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded p-4">
              <h4 className="font-semibold text-gray-600">📉 Départage</h4>
              <p className="text-sm">
                Carte par carte, de la plus haute à la plus basse. "Ace high".
              </p>
            </div>
          </div>
        </div>

        {/* Cas particuliers */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Cas particuliers et pièges fréquents
        </h2>
        <div className="space-y-4 mb-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ Erreur commune : La suite A-2-3-4-5</h3>
            <p className="text-gray-700">
              L'As peut être bas (A-2-3-4-5) ou haut (10-J-Q-K-A) mais PAS au milieu. 
              K-A-2-3-4 n'est PAS une suite !
            </p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h3 className="font-bold text-yellow-700 mb-2">⚠️ Attention : Les couleurs n'ont pas de hiérarchie</h3>
            <p className="text-gray-700">
              Pique ♠️ = Cœur ♥️ = Carreau ♦️ = Trèfle ♣️. Aucune couleur n'est supérieure à une autre.
            </p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-bold text-blue-700 mb-2">💡 Rappel : Meilleure main de 5 cartes</h3>
            <p className="text-gray-700">
              Au Hold'em et Omaha, vous utilisez la meilleure combinaison possible de 5 cartes 
              parmi les 7 (Hold'em) ou 9 (Omaha) disponibles.
            </p>
          </div>
        </div>

        {/* Probabilités comparatives */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            📊 Probabilités au flop (Texas Hold'em)
          </h2>
          
          <div className="bg-white bg-opacity-20 rounded p-4">
            <h3 className="font-bold mb-3">Avec une paire en main :</h3>
            <ul className="space-y-2">
              <li>• Brelan au flop : 11.8%</li>
              <li>• Full ou mieux à la river : 8.4%</li>
              <li>• Carré à la river : 0.8%</li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded p-4 mt-4">
            <h3 className="font-bold mb-3">Avec deux cartes assorties :</h3>
            <ul className="space-y-2">
              <li>• Couleur au flop : 0.84%</li>
              <li>• Tirage couleur au flop : 10.9%</li>
              <li>• Couleur à la river : 6.5%</li>
            </ul>
          </div>
        </div>

        {/* Conseils pratiques */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Conseils pour bien jouer ses mains
        </h2>
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-green-700 mb-2">🎯 Ne surestimez pas vos mains</h3>
              <p className="text-gray-700">
                Une paire d'As est forte préflop mais reste juste une paire. Un brelan bat toujours 
                deux paires, même As et Rois contre 2-2-2.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-green-700 mb-2">🧮 Pensez aux outs</h3>
              <p className="text-gray-700">
                Avec un tirage, calculez vos "outs" (cartes qui améliorent votre main). 
                Tirage couleur = 9 outs, tirage quinte par les deux bouts = 8 outs.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-green-700 mb-2">👀 Analysez le board</h3>
              <p className="text-gray-700">
                Un board avec 3 cartes de même couleur rend une couleur possible. 
                Un board "connecté" (8-9-10) rend les suites probables.
              </p>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            🃏 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Mémorisez parfaitement la hiérarchie - c'est la base absolue du poker
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Au Hold'em, vous utilisez la meilleure combinaison de 5 cartes parmi 7
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Les kickers sont cruciaux - A-K bat A-Q si les deux ont une paire d'As
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Les couleurs (♠️♥️♦️♣️) n'ont aucune hiérarchie entre elles
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Pratiquez sur Stake
                </Link> pour mémoriser naturellement toutes les combinaisons
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/regles-base"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Règles et Variantes
          </Link>
          <Link 
            href="/guide-poker/positions-table"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Positions à la Table
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}