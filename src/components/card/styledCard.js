import styled from 'styled-components/native'

import UNITS from 'constants/units'
import FONTS from 'constants/fonts'
import COLORS from 'constants/colors'

const CardWrapper = styled.TouchableOpacity`
	height: 100%;
	background-color: red;
	width: ${({ isLarge, isFull, isDeployed }) => {
		if (isLarge) {
			return '304px;'
		} else if (isFull || isDeployed) {
			return '100%;'
		} else {
			return '224px;'
		}
	}};
`
const CardImageWrapper = styled.View`
	height: ${({ isLarge, isFull, isDeployed }) => {
		if (isLarge) {
			return '170px;'
		} else if (isFull) {
			return '200px;'
		} else if (isDeployed) {
			return '30%;'
		} else {
			return '127px;'
		}
	}};
`
const CardAbout = styled.View`
	${({ isDeployed }) => isDeployed && `padding: 24px 16px; border-top-left-radius: 24px;border-top-right-radius: 24px;`}
	background-color: ${COLORS.light};
`
const CardLabelsWrapper = styled.View`
	position: absolute;
	bottom: 8px;
	left: 8px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`
const CardMoreIconWrapper = styled.View`
	margin: 0 0 0 10px;
`
const CardFavoritesIconWrapper = styled.View`
	position: absolute;
	${({ isLarge, isFull, isDeployed }) => {
		if (isLarge || isFull) {
			return 'top: 12px; right: 12px;'
		} else if (isDeployed) {
			return 'top: 16px; right: 16px;'
		} else {
			return 'top: 4px; right: 4px;'
		}
	}}
`
const CardTitle = styled.Text`
	margin: ${({ isFull, isDeployed }) => {
			if (isFull) {
				return '16px'
			} else if (isDeployed) {
				return '0'
			} else {
				return '8px'
			}
		}}
		0 0 0;
	font-family: ${({ isFull, isDeployed }) => {
		if (isFull || isDeployed) {
			return FONTS.primaryBold
		} else {
			return FONTS.primarySemiBold
		}
	}};
	font-size: ${({ isFull, isDeployed }) => {
		if (isFull) {
			return UNITS.lg
		} else if (isDeployed) {
			return UNITS.xxl
		} else {
			return UNITS.md
		}
	}};
	color: ${COLORS.dark};
`
const CardDescription = styled.Text`
	margin: 4px 0 0 0;
	font-size: ${UNITS.md};
	color: ${COLORS.paragraph};
`

export {
	CardWrapper,
	CardImageWrapper,
	CardAbout,
	CardLabelsWrapper,
	CardMoreIconWrapper,
	CardFavoritesIconWrapper,
	CardTitle,
	CardDescription
}
