import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Merci() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Merci pour votre demande !
          </h1>
          
          <p className="text-gray-600 mb-8">
            Nous avons bien reçu votre demande de bonus Rounders. 
            Notre équipe la traitera dans les 24 à 48 heures.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-8">
            <h2 className="font-semibold text-blue-900 mb-2">Et maintenant ?</h2>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Vérifiez votre email (spam inclus)</li>
              <li>• Nous confirmerons la réception</li>
              <li>• Bonus envoyé sous 24-48h</li>
              <li>• Contact : rounders.pro@gmail.com</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <Link 
              href="/"
              className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Retour à l&apos;accueil
            </Link>
            
            <Link 
              href="/guide-stake"
              className="block w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Consulter le guide
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}