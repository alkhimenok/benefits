import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import GestureRecognizerView from 'rn-swipe-gestures'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import Discount from 'screens/discount/Discount'
import ServiceInfo from 'screens/discount/ServiceInfo'

const DiscountNavigator = observer(({ navigation }) => {
	const { Navigator, Screen } = createStackNavigator()
	const { filterReset, focusedPrev } = useStore().filtration

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

	useEffect(() => {
		const backAction = () => {
			goBackFilter() && BackHandler.exitApp()

			return true
		}

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		)

		return () => backHandler.remove()
	}, [])

	const goBackFilter = () => {
		navigation.navigate('discount')

		return focusedPrev()
	}

	const config = {
		velocityThreshold: 1.7,
		directionalOffsetThreshold: 80,
		gestureIsClickThreshold: 20
	}

	const screenList = [
		{ name: 'discount', component: Discount },
		{ name: 'serviceInfo', component: ServiceInfo }
	]

	return (
		<GestureRecognizerView
			onSwipeLeft={goBackFilter}
			onSwipeRight={goBackFilter}
			config={config}
			style={{ flex: 1 }}
		>
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
		</GestureRecognizerView>
	)
})

export default DiscountNavigator
