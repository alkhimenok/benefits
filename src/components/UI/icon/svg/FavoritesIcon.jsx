import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const FavoritesIcon = ({ color, width = 20, height = 20, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 18 16'>
			<Path
				d='M17.3332 5.9C17.3332 3.29375 15.361 0.5 12.4258 0.5C10.7406 0.5 9.63873 1.35313 8.99984 2.10312C8.36095 1.35313 7.2591 0.5 5.57391 0.5C2.63873 0.5 0.666504 3.29375 0.666504 5.9C0.666504 11.1781 8.85169 15.5 8.99984 15.5C9.14799 15.5 17.3332 11.1781 17.3332 5.9Z'
				fill={isStroke || color}
				stroke={isStroke && color}
			/>
		</Svg>
	)
}

FavoritesIcon.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	isStroke: PropTypes.bool
}

export default FavoritesIcon
