import { StatusBar } from 'expo-status-bar'
import { View, Text, Button } from 'react-native'

export default function App() {
	return (
		<View>
			<Text>Hello World!</Text>
			<Button title='Нажми на меня' />
			<StatusBar style='auto' />
		</View>
	)
}
