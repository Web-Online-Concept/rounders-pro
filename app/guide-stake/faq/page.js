// app/guide-stake/faq/page.js
import Link from 'next/link';
import { AFFILIATE_LINK } from '../../config/affiliate';

export default function GuideFAQ() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">FAQ - Questions Fréquentes</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <p className="text-yellow-800">
          <strong>Note :</strong> Pour les questions spécifiques sur le fonctionnement de Stake, nous vous recommandons de consulter directement leur support via le chat en direct.
        </p>
      </div>

      <div className="space-y-8">
        {/* Bonus Rounders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Bonus Exclusifs Rounders</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Comment fonctionne le système de bonus Rounders ?</h3>
              <p className="text-gray-600 mb-2">
                Nous offrons des bonus cash à chaque niveau VIP atteint :
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Bronze : 10€</li>
                <li>Argent : 20€</li>
                <li>Or : 30€</li>
                <li>Platine I-III : 50€</li>
                <li>Platine IV-VI : 100€</li>
                <li>Diamant I-V : 200€</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Comment réclamer mon bonus Rounders ?</h3>
              <p className="text-gray-600">
                1. Prenez une capture d'écran de votre niveau VIP<br/>
                2. Allez sur notre <Link href="/affiliates" className="text-blue-600 hover:underline">Espace Affiliés</Link><br/>
                3. Remplissez le formulaire avec votre crypto préférée<br/>
                4. Recevez votre paiement sous 24-48h
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Dois-je être inscrit via votre lien ?</h3>
              <p className="text-gray-600">
                Oui, vous devez vous être inscrit sur Stake avec notre code affilié <strong>rounders</strong> via le lien :{' '}
                <Link href={AFFILIATE_LINK} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  stake.bet/?c=rounders&offer=rounders
                </Link>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Dans quelle crypto puis-je recevoir mon bonus ?</h3>
              <p className="text-gray-600">
                Vous pouvez choisir la crypto de votre choix parmi : BTC, ETH, USDT, USDC, BNB, SOL, DOGE, LTC, TRX, MATIC. Précisez le réseau si nécessaire (ex: USDC sur Solana).
              </p>
            </div>
          </div>
        </div>

        {/* Programme VIP Stake */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Programme VIP Stake</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Comment fonctionne le programme VIP ?</h3>
              <p className="text-gray-600">
                Le programme VIP de Stake fonctionne par points. Vous gagnez des points VIP en pariant. Les paris sportifs rapportent 3x plus de points que les jeux de casino. Consultez notre{' '}
                <Link href="/guide-stake/vip" className="text-blue-600 hover:underline">guide VIP complet</Link> pour plus de détails.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Qu'est-ce que le rakeback ?</h3>
              <p className="text-gray-600">
                Le rakeback est un pourcentage de vos mises qui vous est retourné. Il commence à 5% dès l'inscription avec notre code affilié et augmente avec votre niveau VIP.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Les bonus VIP sont-ils automatiques ?</h3>
              <p className="text-gray-600">
                Oui, les bonus hebdomadaires et mensuels de Stake sont automatiques. Nos bonus Rounders, eux, doivent être réclamés via notre Espace Affiliés.
              </p>
            </div>
          </div>
        </div>

        {/* France et VPN */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Jouer depuis la France</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Puis-je jouer depuis la France ?</h3>
              <p className="text-gray-600">
                Stake n'est pas accessible directement depuis la France. Un VPN est nécessaire pour l'inscription. Consultez notre{' '}
                <Link href="/guide-stake/france" className="text-blue-600 hover:underline">guide France complet</Link> pour la procédure détaillée.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Quel VPN recommandez-vous ?</h3>
              <p className="text-gray-600">
                Nous détaillons plusieurs options dans notre guide. L'important est de choisir un VPN fiable avec des serveurs dans les pays autorisés (Canada, Brésil, etc.).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Dois-je toujours utiliser le VPN ?</h3>
              <p className="text-gray-600">
                Le VPN est nécessaire uniquement pour l'inscription. Ensuite, vous pouvez accéder à Stake directement via stake.bet.
              </p>
            </div>
          </div>
        </div>

        {/* Cryptomonnaies */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Cryptomonnaies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Comment acheter des cryptos pour Stake ?</h3>
              <p className="text-gray-600">
                Consultez notre <Link href="/guide-stake/crypto" className="text-blue-600 hover:underline">guide crypto complet</Link>. Nous recommandons Coinbase avec notre lien partenaire pour des frais réduits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Quelle crypto recommandez-vous ?</h3>
              <p className="text-gray-600">
                Pour minimiser les frais, nous recommandons USDC sur le réseau Solana. C'est stable (1 USDC = 1$) et les frais sont quasi-nuls.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Y a-t-il des frais de transaction ?</h3>
              <p className="text-gray-600">
                Les frais dépendent de la crypto et du réseau choisis. Bitcoin et Ethereum ont des frais élevés. Solana, Tron et BSC ont des frais très bas.
              </p>
            </div>
          </div>
        </div>

        {/* Questions Générales Stake */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Questions sur Stake</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Comment contacter le support Stake ?</h3>
              <p className="text-gray-600">
                Utilisez le chat en direct disponible 24/7 en bas à droite sur le site Stake. Le support est réactif et disponible en plusieurs langues.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Puis-je changer mon nom d'utilisateur ?</h3>
              <p className="text-gray-600">
                Non, le changement de nom d'utilisateur n'est pas possible sur Stake une fois le compte créé.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Comment afficher les montants en euros ?</h3>
              <p className="text-gray-600">
                Dans les paramètres de votre compte Stake, vous pouvez choisir d'afficher les équivalents en EUR. Consultez notre{' '}
                <Link href="/guide-stake/astuces" className="text-blue-600 hover:underline">Astuces Pro</Link> pour plus de détails.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Pour d'autres questions sur Stake ?</h3>
              <p className="text-gray-600">
                Pour les questions spécifiques sur les dépôts, retraits, limites, KYC ou tout autre aspect technique de Stake, nous vous recommandons de contacter directement leur support via le chat en direct pour avoir les informations les plus à jour.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Rounders */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Une question sur Rounders ?</h2>
          <p className="mb-4">
            Pour toute question sur nos bonus exclusifs ou notre système d'affiliation :
          </p>
          <ul className="space-y-2">
            <li>📧 Email : rounders.pro@gmail.com</li>
            <li>
              🐦 Twitter :{' '}
              <Link href="https://twitter.com/rounders_pro" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                @rounders_pro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}