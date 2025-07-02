import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Mot de passe admin (à changer et mettre dans une variable d'environnement)
const ADMIN_PASSWORD = 'rounders13071950';

export async function POST(request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Mot de passe requis' },
        { status: 400 }
      );
    }

    // Vérifier le mot de passe
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Mot de passe incorrect' },
        { status: 401 }
      );
    }

    // Créer un token simple (en production, utilisez JWT)
    const token = Buffer.from(`admin:${Date.now()}`).toString('base64');

    // Définir le cookie d'authentification
    const cookieStore = await cookies();
    cookieStore.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 heures
      path: '/'
    });

    return NextResponse.json({
      success: true,
      message: 'Connexion réussie'
    });

  } catch (error) {
    console.error('Erreur auth admin:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  // Déconnexion
  const cookieStore = await cookies();
  cookieStore.delete('admin-token');
  
  return NextResponse.json({
    success: true,
    message: 'Déconnexion réussie'
  });
}