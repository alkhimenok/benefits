import UNITS from 'styles/units'

const getLabelOptions = (isLarge, isContainsIcon) => {
	return {
		height:
			(isLarge && UNITS.baseX10) ||
			(isContainsIcon && UNITS.baseX8) ||
			UNITS.baseX6,
		paddingHorizontal: (isLarge && UNITS.baseX4) || UNITS.baseX2
	}
}

export { getLabelOptions }
