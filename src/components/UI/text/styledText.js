import styled from 'styled-components/native'

const TextWrapper = styled.Text`
	font-family: ${({ fontFamily }) => fontFamily};
	font-size: ${({ fontSize }) => fontSize};
	line-height: ${({ lineHeight }) => lineHeight};
	color: ${({ color }) => color};
`

export { TextWrapper }
