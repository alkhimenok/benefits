import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Discount from 'screens/Discount'
import Card from 'screens/stack/Card'

const StackNavigator = () => {
	const { Navigator, Screen } = createStackNavigator()

	return (
		<Navigator
			initialRouteName={'discount'}
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS
			}}
		>
			<Screen name='discount' component={Discount} />
			<Screen name='deployed' component={Card} />
		</Navigator>
	)
}

export default StackNavigator
