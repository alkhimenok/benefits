import PropTypes from 'prop-types'
import { sizeInProportion } from 'helpers/utils'
import { imageSourceList } from 'helpers/constants'
import BORDERS from 'styles/borders'
import * as S from './styledImage'

const Image = ({ name, designWidth, designHeight, resizeMode, isRounded, isFull }) => {
	const source = imageSourceList[name]
	const borderRadius = isRounded ? BORDERS.radiusSuperellipse : 0
	const { width, height } = sizeInProportion(designWidth, designHeight, isFull, true)

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

Image.defaultProps = {
	name: 'undefinedCard',
	designWidth: 100,
	designHeight: 100,
	resizeMode: 'cover',
	isRounded: false,
	isFull: false
}
Image.propTypes = {
	name: PropTypes.string,
	designWidth: PropTypes.number,
	designHeight: PropTypes.number,
	resizeMode: PropTypes.string,
	isRounded: PropTypes.bool,
	isFull: PropTypes.bool
}

export default Image
