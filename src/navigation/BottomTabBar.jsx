import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Discount from 'screens/discount/Discount'
import Favorites from 'screens/favorites/Favorites'
import Account from 'screens/account/Account'
import CustomTab from './CustomTab'

const BottomTabBar = () => {
	const { Navigator, Screen } = createBottomTabNavigator()

	return (
		<NavigationContainer>
			<Navigator
				initialRouteName={'discount'}
				backBehavior={'history'}
				screenOptions={({ route: { name } }) => ({
					headerShown: false,
					tabBarShowLabel: false,
					tabBarStyle: {
						height: 55,
						paddingTop: 7.5,
						paddingBottom: 6.5
						// backgroundColor: COLORS.lightTransparent
					},
					tabBarIcon: ({ focused }) => (
						<CustomTab name={name} focused={focused} />
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
