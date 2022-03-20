import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import List from 'components/common/List'
import Button from 'components/UI/button/Button'
import Icon from 'components/UI/icon/Icon'
import { UNITS, calculateBase } from 'styles/units'
import COLORS from 'styles/colors'
import * as S from './styledFilterBar'

const FilterBar = observer(() => {
	const { optionList, focused } = useStore().filtration
	const { top } = useSafeAreaInsets()
	const { length } = optionList

	return (
		<S.FilterBarWrapper insetsTop={top} insetsLeft={UNITS.baseX4}>
			<S.FilterBarIconWrapper>
				<Icon
					variation={'middle'}
					name={'search'}
					width={calculateBase(15, true)}
					height={calculateBase(15, true)}
					color={COLORS.dark}
					backgroundColor={COLORS.neutral}
				/>
			</S.FilterBarIconWrapper>
			<List
				data={optionList}
				renderItem={({ title, icon, isFocused }, index, scrollToItem) => (
					<S.FilterBarOptionWrapper isLast={index === length - 1}>
						<Button
							variation={'middle'}
							type={isFocused ? 'primary' : 'default'}
							title={title}
							icon={icon}
							onPress={() => {
								focused(title)
								scrollToItem(index)
							}}
						/>
					</S.FilterBarOptionWrapper>
				)}
				contentContainerStyle={{ paddingEnd: UNITS.baseX4 }}
				isHorizontal={true}
			/>
		</S.FilterBarWrapper>
	)
})

export default FilterBar
