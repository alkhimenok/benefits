import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import Fade from 'components/animations/Fade'
import Screen from 'components/common/Screen'
import Container from 'components/common/Container'
import List from 'components/common/List'
import RenderItem from './renderItem/RenderItem'
import HeaderFavorites from './headerFavorites/HeaderFavorites'
import FooterFavorites from './footerFavorites/FooterFavorites'
import EmptyFavorites from './emptyFavorites/EmptyFavorites'

const Favorites = observer(() => {
	const { data } = useStore().filtration

	const favoritesList = data
		.map(({ data }) => data)
		.flat()
		.filter((item) => item.isFavorites)

	const handleRefresh = () => {
		console.log('refresh')
	}

	return (
		<Fade>
			<Screen>
				<Container>
					<List
						data={favoritesList}
						renderItem={(item) => <RenderItem item={item} />}
						listHeader={<HeaderFavorites />}
						listFooter={<FooterFavorites />}
						listEmpty={<EmptyFavorites />}
						onRefresh={handleRefresh}
					/>
				</Container>
			</Screen>
		</Fade>
	)
})

export default Favorites
