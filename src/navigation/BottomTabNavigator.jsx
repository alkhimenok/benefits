import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import DiscountNavigator from './stackNavigators/DiscountNavigator'
import Favorites from 'screens/Favorites'
import Account from 'screens/Account'
import ElIcon from 'elements/ElIcon'
import UNITS from 'styles/units'
import FONTS from 'styles/fonts'
import COLORS from 'styles/colors'

const BottomTabNavigator = () => {
	const { Navigator, Screen } = createBottomTabNavigator()

	const screenList = [
		{ name: 'Скидки', component: DiscountNavigator },
		{ name: 'Избранное', component: Favorites },
		{ name: 'Аккаунт', component: Account }
	]

	return (
		<NavigationWrapper>
			<NavigationContainer>
				<Navigator
					initialRouteName={'Скидки'}
					backBehavior={'history'}
					screenOptions={({ route: { name } }) => ({
						headerShown: false,
						tabBarShowLabel: false,
						tabBarStyle: {
							height: 55,
							paddingTop: 7.5,
							paddingBottom: 6.5
						},
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
		</NavigationWrapper>
	)
}

const NavigationWrapper = styled.SafeAreaView`
	flex: 1;
`

const CustomTab = ({ name, isFocused }) => {
	const color = isFocused ? COLORS.primary : COLORS.paragraph
	const nameList = {
		'Скидки': 'discount',
		'Избранное': 'favorites',
		'Аккаунт': 'account'
	}

	return (
		<TabWrapper>
			<TabIconWrapper pointerEvents={'none'}>
				<ElIcon
					variation={'empty'}
					name={nameList[name]}
					width={'22px'}
					height={'22px'}
					color={color}
				/>
			</TabIconWrapper>
			<TabName color={color}>{name}</TabName>
		</TabWrapper>
	)
}

const TabWrapper = styled.View`
	align-items: center;
`
const TabIconWrapper = styled.View`
	margin: 0 0 ${UNITS.baseX1} 0;
`
const TabName = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	font-size: ${UNITS.baseX3};
	color: ${({ color }) => color};
`

export default BottomTabNavigator
