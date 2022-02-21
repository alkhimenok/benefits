import styled from 'styled-components/native'

import UNITS from 'constants/units'
import FONTS from 'constants/fonts'
import COLORS from 'constants/colors'
import BORDERS from 'constants/borders'

const IconWrapper = styled.TouchableOpacity``
const IconContent = styled.View`
  padding: ${UNITS.sm};
  background-color: ${COLORS.neutral};
  border-radius: ${BORDERS.radiusSuperellipse};
`

export { IconWrapper, IconContent }
