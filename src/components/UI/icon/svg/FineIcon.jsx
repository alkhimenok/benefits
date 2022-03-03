import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const FineIcon = ({ width = 20, height = 20, color, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 49 35'>
			<Path
				d='M47.719 0.947705C48.7604 1.9891 48.7604 3.67754 47.719 4.71894L18.3856 34.0523C17.3442 35.0937 15.6558 35.0937 14.6144 34.0523L1.28105 20.7189C0.23965 19.6775 0.23965 17.9891 1.28105 16.9477C2.32245 15.9063 4.01089 15.9063 5.05229 16.9477L16.5 28.3954L43.9477 0.947705C44.9891 -0.0936931 46.6776 -0.0936931 47.719 0.947705Z'
				fill={isStroke ? null : color}
				stroke={isStroke ? color : null}
			/>
		</Svg>
	)
}

FineIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired,
	isStroke: PropTypes.bool
}

export default FineIcon
