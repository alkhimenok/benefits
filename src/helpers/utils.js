import * as Font from 'expo-font'
import { RATIO, SAFE_AREA, fontSourceList } from './constants'

const loadFonts = () => {
	return Font.loadAsync(fontSourceList)
}

const sizeInProportion = (width, height, makeFull = false, isPX = false) => {
	const aspectRatio = width / height
	const currentWidth = makeFull ? SAFE_AREA : width * RATIO
	const currentHeight = currentWidth / aspectRatio

	return {
		width: Math.round(currentWidth) + (isPX && 'px'),
		height: Math.round(currentHeight) + (isPX && 'px')
	}
}

export { loadFonts, sizeInProportion }
