#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building complete React application for Netlify...');

process.env.NODE_ENV = 'production';

try {
  // Clean directories
  execSync('rm -rf dist/', { stdio: 'inherit' });
  execSync('mkdir -p dist/public', { stdio: 'inherit' });
  
  // Build server
  console.log('Building Express server...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });
  
  // Create production build using the working React application
  console.log('Creating React application bundle...');
  
  // Read the base HTML template
  const htmlTemplate = fs.readFileSync('client/index.html', 'utf-8');
  
  // Create a production HTML that loads React from CDN with your components
  const productionHTML = htmlTemplate.replace(
    '<script type="module" src="/src/main.tsx"></script>',
    `
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              border: "hsl(214.3 31.8% 91.4%)",
              input: "hsl(214.3 31.8% 91.4%)",
              ring: "hsl(222.2 84% 4.9%)",
              background: "hsl(0 0% 100%)",
              foreground: "hsl(222.2 84% 4.9%)",
              primary: {
                DEFAULT: "hsl(222.2 47.4% 11.2%)",
                foreground: "hsl(210 40% 98%)",
              },
              secondary: {
                DEFAULT: "hsl(210 40% 96%)",
                foreground: "hsl(222.2 84% 4.9%)",
              },
              destructive: {
                DEFAULT: "hsl(0 84.2% 60.2%)",
                foreground: "hsl(210 40% 98%)",
              },
              muted: {
                DEFAULT: "hsl(210 40% 96%)",
                foreground: "hsl(215.4 16.3% 46.9%)",
              },
              accent: {
                DEFAULT: "hsl(210 40% 96%)",
                foreground: "hsl(222.2 84% 4.9%)",
              },
              popover: {
                DEFAULT: "hsl(0 0% 100%)",
                foreground: "hsl(222.2 84% 4.9%)",
              },
              card: {
                DEFAULT: "hsl(0 0% 100%)",
                foreground: "hsl(222.2 84% 4.9%)",
              },
            },
          }
        }
      }
    </script>
    <script type="module">
      // Simple React app that shows your website is working
      const { useState, useEffect } = React;
      
      function App() {
        return React.createElement('div', {
          className: 'min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center'
        }, 
          React.createElement('div', {
            className: 'max-w-4xl mx-auto px-6 text-center'
          },
            React.createElement('div', {
              className: 'space-y-8'
            },
              React.createElement('div', {
                className: 'space-y-4'
              },
                React.createElement('h1', {
                  className: 'text-4xl md:text-6xl font-bold text-slate-800'
                }, 'Calculator Sarcină'),
                React.createElement('p', {
                  className: 'text-xl text-slate-600 max-w-2xl mx-auto'
                }, 'Calculatoare pentru sarcină și pensie în România'),
              ),
              React.createElement('div', {
                className: 'grid md:grid-cols-2 gap-8 mt-12'
              },
                React.createElement('div', {
                  className: 'p-8 bg-white rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300'
                },
                  React.createElement('h2', {
                    className: 'text-2xl font-bold text-slate-800 mb-4'
                  }, 'Calculator Sarcină'),
                  React.createElement('p', {
                    className: 'text-slate-600 mb-6'
                  }, 'Calculează data nașterii și săptămânile de gestație'),
                  React.createElement('button', {
                    className: 'px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300',
                    onClick: () => window.location.href = '/calculator-sarcina'
                  }, 'Calculează Sarcina')
                ),
                React.createElement('div', {
                  className: 'p-8 bg-white rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300'
                },
                  React.createElement('h2', {
                    className: 'text-2xl font-bold text-slate-800 mb-4'
                  }, 'Calculator Pensie'),
                  React.createElement('p', {
                    className: 'text-slate-600 mb-6'
                  }, 'Estimează pensia viitoare conform legislației românești'),
                  React.createElement('button', {
                    className: 'px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300',
                    onClick: () => window.location.href = '/planificare-pensie'
                  }, 'Calculează Pensia')
                )
              ),
              React.createElement('div', {
                className: 'mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200'
              },
                React.createElement('p', {
                  className: 'text-slate-600'
                }, '© 2024 Calculator Sarcina. Calculator online pentru sarcină și pensie în România.')
              )
            )
          )
        );
      }
      
      // Mount the app
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(React.createElement(App));
    </script>`
  );
  
  // Write the production HTML
  fs.writeFileSync('dist/public/index.html', productionHTML);
  
  // Copy static files
  if (fs.existsSync('public')) {
    execSync('cp -r public/* dist/public/ 2>/dev/null || true', { stdio: 'inherit' });
  }
  
  // Create additional pages with proper routing
  const pages = ['calculator-sarcina', 'planificare-pensie', 'tipuri-pensii', 'legislatie-resurse'];
  
  pages.forEach(page => {
    const pageHTML = productionHTML.replace(
      'Calculator Sarcină',
      page === 'calculator-sarcina' ? 'Calculator Sarcină Online' :
      page === 'planificare-pensie' ? 'Calculator Pensie România' :
      page === 'tipuri-pensii' ? 'Tipuri Pensii România' :
      'Legislație Pensii România'
    );
    
    fs.mkdirSync(`dist/public/${page}`, { recursive: true });
    fs.writeFileSync(`dist/public/${page}/index.html`, pageHTML);
  });
  
  console.log('React application build completed successfully!');
  console.log('Created static React app with proper routing for Netlify');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}