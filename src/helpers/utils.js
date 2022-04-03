import * as Font from 'expo-font'
import { CLIENT_WIDTH, WIDTH_RATIO, fontSourceList } from './constants'
import { UNITS } from 'styles/units'

const loadFonts = () => {
	return Font.loadAsync(fontSourceList)
}

const sizeInProportion = (width, height, isPX = false, makeFull = false) => {
	const SAFE_AREA = CLIENT_WIDTH - UNITS.baseX4 * 2
	const aspectRatio = width / height
	const currentWidth = makeFull ? SAFE_AREA : width * WIDTH_RATIO
	const currentHeight = currentWidth / aspectRatio

	return {
		width: currentWidth + (isPX && 'px'),
		height: currentHeight + (isPX && 'px')
	}
}

export { loadFonts, sizeInProportion }
