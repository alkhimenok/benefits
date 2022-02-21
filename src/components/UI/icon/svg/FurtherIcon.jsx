import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const FurtherIcon = ({ width = 20, height = 20, color, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 6 10'>
			<Path
				d='M0.744078 1.07739C1.06951 0.751954 1.59715 0.751954 1.92259 1.07739L5.25592 4.41072C5.58136 4.73616 5.58136 5.2638 5.25592 5.58923L1.92259 8.92257C1.59715 9.24801 1.06951 9.24801 0.744078 8.92257C0.418641 8.59713 0.418641 8.06949 0.744078 7.74406L3.48816 4.99998L0.744078 2.2559C0.418641 1.93047 0.418641 1.40283 0.744078 1.07739Z'
				fill={isStroke || color}
				stroke={isStroke && color}
			/>
		</Svg>
	)
}

FurtherIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired,
	isStroke: PropTypes.bool
}

export default FurtherIcon
