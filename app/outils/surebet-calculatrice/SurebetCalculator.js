'use client';

import { useState, useEffect } from 'react';

export default function SurebetCalculator() {
  const [mode, setMode] = useState('global'); // 'global' ou 'individual'
  const [outcomes, setOutcomes] = useState(2);
  const [totalStake, setTotalStake] = useState(100);
  const [currency, setCurrency] = useState('EUR');
  const [odds, setOdds] = useState(['', '', '']);
  const [stakes, setStakes] = useState(['', '', '']);
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

  const calculateResults = () => {
    // Vérifier que toutes les cotes sont entrées
    let validOdds = true;
    const parsedOdds = [];
    for (let i = 0; i < outcomes; i++) {
      const odd = parseFloat(odds[i]);
      if (!odd || odd <= 1) {
        validOdds = false;
        break;
      }
      parsedOdds[i] = odd;
    }

    if (!validOdds) {
      setResults(null);
      return;
    }

    // Ajuster les cotes avec les commissions
    const adjustedOdds = parsedOdds.map((odd, i) => {
      if (showCommission && commissions[i] !== 0) {
        if (commissions[i] < 0) {
          return odd / (1 + Math.abs(commissions[i]) / 100);
        } else {
          return odd * (1 - commissions[i] / 100);
        }
      }
      return odd;
    });

    // Calculer la somme des probabilités implicites
    let impliedProbSum = 0;
    for (let i = 0; i < outcomes; i++) {
      impliedProbSum += 1 / adjustedOdds[i];
    }

    const isSurebet = impliedProbSum < 1;
    const profitPercent = isSurebet 
      ? ((1 - impliedProbSum) * 100) 
      : (-(impliedProbSum - 1) * 100);

    let calculatedStakes = [];
    let calculatedReturns = [];
    let calculatedProfits = [];
    let actualTotalStake = 0;

    if (mode === 'global') {
      // Mode mise globale : calculer la répartition optimale
      if (totalStake <= 0) {
        setResults(null);
        return;
      }

      for (let i = 0; i < outcomes; i++) {
        let stake = (totalStake / impliedProbSum) / adjustedOdds[i];
        
        if (roundStakes && roundTo > 0) {
          stake = Math.round(stake / roundTo) * roundTo;
        }
        
        calculatedStakes[i] = stake;
        actualTotalStake += stake;
      }

      // Ajuster pour que le total corresponde
      if (roundStakes && actualTotalStake !== totalStake) {
        const diff = totalStake - actualTotalStake;
        calculatedStakes[0] += diff;
        actualTotalStake = totalStake;
      }

      // Mettre à jour les champs de mise
      setStakes(calculatedStakes.map(s => s.toFixed(2)));
    } else {
      // Mode mise individuelle : utiliser les mises entrées
      for (let i = 0; i < outcomes; i++) {
        const stake = parseFloat(stakes[i]) || 0;
        calculatedStakes[i] = stake;
        actualTotalStake += stake;
      }
    }

    // Calculer les retours et profits pour chaque issue
    for (let i = 0; i < outcomes; i++) {
      calculatedReturns[i] = calculatedStakes[i] * adjustedOdds[i];
      calculatedProfits[i] = calculatedReturns[i] - actualTotalStake;
    }

    setResults({
      isSurebet,
      profitPercent,
      stakes: calculatedStakes,
      returns: calculatedReturns,
      profits: calculatedProfits,
      totalStake: actualTotalStake,
      minReturn: Math.min(...calculatedReturns),
      minProfit: Math.min(...calculatedProfits),
    });

    // Mettre à jour la mise totale en mode individuel
    if (mode === 'individual') {
      setTotalStake(actualTotalStake);
    }
  };

  useEffect(() => {
    calculateResults();
  }, [odds, totalStake, outcomes, showCommission, commissions, roundStakes, roundTo, mode, stakes]);

  const handleOddsChange = (index, value) => {
    const newOdds = [...odds];
    newOdds[index] = value;
    setOdds(newOdds);
  };

  const handleStakeChange = (index, value) => {
    const newStakes = [...stakes];
    newStakes[index] = value;
    setStakes(newStakes);
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
          <h1 className="text-3xl font-bold text-indigo-900">Calculateur de Surebets</h1>
          <div className="bg-gray-50 rounded-lg px-6 py-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Profit</p>
            <p className={`text-2xl font-bold ${
              results?.isSurebet ? 'text-green-600' : 'text-gray-600'
            }`}>
              {results ? `${results.profitPercent.toFixed(2)}%` : '0.00%'}
            </p>
          </div>
        </div>

        {/* Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Statut</h3>
            <p className={`text-base sm:text-lg font-medium ${
              results?.isSurebet ? 'text-green-600' : 'text-gray-600'
            }`}>
              {!results ? 'Entrez les cotes et mises pour calculer le surebet' :
               results.isSurebet ? 'Surebet détecté ! Profit garanti.' : 
               'Pas de surebet. Perte garantie.'}
            </p>
            {results && (
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Profit minimum : {results.minProfit.toFixed(2)} {symbol} ({((results.minProfit / results.totalStake) * 100).toFixed(2)}%)
              </p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Comment ça marche ?</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Un surebet (pari d'arbitrage) est une opportunité de parier sur toutes les issues 
              d'un événement avec la garantie d'un profit, peu importe le résultat. Entrez les 
              cotes de différents bookmakers et la calculatrice déterminera si c'est un surebet 
              et comment répartir vos mises.
            </p>
          </div>
        </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Statut</h3>
            <p className={`text-base sm:text-lg font-medium ${
              results?.isSurebet ? 'text-green-600' : 'text-gray-600'
            }`}>
              {!results ? 'Entrez les cotes et mises pour calculer le surebet' :
               results.isSurebet ? 'Surebet détecté ! Profit garanti.' : 
               'Pas de surebet. Perte garantie.'}
            </p>
            {results && (
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Profit minimum : {results.minProfit.toFixed(2)} {symbol} ({((results.minProfit / results.totalStake) * 100).toFixed(2)}%)
              </p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Comment ça marche ?</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Un surebet (pari d'arbitrage) est une opportunité de parier sur toutes les issues 
              d'un événement avec la garantie d'un profit, peu importe le résultat. Entrez les 
              cotes de différents bookmakers et la calculatrice déterminera si c'est un surebet 
              et comment répartir vos mises.
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
                onChange={(e) => {
                  setTotalStake(parseFloat(e.target.value) || 0);
                  setMode('global');
                }}
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
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Bookmaker</th>
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
                      value={odds[index]}
                      onChange={(e) => handleOddsChange(index, e.target.value)}
                      className="w-24 sm:w-32 px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={stakes[index]}
                      onChange={(e) => {
                        handleStakeChange(index, e.target.value);
                        setMode('individual');
                      }}
                      className="w-24 sm:w-32 px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    />
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
                <td className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">
                  {results ? `${results.totalStake.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                </td>
                <td className="px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">
                  {results ? `${results.minReturn.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                </td>
                <td className={`px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base ${
                  results?.minProfit >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {results ? `${results.minProfit.toFixed(2)} ${symbol}` : `0.00 ${symbol}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Advanced Settings */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
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
              <label htmlFor="showCommission" className="ml-2 text-xs sm:text-sm text-gray-700">
                Inclure les commissions
              </label>
            </div>

            {showCommission && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(outcomes)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <label className="text-xs sm:text-sm text-gray-700 mr-2">
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
                      <span className="ml-1 text-xs sm:text-sm text-gray-700">%</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Commissions positives = réduction des gains | Commissions négatives = augmentation des cotes
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Mode de calcul</h4>
            <p className="text-xs text-gray-500">
              {mode === 'global' 
                ? "Mode mise globale : Entrez la mise totale et la calculatrice répartit automatiquement les mises optimales."
                : "Mode mise individuelle : Entrez vos mises manuellement pour chaque bookmaker."}
            </p>
          </div>
        </div>

        {/* Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Statut</h3>
            <p className={`text-base sm:text-lg font-medium ${
              results?.isSurebet ? 'text-green-600' : 'text-gray-600'
            }`}>
              {!results ? 'Entrez les cotes et mises pour calculer le surebet' :
               results.isSurebet ? 'Surebet détecté ! Profit garanti.' : 
               'Pas de surebet. Perte garantie.'}
            </p>
            {results && (
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Profit minimum : {results.minProfit.toFixed(2)} {symbol} ({((results.minProfit / results.totalStake) * 100).toFixed(2)}%)
              </p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Comment ça marche ?</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Un surebet (pari d'arbitrage) est une opportunité de parier sur toutes les issues 
              d'un événement avec la garantie d'un profit, peu importe le résultat. Entrez les 
              cotes de différents bookmakers et la calculatrice déterminera si c'est un surebet 
              et comment répartir vos mises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}