#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('Fast React build for deployment...');

process.env.NODE_ENV = 'production';

try {
  // Clean directories
  execSync('rm -rf dist/', { stdio: 'inherit' });
  execSync('mkdir -p dist/public', { stdio: 'inherit' });
  
  // Build backend server (fast)
  console.log('Building server...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });
  
  // Use minimal Vite config for faster build
  console.log('Building React app...');
  execSync('npx vite build --config vite.config.minimal.ts', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Copy static files
  if (fs.existsSync('public')) {
    execSync('cp -r public/* dist/public/ 2>/dev/null || true', { stdio: 'inherit' });
  }
  
  console.log('Fast build completed!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}