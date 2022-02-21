import COLORS from 'constants/colors'

const getCurrentButtonColors = (isFocused, isDisabled, isWhite) => {
	if (isFocused && isDisabled) {
		return [COLORS.light, COLORS.primaryTransparent]
	} else if (isDisabled && isWhite) {
		return [COLORS.darkTransparent, COLORS.light]
	} else if (isDisabled) {
		return [COLORS.darkTransparent, COLORS.neutralTransparent]
	} else if (isFocused) {
		return [COLORS.light, COLORS.primary]
	} else if (isWhite) {
		return [COLORS.dark, COLORS.light]
	} else {
		return [COLORS.dark, COLORS.neutral]
	}
}

export { getCurrentButtonColors }
