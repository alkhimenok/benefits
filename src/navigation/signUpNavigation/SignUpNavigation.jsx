import { createStackNavigator } from '@react-navigation/stack'
import Descent from 'components/animations/Descent'
import { getSignUpOptions } from './signUpOptions'

const SignUpNavigation = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { screenOptions, screenList } = getSignUpOptions()

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

export default SignUpNavigation
