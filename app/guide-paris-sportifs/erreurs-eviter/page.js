// app/guide-paris-sportifs/erreurs-eviter/page.js
import Link from 'next/link';

export default function ErreursEviterPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <Link href="/guide-paris-sportifs" className="text-green-600 hover:text-green-700">
          Guide Paris Sportifs
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Erreurs à Éviter</span>
      </nav>

      {/* Titre principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ❌ Erreurs à Éviter
      </h1>

      {/* Chapeau */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700">
          90% des parieurs perdent de l'argent. Pourquoi ? Ils répètent les mêmes erreurs fatales. 
          Apprenez des échecs des autres pour éviter des années de pertes et de frustration. 
          Voici les pièges qui ruinent même les parieurs expérimentés.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="prose prose-lg max-w-none">
        
        {/* Erreur 1 : Parier avec ses émotions */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            1. 💔 Parier avec son Cœur, pas sa Tête
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Les symptômes :</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Toujours parier sur son équipe favorite</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Éviter de parier contre son équipe même si value</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Surestimer les chances de ses joueurs préférés</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Ignorer les stats qui contredisent nos préférences</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-100 rounded p-4 mb-4">
            <h4 className="font-bold text-red-800 mb-2">💰 Coût moyen :</h4>
            <p>-15% à -25% de ROI sur ces paris émotionnels</p>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ La solution :</h4>
            <ul className="text-sm space-y-1">
              <li>• Ne JAMAIS parier sur son équipe favorite</li>
              <li>• Ou alors, divisez votre mise habituelle par 5</li>
              <li>• Analysez comme si c'était Équipe A vs Équipe B</li>
              <li>• Si vous ne pouvez pas être objectif, passez votre tour</li>
            </ul>
          </div>
        </div>

        {/* Erreur 2 : Chasing losses */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            2. 🏃‍♂️ Chasing Losses (Courir après ses pertes)
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Le scénario classique :</h3>
            <ol className="space-y-2 text-sm">
              <li>1. Vous perdez 100€ sur un "pari sûr"</li>
              <li>2. Frustration → "Je dois me refaire !"</li>
              <li>3. Mise doublée sur le match suivant (200€)</li>
              <li>4. Nouvelle perte → Panique</li>
              <li>5. All-in sur une cote risquée</li>
              <li>6. Bankroll détruite en 3 heures</li>
            </ol>
          </div>

          <div className="bg-red-100 rounded p-4 mb-4">
            <h4 className="font-bold text-red-800 mb-2">🎯 Statistique effrayante :</h4>
            <p>80% des bankrolls détruites le sont en moins de 24h après une grosse perte</p>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ Le pare-feu :</h4>
            <ul className="text-sm space-y-1">
              <li>• Stop loss journalier : -5% de bankroll MAX</li>
              <li>• Après 3 paris perdus → STOP pour la journée</li>
              <li>• Mise suivante TOUJOURS identique ou inférieure</li>
              <li>• Cool-off period : 24h après grosse perte</li>
            </ul>
          </div>
        </div>

        {/* Erreur 3 : Mauvaise gestion bankroll */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            3. 💸 Gestion de Bankroll Catastrophique
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-red-600 mb-2">❌ Ce qu'ils font :</h4>
              <ul className="text-sm space-y-1">
                <li>• Mises aléatoires (10€, 200€, 50€...)</li>
                <li>• 20-50% de bankroll sur un pari</li>
                <li>• Augmenter après victoires</li>
                <li>• Pas de bankroll définie</li>
                <li>• Mélanger budget perso/paris</li>
              </ul>
            </div>
            <div className="bg-green-100 rounded p-4">
              <h4 className="font-bold text-green-800 mb-2">✅ Ce qu'il faut faire :</h4>
              <ul className="text-sm space-y-1">
                <li>• 1-3% max par pari</li>
                <li>• Bankroll séparée et fixe</li>
                <li>• Mises constantes en %</li>
                <li>• Ajustement mensuel seulement</li>
                <li>• Jamais l'argent du loyer !</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800">
              <strong>📊 Fait :</strong> Avec 55% de réussite, miser 10% par pari = 
              65% de chance de tout perdre sur 100 paris
            </p>
          </div>
        </div>

        {/* Erreur 4 : Parier sur tout */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            4. 🎲 Parier sur Tout et N'importe Quoi
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Le parieur "touche-à-tout" :</h3>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-red-100 rounded p-3">
                <strong>Matin :</strong>
                <p>Tennis WTA Thaïlande</p>
              </div>
              <div className="bg-red-100 rounded p-3">
                <strong>Midi :</strong>
                <p>Basket universitaire US</p>
              </div>
              <div className="bg-red-100 rounded p-3">
                <strong>Soir :</strong>
                <p>Hockey finlandais D2</p>
              </div>
            </div>
          </div>

          <div className="bg-red-100 rounded p-4 mb-4">
            <h4 className="font-bold text-red-800 mb-2">💀 Pourquoi c'est mortel :</h4>
            <ul className="text-sm space-y-1">
              <li>• Aucune expertise = paris au hasard</li>
              <li>• Impossible d'analyser correctement</li>
              <li>• Addiction au "action" vs profit</li>
              <li>• ROI négatif garanti</li>
            </ul>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ La spécialisation gagnante :</h4>
            <ul className="text-sm space-y-1">
              <li>• MAX 2-3 sports que vous suivez vraiment</li>
              <li>• 1-2 championnats principaux par sport</li>
              <li>• Devenir expert > Être partout</li>
              <li>• Quality over quantity TOUJOURS</li>
            </ul>
          </div>
        </div>

        {/* Erreur 5 : Ignorer la value */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            5. 🎯 Ignorer le Concept de Value
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Phrases typiques du perdant :</h3>
            <ul className="space-y-2 text-sm">
              <li>💬 "Barcelone ne peut pas perdre contre Getafe"</li>
              <li>💬 "Je prends le favori, c'est plus sûr"</li>
              <li>💬 "1.30 c'est de l'argent facile"</li>
              <li>💬 "Plus la cote est basse, moins c'est risqué"</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">La réalité mathématique :</h4>
            <p>Barcelone à 1.30 avec 75% de chances réelles = <span className="text-red-600 font-bold">-2.5% de value</span></p>
            <p>Getafe à 11.00 avec 10% de chances réelles = <span className="text-green-600 font-bold">+10% de value</span></p>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ Le mindset value :</h4>
            <p className="text-sm mb-2">
              "Je ne parie pas sur qui va gagner, je parie sur les erreurs de pricing des bookmakers"
            </p>
          </div>
        </div>

        {/* Erreur 6 : Accumulateurs fous */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            6. 🎰 Les Combinés de la Mort
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Le combiné typique du dimanche :</h3>
            <div className="bg-red-100 rounded p-3 text-sm">
              <p>PSG + Real + Bayern + Liverpool + Man City + Juventus</p>
              <p>Mise : 10€ → Gain potentiel : 450€</p>
              <p className="font-bold mt-2">Probabilité réelle : 2.8% 😵</p>
            </div>
          </div>

          <div className="bg-red-100 rounded p-4 mb-4">
            <h4 className="font-bold text-red-800 mb-2">📉 Les maths impitoyables :</h4>
            <table className="w-full text-sm">
              <tr className="border-b">
                <td>Nombre de sélections</td>
                <td className="text-right">Chances (si 70% chacune)</td>
              </tr>
              <tr className="border-b">
                <td>3</td>
                <td className="text-right">34.3%</td>
              </tr>
              <tr className="border-b">
                <td>5</td>
                <td className="text-right">16.8%</td>
              </tr>
              <tr className="border-b">
                <td>8</td>
                <td className="text-right">5.8%</td>
              </tr>
              <tr>
                <td>10</td>
                <td className="text-right text-red-600 font-bold">2.8%</td>
              </tr>
            </table>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ Utilisation intelligente :</h4>
            <ul className="text-sm space-y-1">
              <li>• MAX 2-3 sélections si vraie value</li>
              <li>• Réserver 5% bankroll max pour fun</li>
              <li>• Singles = 90% de vos paris</li>
              <li>• Combinés = loterie, pas stratégie</li>
            </ul>
          </div>
        </div>

        {/* Erreur 7 : Suivre les tipsters */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            7. 🐑 Suivre Aveuglément les Tipsters
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Red flags des mauvais tipsters :</h3>
            <ul className="space-y-2 text-sm">
              <li>🚩 "90% de réussite garanti !"</li>
              <li>🚩 Que des screenshots de tickets gagnants</li>
              <li>🚩 Pas d'historique vérifiable</li>
              <li>🚩 Changent de compte tous les 3 mois</li>
              <li>🚩 10+ pronos par jour</li>
              <li>🚩 Que des combinés à cote 15+</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-800">
              <strong>🎯 Réalité :</strong> 95% des tipsters sont perdants long terme. 
              Les 5% rentables ne promettent jamais la lune.
            </p>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ Si vous devez suivre :</h4>
            <ul className="text-sm space-y-1">
              <li>• Exigez 500+ pronos trackés publiquement</li>
              <li>• ROI réaliste : 3-8% max</li>
              <li>• Comprenez POURQUOI ils parient</li>
              <li>• Jamais plus de 20% de votre activité</li>
            </ul>
          </div>
        </div>

        {/* Erreur 8 : Négliger le tracking */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            8. 📊 Ne Pas Tracker ses Paris
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Le syndrome du "je gagne souvent" :</h3>
            <p className="text-sm mb-3">
              Demandez à n'importe quel parieur son bilan : "Je suis à peu près à l'équilibre, 
              peut-être un peu positif". La réalité après vérification : -23% de ROI.
            </p>
            
            <div className="bg-red-100 rounded p-3">
              <p className="text-red-800 font-semibold">
                Notre cerveau retient 3x plus les victoires que les défaites
              </p>
            </div>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ Tracking minimum vital :</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <ul className="space-y-1">
                <li>• Date et heure</li>
                <li>• Sport/Championnat</li>
                <li>• Sélection et type</li>
                <li>• Cote</li>
              </ul>
              <ul className="space-y-1">
                <li>• Mise</li>
                <li>• Résultat (W/L/V)</li>
                <li>• P&L</li>
                <li>• Bankroll running</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erreur 9 : Paris sous influence */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            9. 🍺 Parier Sous Influence
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Les moments dangereux :</h3>
            <ul className="space-y-2 text-sm">
              <li>🍻 Après quelques bières devant le match</li>
              <li>😤 En colère après une dispute</li>
              <li>😢 Déprimé ou stressé</li>
              <li>🎉 Euphorique après une grosse victoire</li>
              <li>😴 Fatigué à 3h du matin</li>
            </ul>
          </div>

          <div className="bg-red-100 rounded p-4 mb-4">
            <h4 className="font-bold text-red-800 mb-2">📊 Statistique choc :</h4>
            <p>Les paris placés après 23h ont un ROI moyen de -18%</p>
            <p>Les paris "alcoolisés" : -35% de ROI</p>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ Règles de protection :</h4>
            <ul className="text-sm space-y-1">
              <li>• Jamais de paris après 22h</li>
              <li>• Bloquez l'accès aux apps si nécessaire</li>
              <li>• État émotionnel neutre obligatoire</li>
              <li>• Si doute = pas de pari</li>
            </ul>
          </div>
        </div>

        {/* Erreur 10 : Croire aux martingales */}
        <div className="bg-red-50 rounded-lg shadow-lg p-6 mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            10. 🎲 Croire aux Systèmes Miracles
          </h2>
          
          <div className="bg-white rounded p-4 mb-4">
            <h3 className="font-bold mb-3">Les promesses des vendeurs de rêve :</h3>
            <ul className="space-y-2 text-sm">
              <li>💰 "Gagnez 500€/jour avec ma méthode"</li>
              <li>💰 "Système infaillible testé sur 10 ans"</li>
              <li>💰 "Les bookmakers détestent cette technique"</li>
              <li>💰 "Doublez votre bankroll chaque mois"</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">La vérité qui dérange :</h4>
            <p className="text-sm">
              Si quelqu'un avait vraiment un système pour gagner 500€/jour, 
              pourquoi le vendrait-il 47€ sur internet ?
            </p>
          </div>

          <div className="bg-green-100 rounded p-4">
            <h4 className="font-bold text-green-800 mb-2">✅ La seule vérité :</h4>
            <p className="text-sm">
              Value betting + Discipline + Gestion stricte + Patience = Seule formule gagnante
            </p>
          </div>
        </div>

        {/* Tableau récapitulatif */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Impact financier des erreurs
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Erreur</th>
                <th className="px-4 py-3 text-center">Fréquence</th>
                <th className="px-4 py-3 text-center">Impact ROI</th>
                <th className="px-4 py-3 text-center">Gravité</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Paris émotionnels</td>
                <td className="px-4 py-3 text-center">85%</td>
                <td className="px-4 py-3 text-center text-red-600">-20%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Chasing losses</td>
                <td className="px-4 py-3 text-center">70%</td>
                <td className="px-4 py-3 text-center text-red-600">-50%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Mauvaise bankroll</td>
                <td className="px-4 py-3 text-center">90%</td>
                <td className="px-4 py-3 text-center text-red-600">-30%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Parier sur tout</td>
                <td className="px-4 py-3 text-center">60%</td>
                <td className="px-4 py-3 text-center text-red-600">-15%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Ignorer la value</td>
                <td className="px-4 py-3 text-center">95%</td>
                <td className="px-4 py-3 text-center text-red-600">-25%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Combinés excessifs</td>
                <td className="px-4 py-3 text-center">75%</td>
                <td className="px-4 py-3 text-center text-red-600">-40%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Suivre tipsters</td>
                <td className="px-4 py-3 text-center">40%</td>
                <td className="px-4 py-3 text-center text-red-600">-20%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Pas de tracking</td>
                <td className="px-4 py-3 text-center">80%</td>
                <td className="px-4 py-3 text-center text-orange-600">-10%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Paris sous influence</td>
                <td className="px-4 py-3 text-center">30%</td>
                <td className="px-4 py-3 text-center text-red-600">-35%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Systèmes miracles</td>
                <td className="px-4 py-3 text-center">25%</td>
                <td className="px-4 py-3 text-center text-red-600">-100%</td>
                <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Plan d'action */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            🛡️ Votre Plan Anti-Erreurs
          </h2>
          
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <strong>Audit honnête</strong>
                <p className="text-gray-300">Identifiez vos 3 principales erreurs dans cette liste</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <strong>Une erreur à la fois</strong>
                <p className="text-gray-300">Concentrez-vous sur corriger UNE erreur pendant 30 jours</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <strong>Règles écrites</strong>
                <p className="text-gray-300">Affichez vos règles près de votre écran</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <strong>Accountability</strong>
                <p className="text-gray-300">Partagez vos règles avec quelqu'un de confiance</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <div>
                <strong>Review mensuelle</strong>
                <p className="text-gray-300">Analysez vos progrès et ajustez</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Citation finale */}
        <div className="bg-green-100 border-l-4 border-green-600 p-6">
          <p className="text-green-800 font-semibold text-lg italic">
            "Le succès aux paris sportifs ne vient pas de ce que vous faites bien, 
            mais de ce que vous arrêtez de faire mal."
          </p>
          <p className="text-green-600 text-sm mt-2">
            - Principe fondamental du parieur profitable
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/guide-paris-sportifs/optimisation"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Optimisation
          </Link>
          <Link 
            href="/guide-paris-sportifs/outils-pro"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Outils Pro
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}