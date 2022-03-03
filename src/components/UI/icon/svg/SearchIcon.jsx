import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const SearchIcon = ({ width = 20, height = 20, color, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 16 16'>
			<Path
				d='M9.23836 3.24082C7.62061 1.62307 4.99772 1.62307 3.37998 3.24082C1.76223 4.85856 1.76223 7.48145 3.37998 9.0992C4.96845 10.6877 7.52603 10.7164 9.14958 9.18541C9.1673 9.16404 9.18626 9.14334 9.20645 9.12343C9.22754 9.10263 9.24945 9.08318 9.27208 9.06509C10.856 7.44479 10.8448 4.84724 9.23836 3.24082ZM10.9333 9.68732C12.67 7.41015 12.4978 4.14324 10.4169 2.06231C8.14825 -0.206315 4.47009 -0.206315 2.20147 2.06231C-0.067155 4.33093 -0.067155 8.00909 2.20147 10.2777C4.25758 12.3338 7.47154 12.5264 9.74457 10.8555L14.0735 15.2436C14.3967 15.5712 14.9243 15.5748 15.2519 15.2516C15.5796 14.9284 15.5832 14.4007 15.2599 14.0731L10.9333 9.68732Z'
				fill={isStroke ? null : color}
				stroke={isStroke ? color : null}
			/>
		</Svg>
	)
}

SearchIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired,
	isStroke: PropTypes.bool
}

export default SearchIcon
