import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const DeniedIcon = ({ width = 20, height = 20, color }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 28 28'>
			<Path
				d='M1.44804 1.44767C2.48944 0.406276 4.17788 0.406276 5.21928 1.44767L14.0003 10.2287L22.7814 1.44767C23.8228 0.406276 25.5112 0.406276 26.5526 1.44767C27.594 2.48907 27.594 4.17751 26.5526 5.21891L17.7716 14L26.5526 22.781C27.594 23.8224 27.594 25.5108 26.5526 26.5522C25.5112 27.5936 23.8228 27.5936 22.7814 26.5522L14.0003 17.7712L5.21928 26.5522C4.17788 27.5936 2.48944 27.5936 1.44804 26.5522C0.406643 25.5108 0.406643 23.8224 1.44804 22.781L10.2291 14L1.44804 5.21891C0.406643 4.17751 0.406643 2.48907 1.44804 1.44767Z'
				fill={color}
			/>
		</Svg>
	)
}

DeniedIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired
}

export default DeniedIcon
