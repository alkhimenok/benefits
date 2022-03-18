import { TransitionPresets } from '@react-navigation/stack'
import About from 'screens/auth/About'
import HowItWork from 'screens/auth/HowItWork'
import SelectCity from 'screens/auth/SelectCity'
import SignUp from 'screens/auth/SignUp'
import Ready from 'screens/auth/Ready'
import SignIn from 'screens/auth/SIgnIn'

const getSignUpOptions = () => {
	const screenOptions = {
		headerShown: false,
		...TransitionPresets.SlideFromRightIOS
	}

	const screenList = [
		{ name: 'about', component: About },
		{ name: 'howItWork', component: HowItWork },
		// { name: 'selectCity', component: SelectCity },
		{ name: 'signUp', component: SignUp },
		{ name: 'ready', component: Ready },
		{ name: 'signIn', component: SignIn }
	]

	return { screenOptions, screenList }
}

export { getSignUpOptions }
