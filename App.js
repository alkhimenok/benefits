import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { observer } from 'mobx-react-lite'

import BottomTabBar from 'navigation/BottomTabBar'

import StoreContext from 'providers/storeProvider'
import RootStore from 'store/RootStore'

const store = new RootStore()

export const App = observer(() => {
	const { loaded, waitLoading, completeDownload } = store.load

	return loaded ? (
		<StoreContext.Provider value={store}>
			<SafeAreaView style={{ flex: 1 }}>
				<BottomTabBar />
				<StatusBar />
			</SafeAreaView>
		</StoreContext.Provider>
	) : (
		<AppLoading
			startAsync={waitLoading}
			onFinish={completeDownload}
			onError={console.warn}
		/>
	)
})

export default App
