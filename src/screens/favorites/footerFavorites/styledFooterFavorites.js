import styled from 'styled-components/native'
import { UNITS_PX } from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const FooterFavoritesWrapper = styled.View`
	padding: ${UNITS_PX.baseX6} 0;
	border-top-width: ${BORDERS.thin};
	border-top-color: ${COLORS.neutralTransparent};
`
const FooterFavoritesButtonWrapper = styled.View`
	margin: 0 0 ${({ isLast }) => (isLast ? 0 : UNITS_PX.baseX3)} 0;
`

export { FooterFavoritesWrapper, FooterFavoritesButtonWrapper }
