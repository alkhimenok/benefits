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
						globalStyles: './src/globalStyles',
						providers: './src/providers',
						store: './src/store',
						navigation: './src/navigation',
						screens: './src/screens',
						components: './src/components',
					}
				}
			]
		]
	}
}
