import React from 'react'
import PropTypes from 'prop-types'

import SearchIcon from 'components/svg/filter/SearchIcon'

import COLORS from 'constants/colors'

import * as Styled from './styledIcon'

const Icon = ({ id, iconName, isCircle, isWhite }) => {
  const currentColor = COLORS.dark // fix
	const currentIcon = getCurrentIcon(iconName, currentColor)

	return (
		<Styled.IconWrapper id={id}>
			<Styled.IconContent isCircle={isCircle} isWhite={isWhite}>
				{currentIcon}
			</Styled.IconContent>
		</Styled.IconWrapper>
	)
}

const getCurrentIcon = (name, color) => {
	switch (name) {
		case 'search':
			return <SearchIcon color={color} />
		default:
			return
	}
}

Icon.propTypes = {
	id: PropTypes.string,
	icon: PropTypes.func.isRequired,
	isWhite: PropTypes.bool,
	onPress: PropTypes.func
}

export default Icon
