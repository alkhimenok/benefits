import { UNITS_PX } from 'styles/units'

const getLabelOptions = (isLarge, isContainsIcon) => {
	return {
		wrapperHeight:
			(isLarge && UNITS_PX.baseX10) || (isContainsIcon && UNITS_PX.baseX8) || UNITS_PX.baseX6,
		wrapperPaddingHorizontal: (isLarge && UNITS_PX.baseX4) || UNITS_PX.baseX2
	}
}

export { getLabelOptions }
