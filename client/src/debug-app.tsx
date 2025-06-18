import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

function SimpleHome() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: 'black', fontSize: '32px', marginBottom: '20px' }}>
        Calculator Sarcină - Homepage
      </h1>
      <p style={{ color: 'black', fontSize: '18px', marginBottom: '20px' }}>
        This is a test to see if the basic structure works.
      </p>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ color: 'black' }}>Calculator Sarcină</h2>
        <p style={{ color: 'black' }}>Test content for pregnancy calculator</p>
      </div>
      <div style={{ backgroundColor: '#e0e0e0', padding: '20px' }}>
        <h2 style={{ color: 'black' }}>Calculator Pensie</h2>
        <p style={{ color: 'black' }}>Test content for pension calculator</p>
      </div>
    </div>
  );
}

function SimpleRouter() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <header style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
        <h1 style={{ color: 'black', margin: 0 }}>Debug Header</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <Switch>
          <Route path="/" component={SimpleHome} />
          <Route>
            <div style={{ color: 'black' }}>Page not found</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

function DebugApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <SimpleRouter />
    </QueryClientProvider>
  );
}

export default DebugApp;