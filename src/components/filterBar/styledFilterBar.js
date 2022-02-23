import styled from 'styled-components/native'

import COLORS from 'constants/colors'

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
	padding: 0 8px 0 0;
`
const FilterBarScroll = styled.ScrollView``

export {
	FilterBarWrapper,
	FilterBarBody,
	FilterBarIconWrapper,
	FilterBarScroll
}
