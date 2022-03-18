import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { getSignUpOptions } from './signUpOptions'

const SignUpNavigation = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { screenOptions, screenList } = getSignUpOptions()

	return (
		<Navigator screenOptions={{ ...screenOptions }}>
			{screenList.map(({ name, component }) => (
				<Screen name={name} component={component} key={name} />
			))}
		</Navigator>
	)
}

export default SignUpNavigation
