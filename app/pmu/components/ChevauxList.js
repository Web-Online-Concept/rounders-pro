'use client';

import { useState } from 'react';
import { getCriteriaById, CRITERES } from '../lib/criteria';

export default function ChevauxList({ chevaux, onDelete, onRefresh }) {
  const [expandedCourses, setExpandedCourses] = useState(new Set());
  const [deletingIds, setDeletingIds] = useState(new Set());

  // Basculer l'expansion d'une course
  const toggleCourse = (courseKey) => {
    const newExpanded = new Set(expandedCourses);
    if (newExpanded.has(courseKey)) {
      newExpanded.delete(courseKey);
    } else {
      newExpanded.add(courseKey);
    }
    setExpandedCourses(newExpanded);
  };

  // Gérer la suppression d'un cheval
  const handleDelete = async (chevalId, chevalNom) => {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer ${chevalNom} ?`)) {
      return;
    }

    // Ajouter à la liste des suppressions en cours
    setDeletingIds(prev => new Set([...prev, chevalId]));

    try {
      const response = await fetch(`/pmu/api/chevaux?id=${chevalId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Rafraîchir la liste
        onRefresh();
      } else {
        const error = await response.json();
        alert(`Erreur lors de la suppression : ${error.error}`);
      }
    } catch (error) {
      alert('Erreur lors de la suppression');
    } finally {
      // Retirer de la liste des suppressions en cours
      setDeletingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(chevalId);
        return newSet;
      });
    }
  };

  // Formater la date
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Formater l'heure
  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    return timeStr.substring(0, 5); // HH:MM
  };

  // Formater les gains
  const formatGains = (gains) => {
    if (!gains) return '-';
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(gains);
  };

  // Obtenir la description du critère
  const getCriteriaDescription = (critereName) => {
    // Trouver le critère par son nom
    const criteria = Object.values(CRITERES).find(c => c.nom === critereName);
    if (!criteria) return critereName;
    
    // Retourner la description
    return criteria.description;
  };

  // Si pas de données
  if (!chevaux || Object.keys(chevaux).length === 0) {
    return (
      <div className="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
        <h3>Aucun cheval enregistré</h3>
        <p>Commencez par importer un fichier Excel</p>
        <style jsx>{`
          .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #6b7280;
          }
          .empty-state svg {
            margin: 0 auto 16px;
            opacity: 0.3;
          }
          .empty-state h3 {
            font-size: 18px;
            font-weight: 600;
            color: #374151;
            margin: 0 0 8px 0;
          }
          .empty-state p {
            margin: 0;
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="chevaux-list">
      {Object.entries(chevaux).map(([date, courses]) => (
        <div key={date} className="date-group">
          <h3 className="date-header">{formatDate(date)}</h3>
          
          {Object.entries(courses).map(([courseKey, courseData]) => {
            const isExpanded = expandedCourses.has(courseKey);
            const chevauxCount = courseData.chevaux.length;
            
            return (
              <div key={courseKey} className="course-card">
                <div 
                  className="course-header"
                  onClick={() => toggleCourse(courseKey)}
                >
                  <div className="course-info">
                    <h4 className="course-title">
                      {courseData.reunion}C{courseData.course} - {courseData.hippodrome}
                    </h4>
                    <div className="course-details">
                      <span className="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {formatTime(courseData.heure)}
                      </span>
                      <span className="detail-item">{courseData.discipline}</span>
                      <span className="detail-item">{courseData.distance}m</span>
                      <span className="detail-item chevaux-count">
                        {chevauxCount} {chevauxCount > 1 ? 'chevaux' : 'cheval'}
                      </span>
                    </div>
                    <div className="course-meta">
                      <span className="criteria-tag" style={{ backgroundColor: '#e0e7ff' }}>
                        {courseData.critere_utilise}
                      </span>
                      <span className="criteria-description">
                        {getCriteriaDescription(courseData.critere_utilise)}
                      </span>
                    </div>
                  </div>
                  
                  <button className="expand-toggle">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
                
                {isExpanded && (
                  <div className="chevaux-table">
                    <table>
                      <thead>
                        <tr>
                          <th>N°</th>
                          <th>Nom</th>
                          <th>Âge</th>
                          <th>Sexe</th>
                          <th>Déf</th>
                          <th>Déf-1</th>
                          <th>Déf-2</th>
                          <th>Entraîneur</th>
                          <th>Pilote</th>
                          <th>Musique</th>
                          <th>Gains</th>
                          <th>%G</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {courseData.chevaux.map((cheval) => (
                          <tr key={cheval.id}>
                            <td className="text-center">{cheval.numero}</td>
                            <td className="cheval-nom">{cheval.nom}</td>
                            <td className="text-center">{cheval.age}</td>
                            <td className="text-center">{cheval.sexe}</td>
                            <td className="text-center def-cell">{cheval.def || '-'}</td>
                            <td className="text-center def-cell">{cheval.def_1 || '-'}</td>
                            <td className="text-center def-cell">{cheval.def_2 || '-'}</td>
                            <td>{cheval.entraineur}</td>
                            <td>{cheval.pilote}</td>
                            <td className="musique-cell">{cheval.musique || '-'}</td>
                            <td className="text-right">{formatGains(cheval.gains_carriere)}</td>
                            <td className="text-center">
                              {cheval.pourcent_g_ch ? `${cheval.pourcent_g_ch}%` : '-'}
                            </td>
                            <td className="action-cell">
                              <button
                                className="delete-btn"
                                onClick={() => handleDelete(cheval.id, cheval.nom)}
                                disabled={deletingIds.has(cheval.id)}
                                title="Supprimer"
                              >
                                {deletingIds.has(cheval.id) ? (
                                  <span className="spinner" />
                                ) : (
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                  </svg>
                                )}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}

      <style jsx>{`
        .chevaux-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .date-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .date-header {
          font-size: 20px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 8px 0;
          text-transform: capitalize;
        }

        .course-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        }

        .course-header {
          padding: 16px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.2s;
        }

        .course-header:hover {
          background-color: #f9fafb;
        }

        .course-info {
          flex: 1;
        }

        .course-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 8px 0;
        }

        .course-details {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 8px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          color: #6b7280;
        }

        .chevaux-count {
          font-weight: 500;
          color: #3b82f6;
        }

        .course-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
        }

        .criteria-tag {
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
          color: #4338ca;
        }

        .criteria-description {
          color: #6b7280;
          font-style: italic;
        }

        .expand-toggle {
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s;
          border-radius: 4px;
        }

        .expand-toggle:hover {
          background-color: #f3f4f6;
        }

        .expand-toggle svg {
          transition: transform 0.2s;
        }

        .chevaux-table {
          border-top: 1px solid #e5e7eb;
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background-color: #f9fafb;
          padding: 12px 8px;
          text-align: left;
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          border-bottom: 1px solid #e5e7eb;
        }

        td {
          padding: 12px 8px;
          font-size: 14px;
          border-bottom: 1px solid #f3f4f6;
        }

        tr:hover td {
          background-color: #f9fafb;
        }

        .text-center {
          text-align: center;
        }

        .text-right {
          text-align: right;
        }

        .cheval-nom {
          font-weight: 500;
          color: #111827;
        }

        .def-cell {
          font-weight: 600;
          color: #7c3aed;
        }

        .musique-cell {
          font-family: monospace;
          font-size: 13px;
          color: #6b7280;
        }

        .action-cell {
          width: 40px;
          text-align: center;
        }

        .delete-btn {
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .delete-btn:hover:not(:disabled) {
          color: #dc2626;
          background-color: #fee2e2;
        }

        .delete-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #f3f4f6;
          border-top-color: #6b7280;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .course-details {
            flex-wrap: wrap;
            gap: 8px;
          }

          .chevaux-table {
            font-size: 12px;
          }

          th, td {
            padding: 8px 4px;
          }
        }
      `}</style>
    </div>
  );
}