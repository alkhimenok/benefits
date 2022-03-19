import React from 'react'
import { View } from 'react-native'
import Fade from 'components/animations/Fade'

const Account = () => {
	return (
		<Fade>
			<View
				style={{
					flex: 1,
					backgroundColor: 'red'
					// transform: [{ translateY: -100 }]
				}}
			></View>
		</Fade>
	)
}

export default Account
