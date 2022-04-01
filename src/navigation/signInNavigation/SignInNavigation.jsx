import { createStackNavigator } from '@react-navigation/stack'
import Descent from 'components/animations/Descent'
import { getSignInOptions } from './signInOptions'

const SignInNavigation = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { screenOptions, screenList } = getSignInOptions()

	return (
		<Descent>
			<Navigator screenOptions={{ ...screenOptions }}>
				{screenList.map(({ name, component }) => (
					<Screen name={name} component={component} key={name} />
				))}
			</Navigator>
		</Descent>
	)
}

export default SignInNavigation
