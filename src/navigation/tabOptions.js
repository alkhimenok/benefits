import Icon from 'components/UI/icon/Icon'
import COLORS from 'globalStyles/colors'

const getTabOptions = (name, isFocused) => {
	const currentColor = isFocused ? COLORS.primary : COLORS.paragraph
	const currentIcon = getCurrentIcon(name, currentColor)

	return { currentIcon, currentColor }
}

const getCurrentIcon = (name, color) => {
	switch (name) {
		case 'Скидки':
			return (
				<Icon
					name={'discount'}
					width={22}
					height={22}
					color={color}
					isStroke={true}
				/>
			)
		case 'Избранное':
			return (
				<Icon
					name={'favorites'}
					width={22}
					height={22}
					color={color}
					isStroke={true}
				/>
			)
		case 'Аккаунт':
			return (
				<Icon
					name={'account'}
					width={22}
					height={22}
					color={color}
					isStroke={false}
				/>
			)
		default:
			return
	}
}

export { getTabOptions }
