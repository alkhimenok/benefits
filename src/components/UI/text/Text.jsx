import PropTypes from 'prop-types'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import { getTextOptions } from './textOptions'
import * as S from './styledText'

const Text = ({
	variation,
	textAlign,
	fontWeight,
	color,
	numberOfLines,
	children
}) => {
	const { fontFamily, fontSize, lineHeight } = getTextOptions(
		variation,
		fontWeight
	)

	return (
		<S.TextWrapper
			numberOfLines={numberOfLines}
			//
			textAlign={textAlign}
			fontFamily={fontFamily}
			fontSize={fontSize}
			lineHeight={lineHeight}
			color={color}
		>
			{children}
		</S.TextWrapper>
	)
}

Text.defaultProps = {
	variation: 'text1',
	textAlign: 'left',
	fontWeight: WEIGHT.regular,
	color: COLORS.dark,
	numberOfLines: 0,
	children: ''
}
Text.propTypes = {
	variation: PropTypes.string,
	textAlign: PropTypes.string,
	fontWeight: PropTypes.number,
	color: PropTypes.string,
	numberOfLines: PropTypes.number,
	children: PropTypes.node
}

export default Text
