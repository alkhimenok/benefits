import styled from 'styled-components/native'

import UNITS from 'constants/units'
import FONTS from 'constants/fonts'
import COLORS from 'constants/colors'

const CardWrapper = styled.TouchableOpacity`
	width: ${({ isLarge }) => (isLarge ? '304px' : '224px')};
`
const CardImageWrapper = styled.View`
	width: 100%;
	height: ${({ isLarge }) => (isLarge ? '170px' : '127px')};
`
const CardLabelsWrapper = styled.View`
	position: absolute;
	bottom: 8px;
	left: 8px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`
const CardMoreIconWrapper = styled.View`
	margin: 0 0 0 10px;
`
const CardFavoritesIconWrapper = styled.View`
	position: absolute;
	top: 4px;
	right: 4px;
`
const CardTitle = styled.Text`
	margin: 8px 0 0 0;
	font-family: ${FONTS.primarySemiBold};
	font-size: ${UNITS.md};
	color: ${COLORS.dark};
`

export {
	CardWrapper,
	CardImageWrapper,
	CardLabelsWrapper,
	CardMoreIconWrapper,
	CardFavoritesIconWrapper,
	CardTitle
}
