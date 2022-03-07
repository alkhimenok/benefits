import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'
import COLORS from 'globalStyles/colors'
import BORDERS from 'globalStyles/borders'

const CardWrapper = styled.View`
	flex: 1;
	width: ${({ isLarge, isFull, isDeployed }) => {
		if (isLarge) {
			return '304px;'
		} else if (isFull || isDeployed) {
			return '100%;'
		} else {
			return '224px;'
		}
	}};
	${({ isEmpty }) =>
		isEmpty && `max-height: 127px; border: ${BORDERS.thin} ${COLORS.paragraph}; border-radius: ${BORDERS.radiusSuperellipse}`}
`
const CardImageWrapper = styled.TouchableOpacity`
	width: 100%;
	height: ${({ isLarge, isFull, isDeployed }) => {
		if (isLarge) {
			return '170px;'
		} else if (isFull) {
			return '193px'
		} else if (isDeployed) {
			return '35%'
		} else {
			return '127px;'
		}
	}};
	${({ isEmpty }) => isEmpty && `align-items: center; justify-content: center;`}
`
const CardLabelsWrapper = styled.View`
	align-items: center;
	flex-direction: row;
	${({ isDeployed }) =>
		isDeployed
			? `justify-content: space-between; margin: 0 0 ${UNITS.baseX6} 0;`
			: 'position: absolute; justify-content: center;'}
	${({ isLarge, isFull, isDeployed }) => {
		if (isDeployed) {
			return ''
		}

		return isLarge || isFull
			? `bottom: ${UNITS.baseX3}; left: ${UNITS.baseX3};`
			: `bottom: ${UNITS.baseX2}; left: ${UNITS.baseX2};`
	}}
`
const CardMoreIconWrapper = styled.View`
	margin: 0 0 0 ${UNITS.baseX2};
`
const CardFavoritesIconWrapper = styled.View`
	position: absolute;
	top: ${UNITS.baseX3};
	right: ${UNITS.baseX3};
	${({ isLarge, isFull, isDeployed }) =>
		((isLarge || isFull) && `top: ${UNITS.baseX3}; right: ${UNITS.baseX3};`) ||
		(isDeployed &&
			`top: ${parseInt(UNITS.baseX4) + StatusBar.currentHeight}px; right: ${
				UNITS.baseX4
			};`) ||
		`top: ${UNITS.baseX1}; right: ${UNITS.baseX1};`}
`
const CardBackIconWrapper = styled.View`
	position: absolute;
	top: ${parseInt(UNITS.baseX4) + StatusBar.currentHeight + 'px'};
	left: ${UNITS.baseX4};
`
const CardAbout = styled.ScrollView`
	${({ isDeployed }) =>
		isDeployed &&
		`margin: -${UNITS.baseX6} 0 0 0; background-color: ${COLORS.light}; border-top-left-radius: ${UNITS.baseX6}; border-top-right-radius: ${UNITS.baseX6}; overflow: hidden;`};
`
const CardTitleWrapper = styled.View`
	${({ isFull, isDeployed }) =>
		(isFull && `margin: ${UNITS.baseX4} 0 0 0;`) ||
		(isDeployed && `margin: 0 0 ${UNITS.baseX4} 0;`) ||
		`margin: ${UNITS.baseX2} 0 0 0;`}
`
const CardSubtitleWrapper = styled.View`
	margin: 0 0 ${UNITS.baseX3} 0;
`
const CardDescriptionWrapper = styled.View`
	margin: ${UNITS.baseX1} ${UNITS.baseX10} 0 0;
`
const CardConditionWrapper = styled.View`
	margin: 0 0 ${UNITS.baseX2} 0;
`
const CardLinkWrapper = styled.TouchableOpacity`
	border-bottom-color: ${COLORS.neutralTransparent};
	border-bottom-width: ${BORDERS.thin};
	padding: ${UNITS.baseX3_5} 0;
	flex-direction: row;
`
const CardLinkTextWrapper = styled.View`
	flex: 1;
	margin: 0 ${UNITS.baseX3};
`
const CardButtonWrapper = styled.View`
	padding: ${UNITS.baseX4} 0 ${UNITS.baseX2} 0;
	background-color: ${COLORS.lightTransparent};
`

export {
	CardWrapper,
	CardImageWrapper,
	CardLabelsWrapper,
	CardMoreIconWrapper,
	CardFavoritesIconWrapper,
	CardBackIconWrapper,
	CardAbout,
	CardTitleWrapper,
	CardSubtitleWrapper,
	CardDescriptionWrapper,
	CardConditionWrapper,
	CardLinkWrapper,
	CardLinkTextWrapper,
	CardButtonWrapper
}
