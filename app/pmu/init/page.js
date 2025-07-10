'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InitPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const router = useRouter();

  const initDatabase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/pmu/api/init-db?key=init-pmu-2025', {
        method: 'POST'
      });
      
      const data = await response.json();
      setResult(data);
      
      if (data.success) {
        setTimeout(() => {
          router.push('/pmu');
        }, 2000);
      }
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '50px', 
      maxWidth: '600px', 
      margin: '0 auto',
      fontFamily: 'system-ui'
    }}>
      <h1>Initialisation de la base de données PMU</h1>
      
      <div style={{ 
        background: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p>Cette page permet d'initialiser la base de données pour l'application PMU.</p>
        <p><strong>⚠️ À n'utiliser qu'une seule fois !</strong></p>
      </div>

      <button
        onClick={initDatabase}
        disabled={isLoading}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.7 : 1
        }}
      >
        {isLoading ? 'Initialisation en cours...' : 'Initialiser la base de données'}
      </button>

      {result && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: result.success ? '#d4f4dd' : '#fdd4d4',
          border: `1px solid ${result.success ? '#4caf50' : '#f44336'}`
        }}>
          <h3>{result.success ? '✅ Succès' : '❌ Erreur'}</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
          {result.success && <p>Redirection vers le dashboard dans 2 secondes...</p>}
        </div>
      )}
    </div>
  );
}