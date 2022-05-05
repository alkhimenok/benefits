import PropTypes from 'prop-types'
import { sizeInProportion } from 'helpers/utils'
import { iconSourceList, underlayColorList } from 'helpers/constants'
import COLORS from 'styles/colors'
import TRANSPARENCY from 'styles/transparency'
import { getIconOptions } from './iconOptions'
import * as S from './styledIcon'

const Icon = ({
	variation,
	name,
	designWidth,
	designHeight,
	color,
	backgroundColor,
	isCircle,
	onPress
}) => {
	const source = iconSourceList[name]
	const underlayColor = underlayColorList[backgroundColor]
	const resizeMode = 'contain'
	const { touchWidth, touchHeight, borderRadius } = getIconOptions(variation, isCircle)
	const { width, height } = sizeInProportion(designWidth, designHeight, false, true)

	return (
		<S.IconWrapper
			activeOpacity={TRANSPARENCY.half}
			underlayColor={underlayColor}
			onPress={onPress}
			//
			width={touchWidth}
			height={touchHeight}
			borderRadius={borderRadius}
			backgroundColor={backgroundColor}
		>
			<S.IconBody
				source={source}
				resizeMode={resizeMode}
				tintColor={color}
				style={{ tintColor: color }}
				//
				width={width}
				height={height}
			/>
		</S.IconWrapper>
	)
}

Icon.defaultProps = {
	variation: 'middle',
	name: 'default',
	designWidth: 20,
	designHeight: 20,
	color: COLORS.dark,
	backgroundColor: COLORS.transparent,
	isCircle: false,
	onPress: () => console.log('icon press')
}
Icon.propTypes = {
	variation: PropTypes.string,
	name: PropTypes.string,
	designWidth: PropTypes.number,
	designHeight: PropTypes.number,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	isCircle: PropTypes.bool,
	onPress: PropTypes.func
}

export default Icon
