import { createStackNavigator } from '@react-navigation/stack'
import { getAccountOptions } from './accountOptions'

const Account = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { screenOptions, screenList } = getAccountOptions()

	return (
		<Navigator screenOptions={screenOptions}>
			{screenList.map(({ name, component }) => (
				<Screen name={name} component={component} key={name} />
			))}
		</Navigator>
	)
}

export default Account
