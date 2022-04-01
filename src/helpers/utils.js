import * as Font from 'expo-font'
import { WIDTH_RATIO, fontSourceList } from './constants'

const loadFonts = () => {
	return Font.loadAsync(fontSourceList)
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
