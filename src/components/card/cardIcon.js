import React from 'react'

import Icon from 'components/UI/icon/Icon'

import COLORS from 'constants/colors'

const getCurrentCardIcon = (name) => {
	switch (name) {
		case 'more':
			return (
				<Icon
					name={'more'}
					width={13}
					height={13}
					color={COLORS.light}
					backgroundColor={COLORS.dark}
				/>
			)
		case 'favorites':
			return (
				<Icon
					name={'favorites'}
					width={15}
					height={15}
					color={COLORS.primary}
					backgroundColor={COLORS.lightTransparent}
					isCircle={true}
					isLarge={true}
				/>
			)
		default:
			return <Icon name={name} />
	}
}

export { getCurrentCardIcon }
