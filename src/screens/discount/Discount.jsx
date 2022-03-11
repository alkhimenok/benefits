import React from 'react'
import PropTypes from 'prop-types'
import ElScreen from 'elements/ElScreen'
import PtFilterBar from 'patterns/PtFilterBar'
import PtCard from 'components/patterns/PtCard'

const Discount = () => {
	return (
		<ElScreen>
			<PtFilterBar />
			<PtCard
				variation={'middle'}
				name={'odin'}
				title={'hello'}
				description={'hello hello hello hello hello hello'}
				label={'-20%'}
				more={
					'hello hello hello hello hello hello hello hello hello hello hello hello hello hello'
				}
				isImportant={true}
				isContainsMore={false}
				isFavorites={true}
			/>
		</ElScreen>
	)
}

Discount.propTypes = {
	navigation: PropTypes.object
}

export default Discount
