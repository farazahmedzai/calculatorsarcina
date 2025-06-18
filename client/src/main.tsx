import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function WorkingApp() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{ 
        padding: '1rem 2rem', 
        backgroundColor: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ 
              width: '2.5rem', 
              height: '2.5rem', 
              backgroundColor: '#7c3aed', 
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>📊</span>
            </div>
            <h1 style={{ 
              margin: 0, 
              color: '#1e293b', 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Calculator Sarcină România
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#7c3aed',
              color: 'white',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '2rem'
            }}>
              ✨ Calculator Profesional România
            </div>
            
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Calculează-ți{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Sarcina
              </span>{' '}
              și{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Pensia
              </span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#64748b', 
              marginBottom: '3rem',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
              lineHeight: '1.6'
            }}>
              Platformă modernă și precisă pentru planificarea viitorului tău financiar și familial, conform legislației românești
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(124, 58, 237, 0.3)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                👶 Calculator Sarcină →
              </button>
              <button style={{
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#374151',
                backgroundColor: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                💰 Calculator Pensie
              </button>
            </div>
          </section>

          {/* Features Grid */}
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                Soluții Complete pentru Viitorul Tău
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Tehnologie avansată și calcule precise conform legislației românești actuale
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2rem'
            }}>
              {/* Feature 1 */}
              <div style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '4rem', 
                  height: '4rem',
                  background: 'linear-gradient(135deg, #ec4899, #7c3aed)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>👶</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.75rem' }}>
                  Calculator Sarcină
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Calculează data nașterii, săptămâna de sarcină și etapele importante ale dezvoltării bebelușului
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#fce7f3', 
                    color: '#be185d', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>DPM</span>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#f3e8ff', 
                    color: '#7c3aed', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>Concepție</span>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#dbeafe', 
                    color: '#3b82f6', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>Ecografie</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '4rem', 
                  height: '4rem',
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>💰</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.75rem' }}>
                  Calculator Pensie
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Calculează pensia viitoare bazată pe contribuții, vârstă și tipul de pensie dorit
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#dbeafe', 
                    color: '#3b82f6', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>Toate tipurile</span>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#e0e7ff', 
                    color: '#6366f1', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>Legislație 2025</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '4rem', 
                  height: '4rem',
                  background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>🛡️</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.75rem' }}>
                  Securitate Maximă
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Datele personale sunt protejate și nu sunt stocate pe servere externe
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#d1fae5', 
                    color: '#065f46', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>GDPR</span>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: '#ccfbf1', 
                    color: '#0f766e', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>SSL</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section style={{ 
            padding: '3rem 2rem',
            backgroundColor: '#f8fafc',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#7c3aed', marginBottom: '0.5rem' }}>
                  50,000+
                </div>
                <p style={{ color: '#64748b', fontWeight: '500' }}>Utilizatori Activi</p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>
                  99.9%
                </div>
                <p style={{ color: '#64748b', fontWeight: '500' }}>Precizie Calcule</p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>
                  24/7
                </div>
                <p style={{ color: '#64748b', fontWeight: '500' }}>Disponibilitate</p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  2025
                </div>
                <p style={{ color: '#64748b', fontWeight: '500' }}>Legislație Actualizată</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1e293b', 
        color: 'white', 
        padding: '3rem 2rem 2rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Calculator Sarcină România
            </h4>
            <p style={{ color: '#94a3b8' }}>
              Platforma de încredere pentru calculul sarcinii și pensiilor în România
            </p>
          </div>
          <div style={{ 
            paddingTop: '2rem', 
            borderTop: '1px solid #334155',
            color: '#94a3b8',
            fontSize: '0.875rem'
          }}>
            © 2025 Calculator Sarcină România. Toate drepturile rezervate.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WorkingApp />
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
