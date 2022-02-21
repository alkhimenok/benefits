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
	const icon = isImportant && (
		<Icon
			name={'important'}
			width={14}
			height={16}
			color={color}
			isOnlyIcon={true}
		/>
	)

	return (
		<Styled.ButtonWrapper disabled={isDisabled} onPress={onPress}>
			<Styled.ButtonBody
				isLarge={isLarge}
				isWhite={isWhite}
				backgroundColor={backgroundColor}
			>
				<Styled.ButtonIconWrapper>{icon}</Styled.ButtonIconWrapper>
				<Styled.ButtonText color={color}>{title}</Styled.ButtonText>
			</Styled.ButtonBody>
		</Styled.ButtonWrapper>
	)
}

Button.prototype = {
	title: PropTypes.bool.isRequired,
	isImportant: PropTypes.bool,
	isFocused: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isWhite: PropTypes.bool,
	isLarge: PropTypes.bool,
	onPress: PropTypes.func
}

export default Button
