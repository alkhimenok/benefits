import styled from 'styled-components/native'

import UNITS from 'constants/units'
import FONTS from 'constants/fonts'
import COLORS from 'constants/colors'
import BORDERS from 'constants/borders'

const CardWrapper = styled.View`
	width: 304px;
	height: 170px;
	background-color: red;
	border-radius: ${BORDERS.radiusSuperellipse};
	overflow: hidden;
`
const CardBackground = styled.Image`
	width: 100%;
	height: 100%;
`
const CardLabel = styled.View`
	position: absolute;
	bottom: 8px;
	left: 8px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding: 4px 8px;
	background-color: ${COLORS.secondary};
	border-radius: ${BORDERS.radiusOval};
	${({ isImportant }) => isImportant && `padding: 8px 16px`}
`
const CardLabelIconWrapper = styled.View`
	margin: 0 7.5px 0 0;
`
const CardLabelText = styled.Text`
	font-family: 'primarySemiBold';
	font-size: ${UNITS.xs};
	color: ${COLORS.light}
	${({ isImportant }) => isImportant && `font-size: ${UNITS.md};`}
`
const CardFavoritesIconWrapper = styled.View`
	position: absolute;
	top: 4px;
	right: 4px;
`

export {
	CardWrapper,
	CardBackground,
	CardFavoritesIconWrapper,
	CardLabel,
	CardLabelIconWrapper,
	CardLabelText
}
