import { TransitionPresets } from '@react-navigation/stack'
import Discount from 'screens/Discount'
import DeployedCard from 'screens/stack/DeployedCard'

const screenOptions = {
	headerShown: false,
	...TransitionPresets.SlideFromRightIOS
}

const screenList = [
	{ name: 'discount', component: Discount },
	{ name: 'deployed', component: DeployedCard }
]

export { screenOptions, screenList }
