import styled from 'styled-components/native'

import COLORS from 'globalStyles/colors'

const FilterBarWrapper = styled.View`
	padding: 24px 0;
	border-bottom-color: ${COLORS.neutralTransparent};
	border-bottom-width: 1px;
`
const FilterBarBody = styled.View`
	align-items: center;
	flex-direction: row;
`
const FilterBarIconWrapper = styled.View`
	/* padding: 0 8px 0 0; */
`

export { FilterBarWrapper, FilterBarBody, FilterBarIconWrapper }
