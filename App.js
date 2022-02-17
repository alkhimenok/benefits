import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<Button title='Нажми на меня' />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
