import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import DiscountIcon from 'components/svg/DiscountIcon'
import FavoritesIcon from 'components/svg/FavoritesIcon'
import AccountIcon from 'components/svg/AccountIcon'

import UNITS from 'constants/units'
import COLORS from 'constants/colors'

const CustomTab = ({ name, focused }) => {
	const currentColor = focused ? COLORS.primary : COLORS.paragraph
	const currentIcon = getCurrentIcon(name, currentColor)

	return (
		<View style={{ alignItems: 'center' }}>
			<View style={{ marginBottom: 3 }}>{currentIcon}</View>
			<Text
				style={{
					fontFamily: 'primarySemiBold',
					fontSize: UNITS.sm,
					color: currentColor
				}}
			>
				{name}
			</Text>
		</View>
	)
}

const getCurrentIcon = (name, color) => {
	switch (name) {
		case 'Скидки':
			return <DiscountIcon color={color} />
		case 'Избраное':
			return <FavoritesIcon color={color} />
		case 'Аккаунт':
			return <AccountIcon color={color} />
		default:
			return ''
	}
}

CustomTab.propTypes = {
	name: PropTypes.string.isRequired,
	focused: PropTypes.bool.isRequired
}

export default CustomTab
