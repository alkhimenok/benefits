import styled from 'styled-components/native'

import UNITS from 'globalStyles/units'
import FONTS from 'globalStyles/fonts'
import COLORS from 'globalStyles/colors'

const DeployedCardWrapper = styled.View`
	flex: 1;
	justify-content: space-between;
`
const DeployedCardImageWrapper = styled.View`
	height: 30%;
`
const DeployedCardIconBackWrapper = styled.View`
	position: absolute;
	top: 16px;
	left: 16px;
`
const DeployedCardIconFavoritesWrapper = styled.View`
	position: absolute;
	top: 16px;
	right: 16px;
`
const DeployedCardAbout = styled.ScrollView`
	flex: 1;
	background-color: ${COLORS.light};
	padding: 0 16px;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	transform: translateY(-24px);
`
const DeployedCardLabels = styled.View`
	margin: 16px 0 0 0;
	flex-direction: row;
	justify-content: space-between;
`
const DeployedCardLabelWrapper = styled.View``
const DeployedCardIconMoreWrapper = styled.View``
const DeployedCardTitle = styled.Text`
	margin: 24px 0 0 0;
	font-size: 28px;
	font-family: ${FONTS.primaryBold};
`
const DeployedCardSubtitle = styled.Text`
	margin: 24px 0 12px 0;
	font-size: 20px;
	font-family: ${FONTS.primaryBold};
`
const DeployedCardText = styled.Text`
	margin: ${({ index }) => index !== 0 && '8px'} 0 0 0;
`
const DeployedCardLinkList = styled.View`
	margin: 16px 0 0 0;
`
const DeployedCardLink = styled.TouchableOpacity`
	border-bottom-color: ${COLORS.neutralTransparent};
	border-bottom-width: 1px;
	padding: 14px 0;
	flex-direction: row;
`
const DeployedCardLinkText = styled.Text`
	flex: 1;
	margin: 0 12px;
`
const DeployedCardLinkIconWrapper = styled.View``
const DeployedCardButtonWrapper = styled.View``

export {
	DeployedCardWrapper,
	DeployedCardImageWrapper,
	DeployedCardAbout,
	DeployedCardIconBackWrapper,
	DeployedCardIconFavoritesWrapper,
	DeployedCardLabels,
	DeployedCardLabelWrapper,
	DeployedCardIconMoreWrapper,
	DeployedCardTitle,
	DeployedCardSubtitle,
	DeployedCardText,
	DeployedCardLinkList,
	DeployedCardLink,
	DeployedCardLinkText,
	DeployedCardLinkIconWrapper,
	DeployedCardButtonWrapper
}
