import React, { useState, useEffect, useRef } from 'react';

const SurebetCalculator = () => {
  // États pour les valeurs
  const [betType, setBetType] = useState('1-2');
  const [currency, setCurrency] = useState('EUR');
  const [totalStake, setTotalStake] = useState('100.00');
  const [odds1, setOdds1] = useState('2');
  const [odds2, setOdds2] = useState('2');
  const [odds3, setOdds3] = useState('2');
  const [commission1, setCommission1] = useState('0');
  const [commission2, setCommission2] = useState('0');
  const [commission3, setCommission3] = useState('0');
  const [stake1, setStake1] = useState('50.00');
  const [stake2, setStake2] = useState('50.00');
  const [stake3, setStake3] = useState('0');
  
  // Timers pour le debounce
  const oddsTimerRef = useRef(null);
  const stakeTimerRef = useRef(null);
  const totalTimerRef = useRef(null);
  const isEditingTotal = useRef(false);
  const isRedistributing = useRef(false);

  // Symboles des devises
  const currencySymbols = { EUR: '€', USD: '$', GBP: '£' };
  const symbol = currencySymbols[currency] || '€';

  // Nombre de résultats selon le type de pari
  const getOutcomeCount = () => {
    if (betType === '1-2' || betType === 'H1() - H2()' || betType === 'Plus que - Moins que') return 2;
    return 3;
  };

  // Labels selon le type de pari
  const getLabels = () => {
    switch (betType) {
      case '1-2': return ['1', '2'];
      case '1-X-2': return ['1', 'X', '2'];
      case '1X-2': return ['1X', '12', '2'];
      case 'H1() - H2()': return ['H1', 'H2'];
      case 'Plus que - Moins que': return ['Plus', 'Moins'];
      default: return ['1', '2'];
    }
  };

  // Calcul des résultats
  const calculateResults = () => {
    const outcomeCount = getOutcomeCount();
    const o1 = parseFloat(odds1) || 0;
    const o2 = parseFloat(odds2) || 0;
    const o3 = outcomeCount === 3 ? (parseFloat(odds3) || 0) : 0;
    
    const c1 = parseFloat(commission1) || 0;
    const c2 = parseFloat(commission2) || 0;
    const c3 = outcomeCount === 3 ? (parseFloat(commission3) || 0) : 0;
    
    const s1 = parseFloat(stake1) || 0;
    const s2 = parseFloat(stake2) || 0;
    const s3 = outcomeCount === 3 ? (parseFloat(stake3) || 0) : 0;
    
    const actualTotal = s1 + s2 + s3;
    
    // Calcul avec commissions
    const adjOdds1 = o1 * (1 - c1 / 100);
    const adjOdds2 = o2 * (1 - c2 / 100);
    const adjOdds3 = outcomeCount === 3 ? o3 * (1 - c3 / 100) : 0;
    
    // Retours
    const return1 = s1 * adjOdds1;
    const return2 = s2 * adjOdds2;
    const return3 = outcomeCount === 3 ? s3 * adjOdds3 : 0;
    
    // Profits (retour - mise totale)
    const profit1 = return1 - actualTotal;
    const profit2 = return2 - actualTotal;
    const profit3 = outcomeCount === 3 ? return3 - actualTotal : 0;
    
    // Profit minimum (le pire scénario)
    const profits = outcomeCount === 3 ? [profit1, profit2, profit3] : [profit1, profit2];
    const minProfit = Math.min(...profits);
    
    // Calcul si c'est un surebet
    const sumInverseOdds = outcomeCount === 3 
      ? (1/adjOdds1 + 1/adjOdds2 + 1/adjOdds3)
      : (1/adjOdds1 + 1/adjOdds2);
    
    const isSurebet = o1 > 1 && o2 > 1 && (outcomeCount === 2 || o3 > 1) && sumInverseOdds < 1;
    
    return {
      stakes: [s1, s2, s3],
      returns: [return1, return2, return3],
      profits: [profit1, profit2, profit3],
      minProfit,
      isSurebet,
      total: actualTotal,
      symbol
    };
  };

  // Redistribuer les mises selon la mise totale
  const redistributeStakes = () => {
    if (isRedistributing.current) return;
    
    const total = parseFloat(totalStake) || 0;
    if (total <= 0) return;
    
    const outcomeCount = getOutcomeCount();
    const o1 = parseFloat(odds1) || 1;
    const o2 = parseFloat(odds2) || 1;
    const o3 = outcomeCount === 3 ? (parseFloat(odds3) || 1) : 0;
    
    const c1 = parseFloat(commission1) || 0;
    const c2 = parseFloat(commission2) || 0;
    const c3 = outcomeCount === 3 ? (parseFloat(commission3) || 0) : 0;
    
    // Calcul avec commissions
    const adjOdds1 = o1 * (1 - c1 / 100);
    const adjOdds2 = o2 * (1 - c2 / 100);
    const adjOdds3 = outcomeCount === 3 ? o3 * (1 - c3 / 100) : 1;
    
    // Somme des inverses
    const sumInverse = outcomeCount === 3
      ? (1/adjOdds1 + 1/adjOdds2 + 1/adjOdds3)
      : (1/adjOdds1 + 1/adjOdds2);
    
    if (sumInverse === 0) return;
    
    isRedistributing.current = true;
    
    // Calcul des nouvelles mises
    const newStake1 = total * (1/adjOdds1) / sumInverse;
    const newStake2 = total * (1/adjOdds2) / sumInverse;
    const newStake3 = outcomeCount === 3 ? total * (1/adjOdds3) / sumInverse : 0;
    
    setStake1(newStake1.toFixed(2));
    setStake2(newStake2.toFixed(2));
    if (outcomeCount === 3) {
      setStake3(newStake3.toFixed(2));
    }
    
    setTimeout(() => {
      isRedistributing.current = false;
    }, 100);
  };

  // Redistribuer les autres mises quand une mise change
  const redistributeOtherStakes = (changedStakeIndex) => {
    if (isRedistributing.current) return;
    
    const total = parseFloat(totalStake) || 0;
    if (total <= 0) return;
    
    const outcomeCount = getOutcomeCount();
    const changedStake = changedStakeIndex === 1 ? parseFloat(stake1) || 0 
                       : changedStakeIndex === 2 ? parseFloat(stake2) || 0 
                       : parseFloat(stake3) || 0;
    
    const remainingTotal = total - changedStake;
    if (remainingTotal < 0) return;
    
    const o1 = parseFloat(odds1) || 1;
    const o2 = parseFloat(odds2) || 1;
    const o3 = outcomeCount === 3 ? (parseFloat(odds3) || 1) : 0;
    
    const c1 = parseFloat(commission1) || 0;
    const c2 = parseFloat(commission2) || 0;
    const c3 = outcomeCount === 3 ? (parseFloat(commission3) || 0) : 0;
    
    // Calcul avec commissions
    const adjOdds1 = o1 * (1 - c1 / 100);
    const adjOdds2 = o2 * (1 - c2 / 100);
    const adjOdds3 = outcomeCount === 3 ? o3 * (1 - c3 / 100) : 1;
    
    isRedistributing.current = true;
    
    if (outcomeCount === 2) {
      // Pour 2 résultats
      if (changedStakeIndex === 1) {
        setStake2(remainingTotal.toFixed(2));
      } else {
        setStake1(remainingTotal.toFixed(2));
      }
    } else {
      // Pour 3 résultats
      let sumInverse;
      if (changedStakeIndex === 1) {
        sumInverse = 1/adjOdds2 + 1/adjOdds3;
        if (sumInverse > 0) {
          setStake2((remainingTotal * (1/adjOdds2) / sumInverse).toFixed(2));
          setStake3((remainingTotal * (1/adjOdds3) / sumInverse).toFixed(2));
        }
      } else if (changedStakeIndex === 2) {
        sumInverse = 1/adjOdds1 + 1/adjOdds3;
        if (sumInverse > 0) {
          setStake1((remainingTotal * (1/adjOdds1) / sumInverse).toFixed(2));
          setStake3((remainingTotal * (1/adjOdds3) / sumInverse).toFixed(2));
        }
      } else {
        sumInverse = 1/adjOdds1 + 1/adjOdds2;
        if (sumInverse > 0) {
          setStake1((remainingTotal * (1/adjOdds1) / sumInverse).toFixed(2));
          setStake2((remainingTotal * (1/adjOdds2) / sumInverse).toFixed(2));
        }
      }
    }
    
    setTimeout(() => {
      isRedistributing.current = false;
    }, 100);
  };

  // Handlers
  const handleOddsChange = (setter, value) => {
    setter(value);
    if (oddsTimerRef.current) clearTimeout(oddsTimerRef.current);
    oddsTimerRef.current = setTimeout(() => {
      redistributeStakes();
    }, 800);
  };

  const handleCommissionChange = (setter, value) => {
    setter(value);
    if (oddsTimerRef.current) clearTimeout(oddsTimerRef.current);
    oddsTimerRef.current = setTimeout(() => {
      redistributeStakes();
    }, 800);
  };

  const handleStakeChange = (setter, value, stakeIndex) => {
    setter(value);
    if (stakeTimerRef.current) clearTimeout(stakeTimerRef.current);
    stakeTimerRef.current = setTimeout(() => {
      redistributeOtherStakes(stakeIndex);
    }, 500);
  };

  const handleTotalStakeChange = (value) => {
    setTotalStake(value);
    isEditingTotal.current = true;
    if (totalTimerRef.current) clearTimeout(totalTimerRef.current);
    totalTimerRef.current = setTimeout(() => {
      redistributeStakes();
      isEditingTotal.current = false;
    }, 500);
  };

  // Mise à jour de la mise totale quand les mises individuelles changent
  useEffect(() => {
    if (!isEditingTotal.current && !isRedistributing.current) {
      const s1 = parseFloat(stake1) || 0;
      const s2 = parseFloat(stake2) || 0;
      const s3 = getOutcomeCount() === 3 ? (parseFloat(stake3) || 0) : 0;
      const newTotal = s1 + s2 + s3;
      setTotalStake(newTotal.toFixed(2));
    }
  }, [stake1, stake2, stake3]);

  // Ajuster les mises au changement de type de pari
  useEffect(() => {
    if (getOutcomeCount() === 2) {
      setStake3('0');
      setOdds3('2');
      setCommission3('0');
    }
    redistributeStakes();
  }, [betType]);

  // Nettoyage des timers
  useEffect(() => {
    return () => {
      if (oddsTimerRef.current) clearTimeout(oddsTimerRef.current);
      if (stakeTimerRef.current) clearTimeout(stakeTimerRef.current);
      if (totalTimerRef.current) clearTimeout(totalTimerRef.current);
    };
  }, []);

  const results = calculateResults();
  const labels = getLabels();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header avec Statut intégré */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-indigo-900">
                Calculateur de Surebets
                <span className="block text-sm text-gray-600 font-normal">Rounders.pro</span>
              </h1>
            </div>
            <div className="col-span-1 text-center">
              <div className="text-sm text-gray-600 mb-1">Statut</div>
              <div className={`text-lg font-semibold ${results.isSurebet ? 'text-green-600' : 'text-red-600'}`}>
                {results.isSurebet ? 'Surebet détecté!' : 'Pas de surebet. Perte garantie.'}
              </div>
            </div>
            <div className="col-span-1 text-right">
              <div className="text-sm text-gray-600 mb-1">Profit</div>
              <div className={`text-2xl font-bold ${results.minProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {results.minProfit >= 0 ? '+' : ''}{results.minProfit.toFixed(2)} {results.symbol}
              </div>
            </div>
          </div>
        </div>

        {/* Comment ça marche */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Comment ça marche ?</h3>
          <p className="text-blue-800 text-sm">
            Un surebet (pari d'arbitrage) est une opportunité de parier sur toutes les issues d'un événement avec la garantie d'un profit, peu importe le résultat. Entrez les cotes de différents bookmakers et la calculatrice déterminera si c'est un surebet et comment répartir vos mises.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          {/* Settings */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Type de pari</label>
              <select 
                value={betType} 
                onChange={(e) => setBetType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="1-2">1-2</option>
                <option value="1-X-2">1-X-2</option>
                <option value="1X-2">1X-2</option>
                <option value="H1() - H2()">H1() - H2()</option>
                <option value="Plus que - Moins que">Plus que - Moins que</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Nombre de résultats</label>
              <input 
                type="text" 
                value={getOutcomeCount()} 
                readOnly 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Mise totale</label>
              <input 
                type="text" 
                value={totalStake} 
                onChange={(e) => handleTotalStakeChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Devise</label>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="EUR">EUR €</option>
                <option value="USD">USD $</option>
                <option value="GBP">GBP £</option>
              </select>
            </div>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <colgroup>
                <col className="w-20 sm:w-24" />
                <col className="w-24 sm:w-28" />
                <col className="w-20 sm:w-24" />
                <col className="w-24 sm:w-28" />
                <col className="w-24 sm:w-28" />
                <col className="w-24 sm:w-28" />
              </colgroup>
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Bookmaker</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Cote</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Commission %</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Mise</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Retour</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">{labels[0]}</td>
                  <td className="px-2 sm:px-4 py-3">
                    <input 
                      type="text" 
                      value={odds1} 
                      onChange={(e) => handleOddsChange(setOdds1, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3">
                    <input 
                      type="text" 
                      value={commission1} 
                      onChange={(e) => handleCommissionChange(setCommission1, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3">
                    <input 
                      type="text" 
                      value={stake1} 
                      onChange={(e) => handleStakeChange(setStake1, e.target.value, 1)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">
                    {results.returns[0].toFixed(2)} {symbol}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 text-center font-medium text-sm ${results.profits[0] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.profits[0] >= 0 ? '+' : ''}{results.profits[0].toFixed(2)} {symbol}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">{labels[1]}</td>
                  <td className="px-2 sm:px-4 py-3">
                    <input 
                      type="text" 
                      value={odds2} 
                      onChange={(e) => handleOddsChange(setOdds2, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3">
                    <input 
                      type="text" 
                      value={commission2} 
                      onChange={(e) => handleCommissionChange(setCommission2, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3">
                    <input 
                      type="text" 
                      value={stake2} 
                      onChange={(e) => handleStakeChange(setStake2, e.target.value, 2)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">
                    {results.returns[1].toFixed(2)} {symbol}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 text-center font-medium text-sm ${results.profits[1] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.profits[1] >= 0 ? '+' : ''}{results.profits[1].toFixed(2)} {symbol}
                  </td>
                </tr>
                {getOutcomeCount() === 3 && (
                  <tr className="border-b">
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">{labels[2]}</td>
                    <td className="px-2 sm:px-4 py-3">
                      <input 
                        type="text" 
                        value={odds3} 
                        onChange={(e) => handleOddsChange(setOdds3, e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                      />
                    </td>
                    <td className="px-2 sm:px-4 py-3">
                      <input 
                        type="text" 
                        value={commission3} 
                        onChange={(e) => handleCommissionChange(setCommission3, e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                      />
                    </td>
                    <td className="px-2 sm:px-4 py-3">
                      <input 
                        type="text" 
                        value={stake3} 
                        onChange={(e) => handleStakeChange(setStake3, e.target.value, 3)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                      />
                    </td>
                    <td className="px-2 sm:px-4 py-3 text-center text-sm">
                      {results.returns[2].toFixed(2)} {symbol}
                    </td>
                    <td className={`px-2 sm:px-4 py-3 text-center font-medium text-sm ${results.profits[2] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.profits[2] >= 0 ? '+' : ''}{results.profits[2].toFixed(2)} {symbol}
                    </td>
                  </tr>
                )}
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Total</td>
                  <td className="px-2 sm:px-4 py-3"></td>
                  <td className="px-2 sm:px-4 py-3"></td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">{results.total.toFixed(2)} {symbol}</td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">
                    {Math.min(...results.returns.filter((_, i) => i < getOutcomeCount())).toFixed(2)} {symbol}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 text-center text-sm ${results.minProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.minProfit >= 0 ? '+' : ''}{results.minProfit.toFixed(2)} {symbol}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Options avancées */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Options avancées</h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <p>• Mode arrondi : Les mises peuvent être arrondies au nombre entier le plus proche</p>
              <p>• Commissions : Entrez le pourcentage de commission de chaque bookmaker (0% par défaut)</p>
              <p>• Redistribution automatique : Les mises se recalculent automatiquement selon les cotes</p>
            </div>
          </div>

          {/* Help text */}
          <div className="mt-4 text-xs text-gray-500 text-center">
            Les mises se redistribuent automatiquement. Modifiez une mise individuelle pour garder la mise totale fixe.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurebetCalculator;