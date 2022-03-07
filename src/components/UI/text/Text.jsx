import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledText'

const Text = ({
	type = 'text1',
	numberOfLines,
	isTextSemiBold,
	isDanger,
	isParagraph,
	children
}) => {
	return (
		<Styled.TextWrapper
			type={type}
			numberOfLines={numberOfLines}
			isTextSemiBold={isTextSemiBold}
			ellipsizeMode={"tail"}
			isDanger={isDanger}
			isParagraph={isParagraph}
		>
			{children}
		</Styled.TextWrapper>
	)
}

Text.propTypes = {
	type: PropTypes.string,
	numberOfLines: PropTypes.number,
	isTextSemiBold: PropTypes.bool,
	isDanger: PropTypes.bool,
	isParagraph: PropTypes.bool,
	children: PropTypes.node.isRequired
}

export default Text
