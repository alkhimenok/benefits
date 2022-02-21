import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const ImportantIcon = ({ color, width = 20, height = 20, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 14 18'>
			<Path
				d='M6.16665 8.16675C5.22896 9.07841 3.53036 8.73675 2.93724 7.58508L2.23783 6.22175C1.01901 7.40675 0.333313 9.01508 0.333313 10.6934V10.8517C0.333313 14.4317 3.3178 17.3334 6.99998 17.3334C10.6822 17.3334 13.6666 14.4317 13.6666 10.8517C13.6666 9.09508 12.849 7.43341 11.4416 6.33175L10.4079 5.52175C9.3622 4.70175 8.63022 3.56341 8.33194 2.29008L7.95138 0.666748C6.16686 2.40175 5.39202 4.89008 5.88744 7.29675L6.16665 8.16675Z'
				fill={isStroke || color}
				stroke={isStroke && color}
			/>
		</Svg>
	)
}

ImportantIcon.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	isStroke: PropTypes.bool
}

export default ImportantIcon
