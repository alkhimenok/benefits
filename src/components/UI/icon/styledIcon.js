import styled from 'styled-components/native'

const IconWrapper = styled.TouchableHighlight`
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: ${({ borderRadius }) => borderRadius};
	overflow: hidden;
`
const IconBody = styled.Image`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`

export { IconWrapper, IconBody }
