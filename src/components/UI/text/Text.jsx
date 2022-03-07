import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledText'

const Text = ({
	type = 'text1',
	isTextSemiBold = false,
	isDanger = false,
	isParagraph = false,
	children = null
}) => {
	return (
		<Styled.TextWrapper
			type={type}
			isTextSemiBold={isTextSemiBold}
			isDanger={isDanger}
			isParagraph={isParagraph}
		>
			{children}
		</Styled.TextWrapper>
	)
}

Text.propTypes = {
	type: PropTypes.string,
	isTextSemiBold: PropTypes.bool,
	children: PropTypes.node.isRequired
}

export default Text
