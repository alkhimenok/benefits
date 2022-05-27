import { UNITS_PX } from 'styles/units'
import COLORS from 'styles/colors'

const getCardOptions = (variation, isFavorites) => {
	const { top, right, bottom, left, width, height, marginTop } = {
		large: {
			top: UNITS_PX.baseX3,
			right: UNITS_PX.baseX3,
			bottom: UNITS_PX.baseX3,
			left: UNITS_PX.baseX3,
			width: 304,
			height: 170,
			marginTop: '0'
		},
		middle: {
			top: UNITS_PX.baseX1,
			right: UNITS_PX.baseX1,
			bottom: UNITS_PX.baseX2,
			left: UNITS_PX.baseX2,
			width: 225,
			height: 127,
			marginTop: UNITS_PX.baseX2
		},
		full: {
			top: UNITS_PX.baseX3,
			right: UNITS_PX.baseX3,
			bottom: UNITS_PX.baseX3,
			left: UNITS_PX.baseX3,
			width: 225,
			height: 127,
			marginTop: UNITS_PX.baseX4
		}
	}[variation]

	const color = isFavorites ? COLORS.primary : COLORS.dark

	return { top, right, bottom, left, width, height, marginTop, color }
}

export { getCardOptions }
