import styled from 'styled-components/native'
import { UNITS, UNITS_PX } from 'styles/units'

const HeaderFavoritesWrapper = styled.View`
	padding: ${({ insetsTop }) => `${insetsTop + UNITS.baseX6}px`} 0 ${UNITS_PX.baseX6} 0;
`

export { HeaderFavoritesWrapper }
