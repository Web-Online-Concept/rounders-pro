// app/guide-poker/introduction/page.js
import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Introduction au Poker</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📖 Introduction au Poker
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le poker est bien plus qu'un simple jeu de cartes. C'est un univers fascinant où se mêlent 
          stratégie, psychologie, mathématiques et maîtrise de soi. Découvrez pourquoi des millions de 
          joueurs à travers le monde sont passionnés par ce jeu et comment vous pouvez vous aussi 
          progresser pour devenir un joueur gagnant.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Qu'est-ce que le poker ?
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Le poker est un jeu de cartes qui combine chance et stratégie, où les joueurs misent sur la 
            valeur de leur main. Contrairement à ce que beaucoup pensent, le poker n'est pas un jeu de 
            hasard pur : sur le long terme, les meilleurs joueurs gagnent systématiquement.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-blue-700">Stratégie</h3>
              <p className="text-sm">Décisions calculées basées sur les probabilités</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-bold text-green-700">Psychologie</h3>
              <p className="text-sm">Lecture des adversaires et contrôle émotionnel</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-purple-700">Mathématiques</h3>
              <p className="text-sm">Calcul des cotes et gestion du risque</p>
            </div>
          </div>
        </div>

        {/* Histoire du Poker */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Une brève histoire du poker
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h3 className="font-semibold mb-1">XIXe siècle - Les origines</h3>
                <p className="text-gray-600">Le poker naît aux États-Unis, mélangeant des éléments de jeux européens et perses. Il se répand le long du Mississippi.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h3 className="font-semibold mb-1">1970 - L'ère moderne</h3>
                <p className="text-gray-600">Création des World Series of Poker (WSOP) à Las Vegas. Le poker devient un sport télévisé.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h3 className="font-semibold mb-1">2003 - Le boom du poker</h3>
                <p className="text-gray-600">Chris Moneymaker remporte les WSOP après s'être qualifié en ligne pour 39$. Le poker online explose.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <h3 className="font-semibold mb-1">Aujourd'hui</h3>
                <p className="text-gray-600">Le poker est un phénomène mondial avec des millions de joueurs, des tournois prestigieux et une reconnaissance comme jeu de stratégie.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi apprendre le poker */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Pourquoi apprendre le poker ?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">🎓 Développement personnel</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Améliore la prise de décision sous pression</li>
              <li>• Développe la pensée analytique</li>
              <li>• Enseigne la gestion du risque</li>
              <li>• Renforce la discipline mentale</li>
              <li>• Apprend la patience et la persévérance</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-700 mb-3">💰 Opportunités</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Potentiel de gains importants</li>
              <li>• Tournois accessibles à tous niveaux</li>
              <li>• Possibilité de jouer professionnellement</li>
              <li>• Communauté mondiale passionnée</li>
              <li>• Apprentissage continu et stimulant</li>
            </ul>
          </div>
        </div>

        {/* Les compétences essentielles */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Les compétences essentielles
          </h2>
          
          <div className="space-y-4">
            <div className="bg-purple-50 rounded p-4">
              <h3 className="font-bold mb-2">1. Compétences techniques</h3>
              <p className="text-gray-700 mb-2">
                La base solide sur laquelle construire votre jeu :
              </p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Connaissance des règles et des mains</li>
                <li>• Compréhension des positions</li>
                <li>• Calcul des probabilités</li>
                <li>• Stratégie de mise</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded p-4">
              <h3 className="font-bold mb-2">2. Compétences psychologiques</h3>
              <p className="text-gray-700 mb-2">
                L'aspect mental qui fait la différence :
              </p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Contrôle émotionnel (éviter le tilt)</li>
                <li>• Lecture des adversaires</li>
                <li>• Gestion de votre image</li>
                <li>• Patience et discipline</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded p-4">
              <h3 className="font-bold mb-2">3. Compétences financières</h3>
              <p className="text-gray-700 mb-2">
                La gestion rigoureuse pour durer :
              </p>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Gestion de bankroll</li>
                <li>• Compréhension de la variance</li>
                <li>• Choix des limites appropriées</li>
                <li>• Discipline dans les mises</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Les différents formats */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Les formats de jeu
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-green-700 mb-2">💵 Cash Game</h3>
              <p className="text-sm text-gray-600 mb-2">
                Parties d'argent avec caves libres
              </p>
              <ul className="text-sm space-y-1">
                <li>✓ Entrer et sortir à tout moment</li>
                <li>✓ Blinds fixes</li>
                <li>✓ Stratégie deep stack</li>
                <li>✓ Moins de variance</li>
              </ul>
            </div>
            
            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-blue-700 mb-2">🏆 Tournois</h3>
              <p className="text-sm text-gray-600 mb-2">
                Compétitions à élimination
              </p>
              <ul className="text-sm space-y-1">
                <li>✓ Buy-in fixe</li>
                <li>✓ Blinds croissantes</li>
                <li>✓ Prix pour les finalistes</li>
                <li>✓ Plus de variance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 text-sm">
              <strong>💡 Conseil :</strong> Commencez par le cash game pour apprendre les bases 
              avec moins de pression, puis essayez les tournois pour l'excitation de la compétition.
            </p>
          </div>
        </div>

        {/* Comment bien débuter */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Comment bien débuter
        </h2>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 mb-8">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Apprenez les règles de base</strong>
                <p className="text-green-100">Commencez par le Texas Hold'em, la variante la plus populaire</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Jouez en argent fictif</strong>
                <p className="text-green-100">Pratiquez sans risque pour vous familiariser avec le jeu</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Étudiez la stratégie de base</strong>
                <p className="text-green-100">Suivez ce guide et lisez des livres de poker reconnus</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Commencez aux micro-limites</strong>
                <p className="text-green-100">Jouez petit pour apprendre sans pression financière</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <strong>Analysez votre jeu</strong>
                <p className="text-green-100">Revoyez vos mains et identifiez vos erreurs</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Mythes sur le poker */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mythes et réalités
        </h2>
        <div className="space-y-4 mb-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ Mythe : "Le poker est un jeu de chance"</h3>
            <p className="text-gray-700">
              <strong>✓ Réalité :</strong> Sur une main, la chance joue un rôle. Sur des milliers de mains, 
              la compétence domine. Les meilleurs joueurs gagnent constamment.
            </p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ Mythe : "Il faut un visage de poker"</h3>
            <p className="text-gray-700">
              <strong>✓ Réalité :</strong> Le contrôle émotionnel est important, mais la stratégie 
              mathématique et la compréhension des ranges sont bien plus cruciales.
            </p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ Mythe : "Les pros bluffent tout le temps"</h3>
            <p className="text-gray-700">
              <strong>✓ Réalité :</strong> Les professionnels bluffent avec parcimonie et stratégie. 
              La majorité de leurs gains vient de la value bet avec de bonnes mains.
            </p>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            ♠️ Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le poker est un jeu de compétence où la stratégie bat la chance sur le long terme
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Maîtriser le poker développe des compétences utiles dans la vie quotidienne
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Commencez petit, apprenez constamment et soyez patient dans votre progression
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                La discipline et le contrôle émotionnel sont aussi importants que la technique
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le poker moderne est un jeu sophistiqué qui récompense l'étude et l'analyse
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Accueil du Guide
          </Link>
          <Link 
            href="/guide-poker/regles-base"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Règles et Variantes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}