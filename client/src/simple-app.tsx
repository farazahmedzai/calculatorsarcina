import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

// Simple working components without complex wrappers
function SimpleHeader() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: 0, color: '#212529', fontSize: '1.5rem' }}>
          Calculator Sarcină România
        </h1>
      </div>
    </header>
  );
}

function SimpleHome() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#212529', marginBottom: '1rem' }}>
          Calculator Sarcină și Pensie România
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#6c757d', marginBottom: '2rem' }}>
          Calculează data nașterii și pensia viitoare conform legislației românești
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/calculator-sarcina" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#7c3aed',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: '600'
          }}>
            Calculator Sarcină
          </a>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Calculator Pensie
          </button>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem', border: '1px solid #dee2e6' }}>
          <h3 style={{ color: '#212529', marginBottom: '1rem' }}>Calculator Sarcină</h3>
          <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
            Calculează data nașterii, săptămâna de sarcină și etapele importante
          </p>
          <ul style={{ color: '#6c757d', margin: 0, paddingLeft: '1.5rem' }}>
            <li>Data ultimei menstruații (DUM)</li>
            <li>Data concepției</li>
            <li>Calcul pe baza ecografiei</li>
          </ul>
        </div>

        <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem', border: '1px solid #dee2e6' }}>
          <h3 style={{ color: '#212529', marginBottom: '1rem' }}>Calculator Pensie</h3>
          <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
            Calculează pensia viitoare conform legislației românești 2025
          </p>
          <ul style={{ color: '#6c757d', margin: 0, paddingLeft: '1.5rem' }}>
            <li>Toate tipurile de pensii</li>
            <li>Calculul contribuțiilor</li>
            <li>Estimarea precisă</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function SimpleFooter() {
  return (
    <footer style={{ backgroundColor: '#212529', color: 'white', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h4 style={{ marginBottom: '1rem' }}>Calculator Sarcină România</h4>
        <p style={{ color: '#adb5bd', margin: 0 }}>
          © 2025 Calculator Sarcină. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}

function SimpleRouter() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SimpleHeader />
      <main style={{ flex: 1 }}>
        <Switch>
          <Route path="/" component={SimpleHome} />
          <Route>
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <h2>Pagina nu a fost găsită</h2>
              <a href="/" style={{ color: '#7c3aed' }}>Înapoi la pagina principală</a>
            </div>
          </Route>
        </Switch>
      </main>
      <SimpleFooter />
    </div>
  );
}

function SimpleApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <SimpleRouter />
    </QueryClientProvider>
  );
}

export default SimpleApp;