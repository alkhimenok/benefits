import React from 'react'
import PropTypes from 'prop-types'

import ImportantIcon from 'components/svg/filter/ImportantIcon'

import COLORS from 'constants/colors'

import * as Styled from './styledButton'

const Button = ({
	id,
	title,
	isImportant,
	isFocused,
	isDisabled,
	isWhite,
	isLarge,
	onPress
}) => {
	const [color, background] = getCurrentColors(isFocused, isDisabled, isWhite)
	const icon = isImportant && <ImportantIcon color={color} />

	return (
		<Styled.ButtonWrapper id={id} disabled={isDisabled} onPress={onPress}>
			<Styled.ButtonBody
				isLarge={isLarge}
				isWhite={isWhite}
				backgroundColor={background}
			>
				<Styled.ButtonIconWrapper>{icon}</Styled.ButtonIconWrapper>
				<Styled.ButtonText color={color}>{title}</Styled.ButtonText>
			</Styled.ButtonBody>
		</Styled.ButtonWrapper>
	)
}

const getCurrentColors = (isFocused, isDisabled, isWhite) => {
	if (isFocused && isDisabled) {
		return [COLORS.light, COLORS.primaryTransparent]
	} else if (isDisabled && isWhite) {
		return [COLORS.darkTransparent, COLORS.light]
	} else if (isFocused) {
		return [COLORS.light, COLORS.primary]
	} else if (isDisabled) {
		return [COLORS.darkTransparent, COLORS.neutralTransparent]
	} else if (isWhite) {
		return [COLORS.dark, COLORS.light]
	} else {
		return [COLORS.dark, COLORS.neutral]
	}
}

Button.prototype = {
	id: PropTypes.string,
	title: PropTypes.bool.isRequired,
	isImportant: PropTypes.bool,
	isFocused: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isWhite: PropTypes.bool,
	isLarge: PropTypes.bool,
	onPress: PropTypes.func
}

export default Button
