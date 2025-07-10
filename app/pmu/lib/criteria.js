// Configuration des critères de sélection des chevaux
// Chaque critère peut être activé/désactivé indépendamment

export const CRITERES = {
  "chevaux_4ans_DD_FF": {
    id: "chevaux_4ans_DD_FF",
    nom: "Chevaux 4 ans DD-DD-FF",
    description: "Sélectionne les chevaux de 4 ans avec Déf=DD, Déf-1=DD et Déf-2=FF",
    actif: true,
    couleur: "#3B82F6", // Bleu
    filtres: [
      {
        colonne: 11,  // Colonne L : Age
        nom: "Age",
        valeur: "4",
        type: "exact",
        operateur: "="
      },
      {
        colonne: 17,  // Colonne R : Déf
        nom: "Défaillance actuelle",
        valeur: "DD",
        type: "exact",
        operateur: "="
      },
      {
        colonne: 18,  // Colonne S : Déf-1
        nom: "Défaillance précédente",
        valeur: "DD",
        type: "exact",
        operateur: "="
      },
      {
        colonne: 19,  // Colonne T : Déf-2
        nom: "Défaillance -2",
        valeur: "FF",
        type: "exact",
        operateur: "="
      }
    ]
  },
  
  // Emplacement pour ajouter d'autres critères facilement
  // Exemple de structure pour un futur critère :
  /*
  "critere_exemple": {
    id: "critere_exemple",
    nom: "Nom du critère",
    description: "Description détaillée",
    actif: false,
    couleur: "#10B981", // Vert
    filtres: [
      {
        colonne: X,
        nom: "Nom du filtre",
        valeur: "valeur recherchée",
        type: "exact" | "contains" | "greater" | "lesser",
        operateur: "=" | "LIKE" | ">" | "<"
      }
    ]
  }
  */
};

// Fonction pour appliquer un critère sur une ligne de données
export function applyCriteria(row, criteriaId) {
  const criteria = CRITERES[criteriaId];
  
  if (!criteria || !criteria.actif) {
    return false;
  }
  
  // Vérifier que tous les filtres du critère sont satisfaits
  return criteria.filtres.every(filtre => {
    const cellValue = row[filtre.colonne];
    
    // Gérer les valeurs nulles ou undefined
    if (cellValue === null || cellValue === undefined || cellValue === '') {
      return false;
    }
    
    // Convertir en string pour la comparaison
    const value = String(cellValue).trim();
    const targetValue = String(filtre.valeur).trim();
    
    switch (filtre.type) {
      case 'exact':
        return value === targetValue;
      
      case 'contains':
        return value.toLowerCase().includes(targetValue.toLowerCase());
      
      case 'greater':
        return parseFloat(value) > parseFloat(targetValue);
      
      case 'lesser':
        return parseFloat(value) < parseFloat(targetValue);
      
      default:
        return false;
    }
  });
}

// Fonction pour obtenir tous les critères actifs
export function getActiveCriteria() {
  return Object.values(CRITERES).filter(c => c.actif);
}

// Fonction pour obtenir un critère par son ID
export function getCriteriaById(id) {
  return CRITERES[id] || null;
}

// Fonction pour valider qu'au moins un critère est sélectionné
export function hasSelectedCriteria(selectedCriteriaIds) {
  return selectedCriteriaIds && selectedCriteriaIds.length > 0;
}

// Fonction pour obtenir la description complète d'un critère
export function getCriteriaDescription(criteriaId) {
  const criteria = CRITERES[criteriaId];
  if (!criteria) return '';
  
  const filters = criteria.filtres.map(f => 
    `${f.nom} ${f.operateur} ${f.valeur}`
  ).join(' ET ');
  
  return `${criteria.nom}: ${filters}`;
}

// Export des colonnes pour référence
export const COLONNES = {
  // La Réunion et la Course
  DATE: 0,
  NUMERO_REUNION: 1,
  HIPPODROME: 2,
  NUMERO_COURSE: 3,
  HEURE: 4,
  DISCIPLINE: 5,
  PARTANTS: 6,
  DISTANCE: 7,
  DEPART: 8,
  
  // Le Cheval
  NUMERO_CHEVAL: 9,
  NOM_CHEVAL: 10,
  AGE: 11,
  SEXE: 12,
  POURCENT_G_HIPPO: 13,
  POURCENT_P_HIPPO: 14,
  CLT_CA: 15,
  FIRST_DEF: 16,
  DEF: 17,
  DEF_1: 18,
  DEF_2: 19,
  DEF_3: 20,
  DEF_4: 21,
  DEF_5: 22,
  DEF_6: 23,
  DEF_7: 24,
  DEF_8: 25,
  
  // Stats cheval
  POURCENT_G_CH_HISTO: 26,
  POURCENT_G_CH: 27,
  POURCENT_P_CH: 28,
  POURCENT_TOTAL_CH: 29,
  CLT_CH: 30,
  
  // Les Hommes
  ENTRAINEUR: 31,
  POURCENT_G_ENT: 32,
  POURCENT_P_ENT: 33,
  POURCENT_TOTAL_ENT: 34,
  CLT_ENT: 35,
  PILOTE: 36,
  POIDS_FAV: 37,
  POURCENT_G_PI: 38,
  POURCENT_P_PI: 39,
  POURCENT_TOTAL_PI: 40,
  CLT_PI: 41,
  
  // La Musique
  MUSIQUE: 44,
  MUS1: 45,
  MUS2: 46,
  MUS3: 47,
  MUS4: 48,
  MUS5: 49,
  MUS6: 50,
  
  // L'Engagement
  TEMPO: 58,
  GAINS_CARRIERE: 81,
  STATUT: 82,
  
  // Les Résultats
  PLACE: 83,
  RED_KM: 84
};