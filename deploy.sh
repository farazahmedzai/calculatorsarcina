#!/bin/bash

# Calculator Sarcina - Production Deployment Script
# This script ensures proper deployment without Vite timeout issues

echo "Starting Calculator Sarcina deployment..."

# Set production environment
export NODE_ENV=production

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf dist/
rm -rf server/public/

# Run the optimized build process
echo "Running optimized build process..."
node build-deploy.js

# Verify build completed successfully
if [ ! -f "dist/index.js" ]; then
    echo "❌ Build failed: dist/index.js not found"
    exit 1
fi

if [ ! -f "server/public/index.html" ]; then
    echo "❌ Build failed: server/public/index.html not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Backend: dist/index.js"
echo "🌐 Frontend: server/public/index.html"
echo "🤖 SEO files: robots.txt, sitemap.xml"
echo "🚀 Ready for production deployment!"

# Start production server (optional - for testing)
if [ "$1" = "start" ]; then
    echo "Starting production server..."
    NODE_ENV=production node dist/index.js
fi