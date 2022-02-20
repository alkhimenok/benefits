import styled from 'styled-components/native'

import UNITS from 'constants/units'
import FONTS from 'constants/fonts'
import COLORS from 'constants/colors'
import BORDERS from 'constants/borders'
import TRANSPARENCY from 'constants/transparency'

const ButtonWrapper = styled.TouchableOpacity`
	margin: 20px 0 0 0; ///////////////
`
const ButtonIconWrapper = styled.View``
const ButtonBody = styled.Text`
	width: 100%;
	text-align: center;
	padding: ${UNITS.xs};
	font-family: ${FONTS.primarySemiBold};
	font-size: ${UNITS.sm};
	color: ${COLORS.dark};
	background-color: ${COLORS.neutral};
	border-radius: ${BORDERS.radiusSuperellipse};
	${({ isFocused }) =>
		isFocused &&
		`color: ${COLORS.light}; background-color: ${COLORS.primary};`};
	${({ isDisabled }) =>
		// `color: ${COLORS.light}; background-color: ${COLORS.primaryTransparent};`};
		isDisabled && `opacity: ${TRANSPARENCY.half}`};
	${({ isLarge }) =>
		isLarge && `padding: ${UNITS.lg}; font-size: ${UNITS.lg};`};
	${({ ishWhite }) =>
		ishWhite &&
		`color: ${COLORS.dark};background-color: ${COLORS.light}; border: ${BORDERS.thin} ${COLORS.neutralDark};`};
`

export { ButtonWrapper, ButtonIconWrapper, ButtonBody }
