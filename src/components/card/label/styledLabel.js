import styled from 'styled-components/native'

import UNITS from 'constants/units'
import FONTS from 'constants/fonts'
import COLORS from 'constants/colors'
import BORDERS from 'constants/borders'

const LabelWrapper = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
	background-color: ${COLORS.secondary};
	border-radius: ${BORDERS.radiusOval};
	${({ isImportant, isFixed }) => {
		let styles = ''

		if (isFixed) {
			styles += 'padding: 10px 16px;'
		} else if (isImportant) {
			styles += 'padding: 6px 16px;'
		} else {
			styles += 'padding: 4px 8px;'
		}

		return styles
	}}
`
const LabelIconWrapper = styled.View`
	margin: 0 7.5px 0 0;
`
const LabelTitle = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	color: ${COLORS.light};
	${({ isImportant, isFixed }) =>
		isImportant || isFixed
			? `font-size: ${UNITS.md};`
			: `font-size: ${UNITS.xs};`}
`

export { LabelWrapper, LabelIconWrapper, LabelTitle }
