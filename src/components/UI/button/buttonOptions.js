import UNITS from 'styles/units'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'
import TRANSPARENCY from 'styles/transparency'

const getButtonOptions = (variation, type, isDisable) => {
	const variationOptions = {
		large: {
			height: UNITS.baseX12,
			paddingHorizontal: UNITS.baseX4,
			iconWidth: '19px',
			iconHeight: '19px',
			textVariation: 'text1',
			fontWeight: WEIGHT.medium
		},
		middle: {
			height: UNITS.baseX10,
			paddingHorizontal: UNITS.baseX3,
			iconWidth: '16px',
			iconHeight: '16px',
			textVariation: 'text2',
			fontWeight: WEIGHT.semiBold
		},
		small: {
			height: UNITS.baseX8,
			paddingHorizontal: UNITS.baseX3,
			iconWidth: '15px',
			iconHeight: '15px',
			textVariation: 'text2',
			fontWeight: WEIGHT.semiBold
		}
	}[variation]

	const typeOptions = {
		primary: {
			color: COLORS.light,
			backgroundColor: COLORS.primary,
			border: 'none'
		},
		secondary: {
			color: COLORS.light,
			backgroundColor: COLORS.secondary,
			border: 'none'
		},
		contour: {
			color: COLORS.dark,
			backgroundColor: COLORS.light,
			border: `${BORDERS.thin} ${COLORS.neutralDark}`
		},
		default: {
			color: COLORS.dark,
			backgroundColor: COLORS.neutral,
			border: 'none'
		},
		empty: {
			color: COLORS.primary,
			backgroundColor: COLORS.transparent,
			border: 'none'
		}
	}[type]

	const opacity = isDisable ? TRANSPARENCY.strong : TRANSPARENCY.visible

	return { ...variationOptions, ...typeOptions, opacity }
}

export { getButtonOptions }
