import React from 'react'

import Container from 'components/common/Container'
import Icon from 'components/UI/icon/Icon'
import FilterList from './filterList/FilterList'

import COLORS from 'constants/colors'

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
							isLarge={true}
							isStroke={true}
						/>
					</Styled.FilterBarIconWrapper>
					<Styled.FilterBarScroll
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						alwaysBounceHorizontal={true}
					>
						<FilterList />
					</Styled.FilterBarScroll>
				</Styled.FilterBarBody>
			</Container>
		</Styled.FilterBarWrapper>
	)
}

export default FilterBar
