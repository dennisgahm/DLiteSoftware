// export-vanilla.js
// Node script to export SvelteKit build as a fully vanilla HTML+JS site

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
const buildDir = path.join(__dirname, 'build');           // SvelteKit build folder
const outputDir = path.join(__dirname, 'DLiteVanilla');   // New vanilla site folder

// Helper to copy folders recursively
function copyRecursive(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(child => {
            copyRecursive(path.join(src, child), path.join(dest, child));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

// Step 1: Clear output folder
if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
}
mkdirSync(outputDir);

// Step 2: Copy all files from build to output folder
copyRecursive(buildDir, outputDir);

// Step 3: Fix paths in index.html
const indexPath = path.join(outputDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf-8');

// Replace absolute paths /_app/immutable/... with relative ./_app/immutable/...
html = html.replace(/(["'])\/_app\//g, '$1./_app/');

fs.writeFileSync(indexPath, html, 'utf-8');

console.log('✅ Vanilla site exported to:', outputDir);
console.log('Open index.html in a browser or serve it with any static server.');
