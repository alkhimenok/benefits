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
	${({ isImportant }) =>
		isImportant ? 'padding: 6px 16px;' : 'padding: 4px 8px;'}
`
const LabelIconWrapper = styled.View`
	margin: 0 7.5px 0 0;
`
const LabelTitle = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	color: ${COLORS.light};
	${({ isImportant }) =>
		isImportant ? `font-size: ${UNITS.md};` : `font-size: ${UNITS.xs};`}
`

export { LabelWrapper, LabelIconWrapper, LabelTitle }
