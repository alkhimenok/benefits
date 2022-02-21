import React from 'react'

import Container from 'components/common/Container'
import Button from 'components/UI/button/Button'

import { buttonList } from './buttonList'
import * as Styled from './styledFilterBar'

import Icon from 'components/UI/icon/Icon'

const FilterBar = () => {
	return (
		<Styled.FilterBarWrapper>
			<Container>
				<Styled.FilterBarContent>
					<Icon iconName={'search'} />
					<Styled.FilterBarScroll
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						alwaysBounceHorizontal={true}
					>
						<Styled.FilterBartList>
							{buttonList.map(
								({
									id,
									title,
									isImportant,
									isFocused,
									isDisabled,
									isWhite,
									isLarge,
									onPress
								}) => (
									<Styled.FilterBarButtonWrapper key={id}>
										<Button
											id={id}
											title={title}
											isImportant={isImportant}
											isFocused={isFocused}
											isDisabled={isDisabled}
											isWhite={isWhite}
											isLarge={isLarge}
											onPress={onPress}
										/>
									</Styled.FilterBarButtonWrapper>
								)
							)}
						</Styled.FilterBartList>
					</Styled.FilterBarScroll>
				</Styled.FilterBarContent>
			</Container>
		</Styled.FilterBarWrapper>
	)
}

export default FilterBar
