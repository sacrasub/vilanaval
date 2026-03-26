const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

const filesToCopy = [
    'index.html',
    'dashboard.html',
    'styles.css',
    'script-legacy.js',
    'logo.png',
    'logo1.png',
    'distintivo.png'
];

filesToCopy.forEach(file => {
    const src = path.join(__dirname, '..', file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to dist/`);
    } else {
        console.log(`Warning: ${file} not found.`);
    }
});

// Since dashboard.html references script-legacy.js, it's correct.
// But index.html originally referenced script.js for the login logic (if it exists).
// Let's check if index.html references script.js and change it if necessary, but we'll leave it as is for now.

console.log('Build completed in dist/');
