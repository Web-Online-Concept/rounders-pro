import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

// Fonction pour initialiser les tables si elles n'existent pas
export async function initDatabase() {
  try {
    // Table des imports
    await sql`
      CREATE TABLE IF NOT EXISTS pmu_imports (
        id SERIAL PRIMARY KEY,
        date_import TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        fichier_nom VARCHAR(255),
        critere_utilise VARCHAR(100),
        nombre_chevaux INTEGER DEFAULT 0
      )
    `;

    // Table des chevaux sélectionnés
    await sql`
      CREATE TABLE IF NOT EXISTS pmu_chevaux (
        id SERIAL PRIMARY KEY,
        import_id INTEGER REFERENCES pmu_imports(id) ON DELETE CASCADE,
        
        -- Info course
        date_course DATE,
        numero_reunion VARCHAR(10),
        hippodrome VARCHAR(100),
        numero_course INTEGER,
        heure_course TIME,
        discipline VARCHAR(50),
        nb_partants INTEGER,
        distance VARCHAR(20),
        type_depart VARCHAR(50),
        
        -- Info cheval
        numero_cheval INTEGER,
        nom_cheval VARCHAR(100),
        age INTEGER,
        sexe VARCHAR(10),
        
        -- Performances
        pourcent_g_hippo DECIMAL(5,2),
        pourcent_p_hippo DECIMAL(5,2),
        clt_ca VARCHAR(20),
        first_def VARCHAR(10),
        def VARCHAR(10),
        def_1 VARCHAR(10),
        def_2 VARCHAR(10),
        def_3 VARCHAR(10),
        def_4 VARCHAR(10),
        def_5 VARCHAR(10),
        def_6 VARCHAR(10),
        def_7 VARCHAR(10),
        def_8 VARCHAR(10),
        
        -- Stats cheval
        pourcent_g_ch_histo DECIMAL(5,2),
        pourcent_g_ch DECIMAL(5,2),
        pourcent_p_ch DECIMAL(5,2),
        pourcent_total_ch DECIMAL(5,2),
        clt_ch VARCHAR(20),
        
        -- Les hommes
        entraineur VARCHAR(100),
        pourcent_g_ent DECIMAL(5,2),
        pourcent_p_ent DECIMAL(5,2),
        pourcent_total_ent DECIMAL(5,2),
        clt_ent VARCHAR(20),
        pilote VARCHAR(100),
        poids_fav VARCHAR(20),
        pourcent_g_pi DECIMAL(5,2),
        pourcent_p_pi DECIMAL(5,2),
        pourcent_total_pi DECIMAL(5,2),
        clt_pi VARCHAR(20),
        
        -- Musique
        musique TEXT,
        mus1 VARCHAR(10),
        mus2 VARCHAR(10),
        mus3 VARCHAR(10),
        mus4 VARCHAR(10),
        mus5 VARCHAR(10),
        mus6 VARCHAR(10),
        
        -- Engagement
        tempo VARCHAR(50),
        gains_carriere DECIMAL(12,2),
        statut VARCHAR(50),
        
        -- Données complètes en JSON
        data_complete JSONB,
        
        -- Métadonnées
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT NULL
      )
    `;

    // Index pour améliorer les performances
    await sql`
      CREATE INDEX IF NOT EXISTS idx_pmu_chevaux_import_id 
      ON pmu_chevaux(import_id);
    `;
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_pmu_chevaux_date_course 
      ON pmu_chevaux(date_course);
    `;
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_pmu_chevaux_deleted_at 
      ON pmu_chevaux(deleted_at);
    `;

    console.log('✅ Base de données initialisée avec succès');
    return { success: true };
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de la BDD:', error);
    return { success: false, error: error.message };
  }
}

// Fonction pour obtenir tous les chevaux (non supprimés)
export async function getAllChevaux(filters = {}) {
  try {
    let query = `
      SELECT c.*, i.fichier_nom, i.critere_utilise, i.date_import
      FROM pmu_chevaux c
      JOIN pmu_imports i ON c.import_id = i.id
      WHERE c.deleted_at IS NULL
    `;
    
    const conditions = [];
    const values = [];
    let paramCount = 1;
    
    if (filters.dateDebut) {
      conditions.push(`c.date_course >= $${paramCount}`);
      values.push(filters.dateDebut);
      paramCount++;
    }
    
    if (filters.dateFin) {
      conditions.push(`c.date_course <= $${paramCount}`);
      values.push(filters.dateFin);
      paramCount++;
    }
    
    if (filters.hippodrome) {
      conditions.push(`c.hippodrome ILIKE $${paramCount}`);
      values.push(`%${filters.hippodrome}%`);
      paramCount++;
    }
    
    if (conditions.length > 0) {
      query += ' AND ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY c.date_course DESC, c.numero_course ASC, c.numero_cheval ASC';
    
    const result = await sql.query(query, values);
    return result.rows;
  } catch (error) {
    console.error('Erreur lors de la récupération des chevaux:', error);
    throw error;
  }
}

// Fonction pour supprimer un cheval (soft delete)
export async function deleteCheval(id) {
  try {
    await sql`
      UPDATE pmu_chevaux 
      SET deleted_at = CURRENT_TIMESTAMP 
      WHERE id = ${id}
    `;
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de la suppression du cheval:', error);
    throw error;
  }
}

// Fonction pour créer un import
export async function createImport(fileName, critereName, chevauxCount) {
  try {
    const result = await sql`
      INSERT INTO pmu_imports (fichier_nom, critere_utilise, nombre_chevaux)
      VALUES (${fileName}, ${critereName}, ${chevauxCount})
      RETURNING id
    `;
    return result.rows[0].id;
  } catch (error) {
    console.error('Erreur lors de la création de l\'import:', error);
    throw error;
  }
}

// Fonction pour insérer un cheval
export async function insertCheval(importId, chevalData) {
  try {
    const result = await sql`
      INSERT INTO pmu_chevaux (
        import_id,
        date_course,
        numero_reunion,
        hippodrome,
        numero_course,
        heure_course,
        discipline,
        nb_partants,
        distance,
        type_depart,
        numero_cheval,
        nom_cheval,
        age,
        sexe,
        pourcent_g_hippo,
        pourcent_p_hippo,
        clt_ca,
        first_def,
        def,
        def_1,
        def_2,
        def_3,
        def_4,
        def_5,
        def_6,
        def_7,
        def_8,
        pourcent_g_ch_histo,
        pourcent_g_ch,
        pourcent_p_ch,
        pourcent_total_ch,
        clt_ch,
        entraineur,
        pourcent_g_ent,
        pourcent_p_ent,
        pourcent_total_ent,
        clt_ent,
        pilote,
        poids_fav,
        pourcent_g_pi,
        pourcent_p_pi,
        pourcent_total_pi,
        clt_pi,
        musique,
        mus1,
        mus2,
        mus3,
        mus4,
        mus5,
        mus6,
        tempo,
        gains_carriere,
        statut,
        data_complete
      ) VALUES (
        ${importId},
        ${chevalData.date_course},
        ${chevalData.numero_reunion},
        ${chevalData.hippodrome},
        ${chevalData.numero_course},
        ${chevalData.heure_course},
        ${chevalData.discipline},
        ${chevalData.nb_partants},
        ${chevalData.distance},
        ${chevalData.type_depart},
        ${chevalData.numero_cheval},
        ${chevalData.nom_cheval},
        ${chevalData.age},
        ${chevalData.sexe},
        ${chevalData.pourcent_g_hippo},
        ${chevalData.pourcent_p_hippo},
        ${chevalData.clt_ca},
        ${chevalData.first_def},
        ${chevalData.def},
        ${chevalData.def_1},
        ${chevalData.def_2},
        ${chevalData.def_3},
        ${chevalData.def_4},
        ${chevalData.def_5},
        ${chevalData.def_6},
        ${chevalData.def_7},
        ${chevalData.def_8},
        ${chevalData.pourcent_g_ch_histo},
        ${chevalData.pourcent_g_ch},
        ${chevalData.pourcent_p_ch},
        ${chevalData.pourcent_total_ch},
        ${chevalData.clt_ch},
        ${chevalData.entraineur},
        ${chevalData.pourcent_g_ent},
        ${chevalData.pourcent_p_ent},
        ${chevalData.pourcent_total_ent},
        ${chevalData.clt_ent},
        ${chevalData.pilote},
        ${chevalData.poids_fav},
        ${chevalData.pourcent_g_pi},
        ${chevalData.pourcent_p_pi},
        ${chevalData.pourcent_total_pi},
        ${chevalData.clt_pi},
        ${chevalData.musique},
        ${chevalData.mus1},
        ${chevalData.mus2},
        ${chevalData.mus3},
        ${chevalData.mus4},
        ${chevalData.mus5},
        ${chevalData.mus6},
        ${chevalData.tempo},
        ${chevalData.gains_carriere},
        ${chevalData.statut},
        ${JSON.stringify(chevalData.data_complete)}
      )
      RETURNING id
    `;
    return result.rows[0].id;
  } catch (error) {
    console.error('Erreur lors de l\'insertion du cheval:', error);
    throw error;
  }
}