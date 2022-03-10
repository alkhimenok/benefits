import React from 'react'
import {
	createStackNavigator,
	TransitionPresets
} from '@react-navigation/stack'
import Discount from 'screens/discount/Discount'
import DeployedCard from 'screens/discount/DeployedCard'

const DiscountNavigator = () => {
	const { Navigator, Screen } = createStackNavigator()
	
	const screenList = [
		{ name: 'discount', component: Discount },
		{ name: 'deployed', component: DeployedCard }
	]

	return (
		<Navigator
			initialRouteName={'discount'}
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS
			}}
		>
			{screenList.map(({ name, component }) => (
				<Screen name={name} component={component} key={name} />
			))}
		</Navigator>
	)
}

export default DiscountNavigator
