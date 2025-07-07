import SurebetCalculator from './SurebetCalculator';

export const metadata = {
  title: 'Calculateur de Surebets - Rounders Pro',
  description: 'Calculez vos mises optimales pour garantir un profit sur vos paris d\'arbitrage. Support 2 ou 3 issues avec gestion des commissions.',
  keywords: 'surebet, arbitrage, pari sportif, calculateur, mise optimale',
};

export default function SurebetCalculatricePage() {
  return <SurebetCalculator />;
}