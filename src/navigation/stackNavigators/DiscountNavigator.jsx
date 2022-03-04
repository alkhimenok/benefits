import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { screenOptions, screenList } from './discountOptions'

const DiscountNavigator = () => {
	const { Navigator, Screen } = createStackNavigator()

	return (
		<Navigator
			initialRouteName={'discount'}
			screenOptions={{ ...screenOptions }}
		>
			{screenList.map(({ name, component }) => (
				<Screen name={name} component={component} key={name} />
			))}
		</Navigator>
	)
}

export default DiscountNavigator
