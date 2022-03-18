import styled from 'styled-components/native'
import UNITS from 'styles/units'
import FONTS from 'styles/fonts'

const TabWrapper = styled.View`
	align-items: center;
`
const TabIconWrapper = styled.View`
	margin: 0 0 ${UNITS.baseX1} 0;
`
const TabName = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	font-size: ${UNITS.baseX3};
	color: ${({ color }) => color};
`

export { TabWrapper, TabIconWrapper, TabName }
