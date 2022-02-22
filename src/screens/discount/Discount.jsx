import React from 'react'

import List from 'components/list/List'
import Screen from 'components/common/Screen'
import FilterBar from 'components/filterBar/FilterBar'

// import Card from 'components/card/Card'

const Discount = () => {
	return (
		<Screen>
			<FilterBar />
			<List />
		</Screen>
	)
}

export default Discount
