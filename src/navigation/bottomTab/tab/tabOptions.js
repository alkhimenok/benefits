import Icon from 'components/UI/icon/Icon'
import COLORS from 'styles/colors'

const getTabOptions = (name, isFocused) => {
	const title = {
		discountStack: 'Скидки',
		favoritesStack: 'Избранное',
		accountStack: 'Аккаунт'
	}[name]

	const iconName = {
		discountStack: 'discount',
		favoritesStack: 'favorites',
		accountStack: 'account'
	}[name]

	const color = isFocused ? COLORS.primary : COLORS.paragraph

	const icon = <Icon variation={'empty'} name={iconName} width={22} height={22} color={color} />

	return { title, color, icon }
}

export { getTabOptions }
