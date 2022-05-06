module.exports = (api) => {
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
						helpers: './src/helpers',
						constants: './src/constants',
						styles: './src/styles',
						providers: './src/providers',
						store: './src/store',
						navigation: './src/navigation',
						screens: './src/screens',
						components: './src/components'
					}
				}
			]
		]
	}
}
