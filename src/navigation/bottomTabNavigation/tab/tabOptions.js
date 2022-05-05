import Icon from 'components/UI/icon/Icon'
import COLORS from 'styles/colors'

const getTabOptions = (name, isFocused) => {
	const title = {
		discount: 'Скидки',
		favorites: 'Избранное',
		account: 'Аккаунт'
	}[name]

	const color = isFocused ? COLORS.primary : COLORS.paragraph

	const icon = <Icon variation={'empty'} name={name} width={22} height={22} color={color} />

	return { title, color, icon }
}

export { getTabOptions }
