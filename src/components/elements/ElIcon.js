import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { iconsSourceList } from 'helpers/constants'
import UNITS from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const ElIcon = ({
	variation,
	name,
	width,
	height,
	color,
	backgroundColor,
	isCircle,
	onPress
}) => {
	const source = iconsSourceList[name]
	const resizeMode = 'contain'
	const { touchWidth, touchHeight, underlayColor, borderRadius } =
		getIconOptions(variation, backgroundColor, isCircle)

	return (
		<Touch
			activeOpacity={0.5}
			underlayColor={underlayColor}
			onPress={onPress}
			//
			width={touchWidth}
			height={touchHeight}
			borderRadius={borderRadius}
			backgroundColor={backgroundColor}
		>
			<Icon
				source={source}
				resizeMode={resizeMode}
				tintColor={color}
				//
				width={width}
				height={height}
			/>
		</Touch>
	)
}

const Touch = styled.TouchableHighlight`
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: ${({ borderRadius }) => borderRadius};
	overflow: hidden;
`
const Icon = styled.Image`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`

const getIconOptions = (variation, backgroundColor, isCircle) => {
	const { touchWidth, touchHeight } = {
		large: { touchWidth: UNITS.baseX12, touchHeight: UNITS.baseX12 },
		middle: { touchWidth: UNITS.baseX10, touchHeight: UNITS.baseX10 },
		small: { touchWidth: UNITS.baseX8, touchHeight: UNITS.baseX8 },
		empty: { touchWidth: 'auto', touchHeight: 'auto' }
		// empty: { touchWidth: UNITS.baseX6, touchHeight: UNITS.baseX6 }
	}[variation]

	const underlayColor = {
		[COLORS.transparent]: COLORS.transparent,
		[COLORS.light]: COLORS.paragraph,
		[COLORS.lightTransparent]: COLORS.paragraph,
		[COLORS.dark]: COLORS.paragraph,
		[COLORS.darkTransparent]: COLORS.paragraph,
		[COLORS.primary]: COLORS.primaryDark,
		[COLORS.primaryTransparent]: COLORS.primaryDark,
		[COLORS.secondary]: COLORS.secondaryDark,
		[COLORS.secondaryTransparent]: COLORS.secondaryDark,
		[COLORS.success]: COLORS.successDark,
		[COLORS.successTransparent]: COLORS.successDark,
		[COLORS.danger]: COLORS.dangerDark,
		[COLORS.dangerTransparent]: COLORS.dangerDark,
		[COLORS.warning]: COLORS.warningDark,
		[COLORS.warningTransparent]: COLORS.warningDark,
		[COLORS.neutral]: COLORS.neutralDark,
		[COLORS.neutralTransparent]: COLORS.neutralDark
	}[backgroundColor]

	const borderRadius = isCircle
		? BORDERS.radiusCircle
		: BORDERS.radiusSuperellipse

	return { touchWidth, touchHeight, underlayColor, borderRadius }
}

ElIcon.defaultProps = {
	variation: 'middle',
	name: 'default',
	width: '80%',
	height: '80%',
	color: COLORS.dark,
	backgroundColor: COLORS.transparent,
	isCircle: false,
	onPress: () => console.log('icon press')
}
ElIcon.prototype = {
	variation: PropTypes.string,
	name: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	isCircle: PropTypes.bool,
	onPress: PropTypes.func
}

export default ElIcon
