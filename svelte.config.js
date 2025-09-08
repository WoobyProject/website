import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // todo
			precompress: false,
			strict: true
		}),
		paths: {
			assets: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
			base: '',
			relative: true,
		}
	}
};

export default config;