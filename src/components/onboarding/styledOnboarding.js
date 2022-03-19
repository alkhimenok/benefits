import styled from 'styled-components/native'
import { sizeInProportion } from 'helpers/utils'
import { UNITS_PX } from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const OnboardingWrapper = styled.View`
	flex: 1;
	justify-content: flex-end;
	padding: ${({ insetsBottom }) =>
		`30% ${UNITS_PX.baseX8} ${insetsBottom + parseInt(UNITS_PX.baseX8)}px`};
`
const OnboardingBody = styled.View`
	flex: 1;
`
const OnboardingImageWrapper = styled.View`
	margin: 0 auto ${UNITS_PX.baseX6} auto;
	${() => {
		const { width, height } = sizeInProportion(220, 220, true)

		return `width: ${width}; height: ${height}`
	}}
`
const OnboardingTitleWrapper = styled.View`
	width: 80%;
	margin: 0 auto ${UNITS_PX.baseX3} auto;
`
const OnboardingList = styled.ScrollView``
const OnboardingDescriptionWrapper = styled.View``
const OnboardingFooter = styled.View`
	padding: ${UNITS_PX.baseX4} 0 0 0;
`
const OnboardingButtonWrapper = styled.View`
	margin: 0 0 ${UNITS_PX.baseX4} 0;
`
const OnboardingTabList = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
`
const OnboardingTab = styled.View`
	width: ${UNITS_PX.baseX3};
	height: ${UNITS_PX.baseX3};
	margin: 0 ${UNITS_PX.baseX1};
	background-color: ${({ isCurrent }) =>
		isCurrent ? COLORS.primary : COLORS.neutralTransparent};
	border-radius: ${BORDERS.radiusCircle};
`

export {
	OnboardingWrapper,
	OnboardingBody,
	OnboardingImageWrapper,
	OnboardingTitleWrapper,
	OnboardingList,
	OnboardingDescriptionWrapper,
	OnboardingFooter,
	OnboardingButtonWrapper,
	OnboardingTabList,
	OnboardingTab
}
