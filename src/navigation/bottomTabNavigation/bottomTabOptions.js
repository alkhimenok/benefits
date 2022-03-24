import Discount from 'screens/discount/Discount'
import Favorites from 'screens/favorites/Favorites'
import Account from 'screens/account/Account'
import { calculateBase } from 'styles/units'
import COLORS from 'styles/colors'

const getBottomTabOptions = (bottom) => {
	const screenOptions = {
		headerShown: false,
		tabBarShowLabel: false,
		unmountOnBlur: true,
		tabBarStyle: {
			height: calculateBase(55) + bottom,
			paddingTop: calculateBase(7.5),
			paddingBottom: calculateBase(6.5) + bottom,
			backgroundColor: COLORS.light
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
