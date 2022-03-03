import React from 'react'
import { observer } from 'mobx-react-lite'

import Button from 'components/UI/button/Button'

import { useStore } from 'providers/storeProvider'

import * as Styled from './styledFilterList'

const FilterList = observer(() => {
	const { optionList, focused } = useStore().filtration

	return (
		<Styled.FilterListWrapper>
			{optionList.map(({ title, isImportant, isFocused, isDisabled }, i) => (
				<Styled.FilterListButtonWrapper key={i} index={i}>
					<Button
						title={title}
						isImportant={isImportant}
						isFocused={isFocused}
						isDisabled={isDisabled}
						onPress={() => focused(title)}
					/>
				</Styled.FilterListButtonWrapper>
			))}
		</Styled.FilterListWrapper>
	)
})

export default FilterList
