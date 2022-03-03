import COLORS from 'globalStyles/colors'

const getCurrentButtonColors = (isPrimary, isSecondary, isContour) => {
	switch (true) {
		case isPrimary:
			return [COLORS.light, COLORS.primary]
		case isSecondary:
			return [COLORS.light, COLORS.secondary]
		case isContour:
			return [COLORS.dark, COLORS.light]
		default:
			return [COLORS.dark, COLORS.neutral]
	}
}

const getCurrentIconSize = (isLarge, isSmall) => {
	switch (true) {
		case isLarge:
			return [18, 18]
		case isSmall:
			return [16, 16]
		default:
			return [15, 15]
	}
}

export { getCurrentButtonColors, getCurrentIconSize }
