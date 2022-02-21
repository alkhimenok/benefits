import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const InstagramIcon = ({ color, width = 20, height = 20, isStroke }) => {

	return (
		<Svg width={width} height={height} viewBox='0 0 18 18'>
			<Path
				d='M5.24699 2.33335C3.63735 2.33335 2.33366 3.63764 2.33366 5.24669V12.7534C2.33366 14.363 3.63794 15.6667 5.24699 15.6667H12.7537C14.3634 15.6667 15.667 14.3623 15.667 12.7542V5.24669C15.667 3.63692 14.3626 2.33335 12.7545 2.33335H5.24699ZM0.666992 5.24669C0.666992 2.7174 2.71663 0.666687 5.24699 0.666687H12.7545C15.2831 0.666687 17.3337 2.71645 17.3337 5.24669V12.7542C17.3337 15.2828 15.2839 17.3334 12.7537 17.3334H5.24699C2.71771 17.3334 0.666992 15.2837 0.666992 12.7534V5.24669ZM12.4979 4.25895C12.6986 3.84478 13.197 3.67174 13.6112 3.87245C13.7012 3.91607 13.7843 3.97127 13.8584 4.03604C13.9417 4.10878 14.0143 4.194 14.0733 4.28924C14.3154 4.68063 14.1944 5.19421 13.803 5.43634C13.457 5.65039 13.0156 5.58068 12.7505 5.29126C12.4352 5.05737 12.3204 4.62521 12.4979 4.25895ZM10.5324 7.46796C9.68627 6.62182 8.31441 6.62182 7.46827 7.46796C6.62213 8.3141 6.62213 9.68595 7.46827 10.5321C8.31441 11.3782 9.68627 11.3782 10.5324 10.5321C11.3785 9.68595 11.3785 8.3141 10.5324 7.46796ZM6.28976 6.28945C7.78677 4.79244 10.2139 4.79244 11.7109 6.28945C13.2079 7.78646 13.2079 10.2136 11.7109 11.7106C10.2139 13.2076 7.78677 13.2076 6.28976 11.7106C4.79275 10.2136 4.79275 7.78646 6.28976 6.28945Z'
				fill={isStroke || color}
				stroke={isStroke && color}
			/>
		</Svg>
	)
}

InstagramIcon.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	isStroke: PropTypes.bool
}

export default InstagramIcon
