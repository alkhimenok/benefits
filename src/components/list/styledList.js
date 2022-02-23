import styled from 'styled-components/native'

import FONTS from 'constants/fonts'

const ListWrapper = styled.SafeAreaView`
	padding: 0 0 48px 0; /* remove !!!!!!!! */
`
const ListServiceSections = styled.SectionList``
const ListService = styled.View`
	margin: 16px 0;
`
const ListServiceTitle = styled.Text`
	margin: 0 0 16px 0;
	font-family: ${FONTS.primaryBold};
	font-size: 20px; /* fix */
`
const ListServiceItems = styled.FlatList``
const ListCardWrapper = styled.View`
	${({ index }) => index !== 0 && 'margin: 0 0 0 8px;'}
`

export {
	ListWrapper,
	ListServiceSections,
	ListService,
	ListServiceTitle,
	ListServiceItems,
	ListCardWrapper
}
