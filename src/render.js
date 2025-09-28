import fs from 'fs';
import svelteToHtml from 'svelte-to-html';
import Page from './src/routes/+page.svelte'; // your page component

// Render component
const bodyHtml = svelteToHtml(Page, { name: 'Dennis' });

// Read your app.html template
let template = fs.readFileSync('src/app.html', 'utf-8');

// Replace %sveltekit.body% with rendered HTML
template = template.replace('%sveltekit.body%', bodyHtml);

// Optionally replace %sveltekit.head% with extra <head> content
template = template.replace('%sveltekit.head%', `<title>My Static Page</title>`);

// Write static file
fs.writeFileSync('dist/index.html', template);

console.log('Static HTML generated at dist/index.html');
