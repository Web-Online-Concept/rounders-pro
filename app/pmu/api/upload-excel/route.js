import { NextResponse } from 'next/server';
import { parseExcelFile, validateExcelFile } from '../../lib/excelParser';
import { createImport, insertCheval } from '../../lib/db';
import { getCriteriaById, getActiveCriteria } from '../../lib/criteria';

export async function POST(request) {
  console.log('📤 Début du traitement de l\'upload');
  
  // Vérifier la connexion à la base de données
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL non définie');
    return NextResponse.json(
      { error: 'Configuration de base de données manquante' },
      { status: 500 }
    );
  }
  
  try {
    // Récupérer les données du formulaire
    const formData = await request.formData();
    const file = formData.get('file');
    const criteriaId = formData.get('criteriaId');
    const applyAllCriteria = formData.get('applyAllCriteria') === 'true';
    
    // Validation des données
    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      );
    }
    
    if (!applyAllCriteria && !criteriaId) {
      return NextResponse.json(
        { error: 'Aucun critère sélectionné' },
        { status: 400 }
      );
    }
    
    // Valider le fichier
    const validation = validateExcelFile(file);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    
    // Si on applique tous les critères
    if (applyAllCriteria) {
      console.log(`📊 Application de tous les critères sur le fichier: ${file.name}`);
      
      const allCriteria = getActiveCriteria();
      const allResults = {};
      const allChevaux = [];
      const allErrors = [];
      let totalSelected = 0;
      let totalInserted = 0;
      let totalRows = 0;
      
      // Appliquer chaque critère
      for (const criteria of allCriteria) {
        console.log(`🔍 Application du critère: ${criteria.nom}`);
        
        // Parser avec ce critère
        const parseResult = await parseExcelFile(file, criteria.id);
        
        if (!parseResult.success) {
          allErrors.push({
            critere: criteria.nom,
            error: parseResult.error
          });
          continue;
        }
        
        // Capturer le nombre total de lignes depuis le premier parsing
        if (totalRows === 0) {
          totalRows = parseResult.totalRows;
        }
        
        // Créer un import pour ce critère si des chevaux sont trouvés
        let insertedCount = 0;
        const criteriaErrors = [];
        
        if (parseResult.selectedCount > 0) {
          const importId = await createImport(
            file.name,
            criteria.nom,
            parseResult.selectedCount
          );
          
          // Insérer les chevaux
          for (const cheval of parseResult.chevaux) {
            try {
              await insertCheval(importId, cheval);
              insertedCount++;
              
              // Ajouter le critère et la couleur au cheval pour l'affichage
              allChevaux.push({
                ...cheval,
                critere: criteria.nom,
                couleur: criteria.couleur
              });
            } catch (error) {
              criteriaErrors.push({
                cheval: cheval.nom_cheval,
                error: error.message
              });
            }
          }
        }
        
        // Enregistrer les résultats pour ce critère
        allResults[criteria.nom] = {
          selectedCount: parseResult.selectedCount,
          insertedCount: insertedCount,
          errors: criteriaErrors
        };
        
        totalSelected += parseResult.selectedCount;
        totalInserted += insertedCount;
        
        if (criteriaErrors.length > 0) {
          allErrors.push(...criteriaErrors.map(e => ({
            ...e,
            critere: criteria.nom
          })));
        }
      }
      
      // Grouper par course pour le résumé
      const coursesMap = {};
      allChevaux.forEach(cheval => {
        const key = `${cheval.hippodrome}_${cheval.date_course}_R${cheval.numero_reunion}_C${cheval.numero_course}`;
        if (!coursesMap[key]) {
          coursesMap[key] = {
            hippodrome: cheval.hippodrome,
            date: cheval.date_course,
            reunion: cheval.numero_reunion,
            course: cheval.numero_course,
            chevaux: []
          };
        }
        coursesMap[key].chevaux.push({
          numero: cheval.numero_cheval,
          nom: cheval.nom_cheval,
          age: cheval.age,
          def: cheval.def,
          def_1: cheval.def_1,
          def_2: cheval.def_2,
          critere: cheval.critere,
          couleur: cheval.couleur
        });
      });
      
      return NextResponse.json({
        success: true,
        message: `${totalInserted} chevaux importés avec tous les critères`,
        allCriteriaResults: allResults,
        stats: {
          totalRows: totalRows,
          selectedCount: totalSelected,
          insertedCount: totalInserted,
          errorCount: allErrors.length,
          fileName: file.name,
          courses: Object.values(coursesMap)
        },
        errors: allErrors.length > 0 ? allErrors : undefined
      });
    }
    
    // Traitement normal avec un seul critère
    const criteria = getCriteriaById(criteriaId);
    if (!criteria) {
      return NextResponse.json(
        { error: 'Critère invalide' },
        { status: 400 }
      );
    }
    
    console.log(`📊 Parsing du fichier: ${file.name} avec le critère: ${criteriaId}`);
    
    // Parser le fichier Excel
    const parseResult = await parseExcelFile(file, criteriaId);
    
    if (!parseResult.success) {
      return NextResponse.json(
        { error: `Erreur lors du parsing: ${parseResult.error}` },
        { status: 400 }
      );
    }
    
    console.log(`✅ Parsing réussi: ${parseResult.selectedCount} chevaux sélectionnés sur ${parseResult.totalRows}`);
    
    // Si aucun cheval ne correspond aux critères
    if (parseResult.selectedCount === 0) {
      return NextResponse.json({
        success: true,
        message: 'Aucun cheval ne correspond aux critères sélectionnés',
        stats: {
          totalRows: parseResult.totalRows,
          selectedCount: 0,
          criteriaUsed: criteria.nom
        }
      });
    }
    
    // Créer l'enregistrement d'import
    const importId = await createImport(
      file.name,
      criteria.nom,
      parseResult.selectedCount
    );
    
    console.log(`💾 Import créé avec l'ID: ${importId}`);
    
    // Insérer les chevaux en base de données
    const insertedIds = [];
    const errors = [];
    
    for (const cheval of parseResult.chevaux) {
      try {
        const chevalId = await insertCheval(importId, cheval);
        insertedIds.push(chevalId);
      } catch (error) {
        console.error(`Erreur insertion cheval ${cheval.nom_cheval}:`, error);
        errors.push({
          cheval: cheval.nom_cheval,
          error: error.message
        });
      }
    }
    
    console.log(`✅ ${insertedIds.length} chevaux insérés avec succès`);
    
    // Préparer le résumé des résultats
    const summary = {
      totalRows: parseResult.totalRows,
      selectedCount: parseResult.selectedCount,
      insertedCount: insertedIds.length,
      errorCount: errors.length,
      criteriaUsed: criteria.nom,
      fileName: file.name,
      importId: importId
    };
    
    // Si certains chevaux sont présents
    if (parseResult.chevaux.length > 0) {
      // Grouper par course pour le résumé
      const coursesMap = {};
      parseResult.chevaux.forEach(cheval => {
        const key = `${cheval.hippodrome}_${cheval.date_course}_R${cheval.numero_reunion}_C${cheval.numero_course}`;
        if (!coursesMap[key]) {
          coursesMap[key] = {
            hippodrome: cheval.hippodrome,
            date: cheval.date_course,
            reunion: cheval.numero_reunion,
            course: cheval.numero_course,
            chevaux: []
          };
        }
        coursesMap[key].chevaux.push({
          numero: cheval.numero_cheval,
          nom: cheval.nom_cheval,
          age: cheval.age,
          def: cheval.def,
          def_1: cheval.def_1,
          def_2: cheval.def_2
        });
      });
      
      summary.courses = Object.values(coursesMap);
    }
    
    // Retourner le résultat
    return NextResponse.json({
      success: true,
      message: `${insertedIds.length} chevaux importés avec succès`,
      stats: summary,
      errors: errors.length > 0 ? errors : undefined
    });
    
  } catch (error) {
    console.error('❌ Erreur lors du traitement:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors du traitement du fichier',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Configuration spécifique pour cette route
export const runtime = 'nodejs';
export const maxDuration = 30;