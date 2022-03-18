import React from 'react'
import PropTypes from 'prop-types'
import { underlayColorList } from 'helpers/constants'
import Icon from 'components/UI/icon/Icon'
import Text from 'components/UI/text/Text'
import TRANSPARENCY from 'styles/transparency'
import { getButtonOptions } from './buttonOptions'
import * as S from './styledButton'

const ElButton = ({ variation, type, title, icon, isDisable, onPress }) => {
	const isContainsIcon = !!icon.name
	const iconBeginning = icon.position !== 'end'
	const underlayColor = underlayColorList[backgroundColor]
	const {
		height,
		paddingHorizontal,
		iconWidth,
		iconHeight,
		textVariation,
		fontWeight,
		color,
		backgroundColor,
		border,
		opacity
	} = getButtonOptions(variation, type, isDisable)

	return (
		<S.Touch
			activeOpacity={TRANSPARENCY.half}
			underlayColor={underlayColor}
			disabled={isDisable}
			onPress={onPress}
			//
			height={height}
			paddingHorizontal={paddingHorizontal}
			backgroundColor={backgroundColor}
			border={border}
			opacity={opacity}
		>
			<S.Button iconBeginning={iconBeginning}>
				{isContainsIcon && (
					<S.IconWrapper
						pointerEvents={'none'}
						//
						iconBeginning={iconBeginning}
					>
						<Icon
							variation={'empty'}
							name={icon.name}
							width={iconWidth}
							height={iconHeight}
							color={color}
						/>
					</S.IconWrapper>
				)}
				<Text variation={textVariation} fontWeight={fontWeight} color={color}>
					{title}
				</Text>
			</S.Button>
		</S.Touch>
	)
}

ElButton.defaultProps = {
	variation: 'middle',
	type: 'default',
	title: '',
	icon: { name: '', position: 'start' },
	isDisable: false,
	onPress: () => console.log('button press')
}
ElButton.propTypes = {
	variation: PropTypes.string,
	type: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.object,
	isDisable: PropTypes.bool,
	onPress: PropTypes.func
}

export default ElButton
