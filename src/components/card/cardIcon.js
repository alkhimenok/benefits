import React from 'react'

import Icon from 'components/UI/icon/Icon'

import COLORS from 'constants/colors'

const getCurrentCardIcon = (name, condition, onPress) => {
	switch (name) {
		case 'more':
			return (
				<Icon
					name={'more'}
					width={13}
					height={13}
					color={condition ? COLORS.dark : COLORS.light}
					backgroundColor={condition ? COLORS.neutral : COLORS.dark}
					isCircle={true}
					isLarge={condition}
					onPress={onPress}
				/>
			)
		case 'favorites':
			return (
				<Icon
					name={'favorites'}
					width={15}
					height={15}
					color={condition ? COLORS.primary : COLORS.dark}
					backgroundColor={COLORS.lightTransparent}
					isCircle={true}
					isLarge={true}
					isStroke={!condition}
					onPress={onPress}
				/>
			)
		default:
			return <Icon name={name} />
	}
}

export { getCurrentCardIcon }
