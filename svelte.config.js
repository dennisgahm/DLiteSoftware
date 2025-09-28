import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // SPA fallback for dynamic routes
      strict: false
    }),
    paths: {
      base: '/DLiteSoftware' // <-- just the repo name
    }
  }
};

export default config;
