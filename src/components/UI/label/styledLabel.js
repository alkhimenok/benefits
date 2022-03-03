import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'
import FONTS from 'globalStyles/fonts'
import COLORS from 'globalStyles/colors'
import BORDERS from 'globalStyles/borders'

const LabelWrapper = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: ${({ iconPosition }) =>	iconPosition === 'end' ? 'row-reverse' : 'row'};
	background-color: ${COLORS.secondary};
	border-radius: ${BORDERS.radiusOval};
	${({ isLarge, isFixed }) => {
		if (isFixed) {
			return `padding: ${UNITS.baseX3} ${UNITS.baseX5};`
		} else if (isLarge) {
			return `padding: ${UNITS.baseX2} ${UNITS.baseX5};`
		} else {
			return `padding: ${UNITS.baseX1} ${UNITS.baseX2};`
		}
	}}
`
const LabelIconWrapper = styled.View`
	${({ iconPosition }) =>	`margin-${iconPosition === 'end' ? 'left' : 'right'}: ${UNITS.baseX2}`}
`
const LabelTitle = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	color: ${COLORS.light};
	${({ isLarge, isFixed }) =>
		isLarge || isFixed
			? `font-size: ${UNITS.baseX3};`
			: `font-size: ${UNITS.baseX4};`}
`

export { LabelWrapper, LabelIconWrapper, LabelTitle }
