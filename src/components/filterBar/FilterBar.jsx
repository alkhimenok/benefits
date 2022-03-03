import React from 'react'

import Container from 'components/common/Container'
import Icon from 'components/UI/icon/Icon'
import FilterList from './filterList/FilterList'

import COLORS from 'globalStyles/colors'

import * as Styled from './styledFilterBar'

const FilterBar = () => {
	return (
		<Styled.FilterBarWrapper>
			<Container>
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
					<FilterList />
				</Styled.FilterBarBody>
			</Container>
		</Styled.FilterBarWrapper>
	)
}

export default FilterBar
