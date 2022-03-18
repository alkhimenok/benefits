import UNITS from 'styles/units'
import BORDERS from 'styles/borders'

const getIconOptions = (variation, isCircle) => {
	const { touchWidth, touchHeight } = {
		large: { touchWidth: UNITS.baseX12, touchHeight: UNITS.baseX12 },
		middle: { touchWidth: UNITS.baseX10, touchHeight: UNITS.baseX10 },
		small: { touchWidth: UNITS.baseX8, touchHeight: UNITS.baseX8 },
		empty: { touchWidth: 'auto', touchHeight: 'auto' }
	}[variation]

	const borderRadius =
		(variation === 'empty' && '0') ||
		(isCircle ? BORDERS.radiusCircle : BORDERS.radiusSuperellipse)

	return { touchWidth, touchHeight, borderRadius }
}

export { getIconOptions }
