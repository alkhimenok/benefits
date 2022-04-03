import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import List from 'components/common/List'
import Screen from 'components/common/Screen'
import Container from 'components/common/Container'
import Fade from 'components/animations/Fade'
import Card from 'components/card/Card'
import EmptyFavorites from './emptyFavorites/EmptyFavorites'

const Favorites = observer(() => {
	const { favoritesList } = useStore().filtration

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
								isEmpty={item.isEmpty}
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
