import styled from 'styled-components/native'

const ImageWrapper = styled.Image`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: ${({ borderRadius }) => borderRadius};
`

export { ImageWrapper }
