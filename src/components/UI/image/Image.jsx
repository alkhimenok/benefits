import React from 'react'
import PropTypes from 'prop-types'
import { geCurrentImageSource } from './imageSource'
import * as Styled from './styledImage'

const Image = ({ name, width, height, isContain, isRounded }) => {
	const currentImageSource = geCurrentImageSource(name)
	const resizeMode = isContain ? 'contain' : 'cover'

	return (
		<Styled.ImageWrapper
			source={currentImageSource}
			accessibilityLabel={name}
			resizeMode={resizeMode}
			width={width}
			height={height}
			isRounded={isRounded}
		/>
	)
}

Image.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	isContain: PropTypes.bool,
	isRequired: PropTypes.bool
}

export default Image
