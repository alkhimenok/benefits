import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './styledButton'

const Button = ({
	title,
	icon,
	isFocused,
	isDisabled,
	isLarge,
	ishWhite
}) => {
	return (
		<Styled.ButtonWrapper
			disabled={isDisabled}
			onPress={() => console.log('click')}
		>
			<>
				<Styled.ButtonIconWrapper>{icon}</Styled.ButtonIconWrapper>
				<Styled.ButtonBody
					isFocused={isFocused}
					isDisabled={isDisabled}
					isLarge={isLarge}
					ishWhite={ishWhite}
				>
					{title}
				</Styled.ButtonBody>
			</>
		</Styled.ButtonWrapper>
	)
}

Button.prototype = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.func,
	isFocused: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isLarge: PropTypes.bool,
	isWithWhiteBackground: PropTypes.bool
}

export default Button
