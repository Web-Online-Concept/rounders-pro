// app/not-found.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page introuvable
        </h2>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/guide-stake"
            className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
          >
            Voir le guide
          </Link>
        </div>
      </div>
    </div>
  )
}