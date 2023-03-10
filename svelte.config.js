import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		alias: { '@palette/*': './node_modules/@untemps/svelte-palette/src/components/*' },
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			precompress: true,
			fallback: 'index.html',
			path: '',
			strict: true
		}),
		paths: {
			base: dev ? '' : '/cheesecake-by-mona',
			assets: 'https://martin-havala.github.io/cheesecake-by-mona'
		},
		files: {
			assets: 'static'
		},
		appDir: 'app'
	}
};

export default config;
