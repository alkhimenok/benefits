import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { iconSourceList, underlayColorList } from 'helpers/constants'
import UNITS from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'
import TRANSPARENCY from 'styles/transparency'

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
	const source = iconSourceList[name]
	const underlayColor = underlayColorList[backgroundColor]
	const resizeMode = 'contain'
	const { touchWidth, touchHeight, borderRadius } = getIconOptions(
		variation,
		isCircle
	)

	return (
		<Touch
			activeOpacity={TRANSPARENCY.half}
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
				style={{ tintColor: color }}
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

const getIconOptions = (variation, isCircle) => {
	const { touchWidth, touchHeight } = {
		large: { touchWidth: UNITS.baseX12, touchHeight: UNITS.baseX12 },
		middle: { touchWidth: UNITS.baseX10, touchHeight: UNITS.baseX10 },
		small: { touchWidth: UNITS.baseX8, touchHeight: UNITS.baseX8 },
		empty: { touchWidth: 'auto', touchHeight: 'auto' }
		// empty: { touchWidth: UNITS.baseX6, touchHeight: UNITS.baseX6 }
	}[variation]

	const borderRadius =
		(variation === 'empty' && '0') ||
		(isCircle ? BORDERS.radiusCircle : BORDERS.radiusSuperellipse)

	return { touchWidth, touchHeight, borderRadius }
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
