import styled from 'styled-components/native'

import COLORS from 'constants/colors'
import UNITS from 'constants/units'

const CardWrapper = styled.TouchableOpacity`
	max-width: ${({ width }) => width || '224px'};
`
const CardContent = styled.View``
const CardImageWrapper = styled.View`
	width: ${({ width }) => width || '224px'};
	height: ${({ height }) => height || '127px'};
`
const CardLabelsWrapper = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	bottom: 8px;
	left: 8px;
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
	font-family: 'primarySemiBold';
	font-size: ${UNITS.md};
	color: ${COLORS.dark};
`

export {
	CardWrapper,
	CardContent,
	CardImageWrapper,
	CardLabelsWrapper,
	CardMoreIconWrapper,
	CardFavoritesIconWrapper,
	CardTitle
}
