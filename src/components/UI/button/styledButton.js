import styled from 'styled-components/native'
import UNITS from 'styles/units'
import BORDERS from 'styles/borders'

const Touch = styled.TouchableHighlight`
	align-items: center;
	justify-content: center;
	height: ${({ height }) => height};
	padding: 0 ${({ paddingHorizontal }) => paddingHorizontal};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border: ${({ border }) => border};
	border-radius: ${BORDERS.radiusSuperellipse};
	opacity: ${({ opacity }) => opacity};
`
const ButtonWrapper = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: ${({ iconBeginning }) =>
		iconBeginning ? 'row' : 'row-reverse'};
`
const IconWrapper = styled.View`
	${({ iconBeginning }) =>
		`margin-${iconBeginning ? 'right' : 'left'}: ${UNITS.baseX2}`}
`

export { Touch, ButtonWrapper, IconWrapper }
