import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/UI/icon/Icon'
import { getCurrentButtonColors } from './buttonColors'
import * as Styled from './styledButton'

const Button = ({
	title,
	isImportant,
	isFocused,
	isDisabled,
	isWhite,
	isLarge,
	onPress
}) => {
	const [color, backgroundColor] = getCurrentButtonColors(
		isFocused,
		isDisabled,
		isWhite
	)

	return (
		<Styled.ButtonWrapper
			disabled={isDisabled}
			backgroundColor={backgroundColor}
			isWhite={isWhite}
			isLarge={isLarge}
			onPress={onPress}
		>
			{isImportant ? (
				<Styled.ButtonIconWrapper>
					<Icon
						name={'important'}
						width={14}
						height={16}
						color={color}
						isOnlyIcon={true}
					/>
				</Styled.ButtonIconWrapper>
			) : null}
			<Styled.ButtonTitle color={color}>{title}</Styled.ButtonTitle>
		</Styled.ButtonWrapper>
	)
}

Button.prototype = {
	title: PropTypes.string.isRequired,
	isImportant: PropTypes.bool,
	isFocused: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isWhite: PropTypes.bool,
	isLarge: PropTypes.bool,
	onPress: PropTypes.func
}

export default Button
