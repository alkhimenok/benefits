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
		<StoreContext.Provider value={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<AppNavigation />
					<StatusBar />
				</SafeAreaProvider>
			</NavigationContainer>
		</StoreContext.Provider>
	) : (
		<AppLoading
			startAsync={waitLoading}
			onFinish={finishLoading}
			onError={console.warn}
		/>
	)
})

export default App
