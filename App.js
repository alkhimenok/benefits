import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { observer } from 'mobx-react-lite'
import StoreContext from 'providers/storeProvider'
import RootStore from 'store/RootStore'

import { SafeAreaView } from 'react-native-safe-area-context'
import ElButton from './src/components/elements/ElButton'

const store = new RootStore()

const App = observer(() => {
	const { loaded, waitLoading, finishLoading } = store.load

	return loaded ? (
		<StoreContext.Provider value={store}>
			<SafeAreaView style={{ alignItems: 'center' }}>
				<ElButton
					variation={'large'}
					type={'primary'}
					title={'Отправить'}
					isDisable={true}
				/>
			</SafeAreaView>
			<StatusBar />
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
