// app/guide-stake/responsable/page.js
import Link from 'next/link';

export default function JeuResponsable() {
  return (
    <div className="pb-20 md:pb-0">
      <h1 className="text-4xl font-bold mb-8">Jeu Responsable</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Pourquoi jouer responsable ?</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Les jeux d’argent, comme ceux proposés sur Stake, comportent des risques financiers et psychologiques. Nous promouvons une approche responsable pour protéger nos joueurs.
          </p>
          <p>
            <strong>Risques des jeux d’argent :</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Endettement</li>
            <li>Dépendance</li>
            <li>Stress et isolement</li>
            <li>Impact sur la vie personnelle et professionnelle</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-yellow-800">⚠️ Avertissement</h2>
        <p className="text-yellow-700">
          <strong>Interdiction aux mineurs :</strong> Les jeux d’argent sont strictement interdits aux moins de 18 ans. Assurez-vous de respecter cette règle.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Conseils pour jouer responsable</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">1. Fixez un budget</h3>
            <p className="text-gray-600">
              Ne jouez qu’avec de l’argent que vous pouvez vous permettre de perdre. Établissez un budget mensuel et respectez-le.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">2. Limitez votre temps</h3>
            <p className="text-gray-600">
              Fixez des limites de temps pour vos sessions de jeu. Évitez de jouer trop longtemps.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">3. Ne courez pas après les pertes</h3>
            <p className="text-gray-600">
              Acceptez que perdre fait partie du jeu. Ne tentez pas de récupérer vos pertes en misant davantage.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">4. Restez lucide</h3>
            <p className="text-gray-600">
              Ne jouez pas sous l’influence de l’alcool ou de substances. Prenez des décisions rationnelles.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">5. Faites des pauses</h3>
            <p className="text-gray-600">
              Prenez des pauses régulières pour garder le contrôle et éviter l’addiction.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Outils de jeu responsable sur Stake</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold mb-2">Limites de dépôt</h3>
            <p>
              Définissez des limites quotidiennes, hebdomadaires ou mensuelles dans les paramètres de votre compte Stake.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Auto-exclusion</h3>
            <p>
              Vous pouvez vous auto-exclure temporairement ou définitivement via le support Stake.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Vérification de l’âge</h3>
            <p>
              Stake exige une vérification d’identité pour empêcher les mineurs de jouer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Support client</h3>
            <p>
              Contactez le support Stake via le chat en direct pour toute question ou assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-blue-800 mb-4">🆘 Organismes de soutien</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Joueurs Anonymes France</h4>
            <p className="text-sm text-gray-600">
              Site :{' '}
              <Link
                href="https://www.joueurs-anonymes.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.joueurs-anonymes.org
              </Link>
            </p>
            <p className="text-sm text-gray-600">Réunions et soutien gratuit</p>
          </div>
          
          <div>
            <h4 className="font-semibold">Adictel - Joueurs Info Service</h4>
            <p className="text-sm text-gray-600">
              Téléphone :{' '}
              <Link href="tel:+33974751313" className="text-blue-600 hover:underline">
                09 74 75 13 13
              </Link>{' '}
              (appel non surtaxé)
            </p>
            <p className="text-sm text-gray-600">7j/7 de 8h à 2h</p>
          </div>
          
          <div>
            <h4 className="font-semibold">SOS Joueurs</h4>
            <p className="text-sm text-gray-600">
              Site :{' '}
              <Link
                href="https://www.sosjoueurs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.sosjoueurs.org
              </Link>
            </p>
            <p className="text-sm text-gray-600">Aide et accompagnement personnalisé</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-6">
        <h2 className="text-xl font-semibold mb-4 text-red-800">Besoin d’aide immédiate ?</h2>
        <p className="text-red-700">
          Si vous pensez avoir un problème avec le jeu, contactez immédiatement un professionnel ou l’un des organismes ci-dessus.
        </p>
      </div>
    </div>
  );
}