import React from 'react'

import Screen from 'components/common/Screen'
import FilterBar from 'components/filterBar/FilterBar'
import List from 'components/list/List'

const Discount = ({ navigation }) => {
	return (
		<Screen>
			<FilterBar />
			<List navigation={navigation} />
		</Screen>
	)
}

export default Discount
