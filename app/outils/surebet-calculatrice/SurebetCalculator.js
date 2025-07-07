'use client';

import { useState, useEffect, useCallback } from 'react';

export default function SurebetCalculator() {
  const [outcomes, setOutcomes] = useState(2);
  const [totalStake, setTotalStake] = useState(100);
  const [currency, setCurrency] = useState('EUR');
  const [odds, setOdds] = useState([0, 0, 0]);
  const [commissions, setCommissions] = useState([0, 0, 0]);
  const [roundStakes, setRoundStakes] = useState(false);
  const [roundTo, setRoundTo] = useState(1);
  const [showCommission, setShowCommission] = useState(false);
  const [results, setResults] = useState(null);

  const currencySymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£',
  };

  const calculateAdjustedOdds = useCallback(() => {
    return odds.map((odd, i) => {
      if (i >= outcomes || !odd) return 0;
      
      if (showCommission && commissions[i] !== 0) {
        if (commissions[i] < 0) {
          return odd / (1 + Math.abs(commissions[i]) / 100);
        } else {
          return odd * (1 - commissions[i] / 100);
        }
      }
      return odd;
    });
  }, [odds, outcomes, showCommission, commissions]);

  const calculate = useCallback(() => {
    // Vérifier que toutes les cotes sont entrées
    let allOddsEntered = true;
    for (let i = 0; i < outcomes; i++) {
      if (!odds[i] || odds[i] <= 1) {
        allOddsEntered = false;
        break;
      }
    }

    if (!allOddsEntered || totalStake <= 0) {
      setResults(null);
      return;
    }

    // Calculer les cotes ajustées
    const adjustedOdds = calculateAdjustedOdds();

    // Calculer la somme des probabilités implicites
    let impliedProbSum = 0;
    for (let i = 0; i < outcomes; i++) {
      impliedProbSum += 1 / adjustedOdds[i];
    }

    // Vérifier si c'est un surebet
    const isSurebet = impliedProbSum < 1;
    const profitPercent = isSurebet 
      ? ((1 - impliedProbSum) * 100) 
      : (-(impliedProbSum - 1) * 100);

    // Calculer les mises optimales
    const stakes = [];
    let totalUsed = 0;

    for (let i = 0; i < outcomes; i++) {
      let stake = (totalStake / impliedProbSum) / adjustedOdds[i];
      
      if (roundStakes && roundTo > 0) {
        stake = Math.round(stake / roundTo) * roundTo;
      }
      
      stakes[i] = stake;
      totalUsed += stake;
    }

    // Ajuster pour que le total corresponde
    if (roundStakes && totalUsed !== totalStake) {
      const diff = totalStake - totalUsed;
      stakes[0] += diff;
    }

    // Calculer les retours et profits
    const returns = stakes.map((stake, i) => stake * adjustedOdds[i]);
    const profits = returns.map(ret => ret - totalStake);

    setResults({
      isSurebet,
      profitPercent,
      stakes,
      returns,
      profits,
      totalReturn: returns[0], // Même retour pour toutes les issues
      totalProfit: profits[0], // Même profit pour toutes les issues
    });
  }, [outcomes, odds, totalStake, calculateAdjustedOdds, roundStakes, roundTo]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  const handleOddsChange = (index, value) => {
    const newOdds = [...odds];
    newOdds[index] = parseFloat(value) || 0;
    setOdds(newOdds);
  };

  const handleCommissionChange = (index, value) => {
    const newCommissions = [...commissions];
    newCommissions[index] = parseFloat(value) || 0;
    setCommissions(newCommissions);
  };

  const symbol = currencySymbols[currency];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold text-indigo-900">Calculateur de Surebets Rounders</h1>
          <div className="bg-gray-50 rounded-lg px-6 py-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Profit</p>
            <p className={`text-2xl font-bold ${
              results?.isSurebet ? 'text-green-600' : 'text-gray-600'
            }`}>
              {results ? `${results.profitPercent.toFixed(2)}%` : '0.00%'}
            </p>
          </div>
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
                value={totalStake}
                onChange={(e) => setTotalStake(parseFloat(e.target.value) || 0)}
                min="1"
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
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Résultat</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Cote</th>
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
                      value={odds[index] || ''}
                      onChange={(e) => handleOddsChange(index, e.target.value)}
                      className="w-24 sm:w-32 px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 font-medium text-sm sm:text-base">
                    {results ? `${results.stakes[index].toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 font-medium text-sm sm:text-base">
                    {results ? `${results.returns[index].toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 sm:py-4 font-medium text-sm sm:text-base ${
                    results?.profits[index] >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {results ? `${results.profits[index].toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold">
                <td colSpan="2" className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">Total</td>
                <td className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">{totalStake.toFixed(2)} {symbol}</td>
                <td className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">
                  {results ? `${results.totalReturn.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                </td>
                <td className={`px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base ${
                  results?.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {results ? `${results.totalProfit.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Statut</h3>
            <p className={`text-lg font-medium ${
              results?.isSurebet ? 'text-green-600' : 'text-gray-600'
            }`}>
              {!results ? 'Entrez les cotes pour calculer' :
               results.isSurebet ? 'Surebet détecté ! Profit garanti.' : 
               'Pas de surebet. Perte garantie.'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Comment ça marche ?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Un surebet (pari d'arbitrage) est une opportunité de parier sur toutes les issues 
              d'un événement avec la garantie d'un profit, peu importe le résultat. Entrez les 
              cotes de différents bookmakers et la calculatrice déterminera si c'est un surebet 
              et comment répartir vos mises.
            </p>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
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
              <label htmlFor="roundStakes" className="ml-2 text-sm text-gray-700">
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

            <div className="flex items-center">
              <input
                id="showCommission"
                type="checkbox"
                checked={showCommission}
                onChange={(e) => setShowCommission(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="showCommission" className="ml-2 text-sm text-gray-700">
                Inclure les commissions
              </label>
            </div>

            {showCommission && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(outcomes)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <label className="text-sm text-gray-700 mr-2">
                        Commission Book {index + 1} :
                      </label>
                      <input
                        type="number"
                        value={commissions[index]}
                        onChange={(e) => handleCommissionChange(index, e.target.value)}
                        min="-10"
                        max="10"
                        step="0.1"
                        className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <span className="ml-1 text-sm text-gray-700">%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}