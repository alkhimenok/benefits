import DiscountNavigator from './stackNavigators/DiscountNavigator'
// import Discount from 'screens/Discount'
import Favorites from 'screens/Favorites'
import Account from 'screens/Account'

const screenOptions = {
	headerShown: false,
	tabBarShowLabel: false,
	tabBarStyle: {
		height: 55,
		paddingTop: 7.5,
		paddingBottom: 6.5
	}
}

const screenList = [
	{ name: 'Скидки', component: DiscountNavigator },
	{ name: 'Избранное', component: Favorites },
	{ name: 'Аккаунт', component: Account }
]

export { screenOptions, screenList }
