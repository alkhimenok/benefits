import Discount from 'screens/discount/Discount'
import Favorites from 'screens/favorites/Favorites'
import Account from 'screens/account/Account'

const getBottomTabOptions = (bottom) => {
	const screenOptions = {
		headerShown: false,
		tabBarShowLabel: false,
		tabBarStyle: {
			height: 55 + bottom,
			paddingTop: 7.5,
			paddingBottom: 6.5 + bottom
		}
	}

	const screenList = [
		{ name: 'discount', component: Discount },
		{ name: 'favorites', component: Favorites },
		{ name: 'account', component: Account }
	]

	return { screenOptions, screenList }
}

export { getBottomTabOptions }
