import styled from 'styled-components/native'

import BORDERS from 'constants/borders'

const ImageWrapper = styled.Image`
	width: ${({ width }) => width ?? '100%'};
	height: ${({ height }) => height ?? '100%'};
	margin: auto; /* to hide in the center */
	${({ isRounded }) =>
		isRounded && `border-radius: ${BORDERS.radiusSuperellipse}`}
`

export { ImageWrapper }
