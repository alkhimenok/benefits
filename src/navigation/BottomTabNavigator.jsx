import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTab from './customTab/CustomTab'
import { screenOptions, screenList } from './bottomTabOptions'

const BottomTabNavigator = () => {
	const { Navigator, Screen } = createBottomTabNavigator()

	return (
		<NavigationContainer>
			<Navigator
				initialRouteName={'Скидки'}
				backBehavior={'history'}
				screenOptions={({ route: { name } }) => ({
					...screenOptions,
					tabBarIcon: ({ focused }) => (
						<CustomTab name={name} isFocused={focused} />
					)
				})}
			>
				{screenList.map(({ name, component }) => (
					<Screen name={name} component={component} key={name} />
				))}
			</Navigator>
		</NavigationContainer>
	)
}

export default BottomTabNavigator
