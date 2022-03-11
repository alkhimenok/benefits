import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import ElButton from 'elements/ElButton'
import ElIcon from 'elements/ElIcon'
import UNITS from 'styles/units'
import COLORS from 'styles/colors'
import BORDERS from 'styles/borders'

const PtFilterBar = observer(() => {
	const scroll = useRef()
	const { top } = useSafeAreaInsets()
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
		<FilterBar insetsTop={top} insetsLeft={16}>
			<IconWrapper>
				<ElIcon
					variation={'middle'}
					name={'search'}
					width={'15px'}
					height={'15px'}
					color={COLORS.dark}
					backgroundColor={COLORS.neutral}
				/>
			</IconWrapper>
			<OptionList
				ref={scroll}
				data={optionList}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingEnd: 16 } /* intend for end */}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item, index }) => (
					<ButtonWrapper isLast={index === length - 1}>
						<ElButton
							variation={'middle'}
							type={item.isFocused ? 'primary' : 'default'}
							title={item.title}
							icon={item.icon}
							onPress={() => handleOptionPress(item.title)}
						/>
					</ButtonWrapper>
				)}
			/>
		</FilterBar>
	)
})

const FilterBar = styled.View`
	align-items: center;
	flex-direction: row;
	padding: ${({ insetsTop, insetsLeft }) =>
		`${insetsTop + parseInt(UNITS.baseX3)}px 0 ${
			UNITS.baseX3
		} ${insetsLeft}px`};
	border-bottom-color: ${COLORS.neutralTransparent};
	border-bottom-width: ${BORDERS.thin};
`
const IconWrapper = styled.View`
	padding: 0 ${UNITS.baseX2} 0 0;
`
const OptionList = styled.FlatList``
const ButtonWrapper = styled.View`
	padding: 0 ${({ isLast }) => (isLast ? 0 : `${UNITS.baseX2}`)} 0 0; // indent without first and last option
`

export default PtFilterBar
