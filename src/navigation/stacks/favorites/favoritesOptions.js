import Favorites from 'screens/favorites/Favorites'

const getFavoritesOptions = () => {
	const screenOptions = {
		headerShown: false
	}

	const screenList = [{ name: 'favorites', component: Favorites }]

	return { screenOptions, screenList }
}

export { getFavoritesOptions }
