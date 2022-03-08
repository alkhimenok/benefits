import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import Button from 'components/UI/button/Button'
import * as Styled from './styledOptionList'

const OptionsList = observer(() => {
	const scroll = useRef()
	const { optionList, focused } = useStore().filtration
	const { length } = optionList

	useEffect(() => {
		scrollToOption(
			optionList.reduce(
				(acc, { isFocused }, i) => (acc = isFocused ? i : acc),
				0
			)
		)
	}, [optionList])

	const scrollToOption = (index) => {
		scroll.current.scrollToIndex({ animated: true, index })
	}

	const handleOptionPress = (title) => {
		focused(title)
	}

	return (
		<Styled.OptionListScroll
			ref={scroll}
			data={optionList}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingEnd: 16 } /* intend for end */}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item, index }) => {
				return (
					<Styled.OptionListButtonWrapper isLast={index === length - 1}>
						<Button
							title={item.title}
							icon={item.icon}
							isPrimary={item.isFocused}
							onPress={() => handleOptionPress(item.title)}
						/>
					</Styled.OptionListButtonWrapper>
				)
			}}
		/>
	)
})

export default OptionsList
