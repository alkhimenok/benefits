import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Discount from 'screens/discount/Discount'
import Favorites from 'screens/favorites/Favorites'
import Account from 'screens/account/Account'

const MainTabs = () => {
	const Tab = createBottomTabNavigator()

	return (
		<NavigationContainer>
			<Tab.Navigator
				backBehavior={'history'}
				screenOptions={{
					headerShown: false,
					tabBarLabelStyle: { color: 'red' }
					// tabBarLabelPosition: 'beside-icon',
					// tabBarLabel: { focused: true, color: '#000000' }
				}}
			>
				<Tab.Screen
					name='discount'
					component={Discount}
					options={{
						title: 'Скидки'
					}}
				/>
				<Tab.Screen
					name='favorites'
					component={Favorites}
					options={{ title: 'Избраное' }}
				/>
				<Tab.Screen
					name='account'
					component={Account}
					options={{ title: 'Акаунт' }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default MainTabs