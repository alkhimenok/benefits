import Account from 'screens/account/Account'

const getAccountOptions = () => {
	const screenOptions = {
		headerShown: false
	}

	const screenList = [{ name: 'account', component: Account }]

	return { screenOptions, screenList }
}

export { getAccountOptions }
