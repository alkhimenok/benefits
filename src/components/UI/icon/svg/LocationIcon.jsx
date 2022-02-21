import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const LocationIcon = ({ width = 20, height = 20, color, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 18 20'>
			<Path
				d='M9.00033 2.49998C7.22129 2.49998 5.52174 3.17823 4.2739 4.37523C3.02725 5.57109 2.33366 7.18546 2.33366 8.86108C2.33366 10.5367 3.02725 12.1511 4.2739 13.3469L8.32748 17.2354C8.50024 17.4011 8.74168 17.5 9.00033 17.5C9.25898 17.5 9.50041 17.4011 9.67317 17.2354L13.7267 13.3469C14.9734 12.1511 15.667 10.5367 15.667 8.86108C15.667 7.18546 14.9734 5.57109 13.7267 4.37523C12.4789 3.17823 10.7794 2.49998 9.00033 2.49998ZM3.12015 3.17247C4.68536 1.67103 6.80111 0.833313 9.00033 0.833313C11.1995 0.833313 13.3153 1.67103 14.8805 3.17247C16.4469 4.67504 17.3337 6.72054 17.3337 8.86108C17.3337 11.0016 16.4469 13.0471 14.8805 14.5497L10.8269 18.4381C10.3368 18.9083 9.67915 19.1666 9.00033 19.1666C8.3215 19.1666 7.66386 18.9083 7.17372 18.4381L3.12015 14.5497C1.55376 13.0471 0.666992 11.0016 0.666992 8.86108C0.666992 6.72054 1.55376 4.67504 3.12015 3.17247ZM9.00078 7.22607C8.00678 7.22607 7.26076 7.99049 7.26076 8.86125C7.26076 9.73201 8.00678 10.4964 9.00078 10.4964C9.99478 10.4964 10.7408 9.73201 10.7408 8.86125C10.7408 7.99049 9.99478 7.22607 9.00078 7.22607ZM5.59409 8.86125C5.59409 7.00536 7.15233 5.5594 9.00078 5.5594C10.8492 5.5594 12.4075 7.00536 12.4075 8.86125C12.4075 10.7171 10.8492 12.1631 9.00078 12.1631C7.15233 12.1631 5.59409 10.7171 5.59409 8.86125Z'
				fill={isStroke || color}
				stroke={isStroke && color}
			/>
		</Svg>
	)
}

LocationIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired,
	isStroke: PropTypes.bool
}

export default LocationIcon