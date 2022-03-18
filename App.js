import 'react-native-gesture-handler'
import React from 'react'
import { observer } from 'mobx-react-lite'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import StoreContext from 'providers/storeProvider'
import RootStore from 'store/RootStore'
import AppNavigation from './src/navigation/AppNavigation'

const store = new RootStore()

const App = observer(() => {
	const { loaded, waitLoading, finishLoading } = store.load

	return loaded ? (
		<NavigationContainer>
			<StoreContext.Provider value={store}>
				<SafeAreaProvider>
					<AppNavigation />
					<StatusBar />
				</SafeAreaProvider>
			</StoreContext.Provider>
		</NavigationContainer>
	) : (
		<AppLoading
			startAsync={waitLoading}
			onFinish={finishLoading}
			onError={console.warn} // TODO: error handler
		/>
	)
})

export default App
