import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/UI/icon/Icon'
import { getCurrentButtonColors, getCurrentIconSize } from './buttonOptions'
import * as Styled from './styledButton'

const Button = ({
	title,
	icon,
	isLarge,
	isSmall,
	isDisable,
	isPrimary,
	isSecondary,
	isContour,
	onPress
}) => {
	const [color, backgroundColor] = getCurrentButtonColors(
		isPrimary,
		isSecondary,
		isContour
	)
	const [width, height] = getCurrentIconSize(isLarge, isSmall)

	return (
		<Styled.ButtonWrapper
			iconPosition={icon?.position}
			backgroundColor={backgroundColor}
			isLarge={isLarge}
			isSmall={isSmall}
			isDisable={isDisable}
			isContour={isContour}
			onPress={onPress}
		>
			{icon?.name ? (
				<Styled.ButtonIconWrapper iconPosition={icon?.position}>
					<Icon
						name={icon?.name}
						width={width}
						height={height}
						color={color}
						isOnlyIcon={true}
					/>
				</Styled.ButtonIconWrapper>
			) : null}
			<Styled.ButtonTitle color={color} isLarge={isLarge}>{title}</Styled.ButtonTitle>
		</Styled.ButtonWrapper>
	)
}

Button.prototype = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object,
	isPrimary: PropTypes.bool,
	isSecondary: PropTypes.bool,
	isContour: PropTypes.bool,
	isDisable: PropTypes.bool,
	isLarge: PropTypes.bool,
	isSmall: PropTypes.bool,
	onPress: PropTypes.func
}

export default Button
