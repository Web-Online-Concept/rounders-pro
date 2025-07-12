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
    
    // Récupérer les chevaux depuis la base de données
    const chevaux = await getAllChevaux(filters);
    
    // Grouper les chevaux par date et course pour faciliter l'affichage
    const chevauxGroupes = {};
    
    chevaux.forEach(cheval => {
      // Formater la date pour avoir une clé cohérente
      let dateKey = cheval.date_course;
      
      // Si la date existe, s'assurer qu'elle est au format string
      if (dateKey && typeof dateKey === 'object') {
        // Si c'est un objet Date, le convertir en string ISO
        dateKey = new Date(dateKey).toISOString().split('T')[0];
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