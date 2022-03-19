import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'

const Descent = ({ duration, children }) => {
	const descentAnim = useRef(new Animated.Value(-100)).current

	useEffect(() => {
		Animated.timing(descentAnim, {
			toValue: 0,
			duration: duration,
			useNativeDriver: true
		}).start()
	}, [descentAnim])

	return (
		<Animated.View
			style={{ flex: 1, transform: [{ translateY: descentAnim }] }}
		>
			{children}
		</Animated.View>
	)
}

Descent.defaultProps = {
	duration: 500,
	children: <></>
}
Descent.propTypes = {
	duration: PropTypes.number,
	children: PropTypes.node
}

export default Descent
