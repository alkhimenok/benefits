import React from 'react'
import Button from 'components/UI/button/Button'
import { View } from 'react-native'
import Container from 'components/common/Container'

const FilterBar = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<Container>
				<Button
					title='Все скидки'
					isImportant={false}
					isFocused={false}
					isDisabled={false}
					isWhite={false}
					isLarge={false}
					onPress={() => console.log('hello')}
				/>
			</Container>
		</View>
	)
}

export default FilterBar
