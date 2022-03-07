import Icon from 'components/UI/icon/Icon'
import COLORS from 'globalStyles/colors'

const getTabOptions = (name, isFocused) => {
	const color = isFocused ? COLORS.primary : COLORS.paragraph
	const icon = getCurrentIcon(name, color)

	return { color, icon }
}

const getCurrentIcon = (name, color) => {
	const nameList = {
		'Скидки': 'discount',
		'Избранное': 'favorites',
		'Аккаунт': 'account'
	}

	return (
		<Icon // FIXME: svg problem
			name={nameList[name]}
			width={22}
			height={22}
			color={color}
			isOnlyIcon={true}
		/>
	)
}

export { getTabOptions }
