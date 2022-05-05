import { TransitionPresets } from '@react-navigation/stack'
import BottomTabNavigation from 'navigation/bottomTabNavigation/BottomTabNavigation'

const getSignInOptions = () => {
	const screenOptions = {
		headerShown: false,
		...TransitionPresets.SlideFromRightIOS
	}

	const screenList = [{ name: 'main', component: BottomTabNavigation }]

	return { screenOptions, screenList }
}

export { getSignInOptions }
