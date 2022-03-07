import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'
import BORDERS from 'globalStyles/borders'

const IconWrapper = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	border-radius: ${({ isCircle }) => isCircle ? BORDERS.radiusCircle : BORDERS.radiusSuperellipse};
	${({ backgroundColor, isOnlyIcon }) => `background-color: ${isOnlyIcon ? 'transparent' : backgroundColor};`};
	${({ isOnlyIcon, isLarge, isSmall }) => {
		let styles = ''

		if (isOnlyIcon) {
			styles += ``
		} else if (isLarge) {
			styles = `width: ${UNITS.baseX12}; height: ${UNITS.baseX12};`
		} else if (isSmall) {
			styles = `width: ${UNITS.baseX8}; height: ${UNITS.baseX8};`
		} else {
			styles = `width: ${UNITS.baseX10} height: ${UNITS.baseX10}`
		}

		return styles
	}};
`

export { IconWrapper }
