import React from 'react'
import PropTypes from 'prop-types'

import { getCurrentIconSvgComponent } from './iconSvgComponent'

import * as Styled from './styledIcon'

const Icon = ({
	name,
	width,
	height,
	color,
	backgroundColor,
	isOnlyIcon,
	isCircle,
	isLarge,
	isStroke,
	onPress
}) => {
	const currentIconSvgComponent = getCurrentIconSvgComponent(
		name,
		color,
		width,
		height,
		isStroke
	)

	return (
		<Styled.IconWrapper
			backgroundColor={backgroundColor}
			isOnlyIcon={isOnlyIcon}
			isCircle={isCircle}
			isLarge={isLarge}
			onPress={onPress}
		>
			{currentIconSvgComponent}
		</Styled.IconWrapper>
	)
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	isOnlyIcon: PropTypes.bool,
	isCircle: PropTypes.bool,
	isLarge: PropTypes.bool,
	isStroke: PropTypes.bool,
	onPress: PropTypes.func
}

export default Icon
