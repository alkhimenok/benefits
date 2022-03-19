import styled from 'styled-components/native'
import { UNITS_PX } from 'styles/units'
import FONTS from 'styles/fonts'

const TabWrapper = styled.View`
	align-items: center;
`
const TabIconWrapper = styled.View`
	margin: 0 0 ${UNITS_PX.baseX1} 0;
`
const TabName = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	font-size: ${UNITS_PX.baseX3};
	color: ${({ color }) => color};
`

export { TabWrapper, TabIconWrapper, TabName }
