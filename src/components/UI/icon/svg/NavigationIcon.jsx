import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const NavigationIcon = ({ width = 20, height = 20, color }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 14 14'>
			<Path
				d='M13.5527 0.447956C13.4407 0.335687 13.272 0.302378 13.1258 0.363656L0.573064 5.62449C0.416886 5.68994 0.320685 5.84872 0.334878 6.01758C0.349072 6.18644 0.47043 6.32689 0.635332 6.3653L6.10445 7.63914C6.21011 7.66375 6.29272 7.74602 6.31777 7.85157L7.6256 13.3631C7.66461 13.5276 7.80488 13.6483 7.97319 13.6622C7.984 13.6631 7.99475 13.6635 8.00546 13.6635C8.16143 13.6635 8.30385 13.5701 8.36508 13.4242L13.6363 0.875393C13.6977 0.729138 13.6647 0.560226 13.5527 0.447956Z'
				fill={color}
			/>
		</Svg>
	)
}

NavigationIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired
}

export default NavigationIcon
