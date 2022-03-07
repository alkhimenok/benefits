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
			styles += `height: ${UNITS.baseX12}; padding: 0 ${UNITS.baseX6};`
		} else if (isSmall) {
			styles += `height: ${UNITS.baseX8}; padding: 0 ${UNITS.baseX3};`
		} else {
			styles += `height: ${UNITS.baseX10}; padding: 0 ${UNITS.baseX3};`
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
	font-family: ${({ isLarge }) => isLarge ? FONTS.primaryMedium : FONTS.primarySemiBold};
	font-size: ${({ isLarge }) => isLarge ? UNITS.baseX4 : UNITS.baseX3_5};
	color: ${({ color }) => color};
`

export { ButtonWrapper, ButtonTitle, ButtonIconWrapper }
