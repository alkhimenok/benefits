import React from 'react'

import Container from 'components/common/Container'
import Button from 'components/UI/button/Button'
import Icon from 'components/UI/icon/Icon'

import COLORS from 'constants/colors'

import { buttonList } from './buttonList'
import * as Styled from './styledFilterBar'

const FilterBar = () => {
	return (
		<Styled.FilterBarWrapper>
			<Container>
				<Styled.FilterBarContent>
					<Icon
						name={'search'}
						width={15}
						height={15}
						color={COLORS.dark}
						backgroundColor={COLORS.neutral}
						isLarge={true}
						isStroke={true}
					/>
					<Styled.FilterBarScroll
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						alwaysBounceHorizontal={true}
					>
						<Styled.FilterBartList>
							{buttonList.map(
								(
									{
										title,
										isImportant,
										isFocused,
										isDisabled,
										isWhite,
										isLarge,
										onPress
									},
									i
								) => (
									<Styled.FilterBarButtonWrapper key={i}>
										<Button
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
