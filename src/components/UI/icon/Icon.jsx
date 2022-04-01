import PropTypes from 'prop-types'
import { iconSourceList, underlayColorList } from 'helpers/constants'
import COLORS from 'styles/colors'
import TRANSPARENCY from 'styles/transparency'
import { getIconOptions } from './iconOptions'
import * as S from './styledIcon'

const Icon = ({
	variation,
	name,
	width,
	height,
	color,
	backgroundColor,
	isCircle,
	onPress
}) => {
	const source = iconSourceList[name]
	const underlayColor = underlayColorList[backgroundColor]
	const resizeMode = 'contain'
	const { touchWidth, touchHeight, borderRadius } = getIconOptions(
		variation,
		isCircle
	)

	return (
		<S.Touch
			activeOpacity={TRANSPARENCY.half}
			underlayColor={underlayColor}
			onPress={onPress}
			//
			width={touchWidth}
			height={touchHeight}
			borderRadius={borderRadius}
			backgroundColor={backgroundColor}
		>
			<S.IconWrapper
				source={source}
				resizeMode={resizeMode}
				tintColor={color}
				style={{ tintColor: color }}
				//
				width={width}
				height={height}
			/>
		</S.Touch>
	)
}

Icon.defaultProps = {
	variation: 'middle',
	name: 'default',
	width: '80%',
	height: '80%',
	color: COLORS.dark,
	backgroundColor: COLORS.transparent,
	isCircle: false,
	onPress: () => console.log('icon press')
}
Icon.propTypes = {
	variation: PropTypes.string,
	name: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	isCircle: PropTypes.bool,
	onPress: PropTypes.func
}

export default Icon
