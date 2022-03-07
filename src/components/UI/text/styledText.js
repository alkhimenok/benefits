import styled from 'styled-components/native'
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
			h1: `font-family: ${FONTS.primaryBold}; font-size: 28px; line-height: 28px;`,
			h2: `font-family: ${FONTS.primaryBold}; font-size: 20px; line-height: 24px;`,
			h3: `font-family: ${FONTS.primaryBold}; font-size: 16px; line-height: 20px;`,
			text1: `font-family: ${textFontFamily}; font-size: 16px; line-height: 20px;`,
			text2: `font-family: ${textFontFamily}; font-size: 14px; line-height: 20px;`,
			text3: `font-family: ${textFontFamily}; font-size: 12px; line-height: 16px;`
		}

		return style[type]
	}}
`

export { TextWrapper }
