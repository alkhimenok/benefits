import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const BackIcon = ({ color, width = 20, height = 20, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 15 12'>
			<Path
				d='M6.93335 0.400767C7.25882 0.726177 7.25886 1.25381 6.93345 1.57928L3.36325 5.15007H13.8333C14.2936 5.15007 14.6666 5.52317 14.6666 5.98341C14.6666 6.44364 14.2936 6.81674 13.8333 6.81674H3.32992L6.93345 10.4209C7.25886 10.7463 7.25882 11.274 6.93335 11.5994C6.60789 11.9248 6.08025 11.9247 5.75484 11.5993L0.745677 6.58928C0.500554 6.34412 0.440097 5.98423 0.564307 5.68247C0.619904 5.53896 0.7141 5.41468 0.834157 5.32237L5.75484 0.400865C6.08025 0.075401 6.60789 0.0753571 6.93335 0.400767Z'
				fill={isStroke || color}
				stroke={isStroke && color}
			/>
		</Svg>
	)
}

BackIcon.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	isStroke: PropTypes.bool
}

export default BackIcon
