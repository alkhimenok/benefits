import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const FurtherIcon = ({ width = 20, height = 20, color, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 22 22'>
			<Path
				d='M11.0006 2C6.02903 2 2 6.03011 2 11.0006C2 15.9709 6.03003 20 11.0006 20C15.9711 20 20 15.9711 20 11.0006C20 6.02886 15.971 2 11.0006 2ZM0 11.0006C0 4.92571 4.9243 0 11.0006 0C17.0757 0 22 4.92446 22 11.0006C22 17.0756 17.0756 22 11.0006 22C4.92579 22 0 17.0758 0 11.0006ZM11.0005 5.00032C11.5528 5.00032 12.0005 5.44804 12.0005 6.00032V11.5568C12.0005 12.1091 11.5528 12.5568 11.0005 12.5568C10.4482 12.5568 10.0005 12.1091 10.0005 11.5568V6.00032C10.0005 5.44804 10.4482 5.00032 11.0005 5.00032ZM11.0005 14C11.5528 14 12.0005 14.4477 12.0005 15V15.5C12.0005 16.0523 11.5528 16.5 11.0005 16.5C10.4482 16.5 10.0005 16.0523 10.0005 15.5V15C10.0005 14.4477 10.4482 14 11.0005 14Z'
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
