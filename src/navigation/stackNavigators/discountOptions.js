import { TransitionPresets } from '@react-navigation/stack'
import Discount from 'screens/Discount'
import Card from 'screens/stack/Card'

const screenOptions = {
	headerShown: false,
	...TransitionPresets.SlideFromRightIOS
}

const screenList = [
	{ name: 'discount', component: Discount },
	{ name: 'deployed', component: Card }
]

export { screenOptions, screenList }
