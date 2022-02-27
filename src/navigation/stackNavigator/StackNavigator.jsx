import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Discount from 'screens/Discount'
import DeployedCard from 'screens/deployedCard/DeployedCard'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
	const { Navigator, Screen } = Stack

	return (
		<Navigator
			initialRouteName={'discount'}
			screenOptions={{ headerShown: false }}
		>
			<Screen name='discount' component={Discount} />
			<Screen name='deployed' component={DeployedCard} />
		</Navigator>
	)
}

export default StackNavigator
