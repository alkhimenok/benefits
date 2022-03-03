import React from 'react'
import Icon from 'components/UI/icon/Icon'
import COLORS from 'globalStyles/colors'

const getCurrentCardIcon = (name, condition, onPress) => {
	switch (name) {
		case 'more':
			return (
				<Icon
					name={'more'}
					width={13}
					height={13}
					color={COLORS.light}
					backgroundColor={COLORS.dark}
					isCircle={true}
					onPress={onPress}
				/>
			)
		case 'favorites':
			return (
				<Icon
					name={'favorites'}
					width={17}
					height={15}
					color={condition ? COLORS.primary : COLORS.dark}
					backgroundColor={COLORS.lightTransparent}
					isCircle={true}
					isStroke={!condition}
					onPress={onPress}
				/>
			)
		default:
			return <Icon name={name} />
	}
}

export { getCurrentCardIcon }
