import styled from 'styled-components/native'

import UNITS from 'globalStyles/units'
import FONTS from 'globalStyles/fonts'

const TabWrapper = styled.View`
	align-items: center;
`
const TabIconWrapper = styled.View`
	margin: 0 0 3px 0;
`
const TabName = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	font-size: ${UNITS.xs};
	color: ${({ color }) => color};
`

export { TabWrapper, TabIconWrapper, TabName }
