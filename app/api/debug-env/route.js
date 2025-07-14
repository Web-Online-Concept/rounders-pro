import { NextResponse } from 'next/server'

export async function GET() {
  // Lister toutes les variables d'environnement qui contiennent POSTGRES ou PARIS
  const relevantEnvVars = {}
  
  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes('POSTGRES') || key.includes('PARIS')) {
      // Masquer partiellement les valeurs pour la sécurité
      relevantEnvVars[key] = value ? '***' + value.slice(-4) : 'undefined'
    }
  }

  return NextResponse.json({
    envVars: relevantEnvVars,
    hasPostgresUrl: !!process.env.POSTGRES_URL,
    hasParisPostgresUrl: !!process.env.PARIS_SPORTIFS_POSTGRES_URL,
    nodeEnv: process.env.NODE_ENV
  })
}