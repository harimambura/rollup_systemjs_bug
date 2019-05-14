const path = require('path');
const rollupBabel = require('rollup-plugin-babel');
const babelConfig = require('./babel.config');

module.exports = {
	input: ['main.js'],
	external: ['inferno'],
	plugins: [
		rollupBabel(babelConfig)
	],
	output: [
		{
			dir: './bundles/',
			format: 'system',
			globals: {
				'inferno': 'Inferno'
			},
			sourcemap: true
		},
	],
};
