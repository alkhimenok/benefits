import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Tab from './tab/Tab'
import { getBottomTabOptions } from './bottomTabOptions'

const BottomTab = () => {
	const { Navigator, Screen } = createBottomTabNavigator()
	const { bottom } = useSafeAreaInsets()
	const { screenOptions, screenList } = getBottomTabOptions(bottom)

	return (
		<Navigator
			initialRouteName={'discount'}
			backBehavior={'history'}
			screenOptions={({ route: { name } }) => ({
				...screenOptions,
				tabBarIcon: ({ focused }) => <Tab name={name} isFocused={focused} />
			})}
		>
			{screenList.map(({ name, component }) => (
				<Screen name={name} component={component} key={name} />
			))}
		</Navigator>
	)
}

export default BottomTab
