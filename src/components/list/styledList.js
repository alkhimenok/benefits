import styled from 'styled-components/native'

import FONTS from 'constants/fonts'

const ListWrapper = styled.SafeAreaView`
	padding: 0 0 48px 0; // remove !!!!!!!!
`
const ListSections = styled.SectionList``
const ListSection = styled.View`
	margin: 16px 0;
`
const ListSectionTitle = styled.Text`
	margin: 0 0 16px 0;
	font-family: ${FONTS.primaryBold};
	font-size: 20px;
`
const ListSectionList = styled.FlatList``
const ListCardWrapper = styled.View`
	${({ index }) => index !== 0 && 'margin: 0 0 0 8px;'}
`

export {
	ListWrapper,
	ListSections,
	ListSection,
	ListSectionTitle,
	ListSectionList,
	ListCardWrapper
}
