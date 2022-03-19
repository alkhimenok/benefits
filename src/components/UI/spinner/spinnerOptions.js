import COLORS from 'styles/colors'

const getSpinnerOptions = (type) => {
	return {
		primary: COLORS.primary,
		secondary: COLORS.secondary,
		default: COLORS.neutralDark
	}[type]
}

export { getSpinnerOptions }
