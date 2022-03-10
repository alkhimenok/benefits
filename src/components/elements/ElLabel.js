import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import UNITS from 'styles/units'
import FONTS from 'styles/fonts'
import COLORS from 'styles/colors'

const ElLabel = ({ title, icon, isLarge }) => {
	const isContainsIcon = !!icon.name
	const iconBeginning = icon.position === 'start'
	const { height, paddingHorizontal, fontSize } = getLabelOptions(
		isLarge,
		isContainsIcon
	)

	return (
		<Label
			iconBeginning={iconBeginning}
			heightSize={height}
			paddingHorizontalSize={paddingHorizontal}
		>
			{isContainsIcon && (
				<IconWrapper iconBeginning={iconBeginning}>icon</IconWrapper>
			)}
			<Title fontSize={fontSize}>{title}</Title>
		</Label>
	)
}

const Label = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: ${({ iconBeginning }) =>
		iconBeginning ? 'row' : 'row-reverse'};
	height: ${({ heightSize }) => heightSize};
	padding: 0 ${({ paddingHorizontalSize }) => paddingHorizontalSize};
	background-color: ${COLORS.secondary};
`
const IconWrapper = styled.Text`
	${({ iconBeginning }) =>
		`margin-${iconBeginning ? 'right' : 'left'}: ${UNITS.baseX2}`}
`
const Title = styled.Text`
	font-family: ${FONTS.primarySemiBold};
	font-size: ${({ fontSize }) => fontSize};
	color: ${COLORS.light};
`

const getLabelOptions = (isLarge, isContainsIcon) => {
	return {
		height:
			(isLarge && UNITS.baseX10) ||
			(isContainsIcon && UNITS.baseX8) ||
			UNITS.baseX6,
		paddingHorizontal: (isLarge && UNITS.baseX4) || UNITS.baseX2,
		fontSize: (isLarge && UNITS.baseX3_5) || UNITS.baseX3
	}
}

ElLabel.defaultProps = {
	title: '',
	icon: { name: '', position: 'start' },
	isLarge: false
}
ElLabel.prototype = {
	title: PropTypes.string,
	icon: PropTypes.object,
	isLarge: PropTypes.bool
}

export default ElLabel