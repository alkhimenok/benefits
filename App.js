import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

import BottomTabBar from 'navigation/BottomTabBar'

import { loadFonts } from 'utils/load/fonts'

export const App = () => {
	const [loaded, setLoaded] = useState(false)

	return loaded ? (
		<SafeAreaView style={{ flex: 1 }}>
			<BottomTabBar />
			<StatusBar />
		</SafeAreaView>
	) : (
		<AppLoading
			startAsync={loadFonts}
			onFinish={() => setLoaded(true)}
			onError={console.warn}
		/>
	)
}

export default App
