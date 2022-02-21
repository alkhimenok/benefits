import styled from 'styled-components/native'

import UNITS from 'constants/units'
import FONTS from 'constants/fonts'
import COLORS from 'constants/colors'
import BORDERS from 'constants/borders'

const ButtonWrapper = styled.TouchableOpacity``
const ButtonBody = styled.View`
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
const ButtonText = styled.Text`
	color: ${({ color }) => color};
`
const ButtonIconWrapper = styled.View`
	margin-right: 7.5px;
`

export { ButtonWrapper, ButtonBody, ButtonText, ButtonIconWrapper }
