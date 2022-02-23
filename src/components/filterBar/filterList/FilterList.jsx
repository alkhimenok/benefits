import React from 'react'

import Button from 'components/UI/button/Button'

import { buttonList } from './buttonList'
import * as Styled from './styledFilterList'

const FilterList = () => {
	return (
		<Styled.FilterListWrapper>
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
					<Styled.FilterListButtonWrapper key={i} index={i}>
						<Button
							title={title}
							isImportant={isImportant}
							isFocused={isFocused}
							isDisabled={isDisabled}
							isWhite={isWhite}
							isLarge={isLarge}
							onPress={onPress}
						/>
					</Styled.FilterListButtonWrapper>
				)
			)}
		</Styled.FilterListWrapper>
	)
}

export default FilterList
