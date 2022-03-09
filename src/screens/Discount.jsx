import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native-safe-area-context'
import Screen from 'components/common/Screen'
import FilterBar from 'components/filterBar/FilterBar'
import Card from 'components/card/Card'
import List from 'components/list/List'

const Discount = ({ navigation }) => {
	return (
		<Screen>
			<SafeAreaView style={{ flex: 1 }}>
				<FilterBar />
				<List navigation={navigation} />
			</SafeAreaView>
		</Screen>
	)
}

Discount.propTypes = {
	navigation: PropTypes.object
}

export default Discount
