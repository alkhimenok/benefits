import styled from 'styled-components/native'

const FilterListScroll = styled.FlatList``
const FilterListButtonWrapper = styled.View`
	margin: 0 0 0 ${({ index }) => index !== 0 && '8px'};
`

export { FilterListScroll, FilterListButtonWrapper }
