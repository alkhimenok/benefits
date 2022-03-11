import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { underlayColorList } from 'helpers/constants'
import ElIcon from './ElIcon'
import ElText from './ElText'
import UNITS from 'styles/units'
import WEIGHT from 'styles/weight'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'
import TRANSPARENCY from 'styles/transparency'

const ElButton = ({ variation, type, title, icon, isDisable, onPress }) => {
	const isContainsIcon = !!icon.name
	const iconBeginning = icon.position !== 'end'
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
	const underlayColor = underlayColorList[backgroundColor]

	return (
		<Touch
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
			<Button iconBeginning={iconBeginning}>
				{isContainsIcon && (
					<IconWrapper
						pointerEvents={'none'}
						//
						iconBeginning={iconBeginning}
					>
						<ElIcon
							variation={'empty'}
							name={icon.name}
							width={iconWidth}
							height={iconHeight}
							color={color}
						/>
					</IconWrapper>
				)}
				<ElText variation={textVariation} fontWeight={fontWeight} color={color}>
					{title}
				</ElText>
			</Button>
		</Touch>
	)
}

const Touch = styled.TouchableHighlight`
	align-items: center;
	justify-content: center;
	height: ${({ height }) => height};
	padding: 0 ${({ paddingHorizontal }) => paddingHorizontal};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border: ${({ border }) => border};
	border-radius: ${BORDERS.radiusSuperellipse};
	opacity: ${({ opacity }) => opacity};
`
const Button = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: ${({ iconBeginning }) =>
		iconBeginning ? 'row' : 'row-reverse'};
`
const IconWrapper = styled.View`
	${({ iconBeginning }) =>
		`margin-${iconBeginning ? 'right' : 'left'}: ${UNITS.baseX2}`}
`

const getButtonOptions = (variation, type, isDisable) => {
	const variationOptions = {
		large: {
			height: UNITS.baseX12,
			paddingHorizontal: UNITS.baseX4,
			iconWidth: '19px',
			iconHeight: '19px',
			textVariation: 'text1',
			fontWeight: WEIGHT.medium
		},
		middle: {
			height: UNITS.baseX10,
			paddingHorizontal: UNITS.baseX3,
			iconWidth: '16px',
			iconHeight: '16px',
			textVariation: 'text2',
			fontWeight: WEIGHT.semiBold
		},
		small: {
			height: UNITS.baseX8,
			paddingHorizontal: UNITS.baseX3,
			iconWidth: '15px',
			iconHeight: '15px',
			textVariation: 'text2',
			fontWeight: WEIGHT.semiBold
		}
	}[variation]

	const typeOptions = {
		primary: {
			color: COLORS.light,
			backgroundColor: COLORS.primary,
			border: 'none'
		},
		secondary: {
			color: COLORS.light,
			backgroundColor: COLORS.secondary,
			border: 'none'
		},
		contour: {
			color: COLORS.dark,
			backgroundColor: COLORS.light,
			border: `${BORDERS.thin} ${COLORS.neutralDark}`
		},
		default: {
			color: COLORS.dark,
			backgroundColor: COLORS.neutral,
			border: 'none'
		},
		empty: {
			color: COLORS.primary,
			backgroundColor: COLORS.transparent,
			border: 'none'
		}
	}[type]

	const opacity = isDisable ? TRANSPARENCY.strong : TRANSPARENCY.visible

	return { ...variationOptions, ...typeOptions, opacity }
}

ElButton.defaultProps = {
	variation: 'middle',
	type: 'default',
	title: '',
	icon: { name: '', position: 'start' },
	isDisable: false,
	onPress: () => console.log('button press')
}
ElButton.prototype = {
	variation: PropTypes.string,
	type: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.object,
	isDisable: PropTypes.bool,
	onPress: PropTypes.func
}

export default ElButton
