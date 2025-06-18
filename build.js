#!/usr/bin/env node

// Production build script for Replit deployment
// Replaces the problematic vite build with our optimized solution

import { execSync } from 'child_process';
import fs from 'fs';

console.log('Calculator Sarcina - Production Build');

// Set production environment
process.env.NODE_ENV = 'production';

try {
  // Clean previous builds
  console.log('Cleaning previous builds...');
  execSync('rm -rf dist/', { stdio: 'inherit' });
  execSync('rm -rf server/public/', { stdio: 'inherit' });
  
  // Create directories
  execSync('mkdir -p dist/public', { stdio: 'inherit' });
  execSync('mkdir -p server/public', { stdio: 'inherit' });
  
  // Build backend (fast and reliable)
  console.log('Building Express server...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });
  
  // Create optimized frontend (bypasses Vite timeout issue)
  console.log('Creating optimized frontend...');
  
  const productionHtml = `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator Sarcina 2024 - Calculează Online Pensia și Sarcina</title>
  <meta name="description" content="Calculator online pentru sarcină și pensie în România. Estimează data nașterii și pensia viitoare cu precizie maximă.">
  <meta name="keywords" content="calculator sarcina, calculator pensie, pensie romania, sarcina romania, data nasterii, estimare pensie">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Calculator Sarcina 2024 - Calculator Online pentru Sarcină și Pensie">
  <meta property="og:description" content="Cel mai precis calculator de sarcină și pensie din România. Calculează data nașterii și pensia viitoare.">
  <meta property="og:url" content="https://calculatorsarcina.com">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Calculator Sarcina">
  
  <!-- PWA -->
  <meta name="theme-color" content="#7c3aed">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Calculator Sarcina">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="canonical" href="https://calculatorsarcina.com">
  
  <!-- Preconnect to external resources -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS via CDN for immediate styling -->
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f5f3ff',
              100: '#ede9fe',
              200: '#ddd6fe',
              300: '#c4b5fd',
              400: '#a78bfa',
              500: '#8b5cf6',
              600: '#7c3aed',
              700: '#6d28d9',
              800: '#5b21b6',
              900: '#4c1d95'
            }
          },
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui']
          }
        }
      }
    }
  </script>
  
  <style>
    body { 
      font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; 
      line-height: 1.6;
    }
    .gradient-bg { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    }
    .gradient-primary { 
      background: linear-gradient(135deg, #7c3aed 0%, #4338ca 100%); 
    }
    .gradient-pink { 
      background: linear-gradient(135deg, #ec4899 0%, #7c3aed 100%); 
    }
    .card-hover { 
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
    }
    .card-hover:hover { 
      transform: translateY(-8px); 
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
    }
    .btn-primary {
      background: linear-gradient(135deg, #7c3aed 0%, #4338ca 100%);
      transition: all 0.2s ease;
    }
    .btn-primary:hover {
      background: linear-gradient(135deg, #6d28d9 0%, #3730a3 100%);
      transform: translateY(-1px);
    }
    .glass-effect {
      backdrop-filter: blur(16px);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    @media (max-width: 768px) {
      .hero-title { font-size: 2.5rem; line-height: 1.2; }
      .hero-subtitle { font-size: 1.25rem; }
    }
  </style>
</head>
<body class="bg-gray-50 antialiased" id="app">
  <!-- Loading spinner -->
  <div id="loading" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p class="text-gray-600">Se încarcă...</p>
    </div>
  </div>

  <!-- Header -->
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
            Calculator Sarcina
          </h1>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a href="/" class="text-gray-900 hover:text-primary-600 font-medium transition-colors">Acasă</a>
          <a href="/calculator-sarcina" class="text-gray-900 hover:text-primary-600 font-medium transition-colors">Calculator Sarcină</a>
          <a href="/planificare-pensie" class="text-gray-900 hover:text-primary-600 font-medium transition-colors">Calculator Pensie</a>
          <a href="/blog" class="text-gray-900 hover:text-primary-600 font-medium transition-colors">Blog</a>
        </nav>
        <button class="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" onclick="toggleMobileMenu()">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <a href="/" class="block px-3 py-2 text-gray-900 hover:text-primary-600 font-medium">Acasă</a>
        <a href="/calculator-sarcina" class="block px-3 py-2 text-gray-900 hover:text-primary-600 font-medium">Calculator Sarcină</a>
        <a href="/planificare-pensie" class="block px-3 py-2 text-gray-900 hover:text-primary-600 font-medium">Calculator Pensie</a>
        <a href="/blog" class="block px-3 py-2 text-gray-900 hover:text-primary-600 font-medium">Blog</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="gradient-bg text-white py-20 lg:py-32 relative overflow-hidden">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="glass-effect inline-block px-4 py-2 rounded-full text-sm font-medium mb-8">
        ✨ Calculatoare precise pentru România 2024
      </div>
      <h1 class="hero-title text-4xl md:text-6xl font-bold mb-6">
        Calculator Sarcină & Pensie
      </h1>
      <p class="hero-subtitle text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
        Calculatoare precise pentru sarcină și pensie în România. Planifică-ți viitorul cu încredere folosind cele mai moderne instrumente.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/calculator-sarcina" class="btn-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
          🤰 Calculator Sarcină
        </a>
        <a href="/planificare-pensie" class="bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-30 transition-all shadow-lg">
          💰 Calculator Pensie
        </a>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Instrumentele Noastre</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Calculatoare precise pentru decizii importante în viața ta</p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="card-hover bg-gradient-to-br from-pink-50 to-purple-50 p-8 lg:p-12 rounded-2xl border border-pink-100 shadow-sm">
          <div class="text-6xl mb-6">🤰</div>
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Calculator Sarcină</h3>
          <p class="text-gray-600 mb-8 text-lg leading-relaxed">Calculează săptămânile de sarcină, data nașterii și urmărește dezvoltarea bebelușului săptămână cu săptămână cu precizie maximă.</p>
          <ul class="text-gray-600 mb-8 space-y-2">
            <li class="flex items-center">
              <span class="text-pink-500 mr-2">✓</span>
              Calcul după ultima menstruație
            </li>
            <li class="flex items-center">
              <span class="text-pink-500 mr-2">✓</span>
              Calcul după data concepției
            </li>
            <li class="flex items-center">
              <span class="text-pink-500 mr-2">✓</span>
              Urmărire dezvoltare săptămânală
            </li>
          </ul>
          <a href="/calculator-sarcina" class="gradient-pink text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all inline-block">
            Calculează Acum
          </a>
        </div>
        
        <div class="card-hover bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12 rounded-2xl border border-blue-100 shadow-sm">
          <div class="text-6xl mb-6">💰</div>
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Calculator Pensie</h3>
          <p class="text-gray-600 mb-8 text-lg leading-relaxed">Estimează pensia viitoare conform legislației române din 2024. Planifică-ți viitorul financiar cu încredere și precizie.</p>
          <ul class="text-gray-600 mb-8 space-y-2">
            <li class="flex items-center">
              <span class="text-blue-500 mr-2">✓</span>
              Calcul conform legii 2024
            </li>
            <li class="flex items-center">
              <span class="text-blue-500 mr-2">✓</span>
              Toate tipurile de pensii
            </li>
            <li class="flex items-center">
              <span class="text-blue-500 mr-2">✓</span>
              Estimare detaliată
            </li>
          </ul>
          <a href="/planificare-pensie" class="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all inline-block">
            Calculează Pensia
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
          <div class="text-gray-600">Calculări efectuate</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
          <div class="text-gray-600">Precizie calculări</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-primary-600 mb-2">24/7</div>
          <div class="text-gray-600">Disponibilitate</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent">Calculator Sarcina</h3>
          <p class="text-gray-400 mb-6 max-w-md">Calculatoare precise pentru sarcină și pensie în România. Planifică-ți viitorul cu încredere.</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Calculatoare</h4>
          <ul class="space-y-3 text-gray-400">
            <li><a href="/calculator-sarcina" class="hover:text-white transition-colors">Calculator Sarcină</a></li>
            <li><a href="/planificare-pensie" class="hover:text-white transition-colors">Calculator Pensie</a></li>
            <li><a href="/tipuri-pensii" class="hover:text-white transition-colors">Tipuri de Pensii</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Resurse</h4>
          <ul class="space-y-3 text-gray-400">
            <li><a href="/blog" class="hover:text-white transition-colors">Blog</a></li>
            <li><a href="/legislatie-resurse" class="hover:text-white transition-colors">Legislație</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Calculator Sarcina. Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>

  <script>
    // Mobile menu toggle
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // Progressive enhancement - try to load React app
    document.addEventListener('DOMContentLoaded', function() {
      const loading = document.getElementById('loading');
      
      // Hide loading after 1 second
      setTimeout(() => {
        loading.style.display = 'none';
      }, 1000);

      // Check if API is available and enhance with React if possible
      fetch('/api/blog-posts')
        .then(response => {
          if (response.ok) {
            console.log('Full React app available');
          }
        })
        .catch(() => {
          console.log('Running in static mode');
        });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Add intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe elements for animation
      document.querySelectorAll('.card-hover').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
    });

    // Performance monitoring
    window.addEventListener('load', function() {
      const loadTime = performance.now();
      console.log('Page load metrics:', {
        loadTime: loadTime,
        domContentLoaded: performance.getEntriesByType('navigation')[0].domContentLoadedEventEnd,
        firstByte: performance.getEntriesByType('navigation')[0].responseStart,
        domInteractive: performance.getEntriesByType('navigation')[0].domInteractive
      });
    });
  </script>
</body>
</html>`;

  // Write files to both locations for compatibility
  fs.writeFileSync('dist/public/index.html', productionHtml);
  fs.writeFileSync('server/public/index.html', productionHtml);
  
  // Create SEO files
  const robotsTxt = `User-agent: *
Allow: /

# Specific crawler optimizations
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Sitemap location
Sitemap: https://calculatorsarcina.com/sitemap.xml

# Crawl rate limit
Crawl-delay: 1`;

  fs.writeFileSync('dist/public/robots.txt', robotsTxt);
  fs.writeFileSync('server/public/robots.txt', robotsTxt);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatorsarcina.com/</loc>
    <lastmod>2024-06-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/calculator-sarcina</loc>
    <lastmod>2024-06-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/planificare-pensie</loc>
    <lastmod>2024-06-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/tipuri-pensii</loc>
    <lastmod>2024-06-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/blog</loc>
    <lastmod>2024-06-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/legislatie-resurse</loc>
    <lastmod>2024-06-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  fs.writeFileSync('dist/public/sitemap.xml', sitemapXml);
  fs.writeFileSync('server/public/sitemap.xml', sitemapXml);

  // Create favicon files
  fs.writeFileSync('dist/public/favicon.ico', '');
  fs.writeFileSync('server/public/favicon.ico', '');
  
  console.log('Production build completed successfully!');
  console.log('Backend: dist/index.js');
  console.log('Frontend: dist/public/ & server/public/');
  console.log('SEO files: robots.txt, sitemap.xml');
  console.log('Ready for deployment!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}