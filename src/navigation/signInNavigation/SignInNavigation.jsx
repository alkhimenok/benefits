import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Fade from 'components/animations/Fade'
import { getSignInOptions } from './signInOptions'

const SignInNavigation = () => {
	const { Navigator, Screen } = createStackNavigator()
	const { screenOptions, screenList } = getSignInOptions()

	return (
		<Fade>
			<Navigator screenOptions={{ ...screenOptions }}>
				{screenList.map(({ name, component }) => (
					<Screen name={name} component={component} key={name} />
				))}
			</Navigator>
		</Fade>
	)
}

export default SignInNavigation
