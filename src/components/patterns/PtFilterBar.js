import React from 'react'
import styled from 'styled-components/native'
import ElIcon from 'elements/ElIcon'
import UNITS from 'styles/units'
import FONTS from 'styles/fonts'
import COLORS from 'styles/colors'

const PtFilterBar = () => {
	return (
		<FilterBar>
			<IconWrapper>
				<ElIcon
					variation={'middle'}
					name={'search'}
					width={'15px'}
					height={'15px'}
					color={COLORS.dark}
					backgroundColor={COLORS.neutral}
				/>
			</IconWrapper>
			{/* <OptionList /> */}
		</FilterBar>
	)
}

const FilterBar = styled.View`
	/* margin-top: 100px; */

	background-color: red;
`
const IconWrapper = styled.View``

export default PtFilterBar
