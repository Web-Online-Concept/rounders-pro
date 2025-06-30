import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 pb-20 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4">Rounders</h4>
            <p className="text-sm">
              Le guide ultime pour maximiser vos gains sur Stake avec des bonus exclusifs.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Guide</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide-stake" className="hover:text-white">Sommaire</Link></li>
              <li><Link href="/guide-stake/france" className="hover:text-white">Jouer depuis la France</Link></li>
              <li><Link href="/guide-stake/inscription" className="hover:text-white">Inscription</Link></li>
              <li><Link href="/guide-stake/crypto" className="hover:text-white">Cryptomonnaies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Bonus</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide-stake/bonus" className="hover:text-white">Bonus & Rakeback</Link></li>
              <li><Link href="/guide-stake/vip" className="hover:text-white">Programme VIP</Link></li>
              <li><Link href="/affilies" className="hover:text-white">Espace Affiliés</Link></li>
              <li><Link href="/guide-stake/strategies" className="hover:text-white">Stratégies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email : rounders.pro@gmail.com</li>
              <li>Twitter : @rounders_pro</li>
              <li><Link href="/guide-stake/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Rounders. Tous droits réservés. Jouez responsable.</p>
        </div>
      </div>
    </footer>
  );
}