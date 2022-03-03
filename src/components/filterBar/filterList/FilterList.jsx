import React from 'react'
import { observer } from 'mobx-react-lite'

import Button from 'components/UI/button/Button'

import filtration from 'store/Filtration'

import * as Styled from './styledFilterList'

const FilterList = observer(() => {
	return (
		<Styled.FilterListWrapper>
			{filtration.list.map(
				(
					{ title, isImportant, isFocused, isDisabled },
					i
				) => (
					<Styled.FilterListButtonWrapper key={i} index={i}>
						<Button
							title={title}
							isImportant={isImportant}
							isFocused={isFocused}
							isDisabled={isDisabled}
							onPress={() => filtration.focused(title)}
						/>
					</Styled.FilterListButtonWrapper>
				)
			)}
		</Styled.FilterListWrapper>
	)
})

export default FilterList
