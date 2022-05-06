import styled from 'styled-components/native'
import { UNITS, UNITS_PX } from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const FilterBarWrapper = styled.View`
	align-items: center;
	flex-direction: row;
	padding: ${({ indentTop, insetsLeft }) =>
		`${indentTop + UNITS.baseX3}px 0 ${UNITS_PX.baseX3} ${insetsLeft}px`};
	border-bottom-width: ${BORDERS.thin};
	border-bottom-color: ${COLORS.neutralTransparent};
`
const FilterBarIconWrapper = styled.View`
	padding: 0 ${UNITS_PX.baseX2} 0 0;
`
const FilterBarOptionWrapper = styled.View`
	padding: 0 ${({ isLast }) => (isLast ? 0 : `${UNITS_PX.baseX2}`)} 0 0;
`

export { FilterBarWrapper, FilterBarIconWrapper, FilterBarOptionWrapper }
