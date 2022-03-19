import { UNITS_PX } from 'styles/units'
import FONTS from 'styles/fonts'
import WEIGHT from 'styles/weight'

const getTextOptions = (variation, fontWeight) => {
	const fontFamily = {
		[WEIGHT.regular]: FONTS.primaryRegular,
		[WEIGHT.medium]: FONTS.primaryMedium,
		[WEIGHT.semiBold]: FONTS.primarySemiBold,
		[WEIGHT.bold]: FONTS.primaryBold,
		[WEIGHT.black]: FONTS.primaryBlack
	}[fontWeight]

	const { fontSize, lineHeight } = {
		h1: { fontSize: UNITS_PX.baseX7, lineHeight: UNITS_PX.baseX7 },
		h2: { fontSize: UNITS_PX.baseX5, lineHeight: UNITS_PX.baseX6 },
		h3: { fontSize: UNITS_PX.baseX4, lineHeight: UNITS_PX.baseX5 },
		text1: { fontSize: UNITS_PX.baseX4, lineHeight: UNITS_PX.baseX5 },
		text2: { fontSize: UNITS_PX.baseX3_5, lineHeight: UNITS_PX.baseX5 },
		text3: { fontSize: UNITS_PX.baseX3, lineHeight: UNITS_PX.baseX4 }
	}[variation]

	return { fontFamily, fontSize, lineHeight }
}

export { getTextOptions }
