import styled from 'styled-components/native'
import { UNITS_PX } from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const CardWrapper = styled.View`
	width: ${({ cardWidth }) => cardWidth};
`
const CardImageWrapper = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: 100%;
	height: ${({ imageHeight }) => imageHeight};
	border: ${({ isContour }) =>
		isContour ? `${BORDERS.thin} ${COLORS.neutralDark}` : 'none'};
	border-radius: ${({ isContour }) =>
		isContour ? BORDERS.radiusSuperellipse : 0};
`
const CardFavoritesIconWrapper = styled.View`
	position: absolute;
	top: ${({ top }) => top};
	right: ${({ right }) => right};
`
const CardLabels = styled.View`
	position: absolute;
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	align-items: center;
	flex-direction: row;
`
const CardMoreIconWrapper = styled.View`
	margin: 0 0 0 ${UNITS_PX.baseX2};
`
const CardTitleWrapper = styled.View`
	margin: ${({ titleMarginTop }) => titleMarginTop} 0 0 0;
`
const CardDescriptionWrapper = styled.View`
	margin: ${UNITS_PX.baseX1} ${UNITS_PX.baseX10} 0 0;
`

export {
	CardWrapper,
	CardImageWrapper,
	CardFavoritesIconWrapper,
	CardLabels,
	CardMoreIconWrapper,
	CardTitleWrapper,
	CardDescriptionWrapper
}
