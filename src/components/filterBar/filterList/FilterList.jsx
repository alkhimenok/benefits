import React, { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import Button from 'components/UI/button/Button'
import { useStore } from 'providers/storeProvider'
import * as Styled from './styledFilterList'

const FilterList = observer(() => {
	const { optionList, focused } = useStore().filtration

	const scrollBar = useRef()

	return (
		<Styled.FilterListScroll
			ref={scrollBar}
			data={optionList}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			alwaysBounceHorizontal={true}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item, index }) => {
				return (
					<Styled.FilterListButtonWrapper index={index}>
						<Button
							title={item.title}
							icon={{ ...item.icon }}
							isPrimary={item.isFocused}
							isDisabled={item.isDisabled}
							onPress={() => {
								scrollBar.current.scrollToIndex({ animated: true, index })
								focused(item.title)
							}}
						/>
					</Styled.FilterListButtonWrapper>
				)
			}}
		/>
	)
})

export default FilterList
