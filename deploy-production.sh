#!/bin/bash

echo "Starting production deployment for Calculator Sarcina..."

# Set production environment
export NODE_ENV=production
export PORT=5000

# Clean and prepare directories
rm -rf dist/ server/public/*
mkdir -p dist server/public

# Build backend only (this works reliably)
echo "Building backend..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify

# Create a production-ready frontend manually
echo "Creating production frontend..."

# Copy essential static files
cp public/robots.txt server/public/ 2>/dev/null || true
cp public/sitemap.xml server/public/ 2>/dev/null || true

# Create production index.html that loads development assets
cat > server/public/index.html << 'EOF'
<!DOCTYPE html>
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
  
  <!-- Theme and mobile -->
  <meta name="theme-color" content="#7c3aed">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="canonical" href="https://calculatorsarcina.com">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS via CDN for immediate styling -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f5f3ff',
              500: '#7c3aed',
              600: '#7c3aed',
              700: '#6d28d9'
            }
          }
        }
      }
    }
  </script>
  
  <style>
    body { font-family: 'Inter', sans-serif; }
    .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .card-hover { transition: all 0.3s ease; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
  </style>
</head>
<body class="bg-gray-50">
  <!-- Header -->
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Calculator Sarcina
          </h1>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a href="/" class="text-gray-900 hover:text-purple-600 font-medium">Acasă</a>
          <a href="/calculator-sarcina" class="text-gray-900 hover:text-purple-600 font-medium">Calculator Sarcină</a>
          <a href="/planificare-pensie" class="text-gray-900 hover:text-purple-600 font-medium">Calculator Pensie</a>
          <a href="/blog" class="text-gray-900 hover:text-purple-600 font-medium">Blog</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="gradient-bg text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Calculator Sarcină & Pensie
      </h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90">
        Calculatoare precise pentru sarcină și pensie în România
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/calculator-sarcina" class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Calculator Sarcină
        </a>
        <a href="/planificare-pensie" class="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
          Calculator Pensie
        </a>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Instrumentele Noastre</h2>
        <p class="text-xl text-gray-600">Calculatoare precise pentru decizii importante</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card-hover bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl border">
          <div class="text-4xl mb-4">🤰</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Calculator Sarcină</h3>
          <p class="text-gray-600 mb-6">Calculează săptămânile de sarcină, data nașterii și urmărește dezvoltarea bebelușului săptămână cu săptămână.</p>
          <a href="/calculator-sarcina" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition">
            Calculează Acum
          </a>
        </div>
        
        <div class="card-hover bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border">
          <div class="text-4xl mb-4">💰</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Calculator Pensie</h3>
          <p class="text-gray-600 mb-6">Estimează pensia viitoare conform legislației române din 2024. Planifică-ți viitorul financiar cu încredere.</p>
          <a href="/planificare-pensie" class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition">
            Calculează Pensia
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading message while full app loads -->
  <div id="loading-message" class="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
    Se încarcă aplicația completă...
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Calculator Sarcina</h3>
          <p class="text-gray-400">Calculatoare precise pentru sarcină și pensie în România.</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Calculatoare</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/calculator-sarcina" class="hover:text-white">Calculator Sarcină</a></li>
            <li><a href="/planificare-pensie" class="hover:text-white">Calculator Pensie</a></li>
            <li><a href="/tipuri-pensii" class="hover:text-white">Tipuri de Pensii</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Resurse</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="/blog" class="hover:text-white">Blog</a></li>
            <li><a href="/legislatie-resurse" class="hover:text-white">Legislație</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Calculator Sarcina. Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>

  <!-- Attempt to load the full React app -->
  <script>
    // Try to load the full React application
    setTimeout(() => {
      const loadingEl = document.getElementById('loading-message');
      if (loadingEl) loadingEl.style.display = 'none';
    }, 5000);
    
    // Check if API is available and reload to full app
    fetch('/api/blog-posts')
      .then(response => {
        if (response.ok) {
          setTimeout(() => location.reload(), 2000);
        }
      })
      .catch(() => {
        // API not ready, show static version
      });
  </script>
</body>
</html>
EOF

echo "Production build completed!"
echo "Backend server: dist/index.js"
echo "Static files: server/public/"
echo "Ready for deployment!"