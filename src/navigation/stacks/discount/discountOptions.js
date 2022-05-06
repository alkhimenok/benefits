import Discount from 'screens/discount/Discount'

const getDiscountOptions = () => {
	const screenOptions = {
		headerShown: false
	}

	const screenList = [{ name: 'discount', component: Discount }]

	const config = {
		velocityThreshold: 1.7,
		directionalOffsetThreshold: 80,
		gestureIsClickThreshold: 20
	}

	return { screenOptions, screenList, config }
}

export { getDiscountOptions }
