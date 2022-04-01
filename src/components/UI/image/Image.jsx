import PropTypes from 'prop-types'
import { imageSourceList } from 'helpers/constants'
import BORDERS from 'styles/borders'
import * as S from './styledImage'

const ElImage = ({ name, width, height, resizeMode, isRounded }) => {
	const source = imageSourceList[name]
	const borderRadius = isRounded ? BORDERS.radiusSuperellipse : 0

	return (
		<S.ImageWrapper
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

ElImage.defaultProps = {
	name: 'undefinedCard',
	width: '100%',
	height: '100%',
	resizeMode: 'cover',
	isRounded: false
}
ElImage.propTypes = {
	name: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	resizeMode: PropTypes.string,
	isRounded: PropTypes.bool
}

export default ElImage
