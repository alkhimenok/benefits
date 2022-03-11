import React from 'react'
import PropTypes from 'prop-types'
import ElScreen from 'elements/ElScreen'
import PtFilterBar from 'patterns/PtFilterBar'
import TmList from 'templates/TmList'

const Discount = ({ navigation }) => {
	return (
		<ElScreen>
			<PtFilterBar />
			<TmList navigation={navigation} />
		</ElScreen>
	)
}

Discount.propTypes = {
	navigation: PropTypes.object
}

export default Discount
