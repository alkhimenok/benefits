import { TransitionPresets } from '@react-navigation/stack'
import BottomTab from 'navigation/bottomTab/BottomTab'

const getSignInOptions = () => {
	const screenOptions = {
		headerShown: false,
		...TransitionPresets.SlideFromRightIOS
	}

	const screenList = [{ name: 'main', component: BottomTab }]

	return { screenOptions, screenList }
}

export { getSignInOptions }
