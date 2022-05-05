import styled from 'styled-components/native'
import { UNITS_PX } from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const LabelWrapper = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: ${({ iconBeginning }) => (iconBeginning ? 'row' : 'row-reverse')};
	height: ${({ wrapperHeight }) => wrapperHeight};
	padding: 0 ${({ wrapperPaddingHorizontal }) => wrapperPaddingHorizontal};
	background-color: ${COLORS.secondary};
	border-radius: ${BORDERS.radiusOval};
`
const IconWrapper = styled.View`
	${({ iconBeginning }) => `margin-${iconBeginning ? 'right' : 'left'}: ${UNITS_PX.baseX2}`}
`

export { LabelWrapper, IconWrapper }
