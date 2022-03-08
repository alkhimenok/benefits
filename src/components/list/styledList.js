import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'

const ListWrapper = styled.View`
	flex: 1;
`
const ListServiceSections = styled.SectionList`
	/* padding: ${({isVertical}) => isVertical ? 0 : UNITS.baseX2} 0; FIXME: last margin */
`
const ListService = styled.View`
	margin: ${({ isVertical }) => (isVertical ? 0 : UNITS.baseX4)} 0; /* FIXME: last margin */
`
const ListTitleWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0 0 ${({ isVertical }) => (isVertical ? UNITS.baseX6 : UNITS.baseX4)}
		0;
`
const ListServiceItems = styled.FlatList``
const ListCardWrapper = styled.View`
	${({ index, isVertical }) =>
		(!isVertical && `margin: 0 0 0 ${index === 0 ? 0 : UNITS.baseX2};`) ||
		`margin: ${index === 0 ? 0 : UNITS.baseX8} 0 0 0;`}
`

export {
	ListWrapper,
	ListServiceSections,
	ListService,
	ListTitleWrapper,
	ListServiceItems,
	ListCardWrapper
}
