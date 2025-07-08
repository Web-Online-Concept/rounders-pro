'use client';

import React, { useState, useEffect, useRef } from 'react';

const SurebetCalculator = () => {
  // États pour les valeurs
  const [betType, setBetType] = useState('1-2');
  const [currency, setCurrency] = useState('EUR');
  const [totalStake, setTotalStake] = useState('100');
  const [odds1, setOdds1] = useState('2.00');
  const [odds2, setOdds2] = useState('2.00');
  const [odds3, setOdds3] = useState('2.00');
  const [commission1, setCommission1] = useState('0');
  const [commission2, setCommission2] = useState('0');
  const [commission3, setCommission3] = useState('0');
  const [stake1, setStake1] = useState('50.00');
  const [stake2, setStake2] = useState('50.00');
  const [stake3, setStake3] = useState('0.00');
  
  // États pour les checkboxes D (Distribution)
  const [distribute1, setDistribute1] = useState(true);
  const [distribute2, setDistribute2] = useState(true);
  const [distribute3, setDistribute3] = useState(true);
  const [distributeAll, setDistributeAll] = useState(true);
  
  // État pour le mode C (Constant) - par défaut sur sum
  const [fixedMode, setFixedMode] = useState('sum');
  
  // Timers pour le debounce
  const oddsTimerRef = useRef(null);
  const totalTimerRef = useRef(null);

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
    
    // Parseage des valeurs
    const o1 = parseFloat(odds1) || 0;
    const o2 = parseFloat(odds2) || 0;
    const o3 = outcomeCount === 3 ? (parseFloat(odds3) || 0) : 0;
    
    const c1 = parseFloat(commission1) || 0;
    const c2 = parseFloat(commission2) || 0;
    const c3 = outcomeCount === 3 ? (parseFloat(commission3) || 0) : 0;
    
    const s1 = parseFloat(stake1) || 0;
    const s2 = parseFloat(stake2) || 0;
    const s3 = outcomeCount === 3 ? (parseFloat(stake3) || 0) : 0;
    
    // Calcul du total réel des mises
    const actualTotal = s1 + s2 + (outcomeCount === 3 ? s3 : 0);
    
    // Calcul des cotes ajustées (après commission)
    const adjOdds1 = o1 * (1 - c1 / 100);
    const adjOdds2 = o2 * (1 - c2 / 100);
    const adjOdds3 = outcomeCount === 3 ? o3 * (1 - c3 / 100) : 0;
    
    // Calcul des retours
    const return1 = s1 * adjOdds1;
    const return2 = s2 * adjOdds2;
    const return3 = outcomeCount === 3 ? s3 * adjOdds3 : 0;
    
    // Calcul des profits (retour - mise totale)
    const profit1 = return1 - actualTotal;
    const profit2 = return2 - actualTotal;
    const profit3 = outcomeCount === 3 ? return3 - actualTotal : 0;
    
    // Profit minimum (le pire scénario)
    const profits = outcomeCount === 3 ? [profit1, profit2, profit3] : [profit1, profit2];
    const minProfit = Math.min(...profits.filter(p => !isNaN(p)));
    
    // Calcul si c'est un surebet
    let sumInverseOdds = 0;
    if (adjOdds1 > 0) sumInverseOdds += 1/adjOdds1;
    if (adjOdds2 > 0) sumInverseOdds += 1/adjOdds2;
    if (outcomeCount === 3 && adjOdds3 > 0) sumInverseOdds += 1/adjOdds3;
    
    const isSurebet = sumInverseOdds < 1 && sumInverseOdds > 0;
    
    return {
      stakes: [s1, s2, s3],
      returns: [return1, return2, return3],
      profits: [profit1, profit2, profit3],
      minProfit: isNaN(minProfit) ? 0 : minProfit,
      isSurebet,
      total: actualTotal,
      symbol
    };
  };

  // Redistribuer les mises selon la mise totale (seulement celles avec D coché)
  const redistributeStakes = () => {
    const total = parseFloat(totalStake) || 0;
    if (total <= 0) return;
    
    const outcomeCount = getOutcomeCount();
    const o1 = parseFloat(odds1) || 0;
    const o2 = parseFloat(odds2) || 0;
    const o3 = outcomeCount === 3 ? (parseFloat(odds3) || 0) : 0;
    
    if (o1 <= 0 || o2 <= 0 || (outcomeCount === 3 && o3 <= 0)) return;
    
    const c1 = parseFloat(commission1) || 0;
    const c2 = parseFloat(commission2) || 0;
    const c3 = outcomeCount === 3 ? (parseFloat(commission3) || 0) : 0;
    
    // Calcul avec commissions
    const adjOdds1 = o1 * (1 - c1 / 100);
    const adjOdds2 = o2 * (1 - c2 / 100);
    const adjOdds3 = outcomeCount === 3 ? o3 * (1 - c3 / 100) : 1;
    
    // Si C est sur sum, on redistribue selon D
    if (fixedMode === 'sum') {
      // Calculer les mises pour les paris avec D coché
      const distributes = [distribute1, distribute2, outcomeCount === 3 ? distribute3 : false];
      const currentStakes = [parseFloat(stake1) || 0, parseFloat(stake2) || 0, parseFloat(stake3) || 0];
      const adjOdds = [adjOdds1, adjOdds2, adjOdds3];
      
      // Calculer la somme des mises fixes (D décoché)
      let fixedTotal = 0;
      for (let i = 0; i < outcomeCount; i++) {
        if (!distributes[i]) {
          fixedTotal += currentStakes[i];
        }
      }
      
      // Reste à distribuer
      const toDistribute = total - fixedTotal;
      if (toDistribute < 0) return; // Pas assez pour couvrir les mises fixes
      
      // Somme des inverses pour les mises à distribuer
      let sumInverseDistribute = 0;
      for (let i = 0; i < outcomeCount; i++) {
        if (distributes[i] && adjOdds[i] > 0) {
          sumInverseDistribute += 1 / adjOdds[i];
        }
      }
      
      if (sumInverseDistribute === 0) return;
      
      // Calculer et mettre à jour les mises
      if (distribute1) {
        const newStake1 = toDistribute * (1/adjOdds1) / sumInverseDistribute;
        setStake1(newStake1.toFixed(2));
      }
      
      if (distribute2) {
        const newStake2 = toDistribute * (1/adjOdds2) / sumInverseDistribute;
        setStake2(newStake2.toFixed(2));
      }
      
      if (outcomeCount === 3 && distribute3) {
        const newStake3 = toDistribute * (1/adjOdds3) / sumInverseDistribute;
        setStake3(newStake3.toFixed(2));
      }
    } else {
      // Si C est sur une mise spécifique, cette mise reste fixe
      // et on redistribue les autres selon leurs cotes
      const fixedStakeIndex = parseInt(fixedMode) - 1;
      const fixedStake = fixedStakeIndex === 0 ? parseFloat(stake1) || 0
                       : fixedStakeIndex === 1 ? parseFloat(stake2) || 0
                       : parseFloat(stake3) || 0;
      
      const remainingTotal = total - fixedStake;
      if (remainingTotal < 0) return;
      
      // Redistribuer le reste entre les autres mises
      const adjOddsArray = [adjOdds1, adjOdds2, adjOdds3];
      let sumInverseOthers = 0;
      
      for (let i = 0; i < outcomeCount; i++) {
        if (i !== fixedStakeIndex && adjOddsArray[i] > 0) {
          sumInverseOthers += 1 / adjOddsArray[i];
        }
      }
      
      if (sumInverseOthers === 0) return;
      
      // Mettre à jour les mises (sauf celle qui est fixe)
      if (fixedStakeIndex !== 0) {
        const newStake1 = remainingTotal * (1/adjOdds1) / sumInverseOthers;
        setStake1(newStake1.toFixed(2));
      }
      
      if (fixedStakeIndex !== 1) {
        const newStake2 = remainingTotal * (1/adjOdds2) / sumInverseOthers;
        setStake2(newStake2.toFixed(2));
      }
      
      if (outcomeCount === 3 && fixedStakeIndex !== 2) {
        const newStake3 = remainingTotal * (1/adjOdds3) / sumInverseOthers;
        setStake3(newStake3.toFixed(2));
      }
    }
  };

  // Handlers
  const handleOddsChange = (setter, value) => {
    setter(value);
    if (oddsTimerRef.current) clearTimeout(oddsTimerRef.current);
    oddsTimerRef.current = setTimeout(() => {
      redistributeStakes();
    }, 500);
  };

  const handleCommissionChange = (setter, value) => {
    setter(value);
    if (oddsTimerRef.current) clearTimeout(oddsTimerRef.current);
    oddsTimerRef.current = setTimeout(() => {
      redistributeStakes();
    }, 500);
  };

  // PAS DE REDISTRIBUTION quand on change une mise manuellement
  const handleStakeChange = (setter, value) => {
    setter(value);
    // Si C = sum, on ne redistribue pas les autres mises
    // Si C != sum, on recalcule la mise totale dans le useEffect
  };

  const handleTotalStakeChange = (value) => {
    setTotalStake(value);
    if (totalTimerRef.current) clearTimeout(totalTimerRef.current);
    totalTimerRef.current = setTimeout(() => {
      redistributeStakes();
    }, 300);
  };

  // Gestion du checkbox "tous" pour D
  const handleDistributeAllChange = (checked) => {
    setDistributeAll(checked);
    setDistribute1(checked);
    setDistribute2(checked);
    if (getOutcomeCount() === 3) {
      setDistribute3(checked);
    }
  };

  // Mise à jour de la mise totale quand les mises individuelles changent
  useEffect(() => {
    // Si C = sum est sélectionné, la mise totale reste fixe
    // Sinon, elle se recalcule comme la somme des mises
    if (fixedMode !== 'sum') {
      const s1 = parseFloat(stake1) || 0;
      const s2 = parseFloat(stake2) || 0;
      const s3 = getOutcomeCount() === 3 ? (parseFloat(stake3) || 0) : 0;
      const newTotal = s1 + s2 + s3;
      setTotalStake(newTotal.toFixed(2));
    }
  }, [stake1, stake2, stake3, betType, fixedMode]);

  // Mise à jour du checkbox "tous" quand les checkboxes individuels changent
  useEffect(() => {
    const allChecked = distribute1 && distribute2 && (getOutcomeCount() === 2 || distribute3);
    setDistributeAll(allChecked);
  }, [distribute1, distribute2, distribute3, betType]);

  // Ajuster les mises au changement de type de pari
  useEffect(() => {
    if (getOutcomeCount() === 2) {
      setStake3('0.00');
      setOdds3('2.00');
      setCommission3('0');
      setDistribute3(true);
    }
    redistributeStakes();
  }, [betType]);

  // Initialisation au chargement
  useEffect(() => {
    redistributeStakes();
  }, []);

  // Quand on change le mode fixe
  useEffect(() => {
    if (fixedMode === 'sum') {
      // Si on passe en mode C=sum, recalculer les mises selon la mise totale actuelle
      redistributeStakes();
    }
  }, [fixedMode]);

  // Nettoyage des timers
  useEffect(() => {
    return () => {
      if (oddsTimerRef.current) clearTimeout(oddsTimerRef.current);
      if (totalTimerRef.current) clearTimeout(totalTimerRef.current);
    };
  }, []);

  const results = calculateResults();
  const labels = getLabels();
  const outcomeCount = getOutcomeCount();

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
          {/* Settings - 4 colonnes sur PC, 2 sur mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Type de pari</label>
              <select 
                value={betType} 
                onChange={(e) => setBetType(e.target.value)}
                className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="1-2">1-2</option>
                <option value="1-X-2">1-X-2</option>
                <option value="1X-2">1X-2</option>
                <option value="H1() - H2()">H1() - H2()</option>
                <option value="Plus que - Moins que">Plus que - Moins que</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Nombre de résultats</label>
              <input 
                type="text" 
                value={getOutcomeCount()} 
                readOnly 
                className="w-full px-2 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm text-center"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Mise totale</label>
              <input 
                type="text" 
                value={totalStake} 
                onChange={(e) => handleTotalStakeChange(e.target.value)}
                className="w-full px-2 py-2 border border-gray-300 rounded-md text-right text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Devise</label>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm"
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
                <col className="w-16 sm:w-20" />
                <col className="w-20 sm:w-24" />
                <col className="w-16 sm:w-20" />
                <col className="w-20 sm:w-24" />
                <col className="w-20 sm:w-24" />
                <col className="w-20 sm:w-24" />
                <col className="w-12 sm:w-16" />
                <col className="w-12 sm:w-16" />
              </colgroup>
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Bookmaker</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Cote</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Commission %</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Mise</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Retour</th>
                  <th className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700">Profit</th>
                  <th className="px-1 sm:px-2 py-3 text-center text-xs font-medium text-gray-700">
                    D
                    <abbr className="inline-block w-4 h-4 text-xs text-gray-400 no-underline cursor-help" title="Les paris pour lesquels le bénéfice sera distribué">
                      ⓘ
                    </abbr>
                  </th>
                  <th className="px-1 sm:px-2 py-3 text-center text-xs font-medium text-gray-700">
                    C
                    <abbr className="inline-block w-4 h-4 text-xs text-gray-400 no-underline cursor-help" title="Quantité fixe">
                      ⓘ
                    </abbr>
                  </th>
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
                      onChange={(e) => handleStakeChange(setStake1, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">
                    {results.returns[0].toFixed(2)} {symbol}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 text-center font-medium text-sm ${results.profits[0] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.profits[0] >= 0 ? '+' : ''}{results.profits[0].toFixed(2)} {symbol}
                  </td>
                  <td className="px-1 sm:px-2 py-3 text-center">
                    <input 
                      type="checkbox" 
                      checked={distribute1}
                      onChange={(e) => setDistribute1(e.target.checked)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="px-1 sm:px-2 py-3 text-center">
                    <input 
                      type="radio" 
                      name="fixed" 
                      value="1"
                      checked={fixedMode === '1'}
                      onChange={(e) => setFixedMode(e.target.value)}
                      className="w-4 h-4"
                    />
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
                      onChange={(e) => handleStakeChange(setStake2, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">
                    {results.returns[1].toFixed(2)} {symbol}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 text-center font-medium text-sm ${results.profits[1] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.profits[1] >= 0 ? '+' : ''}{results.profits[1].toFixed(2)} {symbol}
                  </td>
                  <td className="px-1 sm:px-2 py-3 text-center">
                    <input 
                      type="checkbox" 
                      checked={distribute2}
                      onChange={(e) => setDistribute2(e.target.checked)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="px-1 sm:px-2 py-3 text-center">
                    <input 
                      type="radio" 
                      name="fixed" 
                      value="2"
                      checked={fixedMode === '2'}
                      onChange={(e) => setFixedMode(e.target.value)}
                      className="w-4 h-4"
                    />
                  </td>
                </tr>
                {outcomeCount === 3 && (
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
                        onChange={(e) => handleStakeChange(setStake3, e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-right text-sm"
                      />
                    </td>
                    <td className="px-2 sm:px-4 py-3 text-center text-sm">
                      {results.returns[2].toFixed(2)} {symbol}
                    </td>
                    <td className={`px-2 sm:px-4 py-3 text-center font-medium text-sm ${results.profits[2] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.profits[2] >= 0 ? '+' : ''}{results.profits[2].toFixed(2)} {symbol}
                    </td>
                    <td className="px-1 sm:px-2 py-3 text-center">
                      <input 
                        type="checkbox" 
                        checked={distribute3}
                        onChange={(e) => setDistribute3(e.target.checked)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="px-1 sm:px-2 py-3 text-center">
                      <input 
                        type="radio" 
                        name="fixed" 
                        value="3"
                        checked={fixedMode === '3'}
                        onChange={(e) => setFixedMode(e.target.value)}
                        className="w-4 h-4"
                      />
                    </td>
                  </tr>
                )}
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Total</td>
                  <td className="px-2 sm:px-4 py-3"></td>
                  <td className="px-2 sm:px-4 py-3"></td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">{results.total.toFixed(2)} {symbol}</td>
                  <td className="px-2 sm:px-4 py-3 text-center text-sm">
                    {Math.min(...results.returns.slice(0, outcomeCount).filter(r => !isNaN(r) && r > 0)).toFixed(2)} {symbol}
                  </td>
                  <td className={`px-2 sm:px-4 py-3 text-center text-sm ${results.minProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.minProfit >= 0 ? '+' : ''}{results.minProfit.toFixed(2)} {symbol}
                  </td>
                  <td className="px-1 sm:px-2 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <input 
                        type="checkbox" 
                        checked={distributeAll}
                        onChange={(e) => handleDistributeAllChange(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <strong className="text-xs hidden sm:inline">D</strong>
                    </div>
                  </td>
                  <td className="px-1 sm:px-2 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <input 
                        type="radio" 
                        name="fixed" 
                        value="sum"
                        checked={fixedMode === 'sum'}
                        onChange={(e) => setFixedMode(e.target.value)}
                        className="w-4 h-4"
                      />
                      <strong className="text-xs hidden sm:inline">C</strong>
                    </div>
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
              <p>• Case D : Cochez pour redistribuer automatiquement cette mise quand la mise totale change</p>
              <p>• Case C : Sélectionnez l'élément qui reste constant lors des calculs</p>
            </div>
          </div>

          {/* Help text */}
          <div className="mt-4 text-xs text-gray-500 text-center">
            D = Distribution automatique | C = Valeur constante
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurebetCalculator;