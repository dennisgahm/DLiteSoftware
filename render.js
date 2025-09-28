import fs from 'fs';
import svelte from 'svelte/compiler';
import svelteToHtml from 'svelte-to-html';

const source = fs.readFileSync('./src/routes/+page.svelte', 'utf-8');

// Compile the Svelte component to JS
const { js } = svelte.compile(source, { generate: 'ssr' });

// Dynamically evaluate the compiled code
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { default: Component } = eval(js.code + '\nexport default Component;');

// Render to HTML
const html = svelteToHtml(Component);
fs.writeFileSync('dist/index.html', html);
