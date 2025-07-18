// app/guide-poker/tells-psychologie/page.js
import Link from 'next/link';

export default function TellsPsychologiePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-poker" className="text-green-600 hover:text-green-700">
          Guide Poker
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Tells et Psychologie</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        🧠 Tells et Psychologie
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          Le poker est autant un jeu mental qu'un jeu de cartes. Savoir lire ses adversaires, 
          contrôler ses émotions et maintenir une image favorable sont des compétences cruciales. 
          Découvrez comment maîtriser l'aspect psychologique pour prendre l'ascendant sur vos opposants.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Les tells physiques */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            👁️ Les Tells Physiques (Live)
          </h2>
          
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Les tells physiques sont des indices involontaires que donnent les joueurs. 
              Attention : ils varient selon les individus et doivent être confirmés par l'observation.
            </p>
          </div>

          {/* Tells de force */}
          <div className="mb-6">
            <h3 className="font-bold text-green-700 mb-3">💪 Tells indiquant la FORCE</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Mains tremblantes</h4>
                <p className="text-xs text-gray-600">
                  Contrairement à l'intuition, les mains qui tremblent indiquent souvent 
                  une grosse main (montée d'adrénaline).
                </p>
              </div>
              
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Posture décontractée</h4>
                <p className="text-xs text-gray-600">
                  Un joueur qui se détend soudainement après avoir misé a souvent une main forte.
                </p>
              </div>
              
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Protection des cartes</h4>
                <p className="text-xs text-gray-600">
                  Placer un jeton ou protéger fortement ses cartes indique souvent 
                  l'intention de jouer jusqu'au bout.
                </p>
              </div>
              
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Regard direct maintenu</h4>
                <p className="text-xs text-gray-600">
                  Fixer l'adversaire après une grosse mise = souvent fort (défi).
                </p>
              </div>
            </div>
          </div>

          {/* Tells de faiblesse */}
          <div>
            <h3 className="font-bold text-red-700 mb-3">📉 Tells indiquant la FAIBLESSE</h3>
            <div className="space-y-3">
              <div className="bg-red-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Discours excessif</h4>
                <p className="text-xs text-gray-600">
                  Parler beaucoup, justifier ses actions = souvent bluff. 
                  "Je sais que tu as rien" = il a peur que vous ayez quelque chose.
                </p>
              </div>
              
              <div className="bg-red-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Rigidité corporelle</h4>
                <p className="text-xs text-gray-600">
                  Un joueur qui se fige et retient sa respiration bluffe souvent.
                </p>
              </div>
              
              <div className="bg-red-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Regard fuyant</h4>
                <p className="text-xs text-gray-600">
                  Éviter le contact visuel après une grosse mise = souvent faible.
                </p>
              </div>
              
              <div className="bg-red-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Hollywood acting</h4>
                <p className="text-xs text-gray-600">
                  Surjouer la réflexion, soupirer théâtralement = souvent l'inverse de ce qui est montré.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Les tells comportementaux */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            🎭 Tells Comportementaux (Live & Online)
          </h2>
          
          <div className="bg-purple-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Les patterns de comportement sont plus fiables que les tells physiques isolés. 
              Ils s'appliquent aussi online via le timing et les sizings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">⏱️ Timing Tells</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Instant call :</strong>
                  <span className="text-xs block text-gray-600">Tirage ou main moyenne</span>
                </li>
                <li>
                  <strong>Instant bet/raise :</strong>
                  <span className="text-xs block text-gray-600">Souvent très fort ou bluff planifié</span>
                </li>
                <li>
                  <strong>Long tank → call :</strong>
                  <span className="text-xs block text-gray-600">Main marginale, hésite à fold</span>
                </li>
                <li>
                  <strong>Long tank → raise :</strong>
                  <span className="text-xs block text-gray-600">Souvent value, calcule le sizing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-purple-200 rounded p-4">
              <h3 className="font-semibold text-purple-700 mb-2">💰 Sizing Tells</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Overbet river :</strong>
                  <span className="text-xs block text-gray-600">Polarisé - nuts ou bluff</span>
                </li>
                <li>
                  <strong>Min-raise :</strong>
                  <span className="text-xs block text-gray-600">Souvent faible ou draw</span>
                </li>
                <li>
                  <strong>Sizing irrégulier :</strong>
                  <span className="text-xs block text-gray-600">Inconfortable, main marginale</span>
                </li>
                <li>
                  <strong>Gros 3-bet :</strong>
                  <span className="text-xs block text-gray-600">Veut pas voir de flop = souvent AK/QQ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contrôle émotionnel */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎯 Contrôle Émotionnel
          </h2>
          
          <div className="bg-green-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Votre plus grand adversaire au poker, c'est vous-même. Maîtriser ses émotions 
              est la clé pour jouer son A-game constamment.
            </p>
          </div>

          {/* Les émotions destructrices */}
          <div className="mb-6">
            <h3 className="font-bold text-red-700 mb-3">😤 Émotions à Contrôler</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded p-4">
                <h4 className="font-semibold mb-2">Colère (Tilt)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Bad beat, cooler, adversaire irritant
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Solution :</strong> Pause immédiate, respiration profonde, 
                  accepter la variance.
                </p>
              </div>
              
              <div className="bg-red-50 rounded p-4">
                <h4 className="font-semibold mb-2">Frustration</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Card dead, manquer ses tirages
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Solution :</strong> Focus sur le processus, pas les résultats. 
                  Chaque main est indépendante.
                </p>
              </div>
              
              <div className="bg-red-50 rounded p-4">
                <h4 className="font-semibold mb-2">Euphorie (Winner's Tilt)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Grosse session win, overconfidence
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Solution :</strong> Rester humble, respecter sa stratégie, 
                  ne pas monter de limite impulsivement.
                </p>
              </div>
              
              <div className="bg-red-50 rounded p-4">
                <h4 className="font-semibold mb-2">Peur (Scared Money)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Jouer au-dessus de ses moyens
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Solution :</strong> Descendre de limite, respecter sa bankroll, 
                  jouer dans sa zone de confort.
                </p>
              </div>
            </div>
          </div>

          {/* Techniques de contrôle */}
          <div>
            <h3 className="font-bold text-green-700 mb-3">🧘 Techniques de Contrôle Mental</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Respiration 4-7-8</h4>
                <p className="text-xs text-gray-600">
                  Inspirer 4 sec, retenir 7 sec, expirer 8 sec. Calme instantané.
                </p>
              </div>
              
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Règle des 10 secondes</h4>
                <p className="text-xs text-gray-600">
                  Attendre 10 sec avant chaque décision importante. Évite les moves impulsifs.
                </p>
              </div>
              
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Visualisation positive</h4>
                <p className="text-xs text-gray-600">
                  Visualiser le jeu parfait, pas les bad beats. Programme le succès.
                </p>
              </div>
              
              <div className="bg-green-50 rounded p-3">
                <h4 className="font-semibold text-sm mb-1">Stop-loss mental</h4>
                <p className="text-xs text-gray-600">
                  Si tilt détecté → stop immédiat. Mieux vaut rater une session que détruire sa bankroll.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Le Tilt */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            🔥 Comprendre et Gérer le Tilt
          </h2>
          
          <div className="bg-white bg-opacity-20 rounded p-4 mb-4">
            <p>
              Le tilt est l'ennemi n°1 du joueur de poker. C'est un état émotionnel 
              qui vous fait dévier de votre stratégie optimale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Types de Tilt</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Tilt classique :</strong> Colère après bad beat</li>
                <li>• <strong>Tilt d'injustice :</strong> "Je méritais de gagner"</li>
                <li>• <strong>Revenge tilt :</strong> Vouloir récupérer contre un joueur</li>
                <li>• <strong>Entitlement tilt :</strong> "Je suis meilleur, je dois gagner"</li>
                <li>• <strong>Desperation tilt :</strong> Forcer pour casser un downswing</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h3 className="font-bold mb-3">Signes du Tilt</h3>
              <ul className="space-y-2 text-sm">
                <li>• Jouer plus de mains que d'habitude</li>
                <li>• Sizing erratiques</li>
                <li>• Décisions rapides sans réflexion</li>
                <li>• Envie de "montrer qui est le boss"</li>
                <li>• Ignorer sa bankroll management</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-white bg-opacity-10 rounded p-4">
            <p className="text-center font-semibold">
              "Le tilt commence quand les émotions prennent le contrôle. 
              Reconnaître les signes est la première étape pour le combattre."
            </p>
          </div>
        </div>

        {/* Image à la table */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            🎭 Gérer son Image
          </h2>
          
          <div className="bg-indigo-50 rounded p-4 mb-4">
            <p className="text-gray-700">
              Votre image à la table influence les décisions de vos adversaires. 
              Sachez la construire et l'exploiter.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">Construire une image tight</h3>
              <ul className="text-sm space-y-1">
                <li>• Montrer des mains fortes au début</li>
                <li>• Folder ostensiblement des mains marginales</li>
                <li>• Permet de bluffer plus tard</li>
                <li>• Crédibilité sur les gros pots</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">Exploiter une image loose</h3>
              <ul className="text-sm space-y-1">
                <li>• Value bet plus thin</li>
                <li>• Payé plus souvent avec les nuts</li>
                <li>• Difficile de bluffer</li>
                <li>• Adapter en conséquence</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-indigo-200 rounded p-4">
              <h3 className="font-semibold text-indigo-700 mb-2">Image équilibrée</h3>
              <ul className="text-sm space-y-1">
                <li>• Alterner show de bluffs et value</li>
                <li>• Rester imprévisible</li>
                <li>• Ajuster selon la table</li>
                <li>• Observer les réactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Profils psychologiques */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Profils Psychologiques des Adversaires
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-700 mb-3">🐠 Le Récréatif Émotionnel</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Joue pour le fun et l'adrénaline</li>
              <li>• Réagit fortement aux bad beats</li>
              <li>• Surjoue ses mains favorites</li>
              <li>• <strong>Exploit :</strong> Value bet large, éviter les bluffs</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-bold text-purple-700 mb-3">🤖 Le Reg Robotique</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Joue selon les stats</li>
              <li>• Peu d'ajustements</li>
              <li>• Prévisible dans ses patterns</li>
              <li>• <strong>Exploit :</strong> Dévier du GTO, exploiter ses leaks</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-700 mb-3">🦈 Le Pro Équilibré</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Contrôle émotionnel parfait</li>
              <li>• S'adapte constamment</li>
              <li>• Difficile à lire</li>
              <li>• <strong>Approche :</strong> Jouer solid, éviter les battles</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-red-700 mb-3">💣 Le Maniaque</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Aggression constante</li>
              <li>• Met la pression</li>
              <li>• Variance énorme</li>
              <li>• <strong>Exploit :</strong> Piéger avec les nuts, call down light</li>
            </ul>
          </div>
        </div>

        {/* Mental game avancé */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            🏆 Mental Game Avancé
          </h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-2">La Zone</h3>
              <p className="text-sm text-gray-700">
                État de performance optimale où tout semble facile. Concentration totale, 
                décisions intuitives justes. Cultivez cet état par la préparation et la routine.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Mindfulness au Poker</h3>
              <p className="text-sm text-gray-700">
                Rester présent, observer sans juger. Noter ses émotions sans les laisser 
                diriger. "Je ressens de la colère" plutôt que "Je suis en colère".
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Routine Pré-Session</h3>
              <p className="text-sm text-gray-700">
                Méditation 5 min, révision des ranges, objectifs de session. 
                Préparer le mental comme un athlète.
              </p>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="bg-gray-900 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            🧠 Points clés à retenir
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Les tells comportementaux (timing, sizing) sont plus fiables que les tells physiques
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Le contrôle émotionnel est plus important que le niveau technique
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Reconnaître le tilt est la première étape pour le combattre - ayez des stop-loss
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                Votre image à la table est un outil - construisez-la et exploitez-la
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 text-xl">✓</span>
              <span>
                <Link href="/guide-stake" className="underline hover:text-green-300">
                  Pratiquez sur Stake
                </Link> en observant vos réactions émotionnelles et en développant votre contrôle
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-poker/gestion-bankroll"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Gestion de Bankroll
          </Link>
          <Link 
            href="/guide-poker/bluff-technique"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            L'Art du Bluff
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}