import { StatusBar } from 'expo-status-bar'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function App() {
	const DiscountScreen = ({ route, navigation }) => {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Discount</Text>
			</View>
		)
	}
	const FavoritesScreen = ({ navigation }) => {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Favorites</Text>
			</View>
		)
	}
	const AccountScreen = ({ navigation }) => {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Account</Text>
			</View>
		)
	}

	const Tab = createBottomTabNavigator()

	return (
		<NavigationContainer>
			<Tab.Navigator
				backBehavior={'history'}
				// screenOptions={{ title: 'Скидки' }}
			>
				<Tab.Screen
					name='discount'
					component={DiscountScreen}
					options={{ title: 'Скидки' }}
				/>
				<Tab.Screen
					name='favorites'
					component={FavoritesScreen}
					options={{ title: 'Избраное' }}
				/>
				<Tab.Screen
					name='account'
					component={AccountScreen}
					options={{ title: 'Акаунт' }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
