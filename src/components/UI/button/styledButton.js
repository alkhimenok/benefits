import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'
import FONTS from 'globalStyles/fonts'
import COLORS from 'globalStyles/colors'
import BORDERS from 'globalStyles/borders'

const ButtonWrapper = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	flex-direction: ${({ iconPosition }) =>	iconPosition === 'end' ? 'row-reverse' : 'row'};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: ${BORDERS.radiusSuperellipse};
	${({ isLarge, isSmall, isContour, isDisable }) => {
		let styles = ''

		if (isLarge) {
			styles += `height: ${UNITS.baseX13}; padding: 0 ${UNITS.baseX7};`
		} else if (isSmall) {
			styles += `height: ${UNITS.baseX9}; padding: 0 ${UNITS.baseX5};`
		} else {
			styles += `height: ${UNITS.baseX11}; padding: 0 ${UNITS.baseX5};`
		}

		if (isContour) {
			styles += `border: ${BORDERS.thin} ${COLORS.neutralDark}`
		}

		if (isDisable) {
			styles += `opacity: 0.3;`
		}

		return styles
	}}
`
const ButtonIconWrapper = styled.View`
	${({ iconPosition }) =>	`margin-${iconPosition === 'end' ? 'left' : 'right'}: ${UNITS.baseX2}`}
`
const ButtonTitle = styled.Text`
	color: ${({ color }) => color};
	font-family: ${({isLarge}) => isLarge ? FONTS.primaryBlack : FONTS.primarySemiBold};
	font-size: ${({isLarge}) => isLarge ? UNITS.baseX5 : UNITS.baseX4};
`

export { ButtonWrapper, ButtonTitle, ButtonIconWrapper }
