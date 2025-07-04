export const metadata = {
  title: 'Interface Stake - Navigation et fonctionnalités | Guide complet',
  description: 'Maîtrisez l\'interface de Stake : navigation, sections, paramètres. Guide visuel pour bien débuter sur la plateforme.',
  keywords: 'interface stake, navigation stake, stake tutoriel',
};

export default function Interface() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">🎮 Interface & Navigation Stake</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Maîtrisez l&apos;interface de Stake pour une expérience de jeu optimale. 
          Découvrez toutes les fonctionnalités et personnalisations disponibles.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Vue d&apos;ensemble de l&apos;interface</h2>
        <p className="mb-6">
          L&apos;interface de Stake est conçue pour être intuitive et personnalisable, 
          permettant à chaque joueur d&apos;adapter son expérience selon ses préférences.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold mb-4">🎯 Zones principales de l&apos;interface</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Barre de navigation supérieure</h4>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                <li>• Logo Stake (retour à l&apos;accueil)</li>
                <li>• Casino / Sports / Promotions</li>
                <li>• Barre de recherche</li>
                <li>• Wallet (solde et transactions)</li>
                <li>• Profil utilisateur</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Menu latéral gauche</h4>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                <li>• Catégories de jeux</li>
                <li>• Jeux favoris</li>
                <li>• Jeux récents</li>
                <li>• Filtres et tri</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Zone centrale</h4>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                <li>• Jeux en vedette</li>
                <li>• Grille de jeux</li>
                <li>• Promotions actives</li>
                <li>• Jackpots progressifs</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Chat et social</h4>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                <li>• Chat global</li>
                <li>• Chat VIP (selon niveau)</li>
                <li>• Notifications de gains</li>
                <li>• Amis en ligne</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Navigation efficace</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">🎰 Section Casino</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Slots :</strong> Machines à sous</li>
              <li>• <strong>Live Casino :</strong> Jeux avec croupiers</li>
              <li>• <strong>Table Games :</strong> Blackjack, Roulette</li>
              <li>• <strong>Game Shows :</strong> Jeux télévisés</li>
              <li>• <strong>Stake Originals :</strong> Jeux exclusifs</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-green-800 mb-3">⚽ Section Sports</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Live :</strong> Paris en direct</li>
              <li>• <strong>Upcoming :</strong> Matchs à venir</li>
              <li>• <strong>My Bets :</strong> Vos paris actifs</li>
              <li>• <strong>Bet Builder :</strong> Paris combinés</li>
              <li>• <strong>Statistics :</strong> Stats détaillées</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Personnalisation de l&apos;interface</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-yellow-800 mb-3">⚙️ Options de personnalisation</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Thème visuel</h4>
              <p className="text-sm text-gray-600">Mode clair / Mode sombre (dans Paramètres)</p>
            </div>
            <div>
              <h4 className="font-semibold">Langue</h4>
              <p className="text-sm text-gray-600">20+ langues disponibles incluant le français</p>
            </div>
            <div>
              <h4 className="font-semibold">Devise d&apos;affichage</h4>
              <p className="text-sm text-gray-600">EUR, USD, ou crypto de votre choix</p>
            </div>
            <div>
              <h4 className="font-semibold">Sons et animations</h4>
              <p className="text-sm text-gray-600">Activables/désactivables selon vos préférences</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Fonctionnalités clés</h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">🔍 Recherche avancée</h3>
            <p className="text-sm text-gray-600">
              Utilisez la barre de recherche pour trouver rapidement vos jeux favoris. 
              Recherchez par nom, fournisseur ou type de jeu.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">⭐ Système de favoris</h3>
            <p className="text-sm text-gray-600">
              Cliquez sur l&apos;étoile d&apos;un jeu pour l&apos;ajouter à vos favoris. 
              Retrouvez-les facilement dans le menu latéral.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">📊 Statistiques en temps réel</h3>
            <p className="text-sm text-gray-600">
              Consultez vos stats de jeu, historique des paris et performance globale 
              dans la section &quot;Statistics&quot;.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">🎯 Mode Autobet</h3>
            <p className="text-sm text-gray-600">
              Disponible sur de nombreux jeux pour automatiser vos sessions 
              avec des paramètres personnalisables.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Raccourcis utiles</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-bold mb-3">⌨️ Navigation rapide</h3>
          <ul className="space-y-2">
            <li>• <strong>Double-clic sur le solde :</strong> Convertir entre devises</li>
            <li>• <strong>Clic sur l&apos;avatar :</strong> Accès rapide au profil</li>
            <li>• <strong>Icône wallet :</strong> Dépôt/retrait rapide</li>
            <li>• <strong>Badge VIP :</strong> Voir vos avantages actuels</li>
            <li>• <strong>Cloche :</strong> Notifications et bonus disponibles</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Interface mobile</h2>
        <p className="mb-4">
          L&apos;application mobile Stake offre une expérience optimisée avec toutes 
          les fonctionnalités de la version desktop :
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-800 mb-2">📱 Avantages mobile</h3>
            <ul className="text-sm space-y-1">
              <li>• Navigation tactile intuitive</li>
              <li>• Mode portrait/paysage</li>
              <li>• Notifications push</li>
              <li>• Connexion biométrique</li>
            </ul>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 mb-2">💡 Astuces mobile</h3>
            <ul className="text-sm space-y-1">
              <li>• Swipe pour naviguer</li>
              <li>• Tap &amp; hold pour les favoris</li>
              <li>• Shake pour support</li>
              <li>• Gestes personnalisables</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">✅ Maîtrisez l&apos;interface = Jouez mieux</h3>
          <p className="text-green-700 mb-4">
            Une bonne connaissance de l&apos;interface vous permet de jouer plus efficacement, 
            de trouver rapidement vos jeux favoris et de ne manquer aucune opportunité de bonus !
          </p>
          <div className="flex gap-4">
            <a href="/guide-stake/jeux" className="text-green-600 underline">
              Découvrir les jeux →
            </a>
            <a href="/guide-stake/bonus" className="text-green-600 underline">
              Voir les bonus →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}