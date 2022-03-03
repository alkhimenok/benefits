import styled from 'styled-components/native'

import UNITS from 'globalStyles/units'
import FONTS from 'globalStyles/fonts'
import COLORS from 'globalStyles/colors'
import BORDERS from 'globalStyles/borders'

const ButtonWrapper = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding: ${UNITS.xs};
	font-family: ${FONTS.primarySemiBold};
	font-size: ${UNITS.sm};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: ${BORDERS.radiusSuperellipse};
	${({ isWhite }) => isWhite && `border: ${BORDERS.thin} ${COLORS.neutralDark}`}
	${({ isLarge }) => isLarge && `padding: ${UNITS.lg}; font-size: ${UNITS.lg}`}
`
const ButtonIconWrapper = styled.View`
	margin-right: 7.5px;
`
const ButtonTitle = styled.Text`
	color: ${({ color }) => color};
`

export { ButtonWrapper, ButtonTitle, ButtonIconWrapper }
