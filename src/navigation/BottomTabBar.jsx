import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Discount from 'screens/Discount'
import Favorites from 'screens/Favorites'
import Account from 'screens/Account'

import CustomTab from './CustomTab'
import { navigatorOptions } from './options'

const BottomTabBar = () => {
	const { Navigator, Screen } = createBottomTabNavigator()

	return (
		<NavigationContainer>
			<Navigator
				initialRouteName={'discount'}
				backBehavior={'history'}
				screenOptions={({ route: { name } }) => ({
					...navigatorOptions,
					tabBarIcon: ({ focused }) => (
						<CustomTab name={name} isFocused={focused} />
					)
				})}
			>
				<Screen name='Скидки' component={Discount} />
				<Screen name='Избраное' component={Favorites} />
				<Screen name='Аккаунт' component={Account} />
			</Navigator>
		</NavigationContainer>
	)
}

export default BottomTabBar
