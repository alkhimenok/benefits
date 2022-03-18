import React from 'react'
import {
	createStackNavigator,
	TransitionPresets
} from '@react-navigation/stack'
import BottomTabNavigation from 'navigation/bottomTabNavigation/BottomTabNavigation'

const SignInNavigation = () => {
	const { Navigator, Screen } = createStackNavigator()

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS
			}}
		>
			<Screen name={'home'} component={BottomTabNavigation} />
		</Navigator>
	)
}

export default SignInNavigation
