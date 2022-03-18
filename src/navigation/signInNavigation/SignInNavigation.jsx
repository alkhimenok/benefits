import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { getSignInOptions } from './signInOptions'

const SignInNavigation = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { screenOptions, screenList } = getSignInOptions()

	return (
		<Navigator screenOptions={{ ...screenOptions }}>
			{screenList.map(({ name, component }) => (
				<Screen name={name} component={component} key={name} />
			))}
		</Navigator>
	)
}

export default SignInNavigation
