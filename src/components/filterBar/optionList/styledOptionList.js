import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'

const OptionListScroll = styled.FlatList``
const OptionListButtonWrapper = styled.View`
	padding: 0 ${({ isLast }) => (isLast ? 0 : `${UNITS.baseX2}`)} 0 0; // indent without first and last option
`

export { OptionListScroll, OptionListButtonWrapper }
