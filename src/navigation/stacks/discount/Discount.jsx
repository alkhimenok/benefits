import { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import GestureRecognizerView from 'rn-swipe-gestures'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import { discount } from 'constants/navigationRoutes'
import { getDiscountOptions } from './discountOptions'

const Discount = observer(({ navigation }) => {
	const { Navigator, Screen } = createStackNavigator()
	const { filterReset, focusedPrev } = useStore().filtration
	const { screenOptions, screenList, config } = getDiscountOptions()

	const goBackFilter = () => {
		navigation.navigate(discount)

		return focusedPrev()
	}

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
		const handleBackGestures = () => {
			goBackFilter() && BackHandler.exitApp()

			return true
		}

		const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackGestures)

		return () => backHandler.remove()
	}, [])

	return (
		<GestureRecognizerView
			config={config}
			style={{ flex: 1 }}
			onSwipeLeft={goBackFilter}
			onSwipeRight={goBackFilter}
		>
			<Navigator screenOptions={screenOptions}>
				{screenList.map(({ name, component }) => (
					<Screen name={name} component={component} key={name} />
				))}
			</Navigator>
		</GestureRecognizerView>
	)
})

export default Discount
