import { UNITS_PX } from 'styles/units'
import BORDERS from 'styles/borders'

const getIconOptions = (variation, isCircle) => {
	const { touchWidth, touchHeight } = {
		large: { touchWidth: UNITS_PX.baseX12, touchHeight: UNITS_PX.baseX12 },
		middle: { touchWidth: UNITS_PX.baseX10, touchHeight: UNITS_PX.baseX10 },
		small: { touchWidth: UNITS_PX.baseX8, touchHeight: UNITS_PX.baseX8 },
		empty: { touchWidth: 'auto', touchHeight: 'auto' }
	}[variation]

	const borderRadius =
		(variation === 'empty' && '0') ||
		(isCircle ? BORDERS.radiusCircle : BORDERS.radiusSuperellipse)

	return { touchWidth, touchHeight, borderRadius }
}

export { getIconOptions }
