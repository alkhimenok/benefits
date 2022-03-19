import * as Font from 'expo-font'
import { WIDTH_RATIO } from './constants'

const loadFonts = () => {
	return Font.loadAsync({
		primaryRegular: require('assets/fonts/SFUIDisplay-Regular.ttf'),
		primaryMedium: require('assets/fonts/SFUIDisplay-Medium.ttf'),
		primarySemiBold: require('assets/fonts/SFUIDisplay-Semibold.ttf'),
		primaryBold: require('assets/fonts/SFUIDisplay-Bold.ttf'),
		primaryBlack: require('assets/fonts/SFUIDisplay-Black.ttf')
	})
}

const sizeInProportion = (width, height, isPX = false) => {
	const aspectRatio = width / height
	const currentWidth = width * WIDTH_RATIO
	const currentHeight = currentWidth / aspectRatio

	return {
		width: currentWidth + (isPX && 'px'),
		height: currentHeight + (isPX && 'px')
	}
}

export { loadFonts, sizeInProportion }
