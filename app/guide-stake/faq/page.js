// app/guide-stake/faq/page.js
import Link from 'next/link';

export const metadata = {
  title: 'FAQ Stake - Questions Fréquentes et Réponses | Rounders Pro',
  description: 'Toutes les réponses aux questions fréquentes sur Stake : dépôts, retraits, bonus, VIP, problèmes techniques et plus.',
  keywords: 'stake faq, stake questions, stake aide, stake support, stake problèmes',
};

export default function GuideFAQPage() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ❓ Questions Fréquentes (FAQ)
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
        <p className="text-blue-900 font-semibold">
          📚 Retrouvez ici les réponses aux questions les plus posées
        </p>
        <p className="text-blue-800 mt-1">
          Cliquez sur une question pour voir la réponse détaillée
        </p>
      </div>

      {/* Compte et Inscription */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">👤</span> Compte et Inscription
        </h2>
        
        <div className="space-y-3">
          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Puis-je créer plusieurs comptes ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="text-red-600 font-semibold mb-2">❌ Non, c&apos;est strictement interdit.</p>
              <p>Un seul compte par personne est autorisé. Les multi-comptes peuvent entraîner :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Fermeture de tous les comptes</li>
                <li>Confiscation des fonds</li>
                <li>Bannissement permanent</li>
              </ul>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              J&apos;ai oublié mon mot de passe, que faire ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Pas de panique ! Voici la procédure :</p>
              <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
                <li>Cliquez sur &quot;Se connecter&quot;</li>
                <li>Cliquez sur &quot;Mot de passe oublié ?&quot;</li>
                <li>Entrez votre email d&apos;inscription</li>
                <li>Vérifiez vos emails (spam aussi)</li>
                <li>Cliquez sur le lien de réinitialisation</li>
                <li>Créez un nouveau mot de passe</li>
              </ol>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Puis-je changer mon nom d&apos;utilisateur ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Oui, mais avec des limitations :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>1 changement gratuit autorisé</li>
                <li>Changements suivants : frais de 10$</li>
                <li>Allez dans Paramètres → Profil</li>
                <li>Le nouveau nom doit être disponible</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* Dépôts et Retraits */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">💰</span> Dépôts et Retraits
        </h2>
        
        <div className="space-y-3">
          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Quel est le dépôt minimum ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Le dépôt minimum varie selon la crypto :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li><strong>Bitcoin (BTC) :</strong> 0.0001 BTC (~5$)</li>
                <li><strong>Ethereum (ETH) :</strong> 0.01 ETH (~25$)</li>
                <li><strong>USDT/USDC :</strong> 10$</li>
                <li><strong>Dogecoin :</strong> 50 DOGE</li>
                <li><strong>Litecoin :</strong> 0.01 LTC</li>
              </ul>
              <p className="mt-2 text-amber-700">💡 Conseil : Utilisez USDC sur Solana pour les frais les plus bas !</p>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Combien de temps prend un retrait ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="font-semibold text-green-600 mb-2">⚡ Les retraits sont instantanés !</p>
              <p>Processus typique :</p>
              <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
                <li>Demande de retrait : instantané</li>
                <li>Traitement Stake : 0-5 minutes</li>
                <li>Confirmations blockchain : 10-60 minutes selon la crypto</li>
              </ol>
              <p className="mt-2 text-sm text-gray-600">
                Note : Les gros montants (+10,000$) peuvent nécessiter une vérification manuelle.
              </p>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Y a-t-il des frais de retrait ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="font-semibold text-green-600 mb-2">✅ Stake ne prend AUCUN frais !</p>
              <p>Vous payez uniquement les frais de réseau blockchain :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li><strong>Bitcoin :</strong> ~2-10$ (variable)</li>
                <li><strong>Ethereum :</strong> ~5-50$ (selon congestion)</li>
                <li><strong>USDC (Solana) :</strong> ~0.01$</li>
                <li><strong>Litecoin :</strong> ~0.10$</li>
                <li><strong>TRX :</strong> ~1$</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* Bonus et VIP */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">🎁</span> Bonus et Programme VIP
        </h2>
        
        <div className="space-y-3">
          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Comment fonctionne le rakeback ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Le rakeback vous retourne une partie de l&apos;edge house :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Taux de base : <strong>10%</strong> de l&apos;edge</li>
                <li>Crédité <strong>instantanément</strong> après chaque pari</li>
                <li>Augmente avec votre niveau VIP</li>
                <li>Pas de wagering requirement</li>
              </ul>
              <p className="mt-2 bg-blue-50 p-2 rounded text-sm">
                <strong>Exemple :</strong> Pari de 100$ avec edge 2% = 0.20$ de rakeback instant
              </p>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              À partir de quel niveau ai-je le reload quotidien ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="font-semibold text-amber-600 mb-2">⚠️ À partir du niveau Platine I</p>
              <p>Progression des bonus quotidiens :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li><strong>Bronze → Or :</strong> Pas de reload quotidien</li>
                <li><strong>Platine I :</strong> Déblocage du reload</li>
                <li><strong>Platine II+ :</strong> Montants croissants</li>
                <li><strong>Diamant+ :</strong> Bonus très généreux</li>
              </ul>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Comment monter rapidement en VIP ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Conseils pour progresser efficacement :</p>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-sm">
                <li><strong>Volume régulier :</strong> Mieux vaut jouer régulièrement que tout d&apos;un coup</li>
                <li><strong>Jeux à faible edge :</strong> Dice, Blackjack (plus de volume pour même risque)</li>
                <li><strong>Profitez des promos :</strong> Les races augmentent votre volume</li>
                <li><strong>Réinvestissez les bonus :</strong> Utilisez vos bonus pour générer plus de wager</li>
              </ol>
              <p className="mt-2 text-amber-700">⚡ Rappel : 1000$ wagered ≈ 10$ de progression VIP</p>
            </div>
          </details>
        </div>
      </section>

      {/* Jeux et Paris */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">🎮</span> Jeux et Paris
        </h2>
        
        <div className="space-y-3">
          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Les jeux sont-ils truqués ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="font-semibold text-green-600 mb-2">✅ Non ! Voici pourquoi :</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                <li><strong>Licence officielle :</strong> Régulé par Curaçao eGaming</li>
                <li><strong>Provably Fair :</strong> Vérifiez chaque résultat vous-même</li>
                <li><strong>Providers certifiés :</strong> Pragmatic, Evolution, etc.</li>
                <li><strong>RTP publics :</strong> Transparence totale sur les taux</li>
                <li><strong>Réputation :</strong> 7+ ans sans scandale majeur</li>
              </ul>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              C&apos;est quoi le &quot;Provably Fair&quot; ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Système cryptographique garantissant l&apos;équité :</p>
              <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
                <li>Avant le pari : vous recevez un hash du résultat</li>
                <li>Vous placez votre pari</li>
                <li>Le résultat est révélé</li>
                <li>Vous pouvez vérifier que le résultat correspond au hash initial</li>
              </ol>
              <p className="mt-2 text-green-700">
                💚 Impossible pour Stake de tricher sans que vous puissiez le prouver !
              </p>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Quelle est la mise maximum ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Les limites varient selon les jeux :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li><strong>Stake Originals :</strong> Généralement 1 BTC max</li>
                <li><strong>Slots :</strong> 100-1000$ selon le jeu</li>
                <li><strong>Live Casino :</strong> Jusqu&apos;à 100,000$ sur tables VIP</li>
                <li><strong>Sports :</strong> Variable, souvent 10,000$+</li>
              </ul>
              <p className="mt-2 text-amber-700">
                💎 High rollers : contactez le support pour des limites personnalisées
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Problèmes Techniques */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">🔧</span> Problèmes Techniques
        </h2>
        
        <div className="space-y-3">
          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Le site ne se charge pas / Erreur de connexion
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="font-semibold mb-2">Solutions à essayer :</p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>VPN :</strong> Activez un VPN (Canada, Irlande, Singapour)</li>
                <li><strong>URL alternative :</strong> Essayez stake.bet au lieu de stake.com</li>
                <li><strong>Cache :</strong> Videz le cache du navigateur (Ctrl+Shift+Delete)</li>
                <li><strong>DNS :</strong> Utilisez DNS publics (8.8.8.8 ou 1.1.1.1)</li>
                <li><strong>Navigateur :</strong> Essayez un autre navigateur</li>
              </ol>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Mon dépôt n&apos;apparaît pas
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Pas de panique ! Vérifiez d&apos;abord :</p>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-sm">
                <li><strong>Bonne adresse :</strong> Vérifiez l&apos;adresse de dépôt</li>
                <li><strong>Bon réseau :</strong> ETH sur ETH, BNB sur BSC, etc.</li>
                <li><strong>Confirmations :</strong> Attendez 3-6 confirmations</li>
                <li><strong>Montant minimum :</strong> Respecté ?</li>
              </ol>
              <p className="mt-3 bg-amber-50 p-2 rounded text-sm">
                Si tout est correct, contactez le support avec le TX ID
              </p>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Erreur &quot;User not found&quot; à la connexion
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Causes possibles :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Mauvais email/username</li>
                <li>Compte créé sur stake.com au lieu de stake.bet (ou inverse)</li>
                <li>Espace avant/après l&apos;identifiant</li>
                <li>Majuscules/minuscules incorrectes</li>
              </ul>
              <p className="mt-2 text-blue-700">
                💡 Essayez avec votre email ET votre username
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Sécurité */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">🔒</span> Sécurité
        </h2>
        
        <div className="space-y-3">
          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Comment activer l&apos;authentification 2FA ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p>Processus d&apos;activation :</p>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-sm">
                <li>Téléchargez <strong>Google Authenticator</strong> ou <strong>Authy</strong></li>
                <li>Allez dans Paramètres → Sécurité</li>
                <li>Cliquez sur &quot;Activer 2FA&quot;</li>
                <li>Scannez le QR code avec l&apos;app</li>
                <li>Entrez le code à 6 chiffres</li>
                <li><strong className="text-red-600">IMPORTANT :</strong> Sauvegardez le code de récupération !</li>
              </ol>
            </div>
          </details>

          <details className="bg-white border rounded-lg p-4 hover:shadow-md transition">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Mon compte a été piraté, que faire ?
            </summary>
            <div className="mt-3 text-gray-700">
              <p className="font-semibold text-red-600 mb-2">🚨 Actions immédiates :</p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Contactez immédiatement le support live chat</li>
                <li>Changez votre mot de passe si possible</li>
                <li>Vérifiez l&apos;historique des sessions</li>
                <li>Activez le 2FA immédiatement</li>
                <li>Vérifiez vos adresses de retrait</li>
              </ol>
              <p className="mt-3">
                Support Stake : disponible 24/7 via le chat en bas à droite
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Contact Support */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">📞 Besoin d&apos;aide supplémentaire ?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-green-400 mb-2">Support Stake</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Chat en direct 24/7 (en bas à droite)</li>
              <li>• Email : support@stake.com</li>
              <li>• FAQ officielle sur le site</li>
              <li>• Forum communautaire</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-400 mb-2">Support Rounders Pro</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Email : rounders.pro@gmail.com</li>
              <li>• Twitter : @rounders_pro</li>
              <li>• Aide pour les bonus affiliés</li>
              <li>• Support en français</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link
          href="/guide-stake/astuces"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Astuces Pro
        </Link>
        <Link
          href="/guide-stake"
          className="text-blue-600 hover:underline font-medium"
        >
          Retour au sommaire →
        </Link>
      </div>
    </div>
  );
}