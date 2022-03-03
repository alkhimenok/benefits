import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'
import BORDERS from 'globalStyles/borders'

const IconWrapper = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	border-radius: ${({ isCircle }) => isCircle ? BORDERS.radiusCircle : BORDERS.radiusSuperellipse};
	${({ backgroundColor }) => `background-color: ${backgroundColor};`};
	${({ isOnlyIcon, isLarge, isSmall }) => {
		let styles = ''

		if (isOnlyIcon) {
			styles += ``
		} else if (isLarge) {
			styles = `width: ${UNITS.baseX13}; height: ${UNITS.baseX13};`
		} else if (isSmall) {
			styles = `width: ${UNITS.baseX9}; height: ${UNITS.baseX9};`
		} else {
			styles = `width: ${UNITS.baseX11} height: ${UNITS.baseX11}`
		}

		return styles
	}};
`

export { IconWrapper }
