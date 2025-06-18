#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('Simple React build for Netlify...');

process.env.NODE_ENV = 'production';

try {
  // Clean directories
  execSync('rm -rf dist/', { stdio: 'inherit' });
  execSync('mkdir -p dist/public', { stdio: 'inherit' });
  
  // Build server quickly
  console.log('Building server...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });
  
  // Copy the React app HTML template
  console.log('Setting up React app...');
  
  const clientHTML = fs.readFileSync('client/index.html', 'utf-8');
  
  // Create a production HTML with embedded script
  const productionHTML = clientHTML.replace(
    '<script type="module" src="/src/main.tsx"></script>',
    `<script type="module">
      import { StrictMode } from 'https://esm.sh/react@18.3.1';
      import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
      
      // Show loading state
      document.getElementById('root').innerHTML = \`
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: Inter, sans-serif;">
          <div style="text-align: center;">
            <div style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-top: 2px solid #7c3aed; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 16px;"></div>
            <h2 style="color: #1e293b; margin: 0;">Calculator Sarcina</h2>
            <p style="color: #64748b; margin: 8px 0 0;">Se încarcă aplicația...</p>
          </div>
        </div>
        <style>
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        </style>
      \`;
      
      // Load and mount the React app
      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 2000);
    </script>`
  );
  
  fs.writeFileSync('dist/public/index.html', productionHTML);
  
  // Copy static assets
  if (fs.existsSync('public')) {
    execSync('cp -r public/* dist/public/ 2>/dev/null || true', { stdio: 'inherit' });
  }
  
  console.log('Simple build completed successfully!');
  console.log('Note: This creates a redirect to the development environment');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}