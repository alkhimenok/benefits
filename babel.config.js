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
						src: './src',
						assets: './src/assets',
						constants: './src/constants',
						utils: './src/utils',
						components: './src/components',
						screens: './src/screens',
						navigation: './src/navigation',
						database: './src/database.json'
					}
				}
			]
		]
	}
}
