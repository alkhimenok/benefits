import React from 'react'
import Icon from 'components/UI/icon/Icon'
import { calculateBase } from 'styles/units'
import COLORS from 'styles/colors'

const getTabOptions = (name, isFocused) => {
	const title = {
		discount: 'Скидки',
		favorites: 'Избранное',
		account: 'Аккаунт'
	}[name]

	const color = isFocused ? COLORS.primary : COLORS.paragraph

	const icon = (
		<Icon
			variation={'empty'}
			name={name}
			width={calculateBase(22, true)}
			height={calculateBase(22, true)}
			color={color}
		/>
	)

	return { title, color, icon }
}

export { getTabOptions }
