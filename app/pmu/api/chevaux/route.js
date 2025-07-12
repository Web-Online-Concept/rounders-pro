import { NextResponse } from 'next/server';
import { getAllChevaux, deleteCheval } from '../../lib/db';

// GET - Récupérer tous les chevaux avec filtres optionnels
export async function GET(request) {
  try {
    // Extraire les paramètres de recherche
    const { searchParams } = new URL(request.url);
    
    const filters = {
      dateDebut: searchParams.get('dateDebut'),
      dateFin: searchParams.get('dateFin'),
      hippodrome: searchParams.get('hippodrome'),
      critere: searchParams.get('critere')
    };
    
    console.log('🔍 Récupération des chevaux avec filtres:', filters);
    
    // Récupérer les chevaux depuis la base de données
    const chevaux = await getAllChevaux(filters);
    
    console.log(`📊 Nombre de chevaux récupérés: ${chevaux.length}`);
    
    // Grouper les chevaux par date et course pour faciliter l'affichage
    const chevauxGroupes = {};
    
    chevaux.forEach((cheval, index) => {
      // Formater la date pour avoir une clé cohérente
      let dateKey = cheval.date_course;
      
      // Log pour debug (seulement pour le premier cheval)
      if (index === 0) {
        console.log('🗓️ Debug date - Premier cheval:');
        console.log('  - date_course brute:', dateKey);
        console.log('  - type:', typeof dateKey);
        console.log('  - valeur:', dateKey);
      }
      
      // Gestion robuste de la date
      if (!dateKey) {
        console.log('⚠️ Date manquante pour le cheval:', cheval.nom_cheval);
        dateKey = 'date-inconnue';
      } else if (typeof dateKey === 'object' && dateKey instanceof Date) {
        // C'est un objet Date
        dateKey = dateKey.toISOString().split('T')[0];
      } else if (typeof dateKey === 'string') {
        // C'est déjà une string, on vérifie le format
        if (dateKey.includes('T')) {
          // Format ISO avec heure, on garde juste la date
          dateKey = dateKey.split('T')[0];
        }
        // Si c'est déjà au format YYYY-MM-DD, on ne touche à rien
      } else if (typeof dateKey === 'number') {
        // Peut-être un timestamp
        dateKey = new Date(dateKey).toISOString().split('T')[0];
      } else {
        console.log('⚠️ Format de date non reconnu:', dateKey, 'Type:', typeof dateKey);
        dateKey = 'date-invalide';
      }
      
      // Log pour debug (premier cheval seulement)
      if (index === 0) {
        console.log('  - date_course formatée:', dateKey);
      }
      
      // Créer une clé unique pour chaque course
      const courseKey = `${cheval.hippodrome}_${cheval.numero_reunion}_C${cheval.numero_course}`;
      
      if (!chevauxGroupes[dateKey]) {
        chevauxGroupes[dateKey] = {};
      }
      
      if (!chevauxGroupes[dateKey][courseKey]) {
        chevauxGroupes[dateKey][courseKey] = {
          date: dateKey,
          hippodrome: cheval.hippodrome,
          reunion: cheval.numero_reunion,
          course: cheval.numero_course,
          heure: cheval.heure_course,
          discipline: cheval.discipline,
          distance: cheval.distance,
          critere_utilise: cheval.critere_utilise,
          fichier_nom: cheval.fichier_nom,
          date_import: cheval.date_import,
          chevaux: []
        };
      }
      
      chevauxGroupes[dateKey][courseKey].chevaux.push({
        id: cheval.id,
        numero: cheval.numero_cheval,
        nom: cheval.nom_cheval,
        age: cheval.age,
        sexe: cheval.sexe,
        def: cheval.def,
        def_1: cheval.def_1,
        def_2: cheval.def_2,
        entraineur: cheval.entraineur,
        pilote: cheval.pilote,
        musique: cheval.musique,
        gains_carriere: cheval.gains_carriere,
        pourcent_g_ch: cheval.pourcent_g_ch,
        pourcent_p_ch: cheval.pourcent_p_ch,
        pourcent_total_ch: cheval.pourcent_total_ch,
        data_complete: cheval.data_complete
      });
    });
    
    // Log des dates trouvées
    console.log('📅 Dates trouvées:', Object.keys(chevauxGroupes));
    
    // Calculer les statistiques
    const stats = {
      totalChevaux: chevaux.length,
      totalCourses: Object.values(chevauxGroupes).reduce(
        (acc, date) => acc + Object.keys(date).length, 
        0
      ),
      hippodromes: [...new Set(chevaux.map(c => c.hippodrome))].sort(),
      dates: Object.keys(chevauxGroupes).sort().reverse()
    };
    
    return NextResponse.json({
      success: true,
      data: chevauxGroupes,
      stats: stats
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des chevaux:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la récupération des données',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un cheval (soft delete)
export async function DELETE(request) {
  try {
    // Récupérer l'ID du cheval à supprimer
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID du cheval manquant' },
        { status: 400 }
      );
    }
    
    console.log(`🗑️ Suppression du cheval ID: ${id}`);
    
    // Supprimer le cheval (soft delete)
    const result = await deleteCheval(id);
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Cheval supprimé avec succès'
      });
    } else {
      throw new Error('Échec de la suppression');
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la suppression:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la suppression',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Configuration
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';