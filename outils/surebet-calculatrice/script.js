// Classe principale pour la calculatrice de surebets
class SurebetCalculator {
    constructor() {
        this.outcomes = 2;
        this.totalStake = 100;
        this.currency = 'EUR';
        this.odds = [0, 0, 0];
        this.commissions = [0, 0, 0];
        this.roundStakes = false;
        this.roundTo = 1;
        this.showCommission = false;
        
        this.initializeElements();
        this.attachEventListeners();
        this.updateDisplay();
    }
    
    initializeElements() {
        // Éléments principaux
        this.outcomesSelect = document.getElementById('outcomes');
        this.totalStakeInput = document.getElementById('totalStake');
        this.currencySelect = document.getElementById('currency');
        this.profitPercentElement = document.getElementById('profitPercent');
        this.statusMessage = document.querySelector('.status-message');
        
        // Options avancées
        this.roundStakesCheckbox = document.getElementById('roundStakes');
        this.roundToInput = document.getElementById('roundTo');
        this.showCommissionCheckbox = document.getElementById('showCommission');
        this.commissionPanel = document.querySelector('.commission-panel');
        
        // Lignes de la table
        this.outcomeRows = document.querySelectorAll('.outcome-row');
        this.summaryRow = document.querySelector('.summary-row');
    }
    
    attachEventListeners() {
        // Changement du nombre de résultats
        this.outcomesSelect.addEventListener('change', (e) => {
            this.outcomes = parseInt(e.target.value);
            this.updateOutcomesDisplay();
            this.calculate();
        });
        
        // Changement de la mise totale
        this.totalStakeInput.addEventListener('input', (e) => {
            this.totalStake = parseFloat(e.target.value) || 0;
            this.calculate();
        });
        
        // Changement de devise
        this.currencySelect.addEventListener('change', (e) => {
            this.currency = e.target.value;
            this.updateCurrencyDisplay();
        });
        
        // Inputs des cotes
        document.querySelectorAll('.odds-input').forEach((input, index) => {
            input.addEventListener('input', (e) => {
                this.odds[index] = parseFloat(e.target.value) || 0;
                this.calculate();
            });
        });
        
        // Options d'arrondi
        this.roundStakesCheckbox.addEventListener('change', (e) => {
            this.roundStakes = e.target.checked;
            this.roundToInput.disabled = !e.target.checked;
            this.calculate();
        });
        
        this.roundToInput.addEventListener('input', (e) => {
            this.roundTo = parseFloat(e.target.value) || 1;
            this.calculate();
        });
        
        // Commissions
        this.showCommissionCheckbox.addEventListener('change', (e) => {
            this.showCommission = e.target.checked;
            this.commissionPanel.style.display = e.target.checked ? 'block' : 'none';
            this.calculate();
        });
        
        document.querySelectorAll('.commission-input').forEach((input, index) => {
            input.addEventListener('input', (e) => {
                this.commissions[index] = parseFloat(e.target.value) || 0;
                this.calculate();
            });
        });
    }
    
    updateOutcomesDisplay() {
        // Afficher/masquer les lignes selon le nombre de résultats
        this.outcomeRows.forEach((row, index) => {
            row.style.display = index < this.outcomes ? '' : 'none';
        });
        
        // Afficher/masquer les groupes de commission
        document.querySelectorAll('.commission-group').forEach((group, index) => {
            group.style.display = index < this.outcomes ? '' : 'none';
        });
        
        // Réinitialiser les cotes non utilisées
        for (let i = this.outcomes; i < 3; i++) {
            this.odds[i] = 0;
            this.commissions[i] = 0;
        }
    }
    
    updateCurrencyDisplay() {
        const symbols = {
            'EUR': '€',
            'USD': '$',
            'GBP': '£'
        };
        const symbol = symbols[this.currency] || this.currency;
        
        // Mettre à jour tous les montants affichés
        this.calculate();
    }
    
    calculate() {
        // Vérifier que toutes les cotes sont entrées
        let allOddsEntered = true;
        for (let i = 0; i < this.outcomes; i++) {
            if (!this.odds[i] || this.odds[i] <= 1) {
                allOddsEntered = false;
                break;
            }
        }
        
        if (!allOddsEntered || this.totalStake <= 0) {
            this.resetDisplay();
            return;
        }
        
        // Calculer les cotes ajustées avec commissions
        const adjustedOdds = this.calculateAdjustedOdds();
        
        // Calculer la somme des probabilités implicites
        let impliedProbSum = 0;
        for (let i = 0; i < this.outcomes; i++) {
            impliedProbSum += 1 / adjustedOdds[i];
        }
        
        // Vérifier si c'est un surebet
        const isSurebet = impliedProbSum < 1;
        const profitPercent = isSurebet ? ((1 - impliedProbSum) * 100) : (-(impliedProbSum - 1) * 100);
        
        // Calculer les mises optimales
        const stakes = this.calculateStakes(adjustedOdds, impliedProbSum);
        
        // Mettre à jour l'affichage
        this.updateCalculationDisplay(stakes, adjustedOdds, profitPercent, isSurebet);
    }
    
    calculateAdjustedOdds() {
        const adjustedOdds = [];
        for (let i = 0; i < this.outcomes; i++) {
            let odd = this.odds[i];
            if (this.showCommission && this.commissions[i] !== 0) {
                // Commission négative = commission sur le pari
                // Commission positive = commission sur le gain
                if (this.commissions[i] < 0) {
                    odd = odd / (1 + Math.abs(this.commissions[i]) / 100);
                } else {
                    odd = odd * (1 - this.commissions[i] / 100);
                }
            }
            adjustedOdds[i] = odd;
        }
        return adjustedOdds;
    }
    
    calculateStakes(adjustedOdds, impliedProbSum) {
        const stakes = [];
        let totalUsed = 0;
        
        for (let i = 0; i < this.outcomes; i++) {
            let stake = (this.totalStake / impliedProbSum) / adjustedOdds[i];
            
            // Arrondir si nécessaire
            if (this.roundStakes && this.roundTo > 0) {
                stake = Math.round(stake / this.roundTo) * this.roundTo;
            }
            
            stakes[i] = stake;
            totalUsed += stake;
        }
        
        // Ajuster pour que le total corresponde exactement
        if (this.roundStakes && totalUsed !== this.totalStake) {
            const diff = this.totalStake - totalUsed;
            stakes[0] += diff; // Ajouter la différence à la première mise
        }
        
        return stakes;
    }
    
    updateCalculationDisplay(stakes, adjustedOdds, profitPercent, isSurebet) {
        const symbols = {
            'EUR': '€',
            'USD': '$',
            'GBP': '£'
        };
        const symbol = symbols[this.currency] || this.currency;
        
        // Mettre à jour l'indicateur de profit
        this.profitPercentElement.textContent = profitPercent.toFixed(2) + '%';
        this.profitPercentElement.className = 'value ' + (isSurebet ? 'positive' : 'negative');
        
        // Mettre à jour le statut
        if (isSurebet) {
            this.statusMessage.textContent = 'Surebet détecté ! Profit garanti.';
            this.statusMessage.className = 'status-message surebet';
        } else {
            this.statusMessage.textContent = 'Pas de surebet. Perte garantie.';
            this.statusMessage.className = 'status-message no-surebet';
        }
        
        // Variables pour les totaux
        let totalStakeActual = 0;
        let totalReturn = 0;
        let totalProfit = 0;
        
        // Mettre à jour chaque ligne
        this.outcomeRows.forEach((row, index) => {
            if (index < this.outcomes) {
                const stake = stakes[index];
                const returnAmount = stake * adjustedOdds[index];
                const profit = returnAmount - this.totalStake;
                
                row.querySelector('.stake-amount').textContent = `${stake.toFixed(2)} ${symbol}`;
                row.querySelector('.return-amount').textContent = `${returnAmount.toFixed(2)} ${symbol}`;
                row.querySelector('.profit-amount').textContent = `${profit.toFixed(2)} ${symbol}`;
                row.querySelector('.profit-amount').className = 'profit-amount ' + (profit >= 0 ? 'positive' : 'negative');
                
                totalStakeActual += stake;
                totalReturn = returnAmount; // Même retour pour toutes les issues
                totalProfit = profit; // Même profit pour toutes les issues
            }
        });
        
        // Mettre à jour la ligne de résumé
        this.summaryRow.querySelector('.total-stake').textContent = `${totalStakeActual.toFixed(2)} ${symbol}`;
        this.summaryRow.querySelector('.total-return').textContent = `${totalReturn.toFixed(2)} ${symbol}`;
        this.summaryRow.querySelector('.total-profit').textContent = `${totalProfit.toFixed(2)} ${symbol}`;
        this.summaryRow.querySelector('.total-profit').className = 'total-profit ' + (totalProfit >= 0 ? 'positive' : 'negative');
    }
    
    resetDisplay() {
        this.profitPercentElement.textContent = '0.00%';
        this.profitPercentElement.className = 'value';
        this.statusMessage.textContent = 'Entrez les cotes pour calculer';
        this.statusMessage.className = 'status-message';
        
        const symbol = {
            'EUR': '€',
            'USD': '$',
            'GBP': '£'
        }[this.currency] || this.currency;
        
        // Réinitialiser toutes les valeurs
        document.querySelectorAll('.stake-amount, .return-amount, .profit-amount, .total-stake, .total-return, .total-profit').forEach(el => {
            el.textContent = `0.00 ${symbol}`;
            el.className = el.className.replace(' positive', '').replace(' negative', '');
        });
    }
    
    updateDisplay() {
        this.updateOutcomesDisplay();
        this.calculate();
    }
}

// Initialiser la calculatrice au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    new SurebetCalculator();
});