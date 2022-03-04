import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { observer } from 'mobx-react-lite'
import StoreContext from 'providers/storeProvider'
import RootStore from 'store/RootStore'
import BottomTabNavigator from 'navigation/BottomTabNavigator'

const store = new RootStore()

export const App = observer(() => {
	const { loaded, waitLoading, completeDownload } = store.load

	return loaded ? (
		<StoreContext.Provider value={store}>
			<SafeAreaView style={{ flex: 1 }}>
				<BottomTabNavigator />
				<StatusBar />
			</SafeAreaView>
		</StoreContext.Provider>
	) : (
		<AppLoading
			startAsync={waitLoading}
			onFinish={completeDownload}
			onError={console.warn} // TODO: error handler
		/>
	)
})

export default App
