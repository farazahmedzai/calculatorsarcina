import { createRoot } from "react-dom/client";

function TestApp() {
  return (
    <div style={{ padding: '20px', fontSize: '24px' }}>
      <h1>Test App Working</h1>
      <p>If you see this, React is rendering correctly.</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<TestApp />);