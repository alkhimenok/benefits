import Discount from 'navigation/stacks/discount/Discount'
import Favorites from 'navigation/stacks/favorites/Favorites'
import Account from 'navigation/stacks/account/Account'
import { calculateBase } from 'styles/units'
import COLORS from 'styles/colors'

const getBottomTabOptions = (bottom) => {
	const screenOptions = {
		unmountOnBlur: true,
		headerShown: false,
		tabBarShowLabel: false,
		tabBarStyle: {
			height: calculateBase(55) + bottom,
			paddingTop: calculateBase(7.5),
			paddingBottom: calculateBase(6.5) + bottom,
			backgroundColor: COLORS.light
		}
	}

	const screenList = [
		{ name: 'discountStack', component: Discount },
		{ name: 'favoritesStack', component: Favorites },
		{ name: 'accountStack', component: Account }
	]

	return { screenOptions, screenList }
}

export { getBottomTabOptions }
