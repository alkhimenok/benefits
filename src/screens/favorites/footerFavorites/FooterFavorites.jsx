import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { useStore } from 'providers/storeProvider'
import Button from 'components/UI/button/Button'
import { discountStack } from 'constants/navigationRoutes'
import * as S from './styledFooterFavorites'

const FooterFavorites = ({ list }) => {
	const navigation = useNavigation()
	const { toggleFavorites } = useStore().filtration

	const handleMoveToDiscount = () => {
		navigation.navigate(discountStack)
	}

	const handleUncheckFavorites = () => {
		list.map(({ name }) => toggleFavorites(name))
		// list.map(({ name }, i) => setTimeout(() => toggleFavorites(name), 300 * i))
	}

	return (
		<S.FooterFavoritesWrapper>
			<S.FooterFavoritesButtonWrapper>
				<Button
					variation={'large'}
					type={'primary'}
					title={'К скидкам'}
					onPress={handleMoveToDiscount}
				/>
			</S.FooterFavoritesButtonWrapper>
			<S.FooterFavoritesButtonWrapper isLast={true}>
				<Button
					variation={'large'}
					type={'contour'}
					title={'Убрать все из избранного'}
					onPress={handleUncheckFavorites}
				/>
			</S.FooterFavoritesButtonWrapper>
		</S.FooterFavoritesWrapper>
	)
}

FooterFavorites.defaultProps = {
	list: []
}
FooterFavorites.propTypes = {
	list: PropTypes.array
}

export default FooterFavorites
