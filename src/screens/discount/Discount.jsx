import React from 'react'
import Screen from 'components/common/Screen'
import Fade from 'components/animations/Fade'
import FilterBar from 'components/filterBar/FilterBar'

const Discount = () => {
	return (
		<Fade>
			<Screen>
				<FilterBar />
			</Screen>
		</Fade>
	)
}

export default Discount
