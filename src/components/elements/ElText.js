import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import UNITS from 'styles/units'
import FONTS from 'styles/fonts'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'

const ElText = ({ variation, fontWeight, color, numberOfLines, children }) => {
	const { fontFamily, fontSize, lineHeight } = getTextOptions(
		variation,
		fontWeight
	)

	return (
		<Text
			numberOfLines={numberOfLines}
			//
			fontFamily={fontFamily}
			fontSize={fontSize}
			lineHeight={lineHeight}
			color={color}
		>
			{children}
		</Text>
	)
}

const Text = styled.Text`
	font-family: ${({ fontFamily }) => fontFamily};
	font-size: ${({ fontSize }) => fontSize};
	line-height: ${({ lineHeight }) => lineHeight};
	color: ${({ color }) => color};
`

const getTextOptions = (variation, fontWeight) => {
	const fontFamily = {
		[WEIGHT.regular]: FONTS.primaryRegular,
		[WEIGHT.medium]: FONTS.primaryMedium,
		[WEIGHT.semiBold]: FONTS.primarySemiBold,
		[WEIGHT.bold]: FONTS.primaryBold,
		[WEIGHT.black]: FONTS.primaryBlack
	}[fontWeight]

	const { fontSize, lineHeight } = {
		h1: { fontSize: UNITS.baseX7, lineHeight: UNITS.baseX7 },
		h2: { fontSize: UNITS.baseX5, lineHeight: UNITS.baseX6 },
		h3: { fontSize: UNITS.baseX4, lineHeight: UNITS.baseX5 },
		text1: { fontSize: UNITS.baseX4, lineHeight: UNITS.baseX5 },
		text2: { fontSize: UNITS.baseX3_5, lineHeight: UNITS.baseX5 },
		text3: { fontSize: UNITS.baseX3, lineHeight: UNITS.baseX4 }
	}[variation]

	return { fontFamily, fontSize, lineHeight }
}

ElText.defaultProps = {
	variation: 'text1',
	fontWeight: WEIGHT.regular,
	color: COLORS.dark,
	numberOfLines: 0,
	children: ''
}
ElText.prototype = {
	variation: PropTypes.string,
	fontWeight: PropTypes.number,
	color: PropTypes.string,
	numberOfLines: PropTypes.number,
	children: PropTypes.node
}

export default ElText
