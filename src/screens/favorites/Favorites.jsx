import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import Fade from 'components/animations/Fade'
import Screen from 'components/common/Screen'
import Container from 'components/common/Container'
import List from 'components/common/List'
import Card from 'components/card/Card'
import EmptyFavorites from './emptyFavorites/EmptyFavorites'

const Favorites = observer(() => {
	const { data } = useStore().filtration

	const favoritesList = data
		.map(({ data }) => data)
		.flat()
		.filter((item) => item.isFavorites)

	return (
		<Fade>
			<Screen>
				<Container>
					<List
						data={favoritesList}
						renderItem={(item) => (
							<Card
								variation={'full'}
								name={item.name}
								title={item.title}
								label={item.label}
								description={item.description}
								more={item.more}
								isImportant={item.isImportant}
								isFavorites={item.isFavorites}
								isContainsMore={item.isContainsMore}
							/>
						)}
						listEmptyComponent={<EmptyFavorites />}
						isHorizontal={true}
					/>
				</Container>
			</Screen>
		</Fade>
	)
})

export default Favorites
