module.exports = function (api) {
	api.cache(true)

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				require.resolve('babel-plugin-module-resolver'),
				{
					root: ['./src/'],
					alias: {
						database: './database.json',
						src: './src',
						assets: './src/assets',
						styles: './src/styles',
						helpers: './src/helpers',
						providers: './src/providers',
						store: './src/store',
						navigation: './src/navigation',
						screens: './src/screens',
						components: './src/components',
						common: './src/components/common',
						UI: './src/components/UI',
						animation: './src/components/animations'
					}
				}
			]
		]
	}
}
