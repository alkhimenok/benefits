import React from 'react'
import PropTypes from 'prop-types'

import DiscountIcon from 'components/svg/navigation/DiscountIcon'
import FavoritesIcon from 'components/svg/navigation/FavoritesIcon'
import AccountIcon from 'components/svg/navigation/AccountIcon'

import COLORS from 'constants/colors'

import * as Styled from './styledCustomTab'

const CustomTab = ({ name, focused }) => {
	const currentColor = focused ? COLORS.primary : COLORS.paragraph
	const currentIcon = getCurrentIcon(name, currentColor)

	return (
		<Styled.TabWrapper>
			<Styled.TabIconWrapper>{currentIcon}</Styled.TabIconWrapper>
			<Styled.TabName color={currentColor}>{name}</Styled.TabName>
		</Styled.TabWrapper>
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
