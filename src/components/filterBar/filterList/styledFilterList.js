import styled from 'styled-components/native'

const FilterListWrapper = styled.View`
	align-items: center;
	flex-direction: row;
`
const FilterListButtonWrapper = styled.View`
	margin: 0 0 0 ${({ index }) => index !== 0 && '8px'};
`

export { FilterListWrapper, FilterListButtonWrapper }
