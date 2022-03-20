import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useStore } from 'providers/storeProvider'
import Button from 'components/UI/button/Button'
import Image from 'components/UI/image/Image'
import Text from 'components/UI/text/Text'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import * as S from './styledOnboarding'

const Onboarding = observer(
	({ title, description, buttonTitle, route, navigation }) => {
		const { signIn } = useStore().auth
		const { bottom } = useSafeAreaInsets()
		const { name } = route
		const { routeNames } = navigation.getState()
		const { length } = routeNames
		const tabIndex = routeNames.findIndex((tabName) => tabName === name)
		const nextScreenName = routeNames[tabIndex + 1]
		const tabList = new Array(length)
			.fill()
			.map((tab, i) => ({ isCurrent: i === tabIndex }))

		const handlePress = () => {
			nextScreenName ? navigation.navigate(nextScreenName) : signIn()
		}

		return (
			<S.OnboardingWrapper insetsBottom={bottom}>
				<S.OnboardingBody>
					<S.OnboardingImageWrapper>
						<Image name={name} resizeMode={'contain'} />
					</S.OnboardingImageWrapper>
					<S.OnboardingTitleWrapper>
						<Text
							variation={'h2'}
							textAlign={'center'}
							fontWeight={WEIGHT.bold}
						>
							{title}
						</Text>
					</S.OnboardingTitleWrapper>
					<S.OnboardingList
						alwaysBounceVertical={false}
						showsVerticalScrollIndicator={false}
					>
						<S.OnboardingDescriptionWrapper>
							<Text
								variation={'text2'}
								textAlign={'center'}
								color={COLORS.paragraph}
							>
								{description}
							</Text>
						</S.OnboardingDescriptionWrapper>
					</S.OnboardingList>
				</S.OnboardingBody>
				<S.OnboardingFooter>
					<S.OnboardingButtonWrapper>
						<Button
							variation={'large'}
							type={'primary'}
							title={buttonTitle}
							onPress={handlePress}
						/>
					</S.OnboardingButtonWrapper>
					<S.OnboardingTabList>
						{tabList.map(({ isCurrent }, i) => (
							<S.OnboardingTab isCurrent={isCurrent} key={i}></S.OnboardingTab>
						))}
					</S.OnboardingTabList>
				</S.OnboardingFooter>
			</S.OnboardingWrapper>
		)
	}
)

Onboarding.defaultProps = {
	title: '',
	description: '',
	buttonTitle: '',
	navigation: {},
	route: {}
}
Onboarding.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonTitle: PropTypes.string,
	navigation: PropTypes.object,
	route: PropTypes.object
}

export default Onboarding
