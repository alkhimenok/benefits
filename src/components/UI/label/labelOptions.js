import { UNITS_PX } from 'styles/units'

const getLabelOptions = (isLarge, isContainsIcon) => {
	return {
		height:
			(isLarge && UNITS_PX.baseX10) ||
			(isContainsIcon && UNITS_PX.baseX8) ||
			UNITS_PX.baseX6,
		paddingHorizontal: (isLarge && UNITS_PX.baseX4) || UNITS_PX.baseX2
	}
}

export { getLabelOptions }
