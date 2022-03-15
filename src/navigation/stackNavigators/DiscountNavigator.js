import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import Discount from 'screens/discount/Discount'
import ServiceInfo from 'screens/discount/ServiceInfo'

const DiscountNavigator = observer(({ navigation }) => {
	const { Navigator, Screen } = createStackNavigator()
	const { filterReset, focusedPrev } = useStore().filtration

	useEffect(() => {
		const backAction = () => {
			navigation.navigate('discount')

			focusedPrev() && BackHandler.exitApp()

			return true
		}

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		)

		return () => backHandler.remove()
	}, [])

	useEffect(() => {
		const handleDiscountTabPres = () => {
			const { history } = navigation.getState()
			const { length } = history
			const { key } = history[length - 1]
			const isDiscountLastTab = key.startsWith('Скидки')

			isDiscountLastTab && filterReset()
		}

		return navigation.addListener('tabPress', handleDiscountTabPres)
	}, [navigation])

	const screenList = [
		{ name: 'discount', component: Discount },
		{ name: 'serviceInfo', component: ServiceInfo }
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
})

export default DiscountNavigator
