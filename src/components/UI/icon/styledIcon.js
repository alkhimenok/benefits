import styled from 'styled-components/native'

import BORDERS from 'constants/borders'

const IconWrapper = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	${({ backgroundColor, isOnlyIcon, isCircle, isLarge }) => {
		const borderRadius = isCircle
			? BORDERS.radiusCircle
			: BORDERS.radiusSuperellipse
		const size = isLarge ? '40px' : '24px'

		return (
			isOnlyIcon ||
			`width: ${size}; height: ${size}; background-color: ${backgroundColor}; border-radius: ${borderRadius};`
		)
	}}
`

export { IconWrapper }
