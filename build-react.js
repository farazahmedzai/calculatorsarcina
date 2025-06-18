#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building React application with optimizations...');

// Set production environment
process.env.NODE_ENV = 'production';

try {
  // Clean previous builds
  execSync('rm -rf dist/', { stdio: 'inherit' });
  
  // Create directories
  execSync('mkdir -p dist/public', { stdio: 'inherit' });
  
  // Use production Vite config with optimizations
  console.log('Building frontend with Vite (optimized)...');
  execSync('npx vite build --config vite.config.prod.ts', { 
    stdio: 'inherit',
    timeout: 300000 // 5 minutes timeout
  });
  
  // Build backend
  console.log('Building backend...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });
  
  // Copy essential files if they don't exist
  const publicDir = 'public';
  if (fs.existsSync(publicDir)) {
    const files = ['robots.txt', 'sitemap.xml', 'manifest.json'];
    files.forEach(file => {
      const srcPath = path.join(publicDir, file);
      const destPath = path.join('dist/public', file);
      if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
  
  console.log('✅ React build completed successfully!');
  console.log('📁 Backend: dist/index.js');
  console.log('🌐 Frontend: dist/public/');
  console.log('🚀 Ready for deployment!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}