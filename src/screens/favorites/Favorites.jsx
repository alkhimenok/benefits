import { observer } from 'mobx-react-lite'
import { useStore } from 'providers/storeProvider'
import List from 'components/common/List'
import Screen from 'components/common/Screen'
import Fade from 'components/animations/Fade'
import EmptyFavorites from './emptyFavorites/EmptyFavorites'

const Favorites = observer(() => {
	const { favoritesList } = useStore().filtration

	return (
		<Fade>
			<Screen>
				<List
					data={favoritesList}
					renderItem={(item) => <></>}
					listEmptyComponent={<EmptyFavorites />}
					isHorizontal={true}
				/>
			</Screen>
		</Fade>
	)
})

export default Favorites
