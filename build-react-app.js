#!/usr/bin/env node

// Build script for React application deployment
import { execSync } from 'child_process';
import fs from 'fs';

console.log('Building React application for production...');

// Set production environment
process.env.NODE_ENV = 'production';

try {
  // Clean and create directories
  execSync('rm -rf dist/', { stdio: 'inherit' });
  execSync('mkdir -p dist/public', { stdio: 'inherit' });
  
  // Build React frontend with optimized Vite config
  console.log('Building React frontend...');
  execSync('npx vite build --config vite.config.prod.ts', { 
    stdio: 'inherit' 
  });
  
  // Build backend server
  console.log('Building Express server...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });
  
  // Copy static assets
  console.log('Copying static assets...');
  if (fs.existsSync('public')) {
    execSync('cp -r public/* dist/public/ 2>/dev/null || true', { stdio: 'inherit' });
  }
  
  console.log('Build completed successfully!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}