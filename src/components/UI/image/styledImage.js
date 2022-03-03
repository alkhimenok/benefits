import styled from 'styled-components/native'
import BORDERS from 'globalStyles/borders'

const ImageWrapper = styled.Image`
	margin: 0 auto; /* to hide in the center */
	${({ width }) => !width && `width: 100%;`}
	${({ height }) => !height && `height: 100%;`}
	${({ isRounded }) => isRounded && `border-radius: ${BORDERS.radiusSuperellipse}`}
`

export { ImageWrapper }
