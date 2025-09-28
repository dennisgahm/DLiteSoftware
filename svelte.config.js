import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';  // <-- make sure this is here

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),   // <-- this line
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
	fallback: 'index.html',
	strict: false
    })
  }
};

export default config;
