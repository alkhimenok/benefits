import React from 'react'
import { View } from 'react-native'
import Fade from 'components/animations/Fade'

const Favorites = () => {
	return (
		<Fade>
			<View
				style={{
					flex: 1,
					backgroundColor: 'green'
					// transform: [{ translateY: -100 }]
				}}
			></View>
		</Fade>
	)
}

export default Favorites
