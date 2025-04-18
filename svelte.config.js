import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null // or 'index.html' if using SPA fallback
		}),
		paths: {
			base: dev ? '' : '/vrelief'
		},
		prerender: {
			handleHttpError: 'warn', // 👈 prevents crash on 404 during build
			entries: ['*'] // 👈 prerender all reachable routes (or specify exact pages)
		}
	}
};

export default config;
