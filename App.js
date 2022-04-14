import 'react-native-gesture-handler'
import { observer } from 'mobx-react-lite'
import AppLoading from 'expo-app-loading'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import StoreContext from 'providers/storeProvider'
import RootStore from 'store/RootStore'
import AppNavigation from './src/navigation/AppNavigation'

const store = new RootStore()

const App = observer(() => {
	const { loaded, waitLoading, finishLoading } = store.load

	return loaded ? (
		<StoreContext.Provider value={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<AppNavigation />
					<StatusBar />
				</NavigationContainer>
			</SafeAreaProvider>
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
