import styled from 'styled-components/native'
import UNITS from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const OnboardingWrapper = styled.View`
	flex: 1;
	justify-content: flex-end;
	padding: ${({ insetsBottom }) =>
		`30% ${UNITS.baseX8} ${insetsBottom + parseInt(UNITS.baseX8)}px`};
`
const OnboardingBody = styled.View`
	flex: 1;
`
const OnboardingImageWrapper = styled.View`
	width: 100%;
	height: 60%;
	margin: 0 0 ${UNITS.baseX6} 0;
`
const OnboardingTitleWrapper = styled.View`
	width: 80%;
	margin: 0 auto ${UNITS.baseX3} auto;
`
const OnboardingList = styled.ScrollView``
const OnboardingDescriptionWrapper = styled.View``
const OnboardingFooter = styled.View`
	padding: ${UNITS.baseX4} 0 0 0;
`
const OnboardingButtonWrapper = styled.View`
	margin: 0 0 ${UNITS.baseX4} 0;
`
const OnboardingTabList = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
`
const OnboardingTab = styled.View`
	width: ${UNITS.baseX3};
	height: ${UNITS.baseX3};
	margin: 0 ${UNITS.baseX1};
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
