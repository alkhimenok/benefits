import { UNITS_PX } from 'styles/units'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'
import TRANSPARENCY from 'styles/transparency'

const getButtonOptions = (variation, type, isDisable) => {
	const variationOptions = {
		large: {
			wrapperHeight: UNITS_PX.baseX12,
			wrapperPaddingHorizontal: UNITS_PX.baseX4,
			iconWidth: 19,
			iconHeight: 19,
			textVariation: 'text1',
			fontWeight: WEIGHT.medium
		},
		middle: {
			wrapperHeight: UNITS_PX.baseX10,
			wrapperPaddingHorizontal: UNITS_PX.baseX3,
			iconWidth: 16,
			iconHeight: 16,
			textVariation: 'text2',
			fontWeight: WEIGHT.semiBold
		},
		small: {
			wrapperHeight: UNITS_PX.baseX8,
			wrapperPaddingHorizontal: UNITS_PX.baseX3,
			iconWidth: 15,
			iconHeight: 15,
			textVariation: 'text2',
			fontWeight: WEIGHT.semiBold
		}
	}[variation]

	const typeOptions = {
		primary: {
			color: COLORS.light,
			wrapperBackgroundColor: COLORS.primary,
			wrapperBorder: 'none'
		},
		secondary: {
			color: COLORS.light,
			wrapperBackgroundColor: COLORS.secondary,
			wrapperBorder: 'none'
		},
		contour: {
			color: COLORS.dark,
			wrapperBackgroundColor: COLORS.light,
			wrapperBorder: `${BORDERS.thin} ${COLORS.neutralDark}`
		},
		default: {
			color: COLORS.dark,
			wrapperBackgroundColor: COLORS.neutral,
			wrapperBorder: 'none'
		},
		empty: {
			color: COLORS.primary,
			wrapperBackgroundColor: COLORS.transparent,
			wrapperBorder: 'none'
		}
	}[type]

	const opacity = isDisable ? TRANSPARENCY.strong : TRANSPARENCY.visible

	return { ...variationOptions, ...typeOptions, opacity }
}

export { getButtonOptions }
