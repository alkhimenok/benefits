import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { imageSourceList } from 'helpers/constants'
import BORDERS from 'styles/borders'

const ElImage = ({ name, width, height, resizeMode, isRounded }) => {
	const source = imageSourceList[name]
	const borderRadius = isRounded ? BORDERS.radiusSuperellipse : 0

	return (
		<Image
			source={source}
			resizeMode={resizeMode}
			accessibilityLabel={name}
			//
			width={width}
			height={height}
			borderRadius={borderRadius}
		/>
	)
}

const Image = styled.Image`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: ${({ borderRadius }) => borderRadius};
`

ElImage.defaultProps = {
	name: 'undefinedCard',
	width: '100%',
	height: '100%',
	resizeMode: 'cover',
	isRounded: false
}
ElImage.prototype = {
	name: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	resizeMode: PropTypes.string,
	isRounded: PropTypes.bool
}

export default ElImage
