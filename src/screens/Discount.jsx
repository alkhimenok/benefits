import React from 'react'
import PropTypes from 'prop-types'
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

Discount.propTypes = {
	navigation: PropTypes.object
}

export default Discount
