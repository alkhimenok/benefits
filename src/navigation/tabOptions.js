import Icon from 'components/UI/icon/Icon'

import COLORS from 'constants/colors'

const getTabOptions = (name, focused) => {
	const currentColor = focused ? COLORS.primary : COLORS.paragraph
	const currentIcon = getCurrentIcon(name, currentColor)

  return { currentColor, currentIcon }
}

const getCurrentIcon = (name, color) => {
	switch (name) {
		case 'Скидки':
			return <Icon name={'discount'} width={22} height={22} color={color} isStroke={true} />
		case 'Избраное':
			return <Icon name={'favorites'} width={22} height={22} color={color} isStroke={true} />
		case 'Аккаунт':
			return <Icon name={'account'} width={22} height={22} color={color} />
		default:
			return
	}
}

export { getTabOptions }