import React from 'react'
import PropTypes from 'prop-types'
import { Svg, Path } from 'react-native-svg'

const DiscountIcon = ({ width = 20, height = 20, color, isStroke }) => {
	return (
		<Svg width={width} height={height} viewBox='0 0 22 23'>
			<Path
				d='M14.7601 2.4214L13.2348 1.25627C11.9153 0.248103 10.0854 0.248228 8.76579 1.25627L7.23914 2.42168L5.3408 2.67406C3.6934 2.89242 2.39657 4.18789 2.17671 5.83545L1.92198 7.74044L0.755363 9.26623C-0.251833 10.5847 -0.251765 12.4154 0.755431 13.7339L1.92158 15.26L2.17327 17.1593C2.39149 18.8069 3.68717 20.1038 5.33488 20.3237L7.24024 20.5784L8.76591 21.7438C10.0855 22.7521 11.9152 22.752 13.2348 21.7437L14.7615 20.5773L16.6593 20.326C18.3071 20.1078 19.6042 18.8123 19.8239 17.1644L20.0777 15.2594L21.244 13.7339C22.2529 12.4137 22.2508 10.5843 21.2445 9.26556L20.0802 7.73931L19.8285 5.83959C19.6102 4.19186 18.3145 2.8949 16.6667 2.6752L14.7601 2.4214ZM8.28559 4.13899C8.1437 4.25998 7.96663 4.34256 7.76902 4.36883L5.60438 4.65662C4.85195 4.75624 4.25946 5.34765 4.15917 6.0998L3.86909 8.26911C3.84599 8.44184 3.77816 8.60554 3.67231 8.74397L2.34467 10.4804C1.88532 11.082 1.88515 11.9181 2.34467 12.5196L3.6725 14.2574C3.77848 14.3961 3.84631 14.5601 3.86925 14.7332L4.15594 16.8966C4.25555 17.6488 4.8469 18.2409 5.59919 18.3412L7.76864 18.6313C7.94122 18.6543 8.10479 18.7221 8.24315 18.8278L9.97997 20.1545C10.5827 20.615 11.4178 20.6151 12.0205 20.1546L13.7147 18.8602C13.8568 18.7389 14.0342 18.6562 14.2321 18.63L16.3967 18.3433C17.1492 18.2437 17.7412 17.6524 17.8415 16.9002L18.1304 14.7314C18.1534 14.5585 18.2213 14.3946 18.3272 14.256L19.655 12.5195C20.1151 11.9174 20.115 11.0823 19.6545 10.4788L18.3287 8.74086C18.223 8.60229 18.1554 8.4385 18.1325 8.26572L17.8458 6.10233C17.7462 5.35011 17.1549 4.75808 16.4027 4.65771L14.2325 4.36881C14.0598 4.34581 13.896 4.27804 13.7575 4.17223L12.0207 2.84553C11.4179 2.38495 10.5829 2.38486 9.9801 2.84544L8.28559 4.13899Z'
				fill={isStroke || color}
				stroke={isStroke && color}
			/>
			<Path
				d='M9.1655 9.67622C9.50874 9.39915 9.63822 8.91665 9.45134 8.49396C9.22803 7.98883 8.63751 7.76038 8.13239 7.9837C7.9939 8.04493 7.86478 8.13168 7.7529 8.24236C7.64415 8.34995 7.55795 8.47415 7.49587 8.60778C7.26318 9.10866 7.48058 9.70333 7.98145 9.93602C8.39895 10.13 8.88162 10.0112 9.1655 9.67622Z'
				fill={color}
			/>
			<Path
				d='M14.0404 9.87373C14.4309 9.48322 14.4309 8.85006 14.0404 8.45952C13.6499 8.06898 13.0168 8.06896 12.6262 8.45948L7.95913 13.1263C7.56859 13.5168 7.56857 14.1499 7.95909 14.5405C8.3496 14.931 8.98276 14.931 9.3733 14.5405L14.0404 9.87373Z'
				fill={color}
			/>
			<Path
				d='M14.5545 14.2688C14.7335 13.7464 14.455 13.1777 13.9325 12.9988C13.5171 12.8565 13.0726 13.0034 12.8179 13.3321C12.4942 13.595 12.358 14.0445 12.5115 14.4571C12.7041 14.9747 13.2798 15.2382 13.7974 15.0456C13.9633 14.9838 14.118 14.8866 14.249 14.7563C14.3904 14.6161 14.4931 14.4483 14.5545 14.2688Z'
				fill={color}
			/>
		</Svg>
	)
}

DiscountIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string.isRequired,
	isStroke: PropTypes.bool
}

export default DiscountIcon
