import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 pb-24 md:pb-12">
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
            <h4 className="font-bold text-white mb-4">Outils paris sportifs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/paris-sportifs/montante" className="hover:text-white">Montantes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email : rounders.pro@gmail.com</li>
              <li><Link href="https://x.com/rounders_pro" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter : @rounders_pro</Link></li>
              <li><Link href="https://www.youtube.com/@Rounders_fr" target="_blank" rel="noopener noreferrer" className="hover:text-white">Youtube : @Rounders_fr</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center md:text-left text-sm">
              <p>&copy; 2025 Rounders. Tous droits réservés. Jouez responsable.</p>
            </div>
            <div className="text-center md:text-right text-sm">
              <ul className="flex flex-wrap justify-center md:justify-end gap-4">
                <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
                <li><Link href="/cgu" className="hover:text-white">CGU</Link></li>
                <li><Link href="/politique-confidentialite" className="hover:text-white">Confidentialité</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}