import styled from 'styled-components/native'

import UNITS from 'globalStyles/units'
import FONTS from 'globalStyles/fonts'
import COLORS from 'globalStyles/colors'

const CardWrapper = styled.TouchableOpacity`
	/* height: 100%; */
	width: ${({ isLarge, isFull }) => {
		if (isLarge) {
			return '304px;'
		} else if (isFull) {
			return '100%;'
		} else {
			return '224px;'
		}
	}};
`
const CardImageWrapper = styled.View`
	height: ${({ isLarge, isFull }) => {
		if (isLarge) {
			return '170px;'
		} else if (isFull) {
			return '200px'
		} else {
			return '127px;'
		}
	}};
`
const CardLabelsWrapper = styled.View`
	position: absolute;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	${({ isLarge, isFull }) =>
		isLarge || isFull ? 'bottom: 12px; left: 12px;' : 'bottom: 8px; left: 8px;'}
`
const CardMoreIconWrapper = styled.View`
	margin: 0 0 0 10px;
`
const CardFavoritesIconWrapper = styled.View`
	position: absolute;
	${({ isLarge, isFull }) =>
		isLarge || isFull ? 'top: 12px; right: 12px;' : 'top: 4px; right: 4px;'}
`
const CardTitle = styled.Text`
	color: ${COLORS.dark};
	${({ isFull }) =>
		isFull
			? `margin: 16px 0 0 0; font-family: ${FONTS.primaryBold}; font-size: ${UNITS.lg}`
			: `margin: 8px 0 0 0; font-family: ${FONTS.primarySemiBold}; font-size: ${UNITS.md}`}
`
const CardDescription = styled.Text`
	margin: 4px 0 0 0;
	font-size: ${UNITS.md};
	color: ${COLORS.paragraph};
`

export {
	CardWrapper,
	CardImageWrapper,
	CardLabelsWrapper,
	CardMoreIconWrapper,
	CardFavoritesIconWrapper,
	CardTitle,
	CardDescription
}
