import React from 'react'
import PropTypes from 'prop-types'
import { getCurrentIconSvgComponent } from './iconSvgComponent'
import COLORS from 'globalStyles/colors'
import * as Styled from './styledIcon'

const Icon = ({
	name,
	width,
	height,
	color = COLORS.dark,
	backgroundColor = COLORS.neutral,
	isOnlyIcon,
	isLarge,
	isSmall,
	isCircle,
	isFill,
	onPress
}) => {
	const currentIconSvgComponent = getCurrentIconSvgComponent(
		name,
		width,
		height,
		color,
		isFill
	)

	return (
		<Styled.IconWrapper
			backgroundColor={backgroundColor}
			isOnlyIcon={isOnlyIcon}
			isLarge={isLarge}
			isSmall={isSmall}
			isCircle={isCircle}
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
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	isLarge: PropTypes.bool,
	isSmall: PropTypes.bool,
	isCircle: PropTypes.bool,
	isFill: PropTypes.bool,
	onPress: PropTypes.func
}

export default Icon
