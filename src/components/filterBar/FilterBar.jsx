import React from 'react'
import Icon from 'components/UI/icon/Icon'
import OptionList from './optionList/OptionList'
import COLORS from 'globalStyles/colors'
import * as Styled from './styledFilterBar'

const FilterBar = () => {
	return (
		<Styled.FilterBarWrapper style={{ paddingStart: 16 } /* intend for start */}>
			<Styled.FilterBarBody>
				<Styled.FilterBarIconWrapper>
					<Icon
						name={'search'}
						width={15}
						height={15}
						color={COLORS.dark}
						backgroundColor={COLORS.neutral}
						isStroke={true}
					/>
				</Styled.FilterBarIconWrapper>
				<OptionList />
			</Styled.FilterBarBody>
		</Styled.FilterBarWrapper>
	)
}

export default FilterBar
