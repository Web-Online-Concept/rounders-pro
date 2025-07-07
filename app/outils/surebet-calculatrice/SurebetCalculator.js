'use client';

import { useState, useEffect } from 'react';

export default function SurebetCalculator() {
  const [outcomes, setOutcomes] = useState(2);
  const [surebetType, setSurebetType] = useState('1-2'); // Type de pari
  const [currency, setCurrency] = useState('USD');
  const [roundStakes, setRoundStakes] = useState(false);
  const [roundTo, setRoundTo] = useState(1);
  
  // Initialiser avec des valeurs par défaut comme surebet.com
  const [data, setData] = useState([
    { odds: '2.00', stake: '100.00', commission: '0' },
    { odds: '2.00', stake: '100.00', commission: '0' },
    { odds: '', stake: '', commission: '0' },
    { odds: '', stake: '', commission: '0' },
  ]);

  const [totalStakeInput, setTotalStakeInput] = useState('200.00');

  const currencySymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£',
  };

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

  // Types de paris disponibles
  const surebetTypes = [
    { value: '1-2', label: '1-2' },
    { value: '1-X-2', label: '1-X-2' },
    { value: '1X-2', label: '1X-2' },
    { value: 'H1-H2', label: 'H1() - H2()' },
    { value: 'O-U', label: 'Plus que - Moins que' },
  ];

  // Calculer les résultats
  const calculateResults = () => {
    let validData = true;
    let totalStake = 0;
    const parsedData = [];

    // Parser les données
    for (let i = 0; i < outcomes; i++) {
      const odd = parseFloat(data[i].odds) || 0;
      const stake = parseFloat(data[i].stake) || 0;
      const commission = parseFloat(data[i].commission) || 0;

      if (odd <= 1) {
        validData = false;
      }

      parsedData[i] = {
        odds: odd,
        stake: stake,
        commission: commission,
        adjustedOdds: commission !== 0 
          ? (commission < 0 ? odd / (1 + Math.abs(commission) / 100) : odd * (1 - commission / 100))
          : odd
      };

      totalStake += stake;
    }

    if (!validData || totalStake === 0) {
      return {
        isValid: false,
        totalStake: totalStake,
        items: parsedData.map(item => ({
          ...item,
          return: 0,
          profit: 0
        }))
      };
    }

    // Calculer les probabilités implicites
    let impliedProbSum = 0;
    for (let i = 0; i < outcomes; i++) {
      if (parsedData[i].adjustedOdds > 1) {
        impliedProbSum += 1 / parsedData[i].adjustedOdds;
      }
    }

    const isSurebet = impliedProbSum < 1 && impliedProbSum > 0;
    const profitPercent = impliedProbSum > 0 
      ? (isSurebet ? ((1 - impliedProbSum) * 100) : (-(impliedProbSum - 1) * 100))
      : 0;

    // Calculer retours et profits
    const results = parsedData.map(item => ({
      ...item,
      return: item.stake * item.adjustedOdds,
      profit: (item.stake * item.adjustedOdds) - totalStake
    }));

    const minReturn = Math.min(...results.map(r => r.return));
    const minProfit = Math.min(...results.map(r => r.profit));

    return {
      isValid: true,
      isSurebet,
      profitPercent,
      totalStake,
      minReturn,
      minProfit,
      items: results
    };
  };

  // Mettre à jour les mises automatiquement
  const redistributeStakes = (newTotalStake, excludeIndex = -1) => {
    const validOdds = [];
    let sumInverseOdds = 0;

    // Calculer la somme des inverses des cotes
    for (let i = 0; i < outcomes; i++) {
      const odd = parseFloat(data[i].odds);
      if (odd > 1) {
        const commission = parseFloat(data[i].commission) || 0;
        const adjustedOdd = commission !== 0
          ? (commission < 0 ? odd / (1 + Math.abs(commission) / 100) : odd * (1 - commission / 100))
          : odd;
        validOdds[i] = adjustedOdd;
        sumInverseOdds += 1 / adjustedOdd;
      }
    }

    if (sumInverseOdds === 0) return;

    // Redistribuer les mises
    const newData = [...data];
    for (let i = 0; i < outcomes; i++) {
      if (validOdds[i] && i !== excludeIndex) {
        let stake = (newTotalStake / sumInverseOdds) / validOdds[i];
        
        if (roundStakes && roundTo > 0) {
          stake = Math.round(stake / roundTo) * roundTo;
        }
        
        newData[i].stake = stake.toFixed(2);
      }
    }

    setData(newData);
  };

  // Gérer le changement de cote
  const handleOddsChange = (index, value) => {
    const newData = [...data];
    newData[index].odds = value;
    setData(newData);

    // Redistribuer les mises après un délai
    const totalStake = newData.reduce((sum, item, i) => 
      i < outcomes ? sum + (parseFloat(item.stake) || 0) : sum, 0
    );
    if (totalStake > 0 && value && parseFloat(value) > 1) {
      setTimeout(() => redistributeStakes(totalStake), 500);
    }
  };

  // Gérer le changement de mise
  const handleStakeChange = (index, value) => {
    const newData = [...data];
    newData[index].stake = value;
    setData(newData);

    // Mettre à jour le total
    const newTotal = newData.reduce((sum, item, i) => 
      i < outcomes ? sum + (parseFloat(item.stake) || 0) : sum, 0
    );
    setTotalStakeInput(newTotal > 0 ? newTotal.toFixed(2) : '');
  };

  // Gérer le changement de commission
  const handleCommissionChange = (index, value) => {
    const newData = [...data];
    newData[index].commission = value;
    setData(newData);

    // Recalculer les mises après un délai
    const totalStake = newData.reduce((sum, item, i) => 
      i < outcomes ? sum + (parseFloat(item.stake) || 0) : sum, 0
    );
    if (totalStake > 0) {
      setTimeout(() => redistributeStakes(totalStake), 500);
    }
  };

  // Gérer le changement de mise totale
  const handleTotalStakeChange = (value) => {
    setTotalStakeInput(value);
    const newTotalStake = parseFloat(value) || 0;
    if (newTotalStake > 0) {
      redistributeStakes(newTotalStake);
    }
  };

  const results = calculateResults();

  // Ajuster le nombre d'issues selon le type de pari
  useEffect(() => {
    switch(surebetType) {
      case '1-2':
      case 'H1-H2':
      case 'O-U':
        setOutcomes(2);
        break;
      case '1-X-2':
      case '1X-2':
        setOutcomes(3);
        break;
      default:
        setOutcomes(2);
    }
  }, [surebetType]);

  // Redistribuer les mises quand on change le nombre d'issues
  useEffect(() => {
    const currentTotal = data.reduce((sum, item, i) => 
      i < outcomes ? sum + (parseFloat(item.stake) || 0) : sum, 0
    );
    
    if (currentTotal > 0) {
      redistributeStakes(currentTotal);
    }
  }, [outcomes]);

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
                      value={data[index].odds}
                      onChange={(e) => handleOddsChange(index, e.target.value)}
                      className="w-24 sm:w-28 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base text-right"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="text"
                      placeholder="0"
                      value={data[index].commission}
                      onChange={(e) => handleCommissionChange(index, e.target.value)}
                      className="w-24 sm:w-28 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base text-right"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="text"
                      placeholder="0.00"
                      value={data[index].stake}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}