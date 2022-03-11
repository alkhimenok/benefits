import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { observer } from 'mobx-react-lite'
import { StatusBar } from 'expo-status-bar'
import StoreContext from 'providers/storeProvider'
import RootStore from 'store/RootStore'
import BottomTabNavigator from 'navigation/BottomTabNavigator'

const store = new RootStore()

const App = observer(() => {
	const { loaded, waitLoading, finishLoading } = store.load

	return loaded ? (
		<StoreContext.Provider value={store}>
			<SafeAreaProvider>
				<BottomTabNavigator />
				<StatusBar />
			</SafeAreaProvider>
		</StoreContext.Provider>
	) : (
		<AppLoading
			startAsync={waitLoading}
			onFinish={finishLoading}
			onError={console.warn} // TODO: error handler
		/>
	)
})

export default App
