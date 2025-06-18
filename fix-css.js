const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔧 Fixing CSS loading issue...');

// Force rebuild Tailwind CSS
try {
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('🎨 Building Tailwind CSS...');
  execSync('npx tailwindcss -i ./client/src/index.css -o ./client/src/compiled.css --minify', { stdio: 'inherit' });
  
  // Create a working CSS file with embedded styles
  const workingCSS = `
/* Tailwind CSS Base Styles */
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
::before,::after{--tw-content:''}
html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}
body{margin:0;line-height:inherit}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
a{color:inherit;text-decoration:inherit}
button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
button,select{text-transform:none}
button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}

/* Professional Color Scheme */
:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(224, 71%, 4%);
  --primary: hsl(262, 83%, 58%);
  --primary-foreground: hsl(210, 40%, 98%);
  --border: hsl(220, 13%, 91%);
  --input: hsl(220, 13%, 91%);
  --ring: hsl(262, 83%, 58%);
}

/* Essential Utility Classes */
.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-1 { flex: 1 1 0%; }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
.from-purple-600 { --tw-gradient-from: #9333ea; --tw-gradient-to: rgb(147 51 234 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-indigo-600 { --tw-gradient-to: #4f46e5; }
.text-white { color: rgb(255 255 255); }
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.text-center { text-align: center; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.font-bold { font-weight: 700; }
.mb-4 { margin-bottom: 1rem; }
.max-w-4xl { max-width: 56rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.bg-white { background-color: rgb(255 255 255); }
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
.rounded-lg { border-radius: 0.5rem; }
.p-6 { padding: 1.5rem; }
.space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
.w-full { width: 100%; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.border { border-width: 1px; }
.border-gray-300 { border-color: rgb(209 213 219); }
.rounded-md { border-radius: 0.375rem; }
.bg-indigo-600 { background-color: rgb(79 70 229); }
.hover\\:bg-indigo-700:hover { background-color: rgb(67 56 202); }
.text-white { color: rgb(255 255 255); }
.font-medium { font-weight: 500; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.cursor-pointer { cursor: pointer; }
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.hidden { display: none; }
.mt-6 { margin-top: 1.5rem; }
.bg-gray-50 { background-color: rgb(249 250 251); }
.text-gray-900 { color: rgb(17 24 39); }
.text-gray-600 { color: rgb(75 85 99); }
  `;
  
  // Write the working CSS file
  fs.writeFileSync('./client/src/working.css', workingCSS);
  
  console.log('✅ CSS fix completed!');
  console.log('📁 Created working.css with essential styles');
  
} catch (error) {
  console.error('❌ Error fixing CSS:', error.message);
}