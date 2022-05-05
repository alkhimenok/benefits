import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useStore } from 'providers/storeProvider'
import Button from 'components/UI/button/Button'
import Image from 'components/UI/image/Image'
import Text from 'components/UI/text/Text'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import * as S from './styledOnboarding'

const Onboarding = observer(({ title, description, buttonTitle, screenName }) => {
	const navigation = useNavigation()
	const { bottom } = useSafeAreaInsets()
	const { signIn } = useStore().auth
	const { routeNames } = navigation.getState()
	const { length } = routeNames
	const tabIndex = routeNames.findIndex((tabName) => tabName === screenName)
	const nextScreenName = routeNames[tabIndex + 1]
	const tabList = new Array(length).fill().map((tab, i) => ({ isCurrent: i === tabIndex }))

	const handlePress = () => {
		nextScreenName ? navigation.navigate(nextScreenName) : signIn()
	}

	return (
		<S.OnboardingWrapper insetsBottom={bottom}>
			<S.OnboardingBody>
				<S.OnboardingImageWrapper>
					<Image name={screenName} designWidth={220} designHeight={220} resizeMode={'contain'} />
				</S.OnboardingImageWrapper>
				<S.OnboardingTitleWrapper>
					<Text variation={'h2'} textAlign={'center'} fontWeight={WEIGHT.bold}>
						{title}
					</Text>
				</S.OnboardingTitleWrapper>
				<S.OnboardingList alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
					<S.OnboardingDescriptionWrapper>
						<Text variation={'text2'} textAlign={'center'} color={COLORS.paragraph}>
							{description}
						</Text>
					</S.OnboardingDescriptionWrapper>
				</S.OnboardingList>
			</S.OnboardingBody>
			<S.OnboardingFooter>
				<S.OnboardingButtonWrapper>
					<Button variation={'large'} type={'primary'} title={buttonTitle} onPress={handlePress} />
				</S.OnboardingButtonWrapper>
				<S.OnboardingTabList>
					{tabList.map(({ isCurrent }, i) => (
						<S.OnboardingTab isCurrent={isCurrent} key={i} />
					))}
				</S.OnboardingTabList>
			</S.OnboardingFooter>
		</S.OnboardingWrapper>
	)
})

Onboarding.defaultProps = {
	title: '',
	description: '',
	buttonTitle: '',
	screenName: ''
}
Onboarding.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonTitle: PropTypes.string,
	screenName: PropTypes.string
}

export default Onboarding
