import styled from 'styled-components/native'

import UNITS from 'constants/units'
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

    if (!isFixed) {
      styles += 'position: absolute; bottom: 12px; left: 12px;'
    }

		if (isImportant) {
			styles += 'padding: 6px 16px;'
		} else if (isFixed) {
			styles += 'padding: 10px 16px;'
		} else {
			styles += 'padding: 4px 8px;'
		}

    if (isImportant || isFixed) {
      styles += `font-size: ${UNITS.md};`
    } else {
      styles += `font-size: ${UNITS.xs};`
    }

    return styles
	}}
`
const LabelIconWrapper = styled.View`
	margin: 0 7.5px 0 0;
`
const LabelText = styled.Text`
	font-size: ${UNITS.xs};
	color: ${COLORS.light};
`

export { LabelWrapper, LabelIconWrapper, LabelText }
