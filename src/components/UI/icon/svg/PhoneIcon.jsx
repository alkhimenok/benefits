import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const PhoneIcon = ({ width = 20, height = 20, color }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 16 16'>
			<Path
				d='M5.35093 1.00241C4.37466 0.0261351 2.79203 0.0261351 1.81576 1.00241L1.27242 1.54574C0.448515 2.36965 0.119866 3.54382 0.33446 4.68117C0.781448 7.0455 2.13938 9.57621 4.28159 11.7184C6.4238 13.8606 8.9545 15.2186 11.3188 15.6655C12.4562 15.8801 13.6304 15.5515 14.4543 14.7276L14.9968 14.1851C15.973 13.2088 15.973 11.6262 14.9968 10.6499L14.0193 9.67241C13.2058 8.85891 11.8861 8.85819 11.0728 9.67291L10.4183 10.3281C9.45417 9.88183 8.49836 9.2265 7.63593 8.36407C6.77358 7.50172 6.11899 6.54595 5.67352 5.58178L6.25843 4.99758C7.11271 4.14331 7.17256 2.82403 6.32927 1.98074L5.35093 1.00241ZM4.17242 2.18092C3.84703 1.85552 3.31966 1.85552 2.99427 2.18092L2.45093 2.72425C2.13089 3.0443 1.94706 3.48338 1.93736 3.95912C1.9346 4.09437 1.94591 4.23258 1.97217 4.37186C2.34858 6.36245 3.52074 8.60054 5.4601 10.5399C7.39956 12.4794 9.63748 13.6515 11.6281 14.0278C12.2574 14.1465 12.8647 13.9601 13.2758 13.5491L13.8183 13.0066C14.1437 12.6812 14.1437 12.1538 13.8183 11.8284L12.8408 10.8509C12.6776 10.6877 12.4139 10.6885 12.2523 10.8504L11.4996 11.6039C11.0938 12.0097 10.4563 12.1681 9.88441 11.9157C8.68058 11.384 7.5035 10.5887 6.45742 9.54258C5.41122 8.49638 4.6167 7.31923 4.08584 6.11537C3.8336 5.5435 3.99206 4.9061 4.39778 4.50038L5.08008 3.81891C5.2178 3.68112 5.2616 3.54314 5.26438 3.44016C5.26715 3.33704 5.23089 3.23939 5.15076 3.15925L4.70425 2.71275L4.17242 2.18092Z'
				fill={color}
			/>
		</Svg>
	)
}

PhoneIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired
}

export default PhoneIcon
