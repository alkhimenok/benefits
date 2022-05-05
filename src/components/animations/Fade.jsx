import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'

const Fade = ({ duration, children }) => {
	const fadeAnim = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: duration,
			useNativeDriver: true
		}).start()
	}, [fadeAnim])

	return <Animated.View style={{ flex: 1, opacity: fadeAnim }}>{children}</Animated.View>
}

Fade.defaultProps = {
	duration: 500,
	children: <></>
}
Fade.propTypes = {
	duration: PropTypes.number,
	children: PropTypes.node
}

export default Fade
