'use client';

import { useState, useEffect, useRef } from 'react';

export default function SurebetCalculator() {
  const [outcomes, setOutcomes] = useState(2);
  const [surebetType, setSurebetType] = useState('1-2');
  const [currency, setCurrency] = useState('EUR');
  const [roundStakes, setRoundStakes] = useState(false);
  const [roundTo, setRoundTo] = useState(1);
  
  // État pour chaque ligne
  const [odds1, setOdds1] = useState('2.00');
  const [odds2, setOdds2] = useState('2.00');
  const [odds3, setOdds3] = useState('');
  
  const [stake1, setStake1] = useState('50');
  const [stake2, setStake2] = useState('50');
  const [stake3, setStake3] = useState('');
  
  const [commission1, setCommission1] = useState('0');
  const [commission2, setCommission2] = useState('0');
  const [commission3, setCommission3] = useState('0');

  const [totalStakeInput, setTotalStakeInput] = useState('100');
  
  // Timers pour le debounce
  const oddsTimer = useRef(null);
  const commissionTimer = useRef(null);
  const totalStakeTimer = useRef(null);
  const stakeTimer = useRef(null);

  const currencySymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£',
  };

  const symbol = currencySymbols[currency];

  // Types de paris disponibles
  const surebetTypes = [
    { value: '1-2', label: '1-2' },
    { value: '1-X-2', label: '1-X-2' },
    { value: '1X-2', label: '1X-2' },
    { value: 'H1-H2', label: 'H1() - H2()' },
    { value: 'O-U', label: 'Plus que - Moins que' },
  ];

  // Obtenir le label du bookmaker selon le type de pari et l'index
  const getBookmakerLabel = (index) => {
    if (surebetType === '1-X-2') {
      return ['1', 'X', '2'][index] || `Book ${index + 1}`;
    } else if (surebetType === '1X-2') {
      return ['1X', '2'][index] || `Book ${index + 1}`;
    } else if (surebetType === 'H1-H2') {
      return ['H1', 'H2'][index] || `Book ${index + 1}`;
    } else if (surebetType === 'O-U') {
      return ['Plus que', 'Moins que'][index] || `Book ${index + 1}`;
    } else {
      return ['1', '2'][index] || `Book ${index + 1}`;
    }
  };

  // Calculer les résultats
  const calculateResults = () => {
    const oddsArray = [parseFloat(odds1) || 0, parseFloat(odds2) || 0, parseFloat(odds3) || 0];
    const stakesArray = [parseFloat(stake1) || 0, parseFloat(stake2) || 0, parseFloat(stake3) || 0];
    const commissionsArray = [parseFloat(commission1) || 0, parseFloat(commission2) || 0, parseFloat(commission3) || 0];

    let totalStake = 0;
    let impliedProbSum = 0;
    const results = [];

    // Calculer le total des mises actuelles
    for (let i = 0; i < outcomes; i++) {
      totalStake += stakesArray[i];
    }

    for (let i = 0; i < outcomes; i++) {
      const odd = oddsArray[i];
      const stake = stakesArray[i];
      const commission = commissionsArray[i];

      let adjustedOdd = odd;
      if (odd > 1 && commission !== 0) {
        if (commission < 0) {
          adjustedOdd = odd / (1 + Math.abs(commission) / 100);
        } else {
          adjustedOdd = odd * (1 - commission / 100);
        }
      }

      if (adjustedOdd > 1) {
        impliedProbSum += 1 / adjustedOdd;
      }

      const returnValue = stake * adjustedOdd;
      const profit = totalStake > 0 ? returnValue - totalStake : 0;

      results.push({
        odd,
        stake,
        adjustedOdd,
        return: returnValue,
        profit
      });
    }

    const isSurebet = impliedProbSum < 1 && impliedProbSum > 0;
    const profitPercent = impliedProbSum > 0 
      ? (isSurebet ? ((1 - impliedProbSum) * 100) : (-(impliedProbSum - 1) * 100))
      : 0;

    const validReturns = results.filter(r => r.return > 0).map(r => r.return);
    const minReturn = validReturns.length > 0 ? Math.min(...validReturns) : 0;
    const minProfit = totalStake > 0 ? minReturn - totalStake : 0;

    return {
      isValid: totalStake > 0 && results.some(r => r.odd > 1),
      isSurebet,
      profitPercent,
      totalStake,
      minReturn,
      minProfit,
      items: results
    };
  };

  // Redistribuer les mises
  const redistributeStakes = (newTotalStake) => {
    if (!newTotalStake || newTotalStake <= 0) return;

    const oddsArray = [parseFloat(odds1) || 0, parseFloat(odds2) || 0, parseFloat(odds3) || 0];
    const commissionsArray = [parseFloat(commission1) || 0, parseFloat(commission2) || 0, parseFloat(commission3) || 0];
    
    let sumInverseOdds = 0;
    const adjustedOdds = [];

    // Calculer la somme des inverses des cotes ajustées
    for (let i = 0; i < outcomes; i++) {
      const odd = oddsArray[i];
      const commission = commissionsArray[i];
      
      if (odd > 1) {
        let adjustedOdd = odd;
        if (commission !== 0) {
          if (commission < 0) {
            adjustedOdd = odd / (1 + Math.abs(commission) / 100);
          } else {
            adjustedOdd = odd * (1 - commission / 100);
          }
        }
        adjustedOdds[i] = adjustedOdd;
        sumInverseOdds += 1 / adjustedOdd;
      }
    }

    if (sumInverseOdds === 0) return;

    // Calculer les nouvelles mises avec la bonne formule
    if (outcomes >= 1 && adjustedOdds[0]) {
      let stake = newTotalStake * (1 / adjustedOdds[0]) / sumInverseOdds;
      if (roundStakes && roundTo > 0) {
        stake = Math.round(stake / roundTo) * roundTo;
      }
      setStake1(stake.toFixed(2));
    }

    if (outcomes >= 2 && adjustedOdds[1]) {
      let stake = newTotalStake * (1 / adjustedOdds[1]) / sumInverseOdds;
      if (roundStakes && roundTo > 0) {
        stake = Math.round(stake / roundTo) * roundTo;
      }
      setStake2(stake.toFixed(2));
    }

    if (outcomes >= 3 && adjustedOdds[2]) {
      let stake = newTotalStake * (1 / adjustedOdds[2]) / sumInverseOdds;
      if (roundStakes && roundTo > 0) {
        stake = Math.round(stake / roundTo) * roundTo;
      }
      setStake3(stake.toFixed(2));
    }
  };

  // Gérer les changements de cotes
  const handleOddsChange = (index, value) => {
    if (index === 0) setOdds1(value);
    else if (index === 1) setOdds2(value);
    else if (index === 2) setOdds3(value);

    // Annuler le timer précédent
    if (oddsTimer.current) {
      clearTimeout(oddsTimer.current);
    }

    // Redistribuer après un délai de 800ms
    oddsTimer.current = setTimeout(() => {
      // Utiliser la mise totale actuelle pour redistribuer
      const total = parseFloat(totalStakeInput) || 0;
      
      if (total > 0) {
        redistributeStakes(total);
      }
    }, 800);
  };

  // Gérer les changements de mises
  const handleStakeChange = (index, value) => {
    if (index === 0) setStake1(value);
    else if (index === 1) setStake2(value);
    else if (index === 2) setStake3(value);

    // Calculer et mettre à jour le total immédiatement
    const s1 = index === 0 ? parseFloat(value) || 0 : parseFloat(stake1) || 0;
    const s2 = index === 1 ? parseFloat(value) || 0 : parseFloat(stake2) || 0;
    const s3 = index === 2 ? parseFloat(value) || 0 : parseFloat(stake3) || 0;
    const total = s1 + s2 + (outcomes >= 3 ? s3 : 0);
    // Ne pas forcer le formatage pour laisser l'utilisateur taper librement
    if (document.activeElement?.id !== 'totalStake') {
      setTotalStakeInput(total > 0 ? total.toString() : '0');
    }
  };

  // Gérer les changements de commissions
  const handleCommissionChange = (index, value) => {
    if (index === 0) setCommission1(value);
    else if (index === 1) setCommission2(value);
    else if (index === 2) setCommission3(value);

    // Annuler le timer précédent
    if (commissionTimer.current) {
      clearTimeout(commissionTimer.current);
    }

    // Redistribuer après un délai de 800ms
    commissionTimer.current = setTimeout(() => {
      // Utiliser la mise totale actuelle pour redistribuer
      const total = parseFloat(totalStakeInput) || 0;
      
      if (total > 0) {
        redistributeStakes(total);
      }
    }, 800);
  };

  // Gérer le changement de mise totale
  const handleTotalStakeChange = (value) => {
    setTotalStakeInput(value);
    
    // Annuler le timer précédent
    if (totalStakeTimer.current) {
      clearTimeout(totalStakeTimer.current);
    }

    // Redistribuer après un délai de 500ms pour la mise totale
    totalStakeTimer.current = setTimeout(() => {
      const newTotal = parseFloat(value) || 0;
      if (newTotal > 0) {
        redistributeStakes(newTotal);
      }
    }, 500);
  };

  // Ajuster le nombre d'issues selon le type de pari
  useEffect(() => {
    switch(surebetType) {
      case '1-2':
      case 'H1-H2':
      case 'O-U':
        setOutcomes(2);
        setOdds3('');
        setStake3('');
        break;
      case '1-X-2':
      case '1X-2':
        setOutcomes(3);
        if (!odds3) setOdds3('3.00');
        break;
      default:
        setOutcomes(2);
    }
  }, [surebetType, odds3]);

  // Mettre à jour la mise totale quand les mises individuelles changent
  useEffect(() => {
    const s1 = parseFloat(stake1) || 0;
    const s2 = parseFloat(stake2) || 0;
    const s3 = parseFloat(stake3) || 0;
    const total = s1 + s2 + (outcomes >= 3 ? s3 : 0);
    setTotalStakeInput(total > 0 ? total.toString() : '0');
  }, [stake1, stake2, stake3, outcomes]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (oddsTimer.current) clearTimeout(oddsTimer.current);
      if (commissionTimer.current) clearTimeout(commissionTimer.current);
      if (totalStakeTimer.current) clearTimeout(totalStakeTimer.current);
      if (stakeTimer.current) clearTimeout(stakeTimer.current);
    };
  }, []);

  const results = calculateResults();
  
  const getOdds = (index) => index === 0 ? odds1 : index === 1 ? odds2 : odds3;
  const getStake = (index) => index === 0 ? stake1 : index === 1 ? stake2 : stake3;
  const getCommission = (index) => index === 0 ? commission1 : index === 1 ? commission2 : commission3;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header avec Statut intégré - version desktop et mobile */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="hidden sm:grid sm:grid-cols-3 sm:items-center">
            {/* Titre à gauche */}
            <div className="text-left">
              <h1 className="text-3xl font-bold text-indigo-900">Calculateur de Surebets</h1>
              <p className="text-lg text-indigo-900 font-medium">Rounders.pro</p>
            </div>
            
            {/* Statut au centre */}
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 mb-1">Statut</p>
              <p className={`text-base font-medium ${
                results.isSurebet ? 'text-green-600' : 'text-gray-600'
              }`}>
                {!results.isValid ? 'Entrez les cotes et mises pour calculer le surebet' :
                 results.isSurebet ? 'Surebet détecté ! Profit garanti.' : 
                 'Pas de surebet. Perte garantie.'}
              </p>
            </div>
            
            {/* Profit à droite */}
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Profit</p>
              <p className={`text-2xl font-bold ${
                results.isSurebet ? 'text-green-600' : 'text-gray-600'
              }`}>
                {results.isValid ? `${results.profitPercent.toFixed(2)}%` : '0.00%'}
              </p>
              {results.isValid && results.totalStake > 0 && (
                <p className="text-sm text-gray-600">
                  {results.minProfit.toFixed(2)} {symbol}
                </p>
              )}
            </div>
          </div>
          
          {/* Version mobile */}
          <div className="sm:hidden">
            <h1 className="text-2xl font-bold text-indigo-900 mb-2 text-center">Calculateur de Surebets</h1>
            <p className="text-xs text-center text-gray-500 mb-3">Rounders.pro</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Statut</p>
                <p className={`text-sm font-medium ${
                  results.isSurebet ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {!results.isValid ? 'Entrez les cotes' :
                   results.isSurebet ? 'Surebet détecté !' : 
                   'Pas de surebet.'}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-3 text-center">
                <p className="text-xs text-gray-600">Profit</p>
                <p className={`text-xl font-bold ${
                  results.isSurebet ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {results.isValid ? `${results.profitPercent.toFixed(2)}%` : '0.00%'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comment ça marche - Sur toute la largeur */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-semibold text-indigo-900 mb-2">Comment ça marche ?</h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Un surebet (pari d'arbitrage) est une opportunité de parier sur toutes les issues 
            d'un événement avec la garantie d'un profit, peu importe le résultat. Entrez les 
            cotes de différents bookmakers et la calculatrice déterminera si c'est un surebet 
            et comment répartir vos mises.
          </p>
        </div>

        {/* Settings Panel */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="surebetType" className="block text-sm font-medium text-gray-700 mb-2">
                Type de pari
              </label>
              <select
                id="surebetType"
                value={surebetType}
                onChange={(e) => setSurebetType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {surebetTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="totalStake" className="block text-sm font-medium text-gray-700 mb-2">
                Mise totale
              </label>
              <input
                id="totalStake"
                type="text"
                value={totalStakeInput}
                onChange={(e) => handleTotalStakeChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-right"
              />
            </div>

            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                Devise
              </label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="EUR">EUR €</option>
                <option value="USD">USD $</option>
                <option value="GBP">GBP £</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculator Table */}
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 mb-6 overflow-x-auto">
          <table className="w-full table-fixed min-w-[750px]">
            <colgroup>
              <col className="w-[130px]" />
              <col className="w-[120px]" />
              <col className="w-[130px]" />
              <col className="w-[120px]" />
              <col className="w-[120px]" />
              <col className="w-[120px]" />
            </colgroup>
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Résultat</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Cote</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Commission %</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Mise</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Retour</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Profit</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(outcomes)].map((_, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 font-medium text-sm sm:text-base">{getBookmakerLabel(index)}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="text"
                      placeholder="0.00"
                      value={getOdds(index)}
                      onChange={(e) => handleOddsChange(index, e.target.value)}
                      className="w-24 sm:w-28 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base text-right"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="text"
                      placeholder="0"
                      value={getCommission(index)}
                      onChange={(e) => handleCommissionChange(index, e.target.value)}
                      className="w-24 sm:w-28 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base text-right"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="text"
                      placeholder="0.00"
                      value={getStake(index)}
                      onChange={(e) => handleStakeChange(index, e.target.value)}
                      className="w-24 sm:w-28 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base text-right"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 font-medium text-sm sm:text-base">
                    {results.items[index]?.return > 0 ? `${results.items[index].return.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 font-medium text-sm sm:text-base ${
                    results.items[index]?.profit >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {results.items[index]?.profit !== 0 ? `${results.items[index].profit.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold">
                <td colSpan="3" className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">Total</td>
                <td className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">
                  {results.totalStake.toFixed(2)} {symbol}
                </td>
                <td className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">
                  {results.minReturn > 0 ? `${results.minReturn.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                </td>
                <td className={`px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base ${
                  results.minProfit >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {results.totalStake > 0 ? `${results.minProfit.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Options avancées */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">Options avancées</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="roundStakes"
                type="checkbox"
                checked={roundStakes}
                onChange={(e) => setRoundStakes(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="roundStakes" className="ml-2 text-xs sm:text-sm text-gray-700">
                Arrondir les mises à :
              </label>
              <input
                type="text"
                value={roundTo}
                onChange={(e) => setRoundTo(parseFloat(e.target.value) || 1)}
                disabled={!roundStakes}
                className="ml-2 w-20 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 text-right"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Commissions positives = réduction des gains | Commissions négatives = augmentation des cotes
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Modifier une mise individuelle redistribue automatiquement les autres mises
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}