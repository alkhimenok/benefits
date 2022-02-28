import React from 'react'
import { observer } from 'mobx-react-lite'

import Button from 'components/UI/button/Button'

import filter from '../../../store/filter/filter'

import * as Styled from './styledFilterList'

const FilterList = observer(() => {
	return (
		<Styled.FilterListWrapper>
			{filter.filterList.map(
				(
					{ id, title, isImportant, isFocused, isDisabled, isWhite, isLarge },
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
							onPress={() => filter.focused(id)}
						/>
					</Styled.FilterListButtonWrapper>
				)
			)}
		</Styled.FilterListWrapper>
	)
})

export default FilterList
