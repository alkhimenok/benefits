import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import ElIcon from './ElIcon'
import ElText from './ElText'
import UNITS from 'styles/units'
import COLORS from 'styles/colors'

const ElLabel = ({ title, icon, isLarge }) => {
	const isContainsIcon = !!icon.name
	const iconBeginning = icon.position !== 'end'
	const { height, paddingHorizontal } = getLabelOptions(isLarge, isContainsIcon)

	return (
		<Label
			iconBeginning={iconBeginning}
			heightSize={height}
			paddingHorizontalSize={paddingHorizontal}
		>
			{isContainsIcon && (
				<IconWrapper iconBeginning={iconBeginning}>
					<ElIcon
						variation={'empty'}
						name={icon.name}
						width={'16px'}
						height={'16px'}
						color={COLORS.light}
					/>
				</IconWrapper>
			)}
			<ElText
				variation={isLarge ? 'text2' : 'text3'}
				weight={600}
				color={COLORS.light}
			>
				{title}
			</ElText>
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

const getLabelOptions = (isLarge, isContainsIcon) => {
	return {
		height:
			(isLarge && UNITS.baseX10) ||
			(isContainsIcon && UNITS.baseX8) ||
			UNITS.baseX6,
		paddingHorizontal: (isLarge && UNITS.baseX4) || UNITS.baseX2
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
