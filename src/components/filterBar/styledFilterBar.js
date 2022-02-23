import styled from 'styled-components/native'

import COLORS from 'constants/colors'

const FilterBarWrapper = styled.View`
	padding: 24px 0;
  border-bottom-color: ${COLORS.neutralTransparent};
  border-bottom-width: 2px;
	
`
const FilterBarContent = styled.View`
	align-items: center;
	flex-direction: row;
	`
const FilterBarScroll = styled.ScrollView``
const FilterBartList = styled.View`
	align-items: center;
	flex-direction: row;
`
const FilterBarButtonWrapper = styled.View`
	margin: 0 0 0 8px;
`

export {
	FilterBarWrapper,
	FilterBarContent,
	FilterBarScroll,
	FilterBartList,
	FilterBarButtonWrapper
}
