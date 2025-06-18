#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('Netlify deployment build...');

process.env.NODE_ENV = 'production';

try {
  // Clean and prepare directories
  execSync('rm -rf dist/', { stdio: 'inherit' });
  execSync('mkdir -p dist/public', { stdio: 'inherit' });
  
  // Build Express server
  console.log('Building server...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });
  
  // Build React application with optimized settings
  console.log('Building React frontend...');
  
  const indexHtml = fs.readFileSync('client/index.html', 'utf-8');
  const optimizedHtml = indexHtml
    .replace('src="/src/main.tsx"', 'src="/assets/main.js"')
    .replace('<script type="module" src="/src/main.tsx"></script>', 
             '<script type="module" src="/assets/main.js"></script>');
  
  // Write the optimized HTML
  fs.writeFileSync('dist/public/index.html', optimizedHtml);
  
  // Create a simplified main.js that loads the React app
  const mainJs = `
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

const root = createRoot(document.getElementById('root'));
root.render(
  React.createElement(StrictMode, null,
    React.createElement(App, null)
  )
);
`;
  
  fs.mkdirSync('dist/public/assets', { recursive: true });
  fs.writeFileSync('dist/public/assets/main.js', mainJs);
  
  // Copy compiled React components
  console.log('Copying React components...');
  
  // Use SWC for faster compilation
  execSync('npx @swc/cli compile client/src --out-dir dist/public/assets --config-file .swcrc', { 
    stdio: 'inherit' 
  });
  
  // Copy static assets
  if (fs.existsSync('public')) {
    execSync('cp -r public/* dist/public/ 2>/dev/null || true', { stdio: 'inherit' });
  }
  
  console.log('Netlify build completed successfully!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  
  // Fallback to working static HTML
  console.log('Falling back to static build...');
  execSync('node build-deploy.js', { stdio: 'inherit' });
}