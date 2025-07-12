'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FileUploader from '../components/FileUploader';
import CriteriaSelector from '../components/CriteriaSelector';

export default function UploadPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [applyAllCriteria, setApplyAllCriteria] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);

  // Réinitialiser le formulaire
  const resetForm = () => {
    setSelectedFile(null);
    setSelectedCriteria('');
    setApplyAllCriteria(false);
    setUploadResult(null);
    setError(null);
  };

  // Gérer le changement de la checkbox tous critères
  const handleAllCriteriaChange = (checked) => {
    setApplyAllCriteria(checked);
    if (checked) {
      setSelectedCriteria(''); // Reset la sélection individuelle
    }
  };

  // Gérer l'upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Veuillez sélectionner un fichier');
      return;
    }

    if (!applyAllCriteria && !selectedCriteria) {
      setError('Veuillez choisir un critère ou sélectionner "Appliquer tous les critères"');
      return;
    }

    setIsUploading(true);
    setError(null);
    setUploadResult(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      if (applyAllCriteria) {
        formData.append('applyAllCriteria', 'true');
      } else {
        formData.append('criteriaId', selectedCriteria);
      }

      const response = await fetch('/pmu/api/upload-excel', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        setUploadResult(result);
      } else {
        setError(result.error || 'Erreur lors de l\'upload');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
      console.error('Erreur upload:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-page">
      <div className="page-header">
        <Link href="/pmu" className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Retour au tableau de bord
        </Link>
        
        <h1 className="page-title">Import de fichier Excel</h1>
        <p className="page-description">
          Sélectionnez un fichier Excel et choisissez le critère de filtrage à appliquer
        </p>
      </div>

      <div className="upload-container">
        {/* Résultat de l'upload */}
        {uploadResult && (
          <div className={`result-card ${uploadResult.success ? 'success' : 'warning'}`}>
            <div className="result-header">
              {uploadResult.success ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )}
              <h3>{uploadResult.message}</h3>
            </div>
            
            {/* Résultats pour tous les critères */}
            {uploadResult.allCriteriaResults && (
              <div className="all-criteria-results">
                <h4>Résultats par critère :</h4>
                {Object.entries(uploadResult.allCriteriaResults).map(([critereName, result]) => (
                  <div key={critereName} className="criteria-result-item">
                    <div className="criteria-result-header">
                      <span className="criteria-name">{critereName}</span>
                      <span className={`criteria-count ${result.selectedCount > 0 ? 'has-results' : 'no-results'}`}>
                        {result.selectedCount} {result.selectedCount > 1 ? 'chevaux trouvés' : 'cheval trouvé'}
                      </span>
                    </div>
                    {result.insertedCount > 0 && (
                      <div className="criteria-inserted">
                        {result.insertedCount} {result.insertedCount > 1 ? 'chevaux importés' : 'cheval importé'}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="total-summary">
                  <strong>Total :</strong> {uploadResult.stats.selectedCount} chevaux trouvés, {uploadResult.stats.insertedCount} importés
                </div>
              </div>
            )}

            {/* Résultats pour un seul critère */}
            {!uploadResult.allCriteriaResults && uploadResult.stats && (
              <div className="result-stats">
                <div className="stat-item">
                  <span className="stat-label">Lignes analysées</span>
                  <span className="stat-value">{uploadResult.stats.totalRows}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Chevaux sélectionnés</span>
                  <span className="stat-value">{uploadResult.stats.selectedCount}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Chevaux importés</span>
                  <span className="stat-value success-text">{uploadResult.stats.insertedCount}</span>
                </div>
                {uploadResult.stats.errorCount > 0 && (
                  <div className="stat-item">
                    <span className="stat-label">Erreurs</span>
                    <span className="stat-value error-text">{uploadResult.stats.errorCount}</span>
                  </div>
                )}
              </div>
            )}

            {uploadResult.errors && uploadResult.errors.length > 0 && (
              <div className="error-details">
                <h4>Détails des erreurs :</h4>
                {uploadResult.errors.map((err, idx) => (
                  <div key={idx} className="error-item">
                    <strong>{err.cheval}:</strong> {err.error}
                  </div>
                ))}
              </div>
            )}

            {uploadResult.stats?.courses && uploadResult.stats.courses.length > 0 && (
              <div className="result-courses">
                <h4>Courses importées :</h4>
                {uploadResult.stats.courses.map((course, idx) => (
                  <div key={idx} className="course-detail">
                    <div className="course-header-import">
                      <span className="course-name">
                        {course.reunion}C{course.course} - {course.hippodrome}
                      </span>
                      <span className="course-count">
                        {course.chevaux.length} {course.chevaux.length > 1 ? 'chevaux' : 'cheval'}
                      </span>
                    </div>
                    <div className="chevaux-detail">
                      {course.chevaux.map((cheval, cIdx) => (
                        <div key={cIdx} className="cheval-item">
                          <span className="cheval-numero">N°{cheval.numero}</span>
                          <span className="cheval-nom">{cheval.nom}</span>
                          <span className="cheval-info">{cheval.age} ans</span>
                          <span className="cheval-def">
                            Déf: {cheval.def || '-'} | {cheval.def_1 || '-'} | {cheval.def_2 || '-'}
                          </span>
                          {cheval.critere && (
                            <span className="cheval-critere" style={{color: cheval.couleur}}>
                              {cheval.critere}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="action-buttons">
              <button onClick={resetForm} className="reset-button">
                Faire un nouvel import
              </button>
              
              <button onClick={() => router.push('/pmu')} className="dashboard-button">
                Voir le tableau de bord
              </button>
            </div>
          </div>
        )}

        {/* Formulaire d'upload */}
        {!uploadResult && (
          <>
            <div className="form-section">
              <h2 className="section-title">1. Sélectionner le fichier Excel</h2>
              <FileUploader
                onFileSelect={setSelectedFile}
                onClear={() => setSelectedFile(null)}
                disabled={isUploading}
              />
            </div>

            <div className="form-section">
              <h2 className="section-title">2. Choisir le critère de filtrage</h2>
              
              {/* Option tous les critères */}
              <div className="all-criteria-option">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={applyAllCriteria}
                    onChange={(e) => handleAllCriteriaChange(e.target.checked)}
                    disabled={isUploading}
                  />
                  <span className="checkbox-wrapper">
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-label">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Appliquer tous les critères
                    </span>
                  </span>
                </label>
                <p className="checkbox-description">
                  Analyse le fichier avec tous les critères disponibles (1, 2, 3, 4 et 5) en une seule fois
                </p>
              </div>

              <div className="separator">
                <span>ou</span>
              </div>

              {applyAllCriteria && (
                <p className="disabled-message">
                  La sélection individuelle est désactivée car "Appliquer tous les critères" est activé
                </p>
              )}
              
              <div className={`criteria-selector-wrapper ${applyAllCriteria ? 'disabled' : ''}`}>
                <CriteriaSelector
                  onCriteriaSelect={setSelectedCriteria}
                  disabled={isUploading || applyAllCriteria}
                />
              </div>
            </div>

            {error && (
              <div className="error-message">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <div className="form-actions">
              <Link href="/pmu" className="cancel-button">
                Annuler
              </Link>
              <button
                onClick={handleUpload}
                disabled={!selectedFile || (!selectedCriteria && !applyAllCriteria) || isUploading}
                className="submit-button"
              >
                {isUploading ? (
                  <>
                    <span className="spinner" />
                    Traitement en cours...
                  </>
                ) : (
                  'Analyser et importer'
                )}
              </button>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .upload-page {
          min-height: 100vh;
          background-color: #f9fafb;
          padding: 24px;
        }

        .page-header {
          max-width: 800px;
          margin: 0 auto 32px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 16px;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #3b82f6;
        }

        .page-title {
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
        }

        .page-description {
          font-size: 16px;
          color: #6b7280;
          margin: 0;
        }

        .upload-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .all-criteria-option {
          background: #f0f9ff;
          border: 1px solid #3b82f6;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 16px;
        }

        .checkbox-container {
          display: block;
          cursor: pointer;
        }

        .checkbox-container input[type="checkbox"] {
          position: absolute;
          opacity: 0;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .checkbox-custom {
          width: 20px;
          height: 20px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          background: white;
          position: relative;
          transition: all 0.2s;
        }

        .checkbox-container input[type="checkbox"]:checked ~ .checkbox-wrapper .checkbox-custom {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }

        .checkbox-container input[type="checkbox"]:checked ~ .checkbox-wrapper .checkbox-custom::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #111827;
          font-size: 16px;
        }

        .checkbox-label svg {
          color: #3b82f6;
        }

        .checkbox-description {
          font-size: 14px;
          color: #6b7280;
          font-weight: 400;
          margin: 8px 0 0 32px;
        }

        .separator {
          text-align: center;
          margin: 16px 0;
          position: relative;
        }

        .separator::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e5e7eb;
        }

        .separator span {
          background: white;
          padding: 0 16px;
          position: relative;
          color: #6b7280;
          font-size: 14px;
          font-style: italic;
        }

        .form-section {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 24px;
          position: relative;
        }

        .disabled-message {
          color: #6b7280;
          font-size: 14px;
          font-style: italic;
          margin-bottom: 12px;
        }

        .criteria-selector-wrapper.disabled {
          opacity: 0.5;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px 0;
        }

        .all-criteria-results {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 16px;
          margin-bottom: 20px;
        }

        .all-criteria-results h4 {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin: 0 0 12px 0;
        }

        .criteria-result-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          padding: 12px;
          margin-bottom: 8px;
        }

        .criteria-result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .criteria-name {
          font-weight: 600;
          color: #111827;
        }

        .criteria-count {
          font-size: 14px;
        }

        .criteria-count.has-results {
          color: #22c55e;
          font-weight: 500;
        }

        .criteria-count.no-results {
          color: #6b7280;
        }

        .criteria-inserted {
          font-size: 12px;
          color: #10b981;
          margin-top: 4px;
        }

        .total-summary {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #e5e7eb;
          font-size: 16px;
          color: #111827;
        }

        .cheval-critere {
          font-size: 12px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          background-color: rgba(0,0,0,0.05);
        }

        .error-message {
          background-color: #fee2e2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .cancel-button {
          padding: 10px 20px;
          border: 1px solid #e5e7eb;
          background-color: white;
          color: #6b7280;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
        }

        .cancel-button:hover {
          background-color: #f9fafb;
        }

        .submit-button {
          padding: 10px 20px;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #2563eb;
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .result-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .result-card.success {
          border-color: #86efac;
          background-color: #f0fdf4;
        }

        .result-card.warning {
          border-color: #fde68a;
          background-color: #fffbeb;
        }

        .result-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .result-header svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .result-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        .result-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 600;
          color: #111827;
        }

        .success-text {
          color: #22c55e;
        }

        .error-text {
          color: #dc2626;
        }

        .result-courses {
          margin-bottom: 20px;
        }

        .result-courses h4 {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin: 0 0 12px 0;
        }

        .course-detail {
          margin-bottom: 16px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
        }

        .course-header-import {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background-color: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        }

        .course-name {
          font-weight: 600;
          color: #111827;
        }

        .course-count {
          color: #6b7280;
          font-size: 14px;
        }

        .chevaux-detail {
          padding: 8px 0;
        }

        .cheval-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          border-bottom: 1px solid #f3f4f6;
        }

        .cheval-item:last-child {
          border-bottom: none;
        }

        .cheval-numero {
          font-weight: 600;
          color: #6b7280;
          min-width: 35px;
        }

        .cheval-nom {
          font-weight: 500;
          color: #111827;
          flex: 1;
        }

        .cheval-info {
          color: #6b7280;
          font-size: 14px;
        }

        .cheval-def {
          color: #7c3aed;
          font-size: 14px;
          font-weight: 500;
        }

        .reset-button {
          padding: 10px 20px;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-buttons {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .reset-button,
        .dashboard-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          color: white;
          text-decoration: none;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .reset-button {
          background-color: #3b82f6;
        }

        .reset-button:hover {
          background-color: #2563eb;
        }

        .dashboard-button {
          background-color: #6366f1;
        }

        .dashboard-button:hover {
          background-color: #4f46e5;
        }

        .error-details {
          margin-top: 20px;
          padding: 16px;
          background-color: #fee2e2;
          border: 1px solid #fecaca;
          border-radius: 6px;
        }

        .error-details h4 {
          margin: 0 0 12px 0;
          color: #991b1b;
          font-size: 16px;
        }

        .error-item {
          font-size: 14px;
          color: #7f1d1d;
          margin-bottom: 8px;
          word-break: break-word;
        }

        .error-item strong {
          color: #991b1b;
        }

        @media (max-width: 640px) {
          .upload-page {
            padding: 16px;
          }

          .page-title {
            font-size: 24px;
          }

          .form-section {
            padding: 16px;
          }

          .result-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}