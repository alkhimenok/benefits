import PropTypes from 'prop-types'
import { underlayColorList } from 'helpers/constants'
import Icon from 'components/UI/icon/Icon'
import Text from 'components/UI/text/Text'
import TRANSPARENCY from 'styles/transparency'
import { getButtonOptions } from './buttonOptions'
import * as S from './styledButton'

const Button = ({ variation, type, title, icon, isDisable, onPress }) => {
	const isContainsIcon = !!icon.name
	const iconBeginning = icon.position !== 'end'
	const {
		wrapperHeight,
		wrapperPaddingHorizontal,
		iconWidth,
		iconHeight,
		textVariation,
		fontWeight,
		color,
		wrapperBackgroundColor,
		wrapperBorder,
		opacity
	} = getButtonOptions(variation, type, isDisable)
	const underlayColor = underlayColorList[wrapperBackgroundColor]

	return (
		<S.ButtonWrapper
			activeOpacity={TRANSPARENCY.half}
			underlayColor={underlayColor}
			disabled={isDisable}
			onPress={onPress}
			//
			wrapperHeight={wrapperHeight}
			wrapperPaddingHorizontal={wrapperPaddingHorizontal}
			wrapperBackgroundColor={wrapperBackgroundColor}
			wrapperBorder={wrapperBorder}
			opacity={opacity}
		>
			<S.ButtonBody iconBeginning={iconBeginning}>
				{isContainsIcon && (
					<S.ButtonIconWrapper
						pointerEvents={'none'}
						//
						iconBeginning={iconBeginning}
					>
						<Icon
							variation={'empty'}
							name={icon.name}
							designWidth={iconWidth}
							designHeight={iconHeight}
							color={color}
						/>
					</S.ButtonIconWrapper>
				)}
				<Text variation={textVariation} fontWeight={fontWeight} color={color}>
					{title}
				</Text>
			</S.ButtonBody>
		</S.ButtonWrapper>
	)
}

Button.defaultProps = {
	variation: 'middle',
	type: 'default',
	title: '',
	icon: { name: '', position: 'start' },
	isDisable: false,
	onPress: () => console.log('button press')
}
Button.propTypes = {
	variation: PropTypes.string,
	type: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.object,
	isDisable: PropTypes.bool,
	onPress: PropTypes.func
}

export default Button
