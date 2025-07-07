'use client';

import { useState, useEffect } from 'react';

export default function SurebetCalculator() {
  const [outcomes, setOutcomes] = useState(2);
  const [currency, setCurrency] = useState('USD');
  const [showCommission, setShowCommission] = useState(false);
  const [roundStakes, setRoundStakes] = useState(false);
  const [roundTo, setRoundTo] = useState(1);
  
  // Initialiser avec des valeurs par défaut comme surebet.com
  const [data, setData] = useState([
    { odds: '2.00', stake: '100.00', commission: 0 },
    { odds: '2.00', stake: '100.00', commission: 0 },
    { odds: '', stake: '', commission: 0 },
  ]);

  const currencySymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£',
  };

  const symbol = currencySymbols[currency];

  // Calculer les résultats
  const calculateResults = () => {
    let validData = true;
    let totalStake = 0;
    const parsedData = [];

    // Parser les données
    for (let i = 0; i < outcomes; i++) {
      const odd = parseFloat(data[i].odds) || 0;
      const stake = parseFloat(data[i].stake) || 0;
      const commission = showCommission ? (parseFloat(data[i].commission) || 0) : 0;

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

  // Mettre à jour les mises automatiquement quand on change une cote ou la mise totale
  const redistributeStakes = (newTotalStake, excludeIndex = -1) => {
    const validOdds = [];
    let sumInverseOdds = 0;

    // Calculer la somme des inverses des cotes
    for (let i = 0; i < outcomes; i++) {
      const odd = parseFloat(data[i].odds);
      if (odd > 1) {
        const adjustedOdd = showCommission && data[i].commission !== 0
          ? (data[i].commission < 0 ? odd / (1 + Math.abs(data[i].commission) / 100) : odd * (1 - data[i].commission / 100))
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

    // Redistribuer les mises si toutes les cotes sont valides
    const totalStake = newData.reduce((sum, item, i) => 
      i < outcomes ? sum + (parseFloat(item.stake) || 0) : sum, 0
    );
    if (totalStake > 0) {
      setTimeout(() => redistributeStakes(totalStake), 100);
    }
  };

  // Gérer le changement de mise
  const handleStakeChange = (index, value) => {
    const newData = [...data];
    newData[index].stake = value;
    setData(newData);
  };

  // Gérer le changement de commission
  const handleCommissionChange = (index, value) => {
    const newData = [...data];
    newData[index].commission = parseFloat(value) || 0;
    setData(newData);

    // Recalculer les mises
    const totalStake = newData.reduce((sum, item, i) => 
      i < outcomes ? sum + (parseFloat(item.stake) || 0) : sum, 0
    );
    if (totalStake > 0) {
      setTimeout(() => redistributeStakes(totalStake), 100);
    }
  };

  // Gérer le changement de mise totale
  const handleTotalStakeChange = (value) => {
    const newTotalStake = parseFloat(value) || 0;
    if (newTotalStake > 0) {
      redistributeStakes(newTotalStake);
    }
  };

  const results = calculateResults();

  // Ajuster les données quand on change le nombre d'issues
  useEffect(() => {
    if (outcomes === 2 && data[2].stake) {
      // Redistribuer la mise de la 3ème issue sur les 2 premières
      const stake3 = parseFloat(data[2].stake) || 0;
      if (stake3 > 0) {
        const newData = [...data];
        newData[0].stake = (parseFloat(newData[0].stake) || 0) + stake3 / 2;
        newData[1].stake = (parseFloat(newData[1].stake) || 0) + stake3 / 2;
        newData[2].stake = '';
        setData(newData);
      }
    }
  }, [outcomes]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header avec Statut intégré */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-indigo-900 mb-2">Calculateur de Surebets</h1>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Statut</p>
                <p className={`text-base font-medium ${
                  results.isSurebet ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {!results.isValid ? 'Entrez les cotes et mises pour calculer le surebet' :
                   results.isSurebet ? 'Surebet détecté ! Profit garanti.' : 
                   'Pas de surebet. Perte garantie.'}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg px-6 py-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Profit</p>
              <p className={`text-2xl font-bold ${
                results.isSurebet ? 'text-green-600' : 'text-gray-600'
              }`}>
                {results.isValid ? `${results.profitPercent.toFixed(2)}%` : '0.00%'}
              </p>
              {results.isValid && results.totalStake > 0 && (
                <p className="text-xs text-gray-600 mt-1">
                  {results.minProfit.toFixed(2)} {symbol}
                </p>
              )}
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
              <label htmlFor="outcomes" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de résultats
              </label>
              <select
                id="outcomes"
                value={outcomes}
                onChange={(e) => setOutcomes(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div>
              <label htmlFor="totalStake" className="block text-sm font-medium text-gray-700 mb-2">
                Mise totale
              </label>
              <input
                id="totalStake"
                type="number"
                value={results.totalStake.toFixed(2)}
                onChange={(e) => handleTotalStakeChange(e.target.value)}
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Bookmaker</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Cote</th>
                {showCommission && (
                  <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Commission %</th>
                )}
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Mise</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Retour</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Profit</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(outcomes)].map((_, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 font-medium text-sm sm:text-base">Book {index + 1}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="number"
                      step="0.01"
                      min="1.01"
                      placeholder="0.00"
                      value={data[index].odds}
                      onChange={(e) => handleOddsChange(index, e.target.value)}
                      className="w-20 sm:w-24 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    />
                  </td>
                  {showCommission && (
                    <td className="px-2 sm:px-4 py-3 sm:py-4">
                      <input
                        type="number"
                        step="0.1"
                        min="-10"
                        max="10"
                        placeholder="0"
                        value={data[index].commission}
                        onChange={(e) => handleCommissionChange(index, e.target.value)}
                        className="w-20 sm:w-24 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      />
                    </td>
                  )}
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={data[index].stake}
                      onChange={(e) => handleStakeChange(index, e.target.value)}
                      className="w-20 sm:w-24 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
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
                <td colSpan={showCommission ? 3 : 2} className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">Total</td>
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
                id="showCommission"
                type="checkbox"
                checked={showCommission}
                onChange={(e) => setShowCommission(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="showCommission" className="ml-2 text-xs sm:text-sm text-gray-700">
                Afficher les commissions dans le tableau
              </label>
            </div>

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
                type="number"
                value={roundTo}
                onChange={(e) => setRoundTo(parseFloat(e.target.value) || 1)}
                disabled={!roundStakes}
                min="0.01"
                step="0.01"
                className="ml-2 w-20 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
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