import React from 'react'
import Button from 'components/UI/button/Button'
import { View } from 'react-native'
import Container from 'components/common/Container'

const FilterBar = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<Container>
				<Button
					title='Еда и напитки'
					isFocused={true}
					isDisabled={true}
					isLarge={true}
					ishWhite={true}
				/>
			</Container>
			<View style={{ alignItems: 'center' }}>
				<Button title='Все скидки' isFocused={false} isDisabled={false} />
				<Button title='Все скидки' isFocused={false} isDisabled={true} />
				<Button title='Все скидки' isFocused={true} isDisabled={false} />
				<Button title='Все скидки' isFocused={true} isDisabled={true} />
				<Button
					title='Все скидки'
					isFocused={true}
					isDisabled={false}
					isLarge={true}
				/>
				<Button
					title='Все скидки'
					isFocused={true}
					isDisabled={false}
					isLarge={true}
					isWithWhiteBackground={true}
				/>
			</View>
		</View>
	)
}

export default FilterBar
