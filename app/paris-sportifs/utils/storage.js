// Utilitaires pour la gestion du stockage local
// À placer dans app/paris-sportifs/utils/storage.js

import { useState } from 'react'

const STORAGE_PREFIX = 'rounders_ps_'

export const storage = {
  // Sauvegarder des données
  save: (key, data) => {
    try {
      const fullKey = STORAGE_PREFIX + key
      localStorage.setItem(fullKey, JSON.stringify(data))
      return true
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
      return false
    }
  },

  // Récupérer des données
  get: (key) => {
    try {
      const fullKey = STORAGE_PREFIX + key
      const data = localStorage.getItem(fullKey)
      return data ? JSON.parse(data) : null
    } catch (error) {
      console.error('Erreur lors de la récupération:', error)
      return null
    }
  },

  // Supprimer des données
  remove: (key) => {
    try {
      const fullKey = STORAGE_PREFIX + key
      localStorage.removeItem(fullKey)
      return true
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
      return false
    }
  },

  // Vérifier si une clé existe
  exists: (key) => {
    const fullKey = STORAGE_PREFIX + key
    return localStorage.getItem(fullKey) !== null
  },

  // Obtenir toutes les clés de l'application
  getAllKeys: () => {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(STORAGE_PREFIX)) {
        keys.push(key.replace(STORAGE_PREFIX, ''))
      }
    }
    return keys
  },

  // Exporter toutes les données
  exportAll: () => {
    const data = {}
    const keys = storage.getAllKeys()
    keys.forEach(key => {
      data[key] = storage.get(key)
    })
    return data
  },

  // Importer des données
  importData: (data) => {
    try {
      Object.keys(data).forEach(key => {
        storage.save(key, data[key])
      })
      return true
    } catch (error) {
      console.error('Erreur lors de l\'import:', error)
      return false
    }
  }
}

// Hook React pour utiliser le storage avec état
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.get(key)
      return item || initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      storage.save(key, value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}