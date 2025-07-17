'use client'

import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TwitterPage() {
  useEffect(() => {
    // Charger le script Twitter
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Suivez-nous sur 𝕏
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <a 
              className="twitter-timeline" 
              data-height="800"
              data-theme="light"
              href="https://twitter.com/rounders_pro"
            >
              Tweets by @rounders_pro
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}