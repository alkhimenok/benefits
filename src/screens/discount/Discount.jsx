import Screen from 'components/common/Screen'
import Fade from 'components/animations/Fade'
import FilterBar from 'components/filterBar/FilterBar'
import Card from 'components/card/Card'

const Discount = () => {
	return (
		<Fade>
			<Screen>
				<FilterBar />
				<Card
					variation={'full'}
					name={'odin'}
					title={'odin'}
					label={'clothe odin'}
					description={'lot of clothe odin'}
					// more
					isEmpty={false}
					isImportant={true}
					isFavorites={true}
					isContainsMore={true}
				/>
			</Screen>
		</Fade>
	)
}

export default Discount
