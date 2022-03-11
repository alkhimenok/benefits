import React from 'react'
import PropTypes from 'prop-types'
import ElScreen from 'elements/ElScreen'
import PtFilterBar from 'patterns/PtFilterBar'

const Discount = ({ navigation }) => {
	return (
		<ElScreen>
			<PtFilterBar />
		</ElScreen>
	)
}

Discount.propTypes = {
	navigation: PropTypes.object
}

export default Discount
