import { createStackNavigator } from '@react-navigation/stack'
import { getFavoritesOptions } from './favoritesOptions'

const Favorites = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { screenOptions, screenList } = getFavoritesOptions()

	return (
		<Navigator screenOptions={screenOptions}>
			{screenList.map(({ name, component }) => (
				<Screen name={name} component={component} key={name} />
			))}
		</Navigator>
	)
}

export default Favorites
