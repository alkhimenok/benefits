import React from 'react'
import PropTypes from 'prop-types'
// import { SafeAreaView } from 'react-native-safe-area-context'
import PtScreen from 'patterns/PtScreen'
// import FilterBar from 'components/filterBar/FilterBar'
// import List from 'components/list/List'

const Discount = ({ navigation }) => {
	return (
		<PtScreen>
			<></>
			{/* <SafeAreaView style={{ flex: 1 }}> */}
			{/* <FilterBar /> */}
			{/* <List navigation={navigation} /> */}
			{/* </SafeAreaView> */}
		</PtScreen>
	)
}

Discount.propTypes = {
	navigation: PropTypes.object
}

export default Discount
