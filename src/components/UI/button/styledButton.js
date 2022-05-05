import styled from 'styled-components/native'
import { UNITS_PX } from 'styles/units'
import BORDERS from 'styles/borders'

const ButtonWrapper = styled.TouchableHighlight`
	align-items: center;
	justify-content: center;
	height: ${({ wrapperHeight }) => wrapperHeight};
	padding: 0 ${({ wrapperPaddingHorizontal }) => wrapperPaddingHorizontal};
	background-color: ${({ wrapperBackgroundColor }) => wrapperBackgroundColor};
	border: ${({ wrapperBorder }) => wrapperBorder};
	border-radius: ${BORDERS.radiusSuperellipse};
	opacity: ${({ opacity }) => opacity};
`
const ButtonBody = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: ${({ iconBeginning }) => (iconBeginning ? 'row' : 'row-reverse')};
`
const ButtonIconWrapper = styled.View`
	${({ iconBeginning }) => `margin-${iconBeginning ? 'right' : 'left'}: ${UNITS_PX.baseX2}`}
`

export { ButtonWrapper, ButtonBody, ButtonIconWrapper }
