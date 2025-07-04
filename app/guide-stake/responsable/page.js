// app/guide-stake/responsable/page.js
export default function JeuResponsable() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">🛡️ Jeu Responsable</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Le jeu doit rester un divertissement. Découvrez les outils et ressources 
          pour garder le contrôle et jouer de manière responsable.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-red-800">
                <strong>Important :</strong> Si vous pensez avoir un problème avec le jeu, 
                n'hésitez pas à demander de l'aide. Des ressources sont disponibles.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Principes du jeu responsable</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">✅ Bonnes pratiques</h3>
            <ul className="space-y-2 text-sm">
              <li>• Fixez-vous un budget avant de jouer</li>
              <li>• Ne jouez jamais sous l'influence</li>
              <li>• Prenez des pauses régulières</li>
              <li>• Ne poursuivez pas vos pertes</li>
              <li>• Gardez le jeu comme loisir</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">⚠️ Signaux d'alerte</h3>
            <ul className="space-y-2 text-sm">
              <li>• Jouer plus que prévu</li>
              <li>• Emprunter pour jouer</li>
              <li>• Négliger ses responsabilités</li>
              <li>• Mentir sur ses habitudes de jeu</li>
              <li>• Jouer pour fuir ses problèmes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Outils de contrôle disponibles sur Stake</h2>
        
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">💰 Limites de dépôt</h3>
            <p className="text-sm text-gray-600 mb-2">
              Définissez des limites quotidiennes, hebdomadaires ou mensuelles pour vos dépôts.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Limites de dépôt
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">⏱️ Limites de temps</h3>
            <p className="text-sm text-gray-600 mb-2">
              Fixez une durée maximale de session pour éviter de jouer trop longtemps.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Limites de session
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">🚫 Limites de perte</h3>
            <p className="text-sm text-gray-600 mb-2">
              Établissez un montant maximum de pertes acceptables par période.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Limites de perte
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">🔒 Auto-exclusion</h3>
            <p className="text-sm text-gray-600 mb-2">
              Bloquez temporairement ou définitivement votre accès au site.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Auto-exclusion
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Test d'auto-évaluation</h2>
        <p className="mb-4">
          Répondez honnêtement à ces questions pour évaluer votre relation avec le jeu :
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ol className="space-y-3">
            <li>1. Avez-vous déjà manqué le travail ou l'école à cause du jeu ?</li>
            <li>2. Le jeu a-t-il causé des problèmes dans votre vie familiale ?</li>
            <li>3. Le jeu affecte-t-il votre réputation ?</li>
            <li>4. Avez-vous ressenti des remords après avoir joué ?</li>
            <li>5. Jouez-vous pour obtenir de l'argent pour rembourser des dettes ?</li>
            <li>6. Le jeu cause-t-il une baisse de votre ambition ?</li>
            <li>7. Après une perte, ressentez-vous le besoin de rejouer rapidement ?</li>
            <li>8. Après un gain, avez-vous une forte envie de continuer ?</li>
            <li>9. Jouez-vous souvent jusqu'à votre dernier euro ?</li>
            <li>10. Avez-vous déjà emprunté pour financer votre jeu ?</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Si vous avez répondu OUI à plusieurs questions, 
            il est recommandé de chercher de l'aide.</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conseils pour un jeu sain</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Avant de jouer</h3>
            <ul className="text-sm space-y-1">
              <li>• Fixez un budget</li>
              <li>• Définissez un temps limite</li>
              <li>• Jouez reposé et serein</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Pendant le jeu</h3>
            <ul className="text-sm space-y-1">
              <li>• Faites des pauses</li>
              <li>• Surveillez le temps</li>
              <li>• Respectez vos limites</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Après le jeu</h3>
            <ul className="text-sm space-y-1">
              <li>• Acceptez les résultats</li>
              <li>• Ne rejouez pas immédiatement</li>
              <li>• Évaluez votre session</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Ressources d'aide</h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-blue-800 mb-4">🆘 Organismes de soutien</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Joueurs Anonymes France</h4>
              <p className="text-sm text-gray-600">Site : www.joueurs-anonymes.org</p>
              <p className="text-sm text-gray-600">Réunions et soutien gratuit</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Adictel - Joueurs Info Service</h4>
              <p className="text-sm text-gray-600">Téléphone : 09 74 75 13 13 (appel non surtaxé)</p>
              <p className="text-sm text-gray-600">7j/7 de 8h à 2h</p>
            </div>
            
            <div>
              <h4 className="font-semibold">SOS Joueurs</h4>
              <p className="text-sm text-gray-600">Site : www.sosjoueurs.org</p>
              <p className="text-sm text-gray-600">Aide et accompagnement personnalisé</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Protection des mineurs</h2>
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <p className="text-red-800 font-semibold mb-2">
            ⛔ Le jeu est strictement interdit aux mineurs
          </p>
         rendered in the browser, and it should not affect the functionality or SEO of the page. However, to ensure consistency with the other pages and to add proper metadata for SEO, I will create a `layout.js` file to include the metadata.

---

### Fichiers corrigés

#### 1. `app/guide-stake/responsable/page.js`
- **Inchangé**, car aucune balise `<a>` n'est présente, et les métadonnées seront gérées dans `layout.js`. Le code reste identique à celui fourni, mais je le répète ici pour clarté :

```jsx
// app/guide-stake/responsable/page.js
export default function JeuResponsable() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">🛡️ Jeu Responsable</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Le jeu doit rester un divertissement. Découvrez les outils et ressources 
          pour garder le contrôle et jouer de manière responsable.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-red-800">
                <strong>Important :</strong> Si vous pensez avoir un problème avec le jeu, 
                n'hésitez pas à demander de l'aide. Des ressources sont disponibles.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Principes du jeu responsable</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">✅ Bonnes pratiques</h3>
            <ul className="space-y-2 text-sm">
              <li>• Fixez-vous un budget avant de jouer</li>
              <li>• Ne jouez jamais sous l'influence</li>
              <li>• Prenez des pauses régulières</li>
              <li>• Ne poursuivez pas vos pertes</li>
              <li>• Gardez le jeu comme loisir</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">⚠️ Signaux d'alerte</h3>
            <ul className="space-y-2 text-sm">
              <li>• Jouer plus que prévu</li>
              <li>• Emprunter pour jouer</li>
              <li>• Négliger ses responsabilités</li>
              <li>• Mentir sur ses habitudes de jeu</li>
              <li>• Jouer pour fuir ses problèmes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Outils de contrôle disponibles sur Stake</h2>
        
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">💰 Limites de dépôt</h3>
            <p className="text-sm text-gray-600 mb-2">
              Définissez des limites quotidiennes, hebdomadaires ou mensuelles pour vos dépôts.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Limites de dépôt
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">⏱️ Limites de temps</h3>
            <p className="text-sm text-gray-600 mb-2">
              Fixez une durée maximale de session pour éviter de jouer trop longtemps.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Limites de session
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">🚫 Limites de perte</h3>
            <p className="text-sm text-gray-600 mb-2">
              Établissez un montant maximum de pertes acceptables par période.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Limites de perte
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold mb-2">🔒 Auto-exclusion</h3>
            <p className="text-sm text-gray-600 mb-2">
              Bloquez temporairement ou définitivement votre accès au site.
            </p>
            <p className="text-sm text-blue-600">
              Paramètres → Jeu responsable → Auto-exclusion
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Test d'auto-évaluation</h2>
        <p className="mb-4">
          Répondez honnêtement à ces questions pour évaluer votre relation avec le jeu :
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ol className="space-y-3">
            <li>1. Avez-vous déjà manqué le travail ou l'école à cause du jeu ?</li>
            <li>2. Le jeu a-t-il causé des problèmes dans votre vie familiale ?</li>
            <li>3. Le jeu affecte-t-il votre réputation ?</li>
            <li>4. Avez-vous ressenti des remords après avoir joué ?</li>
            <li>5. Jouez-vous pour obtenir de l'argent pour rembourser des dettes ?</li>
            <li>6. Le jeu cause-t-il une baisse de votre ambition ?</li>
            <li>7. Après une perte, ressentez-vous le besoin de rejouer rapidement ?</li>
            <li>8. Après un gain, avez-vous une forte envie de continuer ?</li>
            <li>9. Jouez-vous souvent jusqu'à votre dernier euro ?</li>
            <li>10. Avez-vous déjà emprunté pour financer votre jeu ?</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Si vous avez répondu OUI à plusieurs questions, 
            il est recommandé de chercher de l'aide.</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conseils pour un jeu sain</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Avant de jouer</h3>
            <ul className="text-sm space-y-1">
              <li>• Fixez un budget</li>
              <li>• Définissez un temps limite</li>
              <li>• Jouez reposé et serein</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Pendant le jeu</h3>
            <ul className="text-sm space-y-1">
              <li>• Faites des pauses</li>
              <li>• Surveillez le temps</li>
              <li>• Respectez vos limites</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Après le jeu</h3>
            <ul className="text-sm space-y-1">
              <li>• Acceptez les résultats</li>
              <li>• Ne rejouez pas immédiatement</li>
              <li>• Évaluez votre session</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Ressources d'aide</h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-blue-800 mb-4">🆘 Organismes de soutien</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Joueurs Anonymes France</h4>
              <p className="text-sm text-gray-600">Site : www.joueurs-anonymes.org</p>
              <p className="text-sm text-gray-600">Réunions et soutien gratuit</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Adictel - Joueurs Info Service</h4>
              <p className="text-sm text-gray-600">Téléphone : 09 74 75 13 13 (appel non surtaxé)</p>
              <p className="text-sm text-gray-600">7j/7 de 8h à 2h</p>
            </div>
            
            <div>
              <h4 className="font-semibold">SOS Joueurs</h4>
              <p className="text-sm text-gray-600">Site : www.sosjoueurs.org</p>
              <p className="text-sm text-gray-600">Aide et accompagnement personnalisé</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Protection des mineurs</h2>
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <p className="text-red-800 font-semibold mb-2">
            ⛔ Le jeu est strictement interdit aux mineurs
          </p>
          <ul className="space-y-2 text-sm text-red-700">
            <li>• Stake vérifie l'âge lors de l'inscription</li>
            <li>• Ne partagez jamais vos identifiants</li>
            <li>• Utilisez le contrôle parental si nécessaire</li>
            <li>• Signalez tout compte suspect de mineur</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">💚 Jouez pour le plaisir</h3>
          <p className="text-green-700 mb-4">
            Le jeu doit rester un divertissement. Fixez vos limites, respectez-les, 
            et n'hésitez jamais à demander de l'aide si vous en ressentez le besoin.
          </p>
          <p className="text-green-700">
            <strong>Rappelez-vous :</strong> La maison a toujours un avantage mathématique. 
            Ne jouez que ce que vous pouvez vous permettre de perdre.
          </p>
        </div>
      </div>
    </div>
  );
}