import Screen from 'components/common/Screen'
import Fade from 'components/animations/Fade'
import FilterBar from 'components/filterBar/FilterBar'
import Card from 'components/card/Card'

const Discount = () => {
	return (
		<Fade>
			<Screen>
				<FilterBar />
				<Card />
			</Screen>
		</Fade>
	)
}

export default Discount
