import * as Font from 'expo-font'

const loadFonts = () => {
	return Font.loadAsync({
		primaryRegular: require('assets/fonts/SFUIDisplay-Regular.ttf'),
		primaryMedium: require('assets/fonts/SFUIDisplay-Medium.ttf'),
		primarySemiBold: require('assets/fonts/SFUIDisplay-Semibold.ttf'),
		primaryBold: require('assets/fonts/SFUIDisplay-Bold.ttf'),
		primaryBlack: require('assets/fonts/SFUIDisplay-Black.ttf')
	})
}

export { loadFonts }
