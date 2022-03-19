import styled from 'styled-components/native'

const ImageWrapper = styled.Image`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: auto;
	border-radius: ${({ borderRadius }) => borderRadius};
`

export { ImageWrapper }
