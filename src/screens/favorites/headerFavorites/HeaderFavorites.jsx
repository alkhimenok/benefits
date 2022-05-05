import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Text from 'components/UI/text/Text'
import WEIGHT from 'styles/weight'
import * as S from './styledHeaderFavorites'

const HeaderFavorites = () => {
	const { top } = useSafeAreaInsets()

	return (
		<S.HeaderFavoritesWrapper insetsTop={top}>
			<Text variation={'h1'} fontWeight={WEIGHT.bold}>
				Избранное
			</Text>
		</S.HeaderFavoritesWrapper>
	)
}

export default HeaderFavorites
