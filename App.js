import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

import MainTabs from 'navigation/MainTabs'

export default function App() {
	// const [loaded] = useFonts({
	//   Montserrat: require('./assets/fonts/Montserrat.ttf'),
	// });
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<MainTabs />
			<StatusBar />
		</SafeAreaView>
	)
}
