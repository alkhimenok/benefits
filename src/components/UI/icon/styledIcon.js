import styled from 'styled-components/native'

const Touch = styled.TouchableHighlight`
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: ${({ borderRadius }) => borderRadius};
	overflow: hidden;
`
const IconWrapper = styled.Image`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`

export { Touch, IconWrapper }
