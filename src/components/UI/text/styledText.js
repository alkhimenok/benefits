import styled from 'styled-components/native'
import UNITS from 'globalStyles/units'
import FONTS from 'globalStyles/fonts'
import COLORS from 'globalStyles/colors'

const TextWrapper = styled.Text`
	color: ${({ isDanger, isParagraph }) =>
		(isDanger && COLORS.danger) ||
		(isParagraph && COLORS.paragraph) ||
		COLORS.dark};

	${({ type, isTextSemiBold }) => {
		const textFontFamily = isTextSemiBold
			? FONTS.primarySemiBold
			: FONTS.primaryRegular

		const style = {
			h1: `font-family: ${FONTS.primaryBold}; font-size: ${UNITS.baseX7}; line-height: ${UNITS.baseX7};`,
			h2: `font-family: ${FONTS.primaryBold}; font-size: ${UNITS.baseX5}; line-height: ${UNITS.baseX6};`,
			h3: `font-family: ${FONTS.primaryBold}; font-size: ${UNITS.baseX4}; line-height: ${UNITS.baseX5};`,
			text1: `font-family: ${textFontFamily}; font-size: ${UNITS.baseX4}; line-height: ${UNITS.baseX5};`,
			text2: `font-family: ${textFontFamily}; font-size: ${UNITS.baseX3_5}; line-height: ${UNITS.baseX5};`,
			text3: `font-family: ${textFontFamily}; font-size: ${UNITS.baseX3}; line-height: ${UNITS.baseX4};`
		}

		return style[type]
	}}
`

export { TextWrapper }
