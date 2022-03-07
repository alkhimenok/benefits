import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'
import COLORS from 'globalStyles/colors'
import BORDERS from 'globalStyles/borders'

const FilterBarWrapper = styled.View`
	padding: ${UNITS.baseX3} 0;
	border-bottom-color: ${COLORS.neutralTransparent};
	border-bottom-width: ${BORDERS.thin};
`
const FilterBarBody = styled.View`
	align-items: center;
	flex-direction: row;
`
const FilterBarIconWrapper = styled.View`
	padding: 0 ${UNITS.baseX2} 0 0; // intend for first option
`

export { FilterBarWrapper, FilterBarBody, FilterBarIconWrapper }
