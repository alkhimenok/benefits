import React from 'react'
import PropTypes from 'prop-types'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import { getTextOptions } from './textOptions'
import * as S from './styledText'

const ElText = ({ variation, fontWeight, color, numberOfLines, children }) => {
	const { fontFamily, fontSize, lineHeight } = getTextOptions(
		variation,
		fontWeight
	)

	return (
		<S.Text
			numberOfLines={numberOfLines}
			//
			fontFamily={fontFamily}
			fontSize={fontSize}
			lineHeight={lineHeight}
			color={color}
		>
			{children}
		</S.Text>
	)
}

ElText.defaultProps = {
	variation: 'text1',
	fontWeight: WEIGHT.regular,
	color: COLORS.dark,
	numberOfLines: 0,
	children: ''
}
ElText.propTypes = {
	variation: PropTypes.string,
	fontWeight: PropTypes.number,
	color: PropTypes.string,
	numberOfLines: PropTypes.number,
	children: PropTypes.node
}

export default ElText
